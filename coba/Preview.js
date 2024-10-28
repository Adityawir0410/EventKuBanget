// Fungsi untuk menangani preview gambar
document.addEventListener('DOMContentLoaded', function() {
    const imageInput = document.getElementById('eventImage');
    const imagePreview = document.getElementById('imagePreview');
    const uploadIcon = document.querySelector('.upload-icon');
    const uploadText = document.querySelector('.upload-text');

    imageInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        
        if (file) {
            // Validasi tipe file
            const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
            if (!allowedTypes.includes(file.type)) {
                alert('Format file tidak didukung. Harap upload file PNG, JPG, atau PDF.');
                return;
            }

            // Validasi ukuran file (25MB = 25 * 1024 * 1024 bytes)
            if (file.size > 25 * 1024 * 1024) {
                alert('Ukuran file terlalu besar. Maksimum 25MB.');
                return;
            }

            // Buat URL untuk preview
            const reader = new FileReader();
            reader.onload = function(event) {
                imagePreview.src = event.target.result;
                imagePreview.style.display = 'block';
                
                // Sembunyikan icon dan text upload setelah preview
                uploadIcon.style.display = 'none';
                uploadText.style.display = 'none';
            };
            reader.readAsDataURL(file);
        }
    });

    // Tambahkan drag and drop functionality
    const uploadSection = document.querySelector('.upload-section');

    uploadSection.addEventListener('dragover', function(e) {
        e.preventDefault();
        uploadSection.classList.add('drag-over');
    });

    uploadSection.addEventListener('dragleave', function(e) {
        e.preventDefault();
        uploadSection.classList.remove('drag-over');
    });

    uploadSection.addEventListener('drop', function(e) {
        e.preventDefault();
        uploadSection.classList.remove('drag-over');
        
        const file = e.dataTransfer.files[0];
        if (file) {
            imageInput.files = e.dataTransfer.files;
            // Trigger change event
            const event = new Event('change');
            imageInput.dispatchEvent(event);
        }
    });
});