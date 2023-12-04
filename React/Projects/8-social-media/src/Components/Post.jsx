import { MdDelete } from "react-icons/md";
import {PostListContext} from "../Store/post-list-store";
import { useContext } from "react";
const Post = ({ post }) => {

    const {deletePost} = useContext(PostListContext)
     


    return (

        <div  className="card mt-2  m-2" style={{ width: "18rem" }}>
            <img src=" https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/master/pass/IMG%20Worlds%20of%20Adventure%20-%201.jpg" className="card-img-top" alt="..." />
            <div className="card-body" >
                <h5 className="card-title">{post.title}

                </h5>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger  cursor-pointer" onClick={()=> deletePost(post.id)} style={{cursor: 'pointer'}}>
                    <MdDelete />
                </span>
                <p className="card-text">{post.body}</p>
                {post.tags.map((tagName) => <span className="badge text-bg-primary mx-1" key={tagName}>{tagName}</span>)}
                <span className="position-absolute bottom-0 end-0 badge     p-2 " style={{ backgroundColor: 'rgb(222, 226, 230)', color: 'gray' }}>
                    Views {post.reactions}
                </span>
            </div>
        </div>
    )
}

export default Post;