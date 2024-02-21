const uri = 'https://340e-34-125-87-236.ngrok-free.app';
const url = `${uri}/ask`
const question = 'What do you like to do in free time?';

const fetchData = async (question) => {
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
    console.log('Resposta :', responseData[1].response);
    console.log('Resposta', responseData[0].response)
    // Faça algo com a resposta aqui
  } catch (error) {
    console.error('Erro:', error);
    console.error('Detalhes do erro:', error.message);
  }
  return responseData
};

fetchData();
