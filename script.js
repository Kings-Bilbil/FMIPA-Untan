// --- 1. DATA BERITA ---
const newsData = [
    { 
        title: "Mahasiswa Matematika Raih Emas ONMIPA 2025", 
        date: "19 Nov 2025", 
        img: "https://placehold.co/400x250/F59E0B/FFF?text=Prestasi",
        desc: "Tim delegasi FMIPA berhasil menyapu bersih medali pada kategori Analisis Kompleks.",
        fullContent: "Tim mahasiswa Program Studi Matematika FMIPA Universitas Tanjungpura kembali menorehkan prestasi gemilang di kancah nasional. Dalam ajang Olimpiade Nasional Matematika dan Ilmu Pengetahuan Alam (ONMIPA) 2025 yang diselenggarakan di Yogyakarta, tim delegasi berhasil menyapu bersih medali emas pada kategori Analisis Kompleks. Prestasi ini mengukuhkan posisi FMIPA sebagai pusat keunggulan dalam pendidikan sains dasar di Indonesia. Dekan FMIPA menyampaikan apresiasi setinggi-tingginya kepada para mahasiswa dan dosen pembimbing yang telah bekerja keras selama masa persiapan."
    },
    { 
        title: "Kuliah Umum: AI untuk Konservasi Laut", 
        date: "17 Nov 2025", 
        img: "https://placehold.co/400x250/D97706/FFF?text=Seminar+AI",
        desc: "Prodi Ilmu Kelautan mengundang pakar dari Google Research untuk membahas peran AI.",
        fullContent: "Program Studi Ilmu Kelautan mengadakan kuliah umum bertajuk 'Artificial Intelligence for Marine Conservation'. Acara ini menghadirkan pembicara tamu Dr. Alan Turing (bukan nama sebenarnya), seorang pakar AI dari Google Research. Dalam kuliahnya, beliau memaparkan bagaimana teknologi machine learning dapat digunakan untuk memantau kesehatan terumbu karang, melacak pergerakan spesies langka, dan mendeteksi aktivitas penangkapan ikan ilegal secara real-time menggunakan citra satelit."
    },
    { 
        title: "Peresmian Laboratorium Robotika Baru", 
        date: "14 Nov 2025", 
        img: "https://placehold.co/400x250/1F2937/FFF?text=Lab+Robotik",
        desc: "Fasilitas terbaru untuk menunjang prodi Rekayasa Sistem Komputer telah siap digunakan.",
        fullContent: "Fakultas MIPA resmi membuka Laboratorium Robotika dan Sistem Tertanam (Embedded Systems) yang baru. Fasilitas seluas 200 meter persegi ini dilengkapi dengan peralatan mutakhir seperti lengan robot industri, kit pengembangan IoT, dan printer 3D. Laboratorium ini diharapkan dapat menjadi inkubator bagi inovasi mahasiswa Program Studi Rekayasa Sistem Komputer dalam mengembangkan solusi teknologi tepat guna."
    }
];

// --- 2. EFEK MESIN TIK ---
const textElement = document.getElementById('typing-text');
const phrases = ["QUALITY IS OUR CONCERN.", "Unggul Dalam Tranformasi.", "Riset yang Terarah.", "Berkesinambungan.", "Berwawasan Lingkungan"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
        textElement.innerText = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.innerText = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }
    let typeSpeed = isDeleting ? 50 : 100;
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; 
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }
    setTimeout(typeEffect, typeSpeed);
}

// --- 3. RENDER BERITA ---
function renderNews() {
    const container = document.getElementById('news-container');
    let html = '';
    newsData.forEach((item, index) => {
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
                    <button class="btn btn-read-more rounded-pill" onclick="showNewsDetail(${index})">Baca Selengkapnya &rarr;</button>
                </div>
            </div>
        </div>`;
    });
    container.innerHTML = html;
}

// --- 4. MODAL JURUSAN ---
function updateModal(title, career) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = `Program Studi ${title} di FMIPA Universitas Tanjungpura dirancang dengan kurikulum internasional berbasis proyek nyata.`;
    document.getElementById('modalCareer').innerText = career;
    var myModal = new bootstrap.Modal(document.getElementById('modalCommon'));
    myModal.show();
}

// --- 5. MODAL GAMBAR FASILITAS ---
function showImagePreview(src, title) {
    document.getElementById('imagePreview').src = src;
    document.getElementById('imageTitle').innerText = title;
    var myModal = new bootstrap.Modal(document.getElementById('imageModal'));
    myModal.show();
}

// --- 6. MODAL DETAIL BERITA ---
function showNewsDetail(index) {
    const news = newsData[index];
    document.getElementById('newsModalTitle').innerText = news.title;
    document.getElementById('newsModalDate').innerText = news.date;
    document.getElementById('newsModalImg').src = news.img;
    document.getElementById('newsModalContent').innerText = news.fullContent;
    var myModal = new bootstrap.Modal(document.getElementById('newsModal'));
    myModal.show();
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    typeEffect();
    renderNews();
});

// Navbar Scroll Effect
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('#mainNav').css('background', 'rgba(255, 255, 255, 0.95)');
        } else {
            $('#mainNav').css('background', 'rgba(255, 255, 255, 0.85)');
        }
    });
});