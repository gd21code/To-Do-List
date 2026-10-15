// factory function for creating To-Do tasks

// create To-Do array
let toDoArray = [];

// factory function for creating To-Do list
function createToDo(title, description, dueDate, priority) {
    console.log('createToDo called; creating ToDo now');

    // create to-do object
    const newToDo = { title, description, dueDate, priority };
    console.log(newToDo);

    console.log('pushing object into ToDo array');
    toDoArray.push(newToDo);

    console.log(toDoArray);
    return newToDo;
};

console.log(createToDo('blahtitle', 'blahdescription', 'blahduedate', 'blahpriority'));
console.log(createToDo('blah1', 'blah2', 'blah3', 'blah4'));

export { createToDo, toDoArray };