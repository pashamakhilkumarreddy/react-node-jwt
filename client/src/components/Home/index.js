import React, { useState, useEffect, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import './index.css';

const Home = () => {
  const titleTxt = 'Welcome to React Express App';
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
    <Fragment>
      <Helmet>
        <title>Home | React Express App</title>
      </Helmet>
      <section className={`hero is-info is-large`}>
        <div className={`hero-body`}>
          <div className={`container`}>
            <h1 className={`title`}>
              {title}
            </h1>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Home;