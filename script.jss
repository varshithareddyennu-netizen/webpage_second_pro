// script.js

// Function to show live scores (mock example)
function showScore() {
    // Example live scores (you can replace with API data later)
    const scores = [
        { sport: "Football", match: "Team A vs Team B", score: "2 - 1" },
        { sport: "Cricket", match: "India vs Australia", score: "245/6 - 238/10" },
        { sport: "Basketball", match: "Lakers vs Celtics", score: "102 - 98" }
    ];

    // Create message string
    let message = "🏟️ Live Scores:\n\n";
    scores.forEach(item => {
        message += `${item.sport}: ${item.match} | Score: ${item.score}\n`;
    });

    // Show alert with live scores
    alert(message);
}

// Optional: Smooth scrolling for navbar links
document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});