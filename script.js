
const data = {
  ganaskidi: {
    category:"DINÉ · NAVAJO SANDPAINTING",
    title:"Hunch Back",
    sub:"Vermutlich Ganaskidi — Hunchback Yei",
    facts:[
      ["Kultur","Diné (Navajo)"],
      ["Motiv","Ganaskidi (?)"],
      ["Technik","Dauerhaftes Sandpainting"],
      ["Künstler","K. J. Tsosie (?)"]
    ],
    html:`
      <h4>Ein Holy Being der Diné</h4>
      <p>Ganaskidi gehört in den religiösen und kosmologischen Zusammenhang der Diné. Die Diné sind ein indigenes Volk des nordamerikanischen Südwestens. Ein wichtiger Begriff ihrer traditionellen Weltanschauung ist Hózhó — Harmonie, Schönheit, Gleichgewicht und ein gutes Verhältnis zwischen Mensch, Natur und spiritueller Welt.</p>
      <h4>Der „Hunchback Yei“</h4>
      <p>Die rückseitige Bezeichnung „Hunch Back“ ist ein starker Hinweis auf eine Hunchback-Yei-Darstellung. Ganaskidi wird in historischen Beschreibungen mit Ernte, Samen, Überfluss sowie Nebel und Feuchtigkeit verbunden.</p>
      <h4>Sandpainting</h4>
      <p>Traditionelle Diné-Sandbilder sind zeremonielle und vergängliche Werke. Dauerhafte Sandpaintings wurden später als eigenständige Kunstform für Sammler und den Kunsthandel hergestellt und können traditionelle Motive in veränderter oder vereinfachter Form zeigen.</p>
      <h4>Provenienz</h4>
      <p>Hier können später Kaufdatum, Herkunft, Verkäufer, frühere Besitzer, Fundort, Maße, Zustand und Quellen ergänzt werden.</p>
    `
  },
  camaro: {
    category:"TECHNIK · MOTORSPORT",
    title:"Camaro Wheel",
    sub:"Persönliches Erinnerungsstück",
    facts:[
      ["Kategorie","Automobilia"],
      ["Fahrzeug","Chevrolet Camaro"],
      ["Objekttyp","Komplettrad / Felge"],
      ["Status","Privatsammlung"]
    ],
    html:`
      <h4>Persönliche Geschichte</h4>
      <p>Hier kann die Geschichte des Fahrzeugs, des Unfalls, des Rads und warum dieses Stück erhalten wurde dokumentiert werden.</p>
      <h4>Objektdaten</h4>
      <p>Maße, Reifendimension, Felgendaten, Zustand und Fotos lassen sich hier ergänzen.</p>
    `
  },
  artifact: {
    category:"GESCHICHTE",
    title:"Historisches Objekt",
    sub:"Platzhalter für ein weiteres Sammlungsstück",
    facts:[
      ["Epoche","—"],
      ["Herkunft","—"],
      ["Material","—"],
      ["Provenienz","—"]
    ],
    html:`<h4>Beschreibung</h4><p>Hier kommt später die vollständige Objektgeschichte hinein.</p>`
  }
};

const modal=document.getElementById("modal");
const modalContent=document.getElementById("modalContent");

document.querySelectorAll("[data-open]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const x=data[btn.dataset.open];
    modalContent.innerHTML=`
      <p class="kicker">${x.category}</p>
      <h2 class="modal-title">${x.title}</h2>
      <p class="modal-sub">${x.sub}</p>
      <div class="fact-grid">
        ${x.facts.map(f=>`<div class="fact"><small>${f[0]}</small>${f[1]}</div>`).join("")}
      </div>
      <div class="object-copy">${x.html}</div>
    `;
    modal.showModal();
  });
});
document.querySelector(".modal-close").addEventListener("click",()=>modal.close());
modal.addEventListener("click",e=>{
  const r=modal.getBoundingClientRect();
  if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom) modal.close();
});

const search=document.getElementById("search");
const cards=[...document.querySelectorAll(".museum-card")];
let activeFilter="all";

function applyFilter(){
  const q=search.value.trim().toLowerCase();
  cards.forEach(card=>{
    const matchesText=card.dataset.search.includes(q)||card.innerText.toLowerCase().includes(q);
    const matchesFilter=activeFilter==="all"||card.dataset.category===activeFilter;
    card.style.display=(matchesText&&matchesFilter)?"":"none";
  });
}
search.addEventListener("input",applyFilter);

document.querySelectorAll(".chip").forEach(chip=>{
  chip.addEventListener("click",()=>{
    document.querySelectorAll(".chip").forEach(c=>c.classList.remove("active"));
    chip.classList.add("active");
    activeFilter=chip.dataset.filter;
    applyFilter();
  });
});

document.getElementById("themeToggle").addEventListener("click",()=>{
  document.body.classList.toggle("alt");
});

const io=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      io.unobserve(entry.target);
    }
  });
},{threshold:.14});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

document.querySelectorAll(".museum-card").forEach(card=>{
  card.addEventListener("mousemove",e=>{
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(900px) rotateY(${x*4}deg) rotateX(${y*-4}deg) translateY(-7px)`;
  });
  card.addEventListener("mouseleave",()=>card.style.transform="");
});
