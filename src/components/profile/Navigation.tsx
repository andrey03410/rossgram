import React, {useState} from 'react';
import img from "../../images/cat.png";
import miniLogo from "../../images/mini-logo.svg";
import mail from "../../images/mail.svg";
import noAvatar from "../../images/noAvatar.svg";
import arrow from "../../images/arrow.svg";
import add from "../../images/add-post.svg"
import {Link, Navigate} from "react-router-dom";

const Navigation = () => {
    const [feedRef, setFeedRef] = useState(false)
    if(feedRef){
        return <Navigate to={"/feed"}/>
    }
    return (
        <div className={"header-wrapper"}>
            <header className={"header"}>
                <div className={"left-header"}>
                    <img src={miniLogo} alt={"logo"} className={"profile-mini-logo"}/>
                    <input className={"search"} placeholder={"Поиск"}/>
                </div>
                <div className={"right-header"}>
                    <img src={add} alt={"add-post"} className={"plus"}/>
                    <label>
                        <Link to="/feed">
                            <img src={mail} alt={"mail"} className={"profile-mail"}/>
                        </Link>
                    </label>
                    <label>
                        <Link to="/profile">
                            <img src={noAvatar} alt={"toolAvatar"} className={"profile-tool"}/>
                        </Link>
                    </label>
                    <img src={arrow} alt={"toolArrow"} className={"profile-arrow"}/>
                </div>
            </header>
        </div>
    );
};

export default Navigation;