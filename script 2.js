const techAccordion = document.getElementsByClassName('tech-container');

for (let i = 0; i < techAccordion.length; i++) {
  techAccordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
  });
}
