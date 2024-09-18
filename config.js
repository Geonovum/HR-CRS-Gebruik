//-------------------------------------------------------------------------------------
//-- File. . . :  config.js
//-- Bevat . . :  Template voor de  configuratie voor respec  
//--              Gebaseerd op https://github.com/Geonovum/respec/wiki
//--              Deze file moet worden neergezet in de root-directory van de 
//--              betreffende standaard. 
//-- Door. . . :  Jan van Gelder
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-- Log . . . :  20181015 - JvG - Initiele versie 
//-- Log . . . :  20191022 - GRK - Handreiking Archiveren ruimtelijke plannen v2.0      
//-------------------------------------------------------------------------------------

//-- Postprocessors -------------------------------------------------------------------

//-- haalt gh-pages weg aan het eind van een URL
//-- Stopt zodra de eerste is gevonden (want komt maar 1x voor)
//-- JvG 2019-11-12
function custGHPG(respecConfig)  
{
  var tags = document.getElementsByTagName("a");
  var srch = "gh-pages";
  var slen = srch.length;
  var i;

  for (i = 0; i < tags.length; i++) 
  {
    if(tags[i].href.indexOf(srch) > -1)
    {
      console.log(tags[i].href + " is gevonden");
      tags[i].href = tags[i].href.substring(0, tags[i].href.length - slen);
      console.log(tags[i].href + " is aangepast");
      break;
    }
  } 
}

