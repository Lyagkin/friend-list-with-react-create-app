import "./friends-list-item.scss";

import { Component } from "react";

class FriendsListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      raiting: this.props.raiting,
    };
  }

  onInput = (e) => {
    this.setState(() => {
      if (+e.target.value >= 0 && +e.target.value <= 100) {
        return {
          [e.target.name]: +e.target.value,
        };
      } else if (typeof e.target.value !== "number") {
        return {
          [e.target.name]: 0,
        };
      }
    });

    this.props.onToggleProp(e, +e.target.value);
  };

  render() {
    const { name, increase, reward, onDelete, onToggleProp } = this.props;

    let friendListItemClass = "list-group-item d-flex justify-content-between";

    if (increase) {
      friendListItemClass = `${friendListItemClass} increase`;
    }

    if (reward) {
      friendListItemClass = `${friendListItemClass} like`;
    }

    return (
      <li className={friendListItemClass}>
        <span data-toggle="increase" onClick={onToggleProp} className="list-group-item-label">
          {name}
        </span>
        <input
          data-toggle="raiting"
          onChange={this.onInput}
          className="list-group-item-input"
          type="text"
          value={this.state.raiting}
          name="raiting"
        />
        <div className="d-flex justify-content-center align-items-center">
          <button data-toggle="reward" onClick={onToggleProp} type="button" className="btn-cookie btn-sm">
            <i className="fas fa-cookie"></i>
          </button>

          <button onClick={onDelete} type="button" className="btn-trash btn-sm">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default FriendsListItem;
