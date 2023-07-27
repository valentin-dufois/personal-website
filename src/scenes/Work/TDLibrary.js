import React, {Component} from 'react'
import { injectIntl } from 'react-intl'

import tapTempoIMG from '../../assets/works/td-library/tap.tempo.png'
import jsonToTableIMG from '../../assets/works/td-library/json.to.table.png'
import midiCHOPIMG from '../../assets/works/td-library/midi.chop.png'
import {Link} from 'react-router-dom'
import messages from '../../library/messages'

class TdLibrary extends Component {
  renderFR = () => {
    return (
      <main className="work neo-traffic">
        <h1>
          Bibliothèque TouchDesigner
          <Link className="back-arrow" to="/what-i-do/">
            &#10232;<span>{ this.props.intl.formatMessage(messages.back) }</span>
          </Link>
        </h1>
        <p>
          J'ai découvert le logiciel TouchDesigner dès le début de ma maîtrise en création numérique. Je suis rapidement tombé amoureux de son fonctionnement et des possibilités qu'il offrait. J'ai pu mettre en pratique mes connaissances sur TouchDesigner tout au long de ses deux dernières années : TouchDesigner est une des principales technologies utilisées dans les installations réalisées par le collectif PRISME. Je travaille sur cette bibliothèque en collaboration avec <a href="https://julesdelorge.fr/" target="_blank">Jules Delorge</a>.
        </p>
        <p>
          L'idée d'un catalogue de composants réutilisables pour TouchDesigner nous est venue d'un parallèle entre la communauté encore jeune de TouchDesigner et les communautés plus matures de différents langages de programmation populaires. L’absence de centralisation du contenu communautaire est un détail qui nous a marqués. Les composants construits et partagés par la communauté sont éparpillés sur de nombreux sites différents, et sont parfois difficiles à dénicher. Le but de ce catalogue est donc de fournir un point central où trouver du contenu réutilisable pour TouchDesigner, et d'apporter une certaine uniformité entre les éléments proposés.

        </p>
        <figure>
          <img src={tapTempoIMG} className="full-width-image" />
          <figcaption>Le CHOP Tap Tempo permet à l'utilisateur d'ajuster le tempo du projet avec un bouton, tel qu'un contrôleur MIDI par exemple.</figcaption>
        </figure>
        <p>
          La première itération de la bibliothèque est encore en cours de mise en place. Nous voulons, pour la première version, offrir une première base d’éléments prêts à être utilisés. Le choix des composants que nous développons se fait selon plusieurs paramètres :
          <ul>
            <li>Il faut que ce composant permette de simplifier une tâche, mais dont la mise en place alourdie visuellement le projet, ou est redondante ;</li>
            <li>Le composant doit apporter une fonctionnalité qui n'existe pas déjà, ou qui est difficile à manipuler ;</li>
            <li>Le composant doit offrir un grand nombre de possibilités, il ne doit pas être limité à des cas d'utilisation spécifiques.</li>
          </ul>
          Ces différentes conditions nous permettent de ne construire que des composants venant ajouter une réelle plus-value au logiciel. Les idées pour développer nos composants proviennent de nos expériences personnelles avec le logiciel, et des recommandations et commentaires faits par nos proches aussi utilisateurs de TouchDesigner.
        </p>
        <figure>
          <img src={jsonToTableIMG} className="full-width-image" />
          <figcaption>Le DAT JSON to Table permet de transformer du JSON en un tableau manipulable facilement au sein de TouchDesigner.</figcaption>
        </figure>
        <p>
          Avec cette bibliothèque de composants, notre souhait est d'apporter des outils facilitant le travail des utilisateurs, et leur permettant d'explorer plus en profondeur les possibilités de TouchDesigner. Tous les composants au format TOX sont conçus pour pouvoir être explorés et modifiés par les utilisateurs.
        </p>
        <p>Si la plupart des composants proposés prennent la forme de fichiers TOX, plusieurs fichiers de projet TOE vont aussi intégrer la bibliothèque. Agissant comme des compléments aux OP Snippets, le but de ces projets est de fournir des exemples simples et concrets d'utilisation de certaines fonctionnalités avancées de TouchDesigner, mais qui ne justifie pas le développement de composants. Enfin, notre bibliothèque intègre aussi plusieurs opérateurs personnalisés développés en C++ pour macOS et Windows. Ces composants apportent des fonctionnalités supplémentaires à TouchDesigner ou viennent proposer une alternative à certains éléments que nous jugeons difficiles d'utilisation.</p>
        <figure>
          <img src={midiCHOPIMG} className="full-width-image" />
          <figcaption>Les CHOP MIDI In et MIDI Out s'utilisent en lieu et place des Midi In et Out natifs de TouchDesigner. Ils permettent de s'affranchir complètement de la fenêtre MIDI Device Mapper, parfois cryptique.</figcaption>
        </figure>
        <p>
          Au final, nous espérons développer une quarantaine de composants, d'exemples, et d'opérateurs personnalisés pour la première version de la bibliothèque. Par la suite, toute personne qui le souhaite pourra apporter sa contribution à la bibliothèque. Afin de rendre la bibliothèque accessible au plus grand nombre, celle-ci est disponible sur <a href="https://github.com/Boisier/TD-Initiative-Library/tree/dev" target="_blank">Github</a> sous licence GPL-3.
        </p>
      </main>)
  }

