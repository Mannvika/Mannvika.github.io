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
      contentSrcs: ["images/LinkedPng.png", "images/LinkedPng.png"],
      description: "1st place overall game jam winner turned fully developed Android/IOS game."
    },
    {
      title: "RGB Platformer",
      iconSrcs: ["images/icons/Python.svg", "images/icons/Unity.svg", "images/icons/CSharp.svg", "images/icons/OrangePi.png"],
      contentSrcs: ["images/LinkedPng.png", "images/LinkedPng.png"],
      description: "Developed a game in Unity/C# that communicates with a single-board computer and Arduino to change the color of a physical RGB LED strip via Python. "
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
  content.innerHTML = nextProject.contentSrcs.map(contentSrc => `<img src="${contentSrc}" style="width: 50%;">`).join('');
  description.textContent = nextProject.description;
}