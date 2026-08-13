// Fungsi untuk membuka pop-up preview
function openPreview(url, title) {
    document.getElementById('modalTitle').innerText = "Preview: " + title;
    document.getElementById('previewFrame').src = url;
    document.getElementById('previewModal').style.display = 'flex';
}

// Fungsi untuk menutup pop-up preview
function closePreview() {
    document.getElementById('previewModal').style.display = 'none';
    document.getElementById('previewFrame').src = ""; // Clear iframe source agar tidak memakan resource di background
}

// Menutup modal jika user mengklik area hitam di luar modal
window.onclick = function(event) {
    var modal = document.getElementById('previewModal');
    if (event.target == modal) {
        closePreview();
    }
}
