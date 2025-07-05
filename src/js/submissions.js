export function submitStory() {
  const form = document.getElementById('user-submissions');
  if (!form) return;
  const story = form.querySelector('textarea').value;
  if (!story) {
    alert('Please enter a story before submitting.');
    return;
  }
  console.log('User story submitted:', story);
  alert('Thanks for sharing your story! We might feature it soon.');
  form.reset();
}
window.submitStory = submitStory;
