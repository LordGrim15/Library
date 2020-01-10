let titleInput = document.getElementById('title');
let isbnInput = document.getElementById('isbn');
let authorInput = document.getElementById('author');
let genreInput = document.getElementById('genre');
let yearOfPublishInput = document.getElementById('yearOfPublish');
let numberOfPagesInput = document.getElementById('numberOfPages');
let btnAdd = document.getElementById('btnAdd');
let divError = document.getElementById('error');

function Book(id, title, isbn, author, genre, yearOfPublish, numberOfPages) {
    this.bookId = id;
    this.bookTitle = title;
    this.bookISBN = isbn;
    this.bookAuthor = author;
    this.bookGenre = genre;
    this.bookYearOfPublish = yearOfPublish;
    this.bookNumberOfPages = numberOfPages;
    
    this.bookAgeCalculator = function() {
        let currentYear = new Date().getFullYear();
        let result = currentYear - this.bookYearOfPublish;
        this.bookAge = result
    }

    this.bookAgeCalculator();
}

let theHungerGames = new Book(1, 'The Hunger Games', '1843560283', 'Suzanne Collins', 'Novel, Sci-fi, Thriller', 2008, 374)
let alex = new Book(2, 'Alex', '0851310419', 'Pierre Lemaitre', 'Mystery, Thriller, Suspense, Crime Fiction', 2011, 496)

let booksArray = [theHungerGames, alex];

function bookToArray(obj) {
    booksArray.push(obj);
}

function printArrayInConsole() {
    for (let i = 0; i < booksArray.length; i++) {
        console.log(booksArray[i])
    }
}

function clearInputs(input1, input2, input3, input4, input5, input6) {
    input1.value ='';
    input2.value ='';
    input3.value ='';
    input4.value ='';
    input5.value ='';
    input6.value ='';
}

let idCounter = 2; 
btnAdd.addEventListener('click', function() {
    if ( titleInput.value === '' || isbnInput.value === '' || authorInput.value === '' || genreInput.value === '' || yearOfPublishInput.value === '' || numberOfPagesInput.value === '' || titleInput.value.length < 2) {
        if (titleInput.value === '') {
            titleInput.style.borderColor = 'red';
        } else {
            titleInput.style.borderColor = 'unset';
        }
        if (isbnInput.value === '') {
            isbnInput.style.borderColor = 'red';
        } else {
            isbnInput.style.borderColor = 'unset';
        }
        if (authorInput.value === '') {
            authorInput.style.borderColor = 'red';
        } else {
            authorInput.style.borderColor = 'unset';
        }
        if (genreInput.value === '') {
            genreInput.style.borderColor = 'red';
        } else {
            genreInput.style.borderColor = 'unset';
        }
        if (yearOfPublishInput.value === '') {
            yearOfPublishInput.style.borderColor = 'red';
        } else {
            yearOfPublishInput.style.borderColor = 'unset';
        }
        if (numberOfPagesInput.value === '') {
            numberOfPagesInput.style.borderColor = 'red';
        } else {
            numberOfPagesInput.style.borderColor = 'unset';
        }
        if (titleInput.value.length < 2){
            titleInput.style.borderColor = 'red';
            divError.innerHTML = '<p style="color: red;">* You need to enter more then 2 letters for the title!</p>'
        } else {
            titleInput.style.borderColor = 'unset';

        }
        divError.innerHTML += '<p style="color: red;">* Please fill in the required fields!</p>'
    }  else{
        titleInput.style.borderColor = 'unset';
        isbnInput.style.borderColor = 'unset';
        authorInput.style.borderColor = 'unset';
        genreInput.style.borderColor = 'unset';
        yearOfPublishInput.style.borderColor = 'unset';
        numberOfPagesInput.style.borderColor = 'unset';
        divError.innerHTML = '';
        idCounter++;
        let element = new Book(idCounter, titleInput.value, isbnInput.value, authorInput.value, genreInput.value, yearOfPublishInput.value, numberOfPagesInput.value)
        bookToArray(element);
        printArrayInConsole();
        clearInputs(titleInput, isbnInput, authorInput, genreInput, yearOfPublishInput, numberOfPagesInput);
    }
})