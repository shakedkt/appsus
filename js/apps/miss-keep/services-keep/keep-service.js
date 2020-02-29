var notes = [
    { type: "note-text", isPinned: true, info: { txt: "Fullstack Me Baby!" } },
    // { type: "note-text", isPinned: true, info: { txt: "i did my best" } }
    // { type: "note-Image", info: { url: "https://images.app.goo.gl/4kSUKmJ12a9f7qqq9", title: "Dog" }, style: { backgroundColor: "#00d" } },
    // {
    //     type: "note-todos",
    //     info: {
    //         label: "How was it:",
    //         todos: [{ txt: "Do that", doneAt: null },
    //             { txt: "Do this", doneAt: 187111111 }
    //         ]
    //     }
    // }
]

function getNotes() {
    return Promise.resolve(notes)
}

function createNote(type, txt) {
    var note = {
        type: type,
        info: null
    }
    switch (type) {
        case 'note-text':
            {
                note.info = { txt: txt }
                break;
            }
        case 'note-Img':
            {
                note.isPinned = false,
                note.info = { url: '', title: '' }
                note.style = { backgroundColor: "#00d" }
                break;
            }
        case 'note-todos':
            {
                note.info = { label: '', title: '' }
                note.todos = [{ txt: '', doneAt: null }]
                break;
            }
        case 'note-video':
            {
                note.info = { url: '' }
                break;
            }



    }
    console.log('note:', note)
    notes.push(note);
    console.log('notes:', notes)
}

// // CRUDL - Create, Read, Update, Delete, List
export const keepService = {
    getNotes,
    createNote

}