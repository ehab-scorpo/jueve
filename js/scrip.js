// Variables
const navbarHeight = 75;
const navbar = document.querySelector('.navbar');
const arrowDown = document.querySelector('.arrow-down');
const navLinks = navbar.querySelectorAll('.link');
const sections = document.querySelectorAll('section[data-scroll]');

// Start change the background color and height of the navbar function
function changeBackground() {
  if (window.scrollY >= 120) {
    navbar.style.height = navbarHeight + 'px';
    navbar.style.background = '#111';
  } else {
    navbar.style.height = '10rem';
    navbar.style.background = 'transparent';
  }
}
changeBackground()
document.addEventListener('scroll', () => changeBackground())
// End change the background color and height of the navbar function


// Start scroll to section from the navbar links with click event
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('.link.active').classList.remove('active');
    link.classList.add('active');
    // get the href of the link we clicked to use it getting the value of the data-scroll
    let href = link.getAttribute('href').replace('#', '');
    // get the section we want to go to by the data-scroll using the href of the clicked link
    let section = document.querySelector('section[data-scroll=' + href + ']');
    let sectionOffset = section.offsetTop;
    window.scrollTo({
      behavior: 'smooth',
      top: sectionOffset - navbarHeight
    })
  })
})
// End scroll to section from the navbar links with click event

// Start scroll to section from the navbar links with scroll event
document.addEventListener('scroll', () => {
  sections.forEach(section => {
    // check if the current section has a data-scroll AND window scroll value is more than the offsetTop of that section  
    if (window.scrollY >= (section.offsetTop - navbarHeight)) {
      document.querySelector('.link.active').classList.remove('active')
      // add active class to a link by using the data-scroll value of the current section
      document.querySelector("a[href=\'#" + section.dataset.scroll + "\']").classList.add('active');
    }
  })
})
// End scroll to section from the navbar links with scroll event


// Start the go down button in the header section
arrowDown.addEventListener('click', () => {
  window.scrollTo({
    behavior: "smooth",
    top: window.innerHeight - navbarHeight
  })
})
// End the go down button in the header section