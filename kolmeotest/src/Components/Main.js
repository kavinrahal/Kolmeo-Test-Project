import {useState, useEffect} from "react";
import Axios from "axios";
import {Link} from "react-router-dom";

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
        <div>
            <select className="filterBox" value = {selectedSource} onChange = {(e) => setSelectedSource(e.target.value)}>
                <option value="">All Sources</option>
                {listOfSources.map((item) => (
                    <option key = {item} value = {item}>{item}</option>
                ))}
            </select>
            {selectedSource == ""?
                articles.map((item) => 
                (
                    <div>
                        <a href = {item.url} target="_blank" rel="noopener noreferrer"><h1>{item.title}</h1></a>
                        <h3>{item.author}</h3>
                        <p>{item.content}</p>
                        <p>{item.source.name}</p>
                    </div>
                ))
                :
                articles.map((item) => 
                (
                    item.source.name == selectedSource ?
                    <div>
                        <a href = {item.url} target="_blank" rel="noopener noreferrer"><h1>{item.title}</h1></a>
                        <h3>{item.author}</h3>
                        <p>{item.content}</p>
                        <p>{item.source.name}</p>
                    </div>
                    :
                    null
                ))
            
            }
        </div>
    );
}