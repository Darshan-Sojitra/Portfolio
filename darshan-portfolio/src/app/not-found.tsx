import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center">
            <h2 className="text-2xl font-bold">404 - Page Not Found</h2>
            <p className="mt-2 text-muted-foreground">
                The page you are looking for does not exist.
            </p>
            <Link
                href="/"
                className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
                Return Home
            </Link>
        </div>
    );
}
