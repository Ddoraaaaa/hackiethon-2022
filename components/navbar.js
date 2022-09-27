document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    console.log($navbarBurgers)
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  
});

function scrollToEl(el) {
    console.log(-732568764);
    const element = document.getElementById(el);

    element.scrollIntoView({behavior: "smooth"});
}

// // Enable hidden nav bar
// {
//     const nav = document.querySelector(".navbar");
//     let lastScrollY = window.scrollY;
  
//     window.addEventListener("scroll", () => {
//       if (lastScrollY < window.scrollY) {
//         nav.classList.add("nav--hidden");
//       } else {
//         nav.classList.remove("nav--hidden");
//       }
  
//       lastScrollY = window.scrollY;
//     });
//   }
  