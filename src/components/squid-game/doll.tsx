import { useState, useEffect } from "react";

export default function Doll({ greenLight }: { greenLight: boolean }) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // Rotate head towards the players when it's Red Light
    if (!greenLight) {
      setRotation(0); // Facing players
    } else {
      setRotation(-90); // Looking sideways
    }
  }, [greenLight]);

  return (
    <div className="relative w-32 h-48">
      {/* Doll Body */}
      <div className="w-32 h-48 bg-yellow-300 rounded-lg absolute top-0 left-0"></div>
      
      {/* Doll Head */}
      <div
        className="w-20 h-20 bg-orange-400 rounded-full absolute top-[-40px] left-[25%] transition-transform duration-700"
        style={{ transform: `rotate(${rotation}deg)` }}
      ></div>
    </div>
  );
}
