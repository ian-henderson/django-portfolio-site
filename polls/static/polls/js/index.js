var choiceCount = 2;

function addChoice(divId) {
    choiceCount++;
    var newChoice = document.createElement('div');
    newChoice.className += 'input-group mb-2';
    newChoice.id = String(choiceCount);
    newChoice.innerHTML = '<input type="text" class="form-control" placeholder="Enter choice" aria-label="Enter choice" aria-describedly="basic-addon2"><span class="input-group-addon close" id="basic-addon2" onClick="removeChoice(' + String(choiceCount) + ')">&times;</span>'
    document.getElementById(divId).appendChild(newChoice);
}

function removeChoice(choiceId) {
    if (choiceCount <= 2) return null;
    choiceCount--;
    var choice = document.getElementById(String(choiceId));
    document.getElementById('choices').removeChild(choice);
}