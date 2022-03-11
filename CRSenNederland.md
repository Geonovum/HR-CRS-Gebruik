## Achtergrond: Gebruikte CRS-en in Nederland

Voor uitwisseling en visualisatie kunnen in Nederland meerdere CRS-en worden gebruikt. Voor geo-informatie die is beperkt tot land en binnenwateren van Europees Nederland, worden in het horizontale vlak meestal coördinaten in het geprojecteerde CRS RD of in het geografische CRS ETRS89 gebruikt, voor de Noordzee en grensoverschrijdende datasets wordt meestal ETRS89 gebruikt. Het RD is een 2D CRS en ETRS89 en WGS 84 zowel 2D als 3D CRS-en. WGS 84 wordt in specifieke gevallen gebruikt voor visualisatie in combinatie met een kaartprojectie zoals Web-Mercator. Hoogten in ETRS89 en WGS 84 hebben geen fysische betekenis, hierom worden ook andere hoogtesystemen gebruikt, in het bijzonder NAP op land en LAT op zee. De [Nederlandse Samenwerking Geodetische Infrastructuur (NSGI)](https://nsgi.nl) is verantwoordelijk voor de definitie en realisatie van de Nederlandse CRS-en en de relatie met het Europese CRS. In dit hoofdstuk worden de opbouw, naamgeving en de belangrijkste CRS-en en hun relaties geïntroduceerd en toegelicht. Uitgebreide informatie over de achtergrond van de relatie tussen RD (NAP) en ETRS89 is beschikbaar in de publicatie [*De geodetische referentiestelsels van Nederland*](https://ncgeo.nl/index.php/nl/publicaties/groene-serie/item/2361-gs-43-a-de-bruijne-de-geodetische-referentiestelsels-van-nederland).

### Opbouw van CRS

Een CRS is opgebouwd uit een datum en een coördinatensysteem. Het coördinatensysteem definieert hoe coördinaten worden uitgedrukt, bijvoorbeeld cartesisch of geografisch. Het datum geeft de relatie van het coördinatensysteem met de aarde. Geografische en geprojecteerde CRS-en maken gebruik van geodetische datums die de gebruikte ellipsoïde en nulmeridiaan definiëren. Vertikale CRS-en maken gebruik van verticale datums. RD en NAP zijn beide een CRS, de combinatie van RD en NAP is een samengesteld (Engels: compound) CRS.

<div class="example">
_VOORBEELD_ 3D ETRS89 is een geografisch CRS, ETRS89-LAEA een geprojecteerd CRS en RDNAP is het samengestelde CRS uit het geprojecteerde CRS RD en verticale CRS NAP. Schematisch wordt dit als volgt weergegeven:

[![](https://mermaid.ink/img/pako:eNq1k8FOwkAQhl9lsweiCUQpF62GpIHSQ4kH8KChHJbuYNd027rdHpDwTN58AV7M2bJQMIaYGC-d2e7Xf2b-Sdc0zjlQl74oViQkyqKMkLJa2COdxglIRvzHyfTmtjP2fC-iBjmC7F2Az-vdFSHeLKLOkASQI7MUZZyQwWR6v1D9HR3R-QHtIosgB11znOlKNqTJLvw0FUWZbz84uKQudHms4KDCIN9-Ki4ypiErV6UGMCLkqt98a-R37x5yzbRArVaRiDsy47Kct0krZXLBmT0fCkDGf564dqO-CesRCpW_QoyVFT-d1vpm9cKz7Q6Y0lA2rT6TmcTenkxoJHooETJEbU0BptoY-welifcuZKUTlhL_rcKnp4B9H6cOZ5dd-5zs1z3Cir3fbDT44z6Df9lmmyQnDh4sMOmo0-kEXRsdY4uHmde10dnF0KChSRwbe7RNJSjJBMc_aF2LUY0eQkRdTDksWZVqY-EG0apAL8DnQueKukuWltCmrNL5dJXF1NWqgj00FAxtlpbafAGx_C2G)](https://mermaid-js.github.io/mermaid-live-editor/edit/#pako:eNq1k8FOwkAQhl9lsweiCUQpF62GpIHSQ4kH8KChHJbuYNd027rdHpDwTN58AV7M2bJQMIaYGC-d2e7Xf2b-Sdc0zjlQl74oViQkyqKMkLJa2COdxglIRvzHyfTmtjP2fC-iBjmC7F2Az-vdFSHeLKLOkASQI7MUZZyQwWR6v1D9HR3R-QHtIosgB11znOlKNqTJLvw0FUWZbz84uKQudHms4KDCIN9-Ki4ypiErV6UGMCLkqt98a-R37x5yzbRArVaRiDsy47Kct0krZXLBmT0fCkDGf564dqO-CesRCpW_QoyVFT-d1vpm9cKz7Q6Y0lA2rT6TmcTenkxoJHooETJEbU0BptoY-welifcuZKUTlhL_rcKnp4B9H6cOZ5dd-5zs1z3Cir3fbDT44z6Df9lmmyQnDh4sMOmo0-kEXRsdY4uHmde10dnF0KChSRwbe7RNJSjJBMc_aF2LUY0eQkRdTDksWZVqY-EG0apAL8DnQueKukuWltCmrNL5dJXF1NWqgj00FAxtlpbafAGx_C2G)
[![](https://mermaid.ink/img/pako:eNqFU8FKw0AQ_ZVhD6LQIikeJEqhTaQFQcSCl7SHbXZqVpNs2N2ARfwmb_6AP-ZM025LKUoOeTPz8mbebPZD5EahiMWLlU0B8xrAtcsumOUFVhKSpxk8pQ-jRy4CjLK56EKx6DLhAy70x-gclnPR1QDG2SCFCRqirLTLC9a7XVq4HAbyInAjEieuQr-hKunb6ohM4fD8rix148zPl8IYujxE11fRRRiKxAYklpifb6t0LT3Wbu084lZvr8CdutyD8dJrUjxrCn0DmarcogdnpayWSoa4gKxahD5YqxNb2NtPswk21rxiTr2tOnQfJk3Z9r2U1m-ZGtnlzKPd7w0hFA9Mpn-aTEgS3QmD7-yht_7XyeaYd72S7Bmt129SlnsbxICpMS8ew0wJ29lQc6YeHOLhX0O8bnZzcvRO82js6fHA_OJgO_uo3--PdyBhMOZMFNBgh1IGCbOigDbFlItRQJTjR_REhbaSWtFV-eDqXHi6HXQUMUGFK9mWnlf1SdS2Ic94p7Q3VsQrWTrsCdl6M1vXuYi9bXFHSrWkXVdb1ucvGJ0fVg)](https://mermaid-js.github.io/mermaid-live-editor/edit/#pako:eNqFU8FKw0AQ_ZVhD6LQIikeJEqhTaQFQcSCl7SHbXZqVpNs2N2ARfwmb_6AP-ZM025LKUoOeTPz8mbebPZD5EahiMWLlU0B8xrAtcsumOUFVhKSpxk8pQ-jRy4CjLK56EKx6DLhAy70x-gclnPR1QDG2SCFCRqirLTLC9a7XVq4HAbyInAjEieuQr-hKunb6ohM4fD8rix148zPl8IYujxE11fRRRiKxAYklpifb6t0LT3Wbu084lZvr8CdutyD8dJrUjxrCn0DmarcogdnpayWSoa4gKxahD5YqxNb2NtPswk21rxiTr2tOnQfJk3Z9r2U1m-ZGtnlzKPd7w0hFA9Mpn-aTEgS3QmD7-yht_7XyeaYd72S7Bmt129SlnsbxICpMS8ew0wJ29lQc6YeHOLhX0O8bnZzcvRO82js6fHA_OJgO_uo3--PdyBhMOZMFNBgh1IGCbOigDbFlItRQJTjR_REhbaSWtFV-eDqXHi6HXQUMUGFK9mWnlf1SdS2Ic94p7Q3VsQrWTrsCdl6M1vXuYi9bXFHSrWkXVdb1ucvGJ0fVg)
</div>

Het coördinatensysteem van een CRS bepaald ook de volgorde waarin de coördinaten worden genoteerd. In bovenstaande figuur is te zien dat voor ETRS89-LAEA de volgorde van de coördinaten Noord-Zuid (Y) en dan Oost-West (X) is, terwijl voor RD de volgorde Oost-West (x) en Noord-Zuid (y) wordt gehanteerd. In uitwisselingsstandaarden wordt soms een andere volgorde voorgeschreven. Er zijn diverse standaarden waarbij altijd eerst Oost-West (x, E of geografische lengte) en dan Noord-Zuid (y, N of geografische breedte) wordt voorgeschreven. 

### Naamgeving van CRS

CRS-en worden in de praktijk op verschillende manieren aangeduid. Tot nu toe zijn in dit document de officiële benamingen gebruikt. Bij opslag en uitwisseling van geo-informatie wordt vaak gebruik gemaakt van gestandaardiseerde aanduiding van de CRS-en in de vorm van een OGC URN of Name Type Specification (NTS) voor CRS-en. Deze hebben de volgende structuur:

|Type aanduiding|structuur|
|----|----|
|URN|urn:ogc:def:crs:_authority_:_version_:_code_|
|NTS|http://www.opengis.net/def/crs/_authority_/_version_/_code_|
|NTS|http://www.opengis.net/def/crs?authority=_authority_&version=_version_&code=_code_|

In deze aanduiding wordt meestal EPSG als de-facto autoriteit gebruikt, maar ook ISO is een voorbeeld van een autoriteit. Bij gebruik van de laatste versie van de database van de authority wordt bij URN _version_ leeg gelaten, terwijl bij de NTS _version_=0 wordt gebruikt. In [Bijlage A](#bijlage-a-crs-overzicht-tabel) is een tabel opgenomen met de EPSG-codes voor veelgebruikte CRS-en in Nederland. Met behulp van deze tabel kan de URN en NTS worden afgeleid, bijvoorbeeld voor het RD (EPSG:code 28992), resulteert dit in de volgende aanduidingen.

|Type aanduiding|structuur|
|----|----|
|URN|urn:ogc:def:crs:EPSG::28992|
|NTS|http://www.opengis.net/def/crs/ESPG/0/28992|
|NTS|http://www.opengis.net/def/crs?authority=EPSG&version=0&code=28992|

### Coördinaattransformatie, datumtransformatie en coördinaatconversie

Het veranderen van coördinaten van het ene CRS naar het andere CRS wordt **coördinaattransformatie** genoemd. Een coördinaattransformatie kan bestaan uit een datumtransformatie en/of een coördinaatconversie. 
* Het veranderen van coördinaten van het ene datum naar het andere datum wordt **datumtransformatie** genoemd.
* Het uitdrukken van coördinaten in een ander coördinatensysteem, bijvoorbeeld van geografisch naar geprojecteerd, noemen we **coördinaatconversie**.

De coördinaattransformatie en de onderdelen datumtransformatie en coördinaatconversie worden afgebeeld in onderstaande figuur, dat verder wordt toegelicht in lecture notes van de TU Delft ([H. van der Marel](http://gnss1.tudelft.nl/pub/vdmarel/reader/CTB3310_RefSystems_1-2a_online.pdf#page=33)).

<figure id="coordinatetranformation">
    <img src="media/conversionTransformation.jpg" alt="hr2">
    <figcaption>Coördinaattransformatie, datumtransformaties en coördinaatconversie. Een verandering is een coördinaattransformatie. Horizontale bewerkingen in 2D in het figuur zijn coördinaatconversies, de horizontale bewerkingen aangegeven met een gestreepte pijl zijn een datumtransformatie in hoogte. De verticale bewerkingen in het figuur zijn datumtransformaties van systeem A naar B. Niet weergegeven in dit diagram zijn het gebruik van correctiegrids of polynoomtransformaties (benaderingen) direct tussen geprojecteerde coördinaten of geografische coördinaten van de twee systemen. Bron: [H. van der Marel](http://gnss1.tudelft.nl/pub/vdmarel/reader/CTB3310_RefSystems_1-2a_online.pdf#page=33).</figcaption>
</figure>

### Indeling van CRS-en

CRS-en die gebruikt worden in het Nederlandse domein van geo-informatie, kunnen ook worden ingedeeld naar hun geografische toepassingsgebied:

* Een **wereldwijd CRS** is een CRS dat gemiddeld zo goed mogelijk bij de gehele aarde aansluit. Wereldwijde CRS-en zijn bedoeld voor kleinschalige of wereldwijde toepassingen, bijvoorbeeld wereldkaarten, satellietnavigatie en het beschrijven processen zoals zeestromingen en platentektoniek. Wereldwijde CRS-en zijn minder geschikt voor het nauwkeurig vastleggen van geo-informatie, doordat in een wereldwijd CRS de coördinaten tijdsafhankelijk zijn als gevolg van platentektoniek. Voorbeelden van wereldwijde CRS-en zijn het ITRS en WGS 84.
* Een **continentaal of regionaal CRS** is gekoppeld aan een tektonische plaat; hierdoor bewegen coördinaten in het CRS mee met de tektonische plaat. De Euraziatische plaat beweegt met enkele centimeters per jaar naar het noordoosten. Het Europese CRS ETRS89 is gekoppeld aan deze Euraziatische plaat en beweegt dus mee. In een regionaal CRS zoals ETRS89 zijn coördinaten stabiel, behalve bij lokale bodembeweging bijvoorbeeld in berggebieden of als gevolg van de post-glacial rebound in Scandinavië. Voor de coördinaten van een punt in Nederland is na 10 jaar het coördinaatverschil van hetzelfde punt in ETRS89 verwaarloosbaar, terwijl in een wereldwijd CRS zoals WGS 84 het coördinaatverschil enkele decimeters is.
* Een **landelijk CRS** is vaak een geprojecteerd CRS dat zo is gekozen dat de vervormingen in het platte vlak minimaal zijn. Nauwkeurige landelijke CRS-en dateren vaak uit de 20e eeuw, toen hoge nauwkeurigheid alleen op landelijk niveau kon worden gerealiseerd. Nauwkeurige wereldwijde en regionale CRS-en zijn mogelijk geworden door satellietplaatsbepalingstechnieken. Het verschil in oorsprong, schaal en oriëntatie van landelijke CRS-en kan honderden meters verschillen met de regionale en wereldwijde CRS-en. Het stelsel van de Rijksdriehoeksmeting (RD) is het landelijke CRS voor Nederland.

#### Wereldwijde CRS-en

De meest gebruikte wereldwijde CRS-en zijn het ITRS en WGS 84. Wereldwijde CRS-en zijn dynamische CRS-en, dat wil zeggen dat coördinaten tijdsafhankelijk zijn. Voor eenvoudige visualisatietoepassingen op het internet, waarbij geen hoge nauwkeurigheid is vereist, wordt vaak WGS 84 als niet-dynamisch (statisch) verondersteld en Web-Mercator als kaartprojectie gebruikt. Voor nauwkeurige toepassingen waarbij een wereldwijd CRS benodigd is, is het gebruik van een ITRS-realisatie meer geschikt en is gebruik van een epoche (tijdstip), waarop de coördinaten geldig zijn, noodzakelijk. EPSG adviseert vanaf een beoogde nauwkeurigheid van 1-3 meter of een kaartschaal groter dan 1:10.000 wereldwijde CRS-en niet als statisch te veronderstellen, maar expliciet gebruik te maken van statische CRS-en, zoals RD of ETRS89, of dynamische CRS-en inclusief vermelding van realisatie en een epoche. Het concept van dynamische en statische CRS-en wordt toegelicht in de [Geomatics Guidance Note 373-25 (GN25)](https://www.iogp.org/bookstore/product/geomatics-guidance-note-25-dynamic-versus-static-crss-and-use-of-the-itrf/) en [video](https://www.youtube.com/playlist?list=PLt0-qTVCvEp1ZwKnf8iup320Cvp9AgXso) van de International Association of Oil & Gas Producers (IOGP) die de bekende [EPSG geodetic parameter dataset](https://epsg.org) beheert.

##### ITRS

Het International Terrestrial Reference System geeft de definities om een wereldwijd CRS te kunnen realiseren; een ITRF is een realisatie hiervan. ITRS wordt onderhouden door de IERS (International Earth Rotation Service). Het gebruik van International Terrestrial Reference Frame (ITRF) als wereldwijd CRS wordt door resoluties van de International Union of Geodesy and Geophysics (IUGG, [resolutie 2 van 2019](http://www.iugg.org/resolutions/2019%20IUGG%20GA%20Resolutions.pdf#page=2)) en de Verenigde Naties ([VN-resolutie A/RES/69/266](https://undocs.org/en/A/RES/69/266)) aangeraden voor plaatsbepaling, satellietnavigatie, toepassingen van aardwetenschappen en de vastlegging van nationale en regionale CRS-en. Voor eenduidige coördinaten is het van belang om naast de realisatie ook het tijdstip (epoche) te vermelden. Om data in ITRF te visualiseren worden kaartprojecties gekozen die geschikt zijn voor de beoogde toepassing.

##### WGS 84

Het World Geodetic System 1984 (WGS 84) is het wereldwijde driedimensionale CRS dat wordt gebruikt door het Amerikaanse GNSS-systeem GPS. WGS 84 wordt beheerd door de U.S. National Geospatial Intelligence Agency (NGA). Toegang tot WGS 84 is in Nederland alleen mogelijk via het stand-alone gebruik van de GPS-satellieten. WGS 84-posities kunnen daarom alleen op meterniveau m.b.v. GPS-metingen worden verkregen. In de praktijk wordt vaak over WGS 84 gesproken, ook als het onderliggende CRS eigenlijk ITRS of ETRS89 is. 

Voor de realisaties van WGS 84 zijn in het verleden verschillende strategieën gebruikt, waarbij een beperkt aantal stations wereldwijd zijn gebruikt. Hierdoor zijn er verschillen van twee meter tussen de eerste en latere realisaties en op decimeterniveau tussen de latere realisaties. Voor nauwkeurige, eenduidige definitie van het CRS is het daarom nodig om een specifieke realisatie van WGS 84 te vermelden (bijvoorbeeld 3D WGS 84 (G2139)). Sinds 1994 zijn WGS 84-realisaties gekoppeld aan een ITRS-realisatie. WGS 84- en ITRS-realisaties op hetzelfde epoche komen momenteel op centimeterniveau overeen, zo kan [volgens de NGA](https://earth-info.nga.mil/php/download.php?file=(U)WGS%2084(G2139).pdf) bijvoorbeeld WGS 84 (G2139) worden gelijkgesteld aan ITRF2014 voor plaatsbepaling en navigatie. 

Doordat de specificatie 'WGS 84' zonder vermelding van realisatie en epoche niet eenduidig is, wordt WGS 84 vanuit geodetisch perspectief niet aanbevolen voor uitwisseling van nauwkeurige data. Vanuit informatiekundig perspectief raadt de  [Spatial Data on the Web Best Practices (SDW-BP)](https://www.w3.org/TR/sdw-bp/) aan om geodata, zodra je het aanbiedt op het web, in ieder geval altijd in WGS 84 te publiceren, en daarnaast in één of meer andere CRS-en als daar expliciete behoefte aan is. Voor visualisatie op het web ondersteunt de tooling vaak direct de Web-Mercator kaartprojectie op basis van _"WGS 84"_. Web-Mercator is een projectie die geschikt is voor visualisatie, maar niet voor het berekenen van bijvoorbeeld afstanden en oppervlakten. In de context van niet-nauwkeurige toepassingen op het web kan WGS 84 het best worden opgevat als een ongedefinieerd datum met als coördinatensysteem geografische coördinaten. 

#### Europese CRS-en: ETRS89 en EVRS

Het European Terrestrial Reference System 1989 (ETRS89) en het European Vertical Reference System (EVRS) worden gebruikt voor uniforme uitwisseling van Europese geo-informatie in het kader van INSPIRE. Geo-informatie in geografische ETRS89-coördinaten kan niet worden afgebeeld op een papieren kaart of een kaart op een plat computerscherm zonder kaartprojectie, omdat de geografische ETRS89-coördinaten refereren naar een 3D ellipsoïde. INSPIRE raadt voor het projecteren van ETRS89 -afhankelijk van de toepassing- een aantal kaartprojecties aan, deze zijn benoemd in [Annex II](http://data.europa.eu/eli/reg/2010/1089/oj). Daarnaast zijn voor toepassing binnen het Europese deel van Nederland, inclusief de Nederlandse Exclusieve Economische Zone (EEZ) van de Noordzee, RD-coördinaten zeer geschikt als kaartprojectie voor visualisatie van geo-informatie in ETRS89-coördinaten. De RD-projectie geeft op land en het grootste deel van de Noordzee minder vervormingen dan andere projecties zoals ETRS89-TM*zn*. Sinds de invoering van [RDNAPTRANS™2018](https://www.nsgi.nl/rdnaptrans) is er geen beperking voor de toepassing van RD op de Noordzee.

In 2000 is het Nederlandse RD per definitie gekoppeld aan ETRS89. ETRS89 is daarmee sinds 1 oktober 2000 het officiële driedimensionale CRS van Nederland. De meeste andere nationale CRS-en in Europa hebben ook een nauwkeurige koppeling met ETRS89. De relatie tussen ETRS89 en RDNAP is vastgelegd in de procedure [RDNAPTRANS™](https://www.nsgi.nl/rdnaptrans).

Opslag van geo-informatie in ETRS89 is ook mogelijk en wordt ondersteund in veel bestandsformaten en ruimtelijke databases.

Het EVRS is het Europese referentiesysteem voor de hoogte. Het EVRS wordt gerealiseerd door een geodetische vereffening van waterpasnetwerken van Europese landen, waarmee uniforme hoogten voor de punten in de waterpasnetwerken worden berekend. 

##### Realisaties van ETRS89 en EVRS

[EUREF](http://www.euref.eu/) is de organisatie die verantwoordelijk is voor de definitie en realisatie van ETRS89 en EVRS. ETRS89 is gekoppeld aan de Euraziatische plaat en is afgeleid van het International Terrestrial Reference System (ITRS). De Euraziatische plaat verschuift met ruim 2 centimeter per jaar, waardoor de relatie tussen ETRS89 en ITRS-realisaties (zoals WGS 84) en daarmee de coördinaattransformatie tijdsafhankelijk is. Coördinaten in ETRS89 en ITRS op het tijdstip 1989.0 waren hetzelfde. Het verschil tussen WGS 84/ITRS en ETRS89 op 1 januari 2025 is in Nederland ongeveer 88 centimeter, dit neemt in Nederland toe met circa 2,4 centimeter per jaar. Door de koppeling van ETRS89 aan de Euraziatische plaat wordt de gemiddelde tektonische beweging van het stabiele deel van Europa geëlimineerd en is de verandering van coördinaten in de tijd voor veel toepassingen binnen Europa te verwaarlozen. De realisaties van ETRS89 worden ook gebruikt voor wetenschappelijke doeleinden en verbeteren continue. 

Om verschillen tussen implementaties van ETRS89 voor de opslag en uitwisseling tussen landen te voorkomen, adviseert EUREF het gebruik van de realisatie ETRF2000 voor het vastleggen van geo-informatie ([EUREF-TN1](http://etrs89.ensg.ign.fr/pub/EUREF-TN-1.pdf)). In Nederland wordt ETRS89 gerealiseerd met behulp van het Actief GNSS Referentiesysteem voor Nederland (AGRS.NL) en sinds de realisatie van 2002 gekoppeld aan de ETRF20000-realisatie van ETRS89. Bij de realisatie hoort altijd een epoche. De ETRF2000-realisatie op basis van de AGRS.NL data uit 2010 heeft bijvoorbeeld epoche 2010.5 en noemen we AGRS2010.  Voor de coördinaten van een punt in Nederland is na 10 jaar het coördinaatverschil van hetzelfde punt in ETRS89 verwaarloosbaar, terwijl in een wereldwijd CRS zoals WGS 84 het coördinaatverschil enkele decimeters is.

Voor uitwisseling van geo-informatie in ETRS89 wordt dus geadviseerd om ETRF2000 te gebruiken. Waar zeer hoge nauwkeurigheid is vereist, is de aanbeveling om als CRS ook expliciet ETRF2000 als realisatie van ETRS89 te benoemen, omdat verschillen met andere ETRS89-realisatie kunnen oplopen tot meerdere centimeters. Ter indicatie: het verschil tussen de door veel landen gebruikte realisatie ETRF2000 en de recentere realisatie ETRF2014 kan oplopen tot 7 centimeter in Nederland. Voor veel toepassingen mogen de snelheden en verschillen tussen de ETRF2000 realisaties van ETRS89 binnen Nederland verwaarloosd worden voor coördinaten in het horizontale vlak. Voor toepassingen waarbij een zeer nauwkeurige hoogte van belang is, kunnen verticale snelheden en verschillen wel van belang zijn. De NSGI kan hierover adviseren. 

Van het [EVRS](http://www.euref.eu/euref_egrs.html) bestaan inmiddels drie realisaties, EVRF2000, EVRF2007 en EVRF2019. EVRF2007 is opgenomen in de INSPIRE richtlijnen als 1D CRS voor geharmoniseerde uitwisseling van hoogte gegevens.
##### Aansluiting bij geodetische infrastructuur voor eenduidig CRS bij inwinning

Voor inwinning van geo-informatie met GNSS-metingen (GPS, Galileo, GLONASS en BeiDou) publiceert de NSGI informatie over GNSS-punten en certificeert de NSGI GNSS-dienstverleners. Het gebruik van deze geodetische infrastructuur geeft zekerheid dat de metingen direct eenduidig gekoppeld zijn aan ETRF2000 volgens de actuele AGRS.NL realisatie. Het verplicht gebruik van aansluiting aan de geodetische infrastructuur wordt vaak opgenomen in productspecificaties, bestekken en handboeken.

<div class="example">
_VOORBEELD_ In de [aanbesteding Beeldmateriaal 5](https://www.tenderned.nl/tenderned-tap/aankondigingen/199678) is door Het Waterschapshuis de volgende passage opgenomen om zekerheid te hebben over aansluiting van de ingewonnen data aan het Nederlandse CRS:

*Voor het inmeten van coördinaten met een GNSS-techniek moet voor de aansluiting aan het Nederlandse driedimensionale coördinatenstelsel gebruik gemaakt worden van één van de volgende referenties:*
- *AGRS.NL*
- *NETPOS*
- *Een door het Kadaster gecertificeerde GNSS-dienstverlener*
- *GNSS-kernnetpunt(en) met een actualiteit van maximaal vijf jaar*
</em>
Opmerking: In bovenstaand citaat wordt met *coördinatenstelsel* in de context van deze handreiking *CRS* bedoeld.
</div>

#### CRS op land: RD en NAP

Voor opslag, uitwisseling en visualisatie van geo-informatie op land en binnenwateren van het Europese deel van Nederland worden voor het horizontale vlak (2D) meestal coördinaten in het Nederlandse Stelsel van de Rijksdriehoeksmeting (RD) gebruikt. Voor het verticale vlak zijn hoogten ten opzichte van Normaal Amsterdams Peil (NAP) de officiële en meest gebruikte hoogten. RD-coördinaten zijn cartesisch in meters in een plat vlak. Doordat RD en NAP in meters zijn en de RD-projectie minimale vervormingen geeft, kan eenvoudig worden gerekend met deze coördinaten. 

De beheerders en gebruikers van bestanden hebben bij de introductie van ETRS89 aangegeven RD te willen handhaven, maar wel graag een koppeling te zien met ETRS89. In 2000 is een nieuwe definitie geïntroduceerd waardoor het RD-stelsel een transformatie van de ETRS89-realisatie is. De relatie tussen ETRS89 en RDNAP is vastgelegd in de procedure [RDNAPTRANS™](https://www.nsgi.nl/rdnaptrans). Het onderhouden van referentiepunten voor ETRS89 in Nederland en de omzetting naar RD-coördinaten zijn wettelijke taken van het Kadaster binnen NSGI. NAP wordt bepaald door de gepubliceerde hoogtes van NAP-peilmerken, hetgeen een wettelijke verantwoordelijkheid is van Rijkswaterstaat binnen NSGI. 

De relatie tussen NAP en EVRF2019 is berekend door het Duitse Bundesamt für Kartographie und Geodäsie (BKG), de NSGI zal informatie over de relatie na interne validatie plaatsen op haar website.

#### CRS op zee: LAT en MSL

Voor het weergeven van diepten op zee is een nulpunt nodig. De keuze van het nulpunt bepaalt het zogenaamde reductievlak. Het Lowest Astronomical Tide (LAT) is het standaard reductievlak voor zeekaarten. Dit is de laagst mogelijke waterstand gebaseerd op de stand van zon en maan. Waterstanden onder het LAT komen ook voor, door weersomstandigheden zoals een hoge luchtdruk of een aflandige wind [bron](https://www.defensie.nl/onderwerpen/hydrografie/coordinatenstelsels-op-zee/dieptebepaling-op-zee). De relatie tussen LAT en ETRS89 wordt binnen de NSGI bijgehouden door de [Dienst der Hydrografie van de Koninklijke Marine](https://www.defensie.nl/onderwerpen/hydrografie/coordinatenstelsels-op-zee/dieptebepaling-op-zee).

Naast LAT wordt op zee ook het Mean Sea Level (MSL) als referentievlak gebruikt. Binnen de NSGI is de Dienst der Hydrografie verantwoordelijk voor de relatie tussen LAT en MSL. De relaties tussen deze 1D CRS-en op zee wordt gepubliceerd op de [website van de Dienst der Hydrografie](https://www.defensie.nl/onderwerpen/hydrografie/coordinatenstelsels-op-zee/dieptebepaling-op-zee).

