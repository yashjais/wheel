import React from "react";

import { MenuVertical, Clock } from "neetoicons";
import { Avatar, Dropdown } from "neetoui/v2";

const CardNote = ({
  id,
  title,
  description,
  tag,
  notesStatus,
  created_at,
  handleDeleteNote
}) => (
  <div>
    <div className="" style={styles.boxStyle}>
      <div style={styles.boxInner}>
        <div>
          <h4>{title}</h4>
        </div>
        <div>
          <Dropdown
            label=""
            buttonStyle="text"
            position="bottom-end"
            icon={() => <MenuVertical size={18} />}
          >
            <li>Edit</li>
            <li onClick={() => handleDeleteNote(id)}>Delete</li>
          </Dropdown>
        </div>
      </div>
      <p style={styles.descriptionStyles}>{description}</p>
      <hr style={styles.lineStyle} />
      <div className="mainBottom" style={styles.bottomSec}>
        <div className="left" style={styles.leftSec}>
          <button className="button" style={styles.button}>
            {tag}
          </button>
        </div>
        <div className="right" style={styles.rightSec}>
          <div className="icon" style={styles.icon}>
            <Clock size={12} />
          </div>
          <div
            className="time"
            style={styles.time}
          >{`${notesStatus} ${created_at}`}</div>
          <div className="avatar" style={styles.avatar}>
            <Avatar
              user={{
                name: "neeto UI"
              }}
              size="small"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const styles = {
  boxStyle: {
    border: "1px solid #D8DCDE",
    boxShadow: "0px 1px 4px -1px rgba(28, 48, 74, 0.12)",
    padding: "16px 16px 8px 16px",
    margin: "16px 0",
    borderRadius: "2px"
  },
  boxInner: {
    display: "flex",
    justifyContent: "space-between"
  },
  descriptionStyles: {
    // fontFamily: "SF Pro Text",
    fontStyle: "normal",
    // fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#68737D",
    marginTop: "2px"
  },
  lineStyle: {
    margin: "12px 0 5px 0",
    border: "1px solid #D8DCDE"
  },
  bottomSec: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  leftSec: {},
  rightSec: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  button: {
    height: "20px",
    width: "104px",
    borderRadius: "3px",
    border: "1px solid #D8DCDE",
    display: "flex",
    backgroud: "#F8F9F9",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
    color: "#68737D",
    lineHeight: "0"
  },
  icon: {
    marginTop: "2px"
  },
  time: {
    margin: "5.5px",
    color: "#68737D"
  },
  avatar: {
    margin: "7px"
  }
};

export default CardNote;
