import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import "./Detail.css"

import { getGroupMembers } from "../api/groupMember";
import { getGroupInfo } from "../api/groupInfo";

import GroupMembers from "../component/GroupMembers";
import GroupInfo from "../component/GroupInfo";

function Detail(props) {
  let [infoData, setInfoData] = useState([]);
  let [memberData, setMemberData] = useState([]);

  let params = useParams();
  
  useEffect(() => {
    //data check
    console.log(params.id);
    getGroupMembers().then((result) => {
      console.log(result);
      setMemberData(result);
    });
    getGroupInfo().then((result) => {
      console.log(result);
      setInfoData(result);
    });
  }, [params]);

  return (
    <div className="detail-container">
      <div className="group-member-info-wrapper">
        <GroupInfo data={infoData} />
      </div>
      <div className="group-members-wrapper">
        <GroupMembers data={memberData} />
      </div>
    </div>
  )
};

export default Detail;