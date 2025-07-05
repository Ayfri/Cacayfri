export function subscribeNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;
  const email = form.querySelector('input[type="email"]').value;
  if (!email) {
    alert('Please enter your email.');
    return;
  }
  console.log('Newsletter subscription:', email);
  alert('Subscribed to the Cacayfri newsletter! Stay tuned.');
  form.reset();
}
window.subscribeNewsletter = subscribeNewsletter;
