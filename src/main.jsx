// Importing necessary modules
import React from 'react'; // Importing the React library
import ReactDOM from 'react-dom/client'; // Importing the ReactDOM client for rendering
import App from './App.jsx'; // Importing the main App component
import './index.css'; // Importing the CSS file for styling

// Creating a root element for rendering the application
ReactDOM.createRoot(document.getElementById('root')).render(
    // Wrapping the App component in StrictMode for enhanced development checks
    <React.StrictMode>
        <App /> {/* Rendering the main App component */}
    </React.StrictMode>,
);
