import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'immutable';
import Note from './components/note';
import * as db from './services/datastore';
import TextInputBar from './components/text-input-bar';
import './style.scss';

// commented out the inside of my functions that I used before implementing the back-end
// read more about setState here: https://medium.freecodecamp.org/functional-setstate-is-the-future-of-react-374f30401b6b

class App extends Component {
  constructor(props) {
    super(props);
    // state code from lab instructions
    this.state = {
      // eslint-disable-next-line new-cap
      notes: Map(),
    //   uniqueID: 0,
    };
    this.makeNote = this.makeNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    db.fetchNotes((notes) => {
      // eslint-disable-next-line new-cap
      this.setState({ notes: Map(notes) });
    });
  }

  // following functions based off of Professor Tregubov's code in lab instructions
  makeNote = (inputTitle) => {
    const newNote = {
      title: inputTitle,
      text: '',
      x: 0,
      y: 0,
      zIndex: 0,
    };
    // this.setState(prevState => ({
    //   // eslint-disable-next-line react/no-access-state-in-setstate
    //   notes: prevState.notes.set(this.state.uniqueID, newNote),
    // }));
    // this.state.uniqueID += 1;
    db.makeNote(newNote);
  }

  deleteNote = (id) => {
    // this.setState(prevState => ({
    //   notes: prevState.notes.delete(id),
    // }));
    db.deleteNote(id);
  }

  update = (id, fields) => {
    // this.setState(prevState => ({
    //   notes: prevState.notes.update(id, (n) => { return Object.assign({}, n, fields); }),
    // }));
    db.update(id, fields);
  }


  render() {
    return (
      <div>
        <h1>Note Taking App Woohoo!</h1>
        <div id="bar">
          <TextInputBar makeNote={title => this.makeNote(title)} />
        </div>
        { // code below based on Prof's code in the instructions
}
        <div id="actualNote">
          {this.state.notes.entrySeq().map(([id, note]) => {
            return (<Note id={id} note={note} title={note.title} deleteNote={this.deleteNote} update={this.update} />);
          })}
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('main'));
