// Function to handle event deletion
function deleteEvent() {
    // Get the event title from the page
    const eventTitle = document.querySelector('.event-title').textContent;
    
    // Get existing events from localStorage or use default if none exists
    let events = JSON.parse(localStorage.getItem('events')) || window.events;
    
    // Find and remove the event with matching title
    events = events.filter(event => event.title !== eventTitle);
    
    // Save updated events back to localStorage
    localStorage.setItem('events', JSON.stringify(events));
    
    // Redirect to the events listing page
    window.location.href = 'index.html';
}

// Add click event listener to delete button
document.addEventListener('DOMContentLoaded', function() {
    const deleteButton = document.querySelector('.delete-event-button');
    if (deleteButton) {
        deleteButton.addEventListener('click', function() {
            // Add confirmation dialog
            if (confirm('Apakah Anda yakin ingin menghapus event ini?')) {
                deleteEvent();
            }
        });
    }
});