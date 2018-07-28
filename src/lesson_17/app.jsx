import * as React from 'react';
import { render } from 'react-dom';
import { CommentsBox } from './components/commentsBox/commentsBox.component.jsx';

class App extends React.Component {
  render() {
    return <CommentsBox />
  }
}

render(<App />, document.querySelector('#app'));
