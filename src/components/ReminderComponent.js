import React, { useState, useEffect } from 'react';
import "../styles/Reminder.css"; // Import the CSS file with dark styling

const ReminderComponent = () => {
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
    }, 5000); // Trigger every 5 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="reminder">
          <strong>{reminder}</strong>
        </div>
      )}
    </div>

  );
};

export default ReminderComponent;
