const modal = document.querySelector('.modal-content');
const overlay = document.querySelector('.overlay');
const openModalBtn = document.querySelector('.btn-modal-open');
const closeModalBtn = document.querySelector('.btn-modal-close');

const openModal = function () {
  console.log('open');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

openModalBtn.addEventListener('click', openModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// closeModalBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
