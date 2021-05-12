## CRSen in Nederland
Voor uitwisseling en visualisatie kunnen in Nederland meerdere CRSen worden gebruikt. In dit hoofdstuk worden de belangrijkste CRSen en hun relaties geintroduceerd en toegelicht.

### Representatie van coördinaten

De aarde kan eenvoudig worden gemodelleerd door een ellipsoïde, waarvan het snijpunt van de lange en korte as het middelpunt van de aarde geeft en de korte as samenvalt met de rotatieas van de aarde. De ligging (en/of hoogte) van objecten kan op de ellipsoïde worden vastgelegd met geocentrische of geografische coördinaten. Voor een afbeelding van objecten op een plat vlak is een kaartprojectie nodig, in een kaartprojectie wordt de ligging van objecten weergegeven met rechthoekige coördinaten. Onderstaande figuur geeft de relaties tussen de verschillende coördinaatrepresentaties. 
<figure id="plaatje">
    <img src="media/CrsProjectie.jpg" alt="hr2">
    <figcaption>Geocentrische, geografische en rechthoekige coördinaten.</figcaption>
</figure>

Geocentrische coördinaten, aangeduid met X, Y en Z, geven de positievector ten opzichte van het middelpunt van de aarde. Geografische coördinaten geven de positie ten opzichte van de ellipsoïde in geodetische breedte (φ), geodetische lengte (λ) en hoogte boven de ellipsoïde (h). Rechthoekige coördinaten (x en y) geven de positie ten opzichte van oorsprong van het geprojecteerde vlak. 

### URN
abcd

#### EPSG URN authority

De EPSG geodetische parameter dataset is een verzameling van datumdefinities, projectiedefinities en transformatieparameters voor coördinatenconversies en datumtransformaties. De database bevat wereldwijde, regionale, nationale en lokale datums. De dataset kan benaderd worden via een online interface en kan als database worden gedownloaded. Voor meer informatie zie, http://www.epsg.org// 

- Samengesteld (compound)
- Geprojecteerd
- Verticaal
- Ensemble

### CRSen

#### Nederland op land: RD en NAP

- RD
- NAP

#### Europa en op zee: ETRS89 EVRF 

