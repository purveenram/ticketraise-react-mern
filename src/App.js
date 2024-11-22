import React, { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';

function App() {
  const [role, setRole] = useState(null); // Stores user role: 'student' or 'teacher'
  const [userId, setUserId] = useState(null); // Stores user ID for query creation

  return (
    <div className="App">
      {!role ? (
        // Show login page if no role is set
        <Login setRole={setRole} setUserId={setUserId} />
      ) : (
        // Show appropriate dashboard based on role
        role === 'student' ? (
          <StudentDashboard userId={userId} />
        ) : (
          <TeacherDashboard />
        )
      )}
    </div>
  );
}

export default App;
