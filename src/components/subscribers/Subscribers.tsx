import React from 'react';
import "./styles.css"
import catIcon from "../../images/catIcon.png"
import Navigation from "../profile/Navigation";

const Subscribers = () => {
    return (
        <div>
            <Navigation/>
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
