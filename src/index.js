import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './AuthContext'; // Import the AuthProvider
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RecipieTable from "./components/RecipieTable";
import MovieList from './components/MovieList';
import YearlyPlans from './components/YearlyPlans';
import Singup from './Signup';

import ProtectedRoute from './ProtectedRoute'; // Import the ProtectedRoute component
import Home from './components/Home';
import ReadingList from './components/ReadingList';

const route = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/signup",
        element: <Singup />
    },
    {
      path: "/home",
      element: (
      <ProtectedRoute element= {<Home/>} />
      )
  },
    {
        path: "/recipieTable",
        element: (
            <ProtectedRoute element={<RecipieTable />} /> // Protect this route
        )
    },
 
    {
        path: "/movies",
        element: (
            <ProtectedRoute element={<MovieList />} /> // Protect this route
        )
    },
    {
        path: "/yearlyplans",
        element: (
            <ProtectedRoute element={<YearlyPlans />} /> // Protect this route
        )
    },
    {
        path: "/readinglist",
        element: (
            <ProtectedRoute element={<ReadingList/>} /> // Protect this route
        )
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider> {/* Wrap App with AuthProvider */}
            <RouterProvider router={route} />
        </AuthProvider>
    </React.StrictMode>
);
