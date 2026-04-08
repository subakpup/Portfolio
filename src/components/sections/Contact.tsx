import { FiMail, FiPhone, FiGithub, FiEdit3 } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';
import portfolioData from '../../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;

  return (
    <section className="section" id="contact">
      <div className="container fade-in">
        <SectionTitle>Contact</SectionTitle>
        <div className="contact__content">
          <p className="contact__desc">
            프로젝트 협업이나 궁금한 점이 있으시면 편하게 연락 주세요.
          </p>
          <div className="contact__list">
            <div className="contact__item">
              <div className="contact__item-icon">
                <FiMail />
              </div>
              <div>
                <div className="contact__item-label">Email</div>
                <div className="contact__item-value">
                  <a href={`mailto:${personal.email}`}>{personal.email}</a>
                </div>
              </div>
            </div>

            <div className="contact__item">
              <div className="contact__item-icon">
                <FiPhone />
              </div>
              <div>
                <div className="contact__item-label">Phone</div>
                <div className="contact__item-value">
                  <a href={`tel:${personal.phone.replace(/-/g, '')}`}>
                    {personal.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="contact__item">
              <div className="contact__item-icon">
                <FiGithub />
              </div>
              <div>
                <div className="contact__item-label">GitHub</div>
                <div className="contact__item-value">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @subakpup
                  </a>
                </div>
              </div>
            </div>

            <div className="contact__item">
              <div className="contact__item-icon">
                <FiEdit3 />
              </div>
              <div>
                <div className="contact__item-label">Velog</div>
                <div className="contact__item-value">
                  <a
                    href={personal.velog}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @subakpup
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
