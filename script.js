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

//DYNAMICALLY GENERATE SPEAKERS
//define speaker data

const data = [
    {
        img: './images/speaker1.jpg',
        name: 'Abel Morara',
        title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    },
    {
        img: './images/speaker1.jpg',
        name: 'Abel Morara',
        title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    }
];

//loop through data

data.forEach((item, i) => { 
    //get parent container
    const allSpeakers = document.querySelector('.all-speakers');

    //create container to hold speaker details 
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
 });