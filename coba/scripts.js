// Function to handle image preview
document.getElementById('eventImage').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const imagePreview = document.getElementById('imagePreview');
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            imagePreview.src = event.target.result;
            imagePreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

// Load events from localStorage or use the initial array
let events = JSON.parse(localStorage.getItem('events')) || [
    {
        title: "Harmoni Kreatif Nusantara",
        date: "Sabtu, 21 Juni 2025",
        timeStart: "10:00",
        timeEnd: "15:00",
        location: "Jakarta",
        price: 500000,
        boothCount: 10,
        description: "Harmoni Kreatif Nusantara merupakan event konser musik yang digabungkan dengan pameran UMKM untuk memperluas jangkauan usaha lokal.",
        image: "Images/eventSatu.png"
    },
    // ... other initial events ...
];

// Function to load events to page
function loadEvents() {
    const eventContainer = document.getElementById('eventContainer');
    if (!eventContainer) return; // Guard clause if element doesn't exist
    
    eventContainer.innerHTML = ''; // Clear previous content

    events.forEach((event, index) => {
        const card = document.createElement('div');
        card.className = 'col-md-4';

        card.innerHTML = `
            <div class="card event-card p-3 text-center">
                <img src="${event.image}" alt="Event Image" class="img-fluid" />
                <h3>${event.title}</h3>
                <p class="text-muted">${event.date}</p>
                <p>${event.description}</p>
                <button class="btn detail-btn" onclick="viewEventDetail(${index})">Lihat Detail</button>
            </div>
        `;

        eventContainer.appendChild(card);
    });
}

// Function to add new event
function addNewEvent(event) {
    event.preventDefault();

    const imageFile = document.getElementById('eventImage').files[0];
    const imagePreview = document.getElementById('imagePreview');
    
    // Create new event object
    const newEvent = {
        title: document.getElementById('eventTitle').value,
        date: document.getElementById('eventDate').value,
        description: document.getElementById('eventDescription').value,
        price: parseInt(document.getElementById('eventPrice').value),
        boothCount: parseInt(document.getElementById('eventBoothCount').value),
        location: document.getElementById('eventLocation').value,
        image: imagePreview.src // Use the preview image data URL
    };

    // Add to events array
    events.push(newEvent);
    
    // Save to localStorage
    localStorage.setItem('events', JSON.stringify(events));

    // Show success popup
    showPopup();

    // Reset form
    document.getElementById('eventForm').reset();
    imagePreview.style.display = 'none';
}

// Function to show popup
function showPopup() {
    const popup = document.getElementById('successPopup');
    if (popup) {
        popup.style.display = 'block';
    }
}

// Function to close popup
function closePopup() {
    const popup = document.getElementById('successPopup');
    if (popup) {
        popup.style.display = 'none';
    }
    // Redirect after closing popup
    window.location.href = 'index.html';
}

// Function to view event detail
function viewEventDetail(index) {
    localStorage.setItem('selectedEvent', JSON.stringify(events[index]));
    localStorage.setItem('selectedEventIndex', index);
    window.location.href = 'EventDetail.html';
}

// Initialize events when page loads
window.addEventListener('load', loadEvents);