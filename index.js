toggleOn = document.getElementById('menu-icons1');
toggleOff = document.getElementById('menu-icon2');
menuList = document.getElementById('menu-list');

toggleOn.addEventListener('click', () => {
    menuList.classList.toggle('show');
    toggleOff.classList.toggle('show');
    toggleOn.classList.toggle('hide');
});

toggleOff.addEventListener('click', () => {
    menuList.classList.toggle('show');
    toggleOff.classList.toggle('show');
    toggleOn.classList.toggle('hide');
});

document.onclick =  function(e){
    if(e.target.id !== 'menu-list' && e.target.id !== 'menu-icons1' && e.target.id !== 'menu-icon2'){
        menuList.classList.remove('show');
        toggleOn.classList.remove('hide');
        toggleOff.classList.remove('show');
    }
}
