import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto mt-16 flex h-screen flex-col items-center">
      <p className="py-2 text-center text-xl font-semibold">404 | PAGE NOT FOUND</p>
      <button>
        <Link href="/">Home</Link>
      </button>
    </main>
  );
}
