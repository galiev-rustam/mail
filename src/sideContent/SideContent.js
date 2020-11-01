import React from "react";
import GreenBtn from "../sidePanel/GreenBtn";
import style from "./sideContent.module.css";
import unreadLogo from "../img/sideContent/Unread.png";
import AchieveLogo from "../img/sideContent/Archive.png";
import LaterLogo from "../img/sideContent/Later.png";
import ListLogo from "../img/sideContent/List.png";
import LabelLogo from "../img/sideContent/Label.png";
import DeleteLogo from "../img/sideContent/Delete.png";
import UserPhoto from "../img/user.jpg";
import pdfLogo from "../img/pdf.jpg";
import replyBtn from "../img/replyBtn.png";
import forwardBtn from "../img/forward.png";

const SideContent = (props) => {
  return (
    <div className="">
      <div className={style.logo_actions}>
        <img src={unreadLogo} alt="unreadLogo" />
        <img src={AchieveLogo} alt="AchieveLogo" />
        <img src={LaterLogo} alt="LaterLogo" />
        <img src={ListLogo} alt="ListLogo" />
        <img src={LabelLogo} alt="LabelLogo" />
        <img src={DeleteLogo} alt="DeleteLogo" />
      </div>
      <hr className={style.hr} />
      <div className={style.message_info}>
        <p className={style.object}>Nextmail New look</p>
        <div className={style.sender}>
          <div className={style.user_photo}>
            <img src={UserPhoto} alt="UserPhoto" />
          </div>
          <div className={style.user_info}>
            <p className={style.user_name}>Salman Shah</p>
            <p className={style.user_mail}>shah.salman@gmail.com</p>
          </div>
          <p className={style.message_data}>11:00 AM, Today</p>
        </div>
        <hr className={style.hr} />
        <div className={style.message_text}>
          <p>
            Hello Adithya, Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident. Cheers DesignAvenger
          </p>
        </div>
        <hr className={style.hr} />
        <div className={style.attachment}>
          <img src={pdfLogo} alt="pdfLogo" />
          <span className={style.attachment_name}>Sample.pdf</span>
        </div>
        <div className={style.message_actions}>
          <GreenBtn logo={replyBtn} text={"Reply"} />
          <GreenBtn
            logo={forwardBtn}
            text={"Forward"}
            background={"#ffffff"}
            color={"#999EB1"}
          />
        </div>
      </div>
    </div>
  );
};

export default SideContent;
