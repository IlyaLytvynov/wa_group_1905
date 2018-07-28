import * as React from 'react';
import { Ajax } from '../../../lesson_15/utils/ajax';
import { CommentsBoxItem } from './commentsBoxItem.component.jsx';

export class CommentsBox extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
  }

  componentWillMount() {
    this.load();
  }

  load() {
    Ajax.get('http://localhost:4001/comments',
    (resp) => {
      this.setState({
          tasks: resp
      });
    },
    (e) => {
      console.log(e);
    }
  );
  }

  deleteItem(id) {
    Ajax.delete(
      `http://localhost:4001/comments/${id}`,
      () => {
        const newTasks = this.state.tasks.filter((item) => item.id !== id);
        this.setState({
          tasks: newTasks
        });
      //   this.setState({
      //     tasks: resp
      // });
      },
      (e) => {
        console.log(e)
      }
    );
  }

  render() {
    const listItemsElements = [];
    
    this.state.tasks.forEach((item) => {
      const li = <CommentsBoxItem 
        id={item.id}
        onDelete={this.deleteItem.bind(this)}
        author={item.author} 
        text={item.text} 
        date={item.date}/>;

      listItemsElements.push(li);
    });

    return <div className="comments-box">
      <form action="" className="comments-box__form">
        <input type="text"/>
        <textarea id="" cols="30" rows="10"></textarea>
        <button >Add comment</button>
      </form>
      <button onClick={this.load.bind(this)}>Load data</button>
      <ul className="comments-box__comments">
        {listItemsElements}
      </ul>
    </div>
  }
}