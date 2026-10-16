// Project Modal
function displayProjectModal() {
    const projectModal = document.querySelector('#projectDialogModal');
    const projectAddBtn = document.querySelector('#projectAddBtn');
    const projectCloseBtn = document.querySelector('#projectCloseBtn');

    projectAddBtn.addEventListener('click', () => {
        projectModal.showModal();
    });

    projectCloseBtn.addEventListener('click', () => {
        projectModal.close();
    });
};

// Task Modal
function displayTaskModal() {
    const taskModal = document.querySelector('#taskDialogModal');
    const taskAddBtn = document.querySelector('#taskAddBtn');
    const taskCloseBtn = document.querySelector('#taskCloseBtn');

    taskAddBtn.addEventListener('click', () => {
        taskModal.showModal();
    });

    taskCloseBtn.addEventListener('click', () => {
        taskModal.close();
    });
};

export {displayProjectModal, displayTaskModal};