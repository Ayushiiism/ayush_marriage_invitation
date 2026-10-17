// ===== Text in both languages =====
const TEXT = {
  en: {
    names: "Ayush & Vedika",
    date: "24 · Nov · 2026",
    tap: "Tap to open",
    home: "← Home",
    back: "← Back",
    functionsTitle: "Wedding Functions",
    chooseFamily: "Choose a family to see their celebrations",
    groomSide: "Groom's Side",
    groomFamily: "Ayush's Family",
    groomFunctions: "Ayush's Family Functions",
    brideSide: "Bride's Side",
    brideFamily: "Vedika's Family",
    brideFunctions: "Vedika's Family Functions",
    month: "Nov",
  },
  hi: {
    names: "आयुष संग वेदिका",
    date: "24 · नवम्बर · 2026",
    tap: "खोलने के लिए स्पर्श करें",
    home: "← मुख्य पृष्ठ",
    back: "← वापस",
    functionsTitle: "विवाह समारोह",
    chooseFamily: "समारोह देखने के लिए परिवार चुनें",
    groomSide: "वर पक्ष",
    groomFamily: "आयुष का परिवार",
    groomFunctions: "आयुष के परिवार के समारोह",
    brideSide: "वधू पक्ष",
    brideFamily: "वेदिका का परिवार",
    brideFunctions: "वेदिका के परिवार के समारोह",
    month: "नवम्बर",
  },
};

// ===== Venues =====
const HOME = {
  en: "Residence · Kazakpur Colony, Opp. Taramandal, near Bombay Security Office",
  hi: "निवास स्थान · कजाकपुर कॉलोनी, तारामंडल के सामने, बॉम्बे सिक्योरिटी ऑफिस के पास",
};
const RESORT = {
  en: "Moon & Mars Resort, Kanpur",
  hi: "मून एंड मार्स रिज़ॉर्ट, कानपुर",
};
const PALACE = {
  en: "Manokamna Palace, Bhagat Chauraha, Gorakhpur",
  hi: "मनोकामना पैलेस, भगत चौराहा, गोरखपुर",
};

// ===== Functions: edit dates, names and details here =====
const EVENTS = {
  groom: [
    { day: 20, en: ["Ramayan Path", `Begins · ${HOME.en}`],
               hi: ["रामायण पाठ", `आरंभ · ${HOME.hi}`] },
    { day: 21, en: ["Purnahuti", `Completion of Ramayan Path · ${HOME.en}`],
               hi: ["पूर्णाहुति", `रामायण पाठ का समापन · ${HOME.hi}`] },
    { day: 22, en: ["Haldi", `Afternoon · ${HOME.en}`],
               hi: ["हल्दी", `दोपहर · ${HOME.hi}`] },
    { day: 22, en: ["Sangeet Night", `Evening · ${HOME.en}`],
               hi: ["संगीत संध्या", `शाम · ${HOME.hi}`] },
    { day: 23, en: ["Parchawan", `4:00 PM · ${HOME.en}`],
               hi: ["परछावन", `शाम 4:00 बजे · ${HOME.hi}`] },
    { day: 23, en: ["Baraat Departure", `Evening · Leaves for ${RESORT.en}`],
               hi: ["बारात प्रस्थान", `शाम · ${RESORT.hi} के लिए प्रस्थान`] },
    { day: 24, en: ["Carnival", `Morning · ${RESORT.en}`],
               hi: ["कार्निवल", `सुबह · ${RESORT.hi}`] },
    { day: 24, en: ["Wedding Ceremony", `Night · ${RESORT.en}`],
               hi: ["विवाह संस्कार", `रात्रि · ${RESORT.hi}`] },
    { day: 25, en: ["Bidai", RESORT.en],
               hi: ["विदाई", RESORT.hi] },
    { day: 26, en: ["Reception", `7:00 PM · ${PALACE.en}`],
               hi: ["प्रीतिभोज", `शाम 7:00 बजे · ${PALACE.hi}`] },
  ],
  bride: [
    { day: 23, en: ["Mehendi", `2:00 PM · ${RESORT.en}`],
               hi: ["मेहंदी", `दोपहर 2:00 बजे · ${RESORT.hi}`] },
    { day: 23, en: ["Sangeet Night", `7:00 PM onwards · ${RESORT.en}`],
               hi: ["संगीत संध्या", `शाम 7:00 बजे से · ${RESORT.hi}`] },
    { day: 24, en: ["Carnival", `Morning · ${RESORT.en}`],
               hi: ["कार्निवल", `सुबह · ${RESORT.hi}`] },
    { day: 24, en: ["Wedding Ceremony", `Night · ${RESORT.en}`],
               hi: ["विवाह संस्कार", `रात्रि · ${RESORT.hi}`] },
    { day: 25, en: ["Bidai", RESORT.en],
               hi: ["विदाई", RESORT.hi] },
  ],
};

