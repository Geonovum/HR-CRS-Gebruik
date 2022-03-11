## Inleiding

### Vooraf: waarom een Geonovum Handreiking over CRS

In de keten van inwinning via verwerking, opslag en ontsluiting tot gebruik, richt Geonovum zich traditioneel gezien op standaardisatie die uitwisseling en gebruik van geo-informatie beter mogelijk maakt. Aandacht voor het juiste gebruik van coördinaatreferentiesystemen (CRS) is er traditioneel voornamelijk bij de inwinning van geodata. Op dit vlak spelen het Kadaster (als beheerder van RD), Rijkswaterstaat (als beheerder van NAP) en de Hydrografische Dienst (primair gericht op het mariene deel van Nederland) een belangrijke rol, die ook tot uiting komt in de [Nederlandse Samenwerking Geodetische Infrastructuur (NSGI)](https://nsgi.nl/). 

In de laatste jaren zien we dit veranderen: het volstaat niet langer om alleen aan de voorkant van de keten (bij de landmeetkundige inwinning) aandacht te hebben voor correct omgaan met verschillende CRS-en; inmiddels is dit in elke fase van de keten noodzakelijk, inclusief de stappen rond uitwisseling en gebruik van geo-informatie. We zien twee belangrijke triggers in deze ontwikkeling:

* Door de toenemende aandacht voor het gebruik van ruimtelijke data in laagdrempelige toepassingen via de standaarden van het web, bijvoorbeeld door de opkomst van populaire webtools als Mapbox, Leaflet en Google Maps, en de aandacht daarvoor in o.a. de Spatial Data on the Web Best Practices ([SDW-BP)](https://www.w3.org/TR/sdw-bp/).
* Door toenemende integratie van data (over grenzen van domeinen, over grenzen van land/zee, over landsgrenzen) moet data in verschillende CRS-en goed met elkaar gecombineerd kunnen worden. Dit integrale werken zie je terug bij gebruikers die analyses uitvoeren, maar ook bij integrale voorzieningen als het Digitaal Stelsel Omgevingswet (DSO) (waarin domeinen die traditioneel met verschillende CRS-en werken, nu door bundeling onder één wet expliciet met elkaar in samenhang worden gebracht) en de Basisregistratie Ondergrond (BRO).

Hiermee is een geodetisch onderwerp als CRS in toenemende mate ook een geo-informatie / GIS-onderwerp aan het worden, wat betekent dat er aandacht nodig is voor hoe je op passende wijze omgaat met dit onderwerp in informatiemodellen, in uitwisselmechanismes en -formaten en in het ontwerp van landelijke voorzieningen. Hiermee is aandacht voor het goed omgaan met CRS-vraagstukken onderdeel geworden van het werk van Geonovum, waarbij adviezen van de NSGI en aanbevelingen uit de Spatial Data on the Web Best Practices de basis vormen. In deze Handreiking richten we ons op eenieder die actief is op de onderwerpen uitwisseling en gebruik van geo-informatie en daarbij -mogelijk- rekening moet houden met CRS gebruik. Op deze manier willen we adviezen van de NSGI, aanbevelingen uit de Spatial Data on the Web Best Practices en inzichten die recent binnen o.a. DSO en BRO op dit vlak opgedaan zijn, aan elkaar relateren en breed toegankelijk maken. De Handreiking is niet al omvattend en voor sommige onderdelen is de scope beperkt tot 2D-vector data.

<div class="advisement">
_AANBEVELING_ Wanneer er na het lezen van deze Handreiking nog onduidelijkheden bestaan of er bijvoorbeeld vragen over CRS-en zijn die buiten de scope van de Handreiking vallen, raden we sterk aan om contact te zoeken met Geonovum én de experts van de [Nederlandse Samenwerking Geodetische Infrastructuur](https://www.nsgi.nl/).
</div>

### Introductie coördinaatreferentiesystemen (CRS)

Geo-informatie is direct gekoppeld aan een locatie op aarde. De wijze waarop die koppeling wordt gelegd, wordt beschreven in het coördinaatreferentiesysteem (CRS) waarin coördinaten van een locatie worden vastgelegd. RD, ETRS89 en WGS 84 zijn bekende voorbeelden van CRS-en. 

CRS-en nemen vaak de vorm van de aarde als uitgangspunt om locaties vast te leggen. Maar het is ingewikkeld om de vorm van de aarde exact te beschrijven en om de werkelijkheid van het gekromde aardoppervlak in een plat vlak (kaart) weer te geven. Voor het weergeven van geo-informatie in een plat vlak worden kaartprojecties gebruikt. De weergave in het platte vlak is niet mogelijk zonder vervormingen, die afhankelijk zijn van de keuze van de kaartprojectie. Een kaartprojectie kan hoekgetrouw, afstandsgetrouw en/of oppervlakte getrouw zijn, maar niet alle drie eigenschappen tegelijk hebben. Een kaartprojectie bevat dus altijd minimaal een vervorming in hoeken, afstanden of oppervlakten. Dat wil zeggen dat gelijke hoeken, afstanden of oppervlakten in werkelijkheid op de kaart niet allemaal gelijk aan elkaar zijn. De vraag welke projectie het meest geschikt is, hangt af van de beoogde toepassing. Meer achtergrondinformatie is te vinden in 'Een kleine introductie in GIS', onderdeel van de documentatie van het Open Source GIS programma QGIS, o.a. dit stuk over [kaartprojecties](https://docs.qgis.org/3.16/nl/docs/gentle_gis_introduction/coordinate_reference_systems.html#overview).

#### Indeling van CRS-en

De gebruikte CRS-en voor de opslag en uitwisseling van geo-informatie binnen de scope van deze handreiking zijn onder te verdelen in verschillende groepen. Op basis de indeling in [EPSG Guidance Note 7-1](https://epsg.org/guidance-notes.html) en [ISO 19111:2019](https://www.iso.org/obp/ui/#iso:std:iso:19111) / [OGC Abstract Specification Topic 2: Referencing by coordinates](http://docs.opengeospatial.org/as/18-005r4/18-005r4.html) kunnen vier groepen worden onderscheiden: 

* **Geografische CRS-en** geven geografische coördinaten in graden (2D breedte en lengte (Engels: latitude en longitude) en voor 3D ook hoogte) ten opzichte van een ellipsoïdisch model van het aardoppervlak. Voorbeelden zijn het Europese ETRS89, het wereldwijde ITRF2014 en WGS 84. Geografische CRS-en, zoals ETRS89 en WGS 84, kunnen niet gevisualiseerd worden in een plat vlak zonder een kaartprojectie. 
* **Geprojecteerde CRS-en** presenteren geo-informatie op een plat vlak in cartesische (x en y) coördinaten. Een geprojecteerd CRS is een afgeleide van een geografisch CRS, waarbij voor het afbeelden in het platte vlak een kaartprojectie wordt gebruikt. Een voorbeeld hiervan is het Nederlandse RD met als basis geografisch CRS RD-Bessel. 
* **Verticale CRS-en** voor de vastlegging van hoogte en diepte ten opzichte van een referentievlak. Dit referentievlak is vaak gebaseerd op de richting van de zwaartekracht en valt normaal gesproken niet samen met oppervlak van een ellipsoïde. Bij een op de richting van de zwaartekracht gebaseerd referentievlak stroomt tussen twee punten met gelijke hoogte geen water, tussen twee punten met gelijke ellipsoïdische hoogte stroomt meestal wel water. Voorbeelden van verticale CRS-en zijn het NAP en het LAT.
* **Samengestelde CRS-en** in het Engels 'Compound CRS' zijn samengestelde CRS-en, bijvoorbeeld RDNAP dat is samengesteld uit het geprojecteerde CRS RD en het verticale CRS NAP.

#### Realisatie van het CRS

De definitie van een CRS geeft een verzameling afspraken over bijvoorbeeld de oorsprong, oriëntatie, schaal, naamgeving van de coördinaatassen. De realisatie van het CRS is het vaststellen van coördinaten aan referentiepunten volgens de definitie van het CRS. Het NAP wordt gerealiseerd door hoogten van punten (peilmerken) te bepalen volgens de definitie van NAP op basis van (waterpas)metingen. De NAP-peilmerken dienen als referentiepunten voor gebruik van de NAP-realisatie voor landmeters, waterschappen en andere gebruikers. Tussen verschillende realisaties van een CRS bestaan verschillen door gebruik van andere metingen, rekentechnieken en punten. De eerste realisatie van WGS 84 in 1987 werd bijvoorbeeld berekend met behulp van Doppler waarnemingen met het TRANSIT satellietsysteem, terwijl de realisatie van 2021 is bepaald op basis van GPS-waarnemingen. Het verschil tussen deze WGS 84 realisaties is meer dan 1 meter.

#### Gebruik en keuze van het CRS in de praktijk

In de praktijk worden voor een dataset in de verschillende stappen van de keten (inwinning, verwerking, uitwisseling en visualisatie) regelmatig verschillende CRS-en gebruikt. De keuze van het meest geschikte CRS hangt af van de toepassing en het gebied waarop de data betrekking heeft. Voor afbeelding van geo-data van alleen Nederland is een ander CRS geschikt dan voor afbeelding van heel Europa of de hele wereld. In veel gevallen wordt de dataset opgeslagen in één CRS. Bij uitwisseling en visualisatie van geo-informatie is het dus van belang om een CRS te kiezen dat geschikt is voor de (gebruikers)toepassing. [Spatial Data on the Web Best Practices (SDW-BP)](https://www.w3.org/TR/sdw-bp/) raden aan om data voor visualisatie ook te publiceren in wereldwijd bruikbare CRS-en, omdat de gebruikerstoepassing niet altijd bekend is. Vanuit informatiekundig oogpunt gezien, heeft het toepassen van wereldwijd bruikbare CRS-en als voordeel dat data op deze manier eenvoudiger bruikbaar wordt voor visualisatie door niet-geospecialisten. Maar deze CRS-en zijn bedoeld voor gebruik op kleine (wereldwijde) schaal en niet voor hoognauwkeurige, grootschalige toepassingen. Vanuit geodetisch oogpunt gezien, kleven aan het gebruik van deze wereldwijde CRS-en daarom risico's op systematische afwijkingen of inconsistenties, wanneer de data niet alleen gebruikt wordt voor visualisatie of wanneer datasets worden gecombineerd, zie ook de paragraaf over [transformatie tussen ETRS89 en ITRS/WGS 84](#transformatie-tussen-etrs89-en-itrs-wgs-84). Eenvoudige berekening van afstanden en oppervlakten is bijvoorbeeld niet mogelijk bij gebruik van de aanbevolen wereldwijd bruikbare CRS-en. Aangezien beide invalshoeken valide argumenten aanvoeren, ligt het voor de hand om bij het aanbieden van data te kiezen voor een en-en benadering: faciliteer zowel het laagdrempelige gebruik als het nauwkeurigere gebruik.

<div class="example">
_VOORBEELD_ 
Het gebruik van CRS-en in de keten van inwinning tot uitwisseling en visualisatie van de Basisregistratie Grootschalige Topografie (BGT) kan als volgt worden samengevat:

[![](https://mermaid.ink/img/pako:eNqFk8tuwjAQRX9l5BWViqoAixZVSESJUFX6UELpImFh4oG4JHbkOEUt8O91HqBCQd3d3Dm-nhkrGxJJhqRPlopmMYy9UADkxbz-tJUUsSwYqiP7Qay5EFwsSxdgaAUhcSeef3sH93M1gNbo2ffb3uTxKiQzqKEK7BjQcxpoXESxXkgtS6pJ6hpgLFeUJg00oVH8laJWHGvnCVHPqWD7QyjYUW9TVGtUK9OcKYHM8oQ2bdqB5_w-cnrS3GxyMeEfK4SplOqbYzUkOcFeqlAYT-sKgGP9G-1QTbOEmnlVCq1X56XczfncsnhI_id4hHNV8NXJ-4RkhBJ8VJ88wnyf5VpB_UjNst3OPtzobvA-8uG2N7vQvlyLRFIGrWHGb4ZZdnVI7Z1vcWi12wO7Up2D6u6VbcT2jes1z3OzcbHcOlbpO9bfQuX_sV3rgt-54Hcv-D1yTVJUKeXM_AabkgqJjjHFkPSNZLigRaLLeXcGLTJGNbqMa6lIf0GTHK8JLbT0v0R0MGrK4dQsMG3c3Q9UrBut)](https://mermaid-js.github.io/mermaid-live-editor/edit/#pako:eNqFk8tuwjAQRX9l5BWViqoAixZVSESJUFX6UELpImFh4oG4JHbkOEUt8O91HqBCQd3d3Dm-nhkrGxJJhqRPlopmMYy9UADkxbz-tJUUsSwYqiP7Qay5EFwsSxdgaAUhcSeef3sH93M1gNbo2ffb3uTxKiQzqKEK7BjQcxpoXESxXkgtS6pJ6hpgLFeUJg00oVH8laJWHGvnCVHPqWD7QyjYUW9TVGtUK9OcKYHM8oQ2bdqB5_w-cnrS3GxyMeEfK4SplOqbYzUkOcFeqlAYT-sKgGP9G-1QTbOEmnlVCq1X56XczfncsnhI_id4hHNV8NXJ-4RkhBJ8VJ88wnyf5VpB_UjNst3OPtzobvA-8uG2N7vQvlyLRFIGrWHGb4ZZdnVI7Z1vcWi12wO7Up2D6u6VbcT2jes1z3OzcbHcOlbpO9bfQuX_sV3rgt-54Hcv-D1yTVJUKeXM_AabkgqJjjHFkPSNZLigRaLLeXcGLTJGNbqMa6lIf0GTHK8JLbT0v0R0MGrK4dQsMG3c3Q9UrBut)

Bij de inwinning van de BGT worden ETRS89, RD en lokale CRS-en gebruikt. Voor de opslag bij bronhouders, de Landelijke Voorziening en het dataplatform wordt voor de uitwisseling het CRS RD gebruikt. Voor uitwisseling tussen dataplatform en gebruiker worden het Nederlandse RD, het Europese ETRS89 en het wereldwijde  WGS 84 gebruikt. Hierbij zijn voor de visualisatie van ETRS89 en WGS 84 verschillende kaartprojecties mogelijk.
</div>

Eenduidig gebruik van CRS-en [coördinatentransformaties](#coordinaattransformatie-datumtransformatie-en-coordinaatconversie) voorkomt systematische afwijkingen bij gebruik van meerdere datasets. Eenduidig gebruik is mogelijk door het maken van afspraken over het gebruik van eenduidige coördinatentransformaties. Bij minder precieze coördinatentransformaties kunnen (soms visueel toelaatbare) verschillen ontstaan die afhankelijk zijn van de keuze van CRS en implementatie.

[Hoofdstuk 4](#aandachtspunten-voor-crs-gebruik) gaat dieper in op de aandachtspunten voor CRS-gebruik.

### Leeswijzer

Deze Handreiking heeft als doel om gebruikers vanuit het GIS- / geo-informatiewerkveld te voorzien van adviezen hoe om te gaan met met CRS-en bij uitwisseling en visualisatie van geo-informatie, o.a. in de context van Landelijke Voorzieningen en vergelijkbare digitale stelsels. De Handreiking gaat niet in op de geschiktheid van CRS-en voor het uitvoeren van nauwkeurige berekeningen of de wijze waarop deze kunnen worden uitgevoerd.

<div class="example">
_VOORBEELD_ 
In het voorbeeld van de BGT gaat het dus om adviezen voor het omgaan met CRS-en bij:

* uitwisseling tussen Bronhouder, Landelijke Voorziening en Dataplatform;
* uitwisseling van Dataplatform naar Gebruiker in verschillende CRS-en en formaten;
* specificatie van CRS in informatiemodellen en datasets;
* visualisatie door de gebruiker.

</div>

Het hoofdstuk [Achtergrond: Gebruikte CRS-en in Nederland](#achtergrond-gebruikte-crs-en-in-nederland) geeft een overzicht van de huidige veel gebruikte CRS-en in Nederland en de relatie met andere CRS-en. Het hoofdstuk is gericht op nieuwkomers in de geo-wereld, data aanbieders, GIS-gebruikers en modelleurs die hun kennis willen opfrissen.

Het hoofdstuk [Aandachtspunten voor CRS-gebruik](#aandachtspunten-voor-crs-gebruik) gaat in op de aandachtspunten voor de keuze, specificatie en gebruik van de in Nederland gebruikte CRS-en voor verschillende toepassingen bij modelering, uitwisseling, INSPIRE en gebruik in software.
