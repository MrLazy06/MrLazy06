// Efek Typewriter untuk judul
document.addEventListener('DOMContentLoaded', function() {
  const typewriterText = "Halo, saya MrLazy06";
  const typewriterElement = document.getElementById("typewriter");
  let index = 0;
  
  function typeWriter() {
    if (index < typewriterText.length) {
      typewriterElement.textContent += typewriterText.charAt(index);
      index++;
      setTimeout(typeWriter, 100); // Kecepatan pengetikan (ms)
    } else {
      // Hilangkan kursor setelah selesai mengetik
      typewriterElement.style.borderRight = "none";
    }
  }
  
  typeWriter();
});

// Efek Ripple pada ikon sosial media
document.querySelectorAll('.social-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const rect = this.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    this.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});
