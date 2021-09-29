const modal = document.querySelector('.modal');
const loginBtn = document.querySelector('.login');
const closeBtn = document.querySelector('.close');
const startTrial = document.querySelector('.start-trial');
const bunddleBtn = document.querySelector('.bunddle-btn');


loginBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
startTrial.addEventListener('click', openModal);
bunddleBtn.addEventListener('click', openModal);

function openModal(){
    modal.style.display= 'block';
}

function closeModal(){
    modal.style.display= 'none';
}


function outsideClick(e) {
    if(e.target == modal){
        closeModal();
    }
}

