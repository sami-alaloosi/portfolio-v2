/** @format */

import React from "react";

const colors = ["#8B5CF6","#3B82F6", "#FCD34D",  "#6366F1", "#374151", "#34D399", "#2563EB", "#10B981" ]

export default function Skill({ name, icon, color, width = 82, textSize = "0.68rem" }) {
  
  
  return (
    <div
      className="rounded-lg  shadow hover:shadow-2xl grid grid-rows-2 justify-center m-1  hover:scale-110 transform"
      style={{
        width: width,
        height: 80,
        transition: "transform cubic-bezier(0.35, 1.21, 1, 1) 0.16s",
        background: colors[color]
      }}
    >
      <div className="flex justify-center pt-3 text-2xl text-white  tracking-widest">
          {icon}
        
      </div>

      <div className="font-semibold uppercase opacity-80   text-white pt-1 flex justify-center " style={{fontSize: textSize}} >
      <div >{name}</div>
      </div>

      
    </div>
  );
}
