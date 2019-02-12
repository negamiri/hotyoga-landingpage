window.onscroll = function() {
  let intro = document.getElementById("intro");
  let height = window.innerHeight;
  let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  height = height / 1;
  intro.style.opacity = (height - scrollTop) / height;
};

function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

const allCards = document.querySelectorAll('.card-inactive');

function checkScroll (e) {
  allCards.forEach(eachCard => {
    const fadeInAt = (window.scrollY + window.innerHeight) - eachCard.clientHeight / 1.5;
    const cardBottom = eachCard.offsetTop + eachCard.clientHeight;
    const isHalfShown = fadeInAt > eachCard.offsetTop;
    const notPast = window.scrollY < cardBottom;
    if (isHalfShown && notPast) {
      eachCard.classList.remove('card-inactive');
      eachCard.classList.add('card-active');
    } else {
      eachCard.classList.remove('card-active');
      eachCard.classList.add('card-inactive');
    }
  });
}

window.addEventListener('scroll', checkScroll);


