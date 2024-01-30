import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/index.css';

const TrafficLight = () => {
  const [color, setColor] = useState('red');
  const [hasPurple, setHasPurple] = useState(false);

  const handleClick = (newColor) => {
    if (newColor === 'purple') {
      setHasPurple(true);
    } else {
      setColor(newColor);
    }
  };

  const lightContainers = [
    { color: 'red', glowClass: color === 'red' ? 'glow' : '' },
    { color: 'yellow', glowClass: color === 'yellow' ? 'glow' : '' },
    { color: 'green', glowClass: color === 'green' ? 'glow' : '' }
   
  ];

  return (
    <div className="traffic-light">
      <div className="traffic-light-box">
        <div className="tube"></div>
        {lightContainers.map(container => (
          <div key={container.color} className="light-container">
            <div className={`light ${container.glowClass}`} style={{ backgroundColor: container.color }} onClick={() => handleClick(container.color)}></div>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={() => handleClick(color === 'red' ? 'yellow' : color === 'yellow' ? 'green' : 'red')}>Change Color</button>
        
      </div>
    </div>
  );
};

ReactDOM.render(<TrafficLight />, document.querySelector('#app'));

export default TrafficLight;











