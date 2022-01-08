var today = moment();
var toDo = $('.to-do');
var saveBtn = $('.saveBtn');

// show the current date
$("#currentDay").text(today.format("MMM Do, YYYY"));
$("#currentTime").text(today.format("h:mm a"));


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


function trackTime() {
    // this will get the current time
    var currentTime = today.hour();
    var timeBlock = $('.time-block');

    var blockTime = $(".hour");
    blockTime.each(function (block) {
        var time = parseInt(this.textContent.split(" ")[0]);
        var morning = this.textContent.split(" ")[1]

        if (morning === "PM" && time !== 12) time=time+12
        // this will change the color of the rows depending on the current time
        if (time < currentTime) {
            $(timeBlock[block]).addClass("past");
            $(this).addClass("past");
        }

        else if (time === currentTime) {
            $(timeBlock[block]).addClass("present");
        }

        else {
            $(timeBlock[block]).addClass("future");

        }
    })
}
trackTime();