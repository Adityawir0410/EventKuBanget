// Enhanced preview.js
document.addEventListener('DOMContentLoaded', function() {
    const imageInput = document.getElementById('eventImage');
    const imagePreview = document.getElementById('imagePreview');
    const imagePreviewContainer = document.getElementById('imagePreviewContainer');
    const uploadIcon = document.querySelector('.upload-icon');
    const uploadText = document.querySelector('.upload-text');

    // Load existing image if we're on edit page
    const selectedEvent = JSON.parse(localStorage.getItem('selectedEvent'));
    if (selectedEvent && selectedEvent.image && window.location.href.includes('editevent.html')) {
        imagePreview.src = selectedEvent.image;
        imagePreview.style.display = 'block';
        if (uploadIcon) uploadIcon.style.display = 'none';
        if (uploadText) uploadText.style.display = 'none';
    }

    imageInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        
        if (file) {
            // Validate file type
            const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
            if (!allowedTypes.includes(file.type)) {
                alert('Format file tidak didukung. Harap upload file PNG, JPG, atau PDF.');
                return;
            }

            // Validate file size (25MB)
            if (file.size > 25 * 1024 * 1024) {
                alert('Ukuran file terlalu besar. Maksimum 25MB.');
                return;
            }

            // Create preview URL
            const reader = new FileReader();
            reader.onload = function(event) {
                imagePreview.src = event.target.result;
                imagePreview.style.display = 'block';
                
                // Hide upload elements after preview
                if (uploadIcon) uploadIcon.style.display = 'none';
                if (uploadText) uploadText.style.display = 'none';
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle drag and drop
    const uploadSection = document.querySelector('.upload-section');
    if (uploadSection) {
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
    }

    // Update image preview when clearing input
    imageInput.addEventListener('click', function() {
        this.value = ''; // Clear the input
        if (window.location.href.includes('editevent.html')) {
            // If on edit page, show the original image from localStorage
            const selectedEvent = JSON.parse(localStorage.getItem('selectedEvent'));
            if (selectedEvent && selectedEvent.image) {
                imagePreview.src = selectedEvent.image;
                imagePreview.style.display = 'block';
            }
        }
    });
});

// Modify eventdetail.js updateEvent function
function updateEvent(event) {
    event.preventDefault();
    const eventIndex = localStorage.getItem('selectedEventIndex');
    const imagePreview = document.getElementById('imagePreview');
    const imageInput = document.getElementById('eventImage');
    
    const updatedEvent = {
        kategori: document.getElementById('kategori').value,
        title: document.getElementById('nama-event').value,
        date: document.getElementById('tanggal').value,
        timeStart: document.getElementById('waktu').value,
        description: document.getElementById('deskripsi').value,
        price: parseInt(document.getElementById('harga').value),
        boothCount: parseInt(document.getElementById('booth').value),
        location: document.getElementById('lokasi').value,
        // Use new image if selected, otherwise keep existing image
        image: imageInput.files.length > 0 ? imagePreview.src : 
               JSON.parse(localStorage.getItem('selectedEvent')).image
    };

    const events = JSON.parse(localStorage.getItem('events')) || [];
    if (eventIndex !== null) {
        events[eventIndex] = updatedEvent;
        localStorage.setItem('events', JSON.stringify(events));
        alert('Event berhasil diperbarui.');
        window.location.href = 'index.html';
    }
}