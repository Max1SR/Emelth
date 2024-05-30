import React from 'react';
import '@/styles/styles.css'; 

const bubbleValues = [
  11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25, 18, 21, 13, 15, 26, 17, 13, 28,
  11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25, 18, 21, 13, 15, 26, 17, 13, 28
];

const BubbleBackground: React.FC = () => {
  const particles = bubbleValues.map((value, i) => (
    <span key={i} style={{ '--i': value, '--x': Math.random() * 100 + 'vw' } as React.CSSProperties}></span>
  ));

  return (
    <div className="bubbleContainer">
      <div className="particles">{particles}</div>
    </div>
  );
};

export default BubbleBackground;
