import "./header.scss";

function Header({ dataFriendsLength, bestFriendsList, friendsOfMonth }) {
  return (
    <div className="header">
      <h1>Общее число друзей Виктора: {dataFriendsLength}</h1>
      <h2>Количество близких друзей: {bestFriendsList}</h2>
      <h2>
        Топ этого месяца: <span className="topFriend">{friendsOfMonth}</span>
      </h2>
    </div>
  );
}

export default Header;
