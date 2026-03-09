import React              from 'react';
import { useTranslation } from 'react-i18next';
import useScramble        from '../library/useScramble';
import AboutEn            from './About/AboutEn.mdx';

import AboutFr from './About/AboutFr.mdx';

const About = () => {
  const { t, i18n } = useTranslation();
  const heading = useScramble('int main(int argc, char * argv[]) {');

  const pdfUrl = React.useMemo(() => {
    switch (i18n.language) {
      case 'fr':
        return 'DUFOIS_VALENTIN_CV_FR.pdf';
      default:
        return 'DUFOIS_VALENTIN_CV_EN.pdf';
    }
  }, []);

  return (
      <main className="about">
        <h1>{ heading }</h1>
        { i18n.language === 'fr' ? <AboutFr/> : <AboutEn /> }
        <p className="open-to-work">{ t('about.open-to-work') }</p>
        <h2>{ t('about.skills') }</h2>
        <h4>Web</h4>
        <ul className="skills-list">
          <li>PHP, TypeScript, Python, SQL, HTML/CSS</li>
          <li>
            Laravel, Django, React, Node.js, FastAPI
            <span className="wtf-comment wtf-5">.js, js.js, omgIHateThisTrend.js</span>
          </li>
          <li>Vite, Nginx, WebSocket, PostgreSQL, Redis</li>
        </ul>
        <h4>{ t('about.skills-infra') }</h4>
        <ul className="skills-list">
          <li>Docker, Docker Compose, CI/CD</li>
          <li>DigitalOcean, Linux, Nginx</li>
        </ul>
        <h4>Software</h4>
        <ul className="skills-list">
          <li>C/C++, Swift, Python, OpenGL, Metal</li>
          <li>Xcode, JetBrains IDEs, gcc, clang/llvm, Make</li>
        </ul>
        <h4>{ t('about.skills-visuals') }</h4>
        <ul className="skills-list">
          <li>TouchDesigner, Processing</li>
          <li>
            OpenGL, Metal
            <span className="wtf-comment wtf-1">{ t('about.comment-already-said') }</span>
          </li>
          <li>{ t('about.skills-visual-software') }</li>
        </ul>
        <h4>{ t('about.skills-transversal') }</h4>
        <ul className="skills-list">
          <li>
            git, GitHub, Bitbucket, Jira
            <span className="wtf-comment wtf-4">
              { t('about.comment-using-website') }
            </span>
          </li>
          <li>
            Bash, vim
            <span className="wtf-comment wtf-3">&nbsp;:wq!!!!</span>
          </li>
          <li>Stripe, XState, Web3/Solana</li>
        </ul>
        <div className="cv-row">
          <span>&#x2801;&#x2820;&#x2816;&#x2811;&#x288A;&#x285A;&#x28CC;&#x28AE;&#x2871;&#x28FF;&nbsp;</span>
          <a href={ pdfUrl } className="pdf-link" target="_blank" rel="noopener noreferrer">
            { t('about.cv') }
          </a>
          <span>&nbsp;&#x28FF;&#x28EE;&#x286B;&#x281C;&#x2826;&#x281A;&nbsp;&#x2812;&#x2808;&#x2821;</span>
        </div>
      </main>
  );
};

export default About;
