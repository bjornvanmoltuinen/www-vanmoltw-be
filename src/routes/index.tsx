import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, Check, MapPin } from "lucide-react";
import hero from "@/assets/hero.jpg";
import tuinenLogo from "@/assets/tuinen-logo.png.asset.json";
import woningLogo from "@/assets/woning-logo.png.asset.json";

const PHONE = "+32 470 66 64 24";
const TEL = "tel:+32470666424";
const EMAIL = "vanmoltuinen@gmail.com";
const AREA = ["Limburg", "Antwerpen", "Vlaams-Brabant"];
const AREA_PLACES = ["Limburg, België", "Antwerpen, België", "Vlaams-Brabant, België"];
const AREA_TEXT = AREA.length > 2 ? `${AREA.slice(0, -1).join(", ")} en ${AREA[AREA.length - 1]}` : AREA.join(" en ");


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vanmol Tuinen & Woningservice – Limburg, Antwerpen & Vlaams-Brabant" },
      { name: "description", content: "Vanmol Tuinen: tuinonderhoud en snoeiwerken. Vanmol Woningservice: woningen leeg en netjes opgeleverd. Actief in Limburg, Antwerpen en Vlaams-Brabant. Vraag een vrijblijvende offerte." },
      { property: "og:title", content: "Vanmol Tuinen & Woningservice" },
      { property: "og:description", content: "Tuinonderhoud, snoeiwerken en woningontruiming in Limburg, Antwerpen en Vlaams-Brabant. Bel +32 470 66 64 24 voor een vrijblijvende offerte." },

      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Vanmol Tuinen & Woningservice",
        telephone: PHONE,
        email: EMAIL,
        areaServed: AREA_PLACES.map((a) => ({ "@type": "Place", name: a })),
      }),
    }],
  }),
  component: Index,
});

const tuin = [
  { t: "Tuinonderhoud", s: "Net en verzorgd", items: ["Gras maaien", "Onkruidbestrijding", "Bladeren ruimen", "Borders onderhouden", "Periodiek of eenmalig"] },
  { t: "Snoeiwerken", s: "Onze specialiteit", items: ["Hagen snoeien", "Bomen snoeien", "Struiken en heesters", "Vormsnoei", "Fruitbomen snoeien"] },
  { t: "Overige werken", s: "Alles voor een mooie tuin", items: ["Beplanting en aanplant", "Onderhoud terrassen en paden", "Groenafval afvoeren", "Kleine tuinaanpassingen", "Onderhoud elk seizoen"] },
];
const woning = [
  { t: "Pakket Basis", s: "Leeg & netjes", items: ["Leegmaken van woning, appartement of bijgebouw", "Sorteren en afvoeren van inboedel", "Kelder, zolder, garage en tuinhuis", "Meubels demonteren waar nodig", "Bezemschone oplevering"] },
  { t: "Pakket Plus", s: "Leeg, schoon & klaar", items: ["Alles uit pakket Basis", "Grondige schoonmaak", "Kleine herstellingen waar mogelijk", "Buitenruimte en terras opruimen", "Gras maaien en basis snoeiwerk"] },
  { t: "Pakket Compleet", s: "Totaaloplossing", items: ["Alles uit pakket Plus", "Volledige tuin aanpakken", "Hagen en struiken verzorgen", "Terras, oprit en bijgebouwen", "Alles netjes opgeleverd"] },
];

