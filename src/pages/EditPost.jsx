import { useEffect, useState } from "react";
import { Container, PostFrom } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";
function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPostById(slug).then((post) => {
        if (post) {
          setPost(post);
        }
        console.log(post, "from edit");
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostFrom post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
