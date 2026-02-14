const images = ['assets/1.jpg', 'assets/2.jpg', 'assets/3.jpg', 'assets/4.jpg', 'assets/5.jpg'];
let currentIndex = 0;

function updateUI() {
    const mainImg = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');

    mainImg.style.opacity = '0';
    setTimeout(() => {
        mainImg.src = images[currentIndex];
        mainImg.style.opacity = '1';

        thumbnails.forEach((thumb, index) => {
            if (index === currentIndex) {
                thumb.classList.add('thumbnail-active');
                thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            } else {
                thumb.classList.remove('thumbnail-active');
            }
        });
    }, 200);
}

function nextImage() { currentIndex = (currentIndex + 1) % images.length; updateUI(); }
function prevImage() { currentIndex = (currentIndex - 1 + images.length) % images.length; updateUI(); }
function changeImage(index) { currentIndex = index; updateUI(); }

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
    document.querySelectorAll('[id^="tab-"]').forEach(t => t.classList.remove('tab-active', 'text-white'));
    document.querySelectorAll('[id^="tab-"]').forEach(t => t.classList.add('text-gray-500'));

    document.getElementById('content-' + tabId).classList.remove('hidden');
    document.getElementById('tab-' + tabId).classList.add('tab-active', 'text-white');
    document.getElementById('tab-' + tabId).classList.remove('text-gray-500');
}

document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
});