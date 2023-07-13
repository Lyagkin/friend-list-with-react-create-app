import "./friends-list.scss";

import { Component } from "react";

import FriendsListItem from "../friends-list-item/friends-list-item";

class FriendsList extends Component {
  render() {
    const { dataFriends, onDelete, onToggleProp } = this.props;

    const friendsComponent = dataFriends.map((friend) => (
      <FriendsListItem
        key={friend.id}
        name={friend.name}
        raiting={friend.raiting}
        increase={friend.increase}
        reward={friend.reward}
        onDelete={() => onDelete(friend.id)}
        onToggleProp={(e, raiting) => {
          onToggleProp(e.currentTarget.getAttribute("data-toggle"), friend.id, raiting);
        }}
      />
    ));

    return <ul className="friends-list list-group">{friendsComponent}</ul>;
  }
}

export default FriendsList;
