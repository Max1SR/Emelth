// components/DotLottiePlayer.js
import dynamic from "next/dynamic";

// Dinámicamente importa el componente `dotlottie-player` solo en el cliente
const DotLottiePlayer = dynamic(() => import("@dotlottie/player-component"), {
  ssr: false,
});

export default DotLottiePlayer;
