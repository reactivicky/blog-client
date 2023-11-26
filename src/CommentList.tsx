import axios from "axios";
import { useState, useEffect } from "react";

interface CommentListProps {
  postId: string;
}

interface Comment {
  id: string;
  content: string;
}

const CommentList = ({ postId }: CommentListProps) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4001/posts/${postId}/comments`
        );
        setComments(res.data.data.comments);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComments();
  }, [postId]);

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.content}</li>
      ))}
    </ul>
  );
};

export default CommentList;
