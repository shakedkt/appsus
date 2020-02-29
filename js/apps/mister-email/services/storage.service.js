const EMAILS_KEY = 'EMAILS';

function store(key, any) {
    localStorage[key] = JSON.stringify(any);
}

function load(key) {
    var str = localStorage[key] || 'null';
    return JSON.parse(str);
}


export const storageService = {
    store,
    load
}