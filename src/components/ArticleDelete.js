// import {  } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ArticleDelete() {
  const { id } = useParams();
  const navigate = useNavigate();

  function onFormSubmit(event) {
    event.preventDefault();

    axios.delete(`https://articles-app-379fa-default-rtdb.firebaseio.com/articles/${id}.json`).then(response => navigate('/'));
  }
  
  return (
    <form className="ArticleDelete" onSubmit={onFormSubmit}>
      <h1>Are you sure?</h1>
      <button>YES</button>
    </form>
  );

}

export default ArticleDelete;