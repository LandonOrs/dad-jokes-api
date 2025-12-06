
document.addEventListener('DOMContentLoaded', () => {

    const button = document.getElementById('getJokeButton');
    const display = document.getElementById('jokeDisplay');

    if (button && display) {
        button.addEventListener('click', () => {
            display.innerText = 'Loading...';
            
            // Your API fetching logic
            fetch('https://icanhazdadjoke.com/', {
                headers: { Accept: 'application/json' }
            })
            .then(response => {
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                return response.json();
            })
            .then(data => {
                // Shows joke and the ID 
                display.innerHTML = `
                    <p>
                        **Joke:** ${data.joke}
                    </p>
                    <p class="id-link">
                        **ID:** <a href="https://icanhazdadjoke.com/j/${data.id}" target="_blank">${data.id} (Permalink)</a>
                    </p>
                `;
            })
            .catch(err => {
                console.error('Failed to fetch joke:', err);
                display.innerText = 'Failed to load joke. See console for details.';
            });
        });
    } else {
        
        console.warn('Expected elements #getJokeButton or #jokeDisplay not found in the HTML.');
    }
});