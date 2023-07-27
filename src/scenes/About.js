import React, {Component} from 'react'
import {injectIntl} from 'react-intl'
import messages from '../library/messages'

class About extends Component {
  render() {
    const uqatLink = (
      <a href="https://uqat.ca/" target="_blank" rel="noopener noreferrer">
        UQAT
      </a>
    )

    const prismeLink = (
      <a href="https://prisme.studio/" target="_blank" rel="noopener noreferrer">
        PRISME
      </a>
    )

    const openSourceLib = (
      <a href="https://github.com/Boisier/TD-Initiative-Library/tree/dev" target="_blank" rel="noopener noreferrer">
        { this.props.intl.formatMessage(messages.openSourceLib) }
      </a>
    )

    const videoTutorials = (
      <a href="https://www.youtube.com/channel/UCqCOCoo6yvTCOvuVbTwn29g" target="_blank" rel="noopener noreferrer">
        { this.props.intl.formatMessage(messages.videoTutorials) }
      </a>
    )

    const photographyLink = (
      <a href="https://www.instagram.com/valentindufois/" target="_blank" rel="noopener noreferrer">
        {this.props.intl.formatMessage(messages.photographyLink)}
      </a>
    )

    let pdfurl = 'VALENTIN_DUFOIS_CV_EN.pdf';
    if(this.props.intl.locale === 'fr') {
      pdfurl = 'VALENTIN_DUFOIS_CV_FR.pdf';
    }

    return (
      <main className="about">
        <h1>{ "int main(int argc, char * argv[]) {" }</h1>
        <p>{ this.props.intl.formatMessage(messages.aboutP1, {uqatLink: uqatLink}) }</p>
        <p>{ this.props.intl.formatMessage(messages.aboutP2, {prismeLink: prismeLink}) }</p>
        <h2>{ this.props.intl.formatMessage(messages.interests) }</h2>
        <p>{ this.props.intl.formatMessage(messages.interestsP1, {openSourceLib: openSourceLib, videoTutorials: videoTutorials}) }</p>
        <p>{ this.props.intl.formatMessage(messages.interestsP2, {photographyLink: photographyLink}) }</p>
        <h2>{ this.props.intl.formatMessage(messages.technicalSkills) }</h2>
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
        <h4>{ this.props.intl.formatMessage(messages.visuals) }</h4>
        <ul className="skills-list">
          <li>TouchDesigner, Processing</li>
          <li>
            OpenGL, Metal
            <span className="wtf-comment wtf-1">{ this.props.intl.formatMessage(messages.alreadySaidComment) }</span>
          </li>
          <li>{ this.props.intl.formatMessage(messages.visualSoftware) }</li>
        </ul>
        <h4>{ this.props.intl.formatMessage(messages.transversal) }</h4>
        <ul className="skills-list">
          <li>
            git, GitHub
            <span className="wtf-comment wtf-4">{ this.props.intl.formatMessage(messages.usingWebsiteComment) }</span>
          </li>
          <li>
            Vim, bash
            <span className="wtf-comment wtf-3">&nbsp;:wq!!!!</span>
          </li>
          <li>
            Network
            <span className="serious-comment">{ this.props.intl.formatMessage(messages.networkComment) }</span>
          </li>
          <li>
            { this.props.intl.formatMessage(messages.printerMaintenance) }
            <span
              className="wtf-comment wtf-2">{ this.props.intl.formatMessage(messages.printerMaintenanceComment) }</span>
          </li>
        </ul>
        <div className="cv-row">
          <span>&#x2801;&#x2820;&#x2816;&#x2811;&#x288A;&#x285A;&#x28CC;&#x28AE;&#x2871;&#x28FF;&nbsp;</span>
          <a href={pdfurl} className="pdf-link" target="_blank" rel="noopener noreferrer">{ this.props.intl.formatMessage(messages.curriculumVitae) }</a>
          <span>&nbsp;&#x28FF;&#x28EE;&#x286B;&#x281C;&#x2826;&#x281A;&nbsp;&#x2812;&#x2808;&#x2821;</span>
        </div>
      </main>
    )
  }
}

export default injectIntl(About);
