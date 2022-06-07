import React from 'react';
import Navigation from "./Navigation";
import img from "../../images/cat.png"

const Feed = () => {
    return (
        <div>
            <Navigation/>
            <div className={"profile-wrapper"}>
                <div className={"profile"}>
                    <div className={"posts"}>
                        <div className={"feed-post"}>
                            <img src={img} alt={"post"} className={"feed-post"}/>
                            <span>@kek_228</span>
                        </div>
                        <div className={"feed-post"}>
                            <img src={img} alt={"post"} className={"feed-post"}/>
                            <span>@kek_228</span>
                        </div>
                        <div className={"feed-post"}>
                            <img src={img} alt={"post"} className={"feed-post"}/>
                            <span>@kek_228</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feed;