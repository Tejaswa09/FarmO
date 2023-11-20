import React from 'react';
import "./Login.css";

const LoginPage = () => {
  return (
    <div className='containerLogin'>
      <iframe
        src="http://localhost/project/login.php"
        title="Login Page"
        style={{ width: '100%', height: '500px' }}
      />
    </div>
  );
};

export default LoginPage;