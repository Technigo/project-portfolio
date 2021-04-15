const callback = (entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("is-visible")
  })
}

const observer = new IntersectionObserver(callback)

const targets = document.querySelectorAll(".show-on-scroll")
targets.forEach( (target) => {
  observer.observe(target)
})

// https://cssanimation.rocks/scroll-animations/