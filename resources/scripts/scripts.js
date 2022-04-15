// MENU
const wrapper = document.querySelector('.wrapper');
const menu = document.querySelector('.menu-list');

const closeMenu = (img) => {
  if (!img) img = document.querySelector('.menu-button img');
  img.src = 'resources/images/icon-menu.svg';
  img.alt = 'menu icon';
  wrapper.classList.remove('no-scroll');
  menu.classList.add('hidden');
};

const openMenu = (img) => {
  img.src = 'resources/images/icon-cancel.svg';
  img.alt = 'cancel icon';
  wrapper.classList.add('no-scroll');
  menu.classList.remove('hidden');
};

document.querySelector('.menu-button').addEventListener('click', (event) => {
  if (event.target.alt === 'menu icon') {
    openMenu(event.target);
  } else {
    closeMenu(event.target);
  }
});

// DYNAMIC HTML GENERATION
const stories = [
  {
    picture: 'story-01.jpg',
    alt: 'historia 1',
    title: 'Me duele abrazarte',
    teller: '@sopita_d_letras',
    hashtag: '#medueleabrazarte',
    team: 'RED - TEAM 6',
    members: [
      'Alexia Jessica Melissa Pacheco Pérez',
      'América Paola Noriega Ríos',
      'Jesús Jordán Correa Barragán',
      'Vianney Berenice Carranza Martínez',
      'Juan Manuel Vela Quintero',
    ],
  },
  {
    picture: 'story-02.jpg',
    alt: 'historia 2',
    title: 'La realidad detrás de la industria del Fast Fashion',
    teller: 'PENDIENTE',
    hashtag:
      '#Lusademoda #Mihistoriadeprenda #LusaShuinlomasin #moda #fastfashion #maquilas #explotación #modarápida #ambiente #fashion',
    team: 'BROWN - TEAM 1',
    members: [
      'Alejandra Escobedo Leos',
      'Alejandra Jiménez Mayo',
      'Franceska Aranzazu parra Ibarra',
      'Karime Gisselle Carvajal Gámez',
    ],
  },
  {
    picture: 'story-03.jpg',
    alt: 'historia 3',
    title: 'Malas lenguas',
    teller: '@andrea09as',
    hashtag: '#ElBullyingMata #MalasLenguasHiloteca',
    team: 'GREEN - TEAM 9',
    members: [
      'Jordán Adrián Cuellar Martínez',
      'Denisse Aracely Esquivel Rodríguez',
      'Danna Paola García Navarro',
      'Adriana Nohemí García Martínez',
      'Paulina Garza Garza',
      'Emilia Rojas Murguía',
    ],
  },
  {
    picture: 'story-04.jpg',
    alt: 'historia 4',
    title: 'Futbol en el Ring',
    teller: '@rossbelt12',
    hashtag: '#ElFutbolNOesViolencia',
    team: 'RED - TEAM 4',
    members: [
      'Rossbelt Adrián Fernández Galindo',
      'Aedmy Zuzeth Briones García',
      'Sydney Puente Rubio',
      'Emilio Escamilla Adame',
    ],
  },
  {
    picture: 'story-05.jpg',
    alt: 'historia 5',
    title: '07-10-22 WHAT IF',
    teller: '@Bheobukheli',
    hashtag: '#UnaRealidadDeCuento',
    team: 'GREEN - TEAM 7',
    members: [
      'Alondra Miranda López Acuña',
      'Ana Fabiola Carrillo Villarreal',
      'Fernando Rubén Guerra Villarreal',
    ],
  },
  {
    picture: 'story-06.jpg',
    alt: 'historia 6',
    title: 'La flor Smeraldo',
    teller: 'PENDIENTE',
    hashtag: '#LFS',
    team: 'ORANGE - TEAM 2',
    members: [
      'Cesar Adrián Zermeño Soto',
      'Alondra Maribel Becerra Marín',
      'Andrea Cristina Sánchez García',
      'Diego Enrique Miranda Córdoba',
      'Hanna Luisa Plata Martínez',
      'Vanessa Córdova Gutiérrez',
    ],
  },
];

const imagePath = 'resources/images/';

const createElement = (type, classes = [], text = null) => {
  const element = document.createElement(type);
  if (!!classes && classes.length) element.classList.add(...classes);
  if (text) element.textContent = text;
  return element;
};

const createImage = (src, alt) => {
  const img = createElement('img', ['story-img']);
  img.src = imagePath + src;
  img.alt = alt;

  const imgContainer = createElement('div', ['story']);
  imgContainer.appendChild(img);
  return imgContainer;
};

const createText = (classes, text) => createElement('div', classes, text);

const createStoryCard = (story) => {
  const title = createText(['story-title'], story.title);
  const teller = createText(['story-teller'], story.teller);
  const hashtag = createText(['story-hashtag'], story.hashtag);
  const team = createText(['story-team'], story.team);
  const members = createText(['story-members'], story.members.toString().replaceAll(',', ', '));

  const description = createElement('div', ['story-text']);
  description.appendChild(title);
  description.appendChild(teller);
  description.appendChild(hashtag);
  description.appendChild(team);
  description.appendChild(members);

  const picture = createImage(story.picture, story.alt);

  const aStory = createElement('div', ['story']);
  aStory.appendChild(picture);
  aStory.appendChild(description);

  return aStory;
};

const storiesContainer = document.querySelector('.stories-container');

const createStoryList = () => {
  if (storiesContainer != null) {
    stories.forEach((story) => {
      const aStory = createStoryCard(story);
      storiesContainer.appendChild(aStory);
    });
  }
};

createStoryList();
