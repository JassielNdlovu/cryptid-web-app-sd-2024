async function checkAuthAndRedirect() {
    try {
        const response = await fetch('/.auth/me');
        const userData = await response.json();

        if (userData.clientPrincipal) {
            window.location.href = "/profile/profile.html";
        } else {
            if (localStorage.getItem('attemptedLogin')) {
                alert('Login failed. Please try again...');
                localStorage.removeItem('attemptedLogin');
                window.location.href = '/login/login.html';
            }
        }
    } catch (error) {
        console.error('Error fetching authentication state:', error);
    }
}
  
document.addEventListener("DOMContentLoaded", checkAuthAndRedirect);
  