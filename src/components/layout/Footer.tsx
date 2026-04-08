import portfolioData from '../../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} {personal.nameEn}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
