function showPopup() {
    // Menampilkan pop-up
    const popup = document.getElementById('successPopup');
    popup.style.display = 'block';
}

function closePopup() {
    // Menutup pop-up
    const popup = document.getElementById('successPopup');
    popup.style.display = 'none';
}

// Fungsi untuk menampilkan preview gambar yang diunggah
document.getElementById('eventImage').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const preview = document.getElementById('imagePreview');

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        preview.style.display = 'none';
    }
});
