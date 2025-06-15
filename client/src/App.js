import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:5000')
      .then((res) => res.text())
      .then((data) => {
        console.log('✅ Backend response:', data);
      })
      .catch((err) => {
        console.error('❌ Backend error:', err);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to HealthSync</h1>
      <p>Check your browser console for backend response.</p>
    </div>
  );
}

export default App;
