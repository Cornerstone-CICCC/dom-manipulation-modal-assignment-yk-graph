const btn = document.getElementById('openModal')
const modal = document.getElementById('modal')

const AUTO_CLOSE_SECONDS = 10
let autoCloseTimer = null

function openModal() {
  modal.classList.add('opacity-1')
  modal.classList.remove('opacity-0', 'pointer-events-none')

  autoCloseTimer = setTimeout(() => {
    closeModal()
  }, AUTO_CLOSE_SECONDS * 1000)
}

function closeModal() {
  modal.classList.add('opacity-0', 'pointer-events-none')
  modal.classList.remove('opacity-1')

  if (autoCloseTimer) {
    clearTimeout(autoCloseTimer)
    autoCloseTimer = null
  }
}

btn.addEventListener('click', () => {
  openModal()
})

document.addEventListener('keyup', (event) => {
  if (event.key === 'Escape') {
    closeModal()
  }
})
