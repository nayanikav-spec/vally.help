# ValleyHelp

Three tabs: **Contacts** (911 and hotlines, plus a heat/smoke alert), **Places** (hospitals and cooling/clean air centers, by town), **Events** (a photo feed of community pop-ups).

## Files
- `index.html`: the three screens and the tab bar
- `style.css`: how it looks (change the font on the `--font` line)
- `data.js`: **the places, events, and towns. This is the file you edit.**
- `app.js`: everything the app does
- `manifest.webmanifest`, `icons/`: let people add it to their home screen

## Add a place
Open `data.js`, copy one `{ name: ... }` line in `PLACES`, paste it below, and change the words. Keep the quote marks and the comma at the end.

## Run it
    python3 -m http.server 8000
Open http://localhost:8000. Test the alert with `?demo=heat` on the end of the address.

Sample listings are labeled SAMPLE. Not medical advice.
