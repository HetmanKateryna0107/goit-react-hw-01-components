import css from './User.module.css'
import PropTypes from "prop-types";
export const Profile=({avatar, username, tag, location, stats})=>{
    return(
        <div className={css.profile}>
          <div className={css.description}>
            <img
              src={avatar}
              alt="User avatar"
              className={css.avatar}
            />
            <p className="name">{username}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
          </div>
      
          <ul className={css.stats}>
            <li className={css.list}>
              <span className={css.label}>Followers</span>
              <span className={css.quantity}>{stats.followers}</span>
            </li>
            <li className={css.list}>  
                        <span className={css.label}>Views</span>
              <span className={css.quantity}>{stats.views}</span>
            </li>
            <li className={css.list}>
              <span className={css.label}>Likes</span>
              <span className={css.quantity}>{stats.likes}</span>
            </li>
          </ul>
        </div>
     )
}

Profile.propTypes={
  
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
  }),

}