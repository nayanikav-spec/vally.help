const PLACES = [
  { name: "Mercy Medical Center", type: "hospital", town: "Merced", phone: "209-564-5000", address: "333 Mercy Ave, CA", hours: "Open 24 hours", checked: "Oct 2026" },
  { name: "Memorial Hospital Los Banos", type: "hospital", town: "Los Banos", phone: "209-826-0591", address: "4520 W I St, Los Banos, CA", hours: "Open 24 hours", checked: "Oct 2026" },
  { name: "Madera Community Hospital", type: "hospital", town: "Madera", phone: "559-675-5555 ", address: "1250 E Almond Ave, Madera, CA", hours: "Open 24 hours", checked: "Oct 2026" },
  { name: "Dameron Hospital", type: "hospital", town: "Stockton", phone: "209-944-5550", address: "525 Acacia St, Stockton, CA", hours: "Open 24 hours", checked: "Oct 2026" },
  { name: "Kaiser Permanente Manteca Medical Center", type: "hospital", town: "Manteca", phone: "209-825-3700", address: "1777 W Yosemite Ave, Manteca, CA", hours: "Open 24 hours", checked: "Oct 2026" },
  
  { name: "Merced County Library", type: "cooling", town: "Merced", phone: "209-385-7484", address: "2100 O St, Merced, CA", hours: "Mon-Sat 10 am to 5 pm", note: "Free. Cooling and clean air", checked: "Oct 2026" },
  { name: "Atwater City Community Center", type: "cooling", town: "Atwater", phone: "209-357-6320", address: "760 E Bellevue Rd, City of Atwater, CA", hours: "Not Mentioned", note: "Free. Cooling and clean air", checked: "Oct 2026" },
  { name: "Livingston Library", type: "cooling", town: "Livingston", phone: "209-394-7330", address: "1212 Main St, Livingston, CA", hours: "Tue-Sat 10 am to 5 pm", note: "Free. Cooling and clean air", checked: "Oct 2026" },
  { name: "Winton Community Hall", type: "cooling", town: "Winton", phone: "Not Available", address: "7069-7113 Walnut Ave, Winton, CA", hours: "Not Available", note: "Free. Cooling and clean air", checked: "Oct 2026" },
  { name: "Lathrop Branch Library", type: "cooling", town: "Lathrop", phone: "209-941-7368", address: "450 Spartan Way, Lathrop, CA", hours: "Mon-Sat 1 pm to 4 pm", note: "Free. Cooling and clean air", checked: "Oct 2026" },


];

// Events people can see. New ones added in the app disappear when the page refreshes.
// date = year-month-day. photo can stay empty ("").
const EVENTS = [
  { title: "SAMPLE Free health screening van", date: "2026-11-01", place: "SAMPLE Merced Community Center", details: "Blood pressure, sugar, and vision checks. No insurance needed.", photo: "", confirms: 4 },
  { title: "SAMPLE Free vaccine clinic", date: "2026-11-03", place: "SAMPLE Livingston Library", details: "Free vaccines for kids and adults. Bring your vaccination card if you have one.", photo: "", confirms: 2 },
];

const TOWNS = {
  // Merced County
  "Merced": [37.3022, -120.4830],
  "Atwater": [37.3477, -120.6090],
  "Livingston": [37.3868, -120.7230],
  "Los Banos": [37.0583, -120.8499],
  "Dos Palos": [36.9861, -120.6266],
  "Gustine": [37.2577, -120.9988],
  "Delhi": [37.4322, -120.7813],
  "Hilmar": [37.4085, -120.8505],
  "Winton": [37.3888, -120.6133],
  "Planada": [37.2913, -120.3182],
  "Le Grand": [37.2288, -120.2471],
  "Santa Nella": [37.1022, -120.9752],

  // Stanislaus County (District 13 portion)
  "Modesto": [37.6391, -120.9969],
  "Turlock": [37.4947, -120.8466],
  "Ceres": [37.5949, -120.9577],
  "Patterson": [37.4716, -121.1297],
  "Newman": [37.3152, -121.0208],
  "Keyes": [37.5544, -120.9160],
  "Salida": [37.7058, -121.0858],
  "Crows Landing": [37.3949, -121.0366],
  "Grayson": [37.4949, -121.1808],

  // Madera County (District 13 portion)
  "Madera": [36.9613, -120.0607],
  "Parkwood": [36.9419, -120.0535],
  "Parksdale": [36.9383, -120.0215],
  "La Vina": [36.8777, -120.1082],

  // Fresno County (District 13 portion)
  "Firebaugh": [36.8588, -120.4560],

  // San Joaquin County (District 13 portion)
  "Lathrop": [37.8227, -121.2766],
  "Stockton": [37.9577, -121.2908],
  "French Camp": [37.8838, -121.2713],
  "Garden Acres": [37.9658, -121.2224],
  "August": [37.9730, -121.2644]
};
