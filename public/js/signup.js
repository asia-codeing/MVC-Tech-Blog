const signupForm = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value;
    const password = document.querySelector('#password-signup').value;
    console.log(username, password);
    
    if (username && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        console.log('User Signed Up!');
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
document.querySelector('#signup-form').addEventListener('click', signupForm);