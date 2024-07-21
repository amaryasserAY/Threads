import UserHeader from "../Components/UserHeader";
import UserPost from "../Components/UserPost";

function Userpage (){
    return(
    <>
    <UserHeader/>
    <UserPost  likes={1200} replies={481} postImg="/post1.png" postTitle="let 's talk about threads."  />
    <UserPost  likes={322} replies={60} postImg="/post2.png" postTitle="l Love"  />
    <UserPost  likes={500} replies={52} postImg="/post3.png" postTitle="Let Code Clone"  />
 
    
    </>
    )
}


export default Userpage;