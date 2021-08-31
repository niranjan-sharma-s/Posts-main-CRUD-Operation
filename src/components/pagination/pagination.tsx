import { FunctionComponent } from "react"
import './pagination.scss'

export interface IPagination {
  postsPerPage: number;
  totalPosts: number;
  paginate: (number: number) => void;
}

const Pagination: FunctionComponent<IPagination> = ({ postsPerPage, totalPosts, paginate }): JSX.Element => {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='pagination-wrapper'>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <span onClick={() => paginate(number)} className='page-link'>
              {number}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
