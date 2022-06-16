import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ArticleUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState({
    title: "",
    description: ""
  });

  useEffect(function() {
    axios.get(`https://articles-app-379fa-default-rtdb.firebaseio.com/articles/${id}.json`)
      .then(({ data }) => setArticle(data));
  }, [id]);

  function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    axios.put(
      `https://articles-app-379fa-default-rtdb.firebaseio.com/articles/${id}.json`, 
      Object.fromEntries(formData.entries())
    ).then(response => navigate(`/${id}`));
  }

  
  return (
    <form className="ArticleCreate" onSubmit={onFormSubmit}>
      <div>
        <label>
          Title
          <input type="text" name="title" defaultValue={article.title} required />
        </label>
      </div>
      <div>
        <label>
          Description
          <textarea type="text" name="description" defaultValue={article.description} required></textarea>
        </label>
      </div>
      <button>Submit</button>
    </form>
  );

}

export default ArticleUpdate;