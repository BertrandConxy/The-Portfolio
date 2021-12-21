const toggleOn = document.getElementById('menu-icons1');
const toggleOff = document.getElementById('menu-icon2');
const menuList = document.getElementById('menu-list');

toggleOn.addEventListener('click', () => {
  menuList.classList.toggle('show');
  toggleOff.classList.toggle('show');
  toggleOn.classList.toggle('hide');
});

toggleOff.addEventListener('click', () => {
  menuList.classList.toggle('show');
  toggleOff.classList.toggle('show');
  toggleOn.classList.toggle('hide');
});

document.onclick = function remove(e) {
  if (e.target.id !== 'menu-list' && e.target.id !== 'menu-icons1' && e.target.id !== 'menu-icon2') {
    menuList.classList.remove('show');
    toggleOn.classList.remove('hide');
    toggleOff.classList.remove('show');
  }
};

const projectData = [{
  id: 'project1',
  name: 'Multi-Post Stories Gain+Glory1',
  image: './images/Icons/Snapshoot-Portfolio.png',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  listItem1: 'Ruby on Rails',
  listItem2: 'CSS',
  listItem3: 'Javascript',
  liveLink: '#',
  sourceLink: '#',
},

{
  id: 'project2',
  name: 'Multi-Post Stories Gain+Glory2',
  image: './images/Icons/Snapshoot-Portfolio.png',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  listItem1: 'Ruby on Rails',
  listItem2: 'CSS',
  listItem3: 'Javascript',
  liveLink: '#',
  sourceLink: '#',
},

{
  id: 'project3',
  name: 'Multi-Post Stories Gain+Glory3',
  image: './images/Icons/Snapshoot-Portfolio.png',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  listItem1: 'Ruby on Rails',
  listItem2: 'CSS',
  listItem3: 'Javascript',
  liveLink: '#',
  sourceLink: '#',
},

{
  id: 'project4',
  name: 'Multi-Post Stories Gain+Glory4',
  image: './images/Icons/Snapshoot-Portfolio.png',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  listItem1: 'Ruby on Rails',
  listItem2: 'CSS',
  listItem3: 'Javascript',
  liveLink: '#',
  sourceLink: '#',
},

{
  id: 'project5',
  name: 'Multi-Post Stories Gain+Glory5',
  image: './images/Icons/Snapshoot-Portfolio.png',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  listItem1: 'Ruby on Rails',
  listItem2: 'CSS',
  listItem3: 'Javascript',
  liveLink: '#',
  sourceLink: '#',
},

{
  id: 'project6',
  name: 'Multi-Post Stories Gain+Glory6',
  image: './images/Icons/Snapshoot-Portfolio.png',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  listItem1: 'Ruby on Rails',
  listItem2: 'CSS',
  listItem3: 'Javascript',
  liveLink: '#',
  sourceLink: '#',
},

];

const projectButton = document.querySelectorAll('.project-link');
const container = document.createElement('div');
function closeIt() {
  document.body.removeChild(container);
}

projectButton.forEach((el) => el.addEventListener('click', () => {
  const displayedArray = projectData.filter((projectId) => projectId.id === el.getAttribute('id'));

  for (let i = 0; i < displayedArray.length; i += 1) {
    document.body.appendChild(container);
    container.classList.add('pop-up');
    const img = document.createElement('img');
    img.classList.add('pop-image');
    img.setAttribute('src', displayedArray[i].image);

    container.appendChild(img);

    const title = document.createElement('h3');
    title.classList.add('title');
    title.textContent = displayedArray[i].name;
    container.appendChild(title);

    const ul = document.createElement('ul');
    ul.classList.add('cells');
    container.appendChild(ul);
    const listItem1 = document.createElement('li');
    listItem1.textContent = displayedArray[i].listItem1;
    listItem1.classList.add('cell');
    const listItem2 = document.createElement('li');
    listItem2.textContent = displayedArray[i].listItem2;
    listItem2.classList.add('cell');
    const listItem3 = document.createElement('li');
    listItem3.textContent = displayedArray[i].listItem3;
    listItem3.classList.add('cell');
    container.append(listItem1, listItem2, listItem3);

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = displayedArray[i].description;
    container.appendChild(description);

    const liveLink = document.createElement('a');
    const linkText1 = document.createTextNode('See Live');
    const liveIcon = document.createElement('img');
    liveIcon.classList.add('popIcon');
    liveIcon.src = '/images/Icons/livepop.png';
    liveIcon.alt = ' ';
    liveLink.appendChild(linkText1);
    liveLink.appendChild(liveIcon);
    liveLink.href = displayedArray[i].liveLink;
    liveLink.classList.add('Primary-btn', 'pop');

    const sourceLink = document.createElement('a');
    const linkText2 = document.createTextNode('See source');
    const sourceIcon = document.createElement('img');
    sourceIcon.classList.add('popIcon');
    sourceIcon.src = '/images/Icons/gitpop.png';
    sourceIcon.alt = ' ';
    sourceLink.appendChild(linkText2);
    sourceLink.appendChild(sourceIcon);
    sourceLink.href = displayedArray[i].sourceLink;
    sourceLink.classList.add('Primary-btn', 'pop');
    container.append(liveLink, sourceLink);

    const closeTag = document.createElement('img');
    closeTag.src = '/images/Icons/closetoggle.png';
    closeTag.alt = ' ';
    closeTag.classList.add('pop-close');
    container.appendChild(closeTag);

    closeTag.onclick = closeIt;
  }
}));
