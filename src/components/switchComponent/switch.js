import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './switch.css';

export default function Switch(props) {
  return (
    <>
    <h5 className={`${props.dayNight}TxtColor darkModeMove`}>Dark Mode</h5>
    <input onClick={props.handleClick} className="react-switch-checkbox" id={`react-switch-new`} type="checkbox"/>
    <label className="react-switch-label" htmlFor={`react-switch-new`}>
      <span className={`react-switch-button`} />
    </label>
  </>
  );
};