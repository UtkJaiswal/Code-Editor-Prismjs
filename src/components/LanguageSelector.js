import React from 'react';

const LanguageSelector = ({ language, handleDropdownChange }) => (
  <div className="dropdownContainer">
    <label htmlFor="languageSelect" className="label">Select Language: </label>
    <select
      id="languageSelect"
      value={language}
      onChange={handleDropdownChange}
      className="select"
    >
      <option value="python">Python</option>
      <option value="javascript">JavaScript</option>
      <option value="java">Java</option>
    </select>
  </div>
);

export default LanguageSelector;