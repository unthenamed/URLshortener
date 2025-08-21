document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');
    const gotoLinkButton = document.getElementById('gotoLink');
    const loadingElement = document.getElementById('loading');
    
    let countdownTime = 10; // Waktu countdown dalam detik
    
    // Fungsi untuk mengupdate countdown
    function updateCountdown() {
        countdownElement.textContent = `Tombol akan tersedia dalam: ${countdownTime} detik`;
        
        if (countdownTime <= 0) {
            // Tampilkan tombol setelah countdown selesai
            gotoLinkButton.classList.add('visible');
            countdownElement.textContent = "Tombol sekarang dapat diklik!";
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