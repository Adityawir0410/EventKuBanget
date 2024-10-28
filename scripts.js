// Array of event data
const events = [
    {
        title: "Harmoni Kreatif Nusantara",
        date: "Sabtu, 21 Juni 2025",
        description: "Harmoni Kreatif Nusantara merupakan event konser musik yang digabungkan dengan pameran UMKM untuk memperluas jangkauan usaha lokal.",
        image: "eventSatu.png",
        detailLink: "DetailEvent.html"
    },
    {
        title: "Nada dan Usaha",
        date: "Minggu, 23 Juni 2025",
        description: "Nada dan Usaha adalah festival musik dan bazaar kreatif yang menghadirkan konser serta produk UMKM untuk menjangkau lebih banyak konsumen.",
        image: "eventDua.png",
        detailLink: "DetailEventDua.html"
    },
    {
        title: "Suara UMKM Berdaya",
        date: "Sabtu, 30 Juni 2025",
        description: "Suara UMKM Berdaya adalah konser amal dan bazaar produk lokal yang menggabungkan bisnis dan aksi sosial dalam satu acara.",
        image: "eventTiga.png",
        detailLink: "#"
    }
];

// Function to dynamically generate event cards
function loadEvents() {
    const eventContainer = document.getElementById('eventContainer');
    eventContainer.innerHTML = ''; // Clear any existing content

    events.forEach(event => {
        const card = document.createElement('div');
        card.className = 'col-md-4';

        card.innerHTML = `
            <div class="card event-card p-3 text-center">
                <img src="${event.image}" alt="Event Image" class="img-fluid" />
                <h3>${event.title}</h3>
                <p class="text-muted">${event.date}</p>
                <p>${event.description}</p>
                <button class="btn detail-btn" onclick="window.location.href='${event.detailLink}'">Lihat Detail</button>
            </div>
        `;

        eventContainer.appendChild(card);
    });
}

// Add new event to the array
function addNewEvent() {
    const newEvent = {
        title: "Event Baru",
        date: "Senin, 1 Juli 2025",
        description: "Ini adalah deskripsi untuk event baru.",
        image: "eventBaru.png",
        detailLink: "#"
    };
    events.push(newEvent);
    loadEvents();
}

// Initialize events on page load
window.onload = loadEvents;
