import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, Check, MapPin } from "lucide-react";
import tuinenLogo from "@/assets/tuinen-logo.png";
import woningLogo from "@/assets/woning-logo.png";

const PHONE = "+32 470 66 64 24";
const TEL = "tel:+32470666424";
const EMAIL = "vanmoltuinen@gmail.com";
const URL = "https://vanmoltw.be/woning-leegmaken-limburg-kempen";
const TITLE = "Woning leegmaken in Limburg & de Kempen | Vanmol Woningservice";
const DESC =
  "Woning, appartement, garage, zolder of kelder laten leegmaken in Limburg of de Kempen? Vanmol Woningservice zorgt voor opruimen, afvoer en nette oplevering.";

export const Route = createFileRoute("/woning-leegmaken-limburg-kempen")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: Page,
});

const diensten = [
  "Volledige woning leegmaken",
  "Appartement leegmaken",
  "Inboedel sorteren en afvoeren",
  "Zolder leegmaken",
  "Kelder leegmaken",
  "Garage leegmaken",
  "Tuinhuis en bijgebouwen leegmaken",
  "Meubels demonteren en verwijderen",
  "Woning bezemschoon opleveren",
  "Tuin, terras en buitenruimte opruimen",
];

const stappen = [
  { t: "Neem contact op", s: "Stuur foto's en een korte beschrijving van wat er moet gebeuren of vraag een plaatsbezoek aan." },
  { t: "Vrijblijvende offerte", s: "We bekijken de omvang van de opdracht en maken duidelijke afspraken over de werkzaamheden." },
  { t: "Wij gaan aan de slag", s: "We sorteren, ruimen op, demonteren waar nodig en voeren de afgesproken spullen af." },
  { t: "Netjes achtergelaten", s: "Na afloop wordt de afgesproken ruimte of woning netjes opgeleverd." },
];

function CTA() {
  return (
    <div className="flex flex-wrap gap-3">
      <a href={`mailto:${EMAIL}`} className="rounded-full bg-secondary px-6 py-3 font-bold text-secondary-foreground">Vraag vrijblijvend een offerte</a>
      <a href={TEL} className="inline-flex items-center gap-2 rounded-full border-2 border-current px-6 py-3 font-bold"><Phone className="h-4 w-4" />Bel {PHONE}</a>
    </div>
  );
}

