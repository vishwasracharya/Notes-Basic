
showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e){
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
});

function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element) {
        html += `
        <div class="display-notes">
                <span class="notes-display">${element}</span>
                <button onclick="deleteNote(this.id)" class="btn btn-delete"><img src="assets/delete.png" alt="delete button"></button>
        </div>`;
    });
    let notesEle = document.getElementById("notes");
    if(notesObj.length != 0){
        notesEle.innerHTML = html;
    }
    else{
        notesEle.innerHTML = `<p style="color: red;">No Notes Available</p>`;
    }
}

function deleteNote(index){

    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}