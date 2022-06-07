import React from 'react';
import "./styles.css"
import miniLogo from "../../images/mini-logo.svg";
import mail from "../../images/mail.svg";
import noAvatar from "../../images/noAvatar.svg";
import arrow from "../../images/arrow.svg";
import catIcon from "../../images/catIcon.png"

const Subscribers = () => {
    return (
        <div>
            <div className={"header-wrapper"}>
                <header className={"header"}>
                    <div className={"left-header"}>
                        <img src={miniLogo} alt={"logo"} className={"profile-mini-logo"}/>
                        <input className={"search"} placeholder={"Поиск"}/>
                        <div className={"navbar-search"}>
                            <div className={"navbar-search-cell"}>
                                <span>username</span>
                                <button className={"subscribe-button"}>Подписаться</button>
                            </div>
                            <div className={"navbar-search-cell"}>
                                <span>username</span>
                                <button className={"subscribe-button"}>Подписаться</button>
                            </div>
                            <div className={"navbar-search-cell"}>
                                <span>username</span>
                                <button className={"subscribe-button"}>Подписаться</button>
                            </div>

                        </div>
                    </div>
                    <div className={"right-header"}>
                        <img src={mail} alt={"mail"} className={"profile-mail"}/>
                        <img src={noAvatar} alt={"toolAvatar"} className={"profile-tool"}/>
                        <img src={arrow} alt={"toolArrow"} className={"profile-arrow"}/>
                    </div>
                </header>
            </div>
            <div className={"subs-wrapper"}>
                <div className={"subs-panel"}>
                    <div className={"subs-text"}>
                        <span>Подписчики</span>
                    </div>
                    <input className={"subs-search"} placeholder={"Поиск"}/>
                    <div className={"search-cell"}>
                        <div className={"subs-search-user"}>
                            <img src={catIcon} alt={"catIcon"} className={"mini-icon"}/>
                            <div className={"nickname-text-mini"}>
                                <span>username</span>
                            </div>
                        </div>
                        <button className={"subscribe-button"}>Подписаться</button>
                    </div>
                    <div className={"search-cell"}>
                        <div className={"subs-search-user"}>
                            <img src={catIcon} alt={"catIcon"} className={"mini-icon"}/>
                            <div className={"nickname-text-mini"}>
                                <span>USERNAME</span>
                            </div>
                        </div>
                        <button className={"unsubscribe-button"}>Отписаться</button>
                    </div>
                    <div className={"search-cell"}>
                        <div className={"subs-search-user"}>
                            <img src={catIcon} alt={"catIcon"} className={"mini-icon"}/>
                            <div className={"nickname-text-mini"}>
                                <span>USERNAME</span>
                            </div>
                        </div>
                        <button className={"unsubscribe-button"}>Отписаться</button>
                    </div>
                    <div className={"search-cell"}>
                        <div className={"subs-search-user"}>
                            <img src={catIcon} alt={"catIcon"} className={"mini-icon"}/>
                            <div className={"nickname-text-mini"}>
                                <span>username</span>
                            </div>
                        </div>
                        <button className={"subscribe-button"}>Подписаться</button>
                    </div>
                    <div className={"search-cell"}>
                        <div className={"subs-search-user"}>
                            <img src={catIcon} alt={"catIcon"} className={"mini-icon"}/>
                            <div className={"nickname-text-mini"}>
                                <span>username</span>
                            </div>
                        </div>
                        <button className={"subscribe-button"}>Подписаться</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribers;
