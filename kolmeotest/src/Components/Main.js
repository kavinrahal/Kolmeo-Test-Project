import {useState, useEffect} from "react";
import Axios from "axios";

export default function Main(){
    const [articles, setArticles] = useState([]);
    const [selectedSource, setSelectedSource] = useState("");

    useEffect(() => {
        Axios.get("https://newsapi.org/v2/top-headlines?language=en&apiKey=96e7efbae84544aca2e40f5834bf2777")
        .then
            ((response) => {setArticles(response.data.articles)});
    }, [])

    return(
        <div>
            {articles.map((item) => 
                (
                    <div>
                        <h1>{item.title}</h1>
                        <h3>{item.author}</h3>
                        <p>{item.content}</p>
                        <p>{item.source.name}</p>
                    </div>
                ))}
        </div>
    );
}