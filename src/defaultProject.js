// factory function to create first project and project array

function defaultProject() {
    console.log('creating project array');
    let projectArray = [];

    console.log('setting default title name');
    let projectTitle = 'Default Project';
    projectArray.push(projectTitle);
    console.log(projectArray);

    // let title2 = 'default2';
    // projectArray.push(title2);

    return { projectArray, projectTitle };
}

console.log(defaultProject());

export { defaultProject };