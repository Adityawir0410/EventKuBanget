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
    {
        title: "Nada dan Usaha",
        date: "Minggu, 23 Juni 2025",
        timeStart: "09:00",
        timeEnd: "14:00",
        location: "Bandung",
        price: 400000,
        boothCount: 8,
        description: "Nada dan Usaha adalah festival musik dan bazaar kreatif yang menghadirkan konser serta produk UMKM untuk menjangkau lebih banyak konsumen.",
        image: "Images/eventDua.png"
    },
    {
        title: "Suara UMKM Berdaya",
        date: "Sabtu, 30 Juni 2025",
        timeStart: "08:00",
        timeEnd: "12:00",
        location: "Yogyakarta",
        price: 300000,
        boothCount: 5,
        description: "Suara UMKM Berdaya adalah konser amal dan bazaar produk lokal yang menggabungkan bisnis dan aksi sosial dalam satu acara.",
        image: "Images/eventTiga.png"
    }
];

let deletedEvents = JSON.parse(localStorage.getItem('deletedEvents')) || [];

// Fungsi untuk memuat event ke halaman
function loadEvents() {
    const eventContainer = document.getElementById('eventContainer');
    eventContainer.innerHTML = ''; // Bersihkan konten sebelumnya

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

// Fungsi untuk melihat detail event
function viewEventDetail(index) {
    localStorage.setItem('selectedEvent', JSON.stringify(events[index]));
    localStorage.setItem('selectedEventIndex', index); // Simpan indeks untuk penghapusan
    window.location.href = 'EventDetail.html';
}

// Fungsi untuk menambah event baru
function addNewEvent() {
    const title = document.getElementById('eventTitle').value;
    const date = document.getElementById('eventDate').value;
    const timeStart = document.getElementById('eventTimeStart').value;
    const timeEnd = document.getElementById('eventTimeEnd').value;
    const location = document.getElementById('eventLocation').value;
    const price = document.getElementById('eventPrice').value;
    const boothCount = document.getElementById('eventBoothCount').value;
    const description = document.getElementById('eventDescription').value;
    const image = URL.createObjectURL(document.getElementById('eventImage').files[0]); // Menggunakan file input

    const newEvent = {
        title,
        date,
        timeStart,
        timeEnd,
        location,
        price: parseInt(price), // Konversi ke angka
        boothCount: parseInt(boothCount), // Konversi ke angka
        description,
        image
    };

    events.push(newEvent);
    localStorage.setItem('events', JSON.stringify(events)); // Simpan event baru di localStorage

    // Reset form dan tutup modal
    document.getElementById('eventForm').reset();
    const eventModal = bootstrap.Modal.getInstance(document.getElementById('eventModal'));
    eventModal.hide();

    loadEvents(); // Muat ulang event
}

// Muat event saat halaman dimuat
window.onload = loadEvents;
