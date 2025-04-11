const orderButtons = document.querySelectorAll('.order-btn');

orderButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Buyurtmangiz qabul qilindi!');
  });
});
