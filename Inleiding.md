## Inleiding

### Vooraf: waarom een Geonovum Handreiking over CRS
In de keten van inwinning via verwerking, opslag en ontsluiting tot gebruik, richt Geonovum zich traditioneel gezien op standaardisatie die uitwisseling en gebruik van geo-informatie beter mogelijk maakt. Aandacht voor het juiste gebruik van coördinaatreferentiesystemen (CRS) is er traditioneel voornamelijk bij de inwinning van geodata. Op dit vlak spelen het Kadaster (als beheerder van RD), Rijkswaterstaat (als beheerder van NAP) en de Hydrografische Dienst (primair gericht op het mariene deel van Nederland) een belangrijke rol, die ook tot uiting komt in de [Nederlandse Samenwerking Geodetische Infrastructuur](https://www.nsgi.nl/). 

In de laatste jaren zien we dit veranderen: het volstaat niet langer om alleen aan de voorkant van de keten (bij de landmeetkundige inwinning) aandacht te hebben voor correct omgaan met verschillende CRS-en, inmiddels is dit in elke fase van de keten noodzakelijk, inclusief de stappen rond uitwisseling en gebruik van geo-informatie. We zien twee belangrijke triggers in deze ontwikkeling:
* Door de toenemende aandacht voor het gebruik van ruimtelijke data in laagdrempelige toepassingen via de standaarden van het web, bijvoorbeeld door de opkomst van populaire webtools als Mapbox, Leaflet en Google Maps, en de aandacht daarvoor in o.a. de [Spatial Data on the Web Best Practices](https://www.w3.org/TR/sdw-bp/).
* Door toenemende integratie van data (over grenzen van domeinen heen, over grenzen van land/zee, over landsgrenzen heen) moet data in verschillende CRS-en goed met elkaar gecombineerd worden. Dit integrale werken zie je terug bij gebruikers die analyses uitvoeren, maar ook al bij integrale voorzieiningen als het Digitaal Stelsel Omgevingswet (DSO) (waarin domeinen die traditioneel met verschillende CRS-en werken, nu door bundeling onder één wet expliciet met elkaar in samenhang worden gebracht) en de Basisregistratie Ondergrond (BRO).
Hiermee is een geodetisch onderwerp als CRS in toenemende mate ook een geo-informatie / GIS-onderwerp aan het worden, wat betekent dat er aandacht nodig is voor hoe je op passende wijze omgaat met dit onderwerp in informatiemodellen, in uitwisselmechanismes en -formaten en ook in het ontwerp van landelijke voorzieningen. Hiermee is aandacht voor het goed omgaan met CRS vraagstukken onderdeel geworden van het werk van Geonovum. In deze Handreiking richten we ons op eenieder die actief is op de onderwerpen uitwisseling en gebruik van geo-informatie en daarbij -mogelijk- rekening moet houden met CRS gebruik. Op deze manier willen we adviezen van de NSGI en de inzichten die recent binnen o.a. DSO en BRO op dit vlak opgedaan zijn, breed toegankelijk maken. 

<div class="informative">
_AANBEVELING_ Wanneer er na het lezen van deze Handreiking nog onduidelijkheden bestaan, raden we sterk aan om contact te zoeken met Geonovum én met de experts in de [Nederlandse Samenwerking Geodetische Infrastructuur](https://www.nsgi.nl/).
</div>

<!--- Waarom CRS-en -->
### Introductie coördinaatreferentiesystemen (CRS)
Geo-informatie is direct gekoppeld aan een locatie op aarde. De wijze waarop die koppeling wordt gelegd, wordt beschreven in het coördinaatreferentiesysteem (CRS) waarin coördinaten van een locatie worden vastgelegd. RD, ETRS89 en 3D WGS 84 zijn bekende voorbeelden van CRS-en. 

De gebruikte CRS-en voor de opslag en uitwisseling van geo-informatie zijn in het algemeen onder te verdelen in drie groepen: 
* **Geprojecteerde CRS-en** presenteren geo-informatie op een plat vlak in rechthoekige (x en y) coördinaten. Een voorbeeld hiervan is het Nederlandse RD. 
* **Geografische CRS-en** geven geografische coördinaten in graden (2D breedte en lengte (engels: latitude en longitude) en voor 3D ook hoogte) ten opzichte van een ellipsoïdisch model van het aardoppervlak. 
* **Geocentrische coördinaten** komen minder vaak voor bij opslag en gebruik van geo-informatie. Geocentrische coördinaten geven 3D coördinaten (X, Y en Z) ten opzichte van het middelpunt van de aarde. Het is belangrijk om te realiseren dat de geocentrische X en Y coördinaten niet in het platte vlak liggen, zoals geprojecteerde x en y coördinaten dat wel doen.

<div class="note">
HIER NOG IETS OVER HOOGTE en COMPOUND SYSTEMEN (ellipsidisch vs fysisch)
</div>


CRS-en nemen vaak de vorm van de aarde als uitgangspunt om de locaties vast te leggen. Maar het is ingewikkeld om de vorm van de aarde exact te beschrijven en de werkelijkheid van het gekromde aardoppervlak in een plat vlak (kaart) weer te geven. Voor het weergeven van geo-informatie in een plat vlak worden kaartprojecties gebruikt. De weergave in het platte vlak is niet mogelijk zonder vervormingen die afhankelijk zijn van de keuze van de kaartprojectie. Een kaartprojectie kan hoekgetrouw, afstandsgetrouw en/of oppervlakte getrouw zijn, maar niet alle drie eigenschappen tegelijk hebben. Een kaartprojectie bevat dus altijd minimaal een vervorming in hoeken, afstanden of oppervlakten. Dat wil zeggen dat gelijke hoeken, afstanden of oppervlakten in werkelijkheid op de kaart niet allemaal gelijk aan elkaar zijn. De vraag welke projectie het meest geschikt is, hangt af van de beoogde toepassing. Meer achtergrondinformatie is te vinden in 'Een kleine introductie in GIS', onderdeel van de documentatie van het Open Source GIS programma QGIS, o.a. dit stuk over [kaartprojecties](https://docs.qgis.org/3.16/nl/docs/gentle_gis_introduction/coordinate_reference_systems.html#overview).

In de praktijk worden voor een dataset in de verschillende stappen van de keten (inwinning, verwerking, uitwisseling en visualisatie) regelmatig verschillende CRS-en gebruikt. De keuze van het meest geschikte CRS hangt af van de toepassing en het gebied. Voor afbeelding van geo-data van alleen Nederland is een ander CRS geschikt dan voor afbeelding van heel Europa of de hele wereld. In veel gevallen wordt de dataset opgeslagen in één CRS. Bij uitwisseling en visualisatie van geo-informatie is het dus van belang om een CRS te kiezen dat geschikt is voor de (gebruikers)toepassing. Spatial Data on the Web Best Practices [[SDW-BP]] raden aan om data voor visualisatie ook te publiceren in wereldwijd bruikbare CRS-en, omdat de gebruikerstoepassing niet altijd bekend is. Vanuit informatiekundig oogpunt gezien, heeft het toepassen van wereldwijd bruikbare CRS-en als voordeel dat data op deze manier eenvoudiger bruikbaar wordt voor visualisatie door niet-geospecialisten. Maar deze CRS-en zijn bedoeld voor gebruik op kleine (wereldwijde) schaal en niet voor hoognauwkeurige, grootschalige toepassingen. Vanuit geodetisch oogpunt gezien, kleven aan het gebruik van deze wereldwijde CRS-en daarom risico's op systematische afwijkingen of inconsistenties, wanneer de data niet alleen gebruikt wordt voor visualisatie of wanneer datasets worden gecombineerd. Eenvoudige berekening van afstanden en oppervlakten is bijvoorbeeld niet mogelijk bij gebruik van de aanbevolen wereldwijd bruikbare CRS-en. Aangezien beide invalshoeken valide argumenten aanvoeren, ligt het voor de hand om bij het aanbieden van data te kiezen voor een en-en benadering: faciliteer zowel het laagdrempelige gebruik als het nauwkeurigere gebruik.

<div class="example">
_VOORBEELD_ 
Het gebruik van CRS-en in de keten van inwinning tot uitwisseling en visualisatie van de Basisregistratie Grootschalige Topografie (BGT) kan als volgt worden samengevat:

    [![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggTFJcbiAgc3ViZ3JhcGggQnJvbmhvdWRlclxuICBzdWJncmFwaCBJbndpbm5pbmdcbiAgICBBMVtcIkVUUlM4OSA8YnI-IChHTlNTLVJUSylcIl0gXG4gICAgICAgIEEyW1wiUkQgPGJyPiAoTHVjaHRmb3RvKVwiXVxuICAgIEEzW1wiTG9rYWFsIDxicj4gKFRhY2h5bWV0cmllIDxicj4gTWVldGJhbmQpXCJdXG4gIGVuZFxuICBzdWJncmFwaCBWZXJ3ZXJraW5nIGVuIG9wc2xhZ1xuICAgIEJbUkRdXG4gIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggXCJMYW5kZWxpamtlIFZvb3J6aWVuaW5nXCJcbiAgc3ViZ3JhcGggXCJPcHNsYWcgTFZcIlxuICAgIEQxW1JEXVxuICBlbmRcbiAgZW5kXG4gIHN1YmdyYXBoIFwiRGF0YXBsYXRmb3JtIChQRE9LKVwiXG4gIHN1YmdyYXBoIFwiT3BzbGFnIFBET0tcIlxuICAgIERbUkRdXG4gIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggR2VicnVpa2VyXG4gIHN1YmdyYXBoIFZpc3VhbGlzYXRpZVxuICAgIEUxW0VUUlM4OV1cbiAgICBFMltSRF1cbiAgICBFM1tXR1M4NF1cbiAgZW5kXG4gIHN1YmdyYXBoIFwiRG93bmxvYWQgKEFwaS9BcHApXCJcbiAgICBFNFtSRF1cbiAgZW5kXG4gIGVuZFxuICBBMS0tPkJcbiAgQTItLT5CXG4gIEEzLS0-QlxuICBCLS0-fFVpdHdpc3NlbGluZ3xEMVxuICBEMS0tPnxVaXR3aXNzZWxpbmd8RFxuICBELS0-fFVpdHdpc3NlbGluZ3xFMVxuICBELS0-fFVpdHdpc3NlbGluZ3xFMlxuICBELS0-fFVpdHdpc3NlbGluZ3xFM1xuICBELS0-fFVpdHdpc3NlbGluZ3xFNCIsIm1lcm1haWQiOnt9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6ZmFsc2UsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/edit/##eyJjb2RlIjoiZ3JhcGggTFJcbiAgc3ViZ3JhcGggQnJvbmhvdWRlclxuICBzdWJncmFwaCBJbndpbm5pbmdcbiAgICBBMVtcIkVUUlM4OSA8YnI-IChHTlNTLVJUSylcIl0gXG4gICAgICAgIEEyW1wiUkQgPGJyPiAoTHVjaHRmb3RvKVwiXVxuICAgIEEzW1wiTG9rYWFsIDxicj4gKFRhY2h5bWV0cmllIDxicj4gTWVldGJhbmQpXCJdXG4gIGVuZFxuICBzdWJncmFwaCBWZXJ3ZXJraW5nIGVuIG9wc2xhZ1xuICAgIEJbUkRdXG4gIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggXCJMYW5kZWxpamtlIFZvb3J6aWVuaW5nXCJcbiAgc3ViZ3JhcGggXCJPcHNsYWcgTFZcIlxuICAgIEQxW1JEXVxuICBlbmRcbiAgZW5kXG4gIHN1YmdyYXBoIFwiRGF0YXBsYXRmb3JtIChQRE9LKVwiXG4gIHN1YmdyYXBoIFwiT3BzbGFnIFBET0tcIlxuICAgIERbUkRdXG4gIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggR2VicnVpa2VyXG4gIHN1YmdyYXBoIFZpc3VhbGlzYXRpZVxuICAgIEUxW0VUUlM4OV1cbiAgICBFMltSRF1cbiAgICBFM1tXR1M4NF1cbiAgZW5kXG4gIHN1YmdyYXBoIFwiRG93bmxvYWQgKEFwaS9BcHApXCJcbiAgICBFNFtSRF1cbiAgZW5kXG4gIGVuZFxuICBBMS0tPkJcbiAgQTItLT5CXG4gIEEzLS0-QlxuICBCLS0-fFVpdHdpc3NlbGluZ3xEMVxuICBEMS0tPnxVaXR3aXNzZWxpbmd8RFxuICBELS0-fFVpdHdpc3NlbGluZ3xFMVxuICBELS0-fFVpdHdpc3NlbGluZ3xFMlxuICBELS0-fFVpdHdpc3NlbGluZ3xFM1xuICBELS0-fFVpdHdpc3NlbGluZ3xFNCIsIm1lcm1haWQiOiJ7fSIsInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjpmYWxzZSwidXBkYXRlRGlhZ3JhbSI6dHJ1ZX0)

Bij de inwinning van de BGT worden ETRS89, RD en lokale CRS-en gebruikt. Voor de opslag bij bronhouders, de Landelijke Voorziening en het dataplatform wordt voor de uitwisseling het CRS RD gebruikt. Voor uitwisseling tussen dataplatform en gebruiker worden het Nederlandse RD, het Europese ETRS89 en het wereldwijde 3D WGS 84 gebruikt. Hierbij zijn voor de visualisatie van ETRS89 en 3D WGS 84 verschillende kaartprojecties mogelijk.
</div>

Eenduidig gebruik van CRS-en [coördinatentransformaties](#datumtransformatie-en-conversie) voorkomt systematische afwijkingen bij gebruik van meerdere datasets. Eenduidig gebruik is mogelijk door het maken van afspraken over het gebruik van eenduidige coördinatentransformaties. Bij minder precieze coördinatentransformaties kunnen (soms visueel toelaatbare) verschillen ontstaan die afhankelijk zijn van de keuze van CRS en implementatie.

### Leeswijzer

Deze Handreiking heeft als doel om gebruikers vanuit het GIS- / geo-informatiewerkveld te voorzien van adviezen hoe om te gaan met met CRS-en bij uitwisseling en visualisatie van geo-informatie, o.a. in de context van Landelijke Voorzieningen en vergelijkbare digitale stelsels.

<div class="example">
_VOORBEELD_ 
In het voorbeeld van de BGT gaat het dus om adviezen voor het omgaan met CRS-en bij:

1. uitwisseling tussen Bronhouder, Landelijke Voorziening en Dataplatform;
2. uitwisseling en visualisatie van Dataplatform naar Gebruiker;
3. specificatie van CRS in informatiemodellen en datasets.

</div>

Het hoofdstuk [Achtergrond: Gebruikte CRS-en in Nederland](#crs-en-in-nederland) geeft een overzicht van de huidige veel gebruikte CRS-en in Nederland en de relatie met andere CRS-en. Het hoofdstuk is gericht op nieuwkomers in de geo-wereld, dataaanbieders, GIS-gebruikes en modelleurs die hun kennis willen opfrissen.

Het onderdeel [Aanbevelingen t.a.v. CRS gebruik](#specificeren-van-crs) geeft aan hoe CRS-en eenduidig kunnen worden gebruikt en gespecificeerd in informatiemodellen en bij uitwisseling en visualisatie. 


