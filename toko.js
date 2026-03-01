//booststrap //
document.addEventListener("DOMContentLoaded", function () {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
    })
})

// form whatsaap //
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    var nama = document.getElementById("nama").value;
    var layanan = document.getElementById("layanan").value;
    var pesan = document.getElementById("pesan").value;

    var nomor = "6287738996358"; // Ganti nomor kamu

    var url = "https://wa.me/" + nomor + 
            "?text=Halo,%20saya%20" + nama + 
            "%0ASaya%20ingin%20order:%20" + layanan +
            "%0APesan:%20" + pesan;

    window.open(url, "_blank");
});