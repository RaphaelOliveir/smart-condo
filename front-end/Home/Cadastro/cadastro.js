const cadastroForm = document.getElementById('cadastroForm');

cadastroForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('user-input').value;
  const password = document.getElementById('pass-input').value;
  const passwordConfirmation = document.getElementById('confirm-pass-input').value;

  if (password !== passwordConfirmation) {
    alert('As senhas não coincidem!');
    return;
  }

  fetch('http://localhost:8989/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify({ 
      username: username,
      password: password
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao cadastrar usuário'); 
    }
    return response.json(); 
  })
  .then(data => {
    console.log('Usuário cadastrado:', data); 
    alert("Usuário cadastrado com sucesso!")
    //window.location.href = '/login';
  })
  .catch(error => {
    console.error('Erro:', error);
    alert('Erro ao cadastrar usuário. Por favor, tente novamente.');
  });
});