import "./reset.css";
import "./styles.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import battleShipImg from './assets/battleship.jpeg';
import weatherAppImg from './assets/weather_app.jpeg';
import toDoListImg from './assets/to_do_list.jpeg';
import adminDashboardImg from './assets/admin_dashboard.jpeg'

const projects = [
  {'name': 'Weather App',
    'img': weatherAppImg,
    'description': 'A real-time weather dashboard that displays current conditions and forecasts for any location using Virtual Crossing Weather API.',
    'github': 'https://github.com/chiknfillet/weather_app',
    'link': 'https://chiknfillet.github.io/weather_app/'
  },
  {'name': 'BattleShip',
    'img': battleShipImg,
    'description': 'A classic naval strategy game where you place your fleet and try to sink your opponent’s ships using logic and deduction.',
    'github': 'https://github.com/chiknfillet/battleship_game',
    'link': 'https://chiknfillet.github.io/battleship_game/'
  },
  {'name': 'To Do List',
    'img': toDoListImg,
    'description': 'A simple productivity app that lets users add, edit, and manage daily tasks.',
    'github': 'https://github.com/chiknfillet/to_do_list',
    'link': 'https://chiknfillet.github.io/weather_app/'
  },
  {'name': 'Admin Dashboard',
    'img': adminDashboardImg,
    'description': 'An admin dashboard displaying projects that I created to practice flex layouts',
    'github': 'https://github.com/chiknfillet/admin_dashboard',
    'link': 'https://chiknfillet.github.io/admin_dashboard/'
  }
]

for (const project of projects) {
  createProjectCard(project.name, project.img, project.description, project.github, project.link)
}

function createProjectCard(name, imageSrc, description, githubLink, liveLink) {
  // Select the container where cards will go
  const container = document.querySelector('.projects-container');

  // Create card elements
  const card = document.createElement('div');
  card.classList.add('project-card');

  const img = document.createElement('img');
  img.src = imageSrc;
  img.alt = name;

  const details = document.createElement('div');
  details.classList.add('details');

  const nameLinks = document.createElement('div');
  nameLinks.classList.add('name-links');

  const title = document.createElement('h3');
  title.textContent = name;

  const githubAnchor = document.createElement('a');
  githubAnchor.href = githubLink;
  githubAnchor.target = '_blank';
  githubAnchor.innerHTML = '<i class="fa-brands fa-github"></i>';

  const liveAnchor = document.createElement('a');
  liveAnchor.href = liveLink;
  liveAnchor.target = '_blank';
  liveAnchor.innerHTML = '<i class="fa-solid fa-link"></i>';

  const desc = document.createElement('p');
  desc.textContent = description;

  // Combine elements
  nameLinks.append(title, githubAnchor, liveAnchor);
  details.append(nameLinks, desc);
  card.append(img, details);
  container.appendChild(card);
}