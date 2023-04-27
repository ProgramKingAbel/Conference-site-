const projectsArea = document.querySelector('.projects');
const modalPopUp = document.querySelector('#modal');

const projects = [
  {
    id: 1,
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads no accounts or sign-ups required',
    featureImg: '/images/Nature.svg',
    technology: ['html', 'css', 'javascript'],
    platform: 'CANOPY',
    stack: 'Back End Dev',
    year: 2015,
    livelink: 'https://programkingabel.github.io/',
    linkSource: 'https://github.com/ProgramKingAbel/Abel-Morara-Portfolio',

  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    featureImg: '/images/grd4.svg',
    technology: ['html', 'Ruby on Rails', 'css', 'javascript'],
    platform: 'FACEBOOK',
    stack: 'Full Stack Dev',
    year: 2015,
    liveLink: 'https://programkingabel.github.io/',
    linkSource: 'https://github.com/ProgramKingAbel/Abel-Morara-Portfolio',
  },
  {
    id: 3,
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    featureImg: '/images/Tonic.svg',
    technology: ['html', 'Ruby on Rails', 'css', 'javascript'],
    platform: 'FACEBOOK',
    stack: 'Full Stack Dev',
    year: 2015,
    liveLink: 'https://programkingabel.github.io/',
    linkSource: 'https://github.com/ProgramKingAbel/Abel-Morara-Portfolio',
  },
  {
    id: 4,
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    featureImg: '/images/grd2.svg',
    technology: ['html', 'Ruby on Rails', 'css', 'javascript'],
    platform: 'Uber',
    stack: 'Lead Developer',
    year: 2018,
    liveLink: 'https://programkingabel.github.io/',
    linkSource: 'https://github.com/ProgramKingAbel/Abel-Morara-Portfolio',
  },
];
function generateContent() {
  projectsArea.innerHTML = projects
    .map(
      (content) => `          
         <div class="details">
        <img src=${content.featureImg}  alt="" />

        <div class="card-info">
          <h2>${content.name}</h2>

          <div class="title-and-date">
            <p class="title">CANOPY</p>
            <span></span>
            <p class="muted">${content.stack}</p>
            <span></span>
            <p class="muted">${content.year}</p>
          </div>

          <p class="description">${content.description}</p>
          <ul class="stack">
          ${content.technology.map((x) => `<li>${x}</li>`).join('')}
          </ul>
          <a class="detail-btn btn" id=${content.id}href="#">See projects</a>
        </div>
      </div> `,
    )
    .join('');
}
projectsArea.addEventListener('click', (e) => {
  if (e.target.classList.contains('detail-btn')) {
    modalPopUp.style.display = 'block';
    const id = parseFloat(e.target.id);
    const search = projects.find((x) => x.id === id);
    if (search !== undefined) {
      modalPopUp.innerHTML = `
             <div class="popup">
            <div class="header-close modal-container">
              <h3 class="popup-title">${search.name}</h3>
              <i id="close-btn" class="uil uil-multiply"></i>
            </div>
            <div class="title-and-date modal-container">
              <p class="title">${search.platform}</p>
              <span></span>
              <p class="muted">${search.stack}</p>
              <span></span>
              <p class="muted">${search.year}</p>
            </div>
            <div class="card-info modal-container">
          <img class="main-img" src=${search.featureImg} alt="" />
          <div class="switch">
            <div class="description">
              <p>
               ${search.description}
              </p>
              <p class="hide">
              ${search.description}
              </p>
            </div>
            <div class="stack-and-buttons">
              <ul class="stack">
                  ${search.technology.map((x) => `<li>${x}</li>`).join('')}
              </ul>
              <div class="buttons">
                <a href=${search.liveLink} class="see-live"
                  ><img src="./images/Enabled1.png" alt="see live"
                /></a>
                <a href=${search.linkSource} class="see-source"
                  ><img src="./images/Enabled.png" alt="see source"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
     `;
    }
  }
  generateContent();
});
modalPopUp.addEventListener('click', (e) => {
  if (e.target.id === 'close-btn') {
    modalPopUp.style.display = 'none';
  }
  generateContent();
});
generateContent();
