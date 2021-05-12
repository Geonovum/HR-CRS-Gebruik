## Inleiding

Voor de inwinning, verwerking, opslag, uitwisseling en visualisatie van geo-informatie worden in de praktijk voor dezelfde dataset verschillende CRSen gebruikt. In veel gevallen wordt de dataset opgeslagen in 1 CRS, maar worden voor de inwinning, uitwisseling en visualisatie meerdere CRSen gebruikt. 

<div class="example">
_VOORBEELD_ 
Als voorbeeld wordt hieronder het gebruik van CRSen bij keten van inwinning tot uitwisseling en visualisatie van de Basisregistratie Grootschalige Topografie geïllustreerd:

<div class="mermaid">
graph LR
  subgraph Bronhouder
  subgraph Inwinning
    A1["ETRS89 <br> (GNSS-RTK)"] 
        A2["RD <br> (Luchtfoto)"]
    A3["Lokaal <br> (Tachymetrie <br> Meetband)"]
  end
  subgraph Verwerking en opslag
    B[RD]
  end
  end
  subgraph Landelijke Voorziening
  subgraph Opslag
    D[RD]
  end
  end
  subgraph Visualisatie
    E1[ETRS89]
    E2[RD]
    E3[WGS84]
  end
  A1-->B
  A2-->B
  A3-->B
  B-->|Uitwisseling|D
  D-->|Uitwisseling|E1
  D-->|Uitwisseling|E2
  D-->|Uitwisseling|E3
  

</div>

```code
ETRS89------\                                        
(GNSS-RTK)   \                                      /--ETRS89
              \                                    /     |- 5 INSPIRE projecties
RD------------->----RD---->------RD------>---RD---<----RD 
(Luchtfoto)    |                                   \
              /                                     \--WGS84 
Lokaal-------/                                           |- geografisch
(Tachymetrie, Meetband)                                  |- web-mercator

|  Inwinning   |Verwerking| Uitwisseling | Opslag | Uitwisseling en Visualisatie  |
               |en opslag |              |        |                               |
|          Bronhouder          |    Landelijke voorziening       |   Gebruiker    |
```

Bij de inwinning van de BGT worden ETRS89, RD en lokale CRSen gebruikt, voor de opslag bij bronhouders en de Landelijke Voorziening en de uitwisseling daartussen wordt RD gebruikt. Voor uitwisseling en visualisatie worden ETRS89, RD en WGS84 gebruikt, waarbij voor ETRS89 en WGS84 verschillende projecties mogelijk zijn. 
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
