function makeNode(char){
    this.char =  char;
    this.isWord =  false;
    this.map = {};
    this.words = [];
}

function add(str, i, root){
    if(i === str.length){
        root.isWord = true;
        return
    }
    const currentChar = str[i].toLowerCase();
    if(!root.map[currentChar]){
        root.map[currentChar] = new makeNode(currentChar);
    }
    root.words.push(str);
    add(str, i + 1, root.map[currentChar])
}

function search(str, i, root){
    if(str.length === 0){
        return [];
    } else if (i === str.length){
        return root.words;
    }
    const currentChar = str[i].toLowerCase();
    if(!root.map[currentChar]){
        return [];
    }
    return search(str, i + 1, root.map[currentChar]);
}