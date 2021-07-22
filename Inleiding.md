## Inleiding

<mark style="background-color: SpringGreen">Waarom CRS-en</mark>

Geo-informatie is direct gekoppeld aan locaties op aarde. De wijze waarop dat gebeurt wordt beschreven in het ruimtelijk-referentie systeem. Er zijn meerdere methoden om de locatie van objecten vast te leggen. De meest bekende methode is het gebruik van een coördinaatreferentiesysteem (CRS) waarbij coördinaten van een locatie worden vastgelegd. 

CRS-en nemen de vorm van de aarde als uitgangspunt om de locaties vast te leggen. Maar niets is zo ingewikkeld als meten op een bol met de bedoeling dit in een plat vlak (kaart) weer te geven. Zeker niet als die bol niet een exacte bol is. Voor het weergeven van geo-informatie op een plat vlak worden [kaartprojecties](#kaartprojecties-de-aarde-plat-slaan) gebruikt. De weergave in het platte vlak is niet mogelijk zonder verstoringen die afhankelijk is van de keuze van de kaartprojectie. En kaarprojectie bevat altijd minimaal een verstoring in hoeken, afstanden of oppervlakten. Dat wil zeggen dat gelijke hoeken, afstanden of oppervlakten in werkelijkheid op de kaart niet allemaal gelijk aan elkaar zijn.

Voor de inwinning, verwerking, uitwisseling en visualisatie van geo-informatie worden in de praktijk voor dezelfde dataset verschillende CRS-en gebruikt. In veel gevallen wordt de dataset opgeslagen in één CRS.

<div class="example">
_VOORBEELD_ 
Het gebruik van CRS-en bij keten van inwinning tot uitwisseling en visualisatie van de Basisregistratie Grootschalige Topografie (BGT) kan als volgt worden geïnterpreteerd:

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggTFJcbiAgc3ViZ3JhcGggQnJvbmhvdWRlclxuICBzdWJncmFwaCBJbndpbm5pbmdcbiAgICBBMVtcIkVUUlM4OSA8YnI-IChHTlNTLVJUSylcIl0gXG4gICAgICAgIEEyW1wiUkQgPGJyPiAoTHVjaHRmb3RvKVwiXVxuICAgIEEzW1wiTG9rYWFsIDxicj4gKFRhY2h5bWV0cmllIDxicj4gTWVldGJhbmQpXCJdXG4gIGVuZFxuICBzdWJncmFwaCBWZXJ3ZXJraW5nIGVuIG9wc2xhZ1xuICAgIEJbUkRdXG4gIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggXCJMYW5kZWxpamtlIFZvb3J6aWVuaW5nXCJcbiAgc3ViZ3JhcGggXCJPcHNsYWcgTFZcIlxuICAgIEQxW1JEXVxuICBlbmRcbiAgZW5kXG4gIHN1YmdyYXBoIFwiRGF0YXBsYXRmb3JtIChQRE9LKVwiXG4gIHN1YmdyYXBoIFwiT3BzbGFnIFBET0tcIlxuICAgIERbUkRdXG4gIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggR2VicnVpa2VyXG4gIHN1YmdyYXBoIFZpc3VhbGlzYXRpZVxuICAgIEUxW0VUUlM4OV1cbiAgICBFMltSRF1cbiAgICBFM1tXR1M4NF1cbiAgZW5kXG4gIGVuZFxuICBBMS0tPkJcbiAgQTItLT5CXG4gIEEzLS0-QlxuICBCLS0-fFVpdHdpc3NlbGluZ3xEMVxuICBEMS0tPnxVaXR3aXNzZWxpbmd8RFxuICBELS0-fFVpdHdpc3NlbGluZ3xFMVxuICBELS0-fFVpdHdpc3NlbGluZ3xFMlxuICBELS0-fFVpdHdpc3NlbGluZ3xFMyIsIm1lcm1haWQiOnt9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6ZmFsc2UsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/edit##eyJjb2RlIjoiZ3JhcGggTFJcbiAgc3ViZ3JhcGggQnJvbmhvdWRlclxuICBzdWJncmFwaCBJbndpbm5pbmdcbiAgICBBMVtcIkVUUlM4OSA8YnI-IChHTlNTLVJUSylcIl0gXG4gICAgICAgIEEyW1wiUkQgPGJyPiAoTHVjaHRmb3RvKVwiXVxuICAgIEEzW1wiTG9rYWFsIDxicj4gKFRhY2h5bWV0cmllIDxicj4gTWVldGJhbmQpXCJdXG4gIGVuZFxuICBzdWJncmFwaCBWZXJ3ZXJraW5nIGVuIG9wc2xhZ1xuICAgIEJbUkRdXG4gIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggXCJMYW5kZWxpamtlIFZvb3J6aWVuaW5nXCJcbiAgc3ViZ3JhcGggXCJPcHNsYWcgTFZcIlxuICAgIEQxW1JEXVxuICBlbmRcbiAgZW5kXG4gIHN1YmdyYXBoIFwiRGF0YXBsYXRmb3JtIChQRE9LKVwiXG4gIHN1YmdyYXBoIFwiT3BzbGFnIFBET0tcIlxuICAgIERbUkRdXG4gIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggR2VicnVpa2VyXG4gIHN1YmdyYXBoIFZpc3VhbGlzYXRpZVxuICAgIEUxW0VUUlM4OV1cbiAgICBFMltSRF1cbiAgICBFM1tXR1M4NF1cbiAgZW5kXG4gIGVuZFxuICBBMS0tPkJcbiAgQTItLT5CXG4gIEEzLS0-QlxuICBCLS0-fFVpdHdpc3NlbGluZ3xEMVxuICBEMS0tPnxVaXR3aXNzZWxpbmd8RFxuICBELS0-fFVpdHdpc3NlbGluZ3xFMVxuICBELS0-fFVpdHdpc3NlbGluZ3xFMlxuICBELS0-fFVpdHdpc3NlbGluZ3xFMyIsIm1lcm1haWQiOiJ7fSIsInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjpmYWxzZSwidXBkYXRlRGlhZ3JhbSI6dHJ1ZX0)


Bij de inwinning van de BGT worden ETRS89, RD en lokale CRS-en gebruikt. Voor de opslag bij bronhouders, de Landelijke Voorziening en het dataplatform wordt voor de uitwisseling  RD gebruikt. Voor uitwisseling en visualisatie worden tussen dataplatform en gebruiker ETRS89, RD en WGS84 gebruikt, waarbij voor ETRS89 en WGS84 verschillende projecties mogelijk zijn. 
</div>

<mark style="background-color: SpringGreen">Waarom verschillende CRS-en</mark>

Bij uitwisseling en visualisatie van geo-informatie is het van belang om een CRS te kiezen dat geschikt is voor de toepassing en de gebruiker, dit wordt onder andere geadviseerd in [[SDW-BP]]. Eenduidig gebruik van CRS-en en transformaties voorkomt systematische effecten bij gebruik van meerdere datasets. Eenduidig gebruik is mogelijk door het maken van afspraken over het gebruik van eenduidige CRS-en en [transformaties](#conversie-en-transformatie).

Bij de keuze van het CRS is ook een onderscheid tussen de (authentieke) dataset en visualisatieservices (of informatiemodel, berichtenmodel en presentatiemodel?). Bij uitwisseling is het van belang dat er een eenduidige nauwkeurige relatie bestaat tussen het CRS van de brondata en het CRS van uitwisseling, zodat het voor het gebruik niet uitmaakt in welk CRS de dataset is uitgewisseld. Voor visualisatieservices is de beoogde toepassing en de mogelijkheid van eenvoudig gebruik óók voor niet-specialisten een belangrijke afweging. Vooral wanneer de juiste topologische weergave van data van belang is, of datasets worden gecombineerd in de visualisatie gaat eenvoudig niet altijd samen met het gebruik van precieze eenduidige transformaties en conversies. Bij minder precieze transformaties en conversies kunnen (toelaatbare) visuele verschillen  onstaan die afhankelijk zijn van de keuze van CRS en implementatie.

Spatial Data on the Web Best Practices [[SDW-BP]] raden aan om data voor visualisatie te publiceren in wereldwijd bruikbare CRS-en. De wereldwijdbruikbare CRS-en hebben als voordeel dat gebruik voor niet-specialisten laagdrempeliger wordt, maar deze CRS-en zijn bedeold vor gebruik op kleine (wereldwijde) schaal en voor grootschalige toepassingen. Het gebruik van deze wereldwijde CRS-en geeft risico op systematische fouten of inconsistenties wanneer de data niet alleen wordt gebruikt voor visualisatie of datasets worden gecombineerd. Hiervoor moeten zowel aanbieder, ontwikkelaar als eindgebruiker een afweging maken tussen laagdrempelig gebruik van geo-informatie en mogelijke gevolgen voor de beoogde toepassingen van de data.
### Doel

 Deze Handreiking heeft als doel om gebruikers vanuit het GIS / geo-informatie werkveld te voorzien van adviezen hoe om te gaan met met CRS-en bij uitwisseling en visualisatie van geo-informatie in de context van Landelijke Voorzieningen en vergelijkbare digitale stelsels.

<div class="example">
_VOORBEELD_ 
In het voorbeeld van de BGT gaat het dus om adviezen voor het omgaan met CRS-en bij:

1. uitwisseling tussen Bronhouder, Landelijke Voorziening en Dataplatform
2. uitwisseling en visualisatie van Dataplatform naar Gebruiker
</div>

De handreiking richt zich niet op adviezen voor het omgaan met CRS-en bij inwinning, verwerking en opslag van geo-informatie. 
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
