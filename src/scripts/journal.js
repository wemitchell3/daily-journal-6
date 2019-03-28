/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.

    Example code : objectWithGetterMethod.methodToGetData().then(functionThatRendersData)
*/

getEntries.getJournalEntries().then(entries => (renderJournalEntries(entries)))



const handleAddEntry = () => {
  const dateInput = document.querySelector("#journalDate")
  const conceptInput = document.querySelector("#conceptsCovered")
  const journalEntryInput = document.querySelector("#journalEntry")
  const moodOfTheDayInput = document.querySelector("#moodOfTheDay")

  let newEntry = {
    concept: conceptInput.value,
    date: dateInput.value,
    details: journalEntryInput.value,
    mood: moodOfTheDayInput.value
  };

  postEntry(newEntry)
    .then(getEntries.getJournalEntries)
    .then(entries => {
      entryLog.innerHTML = ""
      renderJournalEntries(entries)
    })
};

let addEntryButton = document.querySelector("button", "Record Journal Entry");
addEntryButton.addEventListener("click", handleAddEntry);