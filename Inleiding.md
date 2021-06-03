## Inleiding

Geo-informatie is direct gekoppeld aan locaties op aarde. De wijze waarop dat gebeurt wordt beschreven in het ruimtelijk-referentie systeem. Er zijn meerdere methoden om de locatie van objecten vast te leggen. De meest bekende methode is het gebruik van een coördinaatreferentiesysteem (CRS) waarbij coördinaten van een locatie worden vastgelegd. 

CRS-en nemen de vorm van de aarde als uitgangspunt om de locaties vast te leggen. Maar niets is zo ingewikkeld als meten op een bol met de bedoeling dit in een plat vlak (kaart) weer te geven. Zeker niet als die bol niet een exacte bol is.

Voor de inwinning, verwerking, opslag, uitwisseling en visualisatie van geo-informatie worden in de praktijk voor dezelfde dataset verschillende CRS-en gebruikt. In veel gevallen wordt de dataset opgeslagen in één CRS, maar worden voor de inwinning, uitwisseling en visualisatie meerdere CRS-en gebruikt. 


<div class="example">
_VOORBEELD_ 
Het gebruik van CRS-en bij keten van inwinning tot uitwisseling en visualisatie van de Basisregistratie Grootschalige Topografie (BGT) kan als volgt worden geïnterpreteerd:

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggTFJcbiAgc3ViZ3JhcGggQnJvbmhvdWRlclxuICBzdWJncmFwaCBJbndpbm5pbmdcbiAgICBBMVtcIkVUUlM4OSA8YnI-IChHTlNTLVJUSylcIl0gXG4gICAgICAgIEEyW1wiUkQgPGJyPiAoTHVjaHRmb3RvKVwiXVxuICAgIEEzW1wiTG9rYWFsIDxicj4gKFRhY2h5bWV0cmllIDxicj4gTWVldGJhbmQpXCJdXG4gIGVuZFxuICBzdWJncmFwaCBWZXJ3ZXJraW5nIGVuIG9wc2xhZ1xuICAgIEJbUkRdXG4gIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggTGFuZGVsaWprZSBWb29yemllbmluZ1xuICBzdWJncmFwaCBPcHNsYWdcbiAgICBEW1JEXVxuICBlbmRcbiAgZW5kXG4gIHN1YmdyYXBoIFZpc3VhbGlzYXRpZVxuICAgIEUxW0VUUlM4OV1cbiAgICBFMltSRF1cbiAgICBFM1tXR1M4NF1cbiAgZW5kXG4gIEExLS0-QlxuICBBMi0tPkJcbiAgQTMtLT5CXG4gIEItLT58VWl0d2lzc2VsaW5nfERcbiAgRC0tPnxVaXR3aXNzZWxpbmd8RTFcbiAgRC0tPnxVaXR3aXNzZWxpbmd8RTJcbiAgRC0tPnxVaXR3aXNzZWxpbmd8RTMiLCJtZXJtYWlkIjp7fSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggTFJcbiAgc3ViZ3JhcGggQnJvbmhvdWRlclxuICBzdWJncmFwaCBJbndpbm5pbmdcbiAgICBBMVtcIkVUUlM4OSA8YnI-IChHTlNTLVJUSylcIl0gXG4gICAgICAgIEEyW1wiUkQgPGJyPiAoTHVjaHRmb3RvKVwiXVxuICAgIEEzW1wiTG9rYWFsIDxicj4gKFRhY2h5bWV0cmllIDxicj4gTWVldGJhbmQpXCJdXG4gIGVuZFxuICBzdWJncmFwaCBWZXJ3ZXJraW5nIGVuIG9wc2xhZ1xuICAgIEJbUkRdXG4gIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggTGFuZGVsaWprZSBWb29yemllbmluZ1xuICBzdWJncmFwaCBPcHNsYWdcbiAgICBEW1JEXVxuICBlbmRcbiAgZW5kXG4gIHN1YmdyYXBoIFZpc3VhbGlzYXRpZVxuICAgIEUxW0VUUlM4OV1cbiAgICBFMltSRF1cbiAgICBFM1tXR1M4NF1cbiAgZW5kXG4gIEExLS0-QlxuICBBMi0tPkJcbiAgQTMtLT5CXG4gIEItLT58VWl0d2lzc2VsaW5nfERcbiAgRC0tPnxVaXR3aXNzZWxpbmd8RTFcbiAgRC0tPnxVaXR3aXNzZWxpbmd8RTJcbiAgRC0tPnxVaXR3aXNzZWxpbmd8RTMiLCJtZXJtYWlkIjp7fSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)


Bij de inwinning van de BGT worden ETRS89, RD en lokale CRS-en gebruikt. Voor de opslag bij bronhouders en de Landelijke Voorziening en de uitwisseling daartussen wordt RD gebruikt. Voor uitwisseling en visualisatie worden ETRS89, RD en WGS84 gebruikt, waarbij voor ETRS89 en WGS84 verschillende projecties mogelijk zijn. 
</div>



### Doel

