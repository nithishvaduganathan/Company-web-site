import React from 'react';
import BookServiceForm from '../components/BookServiceForm';

const BookService: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <BookServiceForm />
        </div>
      </div>
    </div>
  );
};

export default BookService;