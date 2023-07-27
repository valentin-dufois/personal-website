import React      from 'react';
import { Link }   from 'react-router-dom';
import dialog1IMG from '../../../assets/works/prisme/dialog.1.jpg';
import dialog2IMG from '../../../assets/works/prisme/dialog.2.jpg';
import dialog3IMG from '../../../assets/works/prisme/dialog.3.JPG';
import embryo1IMG from '../../../assets/works/prisme/embryo.1.jpg';
import embryo2IMG from '../../../assets/works/prisme/embryo.2.png';
import embryo3IMG from '../../../assets/works/prisme/embryo.3.png';
import servo1IMG  from '../../../assets/works/prisme/servo.1.JPG';
import servo2IMG  from '../../../assets/works/prisme/servo.2.JPG';
import servo3IMG  from '../../../assets/works/prisme/servo.3.JPG';
import messages   from '../../../library/messages';

export const PrismeFr = ({ intl }) => {
  return (
    <main className="work neo-traffic">
      <h1>
        Collectif Prisme
        <Link className="back-arrow" to="/what-i-do/">
          &#10232;<span>{ intl.formatMessage(messages.back) }</span>
        </Link>
      </h1>
      <p>
        Formé dans le cadre de la maîtrise en création numérique à l'UQAT, le collectif Prisme est composé de six étudiants-artistes s'inscrivant dans le mouvement de la relève artistique au Québec. Nos œuvres se placent dans un contexte de recherche-création où nous cherchons à questionner les spectateurs tout en explorant de nouveaux aspects aussi bien technologiques que théoriques.
      </p>
      <h2>Dialog</h2>
      <p>
        En décembre 2018, nous avons présenté notre première installation artistique interactive: Dialog. Celle-ci vient questionner les personnes prenant part à l'installation sur le langage et les informations qu'il permet de transmettre. L'œuvre se découpe en plusieurs éléments.<br />
        D'abord, des plaques de plexiglas suspendues dans les airs, sur lesquels apparaissent des animations. Ensuite, deux combinés téléphoniques disposés à chaque extrémité de la ligne formée par les plaques suspendues. Les interacteurs sont invités à parler dans les téléphones, à avoir une conversation. Les paroles qu'il prononce sont analysées en temps réel et influencent les animations. De cette manière, les animations deviennent des représentations abstraites des composantes du langage.
      </p>
      <div className="images-row">
        <figure>
          <img src={dialog2IMG} />
          <figcaption>Un interacteur utilisant un combiné</figcaption>
        </figure>
        <figure>
          <img src={dialog3IMG} />
          <figcaption>Une interactrice vue au travers des animations</figcaption>
        </figure>
      </div>
      <figure>
        <img className="full-width-image" src={dialog1IMG} />
        <figcaption>L'oeuvre en cours d'installation</figcaption>
      </figure>
      <p>
        Dialog fait appel à plusieurs technologies dans son fonctionnement. Les combinés téléphoniques sont reliés à des iPhone sur lesquels tourne une application conçue pour l'occasion. Celle-ci analyse le flux audio pour en tirer plusieurs informations telles que l'amplitude, la fréquence, et retranscrit les paroles en texte. L'application de chaque iPhone est connectée avec l'autre afin d'échanger les flux audio, permettant aux interacteurs d'avoir une conversion au travers des combinés. Un modèle de machine-learning, entraîné par nos soins, est aussi présent sur chaque téléphone, et détermine l'émotion résultante des paroles de l'interacteur. Toutes ces informations sont ensuite transmises à l'ordinateur générant les visuels via une WebSockets.<br />
        Les visuels sont générés avec TouchDesigner. Celui-ci collecte les informations en provenance des téléphone et les utilise pour animer et faire évoluer les animations projetés.
      </p>
      <p>
        Nous avons pus exposer Dialog à deux reprises. D'abord en décembre 2018 à l'Université du Québec en Abitibi-Témiscamingue, puis en novembre 2019 à l'Écart, une salle d'exposition de Rouyn-Noranda, dans le cadre des Rencontres Interuniversitaires des Maîtrises en Art (RIMA).
      </p>
      <h2>Embryo</h2>
      <p>
        À la suite de Dialog, notre souhait n'était plus simplement de montrer une machine qui analyse, nous voulions explorer l'idée d'une machine qui apprend. Ainsi est né Embryo, notre seconde installation. Embryo se place comme une entité observant les personnes autour d'elle, et utilisant les informations qu'elle récolte pour effectuer un tri des éléments qu'elle possède. Ces éléments, des vidéos, se déplacent le long de ses faces jusqu'à ce qu'elles soient correctement ordonnées.</p>
      <figure>
        <img className="full-width-image" src={embryo1IMG} />
        <figcaption>Embryo</figcaption>
      </figure>
      <p>
        Afin de suivre les mouvements des interacteurs présents dans la salle, Embryo utilise huit Kinects, quatre au centre, quatre sur l'extérieur de la salle, pour couvrir l'intégralité de l'espace de déambulation de l'installation. Les informations de ces Kinects sont centralisées dans Locator, une application C++ développée pour l'occasion. Locator permet de croiser les données de plusieurs Kinects ou capteurs similaires, pour effectuer du suivi de personne en continu. Ces informations de captation sont ensuite transmises à un TouchDesigner générant les flux vidéo à projeter.
      </p>
      <div className="images-row">
        <figure>
          <img src={embryo2IMG} />
          <figcaption>Schéma présentant les huit Kinects, les quatre projecteurs, et l'ordinateur générant les visuels.
          </figcaption>
        </figure>
        <figure>
          <img src={embryo3IMG} />
          <figcaption>Schéma présentant les quatre flux vidéo illuminant les quatre faces d'Embryo.
          </figcaption>
        </figure>
      </div>
      <p>
        Nous avons présenté Embryo à l'UQAT en mars 2019, puis à Hexagram à Montréal en mai de la même année.
      </p>
      <h2>Servo</h2>
      <p>
        Dans la lignée d'Embryo, ou une machine analyse son environnement, nous avons voulu approfondir ce concept, mais sous une forme plus explicite. Notre souhait est d'explorer l'impact de la subjectivité des interacteurs sur eux-mêmes au travers d'une œuvre machinique. Servo présente deux structures rectangulaires, représentant des machines, discutant de ce qu'il se passe autour d'elles. Ces machines questionnent les actions des interacteurs et essaient d'interagir avec eux. Leurs réactions, ou non, viennent alimenter la conversation de ces deux entités. En plus de présenter sa partie de la conversation, chaque machine présente aussi une représentation abstraite de son état de pensée au travers d'une animation se plaçant sur la face opposée à celle présentant le texte.
      </p>
      <figure>
        <img className="full-width-image" src={servo2IMG} />
        <figcaption>Extrait d'une conversation entre les machines.</figcaption>
      </figure>
      <div className="images-row">
        <figure>
          <img src={servo1IMG} />
          <figcaption>Une enfant interagit avec une des machines.</figcaption>
        </figure>
        <figure>
          <img src={servo3IMG} />
          <figcaption>Chaque structure contient tous les éléments techniques nécéssaires à son fonctionnement.</figcaption>
        </figure>
      </div>
      <p>
        Servo utilise quatre Kinects, deux par machines, pour analyser ce qui se passe dans la salle. Elles utilisent Locator en arrière-plan pour traiter les informations reçues. Les données de suivi sont ensuite transmises à une application C++ conçue spécialement pour Servo. C'est cette application qui a pour mission de faire « vivre » les deux machines, en les faisant s'échanger des messages et en les faisant réagir aux actions des interacteurs. Cette application transmet ensuite les messages et informations d'état à deux TouchDesigner, un par machine, qui sont alors responsables d'afficher les dialogues et de générer l'animation pour la machine qu'ils représentent.
      </p>
      <p>Nous avons présentés Servo à deux reprises. En décembre 2019 à l'UQAT et début février 2020 à la Nuit Blanche de l'Université d'Architecture MacEwen à Sudbury en Ontario.</p>
    </main>)
}
