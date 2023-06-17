const elSiteHeaderTogglee = document.querySelector('.site-header-theme-toggler');
elSiteHeaderTogglee.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
})