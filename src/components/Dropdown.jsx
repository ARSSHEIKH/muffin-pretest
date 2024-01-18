import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

export default function CustomDropdown({options}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    // You can perform any action when an option is clicked
    console.log(`Option clicked: ${value}`);
    // Close the dropdown after clicking an option
    setIsOpen(false);
  };

  return (
    <div className={`select-menu ${isOpen ? 'active' : ''}`} id="dropdown4">
      <div className="select-btn" onClick={toggleDropdown}>
        <span className="sBtn-text">승인상태 변경</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path d="M5.87511 7.4001C5.74178 7.4001 5.61278 7.3751 5.48811 7.3251C5.36278 7.2751 5.25844 7.20843 5.17511 7.1251L0.575109 2.5251C0.391776 2.34176 0.30011 2.10843 0.30011 1.8251C0.30011 1.54176 0.391776 1.30843 0.575109 1.1251C0.758443 0.941764 0.991776 0.850098 1.27511 0.850098C1.55844 0.850098 1.79178 0.941764 1.97511 1.1251L5.87511 5.0251L9.77511 1.1251C9.95844 0.941764 10.1918 0.850098 10.4751 0.850098C10.7584 0.850098 10.9918 0.941764 11.1751 1.1251C11.3584 1.30843 11.4501 1.54176 11.4501 1.8251C11.4501 2.10843 11.3584 2.34176 11.1751 2.5251L6.57511 7.1251C6.47511 7.2251 6.36678 7.29576 6.25011 7.3371C6.13344 7.3791 6.00844 7.4001 5.87511 7.4001Z" fill="#5A616A" />
        </svg>
      </div>

      <ul className="options">
        {options?.map((option) => (
          <li className="option" key={option.value} onClick={() => handleOptionClick(option.value)}>
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
