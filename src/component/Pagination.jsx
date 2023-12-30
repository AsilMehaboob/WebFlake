import React from 'react';

const paginationContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '20px',
};

const pageButtonStyle = (active, theme) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '2.6rem',
  height: '2.6rem',
  borderRadius: '0.4rem',
  fontSize: '1.4rem',
  cursor: 'pointer',
  color: active ? '#ffffff' : theme.greyLight,
  background: active ? theme.primary : '#ffffff',
  fontWeight: active ? 600 : 'normal',
  border: `1px solid ${active ? theme.primary : theme.greyLight}`,
});

const dotsStyle = {
  width: '2.6rem',
  height: '2.6rem',
  color: theme => theme.greyLight,
  cursor: 'initial',
};

const Pagination = ({ currentPage, totalPages, onPageChange, theme }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          onClick={() => onPageChange(i)}
          style={pageButtonStyle(currentPage === i, theme)}
          className={currentPage === i ? 'active' : ''}
        >
          {i}
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div style={paginationContainerStyle}>
      <ul className="page">
        <li onClick={() => onPageChange(currentPage - 1)}>&#8249;</li>
        {renderPageNumbers()}
        <li style={dotsStyle}>...</li>
        <li onClick={() => onPageChange(totalPages)}>{totalPages}</li>
        <li onClick={() => onPageChange(currentPage + 1)}>&#8250;</li>
      </ul>
    </div>
  );
};

export default Pagination;
