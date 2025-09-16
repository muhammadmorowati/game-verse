"use client"

import { Home, Flame, Star, Pin } from "lucide-react"
import { useState } from "react"
import { SidebarItem } from "./SidebarItem"
import { items } from "./SidebarItems"



export const Sidebar = () => {
    
    return (
        <aside
        className=
        {
          `hidden lg:block group fixed left-0 top-16 h-[calc(100vh-4rem)] bg-[#0d0d14] text-white
           transition-all duration-300 w-16 hover:w-40`
        }
            
        >
      {/* Navigation */}
      <nav className="flex flex-col gap-2 py-2 pl-2 group-hover:overflow-y-auto h-[calc(100%-40px)]">
        {items.map((item) => (
          <SidebarItem key={item.label} {...item} />
        ))}
      </nav>
                </aside >
    )
}