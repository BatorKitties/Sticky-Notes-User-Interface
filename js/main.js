const btnAddNote = document.queryselector (".add-note"); //this is the button that will add the note the add-note is the class name that we have in the html
const notesContainer = document.querySelector (".notes-container"); //this is the container that will hold the notes the notes-container is the class name that we have in the html

/*

<div class="note note-style-2">
        <input type="text" class="note-title" placeholder="Enter note title...">
        <textarea class="note-body" placeholder="Enter note body..."></textarea>
        </div>

*/ //this is a reference to the html structure we will be building using javascipt DOM within the function below

function createNoteElement() { //this function is purely responsible for creating the note element itself
    const note = document.createElement ("div"); //this is a div for the parent element with a class of note as seen in the refrerence above, this is also a note container now we have the notes container which is the container for all the notes but this is the parent container for the title and text area on an individual note basis
    const title = document.createElement ("input"); //this is the input for the title of the note as shown in the reference above were using an input type of text to allow the user to input a title for their notes
    const body = document.createElement ("textarea"); //this is the text area its the note body i want a multi line input field, which is why i chose text area
//now we've created these three elements as shown in the reference above inside the javascript we can now begin to build up on those elements and use many of the methods we know

    note.classList.add ("note", "note-style-1"); //this is the note parent itself were using the class list method to add some classes to the note and by default the note is going to get the first style being the yellow background because note-style-1 is the first style, were gonna be adjusting this to get a random color instead of just using the yellow

    console.log(note);
}

btnAddNote.addEventListener ("click", () => { //this is the event listener that will listen for the click on the button, this says that when the button is clicked, the function will run
    const note = createNoteElement(); //were gonna be defining this function between the constants and the event listener
});


