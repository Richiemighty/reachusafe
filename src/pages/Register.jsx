import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
    firstName: '',
    role: 'buyer'
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signUp(form.email, form.password, {
        displayName: form.firstName,
        role: form.role
      });
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div style={styles.wrapper}>
      <div>
        <form onSubmit={handleRegister} style={styles.form}>
          <h2 style={styles.heading}>Create Your Account</h2>
          {error && <p style={styles.error}>{error}</p>}

          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            style={styles.select}
            required
          >
            <option value="buyer">Register as Buyer</option>
            <option value="seller">Register as Seller</option>
          </select>

          <button type="submit" style={styles.button}>Register</button>
        </form>

        <p style={styles.switchText}>
          Already have an account?{' '}
          <Link to="/login" style={styles.link}>Sign In</Link>
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
    minHeight: '100vh',
    backgroundColor: 'var(--background-color)',
    padding: '1rem'
  },
  form: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '500px',
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
  select: {
    width: '100%',
    padding: '0.8rem',
    marginBottom: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    backgroundColor: '#fff'
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

export default Register;
