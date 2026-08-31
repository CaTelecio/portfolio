document.addEventListener("DOMContentLoaded", function () {
  // efeito de digitação para o título
  const title = document.querySelector(".title")
  const originalText = title.textContent
  title.textContent = ""

  let i = 0
  function typeWriter() {
    if (i < originalText.length) {
      title.textContent += originalText.charAt(i)
      i++
      setTimeout(typeWriter, 100)
    }
  }

  setTimeout(typeWriter, 1000)

  // saudação
  const words = ["OIÊ, ", "HELLO WORLD! "]
  let currentWord = 0
  const element = document.getElementById("animated-text")

  function changeWord() {
    element.classList.remove("visible")
    element.classList.add("hidden")

    setTimeout(() => {
      currentWord = (currentWord + 1) % words.length
      element.textContent = words[currentWord]

      element.classList.remove("hidden")
      element.classList.add("visible")
    }, 500)

    setTimeout(changeWord, 2500)
  }

  element.classList.add("visible")
  setTimeout(changeWord, 2500)

  // btn up
  const backToTopButton = document.getElementById("back-to-top")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTopButton.style.display = "block"
    } else {
      backToTopButton.style.display = "none"
    }
  })

  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // menu
  const toggleBtn = document.querySelector(".menu-toggle")
  const menu = document.querySelector(".menu")

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("show")
  })
})

// modal
document.addEventListener("DOMContentLoaded", function () {
  const botoesModal = document.querySelectorAll(".btn-projeto")

  botoesModal.forEach((botao) => {
    botao.addEventListener("click", function () {
      const imgSrc = this.getAttribute("data-img")
      const textContent = this.getAttribute("data-text")

      document.getElementById("modal-img").src = imgSrc
      document.getElementById("modal-img").alt =
        this.closest(".projeto").querySelector("h3").textContent
      document.getElementById("modal-text").innerHTML = textContent

      const modal = new bootstrap.Modal(document.getElementById("modalProjeto"))
      modal.show()
    })
  })
})

//audio
const player = document.getElementById("player")
const playBtn = document.getElementById("play-btn")
const waves = document.querySelector(".sound-wave")

function togglePlay() {
  if (player.paused) {
    player.play()
    playBtn.textContent = "||"
    waves.style.opacity = "1"
  } else {
    player.pause()
    playBtn.textContent = "▶"
    waves.style.opacity = "0.5"
  }
}

//easter egg
const modal = document.getElementById("secret-modal")
const modalImage = document.getElementById("modalImage")
const closeModal = document.getElementById("closeModal")
const nextBtn = document.getElementById("nextBtn")
const prevBtn = document.getElementById("prevBtn")

const images = [
  "img/jpg/print1.jpg",
  "img/jpg/print2.jpg",
  "img/jpg/print3.jpg",
  "img/jpg/print4.jpg",
  "img/jpg/print5.jpg",
  "img/jpg/print6.jpg",
  "img/jpg/print7.jpg",
  "img/jpg/print8.jpg",
  "img/jpg/print9.jpg",
  "img/jpg/print10.jpg",
  "img/jpg/print11.jpg",
  "img/jpg/print12.jpg",
  "img/jpg/print13.jpg",
  "img/jpg/print14.jpg",
  "img/jpg/print15.jpg",
]

let currentIndex = 0
let typed = ""

document.addEventListener("keydown", (event) => {
  if (["INPUT", "TEXTAREA"].includes(event.target.tagName)) return

  typed += event.key.toLowerCase()

  if (typed.includes("segredo")) {
    openModal()
    typed = ""
  }

  if (typed.length > 10) typed = typed.slice(-10)
})

function openModal() {
  modal.classList.remove("hidden")
  currentIndex = 0
  modalImage.src = images[currentIndex]
}

function closeGallery() {
  modal.classList.add("hidden")
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length
  modalImage.src = images[currentIndex]
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length
  modalImage.src = images[currentIndex]
}

closeModal.addEventListener("click", closeGallery)
nextBtn.addEventListener("click", showNext)
prevBtn.addEventListener("click", showPrev)

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeGallery()
})
