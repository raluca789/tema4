import React, { useState } from 'react';

const RobotForm = () => {
  const [robot, setRobot] = useState({
    name: '',
    type: '',
    mass: '',
    weight: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setRobot((prevRobot) => ({ ...prevRobot, [id]: value }));
  };

  const handleAddRobot = () => {
    if (robot.name && robot.type && robot.mass) {
      setRobot((prevRobot) => ({
        ...prevRobot,
        weight: prevRobot.mass < 500 ? '' : prevRobot.mass,
      }));
      console.log('Robot adăugat:', robot);
    }
  };

  return (
    <div>
      <h2>Robot Form</h2>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={robot.name}
        onChange={handleInputChange}
      />

      <label htmlFor="type">Type:</label>
      <input
        type="text"
        id="type"
        value={robot.type}
        onChange={handleInputChange}
      />

      <label htmlFor="mass">Mass:</label>
      <input
        type="text"
        id="mass"
        value={robot.mass}
        onChange={handleInputChange}
      />

      <button onClick={handleAddRobot}>Add Robot</button>
    </div>
  );
};

export default RobotForm;
