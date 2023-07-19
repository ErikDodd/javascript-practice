const terms = document.querySelector(".terms-and-conditions");
const watch = document.querySelector(".watch");

function obCallback(payload) {
  console.log(payload);
}
// intersection observer
const ob = new IntersectionObserver(obCallback)

ob.observe(watch);

// terms.addEventListener("scroll", (e) => {
//   console.log(e.currentTarget.scrollTop);
//   console.log(e.currentTarget.scrollHeight);
// });
