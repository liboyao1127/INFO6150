document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const jobTitle = document.getElementById('jobTitle').value;
    const location = document.getElementById('location').value;
    fetchData(jobTitle, location);
});

function fetchData(title, loc) {
    const baseURL = 'https://sheets.googleapis.com/v4/spreadsheets/1owGcfKZRHZq8wR7Iw6PVh6-ueR0weIVQMjxWW_0M6a8/values/';
    const range = 'Sheet1!A1:N';
    const apiKey = 'AIzaSyDErRezqW2klWRYKwQkzuOIMGJ5AeD5GSY';
    const url = `${baseURL}${range}?key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayResults(data, title, loc);
        })
        .catch(error => console.error('Error:', error));
}

function displayResults(data, title, loc) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    data.values.forEach((row, index) => {
        if (index === 0) return; // Skip header row
        const [id, link, companyName, jobTitle, location] = row;
        if (jobTitle.toLowerCase().includes(title.toLowerCase()) && location.toLowerCase().includes(loc.toLowerCase())) {
            const jobElement = document.createElement('div');
            jobElement.innerHTML = `<strong>${jobTitle}</strong> at ${companyName} - <a href="${link}">More Info</a>`;
            resultsDiv.appendChild(jobElement);
        }
    });
}
