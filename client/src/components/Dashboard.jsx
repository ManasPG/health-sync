import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [healthData, setHealthData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/health")
      .then((res) => res.json())
      .then((data) => setHealthData(data))
      .catch((err) => console.error("❌ Backend error:", err));
  }, []);

  if (!healthData) return <div className="text-center mt-10">Loading...</div>;

  return (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {Object.entries(healthData).map(([key, value]) => (
    <div key={key} className="bg-white rounded-2xl shadow p-5 hover:shadow-xl transition duration-300">
      <h2 className="text-lg font-semibold capitalize">{key.replace(/_/g, " ")}</h2>
      {typeof value === "object" ? (
        <ul className="mt-2 space-y-1">
          {Object.entries(value).map(([subKey, subValue]) => (
            <li key={subKey} className="text-blue-600 text-sm">
              <span className="font-medium">{subKey.replace(/_/g, " ")}:</span> {subValue}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-2xl text-blue-600 mt-2">{value}</p>
      )}
    </div>
  ))}
</div>

  );
};

export default Dashboard;
