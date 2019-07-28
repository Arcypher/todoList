/**
 * NOTE: THIS IS NOT THE BEST WAY TO DO THIS.
 * THIS LACKS A CERTAIN PATTERN. This is more
 * of a test to actually build something.
 * 
 */

 //functions to add:
 //addTodo
 //removeTodo

 var todo = document.querySelector(".todo");
 var field = document.querySelector(".todoHolder");

 //In order to add a todo, you need to hit enter
 //There must be text.

function addTodo(textNode, fieldNode, paragraphNode) {
    //Make paragraph element
    paragraphNode.className = "addedTodo";
    var text = document.createTextNode(textNode.value);
    paragraphNode.appendChild(text);
    fieldNode.appendChild(paragraphNode);
}

function removeTodo() {
    //This removes the clicked object.
    this.parentElement.remove();
}

function addButton(paragraphNode) {
    var input = document.createElement("input");
    input.type = "button";
    input.value = "Remove";
    input.className = "removeButton";

    //add 'remove' feature
    input.addEventListener("click", removeTodo);
    paragraphNode.appendChild(input);
}

//addTodo
 todo.addEventListener("keydown", function(event) {
     if (this.value != "") {
        if (event.keyCode == 13) {
            //Make paragraph element
            var p = document.createElement("p");
            addTodo(this, field, p);

            //make a span with a button
            addButton(p);

            //reset field
            this.value = "";
        }
    }
 });

 