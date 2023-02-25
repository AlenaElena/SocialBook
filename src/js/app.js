const headerDropdown = document.querySelector('.header-dropdown');
const headerDropdownBtn = document.querySelector('.header-photo');
headerDropdownBtn.addEventListener('click', function () {
  headerDropdown.classList.toggle('header-dropdown--active');
});

const sidebarBoxes = document.querySelectorAll('.rightBox');
sidebarBoxes.forEach((el) => {
  const sidebarBtn = el.querySelector('.rightBoxTitle');
  const sidebarItem = el.querySelector('.rightBoxItem');
  sidebarBtn.addEventListener('click', function () {
    sidebarItem.classList.toggle('active');
  });
});

const headerBurger = document.querySelector('.header-burger');
const leftSidebar = document.querySelector('.left-sidebar');
headerBurger.addEventListener('click', function () {
  leftSidebar.classList.toggle('active');
});

let btnDarkTheme = document.querySelector('.darkTheme');
btnDarkTheme.addEventListener('click', function () {
  btnDarkTheme.classList.toggle('darkTheme--active');
  document.body.classList.toggle('dark-theme');

  if (localStorage.getItem('theme') === 'light') {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

const postLinks = document.querySelectorAll('.post-box__bottom-link');
postLinks.forEach((el) => {
  let postLinkNum = el.querySelector('.post-box__bottom-link__num');

  el.addEventListener('click', function onceIncrease() {
    postLinkNum.textContent = +postLinkNum.textContent + 1;
    el.classList.add('active');
    el.removeEventListener('click', onceIncrease);
  });
});

if (localStorage.getItem('theme') === 'light') {
  btnDarkTheme.classList.remove('darkTheme--active');
  document.body.classList.remove('dark-theme');
} else if (localStorage.getItem('theme') === 'dark') {
  btnDarkTheme.classList.add('darkTheme--active');
  document.body.classList.add('dark-theme');
} else {
  localStorage.setItem('theme', 'light');
}
