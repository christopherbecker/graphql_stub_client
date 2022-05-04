import { NEWS_QUERY } from "./../graphql/queries";

import { useQuery } from "@apollo/client";

import { PropsNews } from "../interfaces/InterfaceNews";
import NewsTile from "./../components/NewsTile";

const Home = () => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  let content;
  if (loading) {
    content = "Loading ...";
  } else if (error) {
    content = "Error! :(";
  } else {
    content = data?.news.map((news: PropsNews, index: number) => {
      return <NewsTile key={index} news={news} />;
    });
  }
  return (
    <div>
      <h1>The News</h1>
      <div className="news-list">{content}</div>
    </div>
  );
};

export default Home;
