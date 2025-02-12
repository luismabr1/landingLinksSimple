import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const URLBuilder = ({ baseUrl, title }) => { // Recibe baseUrl como prop
    const [dateFrom, setDateFrom] = useState(new Date());
    const [dateEnd, setDateEnd] = useState(new Date());
    const [url, setUrl] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}${month}${day}`;
    };

    const handleGenerateURL = () => {
        const formattedDateFrom = formatDate(dateFrom);
        const formattedDateEnd = formatDate(dateEnd);

        // Usa la baseUrl recibida como prop
        const newURL = `${baseUrl}?dateFrom=${formattedDateFrom}&dateEnd=${formattedDateEnd}`;
        setUrl(newURL);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_MODO}/convert`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ url })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'An error occurred');
            }

            const data = await response.json();
            setMessage(data.message);

            const downloadLink = `${process.env.NEXT_PUBLIC_API_URL_MODO}/download/${data.file_id}`;

            const link = document.createElement('a');
            link.href = downloadLink;
            link.setAttribute('download', 'output.xlsx');
            document.body.appendChild(link);
            link.click();
            link.remove();

        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg mb-10"> {/* Contenedor principal */}
        <h1 className="text-2xl font-bold mb-4 text-black">{title}</h1> {/* Título de la sección */}
            <div className="mb-4"> {/* Contenedor para las fechas */}
                <div className="mb-2"> {/* Contenedor para fecha de inicio */}
                    <label htmlFor="dateFrom" className="block text-sm font-medium text-black dark:text-white">
                        Fecha de inicio:
                    </label>
                    <DatePicker
                        selected={dateFrom}
                        onChange={(date) => setDateFrom(date)}
                        dateFormat="yyyy/MM/dd"
                        className="border border-black text-black dark:border-black rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-300" // Estilos para el DatePicker
                    />
                </div>
                <div> {/* Contenedor para fecha de fin */}
                    <label htmlFor="dateEnd" className="block text-sm font-medium text-black dark:text-white">
                        Fecha de fin:
                    </label>
                    <DatePicker
                        selected={dateEnd}
                        onChange={(date) => setDateEnd(date)}
                        dateFormat="yyyy/MM/dd"
                        className="border border-black text-black dark:border-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-300" // Estilos para el DatePicker
                    />
                </div>
            </div>

            <button
                onClick={handleGenerateURL}
                className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded dark:bg-white dark:hover:bg-gray-500 shadow-md" // Estilos para el botón "Generar URL"
            >
                Generar URL
            </button>

            <form onSubmit={handleSubmit} className="mt-4"> {/* Formulario con margen superior */}
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="URL"
                    readOnly
                    className="border border-black dark:border-gray-700 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-300" // Estilos para el input
                />
                <button
                    type="submit"
                    className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded dark:bg-gray-300 dark:hover:bg-gray-500 shadow-md mt-4" // Estilos para el botón "Convertir y Descargar"
                >
                    Convertir y Descargar
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

export default URLBuilder;