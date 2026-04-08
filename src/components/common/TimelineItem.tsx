interface TimelineItemProps {
  title: string;
  subtitle?: string;
  period: string;
  badge?: string;
  description?: string;
  highlights?: string[];
}

export default function TimelineItem({
  title,
  subtitle,
  period,
  badge,
  description,
  highlights,
}: TimelineItemProps) {
  return (
    <div className="timeline-item">
      <div className="timeline-item__header">
        <span className="timeline-item__title">{title}</span>
        <span className="timeline-item__period">{period}</span>
        {badge && <span className="timeline-item__badge">{badge}</span>}
      </div>
      {subtitle && <div className="timeline-item__sub">{subtitle}</div>}
      {description && <p className="timeline-item__desc">{description}</p>}
      {highlights && highlights.length > 0 && (
        <ul className="timeline-item__highlights">
          {highlights.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
