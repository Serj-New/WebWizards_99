(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-menu-open]'), 
      closeModalBtn: document.querySelector('[data-menu-close]'),
      modal: document.querySelector('[data-menu]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-open');
    }
  })();
  
  let mobileWrapper = document.querySelector('.mob-backdrop');

  mobileWrapper.addEventListener('click', (e) => {
    if(mobileWrapper.classList.contains('mob-backdrop')) {
      mobileWrapper.classList.remove('is-open');
    }
  })