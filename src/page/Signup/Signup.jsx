import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from 'firebase/firestore';

import { auth, db } from '../../firebase.config';
import { toast } from 'react-toastify';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update user profile
      await updateProfile(user, {
        displayName: username,
      });

      // Store user data in Firestore database
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        displayName: username,
        email,
      });

      setLoading(false);
      toast.success('Account created');

      // Redirect to login page
      navigate('/login');
    } catch (error) {
      setLoading(false);
      toast.error('Something went wrong');
    }
  };

  return (
    <div className='container'>
      <div className='wrapper'>
        <div className="login">
          <h3 className='fw mb'>Signup</h3>
          <form action="" onSubmit={signup}>
            <div className="form__group">
              <input type="text" placeholder='Enter your name' value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="form__group">
              <input type="email" placeholder='Enter your email' value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form__group">
              <input type="password" placeholder='Enter your password' value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button type='submit' className=' mb btn auth__btn signup__btn' disabled={loading}>
              {loading ? 'Creating Account...' : 'Create an Account'}
            </button>
            <p className='login-p'>Already have an account? <Link to='/login'>Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
