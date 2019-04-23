import React, { Component } from 'react';
import Draggable from 'react-draggable';
import marked from 'marked';
import TextareaAutosize from 'react-textarea-autosize';


class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
    };
    this.onTitleInput = this.onTitleInput.bind(this);
    this.onContentInput = this.onContentInput.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onDrag = this.onDrag.bind(this);
  }

  // I based the following functions on the manipulation of the examples in this article: https://www.freecodecamp.org/forum/t/how-works-event-target-value/230553

  onTitleInput(event) {
    this.props.update(this.props.id, { title: event.target.value });
  }

  onContentInput(event) {
    this.props.update(this.props.id, { text: event.target.value });
  }

  onDelete(event) {
    this.props.deleteNote(this.props.id);
  }

  onDrag(e, ui) {
    this.props.update(this.props.id, { x: ui.x, y: ui.y });
  }

  // got help with how to call a function above from within the rendering functions from this article: https://www.freecodecamp.org/forum/t/how-works-event-target-value/230553
  // understood how to use TextareaAutosize from https://github.com/andreypopp/react-textarea-autosize
  // understood draggable from https://github.com/mzabriskie/react-draggable
  // read more about prop calling from https://stackoverflow.com/questions/41968835/how-to-call-prop-function-with-an-argument

  renderSomeSection() {
    if (this.state.isEditing) {
      return (
        <div className="edit">
          <div className="editTitle">
            <input placeholder="Type New Title" onChange={this.onTitleInput} value={this.props.note.title} />
            <button type="submit" onClick={() => this.setState({ isEditing: false })}> Submit Changes </button>
          </div>
          <div>
            <TextareaAutosize onChange={this.onContentInput} value={this.props.note.text} />
          </div>
        </div>
      );
    } else {
      return (
        <Draggable
          handle=".move-note"
          grid={[25, 25]}
          defaultPosition={{ x: 20, y: 20 }}
          position={{ x: this.props.note.x, y: this.props.note.y }}
          onStart={this.onStartDrag}
          onDrag={this.onDrag}
          onStop={this.onStopDrag}

        >
          <div className="normal">
            <div className="overall">
              <span id="editTools">
                <button type="button" onClick={() => this.setState({ isEditing: true })}>
                  <i className="far fa-edit" />
                </button>
                <button type="button" onClick={this.onDelete}>
                  <i className="fas fa-trash-alt" />
                </button>
                <span className="move-note">
                  <i className="far fa-hand-rock" />
                </span>
              </span>
              <span id="noteTitle">
                {this.props.note.title}
              </span>

            </div>
            <div className="normalContent">
              <div className="noteBody"
                dangerouslySetInnerHTML={{ __html: marked(this.props.note.text || '') }
            }
              />
            </div>
          </div>
        </Draggable>
      );
    }
  }

  // instructions helped a lot for the inspiration of render and renderSomeSection code
  render() {
    return (
      <div>
        {this.renderSomeSection()}
      </div>
    );
  }
}

export default Note;
