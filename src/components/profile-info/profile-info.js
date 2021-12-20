import React from "react";
import "./profile-info.scss";

const ProfileInfo = ({}) => {
  return (
    <div className="rzv-profile-info">
      <ul className="rzv-profile-info__wr">
        <li className="rzv-profile-info__item">
          <p>Date of Birth: </p>
          <p>17/06/1994</p>
        </li>
        <li className="rzv-profile-info__item">
          <p>Nationality: </p>
          <p>Romanian</p>
        </li>
        <li className="rzv-profile-info__item">
          <p>Gender: </p>
          <p>Male</p>
        </li>
      </ul>
    </div>
  );
};

export default ProfileInfo;
