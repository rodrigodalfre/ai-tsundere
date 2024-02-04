const url = 'https://0a3a-34-83-135-226.ngrok-free.app/ask';
const question = 'What do you like to do in free time?';

const fetchData = async () => {
  try {
    const data = new URLSearchParams();
    data.append('question', question);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data,
    };

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error('Request failed');
    }

    const responseData = await response.json();
    console.log('Resposta do servidor:', responseData.response);
    // Faça algo com a resposta aqui
  } catch (error) {
    console.error('Erro:', error);
    console.error('Detalhes do erro:', error.message);
  }
};

// Chamar a função assíncrona
fetchData();
