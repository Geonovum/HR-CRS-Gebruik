## Inleiding

Voor de inwinning, verwerking, opslag, uitwisseling en visualisatie van geo-informatie worden in de praktijk voor dezelfde dataset verschillende CRSen gebruikt. In veel gevallen wordt de dataset opgeslagen in 1 CRS, maar worden voor de inwinning, uitwisseling en visualisatie meerdere CRSen gebruikt. 
<div class="example">
_VOORBEELD_ 
Het gebruik van CRSen bij keten van inwinning tot uitwisseling en visualisatie van de Basisregistratie Grootschalige Topografie kan als volgt worden geïnterpreteerd:

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggTFJcbiAgc3ViZ3JhcGggQnJvbmhvdWRlclxuICBzdWJncmFwaCBJbndpbm5pbmdcbiAgICBBMVtcIkVUUlM4OSA8YnI-IChHTlNTLVJUSylcIl0gXG4gICAgICAgIEEyW1wiUkQgPGJyPiAoTHVjaHRmb3RvKVwiXVxuICAgIEEzW1wiTG9rYWFsIDxicj4gKFRhY2h5bWV0cmllIDxicj4gTWVldGJhbmQpXCJdXG4gIGVuZFxuICBzdWJncmFwaCBWZXJ3ZXJraW5nIGVuIG9wc2xhZ1xuICAgIEJbUkRdXG4gIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggTGFuZGVsaWprZSBWb29yemllbmluZ1xuICBzdWJncmFwaCBPcHNsYWdcbiAgICBEW1JEXVxuICBlbmRcbiAgZW5kXG4gIHN1YmdyYXBoIFZpc3VhbGlzYXRpZVxuICAgIEUxW0VUUlM4OV1cbiAgICBFMltSRF1cbiAgICBFM1tXR1M4NF1cbiAgZW5kXG4gIEExLS0-QlxuICBBMi0tPkJcbiAgQTMtLT5CXG4gIEItLT58VWl0d2lzc2VsaW5nfERcbiAgRC0tPnxVaXR3aXNzZWxpbmd8RTFcbiAgRC0tPnxVaXR3aXNzZWxpbmd8RTJcbiAgRC0tPnxVaXR3aXNzZWxpbmd8RTMiLCJtZXJtYWlkIjp7fSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggTFJcbiAgc3ViZ3JhcGggQnJvbmhvdWRlclxuICBzdWJncmFwaCBJbndpbm5pbmdcbiAgICBBMVtcIkVUUlM4OSA8YnI-IChHTlNTLVJUSylcIl0gXG4gICAgICAgIEEyW1wiUkQgPGJyPiAoTHVjaHRmb3RvKVwiXVxuICAgIEEzW1wiTG9rYWFsIDxicj4gKFRhY2h5bWV0cmllIDxicj4gTWVldGJhbmQpXCJdXG4gIGVuZFxuICBzdWJncmFwaCBWZXJ3ZXJraW5nIGVuIG9wc2xhZ1xuICAgIEJbUkRdXG4gIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggTGFuZGVsaWprZSBWb29yemllbmluZ1xuICBzdWJncmFwaCBPcHNsYWdcbiAgICBEW1JEXVxuICBlbmRcbiAgZW5kXG4gIHN1YmdyYXBoIFZpc3VhbGlzYXRpZVxuICAgIEUxW0VUUlM4OV1cbiAgICBFMltSRF1cbiAgICBFM1tXR1M4NF1cbiAgZW5kXG4gIEExLS0-QlxuICBBMi0tPkJcbiAgQTMtLT5CXG4gIEItLT58VWl0d2lzc2VsaW5nfERcbiAgRC0tPnxVaXR3aXNzZWxpbmd8RTFcbiAgRC0tPnxVaXR3aXNzZWxpbmd8RTJcbiAgRC0tPnxVaXR3aXNzZWxpbmd8RTMiLCJtZXJtYWlkIjp7fSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)


Bij de inwinning van de BGT worden ETRS89, RD en lokale CRSen gebruikt. Voor de opslag bij bronhouders en de Landelijke Voorziening en de uitwisseling daartussen wordt RD gebruikt. Voor uitwisseling en visualisatie worden ETRS89, RD en WGS84 gebruikt, waarbij voor ETRS89 en WGS84 verschillende projecties mogelijk zijn. 
</div>

Eenduidig gebruik van CRSen en transformaties daartussen is van belang om systematische effecten te voorkomen bij gebruik van meerdere datasets. Bij gebruik van geo-informatie is het van belang om een CRS te kiezen dat geschikt is voor de toepassing.

### Doel

Deze Handreiking is bedoeld om gebruikers vanuit het GIS / geo-informatie werkveld voorzien van adviezen hoe om te gaan met met CRSen bij uitwisseling en visualisatie van geo-informatie. 

<div class="example">
_VOORBEELD_ 
In het voorbeeld van de BGT gaat het dus om adviezen voor het omgaan met CRSen bij:

1. uitwisseling tussen Bronhouder en Landelijke Voorziening
2. uitwisseling en visualisatie van Landelijke Voorziening naar gebruiker
</div>
De handreiking richt zich niet op adviezen voor het omgaan met CRSen bij inwinning en opslag van geo-informatie.

### Leeswijzer

*Beschrijf hoe het document gelezen moet worden, welke hoofdstukken voor wie bedoeld zijn, enz...*

Deze handreiking behandeld de volgende onderwerpen:

- CRSen voor Nederland (achtergrond informatie over aanbevolen CRSen)
  - Naamgeving van CRSen (advies voor naamgeving en bijbehorende URN/EPSG codes)
  - Relaties tussen CRSen (RD, NAP, MSL? en LAT? <--> ETRS89 en EVRF <--> ITRS <--> WGS84)
  
    - Concept van transformatie en conversie (dictaat Tu Delft)
    - EPSG concept van datum ensembles (nauwkeurigheids verlies door meerduidigheid)
- Vervorming van geometrieën bij CRS-transformaties en projecties
  - Langelijnen advies (samenvatting NSGI advies)
  - Eigenschappen geprojecteerde CRS-en (INSPIRE, web-mercator)
- Gebruik van CRSen in uitwisselingsstandaarden
  - GeoJson
  - GML
  - Geopackage
  - OGC API
  - RF

### Het proces

*Beschrijf het proces waarmee dit document is ontwikkeld*
