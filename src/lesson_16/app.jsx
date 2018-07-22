import * as React from 'react';
import { render } from 'react-dom';
import { Ajax } from '../lesson_15/utils/ajax';

class Header extends React.Component {
  render() {
    const test = 'HELLO FORM CONST'
    return <header className='page-header'>Here will be page header, {test}</header>
  }
}

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };

    Ajax.get(
      'http://localhost:4001/list',
      (resp) => {
        this.setState({
            tasks: resp
        });
      },
      (e) => {
        console.log(e);
      }
    )
  }

  render() {
    const listItemsElements = [];
    
    this.state.tasks.forEach((item) => {
      const li = <li>{ item.title }</li>;

      listItemsElements.push(li);
    });

    return <main className='page-content'>{ listItemsElements }</main>
  }
}

class App extends React.Component {
  render() {
    return <div>
      <Header  />
      <Content />
    </div>
  }
}

render(<App />, document.querySelector('#app'));

