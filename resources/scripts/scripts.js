// MENU
const wrapper = document.querySelector('.wrapper');
const menu = document.querySelector('.menu-list');

const closeMenu = (img) => {
  if (!img) img = document.querySelector('.menu-button img');
  img.src = 'resources/images/icon-menu.svg';
  img.alt = 'menu icon';
  wrapper.classList.remove('no-scroll');
  menu.classList.add('hidden');
};

const openMenu = (img) => {
  img.src = 'resources/images/icon-cancel.svg';
  img.alt = 'cancel icon';
  wrapper.classList.add('no-scroll');
  menu.classList.remove('hidden');
};

document.querySelector('.menu-button').addEventListener('click', (event) => {
  if (event.target.alt === 'menu icon') {
    openMenu(event.target);
  } else {
    closeMenu(event.target);
  }
});
