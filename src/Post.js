import { format } from 'date-fns';
import { Link } from 'react-router-dom';

function Post({_id, title, summary, cover, content, createdAt, author}) {
    return(
        <div className="post">
        <div className="image">
          <Link to={`/post/${_id}`}>
            <img src={"http://localhost:4000/"+cover} alt="Credible" />
          </Link>
        </div>
        <div className="text title">
          <Link to={`/post/${_id}`}>
            <h2>{title}</h2>
          </Link>
          <p className="info">
            <a className="author">{author.username}</a>
            <time>{format(new Date(createdAt), "MMM d, yyyy HH:mm")}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
    )
}

export default Post;


// npm i react-time-ago