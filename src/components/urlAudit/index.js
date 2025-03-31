import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const URLAudit = ({ title }) => {
    const [dateFrom, setDateFrom] = useState(new Date());
    const [dateEnd, setDateEnd] = useState(new Date());
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}${month}${day}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');
        setIsLoading(true);

        try {
            // Formatear las fechas
            const formattedDateFrom = formatDate(dateFrom);
            const formattedDateEnd = formatDate(dateEnd);

            // Hacer la solicitud al endpoint /auditoria
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_MODO}/auditoria`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    dateFrom: formattedDateFrom,
                    dateEnd: formattedDateEnd
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'An error occurred');
            }

            const data = await response.json();
            setMessage(data.message);

            // Descargar el archivo usando el file_id
            const downloadLink = `${process.env.NEXT_PUBLIC_API_URL_MODO}/download/${data.file_id}`;

            const link = document.createElement('a');
            link.href = downloadLink;
            link.setAttribute('download', 'audit_report.xlsx');
            document.body.appendChild(link);
            link.click();
            link.remove();

        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg mb-10">
            <h1 className="text-2xl font-bold mb-4 text-black">{title}</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <div className="mb-2">
                        <label htmlFor="dateFrom" className="block text-sm font-medium text-black dark:text-white">
                            Fecha de inicio:
                        </label>
                        <DatePicker
                            selected={dateFrom}
                            onChange={(date) => setDateFrom(date)}
                            dateFormat="yyyy/MM/dd"
                            className="border border-black text-black dark:border-black rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-300"
                        />
                    </div>
                    <div>
                        <label htmlFor="dateEnd" className="block text-sm font-medium text-black dark:text-white">
                            Fecha de fin:
                        </label>
                        <DatePicker
                            selected={dateEnd}
                            onChange={(date) => setDateEnd(date)}
                            dateFormat="yyyy/MM/dd"
                            className="border border-black text-black dark:border-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-300"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className={`bg-white text-black font-bold py-2 px-4 rounded shadow-md
                        ${isLoading 
                            ? 'opacity-50 cursor-not-allowed' 
                            : 'hover:bg-gray-300 dark:hover:bg-gray-500'} 
                        dark:bg-gray-300`}
                >
                    {isLoading ? (
                        <span className="flex items-center">
                            <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Procesando...
                        </span>
                    ) : (
                        'Generar Reporte y Descargar'
                    )}
                </button>
            </form>

            {message && (
                <p className="mt-2 text-green-500 dark:text-green-400">
                    {message}
                </p>
            )}
            {error && (
                <p className="mt-2 text-red-500 dark:text-red-400">
                    {error}
                </p>
            )}
        </div>
    );
};

export default URLAudit;