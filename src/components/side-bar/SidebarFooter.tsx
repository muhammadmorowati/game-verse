import { Globe, Mail, Github, Linkedin, Youtube, Apple, Play } from "lucide-react"

const SidebarFooter = () => {

  const currentYear = new Date().getFullYear()

  return (
    <div className="mt-auto border-t border-gray-800 pt-4 space-y-4">
      {/* Contact */}
      <button
        className="w-full flex items-center justify-center gap-2 bg-purple-600
         hover:bg-purple-700 text-white font-semibold py-2 rounded-xl"
      >
        <Mail className="w-4 h-4" />
        Contact us
      </button>

      {/* Language Selector */}
      <div
        className="flex items-center justify-between bg-transparent border
         border-gray-700 px-3 py-2 rounded-lg text-sm text-white cursor-pointer"
      >
        <span>English</span>
        <Globe className="w-4 h-4" />
      </div>

      {/* Links */}
      <ul className="text-gray-300 text-sm space-y-2">
        <li>About</li>
        <li>Developers</li>
        <li>Kids site</li>
        <li>Jobs</li>
        <li>Info for parents</li>
        <li>Terms & conditions</li>
        <li>Privacy</li>
        <li>All games</li>
      </ul>

      {/* Social Icons */}
      <div className="flex items-center gap-3 pt-2">
        <div
          className="p-2 rounded-full border border-gray-600 hover:bg-gray-700 cursor-pointer"
        >
          <Github className="w-4 h-4 text-gray-300" />
        </div>
        <div
          className="p-2 rounded-full border border-gray-600 hover:bg-gray-700 cursor-pointer"
        >
          <Linkedin className="w-4 h-4 text-gray-300" />
        </div>
        <div
          className="p-2 rounded-full border border-gray-600 hover:bg-gray-700 cursor-pointer"
        >
          <Youtube className="w-4 h-4 text-gray-300" />
        </div>
        <div
          className="p-2 rounded-full border border-gray-600 hover:bg-gray-700 cursor-pointer"
        >
          <Play className="w-4 h-4 text-gray-300" />
        </div>
        <div
          className="p-2 rounded-full border border-gray-600 hover:bg-gray-700 cursor-pointer"
        >
          <Apple className="w-4 h-4 text-gray-300" />
        </div>
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-500 pt-2">
        © {currentYear} CrazyGames
      </p>
    </div>
  )
}

export default SidebarFooter
