import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; // Importa el componente de calendario
import 'react-datepicker/dist/react-datepicker.css'; // Estilos del calendario

const URLBuilder = () => {
  const [dateFrom, setDateFrom] = useState(new Date()); // Fecha de inicio
  const [dateEnd, setDateEnd] = useState(new Date());   // Fecha de fin
  const [url, setUrl] = useState('');

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  };

  const handleGenerateURL = () => {
    const formattedDateFrom = formatDate(dateFrom);
    const formattedDateEnd = formatDate(dateEnd);

    const newURL = `www.example.com/connect/api/ExtractionData/PurchaseFull?dateFrom=${formattedDateFrom}&dateEnd=${formattedDateEnd}`;
    setUrl(newURL);
  };

  return (
    <div>
      <div>
        <label htmlFor="dateFrom">Fecha de inicio:</label>
        <DatePicker
          selected={dateFrom}
          onChange={(date) => setDateFrom(date)}
          dateFormat="yyyy/MM/dd" // Formato de fecha en el calendario
        />
      </div>
      <div>
        <label htmlFor="dateEnd">Fecha de fin:</label>
        <DatePicker
          selected={dateEnd}
          onChange={(date) => setDateEnd(date)}
          dateFormat="yyyy/MM/dd" // Formato de fecha en el calendario
        />
      </div>
      <button onClick={handleGenerateURL}>Generar URL</button>
      {url && (
        <div>
          <h2>URL Generada:</h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        </div>
      )}
    </div>
  );
};

export default URLBuilder;