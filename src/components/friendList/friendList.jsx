import s from './frinedList.module.css'
import PropTypes from 'prop-types'

export const FriendList = ({ friends }) => 
  { return (<ul className={s.friendList}>
        {
            friends.map(({ id, avatar, name, isOnline }) => (
        <li className={s.item} key={id}>
                <span className={isOnline ? s.isOnline : s.isOfline}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
                    <p className={s.name}>{name}</p>
        </li>) )}
    </ul>)}


FriendList.propTypes = { 
    id: PropTypes.number,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,

}