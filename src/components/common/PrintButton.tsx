import React from 'react';
import { Printer } from 'lucide-react';

interface PrintButtonProps {
  contentId?: string;
}

const PrintButton: React.FC<PrintButtonProps> = ({ contentId = 'printable-content' }) => {
  const handlePrint = () => {
    const printContent = document.getElementById(contentId);
    const originalContent = document.body.innerHTML;

    if (printContent) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Digital Marketing Assessment</title>
              <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
              <style>
                @media print {
                  body {
                    padding: 2rem;
                  }
                  .no-print {
                    display: none !important;
                  }
                  /* Preserve card styles */
                  .shadow-md {
                    box-shadow: none !important;
                  }
                  /* Ensure proper page breaks */
                  .card, .section {
                    page-break-inside: avoid;
                  }
                  /* Maintain grid layouts */
                  .grid {
                    display: grid !important;
                  }
                  /* Keep flex layouts */
                  .flex {
                    display: flex !important;
                  }
                }
              </style>
            </head>
            <body class="bg-white">
              ${printContent.innerHTML}
            </body>
          </html>
        `);
        
        printWindow.document.close();
        printWindow.focus();
        
        printWindow.onload = function() {
          printWindow.print();
          printWindow.close();
        };
      }
    }
  };

  return (
    <button 
      onClick={handlePrint}
      className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm 
                leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      <Printer className="h-4 w-4 mr-2" />
      Print
    </button>
  );
};

export default PrintButton; 