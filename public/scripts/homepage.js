window.onscroll = function() {
  let intro = document.getElementById("intro");

  let height = window.innerHeight;

  let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

  // Change this if you want it to fade faster
  height = height / 1;

  intro.style.opacity = (height - scrollTop) / height;
};

