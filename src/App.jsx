import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <p>
                        Choo Choo! This is an example of a create-react-app site
                        running on Railway.
                    </p>
                    <a
                        className='App-link'
                        href='https://react.dev/learn'
                        target='_blank'
                        rel='noreferrer noopener'>
                        Learn React
                    </a>
                </header>
            </div>
        ),
    },
    {
        path: '/hello',
        element: <p>Hello World!</p>,
    },
    {
        path: '/ping',
        element: <p>Pong!</p>,
    },
]);

function App() {
    ttq.track('ViewContent', {
        "contents": [
            {
                "content_id": `${Date.now() * Math.random()}`, // string. ID of the product. Example: "1077218".
                "content_type": "product", // string. Either product or product_group.
                "content_name": "main_page" // string. The name of the page or product. Example: "shirt".
            }
        ],
        // "value": "<content_value>", // number. Value of the order or items sold. Example: 100.
        // "currency": "<content_currency>" // string. The 4217 currency code. Example: "USD".
    });
    
    return <RouterProvider router={router} />;
}

export default App;
