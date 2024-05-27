import { useEffect, useRef } from "react";
import anime from "animejs";

const AnimatedBackground = ({ changeBlockColor }) => {
  const containerRef = useRef(null);
  const blocks = useRef([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const container = containerRef.current;

      for (let a = 0; a <= 55; a++) {
        const block = document.createElement("div");
        block.classList.add("block");

        if (window.innerWidth > 1920) {
          block.style.left = "1150px";
          block.style.top = "350px";
        } else {
          block.style.left = (window.innerWidth / 1920) * 1450 + "px";
          block.style.top = (window.innerWidth / 1920) * 450 + "px";
        }

        container.appendChild(block);
        blocks.current.push(block);
      }

     function animateBlocks() {
       anime({
         targets: blocks.current,
         translateX: function () {
           return anime.random(-1200, 300); // Ajusta este valor para mover los recuadros más hacia la izquierda
         },
         translateY: function () {
           return anime.random(-500, 500);
         },
         scale: function () {
           return anime.random(1, 5);
         },
         easing: "linear",
         duration: 3000,
         delay: anime.stagger(10),
         complete: animateBlocks,
       });
     }
     animateBlocks();

      return () => {
        blocks.current.forEach((block) => container.removeChild(block));
        blocks.current = [];
      };
    }
  }, []);

  useEffect(() => {
    if (changeBlockColor) {
      changeBlockColor.current = (color) => {
        blocks.current.forEach((block) => {
          block.style.transition = "background-color 0.5s"; // Adding transition
          block.style.backgroundColor = color;
        });
      };
    }
  }, [changeBlockColor]);

  return (
    <div className="z-0 absolute inset-0 container" ref={containerRef}></div>
  );
};

export default AnimatedBackground;
