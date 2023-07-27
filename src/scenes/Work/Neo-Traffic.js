import React, {Component} from 'react'

import neoWebHome from '../../assets/works/neo-traffic/neo.web.home.png'
import neoWebMarkets from '../../assets/works/neo-traffic/neo.web.markets.png'
import neoWebMall from '../../assets/works/neo-traffic/neo.web.mall-sheet.png'
import neoWebProducts from '../../assets/works/neo-traffic/neo.web.products-list.png'

import newAddirectCampaign from '../../assets/works/neo-traffic/neo.addirect.campaign.png'
import newAddirectCampaign2 from '../../assets/works/neo-traffic/neo.addirect.campaign2.png'
import newAddirectSupports from '../../assets/works/neo-traffic/neo.addirect.supports.png'
import newAddirectParams from '../../assets/works/neo-traffic/neo.addirect.params.png'
import neoDynamicsWeather from '../../assets/works/neo-traffic/neo.weather.fcl.png'
import neoDynamicsNews from '../../assets/works/neo-traffic/neo.news.shd.png'
import neoDynamicsNewsBckg from '../../assets/works/neo-traffic/neo.dynamics.news-backgrounds.png'
import neoDynamicsWeatherURL from '../../assets/works/neo-traffic/neo.dynamics.weather-url.png'
import {injectIntl} from 'react-intl'
import {Link} from 'react-router-dom'
import messages from '../../library/messages'

