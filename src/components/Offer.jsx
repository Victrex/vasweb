const Offer = () => {
  return (
    <section className="sectionContainer offer">
      <h1>¿Qué Ofrecemos?</h1>
      <div className="offerContent">
        <div className="offerCard">
          <h2>Páginas Web</h2>
          <p>
            Creamos páginas web personalizadas y adaptadas a tus necesidades.
            Utilizamos las últimas tecnologías para que tu página sea rápida y
            segura.
          </p>
          <ul>
            <li>Diseño y Montaje de Landing Page</li>
            <li>Dominio Incluido</li>
            <li>SSL Incluido</li>
            <li>3 Modificaciones</li>
          </ul>
        </div>

        <div className="offerCard">
          <h2>Diseño Gráfico</h2>
          <p>
            Creamos diseños gráficos personalizados para tu marca, incluyendo
            logotipos, folletos, tarjetas de presentación y más.
          </p>
          <ul>
            <li>Logotipos</li>
            <li>Branding</li>
            <li>Flyers</li>
            <li>Post Publicitarios</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Offer;
