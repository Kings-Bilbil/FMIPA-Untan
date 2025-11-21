// --- 1. DATA BERITA ---
// Array ini bertindak sebagai database sementara yang menyimpan daftar berita.
const newsData = [
    { 
        // Judul utama yang akan muncul di kartu berita.
        title: "Prestasi Lomba Gema Ekonomi Syariah Kalimantan Barat", 
        // Tanggal publikasi berita.
        date: "29 Juni 2024", 
        // URL gambar thumbnail (menggunakan placeholder).
        img: "images/foto-berita2.jpeg",
        // Deskripsi singkat untuk preview di halaman depan.
        desc: "Mahasiswa Sistem Informasi meraih juara 2 lomba Gebyar Kalbar 2024 dengan Tema Gema Ekonomi Syariah.",
        // Konten lengkap yang hanya muncul ketika modal dibuka.
        fullContent: "Selamat Atas Prestasinya Farahdiba Helwa Latifah Mahasiswa Sistem Informasi Angakatan 2021 yang telah meraih juara 2 lomba Gebyar Kalbar 2024 dengan Tema Gema Ekonomi Syariah."
    },
    { 
        // Judul berita kedua.
        title: "Mahasiswa Universitas Tanjungpura Raih Prestasi dalam Kompetisi Indonesia Sharia Financial Olympiad (ISFO) 2025", 
        // Tanggal berita kedua.
        date: "17 Nov 2025", 
        // URL gambar berita kedua.
        img: "images/foto-berita1.jpeg",
        // Deskripsi singkat berita kedua.
        desc: "Tim mahasiswa Untan berhasil membuktikan bahwa semangat dan solidaritas mampu menembus batas disiplin ilmu dan mengantarkan pada prestasi gemilang.",
        // Konten lengkap berita kedua.
        fullContent: "Semangat juang dan kecerdasan intelektual mahasiswa Universitas Tanjungpura kembali menorehkan tinta emas di panggung nasional! Dalam ajang Indonesia Sharia Financial Olympiad (ISFO) 2025, kompetisi bergengsi yang diselenggarakan oleh Otoritas Jasa Keuangan (OJK) Indonesia pada 4 November 2025 di Kantor OJK Jawa Timur, Surabaya, tim mahasiswa Untan berhasil membuktikan bahwa semangat dan solidaritas mampu menembus batas disiplin ilmu dan mengantarkan pada prestasi gemilang."
    },
    { 
        // Judul berita ketiga.
        title: "Selamat & Sukses Mahasiswa Kimia Lulus Program Beasiswa Berprestasi Djarum Beasiswa Plus", 
        // Tanggal berita ketiga.
        date: "14 Nov 2025", 
        // URL gambar berita ketiga.
        img: "images/foto-berita3.png",
        // Deskripsi singkat berita ketiga.
        desc: "Penerima Djarum Beasiswa Plus Program Beasiswa Berprestasi.",
        // Konten lengkap berita ketiga.
        fullContent: "Segenap Civitas Akademika FMIPA Untan mengucapkan Selamat dan Sukses atas prestasi yang telah diraih Septy Aurelia Sherent (Kimia 2022) sebagai Penerima Djarum Beasiswa Plus Program Beasiswa Berprestasi✨ Semoga apa yang telah dicapai dapat bermanfaat dan menjadi motivasi bagi mahasiswa lainnya serta menjadi langkah awal untuk mencapai prestasi prestasi lainnya🥰✨"
    }
];

// --- 2. EFEK MESIN TIK ---
// Mengambil elemen HTML tempat teks akan dimunculkan.
const textElement = document.getElementById('typing-text');
// Daftar kalimat yang akan diketik secara bergantian.
const phrases = ["QUALITY IS OUR CONCERN.", "Unggul Dalam Tranformasi.", "Riset yang Terarah.", "Berkesinambungan.", "Berwawasan Lingkungan"];
// Melacak kalimat mana yang sedang aktif (index array).
let phraseIndex = 0;
// Melacak posisi huruf (karakter) yang sedang diketik atau dihapus.
let charIndex = 0;
// Status apakah sedang dalam mode mengetik atau menghapus.
let isDeleting = false;

