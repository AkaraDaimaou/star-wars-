document.getElementById('fetch-button').addEventListener('click', loadCharacter);

function loadCharacter() {
    const loading = document.getElementById('loading');
    const characterInfo = document.getElementById('character-info');
    const error = document.getElementById('error');

    loading.classList.remove('hidden');
    characterInfo.classList.add('hidden');
    error.classList.add('hidden');

    const characterId = Math.floor(Math.random() * 82) + 1;
    fetch(`https://www.swapi.tech/api/people/${characterId}`)
        .then(response => response.json())
        .then(data => {
            const character = data.result.properties;
            document.getElementById('name').textContent = character.name;
            document.getElementById('height').textContent = character.height;
            document.getElementById('gender').textContent = character.gender;
            document.getElementById('birth-year').textContent = character.birth_year;

            return fetch(character.homeworld);
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('home-world').textContent = data.result.properties.name;
            loading.classList.add('hidden');
            characterInfo.classList.remove('hidden');
        })
        .catch(() => {
            loading.classList.add('hidden');
            error.classList.remove('hidden');
        });
}
