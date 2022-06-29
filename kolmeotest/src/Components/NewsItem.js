import "./Styles/NewsItem.css";


export default function NewsItem({ item }) {
    return(
        <div className="newsItem">
            <a href = {item.url} target="_blank" rel="noopener noreferrer"><h1 className="articleTitle">{item.title}</h1></a>
            <h3 className="articleAuthor">{item.author}</h3>
            <p className="articleContent">{item.content}</p>
            <p className="articleSource">Source - {item.source.name}</p>
        </div>
    );
}