const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((i) => i.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// END OF NAVBAR

// DYNAMICALLY GENERATE SPEAKERS
// define speaker data

const data = [
  {

    img: './images/speaker1.jpg',
    name: 'Abel Morara',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {

    img: './images/speaker2.jpg',
    name: 'Abel Morara',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {

    img: './images/speaker3.jpg',
    name: 'Abel Morara',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {

    img: './images/speaker4.jpg',
    name: 'Abel Morara',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {

    img: './images/speaker5.jpg',
    name: 'Abel Morara',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {

    img: './images/speaker6.jpg',
    name: 'Abel Morara',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
];

const seeMoreBtn = document.querySelector('.see-more');

// set number of initial speakers to be displayed

// const initialSpeakers=2;
// set number of speakers to be loaded on click
const loadSpeakers = 2;

// loop through data
function loadInitialSpeakers(num) {
  let counter = 0;

  const initialSpeakers = num;

  data.forEach((item, i) => {
    if (counter < initialSpeakers) {
      // get parent container
      const allSpeakers = document.querySelector('.all-speakers');
      // create container to hold speaker details and append
      const speakerDetails = document.createElement('div');

      speakerDetails.classList = 'speaker-details';

      speakerDetails.innerHTML = `
    
        <div class="speaker-img">
                        <img src=${data[i].img}>
        
                    </div>
                    <div class="info">
                        <h3>${data[i].name}</h3>
                        <p class="s-title">${data[i].title}</p>
                        <hr />
                        <p class="s-desc">${data[i].description}</p>
                    </div>
        `;
      allSpeakers.append(speakerDetails);
    }

    counter += 1;
  });
  // console.log(counter);
}

window.addEventListener('load', () => {
  if (window.matchMedia('(min-width: 768px)').matches) {
    loadInitialSpeakers(data.length);
  } else {
    loadInitialSpeakers(2);
  }
});

function loadData() {
  const currentlyDisplayed = document.querySelectorAll('.speaker-details').length;

  let counter = 0;
  data.forEach((item, i) => {
    if (counter >= currentlyDisplayed && counter < loadSpeakers + currentlyDisplayed) {
      // get parent container
      const allSpeakers = document.querySelector('.all-speakers');
      // create container to hold speaker details and append
      const speakerDetails = document.createElement('div');

      speakerDetails.classList = 'speaker-details';

      speakerDetails.innerHTML = `
    
        <div class="speaker-img">
                        <img src=${data[i].img}>
        
                    </div>
                    <div class="info">
                        <h3>${data[i].name}</h3>
                        <p class="s-title">${data[i].title}</p>
                        <hr />
                        <p class="s-desc">${data[i].description}</p>
                    </div>
        `;
      allSpeakers.append(speakerDetails);
    }

    counter += 1;
  });

  if (document.querySelectorAll('.speaker-details').length === data.length) {
    seeMoreBtn.style.display = 'none';
  }
  // console.log(counter);
}
seeMoreBtn.addEventListener('click', () => {
  loadData();
});
