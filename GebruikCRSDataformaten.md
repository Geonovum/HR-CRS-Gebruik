## CRS gebruik
Dit hoofdstuk gaat in op gebruik van de beschreven CRS-en. 


### Opbouw en naamgeving van CRS
Een CRS is opgebouwd uit een datum en een coördinaat systeem (CS). Het datum geeft 
CRS-en worden in de praktijk op verschillende manieren aangeduidt. In hoofdstuk 2 zijn de officiële benamingen gebruikt, bij opslag en uitwisseling van geo-informatie wordt vaak gebruik gemaakt van gestandaardiseerde aanduiding van de CRS-en in de vorm van een OGC URN of Name Type Specification (NTS) voor CRS-en. Deze hebben de volgende structuur:

|Type aanduiding|structuur|
|----|----|
|URN|urn:ogc:def:crs:\<authority\>:\<version\>:\<code\>|
|NTS|http://www.opengis.net/def/crs/\<authority\>/\<version\>/\<code\>|
|NTS|http://www.opengis.net/def/crs?authority=\<authority\>&version=\<version\>&code=\<code\> |

In deze aanduiding wordt meestal EPSG als de-facto autoriteit gebruikt, maar ook ISO is een voorbeeld van een autoriteit. Bij gebruik van de laatste versie van de database van de authority wordt bij URN \<version\> leeg gelaten, terwijl bij de NTS \<version\>=0 wordt gebruikt. Voor het RD, waarvoor de EPSG code 28992 is, resulteert dit in de volgende aanduidingen.

|Type aanduiding|structuur|
|----|----|
|URN|urn:ogc:def:crs:EPSG::28992|
|NTS|http://www.opengis.net/def/crs/ESPG/0/28992|
|NTS|http://www.opengis.net/def/crs?authority=EPSG&version=0&code=28992|

<div class="note">
tabel naar bijlage
</div>

Onderstaande tabel geeft EPSG-code, het datum en het coördinaat systeem voor veelgebruikte CRS-en in Nederland. Wanneer ook de kolommen Datum2 en CS2 zijn ingevuld is sprake van een samengesteld (compound) CRS.

|CRS-naam|EPSG-code            |Datum1          | CS1     |Datum2 | CS2 |Opmerking|
|--------|--------------|----------------|---------|-------|------|------|
|RD|28992|RD Bessel| Dubbelprojectie van Schreiber(x, y)|
|NAP|5709|NAP| Waterpashoogte (H)||||
|ETRS89|4258|ETRS89 |Geografisch 2D (ϕ, λ)|||Ensemble|
|ETRS89|4937|ETRS89 |Geografisch 3D (ϕ, λ, h)|||Ensemble|
|ETRS89|4936|ETRS89 |Geocentrisch (X, Y, Z)|||Ensemble|
|ETRF2000|7931|ETRS89|Geografisch 3D (ϕ, λ, h)|||Aanbevolen ETRS89 realisatie voor geo-informatie|
|ETRF2000|9067|ETRS89|Geografisch 2D (ϕ, λ)|||Aanbevolen ETRS89 realisatie voor geo-informatie|
|ETRF2000|7930|ETRS89|Geocentrisch (X, Y ,Z)|||Aanbevolen ETRS89 realisatie voor geo-informatie|
|EVRF2007|5621|NAP|Normaal hoogte (H)|||||
|EVRF2019|9389|NAP|Normaal hoogte (H)|||||
|RD + NAP|7415|RD Bessel|Geprojecteerd|NAP|Waterpashoogte (H)||
|ETRS89 + NAP|7432|ETRS89|Geografisch|NAP|Waterpashoogte (H)|ETRS89=Ensemble|
|ETRS89 + EVRF2007|7423|ETRS89|Geografisch|NAP|Normaal hoogte (H)|ETRS89=Ensemble|
|ETRS89 + EVRF2019|9422|ETRS89|Geografisch|NAP|Normaal hoogte (H)|ETRS89=Ensemble|
|ETRF2000 + NAP||ETRS89|Geografisch|NAP|Waterpashoogte (H)||
|WGS 84|4258|WGS 84|Geografisch 2D (ϕ, λ)|||Ensemble|
|WGS 84 (G2139)|9755|WGS 84|Geografisch 2D|||WGS 84 realisatie va 3 januari 2021|

### CRS in het informatiemodel

In een informatiemodel voor geo-informatie worden regels opgenomen voor het te gebruiken CRS(-en). Bij het opstellen van het informatiemodel is de aanbeveling om te inventariseren welke CRS-en al gebruikt worden in het domein en waarom. De volgende tabel geeft voorbeelden van het specificeren van het CRS in informatiemodellen:

|Informatiemodel|Soort specificatie|Link|
|---|---|---|
|Omgevingswet|Gebruik van RD en ETRS89 in GML-bestanden|https://geonovum.github.io/TPOD/CIMOW/IMOW_v2.0.0.pdf#page=15|
|BRO Booronderzoek|2D: Gebruik van ETRS89 voor opslag, aanlevering toegestaan in RD, ETRS89 en WGS 84|https://docs.geostandaarden.nl/bro/bhr-g/#referentiestelsels-voor-de-horizontale-positie|

### Aandachtspunten bij gebruik van meerdere CRS-en

Wanneer voor uitwisseling en visualisatie andere CRS-en worden gebruikt dan voor de opslag zijn er een aantal aandachtspunten, de belangrijkste zijn:

