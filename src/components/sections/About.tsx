import SectionTitle from '../common/SectionTitle';
import portfolioData from '../../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  return (
    <section className="section" id="about">
      <div className="container fade-in">
        <SectionTitle>About</SectionTitle>
        <div className="about__text">
          {personal.aboutParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