//-------------------------------------------------------------------------------------
var respecConfig = 
{
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  //specStatus: "GN-BASIS",             // Basis Document
  specStatus: "wv",              // Werk Versie
  //specStatus: "cv",              // Consultatie Versie
  //specStatus: "vv",              // Vaststellings Versie
  //specStatus: "def",             // Definitieve Versie
  //-- specType -----------------------------------------------------------------------
  //specType: "NO",                   // Norm
  //specType: "ST",                   // Standaard
  //specType: "IM",                   // Informatie Model
  //specType: "PR",                   // Praktijkrichtlijn
  specType: "HR",                   // HandReiking
  //specType: "WA",                   // Werkafspraak
  //specType: "BD",                   // Beheer Documentatie
  //-- format is verplicht! -----------------------------------------------------------
  format: "markdown",                 // altijd "markdown"     
  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  //publishDate: "2024-09-18",  	    // Format is "YYYY-MM-DD"
  //-- Repositorynaam op GitHub -------------------------------------------------------
  github: "https://github.com/geonovum/HR-CRS-Gebruik",
  //-- Repositorynaam/issues op GitHub ------------------------------------------------
  issueBase: "https://github.com/geonovum/HR-CRS-Gebruik/issues",
  //-- edDraftURI: de URI van de werkversie van het document
  edDraftURI: "https://geonovum.github.io/HR-CRS-Gebruik",
  //-- de namen van de Editor(s) ------------------------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  title: "Handreiking Gebruik coördinaatreferentiesystemen bij uitwisseling en visualisatie van geo-informatie",
  editors: 
 [
    {
      name:       "Lennard Huisman",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }, 
    {
      name:       "Friso Penninga",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }, 
  ],
  //-- de namen van de Author(s) ------------------------------------------------------
  //-- vul in: per Author: name:, company:, companyURL: -------------------------------
 // authors: 
 // [
 //   {
 //     name:       "Lennard Huisman",
 //     company:    "Geonovum",
 //     companyURL: "https://www.geonovum.nl"
 //   }, 
 //   {
 //     name:       "Naam Auteur-2",
 //     company:    "Geonovum",
 //     companyURL: "https://www.geonovum.nl"
 //   }, 
 // ],
  //-- shortName is verplicht! (komt in de URL: kies logische naam) --------------------
  shortName: "crs",  	              // Wordt gebruikt in de document URL
  //-- pubDomain is verplicht! (komt in de URL: Activeer 1 van de volgende) ------------
  pubDomain: "crs", 	              // Energie transitie
  //pubDomain: "mim", 	            // Metamodel Informatie Modellering
  //pubDomain: "bor", 	            // Beheer Openbare Ruimte
  //pubDomain: "bro", 	            // Basisregistratie Ondergrond
  //pubDomain: "imgeo", 	          // IMGeo / BGT
  //pubDomain: "kl", 	              // Kabels en Leidingen
  //pubDomain: "liv", 	            // Landelijke Informatievoorziening Vastgoedgebruik
  //pubDomain: "md", 	              // Metadata
  //pubDomain: "nen3610", 	        // Basismodel NEN3610
  //pubDomain: "oov", 	            // Openbare Orde en Veiligheid
  //pubDomain: "ro", 	              // Ruimtelijke Ordening
  //pubDomain: "serv", 	            // Services
  //pubDomain: "visu", 	            // Visualisatie
  //pubDomain: "wp", 	              // White Paper
  //-- license: voor de geldende gebruiksvoorwaarden
  //licence: "cc-by-nd",            // bronvermelding, geen afgeleide werken (default)
  //licence: "cc0",                 // Public Domain Dedication
  licence: "cc-by",                 // Attribution, met bronvermelding
  
  //-- localBiblio: lokale bibliografie, voor verwijzigingen
  //-- NB: kijk eesrt naar de beschikbare www.specref.org voor verwijziging 
  localBiblio: 
  {
    "SDW-BP": {
      title: "Spatial Data on the Web Best Practices",
      href: "https://www.w3.org/TR/sdw-bp/",
      status: "Best practice",
      publisher: "W3C en OGC",
    },
    "BRO-CAT": {
      title: "Basisregistratie Ondergrond Catalogus Booronderzoek",
      href: "https://broprogramma.github.io/BHR-G/",
      status: "Werkversie Informatiemodel",
      publisher: "BRO",
    },
    "NSGI":
      {
        title:      "Website NSGI",
        href:       "https://nsgi.nl",
    },
    "RDNAPTRANS™":
      {
        title:      "Website over RDNAPTRANS™",
        href:       "https://nsgi.nl/rdnaptrans",
        status:     "V1.0.1",
        publisher:  "Publisher-2",
        company:    "Companynaam",
    },
    "EUREF":
      {
        title:      "Website EUREF",
        href:       "http://www.euref.eu",
        status:     "V1.0.1",
        publisher:  "Publisher-3",
        company:    "Companynaam",
    },
    "EUREF-TN1":
      {
        title:      "EUREF Technical Note 1: Relationship and Transformation between the International and the European Terrestrial Reference Systems",
        href:       "http://etrs89.ensg.ign.fr/pub/EUREF-TN-1.pdfTitel",
        status:     "28 juni 2018",
    },
    "NCG-GR-43":
      {
        title:      "De geodetische referentiestelsels van Nederland",
        href:       "https://ncgeo.nl/index.php/nl/publicaties/groene-serie/item/2361-gs-43-a-de-bruijne-de-geodetische-referentiestelsels-van-nederland",
        publisher:  "NCG",
    },
    "van-der-Marel":
      {
        title:      "Reference Systems for Surveying and Mapping Lecture notes",
        href:       "http://gnss1.tudelft.nl/pub/vdmarel/reader/CTB3310_RefSystems_1-2a_online.pdf#page=33",
        publisher:  "Delft University of Technology"
      },
    "DSO-API":
      {
        title:      "API- en URI-strategie Digitaal Stelsel Omgevingswet",
        href:       "https://iplo.nl/digitaal-stelsel/aansluiten/standaarden/api-en-uri-strategie/",
        publisher:  "Deelprogramma Digitaal Stelsel Omgevingswet"
      },
    "DSO-Stelselafspraken":
      {
        title:      "Stelselafspraken, Versie 2.5, 27-09-2021",
        href:       "https://iplo.nl/digitaal-stelsel/documenten/architectuurdocumenten/",
        publisher:  "Deelprogramma Digitaal Stelsel Omgevingswet"
      },
    "Dienst-der-hydrografie":
    {
      title:        "Coördinatenreferentiestelsels voor dieptebepaling op zee",
      href:         "https://www.defensie.nl/onderwerpen/hydrografie/coordinatenstelsels-op-zee/dieptebepaling-op-zee"
    }

    
  },
  postProcess:[custGHPG],   //-- Optioneel voor een multi document repository

  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  previousPublishDate: "2024-08-28",  	    // Format is "YYY-MM-DD"
  previousMaturity: "def",                 // kies 1 van deze 2 regels  	  
  
  //-- Optionele parameters:
  emailComments: "geostandaarden@geonovum.nl",  // reactie mailadres, alleen bij CV!
  //subtitle: "iets",                           // Subtitel van het document
  //maxTocLevel: 3,                             // Aantal niveau's ToC, default is 0
  //-- LOGO: Hier kan je een ander logo opgeven indien nodig
  //logos: [{
  //  src: "https://tools.geostandaarden.nl/respec/style/logos/OmgevingswetLogo.svg",
  //  alt: "Standaarden Omgevingswet",
  //  id: "TopLogo",
  //  height: 67,
  //  width: 300,
  //  url: "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD"
  // }],
};
