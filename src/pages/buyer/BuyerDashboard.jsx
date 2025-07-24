import React from 'react';
import { useNavigate } from 'react-router-dom';

const BuyerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.title}>Buyer Dashboard</h1>
        <p style={styles.description}>Welcome to your dashboard! Browse products, manage your orders, and more.</p>

        <button
          onClick={() => navigate('/apply-seller')}
          style={styles.button}
        >
          Apply to Become a Seller
        </button>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3e8ff', // light purple background
    padding: '2rem',
  },
  card: {
    backgroundColor: '#fff',
    padding: '2.5rem',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    maxWidth: '500px',
    width: '100%',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    color: '#6b21a8', // purple
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '2rem',
  },
  button: {
    backgroundColor: '#6b21a8',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: '0.3s ease',
  },
};

export default BuyerDashboard;
