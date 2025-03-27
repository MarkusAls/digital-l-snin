// Sjekk om service worker er tilgjengelig i nettleseren
if ('serviceWorker' in navigator) {
    // Registrer service worker når siden er lastet
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration) {
            console.log('Service Worker registrert med scope:', registration.scope);
        })
        .catch(function(error) {
            console.log('Service Worker registrering feilet:', error);
        });
    });
}