  renderEN = () => {
    return (
      <main className="work neo-traffic">
        <h1>
          TouchDesigner Library
          <Link className="back-arrow" to="/what-i-do/">
            &#10232;<span>{ this.props.intl.formatMessage(messages.back) }</span>
          </Link>
        </h1>
        <p>
          I discovered TouchDesigner at the beginning of my mastery in digital creation. I rapidly fell in love with it and all the possibilities it offers. I was able to learn and practice my skills with it all along these past two years: The PRISME collective makes great use of TouchDesigner in all its installations. I work on this library in collaboration with <a href="https://julesdelorge.fr/" target="_blank">Jules Delorge</a>.
        </p>
        <p>
          The idea of a collection of reusable TouchDesigner components came from a comparison between the young TouchDesigner community and the more mature communities of popular programming languages. The absence of a hub where all the community content could be found struck us the most. All components shared by users are scattered across the web on different websites, often hard to find. The goal of this library is to offer a unique place where to find reusable content for TouchDesigner, with consistency between the elements.
        </p>
        <figure>
          <img src={tapTempoIMG} className="full-width-image" />
          <figcaption>The Tap Tempo CHOP adjust the project tempo using a user-provided input, such as a MIDI controller.</figcaption>
        </figure>
        <p>
          The first version of the library is still under construction. We want it to offer a selection of ready-to-use elements. We define which component we want to add using the following criterion:
          <ul>
            <li>The component has to simplify a task whose implementation usually clutters the project or is repetitive;</li>
            <li>The component must bring a new functionality who is missing from TouchDesigner, or one who is hard to use;</li>
            <li>The component should be relevant for as many situations as possible, it should not be limited to a specific situation.</li>
          </ul>
          All these conditions allow us to build exclusively components working for the betterment of the software. Our ideas come from our own experience with TouchDesigner as well as inputs from our relatives using it.
        </p>
        <figure>
          <img src={jsonToTableIMG} className="full-width-image" />
          <figcaption>The JSON to Table DAT takes a JSON input and returns is content as a DAT Table that can be handled easily by TouchDesigner.</figcaption>
        </figure>
        <p>
          With this library we aim to bring tools easing the work of users, and allowing them to explore more deeply the possibilities offered by TouchDesigner. All components in TOX files are made to be explored and edited by users.
        </p>
        <p>
          The library offers components in TOX files, as well as examples in TOE files. The goal of these examples is to complete the OP Snippets by providing simple and explicit example of advanced techniques in TouchDesigner, but that does not justify the need for a specific component. Finally, the library features multiple custom operators made in C++ for macOS and Windows. These operators bring new functionalities to TouchDesigner or offer alternatives to existing one we deemed challenging to use.</p>
        <figure>
          <img src={midiCHOPIMG} className="full-width-image" />
          <figcaption>
            The MIDI In and MIDI Out CHOP are used instead of the native ones. They allow for bypassing the cryptic MIDI Device Mapper window.
          </figcaption>
        </figure>
        <p>
          Our wish for the first release of the library is to offers around forty elements, examples and custom operators. Following this release, anyone who wants to contribute with its own work is welcome to do so. To make the library as accessible as possible, it is available on <a href="https://github.com/Boisier/TD-Initiative-Library/tree/dev" target="_blank">Github</a>, under the GPL-3 licence.
        </p>
      </main>)
  }

  render() {
    return this.props.intl.locale === 'fr' ? this.renderFR() : this.renderEN()
  }
}

export default injectIntl(TdLibrary);
