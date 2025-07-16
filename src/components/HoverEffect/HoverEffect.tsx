import React, { useState } from "react";
import "./HoverEffect.css";

type HoverEffectProps = {
  children: React.ReactNode;
};

const HoverEffect = ({ children }: HoverEffectProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="hover-zone"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {isHovering && (
        <div
          className="custom-cursor"
          style={{
            left: position.x,
            top: position.y,
          }}
        >
          <span className="arrow">➔</span>
        </div>
      )}
      {children}
    </div>
  );
};

export default HoverEffect;
