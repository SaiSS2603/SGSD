let navBar = document.querySelector('.nav-bar');

document.querySelector('#menu-btn').onclick = () => {
    navBar.classList.toggle('active');
}

window.onscroll = () => {
 
    navBar.classList.remove('active');
}

document.addEventListener("DOMContentLoaded", function () {
  let scrollContainer = document.querySelector(".swiperProduct-slider");


  scrollContainer.addEventListener("wheel", (evt) => {
    scrollContainer.style.scrollBehavior = "smooth";
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  });

  nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;

    // if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
    //   // If scrolled to the right end, scroll back to the beginning
    //   scrollContainer.scrollLeft = 0;
    // }
  });

  backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;

    // if (scrollContainer.scrollLeft <= 0) {
    //   // If scrolled to the left end, scroll to the right end
    //   scrollContainer.scrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    // }
  });

  // Listen for the scroll event to handle the right end scenario
  scrollContainer.addEventListener("scroll", () => {
    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
      // If scrolled to the right end, scroll back to the beginning
      scrollContainer.scrollLeft = 0;
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slides');
  let currentIndex = 0;

  function nextSlide() {
      currentIndex = (currentIndex + 1) % slider.children.length;
      updateSlider();
  }

  function updateSlider() {
      const translateValue = -currentIndex * 100 + '%';
      slider.style.transform = `translateX(${translateValue})`;
  }

  // Automatic slide change every 3 seconds (adjust as needed)
  setInterval(nextSlide, 3000);
});

function toggleDropdown() {
  document.querySelector('.dropdown').classList.toggle('active');
}





