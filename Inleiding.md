## Inleiding

### Vooraf: waarom een Geonovum Handreiking over CRS
In de keten van inwinning via verwerking, opslag en ontsluiting tot gebruik, richt Geonovum zich traditioneel gezien op standaardisatie die uitwisseling en gebruik van geo-informatie beter mogelijk maakt. Aandacht voor het juiste gebruik van coördinaatreferentiesystemen (CRS) is er traditioneel voornamelijk bij de inwinning van geodata. Op dit vlak spelen het Kadaster (als beheerder van RD), Rijkswaterstaat (als beheerder van NAP) en de Hydrografische Dienst (primair gericht op het mariene deel van Nederland) een belangrijke rol, die ook tot uiting komt in de [Nederlandse Samenwerking Geodetische Infrastructuur](https://www.nsgi.nl/). 

In de laatste jaren zien we dit veranderen: het volstaat niet langer om alleen aan de voorkant van de keten (bij de landmeetkundige inwinning) aandacht te hebben voor juist CRS-gebruik, inmiddels is dit in elke fase van de keten noodzakelijk, inclusief de stappen rond uitwisseling en gebruik van geo-informatie. We zien twee belangrijke triggers in deze ontwikkeling:
* Door toenemende integratie van data (over grenzen van domeinen heen, over grenzen van land/zee, over landsgrenzen heen) moet data in verschillende CRSen goed met elkaar gecombineerd worden. Dit integralere werken zie je terug bij gebruikers die analyses uitvoeren, maar ook al bij integralere voorzieiningen als het Digitaal Stelsel Omgevingswet (waarin domeinen die traditioneel met verschillende CRSen werken, nu door bundeling onder één wet expliciet met elkaar in samenhang worden gebracht) en de Basisregistratie Ondergrond.
* Door de toenemende aandacht voor het gebruik van ruimtelijke data in laagdrempelige toepassingen via de standaarden van het web, bijvoorbeeld door de opkomst van populaire webtools als Mapbox, Leaflet en Google Maps.
Hiermee is een geodetisch onderwerp als CRS in toenemene mate ook een geo-informatie / GIS-onderwerp aan het worden, wat betekent dat er aandacht nodig is voor hoe je goed omgaat met dit onderwerp in informatiemodellen, in uitwisselmechanismes en -formaten en in een aantal gevallen ook in het ontwerp van landelijke voorzieningen. Hiermee is aandacht voor het goed omgaan met CRS-vraagstukken onderdeel geworden van het werk van Geonovum. In deze Handreiking richten we ons op eenieder die actief is op de onderwerpen uitwisseling en gebruik van geo-informatie en daarbij -mogelijk- rekening moet houden met CRS gebruik. Op deze manier willen we de inzichten die recent binnen o.a. DSO en BRO op dit vlak opgedaan zijn, breed toegankelijk maken. Wanneer er na het lezen van deze Handreiking nog onduidelijkheden bestaan, raden we sterk aan om contact te zoeken met Geonovum én met de experts in de [Nederlandse Samenwerking Geodetische Infrastructuur](https://www.nsgi.nl/).

<!--- Waarom CRS-en -->
### Introductie coördinaatreferentiesystemen (CRS)
Geo-informatie is direct gekoppeld aan locaties op aarde. De wijze waarop dat gebeurt wordt beschreven in het ruimtelijk-referentie systeem. Er zijn meerdere methoden om de locatie van objecten vast te leggen. De meest bekende methode is het gebruik van een coördinaatreferentiesysteem (CRS) waarbij coördinaten van een locatie worden vastgelegd. RD en ETRS89 zijn voorbeelden van CRS-en in Nederland.

CRS-en nemen de vorm van de aarde als uitgangspunt om de locaties vast te leggen. Maar niets is zo ingewikkeld als meten op een bol met de bedoeling dit in een plat vlak (kaart) weer te geven. Zeker niet als die bol niet een exacte bol is. Voor het weergeven van geo-informatie op een plat vlak worden [kaartprojecties](#kaartprojecties-de-aarde-plat-slaan) gebruikt. De weergave in het platte vlak is niet mogelijk zonder verstoringen die afhankelijk is van de keuze van de kaartprojectie. Een kaarprojectie kan hoekgetrouw, afstandsgetrouw en/of oppervlakte getrouw zijn, maar niet alle drie eigenschappen tegelijk hebben. Een kaartprojectie bevat dus altijd minimaal een verstoring in hoeken, afstanden of oppervlakten. Dat wil zeggen dat gelijke hoeken, afstanden of oppervlakten in werkelijkheid op de kaart niet allemaal gelijk aan elkaar zijn.

<div class="note">
Figuur toevoegen van verschillende projecties voor zelfde gebied?
</div>

Voor de inwinning, verwerking, uitwisseling en visualisatie van geo-informatie worden in de praktijk voor dezelfde dataset verschillende CRS-en gebruikt. De keuze van het meest geschikte hangt af van de toepassing en het gebied, voor afbeelding van geo-data van alleen Nederland is een ander CRS geschikt dan afbeelden van heel Europa of de hele wereld. In veel gevallen wordt de dataset opgeslagen in één CRS.

<div class="example">
_VOORBEELD_ 
Het gebruik van CRS-en bij keten van inwinning tot uitwisseling en visualisatie van de Basisregistratie Grootschalige Topografie (BGT) kan als volgt worden geïnterpreteerd:

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggTFJcbiAgc3ViZ3JhcGggQnJvbmhvdWRlclxuICBzdWJncmFwaCBJbndpbm5pbmdcbiAgICBBMVtcIkVUUlM4OSA8YnI-IChHTlNTLVJUSylcIl0gXG4gICAgICAgIEEyW1wiUkQgPGJyPiAoTHVjaHRmb3RvKVwiXVxuICAgIEEzW1wiTG9rYWFsIDxicj4gKFRhY2h5bWV0cmllIDxicj4gTWVldGJhbmQpXCJdXG4gIGVuZFxuICBzdWJncmFwaCBWZXJ3ZXJraW5nIGVuIG9wc2xhZ1xuICAgIEJbUkRdXG4gIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggXCJMYW5kZWxpamtlIFZvb3J6aWVuaW5nXCJcbiAgc3ViZ3JhcGggXCJPcHNsYWcgTFZcIlxuICAgIEQxW1JEXVxuICBlbmRcbiAgZW5kXG4gIHN1YmdyYXBoIFwiRGF0YXBsYXRmb3JtIChQRE9LKVwiXG4gIHN1YmdyYXBoIFwiT3BzbGFnIFBET0tcIlxuICAgIERbUkRdXG4gIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggR2VicnVpa2VyXG4gIHN1YmdyYXBoIFZpc3VhbGlzYXRpZVxuICAgIEUxW0VUUlM4OV1cbiAgICBFMltSRF1cbiAgICBFM1tXR1M4NF1cbiAgZW5kXG4gIHN1YmdyYXBoIFwiRG93bmxvYWQgKEFwaS9BcHApXCJcbiAgICBFNFtSRF1cbiAgZW5kXG4gIGVuZFxuICBBMS0tPkJcbiAgQTItLT5CXG4gIEEzLS0-QlxuICBCLS0-fFVpdHdpc3NlbGluZ3xEMVxuICBEMS0tPnxVaXR3aXNzZWxpbmd8RFxuICBELS0-fFVpdHdpc3NlbGluZ3xFMVxuICBELS0-fFVpdHdpc3NlbGluZ3xFMlxuICBELS0-fFVpdHdpc3NlbGluZ3xFM1xuICBELS0-fFVpdHdpc3NlbGluZ3xFNCIsIm1lcm1haWQiOnt9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6ZmFsc2UsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/edit/##eyJjb2RlIjoiZ3JhcGggTFJcbiAgc3ViZ3JhcGggQnJvbmhvdWRlclxuICBzdWJncmFwaCBJbndpbm5pbmdcbiAgICBBMVtcIkVUUlM4OSA8YnI-IChHTlNTLVJUSylcIl0gXG4gICAgICAgIEEyW1wiUkQgPGJyPiAoTHVjaHRmb3RvKVwiXVxuICAgIEEzW1wiTG9rYWFsIDxicj4gKFRhY2h5bWV0cmllIDxicj4gTWVldGJhbmQpXCJdXG4gIGVuZFxuICBzdWJncmFwaCBWZXJ3ZXJraW5nIGVuIG9wc2xhZ1xuICAgIEJbUkRdXG4gIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggXCJMYW5kZWxpamtlIFZvb3J6aWVuaW5nXCJcbiAgc3ViZ3JhcGggXCJPcHNsYWcgTFZcIlxuICAgIEQxW1JEXVxuICBlbmRcbiAgZW5kXG4gIHN1YmdyYXBoIFwiRGF0YXBsYXRmb3JtIChQRE9LKVwiXG4gIHN1YmdyYXBoIFwiT3BzbGFnIFBET0tcIlxuICAgIERbUkRdXG4gIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggR2VicnVpa2VyXG4gIHN1YmdyYXBoIFZpc3VhbGlzYXRpZVxuICAgIEUxW0VUUlM4OV1cbiAgICBFMltSRF1cbiAgICBFM1tXR1M4NF1cbiAgZW5kXG4gIHN1YmdyYXBoIFwiRG93bmxvYWQgKEFwaS9BcHApXCJcbiAgICBFNFtSRF1cbiAgZW5kXG4gIGVuZFxuICBBMS0tPkJcbiAgQTItLT5CXG4gIEEzLS0-QlxuICBCLS0-fFVpdHdpc3NlbGluZ3xEMVxuICBEMS0tPnxVaXR3aXNzZWxpbmd8RFxuICBELS0-fFVpdHdpc3NlbGluZ3xFMVxuICBELS0-fFVpdHdpc3NlbGluZ3xFMlxuICBELS0-fFVpdHdpc3NlbGluZ3xFM1xuICBELS0-fFVpdHdpc3NlbGluZ3xFNCIsIm1lcm1haWQiOiJ7fSIsInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjpmYWxzZSwidXBkYXRlRGlhZ3JhbSI6dHJ1ZX0)

Bij de inwinning van de BGT worden ETRS89, RD en lokale CRS-en gebruikt. Voor de opslag bij bronhouders, de Landelijke Voorziening en het dataplatform wordt voor de uitwisseling  RD gebruikt. Voor uitwisseling en visualisatie worden tussen dataplatform en gebruiker ETRS89, RD en WGS84 gebruikt, waarbij voor ETRS89 en WGS84 verschillende projecties mogelijk zijn. 

Voor de BRO is de keten echter anders:

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggTFJcbiAgc3ViZ3JhcGggQnJvbmhvdWRlclxuICAgIHN1YmdyYXBoIElud2lubmluZ1xuICAgICAgQTFbXCJSRFwiXSBcbiAgICAgIEEyW1wiRVRSUzg5XCJdXG4gICAgICBBM1tcIldHUzg0XCJdXG4gICAgZW5kXG4gIGVuZFxuICBzdWJncmFwaCBcIkxhbmRlbGlqa2UgVm9vcnppZW5pbmdcIlxuICAgIHN1YmdyYXBoIFwiSW50YWtlIExWXCJcbiAgICAgIEIxW1wiUkRcIl0gXG4gICAgICBCMltcIkVUUlM4OVwiXVxuICAgICAgQjNbXCJXR1M4NFwiXVxuICAgIGVuZFxuICAgIHN1YmdyYXBoIFwiT3BzbGFnIExWXCJcbiAgICAgIEI0W0VUUlM4OV1cbiAgICBlbmRcbiAgZW5kXG4gIHN1YmdyYXBoIFwiRGF0YXBsYXRmb3JtIChQRE9LKVwiXG4gICAgc3ViZ3JhcGggXCJPcHNsYWcgUERPS1wiXG4gICAgICBEW0VUUlM4OV1cbiAgICBlbmRcbiAgZW5kXG4gIHN1YmdyYXBoIEdlYnJ1aWtlclxuICAgIHN1YmdyYXBoIFZpc3VhbGlzYXRpZVxuICAgICAgRTFbRVRSUzg5XVxuICAgICAgRTJbUkRdXG4gICAgICBFM1tXR1M4NF1cbiAgICBlbmRcbiAgICBzdWJncmFwaCBcIkRvd25sb2FkIChBdG9tKVwiXG4gICAgICBFNFtFVFJTODldXG4gICAgZW5kXG4gICAgc3ViZ3JhcGggXCJCUk8gTG9rZXRcIlxuICAgICAgICBGMVtFVFJTODldXG4gICAgZW5kXG4gIGVuZFxuICBBMS0tPkIxXG4gIEEyLS0-QjJcbiAgQTMtLT5CM1xuICBCMS0tPnxUcmFuc2Zvcm1hdGllfEI0XG4gIEIyLS0-QjRcbiAgQjMtLT58VHJhbnNmb3JtYXRpZXxCNFxuICBCNC0tPnxVaXR3aXNzZWxpbmd8RFxuICBELS0-fFVpdHdpc3NlbGluZ3xFMVxuICBELS0-fFVpdHdpc3NlbGluZ3xFMlxuICBELS0-fFVpdHdpc3NlbGluZ3xFM1xuICBELS0-fFVpdHdpc3NlbGluZ3xFNFxuICBCNCAtLT58VWl0d2lzc2VsaW5nfEYxXG5cbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjp0cnVlLCJ1cGRhdGVEaWFncmFtIjpmYWxzZX0)](https://mermaid-js.github.io/mermaid-live-editor/edit/#eyJjb2RlIjoiZ3JhcGggTFJcbiAgc3ViZ3JhcGggQnJvbmhvdWRlclxuICAgIHN1YmdyYXBoIElud2lubmluZ1xuICAgICAgQTFbXCJSRFwiXSBcbiAgICAgIEEyW1wiRVRSUzg5XCJdXG4gICAgICBBM1tcIldHUzg0XCJdXG4gICAgZW5kXG4gIGVuZFxuICBzdWJncmFwaCBcIkxhbmRlbGlqa2UgVm9vcnppZW5pbmdcIlxuICAgIHN1YmdyYXBoIFwiSW50YWtlIExWXCJcbiAgICAgIEIxW1wiUkRcIl0gXG4gICAgICBCMltcIkVUUlM4OVwiXVxuICAgICAgQjNbXCJXR1M4NFwiXVxuICAgIGVuZFxuICAgIHN1YmdyYXBoIFwiT3BzbGFnIExWXCJcbiAgICAgIEI0W0VUUlM4OV1cbiAgICBlbmRcbiAgZW5kXG4gIHN1YmdyYXBoIFwiRGF0YXBsYXRmb3JtIChQRE9LKVwiXG4gICAgc3ViZ3JhcGggXCJPcHNsYWcgUERPS1wiXG4gICAgICBEW0VUUlM4OV1cbiAgICBlbmRcbiAgZW5kXG4gIHN1YmdyYXBoIEdlYnJ1aWtlclxuICAgIHN1YmdyYXBoIFZpc3VhbGlzYXRpZVxuICAgICAgRTFbRVRSUzg5XVxuICAgICAgRTJbUkRdXG4gICAgICBFM1tXR1M4NF1cbiAgICBlbmRcbiAgICBzdWJncmFwaCBcIkRvd25sb2FkIChBdG9tKVwiXG4gICAgICBFNFtFVFJTODldXG4gICAgZW5kXG4gICAgc3ViZ3JhcGggXCJCUk8gTG9rZXRcIlxuICAgICAgICBGMVtFVFJTODldXG4gICAgZW5kXG4gIGVuZFxuICBBMS0tPkIxXG4gIEEyLS0-QjJcbiAgQTMtLT5CM1xuICBCMS0tPnxUcmFuc2Zvcm1hdGllfEI0XG4gIEIyLS0-QjRcbiAgQjMtLT58VHJhbnNmb3JtYXRpZXxCNFxuICBCNC0tPnxVaXR3aXNzZWxpbmd8RFxuICBELS0-fFVpdHdpc3NlbGluZ3xFMVxuICBELS0-fFVpdHdpc3NlbGluZ3xFMlxuICBELS0-fFVpdHdpc3NlbGluZ3xFM1xuICBELS0-fFVpdHdpc3NlbGluZ3xFNFxuICBCNCAtLT58VWl0d2lzc2VsaW5nfEYxXG5cbiIsIm1lcm1haWQiOiJ7XG4gIFwidGhlbWVcIjogXCJkZWZhdWx0XCJcbn0iLCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)

Bij de BRO kunnen bronhouders in verschillende CRS-en aanbieden. Bij intake in de landelijke voorziening wordt gertransformeerd naar ETRS89. Voor uitwisseling en visualisatie worden tussen dataplatform en gebruiker ETRS89, RD en WGS84 gebruikt, waarbij voor ETRS89 en WGS84 verschillende projecties mogelijk zijn. 
</div>

</div>

<!-- Waarom verschillende CRS-en -->

Bij uitwisseling en visualisatie van geo-informatie is het van belang om een CRS te kiezen dat geschikt is voor de toepassing en de gebruiker, dit wordt onder andere geadviseerd in [[SDW-BP]]. Eenduidig gebruik van CRS-en en transformaties voorkomt systematische effecten bij gebruik van meerdere datasets. Eenduidig gebruik is mogelijk door het maken van afspraken over het gebruik van eenduidige CRS-en en [transformaties](#conversie-en-transformatie).


<div class="note">
hier al één / enkele voorbeelden toevoegen waarom goed omgaan met CRS belangrijk is: wat kan er misgaan / is er al misgegaan door fouten hiermee? 
</div>

Bij de keuze van het CRS is ook een onderscheid tussen de (authentieke) dataset en visualisatieservices (of informatiemodel, berichtenmodel en presentatiemodel?). Bij uitwisseling is het van belang dat er een eenduidige nauwkeurige relatie bestaat tussen het CRS van de brondata en het CRS van uitwisseling, zodat het voor het gebruik niet uitmaakt in welk CRS de dataset is uitgewisseld. Voor visualisatieservices is de beoogde toepassing en de mogelijkheid van eenvoudig gebruik óók voor niet-specialisten een belangrijke afweging. Vooral wanneer de juiste topologische weergave van data van belang is, of datasets worden gecombineerd in de visualisatie gaat eenvoudig niet altijd samen met het gebruik van precieze eenduidige transformaties en conversies. Bij minder precieze transformaties en conversies kunnen (toelaatbare) visuele verschillen  onstaan die afhankelijk zijn van de keuze van CRS en implementatie.

Spatial Data on the Web Best Practices [[SDW-BP]] raden aan om data voor visualisatie te publiceren in wereldwijd bruikbare CRS-en. De wereldwijdbruikbare CRS-en hebben als voordeel dat gebruik voor niet-specialisten laagdrempeliger wordt, maar deze CRS-en zijn bedeold vor gebruik op kleine (wereldwijde) schaal en voor grootschalige toepassingen. Het gebruik van deze wereldwijde CRS-en geeft risico op systematische fouten of inconsistenties wanneer de data niet alleen wordt gebruikt voor visualisatie of datasets worden gecombineerd. Hiervoor moeten zowel aanbieder, ontwikkelaar als eindgebruiker een afweging maken tussen laagdrempelig gebruik van geo-informatie en mogelijke gevolgen voor de beoogde toepassingen van de data.
### Doel

Geo-data wordt steeds vaker grensoverschrijdend, zowel landgrenzen and land-water, en tussen verschillende domeinen geïntegreerd. Voor deze verschillende toepassingen en domeinen zijn gebruikers gewend te werken in verschillende CRS-en. Hierdoor is bewustzijn van CRSen niet alleen meer relevant bij de inwinning, maar ook bij opslag, uitwisseling, gebruik en visualisatie. Op land wordt bijvoorbeeld vaak RD gebruikt en op zee ETRS89, voor Europese uitwisseling wordt ETRS89 gebruikt. Binnen het DSO wordt data gecombineerd waarvan de bron in verschillende CRS-en kan zijn.

Deze Handreiking heeft als doel om gebruikers vanuit het GIS / geo-informatie werkveld te voorzien van adviezen hoe om te gaan met met CRS-en bij uitwisseling en visualisatie van geo-informatie in de context van Landelijke Voorzieningen en vergelijkbare digitale stelsels.

<div class="example">
_VOORBEELD_ 
In het voorbeeld van de BGT gaat het dus om adviezen voor het omgaan met CRS-en bij:

1. uitwisseling tussen Bronhouder, Landelijke Voorziening en Dataplatform
2. uitwisseling en visualisatie van Dataplatform naar Gebruiker
</div>

De handreiking richt zich niet op adviezen voor het omgaan met CRS-en bij inwinning, verwerking en opslag van geo-informatie door bronhouders. 
<div class="note">
of opslag wel i.r.t. informatiemodel?)
</div>

### Leeswijzer

Het hoofdstuk [CRS-en in Nederland](#crs-en-in-nederland) geeft een overzicht van de huidige veel gebruikte CRS-en in Nederland en de relatie met andere CRS-en. Het hoofdtuk is gericht op nieuwkomers in de geo-wereld, dataaanbieders, GIS-gebruikes en modelleurs die hun kennis willen opfrissen.

Het onderdeel [Specificatie CRS](#specificeren-van-crs) geeft aan hoe CRS-en eenduidig worden gespecificeerd en vastgelegd voor uitwisseling en visualisatie. De paragraaf naamgeving is voor alle lezers bedoeld, de overige paragraven zijn gericht op  dataaanbieders, modelleurs, en applicatieontwikkelaars.

De bijlagen met achtergrondinformatie geven een uitgebreidere toelichting op onderdelen die in specifieke gevallen relevant is of te uitgebreid voor de algemene tekst.
### Adviezen/opmerkingen die ergens een plek moeten krijgen

- Dataanbieder (welk CRS mogelijk voor visualisatie, hoe transformeer je, welke formaten ondersteunen CRS-en, hierbij denken aan gebruik)
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
- Architect/Modelleur van registraties (CRS-ondersteuning registraties --> [standaardparagraaf](#crs-in-het-informatiemodel) maken?)



### Het proces

*Beschrijf het proces waarmee dit document is ontwikkeld*
