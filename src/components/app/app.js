import "./app.scss";
import "../search-panel/search-panel.scss";

import { Component } from "react";

import Header from "../header/header";
import SearchPanel from "../search-panel/search-panel";
import StaffFilter from "../staff-filter/staff-filter";
import FriendsList from "../friends-list/friends-list";
import FriendsAddForm from "../friends-add-form/friends-add-form";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataFriends: [
        {
          name: "Ангелика Колягина",
          raiting: 100,
          increase: true,
          reward: true,
          id: "blinya",
        },
        {
          name: "Игорь Пинчук",
          raiting: 100,
          increase: true,
          reward: true,
          id: "chinpuk",
        },
        {
          name: "Александр Баранов",
          raiting: 79,
          increase: false,
          reward: false,
          id: "banan",
        },
        {
          name: "Антон Страхов",
          raiting: 85,
          increase: true,
          reward: true,
          id: "strazov",
        },
        {
          name: "Виктор Загорский",
          raiting: 80,
          increase: false,
          reward: false,
          id: "stathem",
        },
        {
          name: "Дарья Брюховецкая",
          raiting: 95,
          increase: true,
          reward: true,
          id: "princess",
        },
        {
          name: "Родион Смит",
          raiting: 70,
          increase: false,
          reward: false,
          id: "rodik",
        },
      ],
      friendName: "",
      raiting: false,
      all: true,
      reward: false,
    };
  }

  deleteFriend = (id) => {
    this.setState(({ dataFriends }) => ({
      dataFriends: dataFriends.filter((friend) => friend.id !== id),
    }));
  };

  addNewFriend = (friend) => {
    this.setState(({ dataFriends }) => ({
      dataFriends: dataFriends.concat(friend),
    }));
  };

  onToggleProp = (prop, id, ...properties) => {
    this.setState(({ dataFriends }) => ({
      dataFriends: dataFriends.map((friend) => {
        if (friend.id === id) {
          if ([...properties][0] === undefined) {
            return {
              ...friend,
              [prop]: !friend[prop],
            };
          } else {
            return { ...friend, [prop]: !friend[prop], raiting: [...properties][0] };
          }
        }

        return friend;
      }),
    }));
  };

  returnAllFriends = (friendsList, all, reward, raiting) => {
    if (all) {
      return friendsList;
    } else if (reward) {
      return friendsList.filter((friend) => friend.reward);
    } else if (raiting) {
      return friendsList.filter((friend) => friend.raiting > 80);
    }
  };

  searchFriendWithSubstr = (friends, str) => {
    if (str.length === 0) {
      return friends;
    }

    return friends.filter((friend) => friend.name.toLowerCase().includes(str.toLowerCase()));
  };

  onUpdateSearch = (friendName) => {
    this.setState({ friendName });
  };

  turnAll = () => {
    this.setState(() => ({
      all: true,
      reward: false,
      raiting: false,
    }));
  };

  turnReward = () => {
    this.setState(() => ({
      reward: true,
      all: false,
      raiting: false,
    }));
  };

  turnRaiting = () => {
    this.setState(() => ({
      raiting: true,
      all: false,
      reward: false,
    }));
  };

  render() {
    const { dataFriends, friendName, all, reward, raiting } = this.state;

    const dataFriendsLength = dataFriends.length;
    const bestFriendsList = dataFriends.filter((friend) => friend.raiting > 80).length;
    const friendsOfMonth = dataFriends
      .filter((friend) => friend.increase)
      .map((friend) => friend.name.toUpperCase())
      .join(", ");

    return (
      <div className="app">
        <Header
          dataFriendsLength={dataFriendsLength}
          bestFriendsList={bestFriendsList}
          friendsOfMonth={friendsOfMonth}
        />

        <div className="search-panel">
          <SearchPanel onSearch={this.onUpdateSearch} />
          <StaffFilter
            turnAll={this.turnAll}
            turnReward={this.turnReward}
            turnRaiting={this.turnRaiting}
            all={all}
            reward={reward}
            raiting={raiting}
          />
        </div>

        <FriendsList
          dataFriends={this.searchFriendWithSubstr(
            this.returnAllFriends(dataFriends, all, reward, raiting),
            friendName
          )}
          onDelete={this.deleteFriend}
          onToggleProp={this.onToggleProp}
        />

        <FriendsAddForm onAdd={this.addNewFriend} />
      </div>
    );
  }
}

export default App;