// Fungsi rekursif untuk menjalankan animasi mengetik.
function typeEffect() {
    // Mengambil kalimat saat ini berdasarkan index.
    const currentPhrase = phrases[phraseIndex];
    
    // Cek apakah sedang mode menghapus huruf.
    if (isDeleting) {
        // Ambil teks dari awal dikurangi satu karakter (efek hapus).
        textElement.innerText = currentPhrase.substring(0, charIndex - 1);
        // Kurangi penanda posisi karakter.
        charIndex--;
    } else {
        // Ambil teks dari awal ditambah satu karakter (efek ngetik).
        textElement.innerText = currentPhrase.substring(0, charIndex + 1);
        // Tambah penanda posisi karakter.
        charIndex++;
    }

    // Tentukan kecepatan: 50ms jika menghapus, 100ms jika mengetik.
    let typeSpeed = isDeleting ? 50 : 100;

    // Jika tidak sedang menghapus DAN kalimat sudah tertulis lengkap.
    if (!isDeleting && charIndex === currentPhrase.length) {
        // Ubah status jadi menghapus.
        isDeleting = true;
        // Beri jeda 2 detik agar teks terbaca sebelum dihapus.
        typeSpeed = 2000; 
    } 
    // Jika sedang menghapus DAN teks sudah habis (kosong).
    else if (isDeleting && charIndex === 0) {
        // Ubah status jadi mengetik kembali.
        isDeleting = false;
        // Pindah ke kalimat berikutnya dalam array (looping kembali ke 0 jika habis).
        phraseIndex = (phraseIndex + 1) % phrases.length;
        // Beri jeda setengah detik sebelum mengetik kalimat baru.
        typeSpeed = 500;
    }
    
    // Jalankan fungsi ini lagi setelah waktu tunggu selesai.
    setTimeout(typeEffect, typeSpeed);
}

// --- 3. RENDER BERITA ---
// Fungsi untuk membuat HTML kartu berita dari data Javascript.
function renderNews() {
    // Ambil container tempat berita akan ditaruh.
    const container = document.getElementById('news-container');
    // Variabel penampung string HTML.
    let html = '';
    
    // Loop setiap item di data berita.
    newsData.forEach((item, index) => {
        // Tambahkan template HTML kartu berita ke variabel html.
        html += `
        <div class="col-md-4">
            <div class="glass-card p-4 h-100 d-flex flex-column justify-content-between" style="border-radius: 16px; min-height: 200px;">
                <div>
                    <span class="badge bg-warning text-dark mb-2">Berita</span>
                    <h5 class="text-dark fw-bold mb-1">${item.title}</h5>
                </div>
                <div class="mt-3">
                    <p class="text-muted small mb-2">${item.desc}</p>
                    <small class="text-primary fw-bold d-block mb-2">${item.date}</small>
                    <button class="btn btn-read-more rounded-pill" onclick="showNewsDetail(${index})">Baca Selengkapnya →</button>
                </div>
            </div>
        </div>`;
    });
    
    // Masukkan hasil HTML ke dalam halaman web.
    container.innerHTML = html;
}

// --- 4. MODAL JURUSAN ---
// Mengupdate konten modal agar dinamis sesuai jurusan yang diklik.
function updateModal(title, career) {
    // Set judul modal sesuai parameter.
    document.getElementById('modalTitle').innerText = title;
    // Set deskripsi modal (menggunakan template string).
    document.getElementById('modalDesc').innerText = `Program Studi ${title} di FMIPA Universitas Tanjungpura dirancang dengan kurikulum internasional berbasis proyek nyata.`;
    // Set teks prospek karir.
    document.getElementById('modalCareer').innerText = career;
    
    // Inisialisasi dan tampilkan Modal Bootstrap.
    var myModal = new bootstrap.Modal(document.getElementById('modalCommon'));
    myModal.show();
}

// --- 5. MODAL GAMBAR FASILITAS ---
// Menampilkan gambar fasilitas dalam ukuran besar (Preview).
function showImagePreview(src, title) {
    // Ganti sumber gambar di modal dengan gambar yang diklik.
    document.getElementById('imagePreview').src = src;
    // Ganti judul gambar di modal.
    document.getElementById('imageTitle').innerText = title;
    // Inisialisasi dan tampilkan Modal Bootstrap.
    var myModal = new bootstrap.Modal(document.getElementById('imageModal'));
    myModal.show();
}

// --- 6. MODAL DETAIL BERITA ---
// Menampilkan isi lengkap berita berdasarkan index data.
function showNewsDetail(index) {
    // Ambil objek berita spesifik dari array.
    const news = newsData[index];
    // Isi elemen-elemen modal dengan data berita tersebut.
    document.getElementById('newsModalTitle').innerText = news.title;
    document.getElementById('newsModalDate').innerText = news.date;
    document.getElementById('newsModalImg').src = news.img;
    document.getElementById('newsModalContent').innerText = news.fullContent;
    
    // Inisialisasi dan tampilkan Modal Berita.
    var myModal = new bootstrap.Modal(document.getElementById('newsModal'));
    myModal.show();
}

// Event Listener saat halaman selesai dimuat sepenuhnya.
document.addEventListener('DOMContentLoaded', () => {
    // Jalankan animasi teks.
    typeEffect();
    // Render daftar berita.
    renderNews();
});

// Navbar Scroll Effect menggunakan jQuery.
$(document).ready(function() {
    // Deteksi event scroll pada window browser.
    $(window).scroll(function() {
        // Jika posisi scroll lebih dari 50px ke bawah.
        if ($(window).scrollTop() > 50) {
            // Ubah background navbar menjadi lebih solid (putih).
            $('#mainNav').css('background', 'rgba(255, 255, 255, 0.95)');
        } else {
            // Kembalikan background navbar menjadi agak transparan jika di atas.
            $('#mainNav').css('background', 'rgba(255, 255, 255, 0.85)');
        }
    });
});