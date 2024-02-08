import { useState } from "react"
import Newsitem from "./Newsitem";
import { useEffect } from "react";

const NewsBoard = () => {



    const [ articles, setArticles] = useState([]);

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));
    },[])
  return (
    
    <div>
       
        <h2 className="text-center">Latest<span className="badge bg-danger">News</span></h2>
        <div class="container">
          <div className="row">
        {articles.map((news,index) => {
            return <Newsitem key ={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        })}
        </div>
        </div>
        </div>
       
  )
}

export default NewsBoard
