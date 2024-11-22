import React, { useState } from 'react';
import '../css/QueryList.css';

function QueryList({ queries, onEdit, onDelete, isStudent }) {
  const [editingQueryId, setEditingQueryId] = useState(null);
  const [queryData, setQueryData] = useState({});

  const handleEditClick = (query) => {
    setEditingQueryId(query._id);
    setQueryData(query);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQueryData({ ...queryData, [name]: value });
  };

  const handleSaveClick = () => {
    onEdit(editingQueryId, queryData);
    setEditingQueryId(null);
    setQueryData({});
  };

  const handleCancelClick = () => {
    setEditingQueryId(null);
    setQueryData({});
  };

  return (
    <table className="query-table">
      <thead>
        <tr>
          {isStudent ? null : <th>Student Reg. No.</th>}
          <th>Course</th>
          <th>Course Code</th>
          <th>Slot</th>
          <th>Topic</th>
          <th>Doubt</th>
          <th>Feedback</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {queries.map((query) => (
          <tr key={query._id}>
            {isStudent ? null : <td>{query.studentIdInQuery.studentRegNo}</td>}
            {editingQueryId === query._id ? (
              <>
                <td><input type="text" name="courseInQuery" value={queryData.courseInQuery} onChange={handleInputChange} /></td>
                <td><input type="text" name="courseCodeInQuery" value={queryData.courseCodeInQuery} onChange={handleInputChange} /></td>
                <td><input type="text" name="slotInQuery" value={queryData.slotInQuery} onChange={handleInputChange} /></td>
                <td><input type="text" name="topicInQuery" value={queryData.topicInQuery} onChange={handleInputChange} /></td>
                <td><input type="text" name="doubtInQuery" value={queryData.doubtInQuery} onChange={handleInputChange} /></td>
                <td>
                  {isStudent ? (
                    <span>{query.feedbackInQuery}</span>
                  ) : (
                    <input type="text" name="feedbackInQuery" value={queryData.feedbackInQuery} onChange={handleInputChange} />
                  )}
                </td>
                <td>
                  <button className="save-button" onClick={handleSaveClick}>Save</button>
                  <button className="cancel-button" onClick={handleCancelClick}>Cancel</button>
                </td>
              </>
            ) : (
              <>
                {/* {isStudent ? null : <td>{query.studentIdInQuery.studentRegNo}</td>} */}
                <td>{query.courseInQuery}</td>
                <td>{query.courseCodeInQuery}</td>
                <td>{query.slotInQuery}</td>
                <td>{query.topicInQuery}</td>
                <td>{query.doubtInQuery}</td>
                <td>{query.feedbackInQuery}</td>
                <td>
                  <button className="edit-button" onClick={() => handleEditClick(query)}>Edit</button>
                  <button className="delete-button" onClick={() => onDelete(query._id)}>Delete</button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default QueryList;
