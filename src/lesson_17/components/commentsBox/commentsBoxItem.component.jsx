import * as React from 'react';

export class CommentsBoxItem extends React.Component {
  deleteItem() {
    this.props.onDelete(this.props.id);
  }
  render() {
    return <li id={this.props.id}>
      <div className="list-item__author">{this.props.author}</div>
      <div className="list-item__text">{this.props.text}</div>
      <div className="list-item__date">{this.props.date}</div>
      <button onClick={this.deleteItem.bind(this)}>DEL</button>
    </li>
  }
}