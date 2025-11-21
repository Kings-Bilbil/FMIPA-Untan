const newsData = [
    { 
        title: "Prestasi Lomba Gema Ekonomi Syariah Kalimantan Barat", 
        date: "29 Juni 2024", 
        img: "images/foto-berita2.jpeg",
        desc: "Mahasiswa Sistem Informasi meraih juara 2 lomba Gebyar Kalbar 2024 dengan Tema Gema Ekonomi Syariah.",
        fullContent: "Selamat Atas Prestasinya Farahdiba Helwa Latifah Mahasiswa Sistem Informasi Angakatan 2021 yang telah meraih juara 2 lomba Gebyar Kalbar 2024 dengan Tema Gema Ekonomi Syariah."
    },
    { 
        title: "Mahasiswa Universitas Tanjungpura Raih Prestasi dalam Kompetisi Indonesia Sharia Financial Olympiad (ISFO) 2025", 
        date: "17 Nov 2025", 
        img: "images/foto-berita1.jpeg",
        desc: "Tim mahasiswa Untan berhasil membuktikan bahwa semangat dan solidaritas mampu menembus batas disiplin ilmu dan mengantarkan pada prestasi gemilang.",
        fullContent: "Semangat juang dan kecerdasan intelektual mahasiswa Universitas Tanjungpura kembali menorehkan tinta emas di panggung nasional! Dalam ajang Indonesia Sharia Financial Olympiad (ISFO) 2025, kompetisi bergengsi yang diselenggarakan oleh Otoritas Jasa Keuangan (OJK) Indonesia pada 4 November 2025 di Kantor OJK Jawa Timur, Surabaya, tim mahasiswa Untan berhasil membuktikan bahwa semangat dan solidaritas mampu menembus batas disiplin ilmu dan mengantarkan pada prestasi gemilang."
    },
    { 
        title: "Selamat & Sukses Mahasiswa Kimia Lulus Program Beasiswa Berprestasi Djarum Beasiswa Plus", 
        date: "14 Nov 2025", 
        img: "images/foto-berita3.png",
        desc: "Penerima Djarum Beasiswa Plus Program Beasiswa Berprestasi.",
        fullContent: "Segenap Civitas Akademika FMIPA Untan mengucapkan Selamat dan Sukses atas prestasi yang telah diraih Septy Aurelia Sherent (Kimia 2022) sebagai Penerima Djarum Beasiswa Plus Program Beasiswa Berprestasi✨ Semoga apa yang telah dicapai dapat bermanfaat dan menjadi motivasi bagi mahasiswa lainnya serta menjadi langkah awal untuk mencapai prestasi prestasi lainnya🥰✨"
    }
];

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
    } 
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeEffect, typeSpeed);
}

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
                    <button class="btn btn-read-more rounded-pill" onclick="showNewsDetail(${index})">Baca Selengkapnya →</button>
                </div>
            </div>
        </div>`;
    });
    
    container.innerHTML = html;
}

function updateModal(title, career) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = `Program Studi ${title} di FMIPA Universitas Tanjungpura dirancang dengan kurikulum internasional berbasis proyek nyata.`;
    document.getElementById('modalCareer').innerText = career;
    
    var myModal = new bootstrap.Modal(document.getElementById('modalCommon'));
    myModal.show();
}

function showImagePreview(src, title) {
    document.getElementById('imagePreview').src = src;
    document.getElementById('imageTitle').innerText = title;
    var myModal = new bootstrap.Modal(document.getElementById('imageModal'));
    myModal.show();
}

function showNewsDetail(index) {
    const news = newsData[index];
    document.getElementById('newsModalTitle').innerText = news.title;
    document.getElementById('newsModalDate').innerText = news.date;
    document.getElementById('newsModalImg').src = news.img;
    document.getElementById('newsModalContent').innerText = news.fullContent;
    
    var myModal = new bootstrap.Modal(document.getElementById('newsModal'));
    myModal.show();
}

document.addEventListener('DOMContentLoaded', () => {
    typeEffect();
    renderNews();
});

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('#mainNav').css('background', 'rgba(255, 255, 255, 0.95)');
        } else {
            $('#mainNav').css('background', 'rgba(255, 255, 255, 0.85)');
        }
    });
});