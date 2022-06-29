/*MAIN COMPONENT - Basic functionality for the news reader with API calls and sorting 
based on selected source.*/

import {useState, useEffect} from "react";
import Axios from "axios";
import NewsItem from "./NewsItem";
import "./Styles/Main.css";
import {APIURL} from "./Constants";

export default function Main(){
    // Set required states to store articles in a list and for filtering functionality.
    const [articles, setArticles] = useState([]);
    const [selectedSource, setSelectedSource] = useState("");

    // Populate sources list with sources from articles list.
    const listOfSources = [...new Set(articles.map(function (item) {
        return item.source.name === null ? null : item.source.name; 
    }))];

    // API call to populate articles list
    useEffect(() => {
        Axios.get(APIURL)
        .then
            ((response) => {setArticles(response.data.articles)});
    }, [])

    return(
        <div className="newsReader">
            <div className="headerWrapper">
            <h1 className="title">Kolmeo News Reader</h1>
                <select className="filterBox" value = {selectedSource} onChange = {(e) => setSelectedSource(e.target.value)}>
                    <option value="">All Sources</option>
                    {
                        // Add each source from list of sources to dropdown box
                        listOfSources.map((item) => (
                            <option key = {item} value = {item}>{item}</option>
                    ))}
                </select>
            </div>
            
            {   
                // If no source has been selected, show all news articles.
                selectedSource === ""?
                    articles.map((item) => 
                    (
                        <NewsItem item = {item}/>
                    ))
                    :
                    articles.map((item) => 
                    (
                        // Checks if item to be mapped has the same source name as the selected source.
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