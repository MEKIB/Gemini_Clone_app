import React, { useContext } from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { context } from '../../context/context'
function Main() {
const{onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(context) 


  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main_container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev,</span>
              </p>
              <p>How can I help you today ?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept:urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activites for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? 
              <div className='loading'>
                <hr/>
                <hr/>
                <hr/>
              </div> : 
              <p dangerouslySetInnerHTML={{__html:resultData}}>
                {/* {resultData} */}
              </p>}
            </div>
          </div>
        )}

        <div className="main_bottom">
          <div className="search_box">
            <input
              type="text"
              name=""
              id=""
              placeholder="enter prompt here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
             {input?<img onClick={() => onSent()} src={assets.send_icon} alt="" />:null} 
            </div>
          </div>
          <div className="bottom_info">
            Gemini may display inacurate info, including about people, do
            double-check its responses.Your privacy and Gemini Apps
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main
