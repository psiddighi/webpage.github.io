// Wacht tot de inhoud van de pagina volledig is geladen
document.addEventListener("DOMContentLoaded", function() {
    // Voeg een blackout element toe aan de pagina
    var blackout = document.createElement("div");
    blackout.classList.add("blackout");
    document.body.appendChild(blackout);

    // Voeg een loader element toe aan de pagina
    var loader = document.createElement("div");
    loader.classList.add("loading");
    for (let i = 0; i < 5; i++) {
        let span = document.createElement("span");
        loader.appendChild(span);
    }
    document.body.appendChild(loader);

    // Wacht 2 seconden voordat de loader en blackout verdwijnen
    setTimeout(function() {
        blackout.style.animation = "fadeOut 2s ease-in-out forwards";
        loader.style.animation = "fadeOut 2s ease-in-out forwards";
    }, 3000); // De vertraging instellen op dezelfde waarde als de animatieduur van de zwarte pagina

    // Verwijder de loader en blackout na de duur van de fade-out animatie
    setTimeout(function() {
        loader.remove(); // Verwijder de loader uit de DOM
        blackout.remove(); // Verwijder de blackout uit de DOM
    }, 4000); // De vertraging instellen op twee keer de waarde van de animatieduur van de zwarte pagina
});

window.onload = function() {
    setTimeout(function() {
      document.getElementById('freepik_stories-code-typing').style.display = 'block';
    }, 2100); // 5000 milliseconds = 5 seconds
  };