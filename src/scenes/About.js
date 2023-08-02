import React              from 'react';
import { useTranslation } from 'react-i18next';
import AboutEn            from './About/AboutEn.mdx';

import AboutFr from './About/AboutFr.mdx';

const About = () => {
  const { t, i18n } = useTranslation();

  const pdfUrl = React.useMemo(() => {
    switch (i18n.language) {
      case 'fr':
        return 'VALENTIN_DUFOIS_CV.pdf';
      default:
        return 'VALENTIN_DUFOIS_CV.pdf';
    }
  }, []);

  return (
      <main className="about">
        <h1>{ 'int main(int argc, char * argv[]) {' }</h1>
        { i18n.language === 'fr' ? <AboutFr/> : <AboutEn /> }
        <h2>{ t('about.skills') }</h2>
        <h4>Web</h4>
        <ul className="skills-list">
          <li>HTML5, CSS3, JS, PHP, SQL</li>
          <li>
            Node.js, React.js, Laravel
            <span className="wtf-comment wtf-5">.js, js.js, omgIHateThisTrend.js</span>
          </li>
          <li>Apache2, WebSocket</li>
        </ul>
        <h4>Software</h4>
        <ul className="skills-list">
          <li>C/C++, Swift, Python, OpenGL, Metal</li>
          <li>Xcode, Visual Studio</li>
          <li>gcc, clang/llvm, Make</li>
          <li>AppKit, UIKit, Boost.Asio, ncurses</li>
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
            git, GitHub
            <span className="wtf-comment wtf-4">
              { t('about.comment-using-website') }
            </span>
          </li>
          <li>
            Vim, bash
            <span className="wtf-comment wtf-3">&nbsp;:wq!!!!</span>
          </li>
          <li>
            Network
            <span className="serious-comment">
              { t('about.comment-network') }
            </span>
          </li>
          <li>
            { t('about.skills-printer') }
            <span
              className="wtf-comment wtf-2">
              { t('about.comment-printers') }
            </span>
          </li>
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
