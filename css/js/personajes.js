const items = document.querySelectorAll('.item');

items.forEach(item => {
  const image = item.querySelector('.item-image');
  const description = item.querySelector('.item-description');

  image.addEventListener('click', () => {
    description.style.display = 'block';
  });
});
