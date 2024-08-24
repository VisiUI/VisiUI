import Link from "next/link";
import Button from "@/ui-components/Button";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center text-center h-screen bg-gradient-to-r from-purple-500 to-blue-800">
      <div className="notFoundTextContainer">
        <h1 className="text-5xl font-bold">404 - Page Not Found</h1>
        <p className="mt-6 mx-auto max-w-max">
          Sorry, the page you&apos;re looking for doesn&apos;t exist. You might have
          entered an incorrect address, or the page may have been moved.
        </p>
        <Link href="/">
            <Button
              text="Homepage"
              margin="40px"
              backgroundColor="#fff"
              padding="15px 20px"
              borderRadius="40px"
              border="none"
              color="#000"
            />
        </Link>
      </div>
    </div>
  );
}
