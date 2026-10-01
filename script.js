document.addEventListener('DOMContentLoaded', () => {
  console.log("Fanggioz Bio Link Ready!");

  const linkCards = document.querySelectorAll('.app-card');
  
  linkCards.forEach(card => {
    card.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple-effect');
      
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});

if (typeof anime !== 'undefined') {
  anime({
    targets: '.signature',
    strokeDashoffset: [1200, 0],
    easing: 'easeInOutQuart',
    duration: 2500,
    delay: 300,
    fill: [
      { value: 'rgba(245, 159, 0, 0)', duration: 1800 },
      { value: 'rgba(245, 159, 0, 1)', duration: 700 }
    ],
    complete: function() {
      hidePreloader();
    }
  });
}

function hidePreloader() {
  const preloader = document.getElementById('preloader');
  if (preloader && !preloader.classList.contains('hidden')) {
    preloader.classList.add('hidden');
  }
}

window.addEventListener('load', function() {
  setTimeout(hidePreloader, 3200);
});
