var words = [
    'Apple',
    'Application',
    'Ant',
    'Bat',
    'Ball',
    'Car',
    'Cat',
]
const root = new makeNode('\0');
for(const word of words){
    add(word, 0, root)
}

const searchBox = document.getElementById('search');
const listEle = document.getElementById('list');

searchBox.addEventListener('keyup', function(e) {
    const str = e.target.value.toLowerCase();
    const suggestions = search(str, 0, root);
    let result = "";
    for(const suggestion of suggestions){
        result += `<li onclick="resultClicked(this)"><strong>${suggestion.substr(0, str.length)}</strong>${suggestion.substr(str.length)}</li>`;
    }
    listEle.innerHTML = result;
})

function resultClicked(e){
    searchBox.value = e.innerText;
    listEle.innerHTML = "";
}