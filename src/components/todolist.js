import React, { Component } from "react";
// import { arrayExpression } from "@babel/types";

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      userInput: "",
      items: [],
      archive: []
    };
  }

  onChange(event) {
    this.setState(
      {
        userInput: event.target.value
      },
      () => console.log(this.state.userInput)
    );
  }

  addTodo(event) {
    this.setState(prevState => {
      return { id: prevState.id + 1 };
    });
    event.preventDefault();
    this.setState(
      {
        userInput: "",
        items: [...this.state.items, this.state.userInput]
      },
      () => console.log(this.state)
    );
  }

  addArchive(items) {
    const arrayItems = this.state.items;
    const index = arrayItems.indexOf(items);
    const arch = this.state.archive.concat(arrayItems);
    arrayItems.splice(index, 1);
    this.setState({
      archive: arch,
      items: arrayItems
    });
  }

  deleteTodo(archive) {
    const array = this.state.archive;
    const index = array.indexOf(archive);
    array.splice(index, 1);
    this.setState({
      archive: array
    });
  }

  renderTodo() {
    return this.state.items.map(items => {
      return (
        <div key={items}>
          {items} |{" "}
          <span onClick={this.addArchive.bind(this, items)} id="todo">
            <i id="test" className="fas fa-archive" value={this.state.item} />
          </span>
        </div>
      );
    });
  }

  renderArchive() {
    return this.state.archive.map(archive => {
      return (
        <div key={archive}>
          {archive} |{" "}
          <span onClick={this.deleteTodo.bind(this, archive)} id="archived">
            <i className="fas fa-trash-alt" />
          </span>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <form>
          <input
            value={this.state.userInput}
            type="text"
            placeholder="Add Task"
            onChange={this.onChange.bind(this)}
          />
          <button onClick={this.addTodo.bind(this)}>Add</button>
        </form>
        <section className="row">
          <div className="col-lg-6 card">{this.renderTodo()}</div>
          <div className="col-lg-6 card">{this.renderArchive()}</div>
        </section>
      </div>
    );
  }
}
