import { useReducer } from "react";
import { createContext } from "react";

export const PostListContext = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
});

const postListReducer = (currState, action) => {
    let newPosstList = currState;
    if (action.type === 'DELETE_POST') {
        newPosstList = currState.filter((post) => action.payload.postId !== post.id)
    }else if (action.type === 'ADD_POST'){

        newPosstList = [action.payload,...currState]

    }
    return newPosstList;

}

const PostListContextProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, DEFALUT_POST_LIST);

    const addPost = (userId, title, body, reactions, tags) => {

        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id:  Date.now(),
                title: title,
                body: body,
                reactions: reactions,
                userId: userId,
                tags: tags
            }
        })
    }

    const deletePost = (postId) => {
        dispatchPostList({
            type: 'DELETE_POST',
            payload: { postId },
        })
    }

    return (
        <PostListContext.Provider value={{
            postList: postList,
            addPost: addPost,
            deletePost: deletePost
        }}>
            {children}
        </PostListContext.Provider>
    )
}

const DEFALUT_POST_LIST = [
    {
        id: 1,
        title: "Going Mumbai",
        body: "'Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. peace out",
        reactions: 3,
        userId: 'lalitmax',
        tags: ['mumbai', 'going mumbai', 'vacation', 'enjoying']

    },
    {
        id: 2,
        title: "Passing year",
        body: "'Hi Friends, I am recently pass out from chitkara university, and got 14 lac package of this college",
        reactions: 32,
        userId: 'mayankAta',
        tags: ['college', 'passing year', 'chitkara university', 'b tech']

    }
];

export default PostListContextProvider;