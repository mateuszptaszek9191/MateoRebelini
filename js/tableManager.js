const table = document.getElementById("table")
const auhtorInput = document.getElementById("author")
const yearInput = document.getElementById("year")
const priceInput = document.getElementById("price")
const styleInput = document.getElementById("style")
const titleInput = document.getElementById("title")
const addBtn = document.getElementById("addBtn")
let recordKey = 0;
let records = [

]
function deleteRecord(id) {
    records = records.filter(record => record.id != id)
    refreshTable()
}
function refreshTable() {
    // 1. refresh table - clear innerhtml
    table.innerHTML = ""
    let headerRow = document.createElement("tr");
    headerRow.innerHTML = `
    <th>ID</th>
    <th>Author</th>
    <th>Year</th>
    <th>Price</th>
    <th>Style</th>
    <th>Title</th>
    `
    table.append(headerRow)

    // 2. loop through records
    for (let record of records) {
        // 3. create row with record data
        let row = document.createElement("tr");
        // 4. create cells with record data
        row.innerHTML = `
        <td>${record.id}</td>
        <td>${record.author}</td>
        <td>${record.year}</td>
        <td>${record.price}</td>
        <td>${record.style}</td>
        <td>${record.title}</td>
        <td><button class="btn btn-danger"  onclick="deleteRecord(${record.id})">Delete</button></td>
        `
        table.append(row)
    }
}

function addRecord() {
    // 1. get dfata from inputs
    let author = auhtorInput.value
    let year = yearInput.value
    let price = priceInput.value
    let style = styleInput.value
    let title = titleInput.value
    // 2. create record variable - typ object
    let newRecord = {
        id: recordKey,
        author: author,
        year: year,
        price: price,
        style: style,
        title: title
    }
    // 3. add record to records array
    records.push(newRecord)
    recordKey++;
    // 4. refresh table
    refreshTable()
}

// 5. add event listener to add button
addBtn.addEventListener("click", addRecord)

refreshTable()