- Maak gebruik van een eenduidige coördinatentransformatie en coördinatenconversie |(en leg dit vast)
- Voorkom dat geometrische of topologische verschillen ontstaan
- Significantie van decimalen

#### Transformatie en conversie

Het veranderen van coördinaten van het ene CRS naar het andere CRS wordt datumtransformatie genoemd. Het uitdrukken van coördinaten in een ander coördinatensysteem, bijvoorbeeld van geografisch naar geprojecteerd, noemen we  coördinatenconversie. De relatie wordt afgebeeld in onderstaande figuur en verder uitgelegd in [bron](http://gnss1.tudelft.nl/pub/vdmarel/reader/CTB3310_RefSystems_1-2a_online.pdf#page=33).

<figure id="plaatje">
    <img src="media/conversionTransformation.jpg" alt="hr2">
    <figcaption>Conversie en transformatie van coördinaten.</figcaption>
</figure>

<div class="advisement">
_ADVIES_ Wanneer een datumtransformatie plaatsvindt in de keten van inwinning tot gebruik is het advies de gekozen transformatieparameters in het model en/of metadata op te nemen. Bij tijdsafhankelijke transformaties, zoals van ETRS89 naar WGS 84 moet dan ook het referentieepoche worden opgenomen. Tussen RD/NAP en ETRS89 is het van belang gebruik te maken van de RDNAPTRANS procedure. 
</div>

In het informatiemodel van de BRO is gekozen voor het opnemen van het attribuut [Coördinaattransformatie](https://docs.geostandaarden.nl/bro/bhr-g/#detail_class_Model_Cordinaattransformatie) waarin in de waardelijst de mogelijke transformaties zijn vastgelegd.

Bij het ontwerp van het informatiemodel, landelijke voorziening of dataportaal kan de afweging worden gemaakt om datumtransformaties op verschillende plaatsen in de keten te laten plaatsvinden en data dubbel op te slaan of juist de transformaties on-the-fly uit te voeren. Aandachtspunten bij deze afweging zijn onder andere de authenticiteit van gegevens en de kostenafweging tussen dubbel opslaan en (herhaaldelijk) on-the-fly transformeren. 

  
#### Geometrie en topologie

Een rechte lijn in werkelijkheid is meestal geen rechte lijn in een kaart, maar een lijn die licht krom loopt. Om er voor te zorgen dat een grens in de kaart ongeacht de kaartprojectie met voldoende nauwkeurigheid eenduidig is heeft de NSGI herivoor een [advies](https://forum.pdok.nl/uploads/default/original/2X/c/c0795baa683bf3845c866ae4c576a880455be02a.pdf) geformuleerd. In dit advies staat dat lange lijnstukken van grenzen voorzien worden van tussenpunten. De afstand tussen deze tussenpunten is afhankelijk van de acceptabele lijnlengte en de locaties in Nederland, voor Europees Nederland inclusief EEZ kan de voglende tabel worden gehanteerd:

|Acceptabele afwijking|Advies lijnlengte|
|----|----|
|1 mm	                 |200 m   |
|1 cm                    |500 m   |
|1 dm                    |2 km    |
|1 m                     |5 km    |
|10 m                    |20 km   |
|100 m                   |50 km   |

Voor een nauwkeurigheid van 1 mm zijn dus punten met 200 m tussenafstand nodig voor in Nederland gangbare projecties.

### Nauwkeurigheid van coördinaten.

De nauwkeurigheid van de coördinaten opgenomen bij een geometrie moet minstens
de nauwkeurigheid realiseren die vermeld wordt in het informatiemodel of
bijgeleverde inwinningseisen. Meestal is het aantal decimalen dat in software
standaard wordt opgeleverd groter. Deze decimalen hebben dan geen betekenis
meer. Om te voorkomen dat er te grote databestanden ontstaan wordt aanbevolen de
coördinaten af te ronden op 1 decimaal meer dan de nauwkeurigheid vanh de dataset vereist. Hierdoor kunen fouten bij herhaaldelijk heen en weer transformeren worden voorkomen.

<div class="example">
_VOORBEELD_ zoals opgenomen in [IMOW](https://geonovum.github.io/TPOD/CIMOW/IMOW_v2.0.0.pdf#page=15) en het [model Basisgeometrie](https://docs.geostandaarden.nl/nen3610/def-st-basisgeometrie-20200930/#nauwkeurigheid-van-coordinaten)

Coördinaten opgenomen bij een geometrie worden standaard uitgewisseld met een getalsnauwkeurigheid van 1 mm of het equivalent daarvan in graden. Voor RD, NAP
en ETRS89 komt dat overeen met de volgende nauwkeurigheden:

- RD in meters 3 decimalen (1 mm);  
- NAP-hoogte in meters 3 decimalen (1 mm);  
- ETRS89-breedte in graden 8 decimalen (1,1 mm);  
- ETRS89-lengte in graden 8 decimalen (0,7 mm);  
- ETRS89-hoogte in meters 3 decimalen (1 mm).

Alles wat nauwkeuriger is wordt afgerond op deze nauwkeurigheid van 3 of 8
decimalen. Afronding is volgens de volgende regel:  
0.0015 -\> 0.002;  
0.0014 -\> 0.001.
</div>

### CRS in software
Voorbeelden QGIS, proj, ESRI?
### CRS bij uitwisselingsformaten

<mark style="background-color: SpringGreen">Voorbeeld(en?) hoe CRS-en worden gespecificeerd in uitwisselingsformaten</mark>

#### GeoJson

#### GML

#### Geopackage

#### OGC API



