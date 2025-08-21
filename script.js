// Create background particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = Math.random() * 20 + 10;
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        
        particlesContainer.appendChild(particle);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    
    const countdownElement = document.getElementById('countdown');
    const countdownTextElement = countdownElement.parentNode;
    const gotoLinkButton = document.getElementById('gotoLink');
    const loadingElement = document.getElementById('loading');
    
    let countdownTime = 10; // Waktu countdown dalam detik
    
    // Fungsi untuk mengupdate countdown
    function updateCountdown() {
        countdownElement.textContent = countdownTime;
        
        if (countdownTime <= 0) {
            // Tampilkan tombol setelah countdown selesai
            gotoLinkButton.classList.add('visible');
            countdownTextElement.textContent = "Tombol sekarang dapat diklik!";
        } else {
            countdownTime--;
            setTimeout(updateCountdown, 1000);
        }
    }
    
    // Inisialisasi countdown
    updateCountdown();
    
    // Event listener untuk tombol
    gotoLinkButton.addEventListener('click', function() {
        // Tampilkan loading
        loadingElement.style.display = 'block';
        gotoLinkButton.style.display = 'none';
        
        // Panggil fungsi redirect dari script GitHub
        redirect();
    });
});