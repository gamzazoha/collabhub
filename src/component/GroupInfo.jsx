import React from "react";
import { useState } from "react";
import './GroupInfo.css'

import GroupDeleteModal from "./modal/GroupDeleteModal";
import GroupModifyModal from "./modal/GroupModifyModal";

function GroupInfo(props) {
	let [showModifyModal, setShowModifyModal] = useState(false)
	let [showModal, setShowModal] = useState(false);

	return(
		<div>  
			<div className="team-wrapper">
				<div className="team-box">
					<div className="section1">
						<p className="team-name">
							{props.data.name}
						</p>
						<div className="team-manage">
							<button className="modify-btn" onClick={() => { setShowModifyModal(!showModifyModal) }}>수정</button>
							{ showModifyModal ? <GroupModifyModal setShowModifyModal={setShowModifyModal} /> : null }
							<button className="delete-btn" onClick={() => { setShowModal(!showModal) }}>삭제</button>
							{ showModal ? <GroupDeleteModal setShowModal={setShowModal} /> : null }
						</div>
					</div>
					<p className="team-info">
						{props.data.info}
					</p>
				</div>
			</div>
		</div>
	);
}

export default GroupInfo;
