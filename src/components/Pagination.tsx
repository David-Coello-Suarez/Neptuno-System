import { FC } from 'react'
import { ipaginacion } from '../interfaces'

interface iprops {
  paginacion: ipaginacion
  changePage: (pagina: number) => void
}

const Pagination: FC<iprops> = ({ paginacion, changePage }) => {
  const { totalPages, pagina } = paginacion

  const adjacente = 2

  const pageNumbers = []

  if (totalPages < 7 + adjacente * 2) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          onClick={() => changePage(i)}
          className={`${i === pagina && 'active'}`}
          key={i}>
          <a href="#" aria-label="Page {i}">
            {i}
          </a>
        </li>,
      )
    }
  } else {
    if (pagina < 1 + adjacente * 2) {
      if (pagina > 1) {
        pageNumbers.push(
          <>
            <li onClick={() => changePage(1)}>
              <a>
                <i className="fa fa-angle-double-left"></i>
              </a>
            </li>
            <li onClick={() => changePage(pagina - 1)}>
              <a>
                <i className="fa fa-angle-left"></i>
              </a>
            </li>
          </>,
        )
      }

      for (let i = 1; i < 4 + adjacente * 2; i++) {
        pageNumbers.push(
          <li
            className={`${pagina === i ? 'active' : ''}`}
            onClick={() => changePage(i)}
            key={i}>
            <a href="#" aria-label="Page {i}">
              {i}
            </a>
          </li>,
        )
      }

      pageNumbers.push(
        <>
          <li>
            <a>...</a>
          </li>
          <li onClick={() => changePage(totalPages - 1)}>
            <a>{totalPages - 1}</a>
          </li>
          <li onClick={() => changePage(totalPages)}>
            <a>{totalPages}</a>
          </li>
        </>,
      )

      if (pagina < totalPages) {
        pageNumbers.push(
          <>
            <li onClick={() => changePage(pagina + 1)}>
              <a>
                <i className="fa fa-angle-right"></i>
              </a>
            </li>
            <li onClick={() => changePage(totalPages)}>
              <a>
                <i className="fa fa-angle-double-right"></i>
              </a>
            </li>
          </>,
        )
      }
    } else if (totalPages - adjacente * 2 > pagina && pagina > adjacente * 2) {
      if (pagina > 1) {
        pageNumbers.push(
          <>
            <li onClick={() => changePage(1)}>
              <a>
                <i className="fa fa-angle-double-left"></i>
              </a>
            </li>
            <li onClick={() => changePage(pagina - 1)}>
              <a>
                <i className="fa fa-angle-left"></i>
              </a>
            </li>
          </>,
        )
      }

      pageNumbers.push(
        <>
          <li onClick={() => changePage(1)}>
            <a>{1}</a>
          </li>
          <li onClick={() => changePage(2)}>
            <a>{2}</a>
          </li>
          <li>
            <a>...</a>
          </li>
        </>,
      )

      for (let i = pagina - adjacente; i <= pagina + adjacente; i++) {
        pageNumbers.push(
          <li
            className={`${pagina === i ? 'active' : ''}`}
            onClick={() => changePage(i)}
            key={i}>
            <a href="#" aria-label="Page {i}">
              {i}
            </a>
          </li>,
        )
      }

      pageNumbers.push(
        <>
          <li>
            <a>...</a>
          </li>
          <li onClick={() => changePage(totalPages - 1)}>
            <a>{totalPages - 1}</a>
          </li>
          <li onClick={() => changePage(totalPages)}>
            <a>{totalPages}</a>
          </li>
        </>,
      )

      if (pagina < totalPages) {
        pageNumbers.push(
          <>
            <li onClick={() => changePage(pagina + 1)}>
              <a>
                <i className="fa fa-angle-right"></i>
              </a>
            </li>
            <li onClick={() => changePage(totalPages)}>
              <a>
                <i className="fa fa-angle-double-right"></i>
              </a>
            </li>
          </>,
        )
      }
    } else {
      if (pagina > 1) {
        pageNumbers.push(
          <>
            <li onClick={() => changePage(1)}>
              <a>
                <i className="fa fa-angle-double-left"></i>
              </a>
            </li>
            <li onClick={() => changePage(pagina - 1)}>
              <a>
                <i className="fa fa-angle-left"></i>
              </a>
            </li>
          </>,
        )
      }

      pageNumbers.push(
        <>
          <li onClick={() => changePage(1)}>
            <a>{1}</a>
          </li>
          <li onClick={() => changePage(2)}>
            <a>{2}</a>
          </li>
          <li>
            <a>...</a>
          </li>
        </>,
      )

      for (let i = totalPages - (2 + adjacente * 2); i <= totalPages; i++) {
        pageNumbers.push(
          <li
            className={`${pagina === i ? 'active' : ''}`}
            onClick={() => changePage(i)}
            key={i}>
            <a href="#" aria-label="Page {i}">
              {i}
            </a>
          </li>,
        )
      }

      if (pagina < totalPages) {
        pageNumbers.push(
          <>
            <li onClick={() => changePage(pagina + 1)}>
              <a>
                <i className="fa fa-angle-right"></i>
              </a>
            </li>
            <li onClick={() => changePage(totalPages)}>
              <a>
                <i className="fa fa-angle-double-right"></i>
              </a>
            </li>
          </>,
        )
      }
    }
  }

  return (
    <nav aria-label="Page navigation" className="text-center">
      <ul className="pagination pagination-sm no-margin">{pageNumbers}</ul>
    </nav>
  )
}

export default Pagination
