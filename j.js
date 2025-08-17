stars = document.querySelectorAll("iconify-icon");

stars.forEach((star, idx1) => {
  star.addEventListener("click", () => {
    console.log(idx1);

    stars.forEach((star,idx2) => {
      idx1 >= idx2 ? star.classList.add("active") : star.classList.remove("active");
    })
  })
  
});