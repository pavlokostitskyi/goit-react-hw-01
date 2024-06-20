import css from '../Profile/Profile.module.css'

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div>
        <img className={css.userImg}
          src={image}
          alt="User avatar"
          width={152}
        />

        <p className={css.useername}>{name}</p>
        <p className={css.userinfo}>@{tag}</p>
        <p className={css.userinfo}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statslist}>
          <p>Followers</p>
          <p className={css.likes}>{stats.followers}</p>
        </li>
        <li className={css.statslist}>
          <p>Views</p>
          <p className={css.likes}>{stats.views}</p>
        </li>
        <li className={css.statslist}>
          <p>Likes</p>
          <p className={css.likes}>{stats.likes}</p>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
