// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Handle contact form
function handleContact(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if(!name || !email || !message) return;

  const note = document.getElementById('note');
  note.textContent = `Thanks, ${name}! Your message has been noted (demo).`;
  e.target.reset();
}
