document.getElementById('loadCharacter').addEventListener('click', loadCharacter);

function loadCharacter() {
    const loading = document.getElementById('loading');
    const characterdetails = document.getElementById('characterdetails');
    const error = document.getElementById('error');

    loading.classList.remove('hidden');
    characterdetails.classList.add('hidden');
    error.classList.add('hidden');

    const characterId = math.floor(math.random()*83) + 1;
}
