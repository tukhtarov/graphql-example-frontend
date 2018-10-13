import React from "react";
import "./UserCard.css";

const UserCard = ({ userData, props }) => (
  <div
    className="user_card_container"
    onClick={() => props.history.push(`/user/${userData.id}`)}
  >
    <img alt="User" src={require("../Images/image.png")} className="icon" />
    <div className="name">{userData.name}</div>
    <div className="age">{`${userData.age} years`}</div>
    <div className="skills">
      {userData.knowledge.map(item => item.language).join(", ")}
    </div>
  </div>
);

export default UserCard;
