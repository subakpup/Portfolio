import { FiMail, FiGithub } from 'react-icons/fi';
import portfolioData from '../../data/portfolioData';

const BASE_URL = import.meta.env.BASE_URL;

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__photo">
            <img
              src={`${BASE_URL}profile.jpg`}
              alt={`${personal.name} profile`}
              className="hero__photo-img"
            />
          </div>
          <div className="hero__content">
            <p className="hero__greeting">안녕하세요, 저는</p>
            <h1 className="hero__name">{personal.name}</h1>
            <p className="hero__role">{personal.role}</p>
            <p className="hero__tagline">{personal.tagline}</p>
            <div className="hero__actions">
              <a href="#contact" className="hero__btn hero__btn--primary">
                <FiMail />
                Contact
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__btn hero__btn--secondary"
              >
                <FiGithub />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
