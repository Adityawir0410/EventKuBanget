// Load event details from localStorage
function loadEventDetail() {
    const eventDetail = JSON.parse(localStorage.getItem('selectedEvent'));
    const eventIndex = localStorage.getItem('selectedEventIndex');

    if (eventDetail) {
        document.getElementById('kategori').value = eventDetail.kategori || "000"; // Set default to 000 if empty
        document.getElementById('nama-event').value = eventDetail.title || "000"; // Set default to 000 if empty
        document.getElementById('tanggal').value = eventDetail.date || "000"; // Set default to 000 if empty
        document.getElementById('waktu').value = eventDetail.timeStart || "000"; // Set default to 000 if empty
        document.getElementById('deskripsi').value = eventDetail.description || "000"; // Set default to 000 if empty
        document.getElementById('harga').value = eventDetail.price || "000"; // Set default to 000 if empty
        document.getElementById('booth').value = eventDetail.boothCount || "000"; // Set default to 000 if empty
        document.getElementById('lokasi').value = eventDetail.location || "000"; // Set default to 000 if empty
        // If you want to show the image, set it here
        // Example: document.querySelector('.upload-section img').src = eventDetail.image || 'placeholder_image.png';
    } else {
        document.getElementById('eventDetail').innerHTML = '<p>Event tidak ditemukan.</p>';
    }
}

// Function to update the event
function updateEvent(event) {
    event.preventDefault(); // Prevent form submission
    const eventIndex = localStorage.getItem('selectedEventIndex');
    const updatedEvent = {
        kategori: document.getElementById('kategori').value,
        title: document.getElementById('nama-event').value,
        date: document.getElementById('tanggal').value,
        timeStart: document.getElementById('waktu').value,
        description: document.getElementById('deskripsi').value,
        price: parseInt(document.getElementById('harga').value),
        boothCount: parseInt(document.getElementById('booth').value),
        location: document.getElementById('lokasi').value,
        image: document.getElementById('eventImage').files.length > 0 ? URL.createObjectURL(document.getElementById('eventImage').files[0]) : null // Use new image if selected
    };

    const events = JSON.parse(localStorage.getItem('events')) || [];
    if (eventIndex !== null) {
        events[eventIndex] = updatedEvent; // Update event
        localStorage.setItem('events', JSON.stringify(events)); // Save updated events
        alert('Event berhasil diperbarui.');
        window.location.href = 'index.html'; // Redirect to main page
    }
}

// Initialize event detail on page load
window.onload = function() {
    loadEventDetail();
};
