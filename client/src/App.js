import { useEffect, useState } from 'react';

function App() {
  const [healthData, setHealthData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/health')
      .then((res) => res.json())
      .then((data) => {
        setHealthData(data);
      })
      .catch((err) => {
        console.error('❌ Failed to fetch health data:', err);
      });
  }, []);

  if (!healthData) {
    return <p>Loading health data...</p>;
  }

  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>👤 {healthData.name}'s Health Summary</h1>
      <ul>
        <li>❤️ Heart Rate: {healthData.heartRate} bpm</li>
        <li>👟 Steps Today: {healthData.stepsToday}</li>
        <li>🔥 Calories Burned: {healthData.caloriesBurned}</li>
        <li>🛌 Sleep: {healthData.sleep.totalHours} hrs (Deep: {healthData.sleep.deepSleepHours} hrs)</li>
        <li>🕒 Last Updated: {new Date(healthData.lastUpdated).toLocaleString()}</li>
      </ul>
    </div>
  );
}

export default App;
