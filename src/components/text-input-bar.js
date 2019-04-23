import React, { Component } from 'react';

// This code was based on my SA4 with the youtube search bar
class TextInputBar extends Component {
  constructor(props) {
    super(props);

    this.state = { title: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onTextSubmit = this.onTextSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ title: event.target.value });
  }

  onTextSubmit(event) {
    event.preventDefault();
    this.props.makeNote(this.state.title);
    this.setState({ title: '' });
  }

  render() {
    return (
      <div id="inputBar">
        <input id="placeTitle" placeholder="Title your new note " onChange={this.onInputChange} value={this.state.title} />
        { // need the new value at end of line so it can pick back up the empty title after submission and use placeholder
        }
        <button onClick={this.onTextSubmit} type="button"> Submit </button>
      </div>
    );
  }
}

export default TextInputBar;
