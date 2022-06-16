import axios from "axios";
import { useNavigate } from "react-router-dom";

function ArticleCreate() {
  const navigate = useNavigate();

  function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    axios.post(
      'https://articles-app-379fa-default-rtdb.firebaseio.com/articles.json', 
      Object.fromEntries(formData.entries())
    ).then(response => navigate('/'));
  }

  
  return (
    <form className="ArticleCreate" onSubmit={onFormSubmit}>
      <div>
        <label>
          Title
          <input type="text" name="title" required />
        </label>
      </div>
      <div>
        <label>
          Description
          <textarea type="text" name="description" required></textarea>
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default ArticleCreate;