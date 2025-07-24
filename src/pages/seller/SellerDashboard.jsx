import React from 'react';

const SellerDashboard = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Your Seller Dashboard</h1>
      <p style={styles.text}>
        Here, you can manage your products, view orders, and track your sales performance.
      </p>

      {/* Placeholder content */}
      <div style={styles.card}>
        <h3>📦 Manage Products</h3>
        <p>Add, edit, or remove your product listings.</p>
      </div>

      <div style={styles.card}>
        <h3>🛒 Orders</h3>
        <p>Track customer orders and delivery status.</p>
      </div>

      <div style={styles.card}>
        <h3>📊 Sales Overview</h3>
        <p>Check your earnings, performance stats, and insights.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: 'auto',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#333',
  },
  text: {
    fontSize: '1rem',
    marginBottom: '2rem',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '1rem',
    marginBottom: '1.5rem',
    backgroundColor: '#f9f9f9',
  },
};

export default SellerDashboard;
