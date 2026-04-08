import SectionTitle from '../common/SectionTitle';
import TimelineItem from '../common/TimelineItem';
import portfolioData from '../../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section className="section" id="experience">
      <div className="container fade-in">
        <SectionTitle>Experience</SectionTitle>
        <div className="timeline">
          {experience.map((item, i) => (
            <TimelineItem
              key={i}
              title={item.title}
              subtitle={item.organization}
              period={item.period}
              badge={item.status}
              description={item.description}
              highlights={item.highlights}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
