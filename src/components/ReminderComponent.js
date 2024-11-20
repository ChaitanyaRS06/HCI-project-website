import React, { useState, useEffect } from 'react';
import "../styles/Reminder.css"; // Import the CSS file with dark styling

const ReminderComponent = ({ bgColor }) => {
  const [reminder, setReminder] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setReminder(`Remember to blink every 3-4 seconds!`);
      setIsVisible(true);

      // Hide the reminder after 3 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 3000); // Hide after 3 seconds
    }, 150000); // Trigger every 2.5 minutes

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="reminder" style={{ backgroundColor: bgColor }}>
          <strong>{reminder}</strong>
        </div>
      )}
    </div>

  );
};

export default ReminderComponent;
