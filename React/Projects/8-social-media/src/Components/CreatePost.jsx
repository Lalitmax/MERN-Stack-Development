import React, { useRef, useContext } from "react";
import { PostListContext } from "../Store/post-list-store";

const CreatePost = () => {
    const { addPost } = useContext(PostListContext);

    const userIdElement = useRef();
    const titleElement = useRef();
    const bodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();

    const handleOnSubmit = (event) => {
        event.preventDefault();

        const userId = userIdElement.current.value;
        const title = titleElement.current.value;
        const body = bodyElement.current.value;
        const reactions = reactionsElement.current.value;
        const tags = tagsElement.current.value.split(" ");
        userIdElement.current.value = "";
        titleElement.current.value = "";
        bodyElement.current.value = "";
        reactionsElement.current.value = "";
        tagsElement.current.value = "";

        addPost(userId, title, body, reactions, tags);
    };

    return (
        <form className="createPost " onSubmit={handleOnSubmit}>
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">
                    Enter User Id
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="userId"
                    ref={userIdElement}
                    placeholder="Enter userid"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Post Title
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    ref={titleElement}
                    placeholder="Give short title"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="body" className="form-label">
                    Post Content
                </label>
                <textarea
                    type="text"
                    rows={5}
                    className="form-control"
                    id="body"
                    ref={bodyElement}
                    placeholder="How are you feeling today..."
                />
            </div>

            <div className="mb-3">
                <label htmlFor="reactions" className="form-label">
                    Enter how many reacted on this post
                </label>
                <input
                    type="number"
                    className="form-control"
                    id="reactions"
                    ref={reactionsElement}
                    placeholder="No of"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="tags" className="form-label">
                    Enter hashTags of Post related using space
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="tags"
                    ref={tagsElement}
                    placeholder="hashTags..."
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

export default CreatePost;
