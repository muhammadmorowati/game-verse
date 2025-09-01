import Link from "next/link";

 const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6">
      <h2 className="text-5xl font-extrabold mb-6">Play. Compete. Win.</h2>
      <p className="text-lg text-gray-300 max-w-xl mb-8">
        Join our online game platform and challenge players worldwide. Unlock achievements, climb leaderboards, and become the ultimate champion.
      </p>
      <Link
        href="/games"
        className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-xl hover:bg-yellow-400"
      >
        Start Playing
      </Link>
    </section>
  );
}

export default Hero
