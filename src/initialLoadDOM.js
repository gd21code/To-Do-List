import { defaultProject } from "./defaultProject.js";

function initialLoadDOM() {
    // Heading DOM
    const content = document.querySelector('#content');
    const heading = document.createElement('h1');
    heading.textContent = 'To-Do List';
    content.appendChild(heading);

    // Default Project DOM
    const projectDiv = document.createElement('div');
    projectDiv.textContent = defaultProject().projectTitle;
    content.appendChild(projectDiv);
};

export { initialLoadDOM };