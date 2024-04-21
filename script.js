const uri = 'https://074c-34-106-84-254.ngrok-free.app/';
const url = `${uri}ask`
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
    animateText(responseData)

  } catch (error) {
    console.error('Erro:', error);
    console.error('Detalhes do erro:', error.message);
  }
};

function animateText(answer) {
  let japanese = document.getElementById('japanese')
  let english = document.getElementById('english')

  let answerEN = answer[0].response
  let answerJP = answer[1].response
  
  let maxLength = Math.max(answerJP.length, answerEN.length)

  japanese.innerHTML = ''
  english.innerHTML = ''

  stopLoadingAnimation()
  for (let i = 0; i < maxLength; i++) {
    (function (index) {
      setTimeout(() => {
        japanese.innerHTML += answerJP[index] || '';
        english.innerHTML += answerEN[index] || '';
      }, 100 * index); 
    })(i);
  }
}

function startLoadingAnimation() {
  const loadingAnimation = document.getElementById('loadingAnimation');
  loadingAnimation.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.textContent = '.';
    loadingAnimation.appendChild(dot);
  }
}

function stopLoadingAnimation() {
  const loadingAnimation = document.getElementById('loadingAnimation');
  loadingAnimation.innerHTML = '';
}
