/* NEWSITEM COMPONENT - Simple component to show passed on data from the Main component for each news item 
to reduce code complexity. */

import "./Styles/NewsItem.css";

export default function NewsItem({ item }) {

    return(
        <div className="newsItem hvr-grow">
            <div className="articleHeadWrapper">
                <a href = {item.url} target="_blank" rel="noopener noreferrer"><h1 className="articleTitle">{item.title}</h1></a>
            </div>
            <hr className="breakLine"></hr>
            <h3 className="articleAuthor">{item.author}</h3>
            <p className="articleContent">{item.description}</p>
            <p className="articleSource">Source - {item.source.name}</p>
        </div>
    );
}