const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);

  fetch('http://localhost:9000/login', { // Substitua pela URL da sua API
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro no login');
    }
    return response.json();
  })
  .then(data => {
    console.log('Login bem-sucedido:', data);
    // Login bem-sucedido!
    // 1. Armazene o token de autenticação (se houver)
    //    localStorage.setItem('token', data.token); 
    // 2. Redirecione o usuário para a página inicial
    //    window.location.href = '/home'; 
  })
  .catch(error => {
    // Lidar com erros de login
    console.error('Erro:', error);
    // Exibir mensagem de erro para o usuário
  });
});