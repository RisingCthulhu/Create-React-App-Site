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
    return <RouterProvider router={router} />;
}

export default App;
