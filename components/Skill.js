/** @format */

import React from "react";

const colors = ["#8B5CF6","#3B82F6", "#FCD34D",  "#6366F1", "#374151", "#34D399", "#2563EB" ]

export default function Skill({ name, icon, color }) {
  
  
  return (
    <div
      className="rounded-lg  shadow hover:shadow-2xl grid grid-rows-2 justify-center m-1  hover:scale-110 transform"
      style={{
        width: 81,
        height: 80,
        transition: "transform cubic-bezier(0.35, 1.21, 1, 1) 0.16s",
        background: colors[color]
      }}
    >
      <div className="flex justify-center pt-3 text-2xl text-white  tracking-widest">
          {icon}
        
      </div>

      <div className="font-semibold uppercase opacity-80  text-xs text-white pt-1 flex justify-center " >
        {name}
      </div>
    </div>
  );
}
