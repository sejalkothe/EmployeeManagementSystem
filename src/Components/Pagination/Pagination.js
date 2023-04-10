// import React from 'react'

// function Pagination() {
//   return (
//   <div id="pagination">
//   <button id="first" class="pagination-button">First</button>
//   <button id="previous" class="pagination-button">Previous</button>
//   <span id="page-numbers"></span>
//   <button id="next" class="pagination-button">Next</button>
//   <button id="last" class="pagination-button">Last</button>
// </div>

//   )
// }

// export default Pagination;

import * as React from 'react';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';

const List = styled('ul')({
  listStyle: 'none',
  padding: '10px',
  // position:'fixed',
  backgroundColor:'#ffffff',
  marginLeft: '1150px',
  display: 'flex',
  gap:'5px',
  
});

export default function UsePagination() {
  const { items } = usePagination({
    count: 10,
  });

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <button
                type="button"
                style={{
                  fontWeight: selected ? 'bold' : undefined,
                  color:selected? '#ffffff': '#71777B',
                  backgroundColor:selected? '#328DF6': '#f5f5f5',
                  height:'30px',
                  width:'30px',
                  border: '1px solid #BBC2CC',
                  borderRadius: '4px',

                }}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button type="button" style={{
                  fontWeight: selected ? 'bold' : undefined,
                  color:selected? '#ffffff': '#71777B',
                  backgroundColor:selected? '#328DF6': '#f5f5f5',
                  height:'30px',
                  width:'auto',
                  border: '1px solid #BBC2CC',
                  borderRadius: '4px',

                }}{...item} >
                {type}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
}