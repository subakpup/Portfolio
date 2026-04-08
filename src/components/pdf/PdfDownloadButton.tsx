import { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import portfolioData from '../../data/portfolioData';

function buildPdfHtml(profileImageUrl: string): string {
  const { personal, skills, experience, education, certifications, projects } =
    portfolioData;

  const skillTagStyle =
    'display:inline-block;height:20px;line-height:20px;padding:0 8px;font-size:10px;background:#f1f3f5;border-radius:3px;color:#495057;white-space:nowrap;vertical-align:top;position:relative;top:6px;overflow:hidden;';
  const skillTagTextStyle = 'display:inline-block;position:relative;top:-6px;';
  const statusBadgeStyle =
    'display:inline-block;height:18px;line-height:18px;padding:0 6px;font-size:9px;background:#e7f5ff;color:#2563eb;border-radius:3px;margin-left:6px;vertical-align:middle;position:relative;top:5px;overflow:hidden;';
  const statusBadgeTextStyle = 'display:inline-block;position:relative;top:-5px;';

  const skillsHtml = skills
    .map(
      (cat) => `
      <div style="margin-bottom:8px;">
        <div style="font-size:10px;font-weight:600;color:#1a1a2e;margin-bottom:4px;">${cat.category}</div>
        <div style="display:flex;flex-wrap:wrap;gap:4px;">
          ${cat.items.map((item) => `<span style="${skillTagStyle}"><span style="${skillTagTextStyle}">${item.name}</span></span>`).join('')}
        </div>
      </div>`
    )
    .join('');

  const experienceHtml = experience
    .map(
      (item) => `
      <div style="margin-bottom:10px;">
        <div style="display:flex;justify-content:space-between;align-items:baseline;">
          <span style="font-size:12px;font-weight:600;color:#1a1a2e;">${item.title}${item.status ? `<span style="${statusBadgeStyle}"><span style="${statusBadgeTextStyle}">${item.status}</span></span>` : ''}</span>
          <span style="font-size:10px;color:#868e96;">${item.period}</span>
        </div>
        ${item.organization ? `<div style="font-size:10px;color:#495057;">${item.organization}</div>` : ''}
        ${item.highlights ? `<ul style="margin:4px 0;padding-left:14px;">${item.highlights.map((h) => `<li style="font-size:10px;color:#495057;list-style:disc;margin-bottom:2px;">${h}</li>`).join('')}</ul>` : ''}
      </div>`
    )
    .join('');

  const educationHtml = education
    .map(
      (item) => `
      <div style="margin-bottom:10px;">
        <div style="display:flex;justify-content:space-between;align-items:baseline;">
          <span style="font-size:12px;font-weight:600;color:#1a1a2e;">${item.institution}</span>
          <span style="font-size:10px;color:#868e96;">${item.period}</span>
        </div>
        ${item.department ? `<div style="font-size:10px;color:#495057;">${item.department}${item.degree ? ` | ${item.degree}` : ''}</div>` : ''}
      </div>`
    )
    .join('');

  const projectsHtml = projects.length > 0
    ? `
      <div class="page-break"></div>
      <div style="padding-top:76px;">
      <div style="font-size:14px;font-weight:700;color:#2563eb;margin-bottom:10px;padding-bottom:4px;border-bottom:2px solid #2563eb;">Projects</div>
      ${projects
        .map(
          (p) => `
          <div style="margin-bottom:12px;">
            <div style="display:flex;justify-content:space-between;align-items:baseline;">
              <span style="font-size:12px;font-weight:600;color:#1a1a2e;">${p.title}</span>
              <span style="font-size:10px;color:#868e96;">${p.period}</span>
            </div>
            ${p.role ? `<div style="font-size:10px;color:#495057;">${p.role}</div>` : ''}
            <div style="font-size:10px;color:#495057;margin:4px 0;">${p.description}</div>
            ${p.highlights ? `<ul style="margin:4px 0;padding-left:14px;">${p.highlights.map((h) => `<li style="font-size:10px;color:#495057;list-style:disc;margin-bottom:2px;">${h}</li>`).join('')}</ul>` : ''}
            ${p.techStack ? `<div style="margin-top:4px;display:flex;flex-wrap:wrap;gap:4px;">${p.techStack.map((t) => `<span style="${skillTagStyle}"><span style="${skillTagTextStyle}">${t}</span></span>`).join('')}</div>` : ''}
          </div>`
        )
        .join('')}
      </div>`
    : '';

  const certsHtml = certifications
    .map(
      (cert) => `
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4px;">
        <span style="font-size:11px;font-weight:600;color:#1a1a2e;">${cert.name}</span>
        <span style="font-size:10px;color:#868e96;">${cert.issuer} | ${cert.date}</span>
      </div>`
    )
    .join('');

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Malgun Gothic', 'Apple SD Gothic Neo', 'Segoe UI', Arial, sans-serif;
      background: #fff;
      color: #1a1a2e;
      font-size: 11px;
      line-height: 1.6;
      width: 794px;
      padding: 76px 57px 95px 57px;
    }
    hr { border: none; border-top: 1px solid #dee2e6; margin: 14px 0; }
    .page-break { height: 0; page-break-after: always; margin: 0; padding: 0; }
  </style>
</head>
<body>
  <div style="display:flex;align-items:stretch;gap:16px;margin-bottom:14px;">
    <div style="width:120px;flex:0 0 120px;border:1px solid #dee2e6;border-radius:8px;overflow:hidden;background:#f8f9fa;">
      <img src="${profileImageUrl}" alt="Profile" style="width:100%;height:100%;object-fit:cover;display:block;" />
    </div>
    <div style="flex:1;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;">
      <h1 style="font-size:18px;font-weight:700;margin-bottom:4px;color:#1a1a2e;line-height:1.2;">${personal.name}</h1>
      <table style="font-size:10px;color:#495057;border-collapse:collapse;">
        <tr><td style="font-weight:700;color:#1a1a2e;padding:1px 0;text-align:right;white-space:nowrap;">E-mail</td><td style="padding:1px 0 1px 6px;">${personal.email}</td></tr>
        <tr><td style="font-weight:700;color:#1a1a2e;padding:1px 0;text-align:right;white-space:nowrap;">Phone</td><td style="padding:1px 0 1px 6px;">${personal.phone}</td></tr>
        <tr><td style="font-weight:700;color:#1a1a2e;padding:1px 0;text-align:right;white-space:nowrap;">GitHub</td><td style="padding:1px 0 1px 6px;">${personal.github.replace(/^https?:\/\//, '')}</td></tr>
      </table>
    </div>
  </div>
  <hr />
  <div style="font-size:14px;font-weight:700;color:#2563eb;margin-bottom:10px;padding-bottom:4px;border-bottom:2px solid #2563eb;">About</div>
  ${personal.aboutParagraphs.map((p) => `<p style="font-size:11px;color:#495057;margin-bottom:6px;">${p}</p>`).join('')}
  <hr />
  <div style="font-size:14px;font-weight:700;color:#2563eb;margin-bottom:10px;padding-bottom:4px;border-bottom:2px solid #2563eb;">Skills</div>
  ${skillsHtml}
  <hr />
  <div style="font-size:14px;font-weight:700;color:#2563eb;margin-bottom:10px;padding-bottom:4px;border-bottom:2px solid #2563eb;">Experience</div>
  ${experienceHtml}
  <hr />
  <div style="font-size:14px;font-weight:700;color:#2563eb;margin-bottom:10px;padding-bottom:4px;border-bottom:2px solid #2563eb;">Education</div>
  ${educationHtml}
  <hr />
  <div style="font-size:14px;font-weight:700;color:#2563eb;margin-bottom:10px;padding-bottom:4px;border-bottom:2px solid #2563eb;">Certifications</div>
  ${certsHtml}
  ${projectsHtml}
</body>
</html>`;
}

export default function PdfDownloadButton() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      // Create an iframe to render the PDF content in isolation
      const iframe = document.createElement('iframe');
      iframe.style.position = 'fixed';
      iframe.style.left = '0';
      iframe.style.top = '0';
      iframe.style.width = '794px';
      iframe.style.height = '1123px';
      iframe.style.border = 'none';
      iframe.style.zIndex = '-1';
      iframe.style.opacity = '1';
      document.body.appendChild(iframe);

      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!iframeDoc) throw new Error('Failed to access iframe document');

      const profileImageUrl = new URL(
        `${import.meta.env.BASE_URL}profile.jpg`,
        window.location.origin
      ).toString();

      iframeDoc.open();
      iframeDoc.write(buildPdfHtml(profileImageUrl));
      iframeDoc.close();

      // Wait for iframe rendering
      await new Promise<void>((resolve) => {
        iframe.addEventListener('load', () => resolve(), { once: true });
        setTimeout(resolve, 1500);
      });

      // Ensure fonts are fully loaded before rasterizing
      if (iframeDoc.fonts) {
        await iframeDoc.fonts.ready;
      }

      const images = Array.from(iframeDoc.images);
      if (images.length > 0) {
        await Promise.all(
          images.map(
            (img) =>
              new Promise<void>((resolve) => {
                if (img.complete) {
                  resolve();
                  return;
                }
                img.addEventListener('load', () => resolve(), { once: true });
                img.addEventListener('error', () => resolve(), { once: true });
              })
          )
        );
      }

      const body = iframeDoc.body;
      const pageBreaks = Array.from(
        iframeDoc.querySelectorAll('.page-break')
      ) as HTMLElement[];
      const breakOffsets = pageBreaks.map((el) => el.offsetTop);

      // Build sections: [0, break1], [break1, break2], ... [breakN, end]
      const sections: [number, number][] = [];
      let prevOffset = 0;
      for (const offset of breakOffsets) {
        sections.push([prevOffset, offset]);
        prevOffset = offset;
      }
      sections.push([prevOffset, body.scrollHeight]);

      const pdfWidth = 210;
      const doc = new jsPDF('p', 'mm', 'a4');
      const pageHeight = 297;
      const scale = 2;

      for (let i = 0; i < sections.length; i++) {
        const [yStart, yEnd] = sections[i];
        const sectionHeight = yEnd - yStart;
        if (sectionHeight <= 0) continue;

        const canvas = await html2canvas(body, {
          scale,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff',
          width: body.scrollWidth,
          height: sectionHeight,
          windowWidth: body.scrollWidth,
          windowHeight: sectionHeight,
          y: yStart,
        });

          const imgData = canvas.toDataURL('image/jpeg', 0.95);
          const imgHeight = (canvas.height * pdfWidth) / canvas.width;

        if (i > 0) doc.addPage();

        // If this section is taller than one page, split across pages
        let pos = 0;
        let rem = imgHeight;
        doc.addImage(imgData, 'JPEG', 0, 0, pdfWidth, imgHeight);
        while (rem > pageHeight) {
          pos -= pageHeight;
          rem -= pageHeight;
          doc.addPage();
          doc.addImage(imgData, 'JPEG', 0, pos, pdfWidth, imgHeight);
        }
      }

      doc.save('Ham_Jisu_Portfolio.pdf');
      document.body.removeChild(iframe);
    } catch (err) {
      console.error('PDF generation failed:', err);
      const iframe = document.querySelector('iframe');
      if (iframe) iframe.remove();
    } finally {
      setLoading(false);
    }
  };

  return (
    <button className="pdf-btn" onClick={handleDownload} disabled={loading}>
      <FiDownload />
      <span>{loading ? 'Generating...' : 'PDF'}</span>
    </button>
  );
}
