import Link from "next/link"
import { usePathname } from "next/navigation"
import { SidebarItemProps } from "./SidebarItems"



export const SidebarItem = (props: SidebarItemProps) => {
    
    const { icon: Icon, label, href } = props
    const pathname = usePathname()
    const isActive = pathname === href || pathname.startsWith(href + "/")
    
    return (
        <Link 
            href={href}
            className=
                {`flex items-center gap-3 p-2 rounded-md transition-colors
                hover:bg-[#1a1a24]
        ${isActive ? "bg-[1f1f2e] text-purple-400" : "text-gray-300"}`}
            >
            <Icon className="w-6 h-6 shrink-0" />
    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {label}
    </span>
        </Link>
    )

}