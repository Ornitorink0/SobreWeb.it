import React from "react";

const BackgroundCircle = ({ color, position }) => {
  // Impostiamo la classe Tailwind per la posizione (sinistra o destra)
  const positionClass = position === "left" ? "left-0" : "right-0";

  return (
    <div
      className={`absolute ${positionClass} top-1/2 transform -translate-y-1/2 rounded-full`}
      style={{
        backgroundColor: color,
        width: "360px", // Imposta le dimensioni del cerchio (puoi modificarle in base alle necessità)
        height: "360px",
        filter: "blur(950px)",
        zIndex: 0,
        // not draggable
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        MsUserSelect: "none",
        userSelect: "none",
      }}
    />
  );
};

export default BackgroundCircle;
