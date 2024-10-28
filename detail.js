// Fungsi untuk membuat dan menampilkan pop-up konfirmasi
function showDeleteConfirmation() {
    const confirmationPopup = document.createElement('div');
    confirmationPopup.classList.add('popup-container');

    confirmationPopup.innerHTML = `
        <div class="popup-content">
            <h3>Hapus Event</h3>
            <p>Apakah Anda yakin ingin menghapus event ini?</p>
            <div class="popup-actions">
                <button id="confirmDelete" class="btn btn-danger">Hapus</button>
                <button id="cancelDelete" class="btn btn-secondary">Batalkan</button>
            </div>
        </div>
    `;

    document.body.appendChild(confirmationPopup);

    // Event listener untuk tombol Hapus dan Batalkan
    document.getElementById('confirmDelete').addEventListener('click', () => {
        confirmationPopup.remove();
        showSuccessPopup(); // Menampilkan pop-up sukses setelah konfirmasi
    });

    document.getElementById('cancelDelete').addEventListener('click', () => {
        confirmationPopup.remove();
    });
}

// Fungsi untuk membuat dan menampilkan pop-up sukses
function showSuccessPopup() {
    const successPopup = document.createElement('div');
    successPopup.classList.add('popup-container');

    successPopup.innerHTML = `
        <div class="popup-content">
            <h3>Event Berhasil Dihapus</h3>
            <button id="closeSuccessPopup" class="btn btn-primary">OK</button>
        </div>
    `;

    document.body.appendChild(successPopup);

    document.getElementById('closeSuccessPopup').addEventListener('click', () => {
        successPopup.remove();
    });
}

// Event listener untuk tombol Hapus Event
document.querySelector('.delete-event-button').addEventListener('click', showDeleteConfirmation);