function Cards({ data }: { data: typeof tuin }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {data.map((c) => (
        <div key={c.t} className="rounded-3xl bg-card p-7 shadow-sm ring-1 ring-border">
          <h3 className="text-xl font-extrabold uppercase tracking-wide text-primary">{c.t}</h3>
          <p className="mb-5 text-sm uppercase tracking-widest text-muted-foreground">{c.s}</p>
          <ul className="space-y-3">
            {c.items.map((i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="h-3 w-3" /></span>
                {i}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>
      <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-2">
            <img src={tuinenLogo.url} alt="Vanmol Tuinen" className="h-12 w-12 object-contain" />
            <img src={woningLogo.url} alt="Vanmol Woningservice" className="h-12 w-12 object-contain" />
          </div>
          <nav className="hidden gap-6 font-semibold md:flex">
            <a href="#tuinen">Tuinen</a><a href="#woning">Woningservice</a><a href="#werkgebied">Werkgebied</a><a href="#contact">Contact</a>
          </nav>
          <a href={TEL} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground"><Phone className="h-4 w-4" /><span className="hidden sm:inline">{PHONE}</span><span className="sm:hidden">Bel</span></a>
        </div>
      </header>

      <section className="relative">
        <img src={hero} alt="Verzorgde tuin bij een woning" width={1600} height={912} className="h-[78vh] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
        <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col justify-center px-5 text-primary-foreground">
          <p className="text-3xl text-secondary md:text-4xl" style={{ fontFamily: "Caveat, cursive" }}>Van woning tot tuin, volledig in orde.</p>
          <h1 className="mt-2 max-w-2xl text-4xl font-extrabold leading-tight md:text-6xl">Vanmol Tuinen & Woningservice</h1>
          <p className="mt-4 max-w-xl text-lg opacity-90">Tuinonderhoud, snoeiwerken en woningen leeg en netjes opgeleverd. Eén aanspreekpunt, persoonlijke aanpak.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={TEL} className="rounded-full bg-secondary px-6 py-3 font-bold text-secondary-foreground">Bel voor een offerte</a>
            <a href={`mailto:${EMAIL}`} className="rounded-full border-2 border-primary-foreground px-6 py-3 font-bold">Stuur een e-mail</a>
          </div>
        </div>
      </section>

      <section id="tuinen" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
        <div className="mb-10 flex items-center gap-5">
          <img src={tuinenLogo.url} alt="" className="h-24 w-24 object-contain" loading="lazy" />
          <div>
            <h2 className="text-3xl font-extrabold text-primary md:text-4xl">Vanmol Tuinen</h2>
            <p className="text-muted-foreground">Onderhoud, snoeiwerken en verzorgde tuinen – het hele jaar door.</p>
          </div>
        </div>
        <Cards data={tuin} />
      </section>

      <section id="woning" className="scroll-mt-20 bg-accent">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="mb-10 flex items-center gap-5">
            <img src={woningLogo.url} alt="" className="h-24 w-24 object-contain" loading="lazy" />
            <div>
              <h2 className="text-3xl font-extrabold text-primary md:text-4xl">Vanmol Woningservice</h2>
              <p className="text-muted-foreground">Woningen en buitenruimte leeg en netjes opgeleverd.</p>
            </div>
          </div>
          <Cards data={woning} />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-16 text-center sm:grid-cols-2 md:grid-cols-4">
        {["Persoonlijke aanpak", "Duidelijke afspraken", "Betrouwbaar en vakkundig", "Vrijblijvende offerte na plaatsbezoek"].map((v) => (
          <div key={v} className="rounded-2xl bg-muted p-5 font-semibold text-primary">{v}</div>
        ))}
      </section>

      <section id="werkgebied" className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-16">
        <div className="grid gap-8 rounded-3xl bg-accent p-8 md:grid-cols-2 md:items-center md:gap-12 md:p-12">
          <div className="flex items-center gap-5">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground"><MapPin className="h-7 w-7" /></span>
            <div>
              <h2 className="text-2xl font-extrabold text-primary md:text-3xl">Werkgebied</h2>
              <p className="text-muted-foreground">Wij komen in {AREA_TEXT} bij u.</p>
            </div>
          </div>
          <div>
            <ul className="flex flex-wrap gap-3">
              {AREA.map((a) => (
                <li key={a} className="flex items-center gap-2 rounded-full bg-card px-5 py-2 font-bold text-primary ring-1 ring-border"><MapPin className="h-4 w-4 text-secondary" />{a}</li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted-foreground">Buiten deze provincies? Vraag gerust contact op – ons werkgebied kan uitgebreid worden.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 px-5 pb-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-primary p-10 text-primary-foreground md:p-14">
          <h2 className="text-3xl font-extrabold md:text-4xl">Interesse?</h2>
          <p className="mt-2 text-lg opacity-90">Neem gerust contact met ons op voor een vrijblijvende offerte.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a href={TEL} className="flex items-center gap-3 rounded-2xl bg-primary-foreground/10 p-5 text-xl font-bold"><Phone className="text-secondary" />{PHONE}</a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 break-all rounded-2xl bg-primary-foreground/10 p-5 text-lg font-bold"><Mail className="shrink-0 text-secondary" />{EMAIL}</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        <p className="mb-1"><MapPin className="mr-1 inline h-4 w-4" />Werkzaam in {AREA_TEXT}</p>
        © {new Date().getFullYear()} Vanmol Tuinen & Vanmol Woningservice
      </footer>
    </div>
  );
}
