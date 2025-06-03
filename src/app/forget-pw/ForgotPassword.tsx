import React, { useState } from 'react';
import Link from 'next/link';

const logo = '/pictures/Food4Thought.png';
const chef = '/pictures/chef.png';
import './ForgotPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents page reload 
    if (email) {
      alert(`A password reset link has been sent to ${email}`);
      setEmail(''); // Optional: clear input field
    } else {
      alert("Please enter your email address.");
    }
  };

  return (
    <div className="ForgotPassword">
      <div className="background-img-2">
        <div className="text-box-2">
          <img id="Chef-2" src={chef} alt="Chef Image" />
          <div className="Welcome">Welcome to</div>
          <br />
          <img id="Logo" src={logo} alt="Food 4 Thought Logo" />
          <h2>Forgot Password</h2>
          <p>Please enter your email below to reset your password.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <br /><br />
            <button className="Submit-2" type="submit">
              Send Reset Link
            </button>
          </form>
          <br /><br />
          <Link href="/login">Back to Login</Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;