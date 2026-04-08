import type { IconType } from 'react-icons';
import {
  SiOpenjdk,
  SiPython,
  SiSpring,
  SiSpringboot,
  SiHibernate,
  SiApache,
  SiJsonwebtokens,
  SiFlask,
  SiVuedotjs,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiJenkins,
  SiNginx,
  SiDocker,
  SiGit,
  SiGithub,
  SiGitlab,
  SiIntellijidea,
  SiPostman,
  SiSwagger,
  SiNotion,
  SiJira,
} from 'react-icons/si';
import { FaAws, FaCode } from 'react-icons/fa';

const iconMap: Record<string, IconType> = {
  SiOpenjdk,
  SiPython,
  SiSpring,
  SiSpringboot,
  SiHibernate,
  SiApache,
  SiJsonwebtokens,
  SiFlask,
  SiVuedotjs,
  SiMysql,
  SiPostgresql,
  SiRedis,
  FaAws,
  SiJenkins,
  SiNginx,
  SiDocker,
  SiGit,
  SiGithub,
  SiGitlab,
  SiIntellijidea,
  FaCode,
  SiPostman,
  SiSwagger,
  SiNotion,
  SiJira,
};

interface SkillBadgeProps {
  name: string;
  icon: string;
}

export default function SkillBadge({ name, icon }: SkillBadgeProps) {
  const IconComponent = iconMap[icon];

  return (
    <span className="skill-badge">
      {IconComponent && (
        <span className="skill-badge__icon">
          <IconComponent />
        </span>
      )}
      {name}
    </span>
  );
}
