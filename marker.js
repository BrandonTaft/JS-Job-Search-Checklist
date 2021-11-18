
function marker(answer) {
     //assigns a variable called boxes to all inputs with the name checklist
    var boxes = document.getElementsByName("checkList");
    //iterates through all inputs and sets all to checked or unchecked
    // checked or unchecked is decided by the answer recieved (true or false)
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].checked = answer;
    }
}
