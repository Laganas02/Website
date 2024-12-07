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
            <div class="nav-links">
                <div class="dropdown">
                    <a href="#">Browse</a>
                    <div class="dropdown-content">
                        <div class="dropdown-column">
                            <a href="#">Romance</a>
                            <a href="#">Fanfiction</a>
                            <a href="#">Historical</a>
                            <a href="#">Humor</a>
                            <a href="#">Non-Fiction</a>
                            <a href="#">Horror</a>
                            <a href="#">Mystery</a>
                            <a href="#">Poetry</a>
                            <a href="#">Fantasy</a>
                            <a href="#">Teenfiction</a>
                            <a href="#">Matured</a>
                            <a href="#">Thriller</a>
                        </div>
                    </div>
                </div>
                <a href="search.html">Search</a>
                <div class="dropdown">
                    <a href="#">Write</a>
                    <div class="dropdown-content">
                        <a href="#">Create a new story</a>
                        <a href="#">My stories</a>
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
                        <a href="#">Logout</a>
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
