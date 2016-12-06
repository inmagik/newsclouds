import React from 'react'
import './Project.css'
import image1 from './image1.png'
import project from './project.png'


const Project = () => (
  <div className="row project-content">
    <div className="col-md-8 col-md-offset-2">
       <h4 className="project-title">Il Progetto <strong>DailyClouds</strong></h4>
       <p>Il cuore del progetto è lo script Python <a href="https://github.com/inmagik/newsclouds-engine">newsclouds-engine</a> che, dato un testo, lo analizza, estrae le parole con maggior ricorrenza e genera un immagine vettoriale dove le parole più grandi sono quelle più ricorrenti. Quest'immagine viene configurata tramite un <a href="https://it.wikipedia.org/wiki/JavaScript_Object_Notation">file json</a> nel quale vengono specificati  colore e font.<br />
       Abbiamo pensato di utilizzare questo script Python per creare quotidianamente un'immagine che mostri le parole più usate nelle prime pagine delle maggiori testate giornalistiche italiane. Per fare ciò, abbiamo dato come input al nostro newsclouds-engine il testo generato dai feeds <a href="https://it.wikipedia.org/wiki/RSS">RSS</a> dei siti web dei maggiori giornali italiani.
       </p>
       <div className="Project-image-div">
         <img src={image1} className="Project-image"/>
       </div>
       <p>Abbiamo quindi installato il nostro newsclouds-engine su un <a href="https://it.wikipedia.org/wiki/Raspberry_Pi">Raspberry pi</a>, che abbiamo messo nella nostra sede operativa a Bergamo, e abbiamo creato un repository <a href="https://github.com/inmagik/newsclouds-stock">newsclouds-stock</a> dove salvare le immagine generate ogni giorno.</p>
       <p>La fase succesiva del progetto è stata l'implementazione della web-app DailyClouds, realizzata con <a href="https://facebook.github.io/react/">React.js</a>, che non fa altro che visualizzare le immagini salvate sul repo newsclouds-stock.</p>
       <div className="Project-image-div">
         <img src={project} className="Project-image"/>
       </div>
       <h4 className="project-title">RSS Feeds - Giornali italiani</h4>
       <p>Questi sono i link dei feeds RSS dei giornali italiani utilizzati nel progetto DailyClouds. Utilizziamo le testate gionalistiche che non i feeds RSS.</p>
       <ul className="Project-feeds-list">
         <li><a href="http://www.ansa.it/main/notizie/awnplus/topnews/synd/ansait_awnplus_topnews_medsynd_Today_Idx.xml">ANSA</a></li>
         <li><a href="http://www.repubblica.it/rss/homepage/rss2.0.xml">la Repubblica</a></li>
         <li><a href="http://xml.corriereobjects.it/rss/homepage.xml">Corriere della Sera</a></li>
         <li><a href="http://www.ilfattoquotidiano.it/feed/">il Fatto Quotidiano</a></li>
         <li><a href="http://www.lastampa.it/rss.xml">La Stampa</a></li>
         <li><a href="http://www.ilmattino.it/rss/primopiano.xml">Il Mattino</a></li>
         <li><a href="http://www.ilmessaggero.it/rss/primopiano.xml">Il Messaggero</a></li>
         <li><a href="http://www.ilgiornale.it/feed.xml">il Giornale</a></li>
         <li><a href="http://www.liberoquotidiano.it/rss.jsp?sezione=1">Libero</a></li>
         <li><a href="http://ws3.class.it/rssfeed/rss.asmx/RssFeed?tipo=io_artpp">Italia Oggi</a></li>
         <li><a href="http://www.ilgazzettino.it/rss/home.xml">Il Gazzettino</a></li>
         <li><a href="http://www.ilsecoloxix.it/homepage/rss/homepage.xml">Il Secolo XIX</a></li>
         <li><a href="http://www.ilsole24ore.com/rss/notizie/attualita.xml">Il Sole 24 ORE</a></li>
         <li><a href="http://www.ilfoglio.it/rss.jsp?sezione=108">IL FOGLIO</a></li>
       </ul>
    </div>
  </div>
)

export default Project
