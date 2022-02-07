'use strict';

//bo.service
const STORAGE_KEY = 'bookDB'
var gBooks;
var gSortBy
var gSortDir='asc'


// gBooks=''
// _createBooks()
function _createBook(name, price, imgUrl) {
    return {
        id: makeId(),
        name,
        price,
        rate: 0,
        // price: getRandomIntInclusive(50, 250),
        imgUrl
    }
}


//   function removeBook(bookId)

function getBooks() {
    var books=gBooks
    if(gSortBy==='name'){
        books=sortByName()
    }
    return books;
}

function _createBooks() {
    var books = loadFromStorage(STORAGE_KEY)
    if (!books || !books.length) {
        // books = []

        // for (let i = 0; i < 5; i++) {
        //     var name = prompt("pls. enter the name of the book:")
        //     // var vendor = gVendors[getRandomIntInclusive(0, gVendors.length - 1)]
        //     books.push(_createBook(name))
        // }
        books = [_createBook('Act in 5 balloons', 45, 'https://www.agalease-baby.co.il/wp-content/uploads/2021/03/82773.jpg'), _createBook('Harry Potter', 25), _createBook('Hasamba', 79)]
    }
    gBooks = books
    _saveBooksToStorage()
}


function createBooks() {
    _createBooks();
}

function removeBook(bookId) {
    const bookIdx = gBooks.findIndex(function (book) {
        if (bookId === book.id) {
        }
    })
    gBooks.splice(bookIdx, 1)
    _saveBooksToStorage()
}

function _saveBooksToStorage() {
    saveToStorage(STORAGE_KEY, gBooks)
}


function addBook(name, price) {
    var book = _createBook(name, price)
    gBooks.unshift(book)
    _saveBooksToStorage
    return book
}



function updateBook(bookId, bookPrice) {
    const book = gBooks.find(function (book) {
        return book.id === bookId
    })
    book.price = bookPrice
    _saveBooksToStorage()
    return book

}

function getBoolById(bookId) {
    const book = gBooks.find((book) => bookId === book.id)
    return book
}


function UpdateRate(bookId, bookRate) {
    const book = gBooks.find(function (book) {
        return book.id === bookId
    })
    book.rate = bookRate
    //   onReadBook(bookId)
    _saveBooksToStorage
    return book.rate
}


function setSorting(sortBy) {
    gSortBy = sortBy
    gSortBy=gSortDir==='asc'?'desc':'asc';
}


function sotByName() {
    var sortedBooks=gBooks.sort(function(book1,book2){
        //to decide if it's sort up or down..
        var changeDir=gSortDir==='desc'? -1:1
        return book1.name.tolowercase()>book2.name.tolowercase()?1:-1*changeDir
    })
    return sortedBooks
}
