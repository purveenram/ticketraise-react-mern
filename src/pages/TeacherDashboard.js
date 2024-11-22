import React, { useEffect, useState } from 'react';
import { getQueries, updateQuery, logout } from '../services/api';
import QueryList from './QueryList';
import '../css/Dashboard.css';

function TeacherDashboard() {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const fetchQueries = async () => {
      const result = await getQueries({ role: 'teacher' });
      setQueries(result.data);
    };
    fetchQueries();
  }, []);

  const handleUpdateQuery = async (queryId, queryData) => {
    await updateQuery(queryId, queryData);
    setQueries(await (await getQueries({ role: 'teacher' })).data);
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-header">Teacher Dashboard</h2>
      <button className="logout-button" onClick={() => logout().then(() => window.location.reload())}>Logout</button>
      <QueryList
        queries={queries}
        onEdit={handleUpdateQuery}
        isStudent={false}
      />
    </div>
  );
}

export default TeacherDashboard;
