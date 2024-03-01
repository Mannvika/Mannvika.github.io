// Get references to elements
const title = document.querySelector('.title');
const icons = document.querySelector('.icons');
const content = document.querySelector('.project-content');
const description = document.querySelector('.description');

// Function to handle button clicks
function plusDivs(direction) {
  // Define your data for different projects
  const projects = [
    {
      title: "Linked",
      iconSrcs: ["images/icons/Unity.svg", "images/icons/CSharp.svg"],
      contentSrcs: ["images/Linked/LinkedLogo.png", "images/Linked/LinkedGraphic1.png", "images/Linked/LinkedGraphic2.png", "images/Linked/LinkedGraphic3.png"],
      description: "1st place overall game jam winner refactored to become a fully developed Android/IOS game (Currently Unavailable)."
    },
    {
      title: "RGB Platformer",
      iconSrcs: ["images/icons/Python.png", "images/icons/Unity.svg", "images/icons/CSharp.svg", "images/icons/OrangePi.png", "images/icons/arduino.png"],
      contentSrcs: ["images/LinkedPng.png", "images/LinkedPng.png"],
      description: "Hardware/software game tech demo that communicates with a single-board computer to change the color of a physical RGB LED strip via TCP listening."
    },
    {
      title: "Minesweeper (School Project)",
      iconSrcs: ["images/icons/C++.svg", "images/icons/SFML.png"],
      contentSrcs: ["images/LinkedPng.png", "images/LinkedPng.png"],
      description: "Recreation of the minesweeper game with custom debugging functionality through the use of object-oriented programming and singleton design patterns."
    },
    {
      title: "This Website!",
      iconSrcs: ["images/icons/Html.svg", "images/icons/CSS.svg", "images/icons/javascript.svg"],
      contentSrcs: ["images/LinkedPng.png", "images/LinkedPng.png"],
      description: "Web portfolio to display my projects, skills, experience, and goals."
    },
    // Add more projects as needed
  ];

  // Get current project index
  const currentIndex = projects.findIndex(project => project.title === title.textContent);
  
  // Calculate next project index
  let nextIndex = currentIndex + direction;
  if (nextIndex < 0) {
    nextIndex = projects.length - 1;
  } else if (nextIndex >= projects.length) {
    nextIndex = 0;
  }

  // Update elements with data from the next project
  const nextProject = projects[nextIndex];
  title.textContent = nextProject.title;
  icons.innerHTML = nextProject.iconSrcs.map(iconSrc => `<img src="${iconSrc}">`).join('');
  content.innerHTML = nextProject.contentSrcs.map(contentSrc => `<div class="content-item"><img src="${contentSrc}"></div>`).join('');  description.textContent = nextProject.description;
}