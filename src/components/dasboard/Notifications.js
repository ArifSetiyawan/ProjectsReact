import React from "react";

const Notification = (props) => {
  return (
    <div className="section">
      <div className="card z-depth-0" style={{borderRadius:8}}>
        <div className="card-content">
          <span className="card-title" style={{fontWeight:"bold"}}>Notifications</span>
          <ul className="online-users">
            <li>Notification</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notification;
