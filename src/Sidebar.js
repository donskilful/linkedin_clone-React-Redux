import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://wallpapercave.com/wp/wp2564314.jpg" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Don Skilful</h2>
        <h4>donskilful@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">6,893</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">6,893,874</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  );
}

export default Sidebar;
