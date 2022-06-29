
export default function NewsItem({ item }) {
    return(
        <div className="newsItem">
            <a href = {item.url} target="_blank" rel="noopener noreferrer"><h1>{item.title}</h1></a>
            <h3>{item.author}</h3>
            <p>{item.content}</p>
            <p>{item.source.name}</p>
        </div>
    );
}