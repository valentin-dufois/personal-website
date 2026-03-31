---
layout: project.njk
projectTitle: "Neo Traffic"
metaTitle: "Neo Traffic - Valentin Dufois"
metaDescription: "Neo-Traffic: advertising network projects including website, Ad-Direct platform, and dynamic content systems."
---

Neo-Traffic is an advertising network for both static and dynamic content covering Canada. Its network of screens is present in more than a hundred malls, gas stations and gyms. A network this big requires a stable and robust infrastructure as well as tools to facilitate the work of employees.

## Website

In 2016, Neo-Traffic needed a complete redesign of their website. This complete rewriting goal was to bring a better interface and an exhaustive list of products and markets of Neo-Traffic. Another aspect of this redesign was to allow employees to update information without the need for a developer.

<figure>
  <img class="full-width-image" loading="lazy" src="/works/neo-traffic/neo.web.home.png" alt="Neo-Traffic website homepage">
  <figcaption>Homepage of the website <a href="https://neo-traffic.com">neo-traffic.com</a></figcaption>
</figure>

In order to answer Neo-Traffic needs, I used Bolt CMS as a framework for the website. Bolt allowed me to define explicitly the different information and elements needed for each type of page on the website, and built an interface according to these specifications targeted for employees only wanting to insert information. This way, collaborators in charge of maintaining information up to date are able to work in complete autonomy.

<figure>
  <img class="full-width-image" loading="lazy" src="/works/neo-traffic/neo.web.markets.png" alt="Neo-Traffic interactive markets map">
  <figcaption>An interactive map allows for easy exploration of Neo-Traffic markets.</figcaption>
</figure>

In order to offer to clients and potential clients precise information about the malls in which Neo-Traffic is present, a collaborator had the mission to keep up to date a set of PDF documents, one for each mall, featuring a list of installations in the mall as well as statistics. The documents, due to their number, were hard to keep up to date, and hard to access. The new website offered a solution to this problem by integrating the data of each document in its database. This way, the website became the single source of truth for stats and data on the malls, while facilitating access to it. By using the mPDF framework, we are able to generate the PDF documents automatically when they are needed. Other sections of the website also use this technology to distribute information.

<div class="images-row">
  <figure>
    <img loading="lazy" src="/works/neo-traffic/neo.web.mall-sheet.png" alt="Neo-Traffic auto-generated mall PDF">
    <figcaption>Automatically generated PDF document showcasing a short description of a mall.</figcaption>
  </figure>
  <figure>
    <img loading="lazy" src="/works/neo-traffic/neo.web.products-list.png" alt="Neo-Traffic products list document">
    <figcaption>This document presents the technical implantation of Neo-Traffic in every mall.</figcaption>
  </figure>
</div>

The Neo-Traffic website is able to offer great quantity of information through a clear and refined interface. Each section is associated a color, making it easier for visitors to find their way on the website. Also, a site map is present in the footer of every page for easy navigation.

## Ad-Direct

In 2016, scheduling content on the Neo-Traffic network was a manual operation that had to be done for each and every element, whether it was a simple ad tailored for a specific mall, or a nationwide campaign. Every ad had to be scheduled by hand by Neo-Traffic employees. Their wish was to make a system that would automate parts of the process. Because the transmission of creative between clients and Neo-Traffic was the more error-prone part of the pipeline, it was decided to start by focusing on it. This led to the creation of the Ad-Direct platform.

<div class="images-row">
  <figure>
    <img loading="lazy" src="/works/neo-traffic/neo.addirect.campaign.png" alt="Ad-Direct campaign view">
    <figcaption>A campaign on Ad-Direct.</figcaption>
  </figure>
  <figure>
    <img loading="lazy" src="/works/neo-traffic/neo.addirect.campaign2.png" alt="Ad-Direct creative ready for broadcast">
    <figcaption>A creative inside a campaign ready to be played on the network.</figcaption>
  </figure>
</div>

Ad-Direct is a dynamic and static advertisement content management and scheduling platform. Neo-Traffic employees use the platform to manage clients' accounts and broadcasting campaigns. Clients have only access to their own campaigns, and can add and remove creative on them with a simple drag-and-drop. Employees then only have to approve the creative for it to start playing on the network. Content broadcast is being done through a display file. Each has its own file that stays valid for its entire life. This way, only one file has to be scheduled for a campaign, no matter its duration or size. Furthermore, display file are able to adapt to every screen resolution used on the Neo-Traffic network.

<div class="images-row">
  <figure>
    <img loading="lazy" src="/works/neo-traffic/neo.addirect.supports.png" alt="Ad-Direct display format support">
    <figcaption>Ad-Direct supports all kinds of display formats. The formats can be edited and personalized based on needs.</figcaption>
  </figure>
  <figure>
    <img loading="lazy" src="/works/neo-traffic/neo.addirect.params.png" alt="Ad-Direct configuration options">
    <figcaption>Ad-Direct offers lots of configurations and personalization options for Neo-Traffic teams.</figcaption>
  </figure>
</div>

This system allows clients to be in full control of the broadcasting dates of their creatures, as well as the order of broadcast. This liberty given to clients is framed by an approval system allowing Neo-Traffic employees, to review the quality of uploaded contents before it starts playing. Ad-Direct greatly simplified the work of collaborators who until then had to handle the reception and scheduling of all contents on the network.

After more than four years of usage, Ad-Direct as totalled more than 60 million prints on screens, showcasing its robustness and efficiency. Ad-Direct is built in PHP for the back end and the web interface, and with JavaScript for the display file.<br>
Feedback from clients and users are all positive, and show a real satisfaction.

## Dynamics

In addition to advertising content, Neo-Traffic uses its network to offer informative content, such as the weather, news, and soon stock market data. These dynamic contents rely on public and private APIs to offer mall visitors reliable information. The Dynamics are handled through a specific dashboard.

<div class="images-row">
  <figure>
    <img loading="lazy" src="/works/neo-traffic/neo.dynamics.weather-url.png" alt="Dynamics dashboard URL generator">
    <figcaption>The Dynamics dashboard allow Neo-Traffic teams to generate broadcast URLs easily.</figcaption>
  </figure>
  <figure>
    <img loading="lazy" src="/works/neo-traffic/neo.dynamics.news-backgrounds.png" alt="Dynamics background customization">
    <figcaption>The Dynamics backgrounds can be changed in just a few clicks.</figcaption>
  </figure>
</div>

Both the dashboard and the Dynamics works using the React.JS framework and are based on a common API built using Laravel. The API is in charge of gathering information from all the other APIs providing information. A continuous integration pipeline based on Git hooks allows for crazy-fast updates with no downtime.

<figure>
  <img class="full-width-image" loading="lazy" src="/works/neo-traffic/neo.weather.fcl.png" alt="Weather dynamic on food court screens">
  <figcaption>The Weather Dynamic as it displays on food courts screens.</figcaption>
</figure>

The Weather Dynamic can display the current local weather, a three or five days local forecast, and the national weather, both in French or in English. The dashboard allows for managing the backgrounds, and even set specific backgrounds for specific cities or provinces.

<figure>
  <img class="full-width-image" loading="lazy" src="/works/neo-traffic/neo.news.shd.png" alt="News dynamic on single screen">
  <figcaption>The News Dynamic as it appears when played on a single screen.</figcaption>
</figure>

The News Dynamic allows for broadcasting headlines from the Canadian Press, categorized by subjects. This information is updated multiple times per day through an FTP server, and cached automatically on the Dynamics API.

The Dynamics are built to be able to adapt to the different supports and context of the Neo-Traffic network. This allows a tight integration of each Dynamic in its environment.
