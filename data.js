// data.js: all the information in the app. This is the file you edit.
//
// TO ADD A PLACE: copy one { ... } line, paste it under the others, and change the words.
//   type    = "hospital" or "cooling"   (cooling = cooling or clean air center)
//   town    = must match a town in TOWNS below
//   checked = the month you confirmed it by calling or on their website
// Keep the quote marks and the comma at the end of every line.

const PLACES = [
  { name: "SAMPLE Merced Hospital", type: "hospital", town: "Merced", phone: "209-000-0000", address: "123 Main St, Merced, CA", hours: "Open 24 hours", note: "Takes Medi-Cal", checked: "Oct 2026" },
  { name: "SAMPLE Los Banos Hospital", type: "hospital", town: "Los Banos", phone: "209-000-0000", address: "456 Pacheco Blvd, Los Banos, CA", hours: "Open 24 hours", note: "Takes Medi-Cal", checked: "Oct 2026" },
  { name: "SAMPLE Turlock Hospital", type: "hospital", town: "Turlock", phone: "209-000-0000", address: "789 Main St, Turlock, CA", hours: "Open 24 hours", note: "Takes Medi-Cal", checked: "Oct 2026" },
  { name: "SAMPLE Merced Library", type: "cooling", town: "Merced", phone: "209-000-0000", address: "2100 O St, Merced, CA", hours: "Mon-Sat 10 am to 6 pm", note: "Free. Cooling and clean air", checked: "Oct 2026" },
  { name: "SAMPLE Atwater Community Center", type: "cooling", town: "Atwater", phone: "209-000-0000", address: "750 Bellevue Rd, Atwater, CA", hours: "Mon-Fri 9 am to 5 pm", note: "Free. Cooling", checked: "Oct 2026" },
  { name: "SAMPLE Livingston Senior Center", type: "cooling", town: "Livingston", phone: "209-000-0000", address: "1416 C St, Livingston, CA", hours: "Mon-Fri 9 am to 4 pm", note: "Free. Cooling and clean air", checked: "Oct 2026" },
];

// Events people can see. New ones added in the app disappear when the page refreshes.
// date = year-month-day. photo can stay empty ("").
const EVENTS = [
  { title: "Free health screening van", date: "2026-11-01", place: "SAMPLE Merced Community Center", details: "Blood pressure, sugar, and vision checks. No insurance needed.", photo: "", confirms: 4 },
  { title: "Free vaccine clinic", date: "2026-11-03", place: "SAMPLE Livingston Library", details: "Free vaccines for kids and adults. Bring your vaccination card if you have one.", photo: "", confirms: 2 },
];

// Towns in the dropdown, with their map position (used for the heat and smoke alert).
const TOWNS = {
  "Merced": [37.3022, -120.4830],
  "Atwater": [37.3477, -120.6090],
  "Livingston": [37.3868, -120.7230],
  "Los Banos": [37.0583, -120.8499],
  "Turlock": [37.4947, -120.8466],
  "Modesto": [37.6391, -120.9969],
};
