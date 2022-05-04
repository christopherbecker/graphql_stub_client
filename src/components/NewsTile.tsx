import { PropsNews } from "../interfaces/InterfaceNews";
import { Link } from "react-router-dom";
import moment from "moment";

import "./NewsTile.css";

const NewsTile = ({ news }: { news: PropsNews }) => {
  return (
    <div className="tile">
      <Link to={`/view/${news.uuid}`}>
        <h2>{news.title}</h2>
      </Link>
      <div className="flex">
        <span>
          by <strong>{news.author}</strong>
        </span>
        <span className="text-right">
          {moment(news.date).startOf("hour").fromNow()} | {news.likes}{" "}
          {news.likes === 1 ? `Like` : `Likes`}
        </span>
      </div>
    </div>
  );
};

export default NewsTile;
