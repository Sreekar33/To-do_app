import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  crossLine = event => {
        console.log('event 1');
        const element = event.target;
        element.classList.toggle("crossed-line");
  };
  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }
  

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  
  render() {
    return (
      <ul className="list-group">
        {this.props.items.map(item => (
          <li className="list-group-item" onClick={this.crossLine} key={item.id}>{item.text}{" "}</li>
        ))}
      </ul>
    );

  }
  crossLine = event => {
        console.log('event 2');
        const element = event.target;
        element.classList.toggle("crossed-line");

  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);
