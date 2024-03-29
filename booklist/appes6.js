class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {

    addBookToList(book){
        //Grab it from HTML
        const list = document.getElementById("book-list");
        //Create an Element
        const row = document.createElement("tr");
        //Insert Columns
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</td>
        `;
    
        list.appendChild(row);
    }  

    showAlert(message, className){
        //Create a div
        const div = document.createElement("div");
        //Add Class Name 
        div.className = `alert ${className}`;
        //Add Text
        div.appendChild(document.createTextNode(message));
        //Get parent
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        //Insert alert(what do we want to insert, what do we want to insert it before)
        container.insertBefore(div, form);
        //disappear after 3 seconds
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target){
        if(target.className === "delete"){
            target.parentElement.parentElement.remove();
            //Show Alert after removing
            UI.prototype.showAlert("Book Removed", "success");
        }
    }

    clearFields(){
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    }
}

//Local Storage Class 
class Store {
    static getBooks(){
        let books; 
        if(localStorage.getItem('books') === null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static displayBooks(){
        const books = Store.getBooks();
        books.forEach(function(book){
            const ui = new UI;

            //Add book to UI 
            ui.addBookToList(book);
        });
    }  
    
    static addBook(book){
        const books = Store.getBooks();
        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn){
        const books = Store.getBooks();

        books.forEach(function(book, index){
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });

        localStorage.setItem("books", JSON.stringify(books));
    }
}

//DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

//Event Listeners for Add Book 
document.getElementById("book-form").addEventListener("submit", function(e){
    //get form values
    const title = document.querySelector("#title").value,
    author = document.querySelector("#author").value,
    isbn = document.querySelector("#isbn").value;
   
   
    //creating new instance of book
    const book = new Book(title, author,isbn);

    //instantiate UI objeact 
    const ui = new UI();

    //validate 
    if(title === "" || author === "" || isbn === ""){
        //Error aalert
        ui.showAlert("Please fill in all fields", "error");
    } else {
        //Add Book to list
        ui.addBookToList(book);
        //Add to local storage
        Store.addBook(book);

        //show alert 
        ui.showAlert("Book has been added", "success");

        //clear fields 
        ui.clearFields();
    }
    

    e.preventDefault();
});


//Event Listener for Delete
document.getElementById("book-list").addEventListener("click", function(e){

    const ui = new UI();
    //delete book
    ui.deleteBook(e.target);

    //Remove from LS
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    e.preventDefault();
});