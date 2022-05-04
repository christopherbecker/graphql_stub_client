import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { NEWS_ARTICLE_QUERY, NEWS_QUERY } from "./../graphql/queries";
import { ADD_LIKE_MUTATION } from "./../graphql/mutations";
import { REMOVE_LIKE_MUTATION } from "./../graphql/mutations";
import { REMOVE_NEWS_MUTATION } from "./../graphql/mutations";
import { useMutation, useQuery } from "@apollo/client";

const ViewNews = () => {
  let { id } = useParams();
  const { loading, error, data } = useQuery(NEWS_ARTICLE_QUERY, {
    variables: { id },
  });
  const updateQueries = [
    {
      query: NEWS_ARTICLE_QUERY,
      variables: { id },
    },
    {
      query: NEWS_QUERY,
    },
  ];
  const [addLike] = useMutation(ADD_LIKE_MUTATION, {
    refetchQueries: updateQueries,
  });
  const [removeLike] = useMutation(REMOVE_LIKE_MUTATION, {
    refetchQueries: updateQueries,
  });
  const [removeNews] = useMutation(REMOVE_NEWS_MUTATION, {
    refetchQueries: updateQueries,
  });

  return (
    <div>
      {loading && <p>Loading ...</p>}
      {error && <p>Error! Could not load.</p>}
      {data && data.singleNews === null && <p>Oops! Nothing to show here.</p>}
      {data && data?.singleNews !== null && (
        <div>
          <h1>{data?.singleNews.title}</h1>
          <div className="flex news-list">
            <span>
              by <strong>{data.singleNews.author}</strong>
            </span>
            <span className="text-right">
              {moment(data.singleNews.date).startOf("hour").fromNow()} |{" "}
              {data.singleNews.likes}{" "}
              {data.singleNews.likes === 1 ? `Like` : `Likes`}
            </span>
          </div>
          <p>{data.singleNews.text}</p>
          <div>
            <button
              onClick={() =>
                addLike({
                  variables: { id },
                })
              }
            >
              Like
            </button>
            <button
              disabled={data.singleNews.likes === 0}
              onClick={() =>
                removeLike({
                  variables: { id },
                })
              }
            >
              Dislike
            </button>
            <button
              onClick={() =>
                removeNews({
                  variables: { id },
                })
              }
            >
              Remove News
            </button>
          </div>
          <p>uuid: {data.singleNews.uuid}</p>
        </div>
      )}
    </div>
  );
};

export default ViewNews;
