import React, { useState } from "react";
import "./Tabs.css";
import { tabs, personal, education, awards } from "../../personal-data";
import { RiArrowRightSFill } from "react-icons/ri";

const Tabs = () => {
  const [value, setValue] = useState(0);

  return (
    <section>
      <div className="container">
        <div className="tabs-main-container">
          <div className="section-header">
            <h2>Details</h2>
            <div className="header-line"></div>
          </div>
          <div className=" tabs-container">
            {/* --------------- LEFT TAB ---------------*/}
            <div className="tabs-left">
              {tabs.map((item, index) => {
                const { title, icon } = item;
                return (
                  <button
                    className={`tab ${value === index && "active-tab"}`}
                    key={item.id}
                    onClick={() => setValue(index)}>
                    <span>{icon}</span>
                    {title}
                  </button>
                );
              })}
            </div>
            {/* ----------------- Right tab ---------------- */}
            <div className="tabs-right">
              <>
                {personal.map((item, index) => {
                  const { label, text } = item;
                  return (
                    <div
                      className={value !== 0 ? "inactive-tab-info" : "tab-info"}
                      key={index}>
                      <p>{label}</p>
                      <p>{text}</p>
                    </div>
                  );
                })}
              </>
              <>
                {education.map((item) => {
                  const { id, level, location, date } = item;
                  return (
                    <div
                      key={id}
                      className={
                        value !== 1 ? "inactive-tab-info" : "tab-info"
                      }>
                      <p>
                        <RiArrowRightSFill className="arrow-icon" />
                        {level}
                      </p>
                      <p>{location}</p>
                      <p>{date}</p>
                    </div>
                  );
                })}
              </>
              <>
                {awards.map((item) => {
                  const { id, text, from } = item;
                  return (
                    <div
                      key={id}
                      className={
                        value !== 2 ? "inactive-tab-info" : "tab-info"
                      }>
                      <p>
                        <RiArrowRightSFill className="arrow-icon" />
                        {text}
                      </p>
                      <p>{from}</p>
                    </div>
                  );
                })}
              </>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
