import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';


const alanKey = process.env.REACT_APP_ALAN_KEY;

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if(command === 'newHeadlines') {
          setNewsArticles(articles);
        }
      }
    })
  }, [])

  return (
    <div>
      <div className={classes.logoContainer}> 
      <img src="https://alan.app/static/alan-logo-medium.79f960a7.svg" className={classes.alanLogo} alt="logo" />
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
