const navToggle = document.querySelector('.nav-toggle');
const navList   = document.querySelector('.nav-list');
navToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});
// close menu when link clicked (mobile)
document.querySelectorAll('.nav-list a').forEach(link =>
  link.addEventListener('click', () => navList.classList.remove('show'))
);