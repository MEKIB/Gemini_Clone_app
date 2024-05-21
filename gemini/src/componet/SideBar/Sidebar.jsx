import React, { useContext, useState } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
import { context } from "../../context/context";
function Sidebar() {
  const [extended,setExtended] = useState(false);
  const {onSent,prevPrompt,setRecentPrompt,newChat}=useContext(context)

  const loadPrompt=async(prompt)=>{
    setRecentPrompt(prompt)
   await onSent(prompt)
  }
  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={()=>setExtended(prev=>!prev)} src={assets.menu_icon} alt="" className="menu" />
        <div className="new_chat" onClick={()=>newChat()}>
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent_title">recent</p>
            {prevPrompt.map((item,index)=>{
                return (
                  <div className="recent_entry" onClick={()=>loadPrompt(item)}>
                    <img src={assets.message_icon} alt="" />
                    <p>{item.slice(0,20)}.....</p>
                  </div>
                );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom_item recent_entry">
          <img src={assets.question_icon} alt="" />
          {extended?<p>Help</p>:null}
        </div>
        <div className="bottom_item recent_entry">
          <img src={assets.history_icon} alt="" />
          {extended?<p>Activity</p>:null}
        </div>
        <div className="bottom_item recent_entry">
          <img src={assets.setting_icon} alt="" />
          {extended?<p>setting</p>:null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
