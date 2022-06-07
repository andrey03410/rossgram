import React from 'react';
import "./styles.css"
import miniLogo from "../../images/mini-logo.svg"
import mail from "../../images/mail.svg"
import arrow from "../../images/arrow.svg"
import noAvatar from "../../images/noAvatar.svg"
import noPosts from "../../images/noPosts.svg"
import img from "../../images/cat.png"
import Navigation from "./Navigation";
import {Link} from "react-router-dom";

interface Ipost {
    id: number;
    imageurl: string;
    date: string; // iso  YYYY-MM-DD Thh:mm:ss
}

interface Iprofile {
    nickname: string;
    firstName: string;
    lastName: string;
    avatar: string;
    postIDs: Ipost['id'][];
    subscribersNicknames: Iprofile['nickname'][];
    subscriptionsNicknames: Iprofile['nickname'][];
}

const myProfile: Iprofile = {
    nickname: "228",
    firstName: "Иван",
    lastName: "Иванов",
    avatar: "",
    postIDs: [],
    subscribersNicknames: [],
    subscriptionsNicknames: []
}

const Profile = () => {
    return (
        <div>
            <Navigation/>
            <div className={"profile-wrapper"}>
                <div className={"profile"}>
                    <div className={"profile-info-panel"}>
                        <img src={noAvatar} alt={"avatar"} className={"profile-avatar"}/>
                        <div className={"profile-info"}>
                            <div className={"nickname-text"}>
                                <div className={"profile-info-up"}>
                                    <span>{myProfile.nickname}</span>
                                    <button className={"add-post"}>Добавить пост</button>
                                </div>
                            </div>
                            <p style={{fontSize: "20px"}}>{myProfile.firstName + " " + myProfile.lastName}</p>
                            <div className={"profile-info-down"}>
                                <div><span className={"profile-number"}>{myProfile.postIDs.length} </span> постов</div>
                                <div><span
                                    className={"profile-number"}>{myProfile.subscribersNicknames.length} </span>
                                    <label>
                                        <Link to={"/profile/subs"} className={"ref"}> подписчиков </Link>
                                    </label>
                                </div>
                                <div style={{marginRight: "75px"}}><span
                                    className={"profile-number"}>{myProfile.subscriptionsNicknames.length} </span>
                                    <label>
                                        <Link to={"/profile/subs"} className={"ref"}> подписок </Link>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"posts"}>
                        <img src={img} alt={"noPosts"} className={"picture"}/>
                        <img src={img} alt={"noPosts"} className={"picture"}/>
                        <img src={img} alt={"noPosts"} className={"picture"}/>
                        <img src={img} alt={"noPosts"} className={"picture"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;