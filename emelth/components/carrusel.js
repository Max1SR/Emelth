import Image from "next/image";
import Facebook from "./iconos/facebook";
import Cheems from "./img/cheems.jpg";

export default function Carrusel() {
  const logos = [
    { src: 'https://www.icegif.com/wp-content/uploads/2022/01/icegif-982.gif', alt: "Facebook", style: "none" },
    { src: 'https://www.icegif.com/wp-content/uploads/2022/01/icegif-982.gif', alt: "Disney", style: "none" },
    { src: 'https://www.icegif.com/wp-content/uploads/2022/01/icegif-982.gif', alt: "Airbnb", style: "none" },
    { src: 'https://www.icegif.com/wp-content/uploads/2022/01/icegif-982.gif', alt: "Apple", style: "none" },
    { src: 'https://www.icegif.com/wp-content/uploads/2022/01/icegif-982.gif', alt: "Spark", style: "none" },
    { src: 'https://www.icegif.com/wp-content/uploads/2022/01/icegif-982.gif', alt: "Samsung", style: "none" },
    { src: 'https://www.icegif.com/wp-content/uploads/2022/01/icegif-982.gif', alt: "Quora", style: "none" },
    { src: 'https://www.icegif.com/wp-content/uploads/2022/01/icegif-982.gif', alt: "Sass", style: "none" },
  ];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll ">
        {logos.map((logo, index) => (
          <li key={index}>
            <img src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <img src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
}
