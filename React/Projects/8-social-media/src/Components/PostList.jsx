import Post from "./Post"
import { useContext } from "react";
import { PostListContext } from "../Store/post-list-store";
const PostList = () => {

    const { postList } = useContext(PostListContext);
    // console.log(postList)

    return (
        <>
        <div className="row row-cols-2 row-cols-md-0 g-1 m-2">
            {postList.map((post) => <Post post={post} key={post.id}></Post>)}
            
            </div>
        </>
    )
}
export default PostList;