// ===== Language =====
let lang = "en";
try { lang = localStorage.getItem("lang") === "hi" ? "hi" : "en"; } catch (e) {}

function el(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
}

function render() {
  const t = TEXT[lang];
  document.documentElement.lang = lang;
  document.title = `${t.names} · ${t.date.replace(/ · /g, " ")}`;
  document.querySelectorAll("[data-t]").forEach((n) => { n.textContent = t[n.dataset.t]; });
  document.querySelectorAll("[data-lang]").forEach((b) => {
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  });
  document.querySelectorAll("[data-events]").forEach((list) => {
    list.replaceChildren(...EVENTS[list.dataset.events].map((ev) => {
      const [name, detail] = ev[lang];
      const li = el("li", "event");
      const when = el("div", "when");
      when.append(el("div", "day", ev.day), el("div", "month", t.month));
      const body = el("div");
      body.append(el("h2", null, name), el("p", null, detail));
      li.append(when, body);
      return li;
    }));
  });
}

document.querySelectorAll("[data-lang]").forEach((b) => {
  b.addEventListener("click", () => {
    lang = b.dataset.lang;
    try { localStorage.setItem("lang", lang); } catch (e) {}
    render();
  });
});

// ===== Views (one page, so the music keeps playing) =====
const VIEWS = ["home", "families", "groom", "bride"];
function show() {
  const id = location.hash.slice(1);
  const current = VIEWS.includes(id) ? id : "home";
  VIEWS.forEach((v) => { document.getElementById(v).hidden = v !== current; });
  document.body.dataset.view = current;
  window.scrollTo(0, 0);
}
window.addEventListener("hashchange", show);

// ===== Music =====
const song = document.getElementById("song");
const toggle = document.getElementById("music-toggle");

const ICON_ON = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3z"/><path d="M14.5 8.5a5 5 0 0 1 0 7M17 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
const ICON_OFF = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3z"/><path d="M16 9l6 6M22 9l-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

function syncToggle() {
  toggle.innerHTML = song.paused ? ICON_OFF : ICON_ON;
  toggle.classList.toggle("playing", !song.paused);
  toggle.setAttribute("aria-label", song.paused ? "Play music" : "Pause music");
}
function playSong() { song.play().catch(() => {}); }

// Show the button once the song is usable (it may already be loaded before this script runs)
function showToggle() { toggle.hidden = false; syncToggle(); }
if (song.readyState >= 2) showToggle();
["loadeddata", "canplay", "play"].forEach((e) => song.addEventListener(e, showToggle));
song.addEventListener("play", syncToggle);
song.addEventListener("pause", syncToggle);
toggle.addEventListener("click", () => (song.paused ? playSong() : song.pause()));

// Browsers only allow sound after a tap, so start it when the invite is opened
function openInvite() {
  playSong();
  location.hash = "families";
}
const opener = document.getElementById("open-invite");
opener.addEventListener("click", openInvite);
opener.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openInvite(); }
});
// Guests arriving on a deep link: start music on their first tap anywhere
document.addEventListener("click", function first() {
  if (song.paused && !song.dataset.started) playSong();
  song.dataset.started = "1";
  document.removeEventListener("click", first);
});

render();
show();

// Warm up the other views' photos so switching is instant
window.addEventListener("load", () => {
  ["families", "groom-bg", "bride-bg", "home-tall", "home-wide", "groom-card", "bride-card"].forEach((n) => {
    new Image().src = `images/${n}.jpg`;
  });
});
