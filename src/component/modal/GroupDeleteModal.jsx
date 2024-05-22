import React from "react";
import "./GroupDeleteModal.css"

function GroupDeleteModal(props) {
    return (
        <div className="modal-container">
            <div className="modal">
                <div className="modal-box">
                    <h1 className="txt1">팀 삭제</h1>
                    <p className="txt2">
                        삭제 시 되돌릴 수 없습니다.<br></br>
                        그래도 진행하시겠습니까?
                    </p>
                    <div className="btn-box">
                        <button type="button" className="no" onClick={() => { props.setShowModal(false) }}>취소</button>
                        <button type="button" className="yes" onClick={() => { props.setShowModal(false) }}>확인</button>
                    </div>
                </div>
                <div className="modal-layer"></div>
            </div>
        </div>
    );
}

export default GroupDeleteModal;