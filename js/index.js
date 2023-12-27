const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const elements = event.target.elements;

  const data = {
    msg: elements.msg.value,
  };

  console.log('data', data);
});
