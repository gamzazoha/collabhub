import React from "react";
import "./GroupMembers.css"

function GroupMembers(props) {
    return(
      <div className="team-member-wrapper">
        <div className="title-wrapper">
          <p className="title">Member</p>
        </div>
        <div className="team-member">
          {props.data.map((member, index) => {
            return(
            <div key={member.id} className="team-member-item">
              <div className="section1">
                <p className="member-no">0{index + 1}</p>
                <hr></hr>
              </div>
              <div className="section2">
                <p className="member-name">{member.name}</p>
                <p className="member-role">{member.role}</p>
                <p className="member-info">{member.info}</p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    );
}

export default GroupMembers;