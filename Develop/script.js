var today = moment();
var toDo = $('.to-do');
var saveBtn = $('.saveBtn');

// show the current date
$("#currentDay").text(today.format("MMM Do, YYYY"));


for (i = 0; i < saveBtn.length; i++) {
    $(saveBtn[i]).on("click", saveTask)   
}

function saveTask(e) {
    var hourSelected = e.currentTarget.dataset.index;
    var saveText = toDo[hourSelected].value;
    console.log(saveText);

    //save users input in local storage
    localStorage.setItem('task', saveText);
}

var getTask = localStorage.getItem('task');
// this is temporarily replacing the inner html of all the textboxes with the last entered input
$(toDo).html(getTask);