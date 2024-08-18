type Destructor = () => any;
type Handler<T> = (value: T) => Destructor | undefined | void;
type Handle<T> = {
    handler: Handler<T>
    dispose: Destructor | undefined | void
}

class Binding<T> {
    endpoint: Endpoint<T>
    handles: Array<Handle<T>>

    constructor(endpoint: Endpoint<T>) {
        this.endpoint = endpoint;
        this.handles = [];
        this.dispose = this.dispose.bind(this);
        this.onSet = this.onSet.bind(this);
        this.apply = this.apply.bind(this);
        this.set = this.set.bind(this);
    }

    dispose() {
        for (let handle of this.handles) if (handle.dispose) handle.dispose();
        this.endpoint.bindings.splice(this.endpoint.bindings.indexOf(this), 1);
    }

    onSet(handler: Handler<T>): Destructor {
        let handle: Handle<T> = { handler };
        this.handles.push(handle);
        if (this.endpoint.initialized && this.endpoint.value) handle.dispose = handler(this.endpoint.value);
        return () => {
            if (handle.dispose) handle.dispose();
            this.handles.splice(this.handles.indexOf(handle), 1);
        }
    }

    apply(value: T) {
        for (let handle of this.handles) {
            if (handle.dispose) handle.dispose();
            handle.dispose = handle.handler(value);
        }
    }

    set(value: T) {
        this.endpoint.set(value, this);
    }
}

export default class Endpoint<T> {
    bindings: Array<Binding<T>>
    value: T | undefined
    initialized: boolean

    constructor(props: { value?: T }) {
        this.bindings = [];
        this.value = props.value;
        this.initialized = props.value != undefined;
        this.dispose = this.dispose.bind(this);
        this.bind = this.bind.bind(this);
        this.set = this.set.bind(this);
        this.onSet = this.onSet.bind(this);
    }

    dispose() {
        for (let binding of this.bindings) binding.dispose();
    }

    bind(): Binding<T> {
        let binding = new Binding(this);
        this.bindings.push(binding);
        return binding;
    }

    set(value: T, ignore: Binding<T>) {
        if (value == this.value) return;
        this.value = value;
        this.initialized = true;
        for (let binding of this.bindings) {
            if (binding == ignore) continue;
            binding.apply(value);
        }
    }

    onSet(handler: Handler<T>): Destructor {
        let binding = this.bind();
        let dispose = binding.onSet(handler);
        return () => {
            dispose();
            binding.dispose();
        }
    }
}
