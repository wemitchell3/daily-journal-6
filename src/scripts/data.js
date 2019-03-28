/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
// const getEntries = {
//     getJournalEntries () {
//         return fetch("http://localhost:8088/entries")
//             .then((entries) => entries.json())
//     }
// }

// const postEntry = (newJournalEntryObject) => {
//         return fetch("http://localhost:8088/entries", {
//         method: "POST",
//         body: JSON.stringify(newJournalEntryObject),
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })
//   .then(response => response.json())
// }

const getEntries = {
    getJournalEntries() {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json())
    }
}

const postEntry = (newJournalEntryObject) => {
    return fetch("http://localhost:8088/entries", {
            method: "POST",
            body: JSON.stringify(newJournalEntryObject),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
}
