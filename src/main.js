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
  
  let mobileItems = document.querySelectorAll('.mob-nav-list-item');
  let mobBackdrop = document.querySelector('.mob-backdrop');

  mobileItems.forEach(item => item.addEventListener('click', () => {
    if(mobBackdrop.classList.contains('is-open')) {
      mobBackdrop.classList.remove('is-open');
    }
  }));