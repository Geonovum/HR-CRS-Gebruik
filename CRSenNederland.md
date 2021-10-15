## Gebruikte CRS-en in Nederland

Voor uitwisseling en visualisatie kunnen in Nederland meerdere CRS-en worden gebruikt. Voor geo-informatie die is beperkt tot land en binnenwateren van Europees Nederland worden in het horizontale vlak meestal coördinaten in RD of in het geografische ETRS89 gebruikt, voor de Noordzee en grensoverschrijdende datasets wordt meestal ETRS89 gebruikt. Het RD is een 2D CRS en ETRS89 en WGS84 zijn 3D CRS-en. WGS 84 wordt in specifieke gevallen wordt gebruikt voor visualisatie.  Hoogten in ETRS89 en WGS 84 hebben geen fysische betekenis, hierom worden ook andere hoogtesystemen gebruikt, in het bijzonder NAP op land en LAT op zee. De Nederlandse Samenwerking Geodetische Infrastructuur ([[NSGI]]) is verantwoordelijk voor de definitie en realisatie van de Nederlandse CRS-en en de relatie met het Europese CRS. In dit hoofdstuk worden de belangrijkste CRS-en en hun relaties kort geïntroduceerd en toegelicht, uitgebreide informatie over de achtergrond van de relatie tussen RD (NAP) en ETRS89 is beschikbaar in de publicatie *De geodetische referentiestelsels van Nederland* [[NCG-GR-43]].

### Indeling van CRS-en

CRS-en die gebruikt worden in het Nederlandse domein van geo-informatie kunnen worden ingedeeld in drie groepen:

1. Wereldwijde CRS-en
2. Continentale of regionale CRS-en
3. Landelijke CRS-en

Een wereldwijd CRS is en CRS dat gemiddeld zo goed mogelijk bij de vorm van de aarde aansluit. Wereldwijde CRS-en zijn bedoeld voor kleinschalige of wereldwijde toepassingen, bijvoorbeeld wereldkaarten, satellietnavigatie en het beschrijven processen zoals zeestromingen en platen tektoniek. Wereldwijde CRS-en zijn minder geschikt voor het nauwkeurig vastleggen van coördinaten, doordat in een wereldwijd CRS de coördinaten tijdsafhankelijk zijn als gevolg van platentektoniek. Voorbeelden van wereldwijde CRS-en zijn het ITRS en WGS 84.

Een continentaal of regionaal CRS is gekoppeld aan een tektonische plaat, hierdoor bewegen coördinaten in het CRS mee met de tektonische plaat. In een regionaal CRS zijn coördinaten stabiel, behalve bij lokale bodembeweging bijvoorbeeld in berggebieden of als gevolg van de post-glacial rebound in Scandinavië. De Euraziatische plaat beweegt met enkele centimeters per jaar naar het noordoosten, het Europese CRS ETRS89 is gekoppeld aan de eurziatische plaat en beweegt dus mee. Voor een punt in Nederland is na 10 jaar coördinaatverschil van hetzelfde punt in ETRS89 verwaarloosbaar, terwijl in een wereldwijd CRS zoals WGS 84 het coördinaatverschil enkele decimeters is.

Een landelijk CRS is vaak een geprojecteerd CRS dat zo is gekozen dat de verstoringen in het platte vlak minimaal zijn. Nauwkeurige wereldwijde en regionale CRS-en zijn mogelijk geworden door satellietplaatsbepalingstechnieken, nauwkeurige landelijke CRS-en dateren vaak uit de 20e eeuw waar hoge nauwkeurigheid alleen op landelijk niveau kon worden gerealiseerd. Het verschil in oorsprong, schaal en oriëntatie van landelijke CRS-en kan honderden meters verschillen met de regionale en wereldwijde CRS-en. Het stelsel van de Rijksdriehoeksmeting (RD) is het landelijke CRS voor Nederland.
#### Wereldwijde CRS-en

