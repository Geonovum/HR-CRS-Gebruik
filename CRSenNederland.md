## CRS-en in Nederland
Voor uitwisseling en visualisatie kunnen in Nederland meerdere CRS-en worden gebruikt. In dit hoofdstuk worden de belangrijkste CRS-en en hun relaties geïntroduceerd en toegelicht.

<div class="note">
Lezer verwijzen naar bijlage over CRSen (geografisch, geprojecteerd )
</div>

### CRS-en in Nederland 

De Nederlandse Samenwerking Geodetische Infrastructuur ([[NSGI]]) is verantwoordelijk voor de definitie en realisatie van de Nederlandse CRS-en en de relatie met het Europese CRS. [[NSGI]] is een samenwerkingsverband tussen Kadaster (Rijksdriehoeksmeting), Rijkswaterstaat (NAP) en de Dienst der Hydrografie (CRS op zee). 
#### ETRS89, ITRS en ETRF2000
Het Europese ETRS89 (European Terrestrial Reference System 1989) is sinds 1 oktober 2000 het officiële driedimensionale coördinatenstelsel van Nederland. Het Europese driedimensionale stelsels is daarmee ook het nationale driedimensionale stelsel. Nationale coördinatensystemen in Europa zijn gekoppeld aan ETRS89. 

ETRS89 wordt gebruikt voor uitwisseling van Europese geo-informatie in het kader van INSPIRE. Geo-informatie in ETRS89-coördinaten kan niet worden gevisualiseerd op een papieren kaart of een kaart op een computerscherm zonder kaartprojectie, INSPIRE raadt hiervoor een aantal kaartprojecties aan afhankelijk van de toepassing. Voor toepassing binnen het Europese deel van Nederland, inclusief de Nederlandse Exclusieve Economische Zone (EEZ) van de Noordzee, zijn RD-coördinaten zeer geschikt als kaartprojectie voor visualisatie van geo-informatie in ETRS89-coördinaten. De relatie tussen ETRS89 en RD/NAP is vastgelegd in de procedure [[RDNAPTRANS™]].

[[EUREF]] is de organisatie die verantwoordelijk is voor de definitie en realisatie van ETRS89. ETRS89 is gekoppeld aan de Euraziatsche plaat en afgeleid van het International Terrestrial Reference System (ITRS) door een tijdafhankelijke coördinatentransformatie. ITRS wordt onderhouden door de IERS (International Earth Rotation Service). Coördinaten in ETRS89 en ITRS op het tijdstip 1989.0 zijn hetzelfde. Door de koppeling van ETRS89 aan de Euraziatische plaat wordt de gemiddelde tektonische beweging van het stabiele deel van Europa geëlimineerd en is de verandering van coördinaten in de tijd voor veel toepassingen binnen Europa te verwaarlozen. De realisaties van ETRS89 worden ook gebruikt voor wetenschappelijke doeleinden en verbeteren continue. Als voor beeld het verschil tussen bijvoorbeeld ETRF2000 en ETRF2014 kan oplopen tot 7 centimeter. 

Om verschillen tussen implementaties van ETRS89 voor de opslag en uitwisseling tussen landen te voorkomen adviseert EUREF het gebruik van de realisatie ETRF2000 voor het vastleggen van geo-informatie [[EUREF-TN1]]. In Nederland wordt ETRS89 gerealiseerd met behulp van het Actief GNSS Referentiesysteem voor Nederland (AGRS.NL) en sinds de realisatie van 2002 gekoppeld aan de ETRF2000 realisatie van ETRS89. Bij de realisatie hoort altijd een epoche. De ETRF2000 realisatie op basis van de AGRS.NL data uit 2010 heeft bijvoorbeeld epoche 2010.5 en noemen we AGRS2010. 

Voor uitwisseling van geo-informatie in ETRS89 wordt dus geadviseerd om ETRF2000 te gebruiken. Waar hoge nauwkeurigheid is vereist is de aanbeveling om ook als CRS ook expliciet ETRF2000 als realisatie van ETRS89 te benoemen. Voor veel toepassingen mogen de snelheden en verschillen tussen de ETRF2000 realisaties van ETRS89 binnen Nederland worden voor coördinaten in het horizontale vlak. Voor toepassingen waarbij een nauwkeurige hoogte van belang is kunnen verticale snelheden wel van belang zijn, bij twijfel is de aanbeveling om hierover advies te vragen aan de NSGI. 

Voor inwinning van geo-informatie met GNSS-metingen (GPS, Galileo, GLONASS en BeiDou) certificeert de NSGI GNSS-dienstverleners. Bij gebruik van gecertificeerde diensten voor GNSS-metingen geeft zekerheid dat de metingen direct eenduidig gekoppeld zijn aan ETRF2000 volgens de actuele AGRS.NL realisatie. Het gebruik van gecertificeerde diensten wordt vaak opgenomen in productspecificaties, bestekken en handboeken. 

<mark>VOORBEELD GEVEN?</mark>

Opslag van geo-informatie in ETRS89 is ook mogelijk en wordt ondersteund in veel bestandsformaten en ruimtelijk databases.
#### RD-stelsel

