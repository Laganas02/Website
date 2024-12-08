// script.js

// HTML structure for header and footer
const headerHTML = `
<header>
<div class="navbar">
            <div class="logo">
                <a href="home.html">
                <img src="image/logo.png" alt="Logo">
                </a>
            </div>
             <div class="dropdown">
                <a href="#">Browse</a>
                <div class="dropdown-content">
                    <div class="dropdown-column">
                        <a href="genre_romance.html">Romance</a>
                        <a href="genre_non-fiction.html">Non-Fiction</a>
                        <a href="genre_horror.html">Horror</a>
                        <a href="genre_mystery.html">Mystery</a>
                        <a href="genre_poetry.html">Poetry</a>
                        <a href="genre_teenfiction.html">Teenfiction</a>
                        <a href="genre_Psychology.html">Psychology</a>
                    </div>
                </div>
            </div>
                <a href="search.html">Search</a>
                <div class="dropdown">
                    <a href="#">Write</a>
                    <div class="dropdown-content">
                        <a href="write_newStory.html">Create a new story</a>
                        <a href="write_myStory.html">My stories</a>
                    </div>
                </div>
                <div class="dropdown">
                    <a href="#">Profile</a>
                    <div class="dropdown-content">
                        <a href="MyProfile.html">My Profile</a>
                        <a href="library.html">Library</a>
                        <a href="#">Inbox</a>
                        <a href="#">Notifications</a>
                        <a href="#">Language: English</a>
                        <a href="#">Settings</a>
                        <a href="login.html">Logout</a>
                    </div>
                </div>
            </div>
        </div>
</header>
`;

const footerHTML = `
<footer>
    <p>© 2024 | Laganas - Subido | All Rights Reserved</p>
</footer>
`;

// Function to inject the header and footer HTML
function loadHeaderAndFooter() {
  document.getElementById("header").innerHTML = headerHTML;
  document.getElementById("footer").innerHTML = footerHTML;
}
// Search Page
// Perform search functionality
function performSearch() {
  const query = document.getElementById("search-bar").value;
  const resultsContainer = document.getElementById("search-results");

  if (query.trim()) {
    resultsContainer.innerHTML = `<p>Searching for: ${query}</p>`;
  } else {
    resultsContainer.innerHTML = "";
  }
}

// Initialize page-specific functionality
document.addEventListener("DOMContentLoaded", () => {
  // Inject header and footer HTML
  loadHeaderAndFooter();

  // Add search functionality if the search bar is present
  const searchBar = document.getElementById("search-bar");
  if (searchBar) {
    searchBar.addEventListener("input", performSearch);
  }
});

// Array of book titles
const randomBookTitles = [
  "Training to Love",
  "A Different Virus",
  "Anna Karenina",
  "Oh My Ice Goddess",
  "What's at Stake",
  "Bully Stepbrother",
  "Happy Memorials",
  "Serenity: Love",
  "Royal Elders",
  "Rich Girl",
  "Alpha Dylan",
  "I Miss You Too",
  "I Hate You Too",
  "Under the Sky of Diamonds",
  "The Mysterious Salvation",
  "Money Isn't Everything...",
  "Rich Bae, Rich Love",
];

function pickRandomBook(elementId) {
  const randomIndex = Math.floor(Math.random() * randomBookTitles.length);
  document.getElementById(elementId).textContent =
    randomBookTitles[randomIndex];
}

// Generate random book titles for each carousel item
for (let i = 1; i <= 6; i++) {
  pickRandomBook(`random-book-${i}`);
}

//library
function showSection(section) {
  document.getElementById("current").style.display =
    section === "current" ? "block" : "none";
  document.getElementById("reading-list").style.display =
    section === "reading-list" ? "block" : "none";
}

// browse
function showBooks(genre) {
  // Example data, in practice this would be fetched from a server
  const booksData = {
    Romance: ["Story 1", "Story 2", "Story 3", "Story 4"],
    Fanfiction: ["Story A", "Story B", "Story C"],
    Historical: ["Story X", "Story Y"],
    // Add more genres and their respective stories here
  };

  const booksList = document.getElementById("books-list");
  booksList.innerHTML = `<h2>${genre} Stories</h2><ul>${booksData[genre]
    .map((book) => `<li>${book}</li>`)
    .join("")}</ul>`;
}

function toggleMenu() {
  const menu = document.getElementById('hamburger-content');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}
document.getElementById('hamburger').addEventListener('click', function () {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show'); // Toggle visibility
});
