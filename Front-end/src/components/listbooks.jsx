import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

export default function ListBooks() {
  const [booksPerPage, _setBooksPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [details, setDetails] = useState({});
  const [showDetails, setShowDetails] = useState(Boolean);
  const { books } = useContext(AppContext);

  const quantityPages = Math.ceil(books.length / booksPerPage);
  const firstBook = currentPage * booksPerPage;
  const lastBook = firstBook + booksPerPage; 
  const currentBooks = books.slice(firstBook, lastBook);

  const bookDetails = (book) => {
    if (showDetails == false) {
      setShowDetails(true)
    } else if (showDetails == true) {
      setShowDetails(false)
    }
    setDetails(book);
  };

  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Livro</th>
              <th>Autor</th>
              <th>Idioma</th>
              <th>Ano</th>
              <th>Ações</th>
            </tr>
          </thead>
          {
            books.length > 0 ?
              currentBooks.map((book) => (
                <tbody key={ book.title }>
                  <tr>
                    <td>{ book.title }</td>
                    <td>{ book.author }</td>
                    <td>{ book.language }</td>
                    <td>{ book.year }</td>
                    <td><button 
                      id='button-details'
                      value={ showDetails } 
                      onClick={ () => bookDetails(book) }
                      >
                      Detalhes
                      </button>
                    </td>
                  </tr> 
                  
                </tbody>
              ))
            : <h3>Nenhum livro encontrado</h3>
          }
        </table>
        {
          showDetails && (
            <div id='details-area'>
              <img
                src={ details.imageLink }
                alt={ details.title }
              />
              <p>País: { details.country }</p>
              <p>Páginas: { details.pages }</p>
              <a href={ details.link }>Saiba mais</a>
            </div>
          )
        }
        
      </div>
      <footer>
          {
            Array.from(Array(quantityPages), (_item, index) => {
              return <button
                className='button-footer'
                key={ index }
                value={ index }
                onClick={ ({ target }) => setCurrentPage(Number(target.value)) }
                >
                  {index + 1}
                </button>
            })
          }
      </footer>
     </div>
  );
}