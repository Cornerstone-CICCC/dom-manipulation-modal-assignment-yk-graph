const btn = document.getElementById('openModal')
const modal = document.getElementById('modal')

const AUTO_CLOSE_SECONDS = 10
let autoCloseTimer = null

function openModal() {
  modal.classList.remove('invisible')

  autoCloseTimer = setTimeout(() => {
    closeModal()
  }, AUTO_CLOSE_SECONDS * 1000)
}

function closeModal() {
  modal.classList.add('invisible')

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
