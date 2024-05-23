document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch('/.auth/me');
    const userData = await response.json();

    if (userData.clientPrincipal) {
        window.location.href = "/profile/profile.html";
    }
});