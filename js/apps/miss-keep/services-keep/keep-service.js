var notes = [
    { type: "note-text", isPinned: true, info: { txt: "Fullstack Me Baby!" } },
    // { type: "note-text", isPinned: true, info: { txt: "i did my best" } }
    // { type: "NoteImg", info: { url: "http://some-img/me", title: "Me playing Mi" }, style: { backgroundColor: "#00d" } },
    // {
    //     type: "NoteTodos",
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

// // CRUDL - Create, Read, Update, Delete, List
export const keepService = {
    getNotes

}