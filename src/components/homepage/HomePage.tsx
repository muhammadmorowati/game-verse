"use client"
import FeaturedGames from "./FeaturedGames"
import Hero from "./Hero"
import MobileHero from './MobileHero';


const HomePage = () => {
    return (
        <>
        <Hero />
        <MobileHero />
      <FeaturedGames />
        </>
    )
}

export default HomePage