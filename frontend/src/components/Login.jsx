import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-container" id="login">
      <div className="login-box shadow-100">
        <div className="right-side">
          <div className="login-form w-50">
            <form className='form-bg'>
              <h1 className='text-white text-center mb-3'>Sign In</h1>
              <div className="input-group">
                <input type="email" className='form-control p-4' placeholder="Email" required />
              </div>
              <div className="input-group">
                <input type="password" className='form-control mt-2 p-4' placeholder="Password" required />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary mt-2 sign-in-btn">Continue</button>
              </div>
              <div className='mt-3'>
              <p className='login-links-text text-center ml-2 mt-3'>{"Don't"} have an account? <span><Link to="/signup" className='login-links-signup' target="_blank">Sign Up</Link></span></p>
              <p className='text-center login-links'>Forgot Password?</p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
