import { Joystick, Rocket, Monitor, Users, Sparkles } from "lucide-react"

const Hero = () => {
  return (
    <section className="hidden sm:flex bg-[#0d0d14] py-6 px-4 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-row items-center gap-6 md:gap-12 w-full justify-between">
        
        {/* Left: Logo + Welcome */}
        <div className="flex items-center gap-3">
          <div className="bg-purple-600 text-white w-10 h-10 flex items-center justify-center rounded-lg">
            🎮
          </div>
          <h2 className="text-white font-bold text-base lg:text-lg">
            Welcome to GameZone
          </h2>
        </div>

        {/* Right: Features */}
        <div className="flex flex-row gap-6 md:gap-10 text-gray-200 text-xs lg:text-base ">
          <div className="flex items-center gap-2">
            <Joystick className="text-purple-500 w-5 h-5" />
            <span>4000+ games</span>
          </div>

          <div className="flex items-center gap-2">
            <Rocket className="text-purple-500 w-5 h-5" />
            <span>No install needed</span>
          </div>

          <div className="flex items-center gap-2">
            <Monitor className="text-purple-500 w-5 h-5" />
            <span>On any device</span>
          </div>

          <div className="flex items-center gap-2">
            <Users className="text-purple-500 w-5 h-5" />
            <span>Play with friends</span>
          </div>

          <div className="flex items-center gap-2">
            <Sparkles className="text-purple-500 w-5 h-5" />
            <span>All for free</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
