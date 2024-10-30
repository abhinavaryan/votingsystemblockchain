document.addEventListener('DOMContentLoaded', () => {
    const token = new URLSearchParams(window.location.search).get('Authorization') || localStorage.getItem('jwtToken');
  
    if (!token) {
      window.location.replace('/'); // Redirect to login if no token
    }
  });
  