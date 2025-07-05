export function evaluateQuiz() {
  const quiz = document.getElementById('poop-quiz');
  if (!quiz) return;
  const type = quiz.querySelector('select').value;
  const grams = parseInt(quiz.querySelector('input[type="text"]').value, 10);
  const waterPct = parseInt(quiz.querySelectorAll('input[type="text"]')[1].value, 10);
  const animal = quiz.querySelector('select:nth-of-type(2)').value;
  let score = 0;
  if (type === '4') score++;
  if (grams === 128) score++;
  if (waterPct === 98) score++;
  if (animal === 'wombat') score++;
  let message = '';
  if (score === 4) message = '🎉 You are a poop encyclopedia!';
  else if (score >= 2) message = '🙂 Not bad!';
  else message = '💩 You need to learn more!';
  alert(message);
}
// expose globally for inline handlers
window.evaluateQuiz = evaluateQuiz;
