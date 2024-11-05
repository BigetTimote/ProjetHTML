const images = [
    {
        src: 'img/dn.avif',
        text: "Death Note est un anime intense et psychologique où un étudiant brillant trouve un carnet capable de tuer quiconque dont le nom est écrit dedans. S'en suit un jeu de stratégie complexe entre lui, tentant d'imposer sa justice, et un détective mystérieux déterminé à l'arrêter. "
    },
    {
        src: 'img/ds.avif',
        text: "Demon Slayer est un anime d'action où Tanjiro, un jeune garçon au grand cœur, devient pourfendeur de démons après que sa famille ait été massacrée. Accompagné d'alliés courageux, il cherche à venger sa famille et à sauver sa sœur transformée en démon."
    },
    {
        src: 'img/opm.webp',
        text: "One Punch Man est un anime parodique et hilarant où Saitama, un super-héros surpuissant capable de vaincre n'importe quel ennemi d'un seul coup de poing, s'ennuie face au manque de défi. Il cherche un vrai adversaire tout en naviguant dans un monde rempli de héros et de monstres."
    }
];

let currentIndex = 0;

function updateCarousel() {
    const imageElement = document.getElementById('current-image');
    const textElement = document.getElementById('current-text');

    imageElement.src = images[currentIndex].src;
    textElement.textContent = images[currentIndex].text;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}