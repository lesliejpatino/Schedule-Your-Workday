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
    localStorage.setItem('task', saveText);
}

