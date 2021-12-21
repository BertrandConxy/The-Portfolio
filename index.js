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
    id: "project1",
    name: "Multi-Post Stories Gain+Glory1",
    image: "./images/Icons/Snapshoot Portfolio.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    listItem1: "Ruby on Rails",
    listItem2: "CSS",
    listItem3: "Javascript",
    liveLink: "#",
    sourceLink: "#"
},

{
    id: "project2",
    name: "Multi-Post Stories Gain+Glory2",
    image: "./images/Icons/Snapshoot Portfolio.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    listItem1: "Ruby on Rails",
    listItem2: "CSS",
    listItem3: "Javascript",
    liveLink: "#",
    sourceLink: "#"
},

{
id: "project3",
    name: "Multi-Post Stories Gain+Glory3",
    image: "./images/Icons/Snapshoot Portfolio.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    listItem1: "Ruby on Rails",
    listItem2: "CSS",
    listItem3: "Javascript",
    liveLink: "#",
    sourceLink: "#"
},

{
    id: "project4",
    name: "Multi-Post Stories Gain+Glory4",
    image: "./images/Icons/Snapshoot Portfolio.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    listItem1: "Ruby on Rails",
    listItem2: "CSS",
    listItem3: "Javascript",
    liveLink: "#",
    sourceLink: "#"
},

{
    id: "project5",
    name: "Multi-Post Stories Gain+Glory5",
    image: "./images/Icons/Snapshoot Portfolio.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    listItem1: "Ruby on Rails",
    listItem2: "CSS",
    listItem3: "Javascript",
    liveLink: "#",
    sourceLink: "#"
},

{
    id: "project6",
    name: "Multi-Post Stories Gain+Glory6",
    image: "./images/Icons/Snapshoot Portfolio.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    listItem1: "Ruby on Rails",
    listItem2: "CSS",
    listItem3: "Javascript",
    liveLink: "#",
    sourceLink: "#"
}

]