De meest gebruikte wereldwijde CRS-en zijn het ITRS en WGS 84. WGS 84 met als kaartprojectie Web-Mercator wordt vaak gebruikt voor eenvoudige visualisatietoepassingen op het internet, waarbij geen hoge nauwkeurigheid wordt vereist. Voor nauwkeurige toepassingen waarbij een wereldwijd CRS benodigd is, is het gebruik van een ITRS-realisatie meer geschikt.
##### ITRS
Het International Terrestrial Reference System geeft de definities om een wereldwijd CRS te kunnen realiseren, een ITRF is een realisatie hiervan. ITRS wordt onderhouden door de IERS (International Earth Rotation Service). Het gebruik van International Terrestrial Reference Frame (ITRF) realisaties wordt door de International Union of Geodesy and Geophysics (IUGG) aangeraden voor plaatsbepaling, satellietnavigatie, toepassingen van aardwetenschappen en de vastlegging van nationale en regionale CRS-en [bron](http://www.iugg.org/resolutions/2019%20IUGG%20GA%20Resolutions.pdf). Om ITRF af te beelden in het platte vlak worden kaartprojecties gekozen afhankelijk van de toepassing.

##### WGS 84
<!-- Status WGS 84 -->

Het World Geodetic System 1984 (WGS 84) is het wereldwijde driedimensionale CRS dat wordt gebruikt door het Amerikaanse GNSS-systeem GPS. WGS 84 wordt beheerd door de U.S. National Geospatial Intelligence Agency (NGA). Toegang tot WGS 84 is in Nederland alleen mogelijk via het stand-alone gebruik van de GPS-satellieten. WGS 84-posities kunnen daarom alleen op meterniveau m.b.v. GPS-metingen worden verkregen. In de praktijk wordt vaak over WGS 84 gesproken, ook als het onderliggende CRS eigenlijk ITRS of ETRS89 is. 

<!-- WGS 84 is niet eenduidig -->

Voor de realisaties van WGS 84 zijn in het verleden verschillende strategieën gebruikt waarbij een beperkt aantal stations wereldwijd zijn gebruikt. Hierdoor zijn er verschillen van twee meter tussen de eerste en latere realisatie en op decimeter niveau tussen de latere realisaties.  Voor nauwkeurige eenduidige definitie van het CRS is het daarom nodig een specifieke realisatie van WGS 84 te vermelden (bijvoorbeeld 3D WGS 84 (G2139), EPSG:9755). Sinds 1994 is WGS 84 indirect gekoppeld aan ITRS. WGS 84 en ITRS-realisaties op hetzelfde epoche komen momenteel op centimeterniveau overeen, zo kan bijvoorbeeld WGS 84 (G2139) worden gelijkgesteld aan ITRF2014 voor plaatsbepaling en navigatie [bron](https://earth-info.nga.mil/php/download.php?file=(U)WGS%2084(G2139).pdf). Het verschil tussen WGS 84/ITRS en ETRS89 op 1 januari 2025 is ongeveer 88 centimeter, dit neemt toe met 2,4 centimeter per jaar.

Doordat de specificatie WGS 84 niet eenduidig is wordt WGS 84 niet aanbevolen voor uitwisseling van nauwkeurige data. Aan de andere kant raadt de Spatial Data on the Web Best Practice [[SDW-BP]] aan om geodata, zodra je het aanbiedt op het web, in ieder geval altijd in WGS 84 te publiceren, en daarnaast in andere CRS als daar expliciete behoefte aan is. Voor visualisatie op het web ondersteunt de tooling vaak direct de Web-Mercator kaartprojectie op basis van _"WGS 84"_. Web-Mercator is een projectie die alleen geschikt is voor visualisatie, door de grote verstoringen in de schaal zijn coördinaten in deze projectie zijn niet geschikt voor het berekenen van bijvoorbeeld afstanden en oppervlakten. In de context van niet nauwkeurige toepassingen op het web kan WGS 84 worden het best worden opgevat als een ongedefinieerd datum met geografische coördinaten. 

<div class="advisement">
_ADVIES_ Vanwege niet eenduidige gebruik van WGS 84 definities en verstoringen in de web-mercator projectie is het advies WGS 84 alleen te gebruiken wanneer de toepassing geen hoge nauwkeurigheid vereist en bedoeld is voor eenvoudige/snelle visualisatie met eenvoudige tooling op het web. Hierbij moet WGS 84 vaak worden geïnterpreteerd als een CRS dat bestaat uit een ongedefinieerd datum met geografische coördinaten.
</div>

#### Europees CRS: ETRS89
<!-- Status ETRS89 -->

Het Europese ETRS89 (European Terrestrial Reference System 1989) is sinds 1 oktober 2000 het officiële driedimensionale coördinatenstelsel van Nederland. Het Europese driedimensionale stelsels is daarmee ook het nationale driedimensionale stelsel. Nationale coördinatensystemen in Europa zijn gekoppeld aan ETRS89. 

<!-- Gebruik ETRS89 -->

ETRS89 wordt gebruikt voor uitwisseling van Europese geo-informatie in het kader van INSPIRE. Geo-informatie in geografische ETRS89-coördinaten kan niet worden gevisualiseerd op een papieren kaart of een kaart op een plat computerscherm zonder kaartprojectie, omdat deze coördinaten refereren naar een 3D ellipsoïde. INSPIRE raadt voor het projecteren van ETRS89, afhankelijk van de toepassing, een aantal kaartprojecties aan. Daarnaast zijn voor toepassing binnen het Europese deel van Nederland, inclusief de Nederlandse Exclusieve Economische Zone (EEZ) van de Noordzee, RD-coördinaten zeer geschikt als kaartprojectie voor visualisatie van geo-informatie in ETRS89-coördinaten. De relatie tussen ETRS89 en RD/NAP is vastgelegd in de procedure [[RDNAPTRANS™]].

<div class="advisement">
_ADVIES_ Gebruik voor visualisatie van ETRS89 data een aanbevolen kaartprojectie. Aanbevolen projecties zijn de RD-projectie voor Nederland inclusief de Exclusieve Economische Zone of INSPIRE-projecties voor groter gebieden binnen Europa.
</div>

Opslag van geo-informatie in ETRS89 is ook mogelijk en wordt ondersteund in veel bestandsformaten en ruimtelijke databases.

##### Realisaties van ETRS89
<!-- Realisaties ETRS89 -->

[[EUREF]] is de organisatie die verantwoordelijk is voor de definitie en realisatie van ETRS89. ETRS89 is gekoppeld aan de Euraziatische plaat en is afgeleid van het International Terrestrial Reference System (ITRS). De Euraziatische plaat verschuift met circa 2,5 centimeter per jaar, waardoor de relatie tussen ETRS89 en ITRS-realisaties (zoals WGS 84) en dus de coördinatentransformatie tijdsafhankelijk is. Coördinaten in ETRS89 en ITRS op het tijdstip 1989.0 zijn hetzelfde. Door de koppeling van ETRS89 aan de Euraziatische plaat wordt de gemiddelde tektonische beweging van het stabiele deel van Europa geëlimineerd en is de verandering van coördinaten in de tijd voor veel toepassingen binnen Europa te verwaarlozen. De realisaties van ETRS89 worden ook gebruikt voor wetenschappelijke doeleinden en verbeteren continue. Als voorbeeld: het verschil tussen de door veel landen gebruikte realisatie ETRF2000 en de recentere realisatie ETRF2014 kan oplopen tot 7 centimeter. 

<!-- Eenduidig gebruik ETRF2000 als ETRS89 realisatie voor geo-informatie -->

Om verschillen tussen implementaties van ETRS89 voor de opslag en uitwisseling tussen landen te voorkomen adviseert EUREF het gebruik van de realisatie ETRF2000 voor het vastleggen van geo-informatie [[EUREF-TN1]]. In Nederland wordt ETRS89 gerealiseerd met behulp van het Actief GNSS Referentiesysteem voor Nederland (AGRS.NL) en sinds de realisatie van 2002 gekoppeld aan de ETRF20000-realisatie van ETRS89. Bij de realisatie hoort altijd een epoche. De ETRF2000-realisatie op basis van de AGRS.NL data uit 2010 heeft bijvoorbeeld epoche 2010.5 en noemen we AGRS2010.

Voor uitwisseling van geo-informatie in ETRS89 wordt dus geadviseerd om ETRF2000 te gebruiken. Waar hoge nauwkeurigheid is vereist is de aanbeveling om als CRS ook expliciet ETRF2000 als realisatie van ETRS89 te benoemen, omdat verschillen met andere ETRS89-realisatie kunnen oplopen tot meerdere centimeters. Voor veel toepassingen mogen de snelheden en verschillen tussen de ETRF2000 realisaties van ETRS89 binnen Nederland verwaarloosd worden voor coördinaten in het horizontale vlak. Voor toepassingen waarbij een nauwkeurige hoogte van belang is kunnen verticale snelheden wel van belang zijn, bij twijfel is de aanbeveling om hierover advies te vragen aan de NSGI. 

<div class="advisement">
_ADVIES_ Specificeer voor datasets met een nauwkeurigheid op centimeter niveau als CRS de ETRS89-realisatie. Voor Nederland is dit sinds 2002 ETRF2000 (EPSG:9067 (2D) of EPSG:7931 (3D)). Voor nauwkeurige hoogtes is het advies ook het tijdstip (epoche) te vermelden waarop de realisatie geldig is, bijvoorbeeld 2010.5 bij aansluiting aan AGRS2010.
</div>

##### Certificering voor eenduidig CRS bij inwinning

Voor inwinning van geo-informatie met GNSS-metingen (GPS, Galileo, GLONASS en BeiDou) certificeert de NSGI GNSS-dienstverleners. Bij gebruik van gecertificeerde diensten voor GNSS-metingen geeft zekerheid dat de metingen direct eenduidig gekoppeld zijn aan ETRF2000 volgens de actuele AGRS.NL realisatie. Het gebruik van gecertificeerde diensten wordt vaak opgenomen in productspecificaties, bestekken en handboeken.

<div class="advisement">
_ADVIES_ Specificeer voor eenduidige koppeling aan het Nederlandse CRS dat bij inwinning met GNSS gebruik moet worden gemaakt van gecertificeerde GNSS-diensten.
</div>


<div class="example">
_VOORBEELD_ In de [aanbesteding Beeldmateriaal 5](https://www.tenderned.nl/tenderned-tap/aankondigingen/199678) is door Het Waterschapshuis de volgende passage opgenomen om zekerheid te hebben over aansluiting van de ingewonnen data aan het Nederlandse CRS:

Voor het inmeten van coördinaten met een GNSS-techniek moet voor de aansluiting aan het
Nederlandse driedimensionale coördinatenstelsel gebruik gemaakt worden van één van de volgende referenties:
- AGRS.NL.
- NETPOS.
- Een door het Kadaster gecertificeerde GNSS-dienstverlener.
- GNSS-kernnetpunt(en) met een actualiteit van maximaal vijf jaar.
</div>

<div class="note">
Hier nog iets meegeven dat het speelt bij bijv. inwinning geoinformatie, maar tegenwoordig ook bij bijv. precisielandbouw (en dat het in die nieuwe domeinen minder vaak goed gaat dan in de traditionele)? 

Bijvoorbeeld zoiets specifiek voor landbouw: Voor precisielandbouw is zijn nauwkeurige correcties voor GNSS-waarnemingen nodig. In de landbouwsector zijn verschillende nationale en internationale dienstverleners actief. Deze dienstverleners gebruiken verschillende CRS-en. Wanneer tijdens de precisielandbouwcyclus van zaaien tot oogsten wordt gewisseld van GNSS-dienstverlener, bijvoorbeeld door het wisselen van abonnement of gebruik van verschillende dienstverleners door verschillende loonbedrijven, kunnen systematische verschillen tussen de CRS-en van de dienstverleners zorgen voor schade aan gewassen en verlies van opbrengsten. Bij gebruik van gecertificeerde GNSS-dienstverleners wordt dit risico geminimaliseerd, doordat de certificering zekerheid geeft over het gebruikte CRS.
</div>

#### CRS op land: RD en NAP

<!-- Gebruik RD en NAP -->

Voor opslag, uitwisseling en visualisatie van geo-informatie op land en binnenwateren van het Europese deel van Nederland worden voor het horizontale vlak (2D) meestal coördinaten in het Nederlandse Stelsel van de Rijksdriehoeksmeting (RD) gebruikt. Voor het verticale vlak zijn hoogten ten opzichte van Normaal Amsterdams Peil (NAP) de officiële en meest gebruikte hoogten. RD-coördinaten zijn cartesisch in meters in een platvlak. Doordat RD en NAP in meters zijn en de RD-projectie minimale vervormingen geeft kan eenvoudig worden gerekend met deze coördinaten, voor nauwkeurige berekeningen van afstanden en oppervlakten zijn correctieformules beschikbaar of kunnen complexere formules worden gebruikt op de ellipsoïde (deze zijn in GIS-pakketten vaak standaard geïmplementeerd). 

De beheerders en gebruikers van bestanden hebben bij de introductie van ETRS89 aangegeven RD te willen handhaven, maar wel graag een koppeling te zien met ETRS89. In 2000 is een nieuwe definitie geïntroduceerd waardoor het RD-stelsel een transformatie van de ETRS89-realisatie is. De relatie tussen ETRS89 en RD/NAP is vastgelegd in de procedure [[RDNAPTRANS™]]. Het onderhouden van referentiepunten voor ETRS89 in Nederland en de omzetting naar RD-coördinaten zijn wettelijke taken van het Kadaster binnen NSGI. NAP wordt bepaald door de gepubliceerde hoogtes van NAP-peilmerken, hetgeen een wettelijke verantwoordelijkheid is van Rijkswaterstaat binnen NSGI. 
#### <mark>CRS op zee: LAT</mark>

### Relaties tussen CRS-en

De relatie tussen CRS-en die zijn gebaseerd op een verschillende datum is vastgelegd in een [datumtransformatie](#datumtransformatie-en-conversie). De relaties RD/NAP, ETRS89, ITRS en WGS84 zijn weergegeven in onderstaande figuur met daarbij de organisatie die de gegevens van datumtransformatie beheerd.

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggTFIgXG4gICAgQVtSRF1cbiAgICBCW0VUUlM4OV1cbiAgICBDW0lUUlNdXG4gICAgRFtXR1MgODRdXG4gICAgXG4gIEEtLS18XCJOU0dJIChSRE5BUFRSQU5TKVwifEJcbiAgQi0tLXxFVVJFRnxDXG4gIEMtLS18TkdBfERcbiAgIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/edit/#eyJjb2RlIjoiZ3JhcGggTFIgXG4gICAgQVtSRF1cbiAgICBCW0VUUlM4OV1cbiAgICBDW0lUUlNdXG4gICAgRFtXR1MgODRdXG4gICAgXG4gIEEtLS18XCJOU0dJIChSRE5BUFRSQU5TKVwifEJcbiAgQi0tLXxFVVJFRnxDXG4gIEMtLS18TkdBfERcbiAgIiwibWVybWFpZCI6IntcbiAgXCJ0aGVtZVwiOiBcImRlZmF1bHRcIlxufSIsInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjp0cnVlLCJ1cGRhdGVEaWFncmFtIjpmYWxzZX0)

In de volgende paragraven worden de datumtransformaties tusse RD en ETRS89 en tussen ETRS89 en WGS 84 beschreven.

#### Transformatie en conversie tussen RD/NAP en ETRS89

<!-- Waarom RDNAPTRANS™ en relatie ETRS89 -->

Bij de koppeling tussen ETRS89 en RD in de jaren 90 werden systematische verschillen gevonden. Vanwege de wens van gebruikers dat RD-coördinaten niet wijzigden bij de introductie van ETRS89 is ervoor gekozen om de verschillen te modelleren in correctiegrid dat deel uitmaakt van de datumtransformatie en conversie procedure tussen geprojecteerde RD-coördinaten en geografische ETRS89-coördinaten. NAP hoogten kunnen met een quasi-geoïdemodel naar ellipsoïdische hoogten in ETRS89 worden getransformeerd met een precisie die hoger is dan de ETRS89-coördinaten die met de meeste GNSS-metingen wordt verkregen. Het correctiegrid en quasi-geoïdemodel zijn onderdeel van de procedure RDNAPTRANS™. 

RDNAPTRANS™ kent verschillende versies, in veel (oudere) GIS-paketten is RDNAPTRANS™ niet volledig geïmplementeerd wat fouten op decimeterniveau oplevert. De NSGI publiceert de actuele procedure RDNAPTRANS™ en transformatievalidatieservice op haar [website]([[NSGI]]). Voor de transformatie tussen RD/NAP en ETRS89 met gebruik van de RDNAPTRANS™ procedure is tevens een [transformatie-API](https://www.nsgi.nl/coordinatentransformatie-api) beschikbaar bij de NSGI. Voorbeelden van implementatie van RDNAPTRANS™ in software wordt gegeven in de paragraaf [CRS in software](#crs-in-software).

<div class="advisement">
_ADVIES_  Voor de uitwisseling van geo-informatie binnen Europa is het nadrukkelijke advies om altijd de weg via ETRS89 te kiezen. Bij gebruik van de actuele RDNAPTRANS™ procedure is daarbij voor het Nederlandse deel een nauwkeurigheid op centimeterniveau gewaarborgd. 
</div>

#### Transformatie tussen ETRS89 en WGS 84/ITRS
<!--Strategieën gebruik WGS 84 bij bron in RD of ETRS89 -->

Wanneer na zorgvuldige afweging  gebruik wordt gemaakt van WGS 84 of ITRS voor visualisatie of uitwisseling zijn verschillende strategieën mogelijk die in de volgende paragraven worden beschreven.
###### WGS 84 gelijkstellen aan ETRS89

Wanneer de brondata in RD of ETRS89 is en het beoogd gebruik van de data bestaat uit visualisatie of combinatie met andere datasets, kan worden gekozen om WGS 84 en ETRS89 aan elkaar gelijk te stellen. Dit is de standaard implementatie in meerdere GIS-paketten, namelijk dat zonder expliciete vermelding van de WGS 84 en ETRS89-realisaties een nultransformatie wordt gebruikt. De nauwkeurigheid van de nultransformatie is circa 2 meter. Door het toepassen van deze strategie moet het resultaat worden geïnterpreteerd als een CRS dat bestaat uit een ongedefinieerd datum met als coördinatensysteem lengte en breedte. Het voordeel van het gebruik van de nultransformatie is dat de transformatie niet tijdsafhankelijk is en coördinaten dus niet veranderen in de tijd.

<div class="note">
Bij gebruik van data waarbij het aangegeven CRS WGS 84 (EPSG:4326) is zonder duidelijke informatieover het CRS van de brondata, de gebruikte transformaties, realisatie en/of het epoche moet de gebruiker er rekening mee houden dat de data systematische fouten in de orde van meters kan bevatten. 
</div>

###### Tijdsafhankelijke transformatie tussen ETRS89 en WGS 84/ITRS

Wanneer de dataspecificatie expliciet een realisatie en epoche van WGS 84 of ITRS benoemd, of data gecombineerd wordt met de locatieinformatie van de eindgebruiker kan worden gekozen de transformatie tussen ETRS89 en WGS 84 uit te voeren met hoge nauwkeurigheid voor een specifieke realisatie op een specifiek epoche. 

Voor Nederlandse data mag voor ETRS89 de realisatie ETRF2000 worden gekozen. Wanneer de WGS 84 realisatie niet is gespecificeerd wordt dan de meest recente realisatie gekozen (WGS 84 (G2139), EPSG:9755) of de realisatie van het (gemiddelde) moment van inwinning van de dataset.

Om te kunnen transformeren worden de door [[EUREF]] gepubliceerde tijdsafhankelijke transformatieparameters tussen ETRF2000 en ITRS gebruikt [[EUREF-TN1]] die ook in EPSG zijn opgenomen. Bij deze transformatie wordt de WGS 84-realisatie dan gelijkgesteld aan de bijbehorende ITRS-realisatie (ITRF2014 voor WGS 84 (G2139)). De keuze van het epoche kan voortkomen uit de datum van inwinning, publicatiedatum of een expliciete specificatie.

<div class="example">
_VOORBEELD_ Voor de uitwisseling van terrein- en obstakelgegevens voor de luchtvaart in Europa [specificeert Eurocontrol](https://www.eurocontrol.int/sites/default/files/2021-07/eurocontrol-tod-manual-ed-3-0.pdf#page=125) dat het horizontale referentiesysteem WGS 84 is. In de [handreiking bij deze specificatie](https://www.eurocontrol.int/sites/default/files/publication/files/20130204-do-spec-vol.2-v1.0.pdf#page=16) wordt aangegeven dat WGS 84 voor deze toepassing wordt gelijkgesteld aan ITRF2000 op epoche 2000.0.
</div>

Indien de publicatiedatum van de dataset wordt gekozen als epoche voor de transformatie worden bij regelmatige updates (bijvoorbeeld jaarlijks) automatisch de WGS 84/ITRS coördinaten worden bijgesteld als gevolg van de platentektoniek. Wanneer als epoche de (gemiddelde) datum van de inwinning van de dataset, komen de coördinaten gemiddeld het best overeen met de WGS 84/ITRS coördinaten op het moment van inwinning.



