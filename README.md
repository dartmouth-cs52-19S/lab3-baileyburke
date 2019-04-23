# Lab 3: React Notes

## Bailey Burke

## CS 52 Spring 2019

### Description 

For this lab I made a React app using the React framework/components that allowed for the input of user data to build a note. During part 1, the app stored all of the state in memory. Then, in part 2, I added Firebase as its back-end to store a collection of notes. This allowed the notes to be opened in multiple browsers, and allowed for functionality between all open browsers of the page in real time. 

### What worked

* Tim's code for parts of functions helped tremendously. I basically manipulated that code or read the articles that he referenced if I was stuck. 
* The CSS styling was much easier in these labs, I think at this point just because we have had experience with it. 
*  SA4 helped with the input bar component

### What didn't work

* It honestly took me a long, long time to even understand what I had to do for this lab. I didn't understand at first what exactly had to go in each function in the index.js versus the note.js. It also took me a bit to understand how to do the render() functions properly/how to structure them. 
* I still don't really know all of the syntax of JSX.
*  Props and states confused me in the begining of the lab.
*  I chose to do (for the update function) in place editing, and switched out the display JSX for an editing box. I switched a couple of time deciding how/where I should alter my functions based on if the state "isEditing" is true or false. 
*  It was hard for me to conceptually understand the reading from firebase aspect of the lab. More specifically, what the fetchNotes and componentDidMount functions do. 
*  I was confused on where to put my newNote "object." I didn't know if it had to be in the state or not. But once I visualized that once the user typed in the Title of the note, which then got sent to index after submit was pressed and THEN the actual note was created, that helped me. 

Overall, thinking about each component/piece of the lab before coding helped a lot, and so did previous short assignments/Tim's code. My references are included in my files as well. Thank you! 

