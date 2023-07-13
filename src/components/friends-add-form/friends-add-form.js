import "./friends-add-form.scss";

import { Component } from "react";
import nextId from "react-id-generator";

class FriendsAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friendName: "",
      raiting: "",
    };
  }

  onSetFriend = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onAddFriend = (e) => {
    e.preventDefault();

    const friend = {
      name: this.state.friendName,
      raiting: +this.state.raiting,
      increase: false,
      reward: false,
      id: nextId(),
    };

    return this.props.onAdd(friend);
  };

  render() {
    const { friendName, raiting } = this.state;

    return (
      <div className="friends-add-form">
        <h3>Добавь нового друга</h3>
        <form className="add-form d-flex">
          <input
            onChange={this.onSetFriend}
            value={friendName}
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="friendName"
          />
          <input
            onChange={this.onSetFriend}
            value={raiting}
            type="number"
            className="form-control new-post-label"
            placeholder="Рейтинг?"
            name="raiting"
          />
          <button onClick={this.onAddFriend} type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default FriendsAddForm;
