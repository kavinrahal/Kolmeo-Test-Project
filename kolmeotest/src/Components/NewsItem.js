import "./Styles/NewsItem.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function NewsItem({ item }) {
    AOS.init();

    return(
        <div className="newsItem hvr-grow">
            <div className="articleHeadWrapper">
                <a href = {item.url} target="_blank" rel="noopener noreferrer"><h1 className="articleTitle">{item.title}</h1></a>
            </div>
            <hr className="breakLine"></hr>
            <h3 className="articleAuthor">{item.author}</h3>
            <p className="articleContent">{item.content}</p>
            <p className="articleSource">Source - {item.source.name}</p>
        </div>
    );
}