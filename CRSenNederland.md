## CRS-en in Nederland
Voor uitwisseling en visualisatie kunnen in Nederland meerdere CRS-en worden gebruikt. Voor geo-informatie die is beperkt tot land en binnenwateren van Europees Nederland worden meestal het RD en NAP of het geografische ETRS89 gebruikt, voor de Noordzee en grensoverschreidende datasets wordt meestal ETRS89 gebruikt. WGS 84 is een mondiaal systeem dat in specifieke gevallen wordt gebruikt voor visualisatie. De Nederlandse Samenwerking Geodetische Infrastructuur ([[NSGI]]) is verantwoordelijk voor de definitie en realisatie van de Nederlandse CRS-en en de relatie met het Europese CRS. [[NSGI]] is een samenwerkingsverband tussen Kadaster (Rijksdriehoeksmeting), Rijkswaterstaat (NAP) en de Dienst der Hydrografie (CRS op zee). In dit hoofdstuk worden de belangrijkste CRS-en en hun relaties kort geïntroduceerd en toegelicht, uitgebreide informatie over de achtergrond van de relatie tussen RD (NAP) en ETRS89 is beschikbaar in de publicatie *De geodetische referentiestelsels van Nederland* [[NCG-GR-43]].

<div class="note">
Lezer verwijzen naar bijlage over CRS-en (geografisch, geprojecteerd )
</div>

#### ETRS89, ITRS en ETRF2000
<!-- Status ETRS89 -->

Het Europese ETRS89 (European Terrestrial Reference System 1989) is sinds 1 oktober 2000 het officiële driedimensionale coördinatenstelsel van Nederland. Het Europese driedimensionale stelsels is daarmee ook het nationale driedimensionale stelsel. Nationale coördinatensystemen in Europa zijn gekoppeld aan ETRS89. 

<!-- Gebruik ETRS89 -->

ETRS89 wordt gebruikt voor uitwisseling van Europese geo-informatie in het kader van INSPIRE. Geo-informatie in geografische ETRS89-coördinaten kan niet worden gevisualiseerd op een papieren kaart of een kaart op een plat computerscherm zonder kaartprojectie, omdat deze coördinaten refereren naar een 3D ellipsoïde. INSPIRE raadt voor het projecteren van ETRS89, afhankelijk van de toepassing, een aantal kaartprojecties aan. Daarnaast zijn voor toepassing binnen het Europese deel van Nederland, inclusief de Nederlandse Exclusieve Economische Zone (EEZ) van de Noordzee, RD-coördinaten zeer geschikt als kaartprojectie voor visualisatie van geo-informatie in ETRS89-coördinaten. De relatie tussen ETRS89 en RD/NAP is vastgelegd in de procedure [[RDNAPTRANS™]].

<div class="advisement">
_ADVIES_ Gebruik voor visualisatie van ETRS89 data een aanbevolen kaartprojectie. Aanbevolen projecties zijn de RD-projectie voor Nederland inclusief de Exclusieve Economische Zone of INSPIRE-projecties voor groter gebieden binnen Europa.
</div>

<!-- Realisaties ETRS89 -->

[[EUREF]] is de organisatie die verantwoordelijk is voor de definitie en realisatie van ETRS89. ETRS89 is gekoppeld aan de Euraziatsche plaat en afgeleid van het International Terrestrial Reference System (ITRS). De Euraziatische plaat verschuift met circa 2.5 centimeter per jaar, waardoor de relatie tussen ETRS89 en ITRS-realisaties (zoals WGS 84) en dus de coördinatentransformatie tijdsafhankelijk is. ITRS wordt onderhouden door de IERS (International Earth Rotation Service). Coördinaten in ETRS89 en ITRS op het tijdstip 1989.0 zijn hetzelfde. Door de koppeling van ETRS89 aan de Euraziatische plaat wordt de gemiddelde tektonische beweging van het stabiele deel van Europa geëlimineerd en is de verandering van coördinaten in de tijd voor veel toepassingen binnen Europa te verwaarlozen. De realisaties van ETRS89 worden ook gebruikt voor wetenschappelijke doeleinden en verbeteren continue. Als voorbeeld: het verschil tussen de door veel landen gebruikte realisatie ETRF2000 en de recentere realisatie ETRF2014 kan oplopen tot 7 centimeter. 

