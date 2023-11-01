(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-menu-open]'), 
    //   data-menu-open - Атрибут на кнопку відкриття мєню
      closeModalBtn: document.querySelector('[data-menu-close]'),
    //   data-menu-close - Атрибут на кнопку закриття мєню
      modal: document.querySelector('[data-menu]'),
    //   data-menu - Атрибут на div, в якому зроблеме мєню
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-open');
    }
  })();