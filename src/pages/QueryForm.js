import React, { useState } from 'react';
import '../css/QueryForm.css';

function QueryForm({ onSubmit, initialData = {} }) {
  const [queryData, setQueryData] = useState({
    courseInQuery: initialData.courseInQuery || '',
    courseCodeInQuery: initialData.courseCodeInQuery || '',
    slotInQuery: initialData.slotInQuery || '',
    topicInQuery: initialData.topicInQuery || '',
    doubtInQuery: initialData.doubtInQuery || '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setQueryData({ ...queryData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !queryData.courseInQuery ||
      !queryData.courseCodeInQuery ||
      !queryData.slotInQuery ||
      !queryData.topicInQuery ||
      !queryData.doubtInQuery
    ) {
      setError('Please fill in all fields before submitting.');
      return;
    }
    onSubmit(queryData);
    setQueryData({
      courseInQuery: '',
      courseCodeInQuery: '',
      slotInQuery: '',
      topicInQuery: '',
      doubtInQuery: '',
    });
  };

  return (
    <form className="query-form" onSubmit={handleSubmit}>
      {error && <p className="error-text">{error}</p>}
      <input name="courseInQuery" value={queryData.courseInQuery} onChange={handleChange} placeholder="Course" />
      <input name="courseCodeInQuery" value={queryData.courseCodeInQuery} onChange={handleChange} placeholder="Course Code" />
      <input name="slotInQuery" value={queryData.slotInQuery} onChange={handleChange} placeholder="Slot" />
      <input name="topicInQuery" value={queryData.topicInQuery} onChange={handleChange} placeholder="Topic" />
      <textarea name="doubtInQuery" value={queryData.doubtInQuery} onChange={handleChange} placeholder="Doubt" />
      <button className="submit-button" type="submit">Submit</button>
    </form>
  );
}

export default QueryForm;
