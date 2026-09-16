import Link from "next/link";

const products = [
  { number: "01", title: "Stand NFC", text: "Un supporto da banco personalizzato con il tuo logo, pensato per rendere il tap immediato e naturale." },
  { number: "02", title: "Card & bigliettini", text: "Card NFC, biglietti da visita e piccoli supporti stampati in 3D per portare TapTap sempre con te." },
  { number: "03", title: "Soluzioni su misura", text: "Forme, colori e dettagli personalizzati per adattare il prodotto al tuo brand e al tuo spazio." },
];

const steps = [
  ["01", "Tap", "Il cliente avvicina lo smartphone allo stand o alla card NFC. Non serve installare un'app."],
  ["02", "Pagina personalizzata", "Si apre una pagina dedicata alla tua attività, con logo, colori e messaggio personalizzato."],
  ["03", "Feedback", "Il cliente può lasciare una valutazione e un commento direttamente dalla tua esperienza TapTap."],
  ["04", "Analytics", "Tu puoi monitorare le interazioni e i passaggi verso Google dalla tua dashboard."],
];

export default function Home() {
  return (
    <main>
      <header className="wrap nav">
        <Link href="/" className="brand" style={{ textDecoration: "none", color: "inherit" }}>
          TAP<span>TAP</span>
        </Link>
        <a className="btn primary" href="#contatti">Richiedi un preventivo →</a>
      </header>

      <section className="hero wrap" style={{ paddingBottom: 70 }}>
        <div style={{ color: "#ffd44d", fontWeight: 900, fontSize: 12, letterSpacing: 1 }}>
          NFC • STAMPA 3D • PERSONALIZZAZIONE
        </div>
        <h1>Il tuo brand.<br /><span style={{ color: "#ffd44d" }}>Un semplice tap.</span></h1>
        <p style={{ fontSize: 18, lineHeight: 1.7 }}>
          Stand, card e supporti personalizzati per raccogliere feedback,
          accompagnare i clienti alle recensioni e creare un'esperienza digitale tutta tua.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 30 }}>
          <a className="btn primary" href="#come-funziona">Scopri come funziona ↓</a>
          <a className="btn secondary" href="#prodotti">Guarda i prodotti</a>
        </div>
      </section>

      <section className="wrap" style={{ padding: "25px 0 90px" }}>
        <div className="card" style={{ background: "linear-gradient(135deg,#101d30,#172940)", color: "#fff", padding: 42 }}>
          <div style={{ maxWidth: 760 }}>
            <div style={{ color: "#ffd44d", fontWeight: 900, fontSize: 12, letterSpacing: 1 }}>IL CUORE DI TAPTAP</div>
            <h2 style={{ fontSize: "clamp(30px,5vw,52px)", margin: "12px 0", letterSpacing: "-.04em" }}>
              Un gesto semplice che apre una nuova esperienza.
            </h2>
            <p style={{ color: "#b7c5d6", lineHeight: 1.7, fontSize: 17 }}>
              L'NFC rende l'accesso immediato: il cliente avvicina il telefono,
              si apre la tua pagina personalizzata e da lì puoi raccogliere feedback
              e accompagnarlo verso il canale di recensione scelto.
            </p>
          </div>
        </div>
      </section>

      <section id="come-funziona" className="wrap" style={{ padding: "30px 0 90px" }}>
        <div style={{ marginBottom: 30 }}>
          <div style={{ color: "#ffd44d", fontWeight: 900, fontSize: 12 }}>COME FUNZIONA</div>
          <h2 style={{ fontSize: "clamp(32px,5vw,50px)", margin: "8px 0", letterSpacing: "-.04em" }}>Dal tap al feedback.</h2>
        </div>
        <div className="grid">
          {steps.map(([number, title, text]) => (
            <div className="card" key={number}>
              <div style={{ color: "#2f7df6", fontWeight: 900, fontSize: 13 }}>{number}</div>
              <h3 style={{ fontSize: 22, marginBottom: 8 }}>{title}</h3>
              <p className="muted" style={{ lineHeight: 1.65 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="prodotti" className="wrap" style={{ padding: "20px 0 90px" }}>
        <div style={{ marginBottom: 30 }}>
          <div style={{ color: "#ffd44d", fontWeight: 900, fontSize: 12 }}>I PRODOTTI</div>
          <h2 style={{ fontSize: "clamp(32px,5vw,50px)", margin: "8px 0", letterSpacing: "-.04em" }}>Creati per il tuo business.</h2>
          <p className="muted" style={{ maxWidth: 650, lineHeight: 1.7 }}>
            Produciamo soluzioni in stampa 3D e le personalizziamo in base alla tua attività,
            dal piccolo supporto al prodotto completo da banco.
          </p>
        </div>
        <div className="grid">
          {products.map((product) => (
            <div className="card" key={product.number}>
              <div style={{ fontSize: 12, fontWeight: 900, color: "#2f7df6" }}>{product.number}</div>
              <h3 style={{ fontSize: 24 }}>{product.title}</h3>
              <p className="muted" style={{ lineHeight: 1.65 }}>{product.text}</p>
              <a href="#contatti" style={{ color: "#111820", fontWeight: 900 }}>Parliamone →</a>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap" id="contatti" style={{ padding: "20px 0 100px" }}>
        <div className="card" style={{ textAlign: "center", padding: "55px 28px" }}>
          <div style={{ color: "#2f7df6", fontWeight: 900, fontSize: 12 }}>HAI UN'IDEA?</div>
          <h2 style={{ fontSize: "clamp(34px,5vw,54px)", margin: "10px 0", letterSpacing: "-.04em" }}>Costruiamola insieme.</h2>
          <p className="muted" style={{ maxWidth: 600, margin: "0 auto 25px", lineHeight: 1.7 }}>
            Raccontaci la tua attività e cosa vorresti realizzare. Possiamo partire da uno stand NFC,
            una card o una soluzione completamente personalizzata.
          </p>
          <a className="btn primary" href="mailto:info@taptap.it">Richiedi un preventivo →</a>
        </div>
      </section>

      <footer className="wrap" style={{ padding: "0 0 35px", color: "#6f7e91", fontSize: 12 }}>
        © TapTap · NFC & stampa 3D personalizzata
      </footer>
    </main>
  );
}