class NeoTraffic extends Component {
  renderFR = () => {
    return (
      <main className="work neo-traffic">
        <h1>
          Neo-Traffic
          <Link className="back-arrow" to="/what-i-do/">
            &#10232;<span>{ this.props.intl.formatMessage(messages.back) }</span>
          </Link>
        </h1>
        <p>
          Neo-Traffic est un diffuseur de contenu publicitaire statique et dynamique présent sur l'ensemble du territoire Canadien. Son réseau d'écrans se déploie dans plus d'une centaine de centres commerciaux, dans des stations essence et dans des salles de sport. Un dispositif d'une telle envergure nécessite une infrastructure stable et des outils permettant de simplifier le travail des collaborateurs.
        </p>
        <h2>Site-web</h2>
        <p>
          En 2016, Neo-Traffic a décidé de faire une refonte complète de son site web, jusqu'alors implémentée en Java. Cette refonte a eu pour but d'apporter une meilleure facilité d’utilisation du site et une présentation exhaustive des produits et marchés de Neo-Traffic. Un autre aspect de cette refonte était de permettre aux collaborateurs de mettre à jour les informations sans avoir besoin de faire appel à un développeur.
        </p>
        <figure>
          <img className="full-width-image" src={neoWebHome} />
          <figcaption>Page d'accueil du site <a href="https://neo-traffic.com"> neo-traffic.com</a>.</figcaption>
        </figure>
        <p>
          Afin de répondre aux besoins de Neo-Traffic, j'ai utilisé le CMS Bolt comme base pour le site. Bolt permet de définir clairement le type de contenu de chaque type de page, et propose une interface adaptée aux utilisateurs souhaitant insérer du contenu. De cette manière, les collaborateurs responsables du maintien du site sont aujourd'hui entièrement autonomes dans la gestion des informations présentées.
        </p>
        <figure>
          <img className="full-width-image" src={neoWebMarkets} />
          <figcaption>Une carte interactive permet de découvrir facilement tous les marchés où est présent le réseau de Neo-Traffic.</figcaption>
        </figure>
        <p>
          Dans le but de fournir à leurs clients et potentiels clients des informations précises sur les centres commerciaux dans lesquels Neo-Traffic est présent, un collaborateur avait pour mission de garder à jour un ensemble de documents PDF, un par centre, contenant un résumé des installations de Neo dans ce centre ainsi que des statistiques. Ces documents, en raison de leur nombre, étaient compliqués à garder à jour, et difficile d'accès. Le nouveau site web est venu répondre à cette problématique en référençant directement les informations de chaque centre dans sa base de données. De cette manière, le site est devenu l'unique source de vérité sur les statistiques des centres, tout en facilitant l'accès à ces informations. L'utilisation du framework mPDF permet par ailleurs de générer des PDF de chaque fiche à la demande. Plusieurs autres sections du site font d'ailleurs appel à mPDF pour distribuer des informations.
        </p>
        <div className="images-row">
          <figure>
            <img src={neoWebMall} />
            <figcaption>Fiche PDF générée automatiquement à la demande, présentant succinctement un centre commercial.</figcaption>
          </figure>
          <figure>
            <img src={neoWebProducts} />
            <figcaption>
              Ce document présente les détails d'implantation de Neo-Traffic dans chaque centre commercial.
            </figcaption>
          </figure>
        </div>
        <p>
          Le site de Neo-Traffic permet ainsi de présenter un grand nombre d'informations au travers d'une interface claire et épurée. Une couleur associée à chaque catégorie permet de simplifier la navigation, et un plan du site dans le pied de page offre permet une navigation efficiente et rapide.
        </p>
        <h2>Ad-Direct</h2>
        <p>
          En 2016, l'intégralité de la planification des contenus publicitaires sur le réseau de Neo-Traffic se faisait manuellement. Qu'il s'agisse d'une simple annonce spécifique à un unique centre commercial, ou une campagne nationale, chaque publicité devait être planifiée à la main par les collaborateurs de Neo-Traffic. Le souhait était alors de mettre en place un dispositif permettant d'automatiser une partie de ce dispositif. La transmission des contenus publicitaires des clients vers Neo-Traffic ayant toujours été la partie la plus prône aux erreurs, il a été décidé de se concentrer sur celle-ci, donnant naissance à la plateforme Ad-Direct.
        </p>
        <div className="images-row">
          <figure>
            <img src={newAddirectCampaign} />
            <figcaption>Une campagne sur Ad-Direct.</figcaption>
          </figure>
          <figure>
            <img src={newAddirectCampaign2} />
            <figcaption>
              Une affiche prête pour la diffusion dans une campagne.
            </figcaption>
          </figure>
        </div>
        <p>
          Ad-Direct est une plateforme de gestion de campagne publicitaire et de diffusion de contenu dynamique: photos ou vidéos. Les collaborateurs de Neo-Traffic utilisent la plateforme pour gérer des comptes clients et des campagnes de diffusions. Chaque client à accès aux campagnes qui le concerne, et peut y placer lui-même le contenu qu'il souhaite diffuser au travers d'un simple glisser-déposer. Les collaborateurs de Neo n'ont plus qu'à approuver le contenu uploadé pour que celui-ci commence automatiquement sa diffusion. La diffusion se fait au travers d'un fichier de diffusion. Chaque campagne possède son propre fichier de diffusion, valable pour l'entièreté de sa durée de vie. Ainsi, il n'y a qu'un unique fichier à planifier, peu importe la taille ou la durée de la campagne. De plus, les fichiers d'affichage sont capables de s'adapter à chaque format d'écran utilisé dans le réseau de Neo-Traffic automatiquement.
        </p>
        <div className="images-row">
          <figure>
            <img src={newAddirectSupports} />
            <figcaption>Ad-Direct supporte tout type de format d'affichage qu'il est possible de personnaliser selon les besoins.</figcaption>
          </figure>
          <figure>
            <img src={newAddirectParams} />
            <figcaption>
              Ad-Direct offre de nombreuses options de personnalisation et de paramétrage pour les équipes de Neo-Traffic.
            </figcaption>
          </figure>
        </div>
        <p>
          Ce dispositif permet de laisser les clients choisir eux-mêmes leurs dates de diffusion pour chaque élément de la campagne, ainsi que l'ordre de diffusion. Cette liberté donnée aux clients est cependant encadrée par un système d'approbation des modifications permettant d'assurer la qualité du contenu diffusé. La mise en place de ce dispositif à permis de grandement simplifier le travail des collaborateurs jusqu'alors responsables de la réception et de la planification de chaque élément.
        </p>
        <p>
          Après plus de quatre ans de fonctionnement, Ad-Direct a affiché du contenu publicitaire plus de 60 millions de fois, démontrant la robustesse et l'efficacité de ce système conçues entièrement en PHP pour l'interface et en JavaScript pour le fichier d'affichage.<br />
          Les retours des utilisateurs sont positifs et montrent une réelle satisfaction aussi bien de la part des clients que des collaborateurs de Neo-Traffic.
        </p>
        <h2>Dynamics</h2>
        <p>
          En plus du contenu publicitaire, Neo-Traffic utilise son réseau d'écrans pour proposer du contenu informatif, tel que la météo, les informations, et bientôt la bourse. Ces contenus dynamiques utilisent des informations d'API publics et privés pour offrir aux chalands des informations fiables et pertinentes. La gestion des Dynamics se fait au travers d'un tableau de bord spécifique, permettant d'ajuster leurs paramètres.
        </p>
        <div className="images-row">
          <figure>
            <img src={neoDynamicsWeatherURL} />
            <figcaption>Le tableau de bord des Dynamics permet aux équipes de Neo-Traffic de générer des URL de diffusion très simplement.
            </figcaption>
          </figure>
          <figure>
            <img src={neoDynamicsNewsBckg} />
            <figcaption>
              Il est possible de modifier les arrière-plans des Dynamics en quelques clics seulement.
            </figcaption>
          </figure>
        </div>
        <p>
          Le tableau de bord et les Dynamics fonctionnent avec le framework React.JS et se basent sur une API en Laravel pour la récupération des données. Un pipeline de déploiement basé sur des hooks Git permet de publier une mise à jour en quelques secondes, sans aucune perturbation dans la diffusion.
        </p>
        <figure>
          <img className="full-width-image" src={neoDynamicsWeather} />
          <figcaption>
            Le Weather Dynamic tel qu'il apparaît sur les écrans doubles.
          </figcaption>
        </figure>
        <p>
          Le Weather Dynamic propose un affichage de la météo locale, des prévisions à trois ou cinq jours, et de la météo nationale, en français et en anglais. Le tableau de bord permet de contrôler les arrières plans affichés par le dynamique, et même de spécifier des arrière-plans propres à certaines provinces et villes. Les collaborateurs en charge des Dynamics sont libres de les modifier comme bon leur semble.
        </p>
        <figure>
          <img className="full-width-image" src={neoDynamicsNews} />
          <figcaption>
            Le News Dynamic dans sa disposition pour un seul écran.
          </figcaption>
        </figure>
        <p>
          Le News Dynamic permet la diffusion de titres d'articles de la Presse Canadienne classés par différentes catégories. Ces informations sont mises à jour régulièrement au travers d'un FTP dont les données sont parcourues et mises en cache automatiquement par l'API, limitant le nombre d'accès aux informations.
        </p>
        <p>Les Dynamics sont conçus pour s'adapter aux différents supports et contextes d'affichage de Neo-Traffic. Ceci assure une intégration parfaite de chaque Dynamic dans son environnement.</p>
      </main>
    )
  }

