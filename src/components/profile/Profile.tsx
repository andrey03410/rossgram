import React from 'react';
import "./styles.css"
import miniLogo from "../../images/mini-logo.svg"
import mail from "../../images/mail.svg"
import arrow from "../../images/arrow.svg"
import noAvatar from "../../images/noAvatar.svg"
import noPosts from "../../images/noPosts.svg"
import img from "../../images/cat.png"

const Profile = () => {
    return (
        <div>
            <div className={"header-wrapper"}>
                <header className={"header"}>
                    <div className={"left-header"}>
                        <img src={miniLogo} alt={"logo"} className={"profile-mini-logo"}/>
                        <input className={"search"} placeholder={"Поиск"}/>
                    </div>
                    <div className={"right-header"}>
                        <img src={mail} alt={"mail"} className={"profile-mail"}/>
                        <img src={noAvatar} alt={"toolAvatar"} className={"profile-tool"}/>
                        <img src={arrow} alt={"toolArrow"} className={"profile-arrow"}/>
                    </div>
                </header>
            </div>
            <div className={"profile-wrapper"}>
                <div className={"profile"}>
                    <div className={"profile-info-panel"}>
                        <img src={noAvatar} alt={"avatar"} className={"profile-avatar"}/>
                        <div className={"profile-info"}>
                            <div className={"nickname-text"}>
                                <div className={"profile-info-up"}>
                                    <span>Kek_228</span>
                                    <button className={"add-post"}>Добавить пост</button>
                                </div>
                            </div>
                            <p style={{fontSize: "20px"}}>Иван Иванов</p>
                            <div className={"profile-info-down"}>
                                <div> <span className={"profile-number"}>0 </span> постов</div>
                                <div> <span className={"profile-number"}>5 </span> подписчиков</div>
                                <div style={{marginRight : "75px"}}><span className={"profile-number"}>7 </span> подписок</div>
                            </div>
                        </div>
                    </div>
                    <div className={"posts"}>
                        <img src={img} alt={"noPosts"} className={"picture" }/>
                        <img src={img} alt={"noPosts"} className={"picture"}/>
                        <img src={img} alt={"noPosts"} className={"picture" }/>
                        <img src={img} alt={"noPosts"} className={"picture" }/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;