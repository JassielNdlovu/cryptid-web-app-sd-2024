document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch('/.auth/me');
    const userData = await response.json();

    const params = new URLSearchParams(window.location.search);
    if (params.get('post_login_redirect_uri')) {
        window.location.href = params.get('post_login_redirect_uri');
    }else if (userData.clientPrincipal) {
        window.location.href = "/profile/profile.html";
    }
});