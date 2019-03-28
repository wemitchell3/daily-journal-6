

const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `
    <section class ="singleEntry">
    <p class="entryTitle">Date of Entry: <div>${journalEntry.date}</div></p>
    <p class="entryTitle">Concept Covered: <div>${journalEntry.concept}</div></p>
    <p class="entryTitle">Details: <div>${journalEntry.details}</div></p>
    <p class="entryTitle">Mood of the day: <div>${journalEntry.mood}</div></p>
    </section
    `
}