<!-- Eenduidig gebruik ETRF2000 als ETRS89 realisatie voor geo-informatie -->

Om verschillen tussen implementaties van ETRS89 voor de opslag en uitwisseling tussen landen te voorkomen adviseert EUREF het gebruik van de realisatie ETRF2000 voor het vastleggen van geo-informatie [[EUREF-TN1]]. In Nederland wordt ETRS89 gerealiseerd met behulp van het Actief GNSS Referentiesysteem voor Nederland (AGRS.NL) en sinds de realisatie van 2002 gekoppeld aan de ETRF2000 realisatie van ETRS89. Bij de realisatie hoort altijd een epoche. De ETRF2000 realisatie op basis van de AGRS.NL data uit 2010 heeft bijvoorbeeld epoche 2010.5 en noemen we AGRS2010. 

Voor uitwisseling van geo-informatie in ETRS89 wordt dus geadviseerd om ETRF2000 te gebruiken. Waar hoge nauwkeurigheid is vereist is de aanbeveling om ook als CRS ook expliciet ETRF2000 als realisatie van ETRS89 te benoemen, omdat verschillen met andere ETRS89-realisatie kunnen oplopen tot meerdere centimeters. Voor veel toepassingen mogen de snelheden en verschillen tussen de ETRF2000 realisaties van ETRS89 binnen Nederland verwaarloosd worden voor coördinaten in het horizontale vlak. Voor toepassingen waarbij een nauwkeurige hoogte van belang is kunnen verticale snelheden wel van belang zijn, bij twijfel is de aanbeveling om hierover advies te vragen aan de NSGI. 

<div class="advisement">
_ADVIES_ Specificeer voor datasets met een nauwkeurigheid op centimeter niveau als CRS de ETRS89-realisatie. Voor Nederland is dit sinds 2002 ETRF2000 (EPSG-9067 (2D) of EPSG-7931 (3D)). Voor nauwkeurige hoogtes is het advies ook het tijdstip (epoche) te vermelden waarop de realisatie geldig is, bijvoorbeeld 2010.5 bij aansluiting aan AGRS2010.
</div>

Voor inwinning van geo-informatie met GNSS-metingen (GPS, Galileo, GLONASS en BeiDou) certificeert de NSGI GNSS-dienstverleners. Bij gebruik van gecertificeerde diensten voor GNSS-metingen geeft zekerheid dat de metingen direct eenduidig gekoppeld zijn aan ETRF2000 volgens de actuele AGRS.NL realisatie. Het gebruik van gecertificeerde diensten wordt vaak opgenomen in productspecificaties, bestekken en handboeken.

<div class="advisement">
_ADVIES_ Specificeer voor eenduidge koppeling aan het Nederlandse CRS dat bij inwinning met GNSS gebruik moet worden gemaakt van gecertificeerde GNSS-diensten.
</div>


<mark>VOORBEELD GEVEN? bijvoorbeeld LVB?,  Dat het speelt bij bijv. inwinning geoinformatie, maar tegenwoordig ook bij bijv. precisielandbouw (en dat het in die nieuwe domeinen minder vaak goed gaat dan in de traditionele)?</mark>

Opslag van geo-informatie in ETRS89 is ook mogelijk en wordt ondersteund in veel bestandsformaten en ruimtelijk databases.
#### RD en NAP

<!-- Gebruik RD en NAP -->

Voor opslag, uitwisseling en visualisatie van geo-informatie op land en binnenwateren van het Europese deel van Nederland worden voor het horizontale vlak (2D) meestal coördinaten in het Nederlandse Stelsel van de Rijksdriehoeksmeting (RD) gebruikt. Voor het verticale vlak zijn hoogten ten opzichte van Normaal Amsterdams Peil (NAP) de officiële en meest gebruikte hoogten. RD coördinaten zijn cartetisch in meters in een platvlak. Doordat RD en NAP in meters zijn en de RD-projectie minimale vervormingen geeft kan eenvoudig worden gerekend met deze coördinaten, voor nauwkeurige berekeningen van afstanden en oppervlakten correctieformules beschikbaar of kunnen complexere formules worden gebruikt op de ellipsoïde (deze zijn in GIS-paketten vaak standaard geïmplementeerd). 

