const tabLinks = document.querySelectorAll('.tab-link');
const tabPanes = document.querySelectorAll('.tab-pane');
console.log(tabLinks);
console.log(tabPanes);
tabLinks.forEach((link, index) => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      tabPanes.forEach(pane => {
          pane.style.display = 'none';
      });
      tabPanes[index].style.display = 'block';
  });
});
