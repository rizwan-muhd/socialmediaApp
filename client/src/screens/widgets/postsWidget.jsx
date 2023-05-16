import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { setPosts } from "../../state";
import PostWidget from "./postWidget"

const PostsWidget =({userId,isProfile = false})=>{
    const dispatch = useDispatch();
    // const posts = useSelector((state)=> state.posts);
    // const token= useSelector((state)=>state.token)
     const Posts =[1,2,3]

    return (
        <>
        {Posts.map(({  _id,
            userId,
            firstName,
            lastName,
            description,
            location,
            picturePath,
            userPicturePath,
            likes,
            comments,})=>{
                return( <PostWidget
                    // key={_id}
                    // postId={_id}
                    // postUserId={userId}
                    // name={`${firstName} ${lastName}`}
                    // postDescription={ description}
                    // postLocation={location}
                    // postPicturePath={picturePath}
                    // postUserPicturePath={userPicturePath}
                    // postLikes={likes}
                    // postComments={comments}
                />)
            
        })}
        </>
    )
}

export default PostsWidget