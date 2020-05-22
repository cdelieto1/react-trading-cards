"use strict";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        Welcome to the page!
        <a href="/cards"> Cards page </a>
        <img src="/static/img/balloonicorn.jpg" />
      </div>
    );
  }
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
