// Change text content
document.getElementById('change-text-btn').addEventListener('click', () => {
  document.getElementById('info-text').textContent = "The text has been updated!";
});

// Modify CSS styles
document.getElementById('change-color-btn').addEventListener('click', () => {
  const box = document.getElementById('color-box');
  box.style.color = 'white';
  box.style.backgroundColor = 'teal';
  box.style.padding = '10px';
  box.style.borderRadius = '5px';
});

// Add and remove an element dynamically
const container = document.getElementById('dynamic-container');

document.getElementById('add-element-btn').addEventListener('click', () => {
  const newElement = document.createElement('p');
  newElement.textContent = "I'm a new element!";
  newElement.id = 'dynamic-paragraph';
  container.appendChild(newElement);
});

document.getElementById('remove-element-btn').addEventListener('click', () => {
  const existing = document.getElementById('dynamic-paragraph');
  if (existing) {
    container.removeChild(existing);
  }
});