<div class="note">
Toevoegen LAT en MSL en andere systemen noodzakelijk? (https://www.geonovum.nl/uploads/documents/Ruimtelijke-referentie_systemen_1.0.pdf)
</div>

- ETRF2000
- EVRF2007
- EVRF2019

#### Wereldwijd: ITRS en WGS84
- ITRS
- WGS84

|CRS-naam|URN           |Type |
|--------|--------------|----------------|
|RD|urn:ogc:def:crs:EPSG::28992|Geprojecteerd|Horizontaal|
|NAP|urn:ogc:def:crs:EPSG::5709|Verticaal|
|ETRS89|urn:ogc:def:crs:EPSG::4936|Ensemble (Geocentrisch)|
|ETRS89|urn:ogc:def:crs:EPSG::4258|Ensemble (Geografisch 2D)|
|ETRS89|urn:ogc:def:crs:EPSG::4937|Ensemble (Geografisch 3D)|
|ETRF2000|urn:ogc:def:crs:EPSG::7930|Geocentrisch|
|ETRF2000|urn:ogc:def:crs:EPSG::7931|Geografisch 3D|
|ETRF2000|urn:ogc:def:crs:EPSG::9067|Geografisch 2D|
|EVRF2007|urn:ogc:def:crs:EPSG::5621|Verticaal|
|EVRF2019|urn:ogc:def:crs:EPSG::9389|Verticaal|
|RD + NAP|urn:ogc:def:crs:EPSG::7415|Geprojecteerd (28992) + Verticaal (5709)|
|ETRS89 + NAP|urn:ogc:def:crs:EPSG::7432|Geografisch (4258) + Verticaal (5709)|
|ETRS89 + EVRF2007|urn:ogc:def:crs:EPSG::7423|Geografisch (4258) + Verticaal (5621)|
|ETRS89 + EVRF2019|urn:ogc:def:crs:EPSG::9422|Geografisch (4258) + Verticaal (9389)|
|ETRF2000 + NAP||Geografisch (9067) + Verticaal (5709)|
|enzovoort...|||


### Relaties tussen CRSen




[![](https://mermaid.ink/img/eyJjb2RlIjoiZmxvd2NoYXJ0IFxuIHN1YmdyYXBoIFJETkFQXG4gICAgUkQxW3gseV1cbiAgICBSRDJbXCImIzk2NiwgJiM5NTVcIl1cbiAgICBSRDNbeCx5LEhdXG4gICAgUkQ0W1wiJiM5NjYsJiM5NTVcIixIXVxuICAgIFJENVt4LHksSCx0XVxuICAgIFJENltcIiYjOTY2LCYjOTU1XCIsSCx0XVxuICAgIFJEMSA8LS0-IFJEMlxuICAgIFJEMyA8LS0-IFJENFxuICAgIFJENSA8LS0-IFJENlxuICAgIFJENSAtLT4gUkQzIC0tPiBSRDFcbiAgZW5kXG4gc3ViZ3JhcGggV0dTODRcbiAgICBXMWFbV2ViLW1lcmNhdG9yIHgseV1cbiAgICBXMltcIiYjOTY2LCAmIzk1NSwgaCwgdFwiXVxuICAgIFczW1wiWCxZLFosdFwiXVxuICAgIFcyIC0tPiBXMWEgXG4gICAgVzMgPC0tPiBXMlxuICBlbmRcbiBzdWJncmFwaCBJVFJTXG4gICAgSTNbXCJYLFksWix0XCJdXG4gIGVuZFxuIHN1YmdyYXBoIEVUUlM4OVxuICAgIEUxYVtFVFJTODktTEFFQSB4LHldXG4gICAgRTFiW0VUUlM4OS1MQ0MgeCx5XVxuICAgIEUxY1tFVFJTODktVVRNem4geCx5XVxuICAgIEUyYVtcIiYjOTY2LCAmIzk1NVwiXVxuICAgIEUyYltcIiYjOTY2LCAmIzk1NSwgaFwiXVxuICAgIEUyY1tcIiYjOTY2LCAmIzk1NSwgaCwgdFwiXVxuICAgIEUzW1wiWCxZLFosdFwiXVxuICAgIEUxYSA8LS0-IEUyYVxuICAgIEUxYiA8LS0-IEUyYVxuICAgIEUxYyA8LS0-IEUyYVxuICAgIEUzIDwtLT4gRTJjXG4gICAgRTJiIC0tPiBFMmFcbiAgICBFMmMgLS0-IEUyYlxuICBlbmRcbiAgIEUzIDwtLT4gSTNcbiAgIFJEMiA8LS0-fFJETkFQVFJBTlN8IEUyYVxuICAgUkQ0IDwtLT58UkROQVBUUkFOU3wgRTJiXG4gICBSRDYgPC0tPnxSRE5BUFRSQU5TfCBFMmNcbiAgIEkzIDwtLT4gVzNcblxuXG4iLCJtZXJtYWlkIjp7fSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZmxvd2NoYXJ0IFxuIHN1YmdyYXBoIFJETkFQXG4gICAgUkQxW3gseV1cbiAgICBSRDJbXCImIzk2NiwgJiM5NTVcIl1cbiAgICBSRDNbeCx5LEhdXG4gICAgUkQ0W1wiJiM5NjYsJiM5NTVcIixIXVxuICAgIFJENVt4LHksSCx0XVxuICAgIFJENltcIiYjOTY2LCYjOTU1XCIsSCx0XVxuICAgIFJEMSA8LS0-IFJEMlxuICAgIFJEMyA8LS0-IFJENFxuICAgIFJENSA8LS0-IFJENlxuICAgIFJENSAtLT4gUkQzIC0tPiBSRDFcbiAgZW5kXG4gc3ViZ3JhcGggV0dTODRcbiAgICBXMWFbV2ViLW1lcmNhdG9yIHgseV1cbiAgICBXMltcIiYjOTY2LCAmIzk1NSwgaCwgdFwiXVxuICAgIFczW1wiWCxZLFosdFwiXVxuICAgIFcyIC0tPiBXMWEgXG4gICAgVzMgPC0tPiBXMlxuICBlbmRcbiBzdWJncmFwaCBJVFJTXG4gICAgSTNbXCJYLFksWix0XCJdXG4gIGVuZFxuIHN1YmdyYXBoIEVUUlM4OVxuICAgIEUxYVtFVFJTODktTEFFQSB4LHldXG4gICAgRTFiW0VUUlM4OS1MQ0MgeCx5XVxuICAgIEUxY1tFVFJTODktVVRNem4geCx5XVxuICAgIEUyYVtcIiYjOTY2LCAmIzk1NVwiXVxuICAgIEUyYltcIiYjOTY2LCAmIzk1NSwgaFwiXVxuICAgIEUyY1tcIiYjOTY2LCAmIzk1NSwgaCwgdFwiXVxuICAgIEUzW1wiWCxZLFosdFwiXVxuICAgIEUxYSA8LS0-IEUyYVxuICAgIEUxYiA8LS0-IEUyYVxuICAgIEUxYyA8LS0-IEUyYVxuICAgIEUzIDwtLT4gRTJjXG4gICAgRTJiIC0tPiBFMmFcbiAgICBFMmMgLS0-IEUyYlxuICBlbmRcbiAgIEUzIDwtLT4gSTNcbiAgIFJEMiA8LS0-fFJETkFQVFJBTlN8IEUyYVxuICAgUkQ0IDwtLT58UkROQVBUUkFOU3wgRTJiXG4gICBSRDYgPC0tPnxSRE5BUFRSQU5TfCBFMmNcbiAgIEkzIDwtLT4gVzNcblxuXG4iLCJtZXJtYWlkIjp7fSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)
