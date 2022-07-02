import s from './frinedList.module.css'

export const FriendList = ({ friends }) => 
<ul class={s.friendList}>
      {
        friends.map(({ id, avatar, name, isOnline }) => (
    <li className={s.item} key={id}>
            <span className={isOnline ? s.isOnline : s.isOfline}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <p className={s.name}>{name}</p>
    </li>) )}
</ul>


