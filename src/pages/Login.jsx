import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div style={styles.wrapper}>
      <div>
        <form onSubmit={handleLogin} style={styles.form}>
          <h2 style={styles.heading}>Welcome Back</h2>
          {error && <p style={styles.error}>{error}</p>}
          <input
            style={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button style={styles.button} type="submit">Login</button>
        </form>

        <p style={styles.switchText}>
          Don’t have an account?{' '}
          <Link to="/register" style={styles.link}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'var(--background-color)',
    padding: '1rem'
  },
  form: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  },
  heading: {
    color: 'var(--primary-color)',
    marginBottom: '1.5rem',
    textAlign: 'center'
  },
  input: {
    width: '100%',
    padding: '0.8rem',
    marginBottom: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem'
  },
  button: {
    width: '100%',
    padding: '0.8rem',
    backgroundColor: 'var(--primary-color)',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    cursor: 'pointer'
  },
  error: {
    color: 'red',
    marginBottom: '1rem',
    textAlign: 'center'
  },
  switchText: {
    marginTop: '1rem',
    textAlign: 'center',
    fontSize: '0.95rem'
  },
  link: {
    color: '#6b21a8',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
};

export default Login;
