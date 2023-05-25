import css from './FriendList.module.css'
import { RxAccessibility } from "react-icons/rx"
import { IoCloudOffline } from "react-icons/io5"
export const FriendList=({friends })=>{
    return(
        <ul className={css.friendList}>
 {friends.map((friend)=>
   (  <li className={css.item}>
     <span className="status">{friend.isOnline?<><RxAccessibility /></>:<><IoCloudOffline /></>
     }</span>
     <img className="avatar" src={friend.avatar} alt="User avatar"width="48" />
     <p className={css.name}>{friend.name}</p>
   </li>)
 )}
</ul>
    )}