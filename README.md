# NOCTURNE — Private Collection v2

Diese Version ist absichtlich:
- sehr dunkel
- moderner
- interaktiv / reaktiv
- mobil optimiert
- mit Animationen, Hover-Tilt, Suchfunktion, Kategorien und Modal-Detailseiten

## Kostenlos online stellen
Am einfachsten:
1. GitHub-Konto erstellen
2. Neues Repository anlegen
3. `index.html`, `styles.css`, `script.js` hochladen
4. Settings → Pages → Deploy from branch → main/root
5. Danach erhältst du eine kostenlose öffentliche URL

Alternativ: Netlify oder Cloudflare Pages.

## Eigene Fotos einsetzen
Ersetze bei einer Karte:
`<div class="card-image image-a"> ... </div>`
durch:
`<img class="card-image" src="images/deinbild.jpg" alt="Beschreibung">`

Lege dafür einen Ordner `images` an.

## Nächster sinnvoller Ausbau
- eigene Unterseite pro Objekt
- QR-Code pro Objekt
- mehrere Fotos pro Objekt
- Provenienz-Timeline
- Karte mit Herkunftsort
- Quellenbereich
- geschätzter Wert / Kaufpreis optional
- Admin-Datei oder JSON, damit neue Objekte leichter ergänzt werden können
