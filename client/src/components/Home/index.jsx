import React, {
  useState,
  useEffect,
  Fragment
} from 'react';
import {
  Helmet
} from 'react-helmet';

const Home = () => {
  const titleTxt = 'Welcome to React Express App'.trim();
  const [title, setTitle] = useState('');
  let i = 0;
  useEffect(() => {
      const setTitleText = () => {
        if (i < titleTxt.length) {
          setTitle(prevState => prevState + titleTxt[i]);
          ++i;
        }
      }
      setTitleText();
      const timerId = setInterval(setTitleText, 150);

      return () => { clearInterval(timerId); }
  }, [i, titleTxt]);
  return (
    <Fragment>
      <Helmet>
        <title>Home | React Express App</title>
      </Helmet>
      <section className={`hero is-info is-fullheight`} style={{ marginTop: '-3rem' }}>
        <div className={`hero-body`}>
          <div className={`container`}>
            <h1 className={`has-text-centered title is-2`}>
              {title}
            </h1>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Home;