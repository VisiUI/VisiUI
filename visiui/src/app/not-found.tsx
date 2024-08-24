import Link from "next/link";
import Button from "@/ui-components/Button";
import "./not-found.css";

export default function NotFound() {
  return (
    <div className="notFoundContainer">
      <div className="notFoundTextContainer">
        <h1>404 - Page Not Found</h1>
        <p>
          Sorry, the page you're looking for doesn't exist. You might have
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
