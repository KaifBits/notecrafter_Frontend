import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element }) => {
    const { isAuthenticated } = useAuth();

    // If the user is authenticated, render the protected element; otherwise, redirect to the home page
    return isAuthenticated ? element : <Navigate to="/" />;
};

// Prop types for type checking
ProtectedRoute.propTypes = {
    element: PropTypes.element.isRequired, // Ensure 'element' is a valid React element
};

export default ProtectedRoute;
