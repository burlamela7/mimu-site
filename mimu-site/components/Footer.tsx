export default function Footer(){
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} mimu — All Rights Reserved
      </div>
    </footer>
  );
}
