// Typing Effect
const heroText = document.getElementById("hero-text");
const text = "Hello, I'm Ayush Nagdive";
let index = 0;

function typeHero() {
  if(index < text.length){
    heroText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeHero, 100);
  }
}
typeHero();

// Scroll Fade Animation
const faders = document.querySelectorAll('section');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('fade-in');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});