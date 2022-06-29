import {useState, useEffect} from "react";
import Axios from "axios";
import NewsItem from "./NewsItem";
import "./Styles/Main.css";

export default function Main(){
    const [articles, setArticles] = useState([]);
    const [selectedSource, setSelectedSource] = useState("");
    const listOfSources = [...new Set(articles.map(function (item) {
        return item.source.name === null ? null : item.source.name; 
    }))];

    useEffect(() => {
        Axios.get("https://newsapi.org/v2/top-headlines?language=en&apiKey=96e7efbae84544aca2e40f5834bf2777")
        .then
            ((response) => {setArticles(response.data.articles)});
    }, [])

    return(
        <div className="newsReader">
            <select className="filterBox" value = {selectedSource} onChange = {(e) => setSelectedSource(e.target.value)}>
                <option value="">All Sources</option>
                {listOfSources.map((item) => (
                    <option key = {item} value = {item}>{item}</option>
                ))}
            </select>
            {selectedSource === ""?
                articles.map((item) => 
                (
                    <NewsItem item = {item}/>
                ))
                :
                articles.map((item) => 
                (
                    item.source.name === selectedSource ?
                    <div className="newsItemWrapper">
                        <NewsItem item = {item}/>
                    </div>
                    :
                    null
                ))
            
            }
        </div>
    );
}