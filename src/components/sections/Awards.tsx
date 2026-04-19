import { FaTrophy } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import portfolioData from '../../data/portfolioData';

export default function Awards() {
  const { awards } = portfolioData;

  if (!awards || awards.length === 0) return null;

  return (
    <section className="section" id="awards">
      <div className="container fade-in">
        <SectionTitle>Awards</SectionTitle>
        <div className="cert-list">
          {awards.map((award, i) => (
            <div key={i} className="cert-item">
              <div className="cert-item__icon">
                <FaTrophy />
              </div>
              <div className="cert-item__info">
                <div className="cert-item__name">
                  {award.name} &middot; {award.rank}
                </div>
                <div className="cert-item__meta">
                  {award.issuer} &middot; {award.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