Coördinaten in de Nederlandse Stelsel van de Rijksdriehoeksmeting (RD) zijn de meest gebruikte 2D-coördinaten op land en binnenwateren van het Europese deel van Nederland voor opslag en uitwisseling van geo-informatie (vaak ook enkele gegevens buiten dit gebied op de Noordzee, in België en Duitsland). De beheerders en gebruikers van bestanden hebben bij de introductie van ETRS89 aangegeven RD te willen handhaven, maar wel graag een koppeling te zien met ETRS89. In 2000 is een nieuwe definitie geïntroduceerd waardoor het RD-stelsel een transformatie van de ETRS89-realisatie is. Het onderhouden van referentiepunten voor ETRS89 in Nederland en de omzetting naar RD-coördinaten zijn wettelijke taken van het Kadaster. 

De verschillen in de realisatie van RD tussen de oude en de nieuwe definitie van 2000 zijn gemodelleerd in een correctiegrid, zodat bij de introductie van ETRS9 de RD-coördinaten niet wijzigden. Dit correctiegrid is onderdeel van de procedure RDNAPTRANS™ die wordt gebruikt voor het omzetten van ETRS89 naar RD/NAP en vice-versa. De NSGI publiceert de procedure RDNAPTRANS™ op haar website. 

Voor de uitwisseling van geo-informatie binnen Europa is het nadrukkelijke advies om altijd de weg via ETRS89 te kiezen. Bij gebruik van de procedure RDNAPTRANS™ is daarbij voor het Nederlandse deel een nauwkeurigheid op centimeterniveau gewaarborgd. 

Uitgebreide informatie over de achtergrond van de relatie tussen RD (NAP) en ETRS89 is beschikbaar in de publicatie De geodetische referentiestelsels van Nederland [[NCG-GR-43]].

#### NAP-stelsel

Hoogten ten opzichte van Normaal Amsterdams Peil (NAP) zijn de officiële en meest gebruikte hoogten op land en binnenwateren van het Europese deel van Nederland voor opslag en uitwisseling van geo-informatie. NAP wordt bepaald door de gepubliceerde hoogtes van de hoogtemaatstaven, hetgeen een wettelijke verantwoordelijkheid is van Rijkswaterstaat. 
Ellipsoïde hoogten in ETRS89 kunnen met het quasi-geoïde model naar NAP worden getransformeerd met een precisie die hoger is dan de ETRS89-coördinaten die met de meeste GNSS-metingen zijn verkregen. Deze transformatie is onderdeel van de procedure RDNAPTRANS™.


#### <mark>Hoogte systeem op zee</mark>

#### WGS84

Het World Geodetic System 1984 (WGS84) is het mondiale driedimensionale CRS dat wordt gebruikt door het Amerikaanse GNSS-systeem GPS. Toegang tot WGS84 is in Nederland alleen mogelijk via het stand-alone gebruik van de GPS-satellieten. WGS84-posities kunnen daarom alleen op meterniveau m.b.v. GPS-metingen worden verkregen. 

Voor de realisaites van WGS84 zijn in het verleden op verschillende strategien gebruikt waarbij een beperkt aantal stations wereldwijd zijn gebruikt. Hierdoor zijn er verschillen op decimeter niveau tussen de realisaties.  Voor nauwkeurige eenduidige definitie van het CRS is het daarom nodig een specifieke realisatie van WGS84 te vermelden (bijvoorbeeld WGS84-G1762, EPSG:9057). Sinds 1994 is WGS84 indirect gekoppeld aan ITRS. WGS84 en ITRS-realisaties op hetzelfde epoche komen momenteel op centimeterniveau overeen. Het verschil tussen WGS85/ITRS en ETRS89 op 1 januari 2025 is ongeveer 86 centimeter, dit neemt toe met 2,4 centimeter per jaar. 

In de praktijk wordt vaak over WGS84 gesproken, ook als het onderliggende CRS eigenlijk ITRS of ETRS89 is. WGS84 wordt dan ook niet aanbevolen voor uitwisseling van data. Voor visualisatie op het web ondersteunt de tooling vaak direct kaartprojecties op basis van WGS84. OGC richtlijnen bevelen WGS84 aan voor laagdrempelige visualisatie van geo-data op het web. Vanwege het niet eenduidige gebruik van WGS84 wordt geadviseerd data alleen te visualiseren in WGS84 wanneer de toepassing geen hoge nauwkeurigheid vereisen.

Wanneer na zorgvuldige afweging toch gebruik wordt gemaakt van WGS84 bij uitwisseling en visualisatie is het advies van de NSGI om WGS84 gelijk te stellen aan ETRS89, tenzij de dataspecificatie expliciet een realisatie en epoche van ITRS benoemd. Daarnaast adviseert de NSGI de informatie over het CRS van de brondata en de gekozen transformatieparameters als metadata op te nemen. Bij tijdsafhankelijke transformaties, zoals van ETRS89 naar WGS84 moet dan ook het referentieepoche worden opgenomen.

Bij gebruik van data waarbij het aangegeven CRS WGS84 is zonder duidelijke informatie over het CRS van de brondata en gebruikte transformaties moet de gebruiker er rekening mee houden dat de data systematische fouten in de orde van 1 meter kan bevatten. 

### Aandachtspunten bij gebruik van meerdere CRS-en

Wanneer voor uitwisseling en visualisatie andere CRS-en worden gebruikt dan voor de opslag zijn er een aantal aandachtspunten, de belangrijkste zijn:

- Maak gebruik van een eenduidige transformatie en conversie
- Voorkom dat geometrische of topologische verschillen ontstaan

#### Relaties tussen CRS-en

- Vereenvoudigde versie van [Conversie en Transformatie](#conversie-en-transformatie) en [Relaties](#overzicht-conversie-en-transformaties)
- RDNAPTRANS
    
#### Geometrie en topologie

- Samenvatting langelijnenadvies

