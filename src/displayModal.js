// display project modal upon click

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

// function displayTaskModal() {};

export {displayProjectModal};