Bij gebruik van geo-informatie is het van belang om een CRS te kiezen dat geschikt is voor de toepassing en de gebruiker. Eenduidig gebruik van CRS-en en transformaties voorkomt  systematische effecten bij gebruik van meerdere datasets. Voor het voorkomen van systematische effecten en een juiste implementatie van de Nederlandse CRS-en zijn inspanningen nodig die het gebruik door niet-specialisten ingewikkeld maken. Spatial Data on the Web Best Practices raden aan om data voor visualisatie te publiceren in wereldwijd bruikbare CRS-en. De wereldwijdbruikbare CRS-en hebben als voordeel dat gebruik voor niet-specialisten laagdrempeliger wordt, maar gebruik van deze CRS-en geven risico op systematische fouten of inconsistenties wanneer de data niet alleen wordt gebruikt voor visualisatie of datasets worden gecombineerd. Hiervoor moeten zowel aanbieder, ontwikkelaar als eindgebruiker keuzes maken. Deze Handreiking is bedoeld om gebruikers vanuit het GIS / geo-informatie werkveld voorzien van adviezen hoe om te gaan met met CRS-en bij uitwisseling en visualisatie van geo-informatie.  

<div class="example">
_VOORBEELD_ 
In het voorbeeld van de BGT gaat het dus om adviezen voor het omgaan met CRS-en bij:

1. uitwisseling tussen Bronhouder en Landelijke Voorziening
2. uitwisseling en visualisatie van Landelijke Voorziening naar gebruiker
</div>

De handreiking richt zich niet op adviezen voor het omgaan met CRS-en bij inwinning en opslag van geo-informatie.

### Leeswijzer

*Beschrijf hoe het document gelezen moet worden, welke hoofdstukken voor wie bedoeld zijn, enz...*

Leeswijzer per doelgroep?

- Dataaanbieder (welk CRS mogelijk voor visualisatie, hoe transformeer je, welke formaten ondersteunen CRS-en, hierbij denken aan gebruik)
<div class="example">
Transformeer en visualiseer zo nauwkeurig mogelijk en leg vast welke methoden zijn gebruikt, je weet immers niet wie je data gebruikt.
</div>
- Desktop GIS-gebruiker (eigenschappen van CRS-en (projecties))
<div class="example">
Vraag data op in zelfde CRS zeker bij gebruik ensembles
</div>
- Applicatieontwikkelaar (waar moet je je opdrachtgever om vragen om eenduidig te kunnen implementeren (bv EPSG-code))
<div class="example">
De paradox is datJe weet niet wie je data gebruikt. 
</div>
- Architect/Modelleur van registraties (CRS-ondersteuning registraties --> standaardparagraaf maken?)

Deze handreiking behandeld de volgende onderwerpen:

- [CRS-en in Nederland](#crs-en-in-nederland) (achtergrond informatie over aanbevolen CRS-en)
  - Naamgeving van CRS-en ([advies voor naamgeving](#urn-codes-crs-en) en [bijbehorende URN/EPSG codes](#urn-codes-conversie-en-transformaties))
  - Relaties tussen CRS-en (RD, NAP, MSL? en LAT? <--> ETRS89 en EVRF <--> ITRS <--> WGS84)
    - [Concept van transformatie en conversie](#conversie-en-transformatie)
    - EPSG concept van datum ensembles (nauwkeurigheids verlies door meerduidigheid)
    - Advies gebruik RDNAPTRANS met referentieimplementatie (sinds proj xx gaat het goed, QGIS versie yy doet het goed als je deze optie selecteert) en verwijzing validatieservice
    - Validatiedata voor ITRS/WGS84/INSPIRE projecties?
- Vervorming van geometrieën bij CRS-transformaties en projecties
  -- Langelijnen advies ([samenvatting NSGI advies](https://forum.pdok.nl/uploads/default/original/2X/c/c0795baa683bf3845c866ae4c576a880455be02a.pdf))
    [B](https://geoforum.nl/t/spatial-selectie-geeft-niet-alle-punten-die-op-een-lijn-liggen-in-qgis-waarom/5388/11)
    <code>
    Of een punt op een lijn ligt of niet hangt ook nog van de projectie af. Wat recht is in de ene projectie is krom in een andere projectie. Een punt kan daardoor afhankelijk van de projectie zelfs links of juist rechts van een lijn liggen.

    Daarnaast is het belangrijk nooit lange lijnstukken te gebruiken in GIS-bestanden, door tussenpunten toe te voegen (en goed na te denken in welke projectie je die wil berekenen). De volgende tabel met, afhankelijk van welke afwijking je nog acceptabel vindt, de geadviseerde maximale lengte voor lijnsegmenten:

    Acceptabele afwijking	Advies lijnlengte

    1 mm	                200 m

    1 cm                    500 m

    1 dm                    2 km

    1 m                     5 km

    10 m                    20 km

    100 m                   50 km
    </code>
  -- Eigenschappen geprojecteerde CRS-en (INSPIRE, web-mercator)
  
- Gebruik van CRS-en in uitwisselingsstandaarden/dataformaten


Voorbeelden en use-cases
- Effect lange lijnen op topologie
- Effect vervorming visualisatie LAEA
- Effect oppervlakte uit coördinaten LAEA vs ....
- Voorbeeld waar web-mercator met WGS84=ETRS89 acceptabel is

### Het proces

*Beschrijf het proces waarmee dit document is ontwikkeld*
