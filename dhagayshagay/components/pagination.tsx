import React from 'react';

// Define the interface for the props this component expects
interface PaginationDotsProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PaginationDots: React.FC<PaginationDotsProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  return (
    // This div makes the component visible only on mobile screens
    // and hidden on medium and larger screens using 'md:hidden'.
    <div className="flex justify-center items-center space-x-2 py-4 md:hidden">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
  key={index}
  onClick={() => onPageChange(index + 1)}
  className={`
    w-3 h-3 rounded-full
    ${
      (index + 1) === currentPage // This checks if the current dot is the active page
        ? 'bg-lime-400'            // If it's the active page, make it lime
        : 'bg-black'               // Otherwise, make it black
    }
    transition-colors duration-200
  `}
  aria-label={`Go to page ${index + 1}`}
></button>
      ))}
    </div>
  );
};

export default PaginationDots;