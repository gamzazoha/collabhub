import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import "./Detail.css"

import { getGroupInfo } from "../api/groupInfo";

import GroupInfo from "../component/GroupInfo";

function Detail(props) {
  let [infoData, setInfoData] = useState([]);

  let params = useParams();
  
  useEffect(() => {
    //data check
    console.log(params.id);
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
    </div>
  )
};

export default Detail;