import { Home, Flame, Star, Clock4, PackagePlus, RefreshCcw, Gitlab, Users, UsersRound, Swords, Compass, Bike, Car, Club, Dice5, MousePointerClick, Gamepad2, ShipWheel, PersonStanding, DoorClosed, Zap, BowArrow, Ghost } from "lucide-react"


export type SidebarItemProps = {
  icon: React.ComponentType<{ className?: string }>
    label: string
    href: string
}

export const items = [
  { icon: Home, label: "Home", href: "/" },
      { icon: Clock4, label: "Recently played", href: "/recent" },
  { icon: PackagePlus, label: "New", href: "/new" },
  { icon: Flame, label: "Popular Games", href: "/hot" },  
  { icon: RefreshCcw, label: "Updated", href: "/updated" },
  { icon: Gitlab, label: "Originals", href: "/originals" }, 
  { icon: Users, label: "Multiplayer", href: "/multiplayer" },
    { icon: UsersRound, label: "2 Player", href: "/t/2-player" },
  { icon: Swords, label: "Action ", href: "/c/action" },
{ icon: Compass, label: "Adventure  ", href: "/c/adventure" }, 
{ icon: Bike, label: "Bike  ", href: "/t/bike" },
  { icon: Car, label: "Car", href: "/t/car" },
  { icon: Club, label: "Card", href: "/t/Card" },
  { icon: Dice5, label: "Casual", href: "c/casual" },  
  { icon: MousePointerClick, label: "Clicker", href: "c/clicker" }, 
  { icon: Gamepad2, label: "Controller", href: "t/controller" },  
  { icon: ShipWheel, label: "Driving", href: "c/driving" },  
  { icon: DoorClosed, label: "Escape", href: "/t/escape" },  
  { icon: Zap, label: "Flash", href: "/t/flash" }, 
        { icon: BowArrow, label: "FPS", href: "/t/first-person-shooter" },
                { icon: Ghost , label: "Horror", href: "/t/horror" },
        { icon: BowArrow, label: ".io", href: "/c/io" },



]