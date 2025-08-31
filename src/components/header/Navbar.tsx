import Link from "next/link";

 const Navbar = () => {
  return (
    <header
      className="flex justify-between items-center px-6 py-4 border-b border-gray-800 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <Link href={"/"}>
        <h1 className="text-2xl font-bold">GameZone</h1>
      </Link>
      <nav className="space-x-6">
        <Link href="/games" className="hover:text-yellow-400">Games</Link>
        <Link href="/leaderboard" className="hover:text-yellow-400">Leaderboard</Link>
        <Link href="/profile" className="hover:text-yellow-400">Profile</Link>
        <Link href="/login" className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400">
          Login
        </Link>
      </nav>
    </header>
  );
}

export default Navbar