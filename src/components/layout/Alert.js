import React, { useContext } from 'react';
import { AlertContext } from '../../context/alert/AlertContext';
function Alert() {
  const alertState = useContext(AlertContext);
  const { alert } = alertState;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' />
        {alert.msg}
      </div>
    )
  );
}

export default Alert;
