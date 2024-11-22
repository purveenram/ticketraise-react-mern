import React, { useEffect, useState } from 'react';
import { getQueries, addQuery, updateQuery, deleteQuery, logout, getStudentDetails } from '../services/api';
import QueryForm from './QueryForm';
import QueryList from './QueryList';
import '../css/Dashboard.css';

function StudentDashboard({ userId }) {
  const [queries, setQueries] = useState([]);
  const [studentName, setStudentName] = useState('');

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await getStudentDetails(userId);
        setStudentName(response.data.studentName);
      } catch (error) {
        console.error("Error fetching student details:", error);
      }
    };

    const fetchQueries = async () => {
      const result = await getQueries({ userId, role: 'student' });
      setQueries(result.data);
    };

    fetchStudentDetails();
    fetchQueries();
  }, [userId]);

  const handleAddQuery = async (queryData) => {
    try {
      await addQuery({ ...queryData, studentIdInQuery: userId });
      setQueries(await (await getQueries({ userId, role: 'student' })).data);
    } catch (error) {
      console.error("Error adding query:", error);
    }
  };

  const handleUpdateQuery = async (queryId, queryData) => {
    await updateQuery(queryId, queryData);
    setQueries(await (await getQueries({ userId, role: 'student' })).data);
  };

  const handleDeleteQuery = async (queryId) => {
    await deleteQuery(queryId);
    setQueries(await (await getQueries({ userId, role: 'student' })).data);
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-header">Welcome, {studentName}</h2>
      <button className="logout-button" onClick={() => logout().then(() => window.location.reload())}>Logout</button>
      <QueryForm onSubmit={handleAddQuery} />
      <QueryList
        queries={queries}
        onEdit={handleUpdateQuery}
        onDelete={handleDeleteQuery}
        isStudent={true}
      />
    </div>
  );
}

export default StudentDashboard;
