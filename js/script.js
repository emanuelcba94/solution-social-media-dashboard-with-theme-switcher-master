const toggle = document.querySelector('.toggle');
const indicator = document.querySelector('.indicator');
const colorUp = document.querySelector('.color-up');
const titleOverview = document.querySelector('.title-overview');

const changeTheme = () => {
    document.body.classList.toggle('dark-theme');
    indicator.classList.toggle('active');
    colorUp.classList.toggle('active');
    titleOverview.classList.toggle('active');    
}

toggle.addEventListener('click', () => {
    localDarkMode = localStorage.getItem('active');

    if(localDarkMode !== 'on') {
        changeTheme();
        localDarkMode = localStorage.setItem ('active', 'on');
    } else {
        changeTheme();
        localDarkMode = localStorage.setItem ('active', null);
    }
})

let localDarkMode = localStorage.getItem('active');
if(localDarkMode === 'on') {
    changeTheme();
}