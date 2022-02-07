'use strict';
//books.controlleר
function onInit() {
    createBooks()
    renderBooks()
}


function renderBooks() {
    var books = getBooks();
    console.log(books);
    var strHTMLs = books.map(function (book) {
        return `
        <tr>
                <td>${book.id}</td>
                <td>${book.name}</td>
                <td>${book.price}</td>
                <td><button class="read" onclick="onReadBook('${book.id}')">read</button></td>
                <td><button class="update" onclick="onUpdateBook ('${book.id}')">update</button></td>
                <td><button class="delete" onclick="onRemoveBook('${book.id}')">delete</button></td>
            </tr>
        `
    })

    console.log(strHTMLs);

    var elBoard = document.querySelector('.board-container');
    elBoard.innerHTML = strHTMLs.join('');

}


function onRemoveBook(bookId) {
    // console.log(bookId)
    
    removeBook(bookId)
    renderBooks()
    // flashMsg(`Car Deleted`)
}

function onAddBook(){
var name=prompt("pls. enter the name of the book:")
var price=prompt("pls. enter the price of the book:")
addBook(name, price)
renderBooks()
}


function onUpdateBook(bookId){
    var bookPrice=+prompt("pls. update the new price for the book:")
    updateBook(bookId, bookPrice);
    renderBooks()
}

function onReadBook(bookId) {
    var book = getBoolById(bookId)
    var elModal = document.querySelector('.modal')
    elModal.querySelector('h3').innerText = book.name
    elModal.querySelector('h4 span').innerText = book.rate
    elModal.querySelector('p').innerText = makeLorem()
    // elModal.querySelector('').innerText = book.imgUrl
        elModal.classList.add('open')
}

function onCloseModal() {
    document.querySelector('.modal').classList.remove('open')
}

function increment() {
    document.getElementById('demoInput').stepUp();
 }
 function decrement() {
    document.getElementById('demoInput').stepDown();
 }

 function onUpdateRate(bookId){
     UpdateRate(bookId,bookRate);
     renderBooks;
 }

//  function giveRate() {
//     const elRate = document.querySelector('input[name=rate]');
//     const num = elRate.value

//     if (num < 0 || num > 9) return

//     renderBooks()
// }

function onSortChange(sortBy) {
    // console.log('Sorting  By:', sortBy);

    setSortBy(sortBy)
renderBooks
}