import React from "react";
import "./card.css";
// import { surveyCount } from '../SurveyTable/surveyTable';

export default function Card(props) {
  return (
    <>
      <div
        className={props.className}
        count={props.count}
        title={props.title}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#ffffff !important",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              paddingTop: "-5px",
              paddingLeft: "15px",
              fontSize: "18px",
              color:'#8C9194',


            }}
          >
            {props.title}
          </p>
          <p
            className="count"
            style={{
              font: "Noto Sans",
              fontSize: "32px",
              marginTop: "-20px",
              marginLeft: "15px",
              color:'#328DF6',

            }}
          >
            <b>{props.count}</b>
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* <p>Icon</p> */}
          <span>
            {props?.logo && (
              <img
                src={props.logo}
                style={{ width: "72px", height: "72px", marginLeft: "10px", marginTop:'12px', marginRight:'15px' }}
              />
            )}
          </span>
        </div>
      </div>
    </>
  );
}
