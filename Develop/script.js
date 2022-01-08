var today = moment();
var toDo = $('.to-do');
var saveBtn = $('.saveBtn');

// show the current date
$("#currentDay").text(today.format("MMM Do, YYYY"));


for (i = 0; i < saveBtn.length; i++) {
    $(saveBtn[i]).on("click", saveTask)
}

function saveTask(e) {
    var hourSelected = toDo[e.currentTarget.dataset.index].id;
    var saveText = toDo[e.currentTarget.dataset.index].value;
    var newItem = {
        time: hourSelected,
        text: saveText
    }

    let savedItems = JSON.parse(localStorage.getItem('tasks'))
    if (savedItems) {
        savedItems.push(newItem);
        localStorage.setItem('tasks', JSON.stringify(savedItems))
    }
    else {
        savedItems = []
        savedItems.push(newItem)
        localStorage.setItem('tasks', JSON.stringify(savedItems))
    }
    getTodos();
}

function getTodos() {
    var tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach(function (task) {
        $(`#${task.time}`).text(task.text);
    })
}

getTodos();
