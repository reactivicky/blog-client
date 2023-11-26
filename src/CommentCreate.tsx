import axios from "axios";
import { type FormEvent, useState } from "react";

interface CommentCreateProps {
  postId: string;
}

const CommentCreate = ({ postId }: CommentCreateProps) => {
  const [content, setContent] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
        content,
      });
      setContent("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="comment">New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            className="form-control"
            id="comment"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
