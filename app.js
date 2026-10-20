// app.js: everything the app does

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const dateText = (d) => new Date(d + "T00:00").toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });

let type = "hospital";      // which kind of place is showing
let town = "All towns";     // which town is picked

// ---------- tabs ----------
function showTab(name) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.toggle("on", s.id === name));
  document.querySelectorAll("#tabbar button").forEach((b) => b.classList.toggle("on", b.dataset.tab === name));
  scrollTo(0, 0);
}
document.querySelectorAll("#tabbar button").forEach((b) => (b.onclick = () => showTab(b.dataset.tab)));

// ---------- places ----------
function showPlaces() {
  const list = PLACES.filter((p) => p.type === type && (town === "All towns" || p.town === town));
  $("placelist").innerHTML = list.length ? list.map(placeCard).join("") : `<p class="empty">Nothing listed here yet.</p>`;
}

function placeCard(p) {
  const directions = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(p.name + " " + p.address);
  return `<article class="card">
    <h3>${esc(p.name)}</h3>
    <p class="sub">${p.type === "hospital" ? "Hospital" : "Cooling & clean air center"} · ${esc(p.town)}</p>
    <p>${esc(p.hours)}</p>
    <p class="sub">${esc(p.note)}</p>
    <p class="sub">${esc(p.address)} · Checked ${esc(p.checked)}</p>
    <div class="actions">
      <a class="btn fill" href="tel:${p.phone.replace(/\D/g, "")}">Call</a>
      <a class="btn" target="_blank" rel="noopener" href="${directions}">Directions</a>
    </div></article>`;
}

function setType(t) {
  type = t;
  document.querySelectorAll("#types button").forEach((b) => b.classList.toggle("on", b.dataset.type === t));
  $("coolnote").hidden = t !== "cooling";
  showPlaces();
}
document.querySelectorAll("#types button").forEach((b) => (b.onclick = () => setType(b.dataset.type)));

$("town").innerHTML = ["All towns", ...Object.keys(TOWNS)].map((t) => `<option>${t}</option>`).join("");
$("town").onchange = () => { town = $("town").value; showPlaces(); checkAlert(); };

// ---------- heat and smoke alert (free data from Open-Meteo) ----------
// To test it, add ?demo=heat or ?demo=smoke to the web address.
async function checkAlert() {
  const name = town === "All towns" ? "Merced" : town;
  const [lat, lon] = TOWNS[name];
  const demo = new URLSearchParams(location.search).get("demo");
  let temp = demo === "heat" ? 108 : 0, aqi = demo === "smoke" ? 170 : 0;
  if (!demo) {
    try {
      const get = (url) => fetch(url).then((r) => r.json());
      const [w, a] = await Promise.all([
        get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=apparent_temperature&temperature_unit=fahrenheit`),
        get(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=us_aqi`),
      ]);
      temp = w.current.apparent_temperature;
      aqi = a.current.us_aqi;
    } catch (e) {
      return; // no internet: just show no banner
    }
  }
  const msg = temp >= 95 ? `Heat alert in ${name}: it feels like ${Math.round(temp)}°F.`
    : aqi >= 101 ? `Unhealthy air in ${name} (AQI ${aqi}) from smoke or dust.` : "";
  $("alert").hidden = !msg;
  $("alert").innerHTML = msg && `<b>${msg}</b><br><button class="btn fill" id="alertbtn">Find a cooling or clean air center</button>`;
  if (msg) $("alertbtn").onclick = () => { setType("cooling"); showTab("places"); };
}

// ---------- events ----------
function showEvents() {
  EVENTS.sort((a, b) => a.date.localeCompare(b.date));
  $("eventlist").innerHTML = EVENTS.map((e, i) => {
    const picture = e.photo ? `<img src="${e.photo}" alt="">` : `<div class="poster">${dateText(e.date)}</div>`;
    const status = e.pending ? "Waiting for review, only you can see this"
      : e.confirms >= 3 ? `Verified by ${e.confirms} people` : `Not verified yet (${e.confirms} of 3 confirmations)`;
    const button = e.pending ? "" : `<button class="btn fill" data-confirm="${i}" ${e.mine ? "disabled" : ""}>${e.mine ? "You confirmed this" : "I can confirm this"}</button>`;
    return `<article class="post">${picture}<div class="post-body">
      <h3>${esc(e.title)}</h3><p class="sub">${dateText(e.date)} · ${esc(e.place)}</p>
      <p>${esc(e.details)}</p><p class="sub">${status}</p>${button}</div></article>`;
  }).join("");
}

$("eventlist").onclick = (e) => {
  const i = e.target.dataset.confirm;
  if (i === undefined || EVENTS[i].mine) return;
  EVENTS[i].mine = true;
  EVENTS[i].confirms++;
  showEvents();
};

// picking a photo: shrink it so it stays small
let photo = "";
$("photo").onchange = (e) => {
  if (!e.target.files[0]) return;
  const img = new Image();
  img.onload = () => {
    const scale = Math.min(1, 900 / Math.max(img.width, img.height));
    const canvas = document.createElement("canvas");
    canvas.width = img.width * scale;
    canvas.height = img.height * scale;
    canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
    photo = canvas.toDataURL("image/jpeg", 0.8);
    $("preview").src = photo;
    $("preview").hidden = false;
  };
  img.src = URL.createObjectURL(e.target.files[0]);
};

$("add").onclick = () => ($("sheet").hidden = false);
$("cancel").onclick = () => ($("sheet").hidden = true);
$("save").onclick = () => {
  const title = $("title").value.trim(), place = $("where").value.trim(), date = $("date").value;
  if (!title || !place || !date) return alert("Add a name, a place, and a date.");
  EVENTS.push({ title, place, date, details: $("details").value.trim(), photo, confirms: 0, pending: true });
  ["title", "where", "date", "details", "photo"].forEach((id) => ($(id).value = ""));
  photo = "";
  $("preview").hidden = true;
  $("sheet").hidden = true;
  showEvents();
};

// ---------- start ----------
showPlaces();
showEvents();
checkAlert();
