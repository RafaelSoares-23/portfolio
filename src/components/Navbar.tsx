import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-gray-900 text-white">
      <Link href="/" className="font-bold text-lg">
        Rafael Soares
      </Link>
      <div className="flex gap-4">
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
