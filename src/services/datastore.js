import Firebase from 'firebase';

// This article helped me understand these functions better: https://firebase.google.com/docs/database/web/read-and-write

const config = {
  apiKey: 'AIzaSyAejkGRqoeOqoEa9P-REChH94dYPP1dgbk',
  authDomain: 'lab3-baileyburke.firebaseapp.com',
  databaseURL: 'https://lab3-baileyburke.firebaseio.com',
  projectId: 'lab3-baileyburke',
  storageBucket: 'lab3-baileyburke.appspot.com',
  messagingSenderId: '1025228143581',
};
Firebase.initializeApp(config);

// Get a reference to the database service
const database = Firebase.database();

// code inspired from lab instructions
export function fetchNotes(callback) {
  // do something here
  // callback() when done
  database.ref('notes').on('value', (snapshot) => {
    const newNoteState = snapshot.val();
    // do something with new note state
    callback(newNoteState);
  });
}

// manipulated these functions from lab instructions as well as https://firebase.google.com/docs/database/web/read-and-write
export function makeNote(newNote) {
  database.ref('notes').push(newNote);
}

export function update(id, fields) {
  database.ref('notes').child(id).update(fields);
}

export function deleteNote(id) {
  database.ref('notes').child(id).remove();
}
