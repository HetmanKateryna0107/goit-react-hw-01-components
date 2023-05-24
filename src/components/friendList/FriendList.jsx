import { RxAccessibility } from "react-icons/rx"
import { IoCloudOffline } from "react-icons/io5"
export const FriendList=({friends })=>{
    return(
        <ul className="friend-list">
 {friends.map((friend)=>
   (  <li className="item">
     <span className="status">{friend.isOnline?<><RxAccessibility /></>:<><IoCloudOffline /></>
     }</span>
     <img className="avatar" src={friend.avatar} alt="User avatar"width="48" />
     <p className="name">{friend.name}</p>
   </li>)
 )}
</ul>
    )}