import React, { useEffect, useState } from 'react';
import News from './News/News';
import '../../Components/TopHeadLin/News/News.css';


const TopHeadLin = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=48cc1b95e7784f6abf02203072bd4b05";
        fetch(url)
            .then(res => res.json())
            .then(data => setNews(data.articles))
    }, [])
    return (
        <div >
            <h1>Top Head Lin NEWS {news.length}</h1>
          <div className="news-aria">
          {
                news.map(news => <News news ={news}></News>)
            }
          </div>
            
        </div>
    );
};

export default TopHeadLin;