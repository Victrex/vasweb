import cover from "../assets/images/cover.png";
import coverMovil from "../assets/images/cover_movil.png";
import "../assets/style/hero.css";
const Hero = () => {
  return (
    <section className="sectionContainer hero">
      <div className="heroContent">
        <h1>
          {" "}
          No somos un momento, <br />
          Somos un futuro
        </h1>
        <p>
          Impulsa tu presencia online con páginas web personalizadas y dominio
          propio. Transformamos tu visión en una realidad digital.
        </p>
        <button>¡Empieza Ahora!</button>
      </div>
        <div className="heroImage">
            <img src={coverMovil} alt="coverMovil" />
            <img src={cover} alt
            ="cover"/>
        </div>
    </section>
  );
};

export default Hero;
