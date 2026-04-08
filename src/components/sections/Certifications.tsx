import { FiAward } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';
import portfolioData from '../../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section className="section" id="certifications">
      <div className="container fade-in">
        <SectionTitle>Certifications</SectionTitle>
        <div className="cert-list">
          {certifications.map((cert, i) => (
            <div key={i} className="cert-item">
              <div className="cert-item__icon">
                <FiAward />
              </div>
              <div className="cert-item__info">
                <div className="cert-item__name">{cert.name}</div>
                <div className="cert-item__meta">
                  {cert.issuer} &middot; {cert.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