  renderEN = () => {
    return (
      <main className="work neo-traffic">
        <h1>
          Neo-Traffic
          <Link className="back-arrow" to="/what-i-do/">
            &#10232;<span>{ this.props.intl.formatMessage(messages.back) }</span>
          </Link>
        </h1>
        <p>
          Neo-Traffic is an advertising network for both static and dynamic content covering Canada. Its network of screens is present in more than a hundred malls, gas stations and gyms. A network this big requires a stable and robust infrastructure as well as tools to facilitate the work of employees.
        </p>
        <h2>Website</h2>
        <p>
          In 2016, Neo-Traffic needed a complete redesign of their website. This complete rewriting goal was to bring a better interface and an exhaustive list of products and markets of Neo-Traffic. Another aspect of this redesign was to allow employees to update information without the need for a developer.
        </p>
        <figure>
          <img className="full-width-image" src={neoWebHome} />
          <figcaption>Homepage of the website <a href="https://neo-traffic.com"> neo-traffic.com</a>.</figcaption>
        </figure>
        <p>
          In order to answer Neo-Traffic needs, I used Bolt CMS as a framework for the website. Bolt allowed me to define explicitly the different information and elements needed for each type of page on the website, and built an interface according to these specifications targeted for employees only wanting to insert information. This way, collaborators in charge of maintaining information up to date are able to work in complete autonomy.
        </p>
        <figure>
          <img className="full-width-image" src={neoWebMarkets} />
          <figcaption>An interactive map allows for easy exploration of Neo-Traffic markets.</figcaption>
        </figure>
        <p>
          In order to offer to clients and potential clients precise information about the malls in which Neo-Traffic is present, a collaborator had the mission to keep up to date a set of PDF documents, one for each mall, featuring a list of installations in the mall as well as statistics. The documents, due to their number, were hard to keep up to date, and hard to access. The new website offered a solution to this problem by integrating the data of each document in its database. This way, the website became the single source of truth for stats and data on the malls, while facilitating access to it. By using the mPDF framework, we are able to generate the PDF documents automatically when they are needed. Other sections of the website also use this technology to distribute information.
        </p>
        <div className="images-row">
          <figure>
            <img src={neoWebMall} />
            <figcaption>Automatically generated PDF document showcasing a short description of a mall.</figcaption>
          </figure>
          <figure>
            <img src={neoWebProducts} />
            <figcaption>
              This document presents the technical implantation of Neo-Traffic in every mall.
            </figcaption>
          </figure>
        </div>
        <p>
          The Neo-Traffic website is able to offer great quantity of information through a clear and refined interface. Each section is associated a color, making it easier for visitors to find their way on the website. Also, a site map is present in the footer of every page for easy navigation.
        </p>
        <h2>Ad-Direct</h2>
        <p>
          In 2016, scheduling content on the Neo-Traffic network was a manual operation that had to be done for each and every element, whether it was a simple ad tailored for a specific mall, or a nationwide campaign. Every ad had to be scheduled by hand by Neo-Traffic employees. Their wish was to make a system that would automate parts of the process. Because the transmission of creative between clients and Neo-Traffic was the more error-prone part of the pipeline, it was decided to start by focusing on it. This led to the creation of the Ad-Direct platform.
        </p>
        <div className="images-row">
          <figure>
            <img src={newAddirectCampaign} />
            <figcaption>A campaign on Ad-Direct.</figcaption>
          </figure>
          <figure>
            <img src={newAddirectCampaign2} />
            <figcaption>
              A creative inside a campaign ready to be played on the network.
            </figcaption>
          </figure>
        </div>
        <p>
          Ad-Direct is a dynamic and static advertisement content management and scheduling platform. Neo-Traffic employees use the platform to manage clients' accounts and broadcasting campaigns. Clients have only access to their own campaigns, and can add and remove creative on them with a simple drag-and-drop. Employees then only have to approve the creative for it to start playing on the network. Content broadcast is being done through a display file. Each has its own file that stays valid for its entire life. This way, only one file has to be scheduled for a campaign, no matter its duration or size. Furthermore, display file are able to adapt to every screen resolution used on the Neo-Traffic network.
        </p>
        <div className="images-row">
          <figure>
            <img src={newAddirectSupports} />
            <figcaption>Ad-Direct supports all kinds of display formats. The formats can be edited and personalized based on needs.
            </figcaption>
          </figure>
          <figure>
            <img src={newAddirectParams} />
            <figcaption>
              Ad-Direct offers lots of configurations and personalization options for Neo-Traffic teams.
            </figcaption>
          </figure>
        </div>
        <p>
          This system allows clients to be in full control of the broadcasting dates of their creatures, as well as the order of broadcast. This liberty given to clients is framed by an approval system allowing Neo-Traffic employees, to review the quality of uploaded contents before it starts playing. Ad-Direct greatly simplified the work of collaborators who until then had to handle the reception and scheduling of all contents on the network.
        </p>
        <p>
          After more than four years of usage, Ad-Direct as totalled more than 60 million prints on screens, showcasing its robustness and efficiency. Ad-Direct is built in PHP for the back end and the web interface, and with JavaScript for the display file.<br />
          Feedback from clients and users are all positive, and show a real satisfaction.
        </p>
        <h2>Dynamics</h2>
        <p>
          In addition to advertising content, Neo-Traffic uses its network to offer informative content, such as the weather, news, and soon stock market data. These dynamic contents rely on public and private APIs to offer mall visitors reliable information. The Dynamics are handled through a specific dashboard.
        </p>
        <div className="images-row">
          <figure>
            <img src={neoDynamicsWeatherURL} />
            <figcaption>
              The Dynamics dashboard allow Neo-Traffic teams to generate broadcast URLs easily.
            </figcaption>
          </figure>
          <figure>
            <img src={neoDynamicsNewsBckg} />
            <figcaption>
              The Dynamics backgrounds can be changed in just a few clicks.
            </figcaption>
          </figure>
        </div>
        <p>
          Both the dashboard and the Dynamics works using the React.JS framework and are based on a common API built using Laravel. The API is in charge of gathering information from all the other APIs providing information. A continuous integration pipeline based on Git hooks allows for crazy-fast updates with no downtime.
        </p>
        <figure>
          <img className="full-width-image" src={neoDynamicsWeather} />
          <figcaption>
            The Weather Dynamic as it displays on food courts screens.
          </figcaption>
        </figure>
        <p>
          The Weather Dynamic can display the current local weather, a three or five days local forecast, and the national weather, both in French or in English. The dashboard allows for managing the backgrounds, and even set specific backgrounds for specific cities or provinces.
        </p>
        <figure>
          <img className="full-width-image" src={neoDynamicsNews} />
          <figcaption>
            The News Dynamic as it appears when played on a single screen.
          </figcaption>
        </figure>
        <p>
          The News Dynamic allows for broadcasting headlines from the Canadian Press, categorized by subjects. This information is updated multiple times per day through an FTP server, and cached automatically on the Dynamics API.
        </p>
        <p>
          The Dynamics are built to be able to adapt to the different supports and context of the Neo-Traffic network. This allows a tight integration of each Dynamic in its environment.</p>
      </main>
    )
  }
  render() {
    if(this.props.intl.locale === 'fr') {
      return this.renderFR();
    }

    return this.renderEN();
  }
}

export default injectIntl(NeoTraffic);
