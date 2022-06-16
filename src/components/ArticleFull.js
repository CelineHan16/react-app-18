import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ArticleFull() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(function() {
    axios.get(`https://articles-app-379fa-default-rtdb.firebaseio.com/articles/${id}.json`)
      .then(({ data }) => setArticle(data));
  }, [id]);

  let output = "Loading..."
  if (article !== null) {
    output = (
      <>
        <h1>{article.title}</h1>
        <p>{article.description}</p>

        <Link to={`/update/${id}`}><button>Update</button></Link>
        <Link to={`/delete/${id}`}><button>Delete</button></Link>
      </>
    );
  }






































  return (
    <article>
      {output}
    </article>
  );
}

export default ArticleFull;