function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>
      <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Link to="/" className="flex items-center gap-2">
            <img src={tuinenLogo} alt="Vanmol Tuinen" className="h-12 w-12 object-contain" />
            <img src={woningLogo} alt="Vanmol Woningservice" className="h-12 w-12 object-contain" />
          </Link>
          <nav className="hidden gap-6 font-semibold md:flex">
            <Link to="/">Home</Link><a href="/#tuinen">Tuinen</a><a href="/#woning">Woningservice</a><a href="#contact">Contact</a>
          </nav>
          <a href={TEL} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground"><Phone className="h-4 w-4" /><span className="hidden sm:inline">{PHONE}</span><span className="sm:hidden">Bel</span></a>
        </div>
      </header>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="text-3xl text-secondary md:text-4xl" style={{ fontFamily: "Caveat, cursive" }}>Vanmol Woningservice</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">Woning laten leegmaken in Limburg of de Kempen?</h1>
          <p className="mt-6 max-w-2xl text-lg opacity-90">Een volledige woning leegmaken of gewoon een zolder, garage of kelder opruimen? Vanmol Woningservice helpt met zowel grote als kleine opdrachten in Limburg en de Kempen. We sorteren, ruimen op, demonteren indien nodig meubels en voeren de afgesproken inboedel af. Na afloop laten we alles netjes achter.</p>
          <p className="mt-4 max-w-2xl text-lg opacity-90">U krijgt één aanspreekpunt, duidelijke afspraken en een persoonlijke aanpak. Een vrijblijvende offerte kan op basis van foto's of na een plaatsbezoek.</p>
          <div className="mt-8"><CTA /></div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="mb-3 text-3xl font-extrabold text-primary md:text-4xl">Waarvoor kunt u ons inschakelen?</h2>
        <p className="mb-10 text-muted-foreground">Ook kleine opdrachten zijn welkom: u hoeft niet noodzakelijk een volledige woning te laten leegmaken. Een zolder, kelder of garage opruimen kan net zo goed.</p>
        <div className="rounded-3xl bg-card p-7 shadow-sm ring-1 ring-border">
          <ul className="grid gap-3 sm:grid-cols-2">
            {diensten.map((i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="h-3 w-3" /></span>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-accent">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 md:flex-row md:items-center">
          <img src={tuinenLogo} alt="" className="h-24 w-24 object-contain" loading="lazy" />
          <div>
            <h2 className="text-3xl font-extrabold text-primary">Woning én tuin netjes</h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">Moet niet alleen de woning, maar ook de buitenruimte aangepakt worden? Dankzij de samenwerking met Vanmol Tuinen kunnen we ook gras maaien, snoeiwerken uitvoeren en tuin, terras of buitenruimte opruimen. Zo heeft u één aanspreekpunt voor woning én tuin.</p>
            <a href="/#tuinen" className="mt-4 inline-block font-bold text-primary underline underline-offset-4">Bekijk de diensten van Vanmol Tuinen</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="rounded-3xl bg-accent p-8 md:p-12">
          <div className="mb-5 flex items-center gap-4">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground"><MapPin className="h-7 w-7" /></span>
            <h2 className="text-2xl font-extrabold text-primary md:text-3xl">Woningservice in heel Limburg en de Kempen</h2>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>We voeren opdrachten uit in heel Limburg en de Kempen. In Noord-Limburg zijn we vaak aan het werk in Lommel, Pelt, Hamont-Achel, Hechtel-Eksel en Leopoldsburg, en ook in Beringen, Houthalen-Helchteren en Zonhoven komen we regelmatig langs.</p>
            <p>Woont u in Hasselt of Genk, of eerder richting de Maas in Peer, Bree, Bocholt, Maaseik of Dilsen-Stokkem? Ook daar helpen we graag. Hetzelfde geldt voor het zuiden van de provincie, zoals Bilzen-Hoeselt, Tongeren-Borgloon en Sint-Truiden.</p>
            <p>In de Kempen werken we onder meer in Mol, Balen, Geel, Meerhout, Retie, Dessel, Kasterlee, Turnhout en de omliggende gemeenten.</p>
            <p>Woont u buiten deze regio? Neem gerust contact op, dan bekijken we samen wat mogelijk is.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <h2 className="mb-10 text-3xl font-extrabold text-primary md:text-4xl">Hoe werkt het?</h2>
        <ol className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {stappen.map((s, n) => (
            <li key={s.t} className="rounded-3xl bg-card p-7 shadow-sm ring-1 ring-border">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-lg font-extrabold text-primary-foreground">{n + 1}</span>
              <h3 className="mt-4 text-lg font-extrabold uppercase tracking-wide text-primary">{s.t}</h3>
              <p className="mt-2 text-muted-foreground">{s.s}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="contact" className="scroll-mt-20 px-5 pb-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-primary p-10 text-primary-foreground md:p-14">
          <h2 className="text-3xl font-extrabold md:text-4xl">Interesse?</h2>
          <p className="mt-2 text-lg opacity-90">Neem gerust contact met ons op voor een vrijblijvende offerte.</p>
          <div className="mt-8"><CTA /></div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a href={TEL} className="flex items-center gap-3 rounded-2xl bg-primary-foreground/10 p-5 text-xl font-bold"><Phone className="text-secondary" />{PHONE}</a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 break-all rounded-2xl bg-primary-foreground/10 p-5 text-lg font-bold"><Mail className="shrink-0 text-secondary" />{EMAIL}</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        <p className="mb-1"><Link to="/" className="underline underline-offset-4">Terug naar de homepage</Link></p>
        © {new Date().getFullYear()} Vanmol Tuinen & Vanmol Woningservice
      </footer>
    </div>
  );
}
