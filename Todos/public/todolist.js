/*"some stuff" is printedd 1st then "page has been loaded because any function inside the jquery selector
*gets called only when the page has been loaded---*/

$(function () {

    let newTodoBox = $('#newtodo');
    let addtodoBtn = $('#addtodo');
    let todolist = $('#todolist');
    
    addtodoBtn.click(function () {
        let newtodo = newTodoBox.val(); //Returns the value of the input box(inbuilt func inside Jquery)

        $.post(
            '/todos/',
            {task:newtodo},
            function (data) { //callback func which runs when the post req is sent and the response comes back from the server
                todolist.empty();
                for(todo of data){    /*Runs through data array and makes each item available as todos*/
                      todolist.append("<li>" + todo.task + "</li>")

                }
            }
        )
    })
});