De beheerders en gebruikers van bestanden hebben bij de introductie van ETRS89 aangegeven RD te willen handhaven, maar wel graag een koppeling te zien met ETRS89. In 2000 is een nieuwe definitie geïntroduceerd waardoor het RD-stelsel een transformatie van de ETRS89-realisatie is. Het onderhouden van referentiepunten voor ETRS89 in Nederland en de omzetting naar RD-coördinaten zijn wettelijke taken van het Kadaster binnen NSGI. NAP wordt bepaald door de gepubliceerde hoogtes van NAP-peilmerken, hetgeen een wettelijke verantwoordelijkheid is van Rijkswaterstaat binnen NSGI. 

<!-- Waarom RDNAPTRANS en relatie ETRS89 -->

Bij de koppeling tussen ETRS89 en RD in de jaren 90 werden systematische verschillen gevonden. Deze verschillen zijn gemodelleerd in een correctiegrid, zodat bij de introductie van ETRS89 de RD-coördinaten niet wijzigden. Dit correctiegrid is onderdeel van de procedure RDNAPTRANS™ die wordt gebruikt voor het omzetten van ETRS89 naar RD/NAP en vice-versa. Ellipsoïdische hoogten in ETRS89 kunnen met het quasi-geoïde model naar NAP worden getransformeerd met een precisie die hoger is dan de ETRS89-coördinaten die met de meeste GNSS-metingen zijn verkregen. Deze transformatie is onderdeel van de procedure RDNAPTRANS™. RDNAPTRANS™ kent verschillende versies in veel (oudere) GIS-paketten is RDNAPTRANS™ niet volledig geïmplementeerd wat fouten op decimeterniveau oplevert. De NSGI publiceert de actuele procedure RDNAPTRANS™ en transformatievalidatieservice op haar [website]([[NSGI]]). Voor de transformatie tussen RD/NAP en ETRS89 met gebruik van de RDNAPTRANS procedure is tevens API beschikbaar bij de NSGI. Voorbeelden van implementatie van RDNAPTRANS in software wordt gegeven in de paragraaf [CRS in software](#crs-in-software).

<div class="advisement">
_ADVIES_ (of _EIS_?) Voor de uitwisseling van geo-informatie binnen Europa is het nadrukkelijke advies om altijd de weg via ETRS89 te kiezen. Bij gebruik van de actuele RDNAPTRANS™ procedure is daarbij voor het Nederlandse deel een nauwkeurigheid op centimeterniveau gewaarborgd. 
</div>

#### <mark>Hoogte systeem op zee</mark>

#### WGS 84

<!-- Status WGS 84 -->

Het World Geodetic System 1984 (WGS 84) is het wereldwijde driedimensionale CRS dat wordt gebruikt door het Amerikaanse GNSS-systeem GPS. Toegang tot WGS 84 is in Nederland alleen mogelijk via het stand-alone gebruik van de GPS-satellieten. WGS 84-posities kunnen daarom alleen op meterniveau m.b.v. GPS-metingen worden verkregen. 

<!-- WGS 84 is niet eenduidig -->

Voor de realisaties van WGS 84 zijn in het verleden verschillende strategieën gebruikt waarbij een beperkt aantal stations wereldwijd zijn gebruikt. Hierdoor zijn er verschillen op decimeter niveau tussen de realisaties.  Voor nauwkeurige eenduidige definitie van het CRS is het daarom nodig een specifieke realisatie van WGS 84 te vermelden (bijvoorbeeld WGS 84 (G2139), EPSG:9755). Sinds 1994 is WGS 84 indirect gekoppeld aan ITRS. WGS 84 en ITRS-realisaties op hetzelfde epoche komen momenteel op centimeterniveau overeen. Het verschil tussen WGS85/ITRS en ETRS89 op 1 januari 2025 is ongeveer 88 centimeter, dit neemt toe met 2,4 centimeter per jaar.

In de praktijk wordt vaak over WGS 84 gesproken, ook als het onderliggende CRS eigenlijk ITRS of ETRS89 is. WGS 84 wordt dan ook niet aanbevolen voor uitwisseling van data. Voor visualisatie op het web ondersteunt de tooling vaak direct kaartprojecties op basis van WGS 84. OGC richtlijnen bevelen WGS 84 aan voor laagdrempelige visualisatie van geo-data op het web. <mark style="background-color: Chartreuse">Vanwege het niet eenduidige gebruik van WGS 84 wordt geadviseerd data alleen te visualiseren in WGS 84 wanneer de toepassing geen hoge nauwkeurigheid vereisen</mark>.

<!--Strategieën gebruik WGS 84 bij bron in RD of ETRS89 -->

Wanneer na zorgvuldige afweging toch gebruik wordt gemaakt van WGS 84 bij uitwisseling en visualisatie van data waarbij de bron in RD of ETRS89 is, zijn verschillende strategieën mogelijk die in de volgende paragraven worden beschreven.
##### WGS 84 gelijkstellen aan ETRS89

Wanneer het beoogd gebruik van de data bestaat uit visualisatie of combinatie met andere datasets kan worden gekozen om WGS 84 en ETRS89 aan elkaar gelijk te stellen. Dit is de standaard implementatie in meerdere GIS-paketten, omdat zonder expliciete melding van de WGS 84 en ETRS89 realisaties de EPSG-parameters voor de transformatie een nultransformatie geven.
##### Tijdsafhankelijke transformatie van ETRS89 naar WGS 84

Wanneer de dataspecificatie expliciet een realisatie van WGS 84 benoemd, of data gecombineerd wordt met de locatieinformatie van de eindgebruiker kan worden gekozen de transformatie tussen ETRS89 en WGS 84 uit te voeren op voor een specifieke realisatie op een specifiek epoche. 

Voor Nederlandse data mag voor ETRS89 de realisatie ETRF2000 worden gekozen. Wanneer de WGS 84 realisatie niet is gespecificeerd wordt dan de meest recente realisatie gekozen (WGS 84 (G1762), EPSG:9057). 

Om te kunnen transformeren worden de door [[EUREF]] gepubliceerde tijdsafhankelijke transformatieparameters van ETRF2000 naar ITRS gebruikt [[EUREF-TN1]] die ook in EPSG zijn opgenomen. Bij deze transformatie wordt de WGS 84-realisatie dan gelijkgesteld aan de bijbehorende ITRS-realisatie (ITRF2014 voor WGS 84 (G2139)). De keuze van het epoche kan voortkomen uit de specificatie, wanneer geen epoche is gespecificeerd wordt zijn er een aantal mogelijkheden:

1. Kies het epoche 1989.0, dit is het epoche dat overeenkomt met de definitie van ETRS89 en geeft kleine coördinaatverschillen tussen WGS 84 en ETRS89;
2. Kies de publicatiedatum van de dataset, zodat bij regelmatige updates (bijvoorbeeld) jaarlijks de WGS 84 coördinaten worden bijgesteld als gevolg van de platentektoniek;
3. Kies als epoche de (gemiddelde) datum van de inwinning van de dataset, de coördinaten komen dan gemiddeld het best overeen met de WGS 84 coordinaten op het moment van inwinning.

In het informatiemodel van de BRO is gekozen voor het opnemen van de eerste en derde mogelijkheid in de waardelijst van het attribuut [Coördinaattransformatie](https://docs.geostandaarden.nl/bro/bhr-g/#detail_class_Model_Cordinaattransformatie) op te nemen.

<div class="note">
Bij gebruik van data waarbij het aangegeven CRS WGS 84 is zonder duidelijke informatie over het CRS van de brondata, de gebruikte transformaties en/of het epoche moet de gebruiker er rekening mee houden dat de data systematische fouten in de orde van meters kan bevatten. 
</div>

### Relaties tussen CRS-en

- Vereenvoudigde versie van [Conversie en Transformatie](#conversie-en-transformatie) en [Relaties](#overzicht-conversie-en-transformaties)

