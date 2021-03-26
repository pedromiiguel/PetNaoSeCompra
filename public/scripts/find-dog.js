const btnClose = document.querySelectorAll('.close');
const btnCancel = document.querySelectorAll('#cancel');
const modal = document.querySelectorAll('#modal');

//Função que abre o modal
function openModal() {
  const btnDelete = document.querySelectorAll('.removeAnimal');

  btnDelete.forEach((btn, index) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();

      modal[index].classList.remove('hide');
    });
  });
}

openModal();

//Função que fecha o modal
function closeModal(btn) {
  btn.forEach((close, index) => {
    close.addEventListener('click', (event) => {
      event.preventDefault();
      modal[index].classList.add('hide');
      console.log('ok');
    });
  });
}

closeModal(btnClose);
closeModal(btnCancel);

//Função que remove o pet do banco de dados
function removeDog() {
  if (window.location.pathname == '/find-dog') {
    const btnConfirm = document.querySelectorAll('#remove');
    btnConfirm.forEach((btn) => {
      btn.addEventListener('click', async () => {
        try {
          var id = btn.getAttribute('data-id');
          await fetch(`http://localhost:3333/find-dog/${id}`, {
            method: 'DELETE',
          });
          window.location = '/find-dog';
        } catch (error) {
          console.log(error);
        }
      });
    });
  }
}

removeDog();
