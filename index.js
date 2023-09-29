var input = document.querySelector('input'); //pull var from html
var toDoList = document.getElementById('todo-list'); //set var
var toDoForm = document.getElementById('add-todo');//set

toDoForm.onsubmit = function(e) { //access form data
    e.preventDefault(); //prevent from going to default
    var val = input.value.trim();
    
    if (val != '') { //if value is empty
        var list = document.createElement('li'); //create element for list/ nest li
        //button
        var button = document.createElement('button'); //create element for button
        button.textContent = val;

        toDoList.appendChild(list);
        list.appendChild(button);

        input.value = ''; //set input
        var clickcount = 0; //start counting mouse clicks

        button.addEventListener('click', function() { clickcount++;
            if (clickcount > 1) { //see if button has exceeded 1 click
                toDoList.appendChild(list).remove(); //then, remove item
            } else if (clickcount == 1) {
                this.style.textDecoration = 'line-through';// add CSS line through for when item is added
            }
        });
    } else {
        toDoForm.reset(); //reset form
    }
};
