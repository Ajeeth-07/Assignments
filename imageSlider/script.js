document.addEventListener("DOMContentLoaded", function () {
  const images = [
    {
      url: "https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Beautiful Nature",
    },
    {
      url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfDB8MHx8fDA%3D",
      caption: "City Landscape",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1669748157617-a3a83cc8ea23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Relaxing Beach",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1672115680958-54438df0ab82?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Majestic Mountains",
    },
    {
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Dense Forest",
    },
  ];

  //  DOM elements
  const sliderImage = document.getElementById("sliderImage");
  const imageCaption = document.getElementById("imageCaption");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const indicatorsContainer = document.getElementById("indicators");

  // Current image index
  let currentIndex = 0;

  // Function to show current image
  function showImage(index) {
    if (index < 0) {
      currentIndex = images.length - 1;
    } else if (index >= images.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    // Adding fade-out effect
    sliderImage.style.opacity = 0;

    // Changing image and caption after a short delay
    setTimeout(() => {
      sliderImage.src = images[currentIndex].url;
      imageCaption.textContent = images[currentIndex].caption;
      sliderImage.style.opacity = 1;

      // Updating indicators
      updateIndicators();
    }, 300);
  }

  // Creating indicators
  function createIndicators() {
    for (let i = 0; i < images.length; i++) {
      const indicator = document.createElement("div");
      indicator.className = "indicator";
      indicator.addEventListener("click", () => showImage(i));
      indicatorsContainer.appendChild(indicator);
    }
  }

  // Updating indicators to show active one
  function updateIndicators() {
    const indicators = document.querySelectorAll(".indicator");
    indicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }

  // Event listeners for navigation buttons
  prevBtn.addEventListener("click", () => {
    showImage(currentIndex - 1);
  });

  nextBtn.addEventListener("click", () => {
    showImage(currentIndex + 1);
  });

  // Adding keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      showImage(currentIndex - 1);
    } else if (e.key === "ArrowRight") {
      showImage(currentIndex + 1);
    }
  });

  // Initializing the slider
  createIndicators();
  showImage(0);
});
