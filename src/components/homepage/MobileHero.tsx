import { Snail } from "lucide-react"

const MobileHero = () => {
  return (
    <section className="flex sm:hidden px-4 py-6">
      <div className="w-full bg-gradient-to-r from-indigo-800 via-purple-700 to-indigo-900 rounded-2xl p-4 flex items-center justify-between shadow-lg">
        
        {/* Left: Text */}
        <div className="text-white flex flex-col gap-2">
          <p className="text-sm font-medium">
            Save your progress with a free account
          </p>
          <button className="bg-white text-indigo-700 font-semibold px-4 py-1 rounded-lg text-sm hover:bg-gray-100 transition">
            Sign up
          </button>
        </div>

        {/* Right: Icon / Image */}
        <div className="flex-shrink-0">
          <Snail className="w-16 h-16 text-indigo-200" />
        </div>
      </div>
    </section>
  )
}

export default MobileHero
