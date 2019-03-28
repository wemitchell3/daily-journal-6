/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const entryLog = document.querySelector(".entryLog");

const renderJournalEntries = entries => {
    entries.forEach(journalEntry => {
    entryLog.innerHTML += makeJournalEntryComponent(journalEntry)
    })
}