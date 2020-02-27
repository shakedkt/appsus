// import { emailService } from '../services/email-service.js';


var notes = [
    { type: "NoteText", isPinned: true, info: { txt: "Fullstack Me Baby!" } },
    { type: "NoteImg", info: { url: "http://some-img/me", title: "Me playing Mi" }, style: { backgroundColor: "#00d" } },
    { type: "NoteTodos", info: { label: "How was it:", todos: [{ txt: "Do that", doneAt: null }, { txt: "Do this", doneAt: 187111111 }] } }
]

function getNotes() {
    return notes
}

// // CRUDL - Create, Read, Update, Delete, List
export const keepService = {
    getNotes

}