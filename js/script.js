// alert('Welcome to JavaScript');

// Variable Declarations: VAR, LET, CONST
// YEAR ELEMENT
const yearEl = document.querySelector('.year');
// console.log(yearEl);

yearEl.style.color = '#cf711f';
yearEl.style.fontWeight = 600;
yearEl.textContent = new Date().getFullYear();

// DOM Manipulators
// textContent, innerText, innerHTML

// NAVIGATION
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

// SMOOTH SCROLLING
const allLinks = document.querySelectorAll('a:link');
// console.log(allLinks);
allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    // console.log(e);
    e.preventDefault();
    const href = link.getAttribute('href');
    console.log(href);

    // Sroll back to the top
    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);

      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    // Close the Navigation
    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open');
    }
  });
});

// STICKY NAVIGATION
const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove('sticky');
    }
  },
  {
    // In the ViewPort
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(sectionHeroEl);

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();
