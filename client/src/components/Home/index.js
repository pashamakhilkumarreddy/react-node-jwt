import React, { useState, useEffect } from 'react';
import './index.css';

const Home = () => {
    const titleTxt = 'Welcome to React Node App';
    const [title, setTitle] = useState(titleTxt);
    let i = 0;
    useEffect(() => {
        const setTitleText = (speed = 50) => {
            if(i < titleTxt.length) {
                i++;
                setTitle(title + titleTxt.charAt(i));
                setTimeout(setTitleText, speed);
            }
        }
        setTitleText();
    }, []);
    return (
        <section className={`hero is-info is-large`}>
            <div className={`hero-body`}>
                <div className={`container`}>
                    <h1 className={`title`}>
                        {title}
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default Home;