import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import "../assets/style/navBar.css";
import { useEffect, useRef } from "react";
import { TweenMax, Power3, gsap } from "gsap";
import { useGSAP } from "@gsap/react";
const NavBar = () => {
  const $ = (el) => document.querySelector(el);
  let ul = useRef(null);
  const {contextSafe} = useGSAP({scope: ul})
  
  const handleActive = () => {
    if (!ul.classList.contains("active")) {
      gsap.fromTo(ul, { opacity: 0, x: 510 }, { opacity: 1, x: 0, ease: Power3.easeOut, duration: 0.1 });
      ul.classList.add("active");
    } else {
      gsap.fromTo(ul, { opacity: 1, x: 0 }, { opacity: 0, x: 410, ease: Power3.ease, duration: 0.1 }).then(() => {
        setTimeout(() => {
        ul.classList.remove("active");
        }, 300);
      });
    }
  };

  useEffect(() => {
    console.log(ul)
    TweenMax.from(ul, 0.8, {opacity: 1, x: 10, ease: Power3.easeOut})
    // contextSafe(() => {
    //   gsap.to('.active', 0.8, {opacity: 0.5, x: 0, ease: Power3.easeOut})
    // })

  }, [contextSafe])

  const handleScroll = (element) => {
    const $element = $(element);
    console.log($element)
    // $element.scrollIntoView({behavior: 'smooth', block: 'start'})
    $element?.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start', marginTop: '104px'})
    const isMobile = window.innerWidth < 768;
    if(isMobile) handleActive()
  }
  
  return (
    <nav>
      <div className="logo">
        <h1>VASWEB</h1>
      </div>
      <ul ref={el => ul = el} className="">
        <li>
          <a onClick={() => handleScroll('.hero')}>Inicio</a>
        </li>
        <li>
          <a onClick={() => handleScroll('.services')}>Servicios</a>
        </li>
        <li>
          <a onClick={() => handleScroll('.offer')}>¿Qué Ofrecemos?</a>
        </li>
        <li>
          <a onClick={() => handleScroll('.faq')}>FAQ</a>
        </li>
        <li>
          <a onClick={() => handleScroll('.contact')}>Contáctanos</a>
        </li>
      </ul>

      <div className="social">
        <a href="https://www.facebook.com">
          <FacebookIcon />
        </a>
        <a href="https://www.instagram.com">
          <InstagramIcon></InstagramIcon>
        </a>
      </div>
      <div className="burger" onClick={handleActive}>
        <MenuRoundedIcon />
      </div>
    </nav>
  );
};

export default NavBar;
