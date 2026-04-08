import SectionTitle from '../common/SectionTitle';
import SkillBadge from '../common/SkillBadge';
import portfolioData from '../../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section className="section" id="skills">
      <div className="container fade-in">
        <SectionTitle>Skills</SectionTitle>
        {skills.map((category) => (
          <div key={category.category} className="skill-category">
            <h3 className="skill-category__title">{category.category}</h3>
            <div className="skill-category__items">
              {category.items.map((item) => (
                <SkillBadge key={item.name} name={item.name} icon={item.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
