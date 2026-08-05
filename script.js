document.addEventListener("DOMContentLoaded", () => {

    // 1. Theme Switcher (Aman jika tombol ada/tidak ada)
    const body = document.body;
    const btn = document.getElementById("themeBtn");

    if (btn) {
        body.classList.add("blue-theme");
        btn.addEventListener("click", () => {
            if (body.classList.contains("blue-theme")) {
                body.classList.remove("blue-theme");
                body.classList.add("pink-theme");
                btn.innerHTML = "🌸 Pink Mode";
            } else {
                body.classList.remove("pink-theme");
                body.classList.add("blue-theme");
                btn.innerHTML = "☁️ Blue Mode";
            }
        });
    }

    // 2. Fitur Klik Kartu Quest (Tambah/Hapus Outline)
    const questCards = document.querySelectorAll(".quest-card");
    questCards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("selected");
        });
    });

    // 3. Tombol Confirm Kirim Pesanan ke WhatsApp
    const confirmBtn = document.getElementById("confirmBtn");
    const agreeCheckbox = document.getElementById("agreeCheckbox");

    if (confirmBtn) {
        confirmBtn.addEventListener("click", (e) => {
            e.preventDefault();

            // Cek Checkbox
            if (!agreeCheckbox || !agreeCheckbox.checked) {
                alert("Harap centang persetujuan syarat & ketentuan terlebih dahulu!");
                return;
            }

            // Ambil kartu yang terpilih
            const selectedCards = document.querySelectorAll(".quest-card.selected");

            if (selectedCards.length === 0) {
                alert("Pilih minimal satu paket Joki Quest terlebih dahulu dengan cara mengklik kartunya!");
                return;
            }

            // Susun teks pesanan
            let pesananList = "";
            selectedCards.forEach((card, index) => {
                const nama = card.getAttribute("data-nama") || "Paket Quest";
                const harga = card.getAttribute("data-harga") || "";
                pesananList += `${index + 1}. ${nama} (${harga})\n`;
            });

            // Kirim ke WhatsApp
            const noWa = "6282254663027";
            const pesan = `Halo Apéthic Store! Saya ingin memesan Joki Quest berikut:\n\n${pesananList}\nSaya telah menyetujui syarat & ketentuan pemesanan. Terimakasih!`;

            const urlWA = `https://wa.me/${noWa}?text=${encodeURIComponent(pesan)}`;
            window.open(urlWA, "_blank");
        });
    }
});
