

async function getBibleBook(){
    try{
    const response = await fetch("https://www.abibliadigital.com.br/api/books");

    console.log(response);
    const bookdetail = await response.json();

    console.log(bookdetail);

    bookdetail.forEach(element => createBibleBook(element));
    } 
    catch(err){
        console.log(err);
    }
}

function createBibleBook(book){
    const bookName = book.name;
    console.log(bookName);

    const chapters = book.chapters;

    

    const info = document.createElement("div");
    info.setAttribute("class","book");
    info.setAttribute("onclick","showchap()");
    info.innerText = bookName;
    
  
    const chapter = document.createElement("div");
    chapter.setAttribute("class","chapter");
    chapter.innerText = chapters;

    book_names.append(info,chapter);

    document.body.append(book_names);

}

const book_names = document.createElement("div");
    book_names.setAttribute("class","container");

getBibleBook();


 function showchap(){
//     console.log("calling chap");
//     console.log(document.querySelector(".book").display);
//     if(document.querySelector(".book")){
//         if (document.querySelector(".book").display == 'grid') {
//             document.querySelector(".book").display = 'none';
//             document.querySelector(".chapter").display = 'grid';
//             } else {
//                 document.querySelector(".book").display = 'grid';
//                 document.querySelector(".chapter").display = 'none';
//             }
//     }
 }

