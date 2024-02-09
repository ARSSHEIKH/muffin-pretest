import React from 'react'

export default function Pagination() {
  return (
    <nav>
        <ul className="slds-pagination">
          <li>
            <ahref="/#" aria-label="Previous">
              <span aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21"
                  fill="none">
                  <path
                    d="M11.6837 16.4531L9.91598 18.2208L3.43751 11.7424L3.43415 11.7457L1.66638 9.97797L1.66975 9.97461L1.6664 9.97126L3.43417 8.20349L3.43751 8.20684L9.91596 1.72839L11.6837 3.49616L5.20528 9.97461L11.6837 16.4531Z"
                    fill="#9599A1" />
                  <path
                    d="M18.3504 16.4531L16.5826 18.2208L10.1042 11.7424L10.1008 11.7457L8.33305 9.97797L8.33641 9.97461L8.33307 9.97126L10.1008 8.20349L10.1042 8.20684L16.5826 1.72839L18.3504 3.49616L11.8719 9.97461L18.3504 16.4531Z"
                    fill="#9599A1" />
                </svg>
              </span>
            </a>
          </li>
          <li>
            <ahref="/#">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21"
                  fill="none">
                  <path
                    d="M13.4277 3.58344L11.66 1.81567L5.1815 8.29414L5.17814 8.29077L3.41037 10.0585L3.41374 10.0619L3.41039 10.0653L5.17816 11.833L5.1815 11.8297L11.66 18.3081L13.4277 16.5404L6.94927 10.0619L13.4277 3.58344Z"
                    fill="#9599A1" />
                </svg>
              </span>
            </a>
          </li>
          <li className="pages-u"><ahref="/#">1</a></li>
          <li className="pages-u"><ahref="/#">2</a></li>
          <li className="pages-u"><ahref="/#">3</a></li>
          <li className="pages-u"><ahref="/#">4</a></li>
          <li className="pages-u"><ahref="/#">5</a></li>
          <li className="pages-u"><ahref="/#">6</a></li>
          <li className="pages-u"><ahref="/#">7</a></li>
          <li>
            <ahref="/#">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21"
                  fill="none">
                  <path
                    d="M6.5722 16.5401L8.33997 18.3079L14.8184 11.8294L14.8218 11.8328L16.5896 10.065L16.5862 10.0616L16.5895 10.0583L14.8218 8.29052L14.8184 8.29387L8.33999 1.81542L6.57222 3.58318L13.0507 10.0616L6.5722 16.5401Z"
                    fill="#9599A1" />
                </svg>
              </span>
            </a>
          </li>
          <li>
            <ahref="/#" a>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21"
                  fill="none">
                  <path
                    d="M8.33332 16.4531L10.1011 18.2208L16.5796 11.7424L16.5829 11.7457L18.3507 9.97797L18.3473 9.97461L18.3507 9.97126L16.5829 8.20349L16.5796 8.20684L10.1011 1.72839L8.33334 3.49616L14.8118 9.97461L8.33332 16.4531Z"
                    fill="#9599A1" />
                  <path
                    d="M1.66666 16.4531L3.43442 18.2208L9.91289 11.7424L9.91625 11.7457L11.684 9.97797L11.6807 9.97461L11.684 9.97126L9.91624 8.20349L9.91289 8.20684L3.43444 1.72839L1.66667 3.49616L8.14512 9.97461L1.66666 16.4531Z"
                    fill="#9599A1" />
                </svg>
              </span>
            </a>
          </li>
        </ul>
      </nav>
  )
}