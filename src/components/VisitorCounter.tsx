import React, { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';

const VisitorCounter: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const countVisitor = async () => {
      try {
        // First, get the current count and increment it
        const response = await fetch('https://api.countapi.xyz/hit/paresh-portfolio/visits');
        const data = await response.json();
        setVisitorCount(data.value);
      } catch (error) {
        console.error('Error counting visitor:', error);
      } finally {
        setIsLoading(false);
      }
    };

    countVisitor();
  }, []);

  if (isLoading) {
    return null; // Don't show anything while loading
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-full px-4 py-2 flex items-center space-x-2">
      <FaEye className="text-blue-600" />
      <span className="font-semibold">
        {visitorCount?.toLocaleString() ?? '0'} {visitorCount === 1 ? 'Visit' : 'Visits'}
      </span>
    </div>
  );
};

export default VisitorCounter;
