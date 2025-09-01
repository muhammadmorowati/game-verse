 const FeaturedGames = () => {
  return (
    <section className="px-6 py-16">
      <h3 className="text-3xl font-bold mb-10 text-center">Popular Games</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <img src="/games/squid.png" alt="Squid Game" className="rounded-xl mb-4"/>
          <h4 className="text-xl font-semibold">Squid Game</h4>
          <p className="text-gray-400 text-sm mt-2">Test your luck and skills in survival challenges.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <img src="/games/chess.png" alt="Chess" className="rounded-xl mb-4"/>
          <h4 className="text-xl font-semibold">Chess</h4>
          <p className="text-gray-400 text-sm mt-2">Outsmart your opponents in the classic strategy game.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <img src="/games/cards.png" alt="Card Game" className="rounded-xl mb-4"/>
          <h4 className="text-xl font-semibold">Card Duel</h4>
          <p className="text-gray-400 text-sm mt-2">Play head-to-head card battles with friends.</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturedGames
