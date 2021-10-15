## Inleiding

### Vooraf: waarom een Geonovum Handreiking over CRS
In de keten van inwinning via verwerking, opslag en ontsluiting tot gebruik, richt Geonovum zich traditioneel gezien op standaardisatie die uitwisseling en gebruik van geo-informatie beter mogelijk maakt. Aandacht voor het juiste gebruik van coördinaatreferentiesystemen (CRS) is er traditioneel voornamelijk bij de inwinning van geodata. Op dit vlak spelen het Kadaster (als beheerder van RD), Rijkswaterstaat (als beheerder van NAP) en de Hydrografische Dienst (primair gericht op het mariene deel van Nederland) een belangrijke rol, die ook tot uiting komt in de [Nederlandse Samenwerking Geodetische Infrastructuur](https://www.nsgi.nl/). 

In de laatste jaren zien we dit veranderen: het volstaat niet langer om alleen aan de voorkant van de keten (bij de landmeetkundige inwinning) aandacht te hebben voor juist CRS-gebruik, inmiddels is dit in elke fase van de keten noodzakelijk, inclusief de stappen rond uitwisseling en gebruik van geo-informatie. We zien twee belangrijke triggers in deze ontwikkeling:
* Door toenemende integratie van data (over grenzen van domeinen heen, over grenzen van land/zee, over landsgrenzen heen) moet data in verschillende CRSen goed met elkaar gecombineerd worden. Dit integralere werken zie je terug bij gebruikers die analyses uitvoeren, maar ook al bij integralere voorzieiningen als het Digitaal Stelsel Omgevingswet (DSO) (waarin domeinen die traditioneel met verschillende CRSen werken, nu door bundeling onder één wet expliciet met elkaar in samenhang worden gebracht) en de Basisregistratie Ondergrond (BRO).
* Door de toenemende aandacht voor het gebruik van ruimtelijke data in laagdrempelige toepassingen via de standaarden van het web, bijvoorbeeld door de opkomst van populaire webtools als Mapbox, Leaflet en Google Maps.

Hiermee is een geodetisch onderwerp als CRS in toenemende mate ook een geo-informatie / GIS-onderwerp aan het worden, wat betekent dat er aandacht nodig is voor hoe je goed omgaat met dit onderwerp in informatiemodellen, in uitwisselmechanismes en -formaten en in een aantal gevallen ook in het ontwerp van landelijke voorzieningen. Hiermee is aandacht voor het goed omgaan met CRS-vraagstukken onderdeel geworden van het werk van Geonovum. In deze Handreiking richten we ons op eenieder die actief is op de onderwerpen uitwisseling en gebruik van geo-informatie en daarbij -mogelijk- rekening moet houden met CRS gebruik. Op deze manier willen we de inzichten die recent binnen o.a. DSO en BRO op dit vlak opgedaan zijn, breed toegankelijk maken. Wanneer er na het lezen van deze Handreiking nog onduidelijkheden bestaan, raden we sterk aan om contact te zoeken met Geonovum én met de experts in de [Nederlandse Samenwerking Geodetische Infrastructuur](https://www.nsgi.nl/).

<!--- Waarom CRS-en -->
### Introductie coördinaatreferentiesystemen (CRS)
Geo-informatie is direct gekoppeld aan locaties op aarde. De wijze waarop dat gebeurt wordt beschreven in het coördinaatreferentiesysteem (CRS) waarbij coördinaten van een locatie worden vastgelegd. RD, ETRS89 en WGS84 zijn voorbeelden van CRS-en. 

De gebruikte CRS-en voor de opslag en uitwisseling van geo-informatie zijn in het algemeen onder te verdelen in drie groepen. Geprojecteerde, geografische en geocentrische CRS-en. Geprojecteerde CRS-en presenteren geo-informatie op een plat vlak in rechthoekige (x en y) coördinaten, een voorbeeld is het Nederlandse RD. Geografische CRS-en geven geografische coördinaten (lengte en breedte (engels: longitude en latitude) en soms hoogte) ten opzichte van een model van het aardoppervlak, vaak een ellipsoïde zoals bij WGS 84. Geocentrische coördinaten komen minder vaak voor bij opslag en gebruik van geo-informatie, geocentrische coördinaten geven 3D-coördinaten (X, Y en Z) ten opzichte van het middelpunt van de aarde. Het is belangrijk om te realiseren dat de geocentrische X en Y coördinaten niet in het platte vlak liggen, zoals geprojecteerde x en y coördinaten.

CRS-en nemen vaak de vorm van de aarde als uitgangspunt om de locaties vast te leggen. Maar het is ingewikkeld om de vorm van de aarde exact te beschrijven en de werkelijkheid van het gekromde aardoppervlak in een plat vlak (kaart) weer te geven. Voor het weergeven van geo-informatie in een plat vlak worden kaartprojecties gebruikt. De weergave in het platte vlak is niet mogelijk zonder vervormingen die afhankelijk zijn van de keuze van de kaartprojectie. Een kaartprojectie kan hoekgetrouw, afstandsgetrouw en/of oppervlakte getrouw zijn, maar niet alle drie eigenschappen tegelijk hebben. Een kaartprojectie bevat dus altijd minimaal een vervorming in hoeken, afstanden of oppervlakten. Dat wil zeggen dat gelijke hoeken, afstanden of oppervlakten in werkelijkheid op de kaart niet allemaal gelijk aan elkaar zijn.

<div class="note">
Onderdeel van de documentatie van Open Source GIS programma QGIS is 'Een kleine introductie in GIS'. Deze introductie gaat onder andere in op [kaartprojecties](https://docs.qgis.org/3.16/nl/docs/gentle_gis_introduction/coordinate_reference_systems.html#overview).

Hoe dit opnemen in handreiking?
</div>

Voor de inwinning, verwerking, uitwisseling en visualisatie van geo-informatie worden in de praktijk voor dezelfde dataset verschillende CRS-en gebruikt. De keuze van het meest geschikte hangt af van de toepassing en het gebied. Voor afbeelding van geo-data van alleen Nederland is een ander CRS geschikt dan afbeelden van heel Europa of de hele wereld. In veel gevallen wordt de dataset opgeslagen in één CRS. Bij uitwisseling en visualisatie van geo-informatie is het dus belang om een CRS te kiezen dat geschikt is voor de (gebruikers)toepassing. Spatial Data on the Web Best Practices [[SDW-BP]] raden aan om data voor visualisatie te publiceren in wereldwijd bruikbare CRS-en, omdat de gebruikerstoepassing niet altijd bekend is. De wereldwijd bruikbare CRS-en hebben als voordeel dat gebruik voor niet-specialisten laagdrempeliger wordt, maar deze CRS-en zijn bedoeld voor gebruik op kleine (wereldwijde) schaal en niet voor grootschalige toepassingen. Het gebruik van deze wereldwijde CRS-en geeft risico op systematische afwijkingen of inconsistenties wanneer de data niet alleen wordt gebruikt voor visualisatie of wanneer datasets worden gecombineerd. Hiervoor moeten zowel aanbieder, ontwikkelaar als eindgebruiker een afweging maken tussen laagdrempelig gebruik van geo-informatie en mogelijke gevolgen voor de beoogde toepassingen van de data.

<div class="example">
_VOORBEELD_ 
Het gebruik van CRS-en in de keten van inwinning tot uitwisseling en visualisatie van de Basisregistratie Grootschalige Topografie (BGT) kan als volgt worden geïnterpreteerd:

    [![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggTFJcbiAgc3ViZ3JhcGggQnJvbmhvdWRlclxuICBzdWJncmFwaCBJbndpbm5pbmdcbiAgICBBMVtcIkVUUlM4OSA8YnI-IChHTlNTLVJUSylcIl0gXG4gICAgICAgIEEyW1wiUkQgPGJyPiAoTHVjaHRmb3RvKVwiXVxuICAgIEEzW1wiTG9rYWFsIDxicj4gKFRhY2h5bWV0cmllIDxicj4gTWVldGJhbmQpXCJdXG4gIGVuZFxuICBzdWJncmFwaCBWZXJ3ZXJraW5nIGVuIG9wc2xhZ1xuICAgIEJbUkRdXG4gIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggXCJMYW5kZWxpamtlIFZvb3J6aWVuaW5nXCJcbiAgc3ViZ3JhcGggXCJPcHNsYWcgTFZcIlxuICAgIEQxW1JEXVxuICBlbmRcbiAgZW5kXG4gIHN1YmdyYXBoIFwiRGF0YXBsYXRmb3JtIChQRE9LKVwiXG4gIHN1YmdyYXBoIFwiT3BzbGFnIFBET0tcIlxuICAgIERbUkRdXG4gIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggR2VicnVpa2VyXG4gIHN1YmdyYXBoIFZpc3VhbGlzYXRpZVxuICAgIEUxW0VUUlM4OV1cbiAgICBFMltSRF1cbiAgICBFM1tXR1M4NF1cbiAgZW5kXG4gIHN1YmdyYXBoIFwiRG93bmxvYWQgKEFwaS9BcHApXCJcbiAgICBFNFtSRF1cbiAgZW5kXG4gIGVuZFxuICBBMS0tPkJcbiAgQTItLT5CXG4gIEEzLS0-QlxuICBCLS0-fFVpdHdpc3NlbGluZ3xEMVxuICBEMS0tPnxVaXR3aXNzZWxpbmd8RFxuICBELS0-fFVpdHdpc3NlbGluZ3xFMVxuICBELS0-fFVpdHdpc3NlbGluZ3xFMlxuICBELS0-fFVpdHdpc3NlbGluZ3xFM1xuICBELS0-fFVpdHdpc3NlbGluZ3xFNCIsIm1lcm1haWQiOnt9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6ZmFsc2UsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/edit/##eyJjb2RlIjoiZ3JhcGggTFJcbiAgc3ViZ3JhcGggQnJvbmhvdWRlclxuICBzdWJncmFwaCBJbndpbm5pbmdcbiAgICBBMVtcIkVUUlM4OSA8YnI-IChHTlNTLVJUSylcIl0gXG4gICAgICAgIEEyW1wiUkQgPGJyPiAoTHVjaHRmb3RvKVwiXVxuICAgIEEzW1wiTG9rYWFsIDxicj4gKFRhY2h5bWV0cmllIDxicj4gTWVldGJhbmQpXCJdXG4gIGVuZFxuICBzdWJncmFwaCBWZXJ3ZXJraW5nIGVuIG9wc2xhZ1xuICAgIEJbUkRdXG4gIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggXCJMYW5kZWxpamtlIFZvb3J6aWVuaW5nXCJcbiAgc3ViZ3JhcGggXCJPcHNsYWcgTFZcIlxuICAgIEQxW1JEXVxuICBlbmRcbiAgZW5kXG4gIHN1YmdyYXBoIFwiRGF0YXBsYXRmb3JtIChQRE9LKVwiXG4gIHN1YmdyYXBoIFwiT3BzbGFnIFBET0tcIlxuICAgIERbUkRdXG4gIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggR2VicnVpa2VyXG4gIHN1YmdyYXBoIFZpc3VhbGlzYXRpZVxuICAgIEUxW0VUUlM4OV1cbiAgICBFMltSRF1cbiAgICBFM1tXR1M4NF1cbiAgZW5kXG4gIHN1YmdyYXBoIFwiRG93bmxvYWQgKEFwaS9BcHApXCJcbiAgICBFNFtSRF1cbiAgZW5kXG4gIGVuZFxuICBBMS0tPkJcbiAgQTItLT5CXG4gIEEzLS0-QlxuICBCLS0-fFVpdHdpc3NlbGluZ3xEMVxuICBEMS0tPnxVaXR3aXNzZWxpbmd8RFxuICBELS0-fFVpdHdpc3NlbGluZ3xFMVxuICBELS0-fFVpdHdpc3NlbGluZ3xFMlxuICBELS0-fFVpdHdpc3NlbGluZ3xFM1xuICBELS0-fFVpdHdpc3NlbGluZ3xFNCIsIm1lcm1haWQiOiJ7fSIsInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjpmYWxzZSwidXBkYXRlRGlhZ3JhbSI6dHJ1ZX0)

Bij de inwinning van de BGT worden ETRS89, RD en lokale CRS-en gebruikt. Voor de opslag bij bronhouders, de Landelijke Voorziening en het dataplatform wordt voor de uitwisseling het CRS RD gebruikt. Voor uitwisseling en visualisatie worden tussen dataplatform en gebruiker het Nederlandse RD, het Europese ETRS89 en het wereldwijde WGS84 gebruikt, waarbij voor ETRS89 en WGS84 verschillende kaartprojecties mogelijk zijn.
</div>

</div>

<!-- Waarom verschillende CRS-en -->

Eenduidig gebruik van CRS-en en [datumtransformaties](#datumtransformatie-en-conversie) voorkomt systematische afwijkingen bij gebruik van meerdere datasets. Eenduidig gebruik is mogelijk door het maken van afspraken over het gebruik van eenduidige CRS-en en datumtransformaties. Bij minder precieze datumtransformaties en [coördinatenconversies](#datumtransformatie-en-conversie) kunnen (toelaatbare) visuele verschillen ontstaan die afhankelijk zijn van de keuze van CRS en implementatie.

<div class="note">
hier al één / enkele voorbeelden toevoegen waarom goed omgaan met CRS belangrijk is: wat kan er misgaan / is er al misgegaan door fouten hiermee? 
</div>

### Leeswijzer

Deze Handreiking heeft als doel om gebruikers vanuit het GIS- / geo-informatiewerkveld te voorzien van adviezen hoe om te gaan met met CRS-en bij uitwisseling en visualisatie van geo-informatie in de context van Landelijke Voorzieningen en vergelijkbare digitale stelsels.

<div class="example">
_VOORBEELD_ 
In het voorbeeld van de BGT gaat het dus om adviezen voor het omgaan met CRS-en bij:

1. uitwisseling tussen Bronhouder, Landelijke Voorziening en Dataplatform;
2. uitwisseling en visualisatie van Dataplatform naar Gebruiker;
3. specificatie van CRS in informatiemodellen en datasets.

</div>

<div class="note">
- hier nog iet toevoegen dat in de tekst soms wordt verwezen naar EPSG codes en wat dat dan zijn
- leeswijzer voor de verschillende doelgroepen?
</div>

Het hoofdstuk [Gebruikte CRS-en in Nederland](#crs-en-in-nederland) geeft een overzicht van de huidige veel gebruikte CRS-en in Nederland en de relatie met andere CRS-en. Het hoofdstuk is gericht op nieuwkomers in de geo-wereld, dataaanbieders, GIS-gebruikes en modelleurs die hun kennis willen opfrissen.

Het onderdeel [CRS gebruik](#specificeren-van-crs) geeft aan hoe CRS-en eenduidig kunnen worden gebruikt en gespecificeerd in informatiemodellen en bij uitwisseling en visualisatie. 

### Het proces

*Beschrijf het proces waarmee dit document is ontwikkeld*
