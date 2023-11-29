// FormPage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormData } from './FormDataContext';
import './FormPage.css'
const FormPage = () => {
  const { formData, updateFormData } = useFormData();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/ChartPage'); // Redirect to ChartPage after submitting the form
  };

  return (
    <div className='container'>
      <div className="form-container">
        <h2>Skill Level</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Front-end Development (out of 10):
            <input
              type="number"
              name="skillScale"
              value={formData.skillScale}
              onChange={handleChange}
            />
          </label>

          <label>
            React js:
            <select
              name="skillLevel"
              value={formData.skillLevel}
              onChange={handleChange}
            >
              <option value="">Select Skill Level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="expert">Expert</option>
            </select>
          </label>

          <label>
            Last Use Date:
            <input
              type="date"
              name="lastUseDate"
              value={formData.lastUseDate}
              onChange={handleChange}
            />
          </label>

          <div className='backendRadio'>
            Back-end Skill:
            <label className=''>
              Yes
              <input
                type="radio"
                name="hasBackendSkill"
                value="yes"
                checked={formData.hasBackendSkill === 'yes'}
                onChange={handleChange}
              />
            </label>
            <label>
              No
              <input
                type="radio"
                name="hasBackendSkill"
                value="no"
                checked={formData.hasBackendSkill === 'no'}
                onChange={handleChange}
              />

            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
