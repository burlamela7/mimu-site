import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/"><a className="text-xl tracking-wide">mimu</a></Link>
        <div className="space-x-6 text-sm">
          <Link href="/about"><a>About</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </div>
      </div>
    </nav>
  );
}
