import SectionTitle from '../common/SectionTitle';
import TimelineItem from '../common/TimelineItem';
import portfolioData from '../../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section className="section" id="education">
      <div className="container fade-in">
        <SectionTitle>Education</SectionTitle>
        <div className="timeline">
          {education.map((item, i) => (
            <TimelineItem
              key={i}
              title={item.institution}
              subtitle={item.department}
              period={item.period}
              badge={item.degree}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
