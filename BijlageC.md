## Bijlage A: CRS overzicht tabel

Onderstaande tabel geeft EPSG-code, het datum en het coördinaat systeem voor veelgebruikte CRS-en in Nederland. Wanneer ook de kolommen Datum2 en CS2 zijn ingevuld is sprake van een samengesteld (compound) CRS.

|CRS-naam|EPSG-code            |Datum1          | CS1     |Datum2 | CS2 |Opmerking|
|--------|--------------|----------------|---------|-------|------|------|
|RD|28992|RD Bessel|Stereografische projectie (x, y)|
|NAP|5709|NAP| Waterpashoogte (H)||||
|LAT-NL??|   |LAT| (H)|||Hydrografische toepassingen op zee|
|ETRS89-GRS80|4258|ETRS89|Geografisch (ϕ, λ)|||Ensemble|
|ETRS89-GRS80h|4937|ETRS89|Geografisch (ϕ, λ, h)|||Ensemble|
|ETRS89-XYZ|4936|ETRS89|Geocentrisch (X, Y, Z)|||Ensemble|
|ETRS89-LAEA|3035|ETRS89 |Lambert Equal Area projectie (y, x)|||INSPIRE projectie voor statistische data|
|ETRS89-LCC|3034|ETRS89 |Lambert Conformal Conical (N, E)|||INSPIRE projectie voor kleinschalige (< 1:500 000) pan-Europese data|
|ETRS89-TM|3043|ETRS89 |Transversale Mercator projectie (N, E)|||INSPIRE projectie voor grootschalige (> 1:500 000) data voor zone 31N (0° to 6°E) |
|ETRS89-TM|3044|ETRS89 |Transversale Mercator projectie (N, E)|||INSPIRE projectie voor grootschalige (> 1:500 000) data voor zone 32N (6° to 12°E) |
|ETRF2000|7931|ETRS89|Geografisch (ϕ, λ, h)|||Aanbevolen ETRS89-realisatie voor geo-informatie|
|ETRF2000|9067|ETRS89|Geografisch (ϕ, λ)|||Aanbevolen ETRS89-realisatie voor geo-informatie|
|ETRF2000|7930|ETRS89|Geocentrisch (X, Y ,Z)|||Aanbevolen ETRS89-realisatie voor geo-informatie|
|EVRF2007|5621|NAP|Normaal hoogte (H)|||||
|EVRF2019|9389|NAP|Normaal hoogte (H)|||||
|RD + NAP|7415|RD Bessel|Stereografische projectie (x,y)|NAP|Waterpashoogte (H)||
|ETRS89 + NAP|7432|ETRS89|Geografisch (ϕ, λ)|NAP|Waterpashoogte (H)|ETRS89=Ensemble|
|ETRS89 + EVRF2007|7423|ETRS89|Geografisch (ϕ, λ)|NAP|Normaal hoogte (H)|ETRS89=Ensemble|
|ETRS89 + EVRF2019|9422|ETRS89|Geografisch (ϕ, λ)|NAP|Normaal hoogte (H)|ETRS89=Ensemble|
|ETRS89 + LAT|9422|ETRS89|Geografisch (ϕ, λ)|NAP|Normaal hoogte (H)|ETRS89=Ensemble|
|ETRF2000 + NAP||ETRS89|Geografisch (ϕ, λ)|NAP|Waterpashoogte (H)||
|ITRF2014|9000|ITRS|Geografisch (ϕ, λ)||||
|ITRF2014|7912|ITRS|Geografisch (ϕ, λ, h)||||
|ITRF2014|7789|ITRS|Geocentrisch (X, Y, Z)||||
|WGS 84|4258|WGS 84|Geografisch (ϕ, λ)|||Ensemble|
|WGS 84|4979|WGS 84|Geografisch (ϕ, λ, h)|||Ensemble|
|WGS 84 (G2139)|9755|WGS 84|Geografisch (ϕ, λ)|||WGS 84 realisatie van 3 januari 2021|
|WGS 84 (G2139)|9754|WGS 84|Geografisch (ϕ, λ, h)|||WGS 84 realisatie van 3 januari 2021|
|WGS 84 (G2139)|9753|WGS 84|Geocentrisch (X, Y, Z)|||WGS 84 realisatie van 3 januari 2021|
|WGS 84 / Web Mercator of Pseudo Mercator|3857|WGS 84|Gesimplifiseerde mercator projectie (x, y)|||Geen geodetisch CRS, alleen geschikt eenvoudige visualisatie van onnauwkeurige data|
|WGS 84 / UTM Zone 31N|32631|WGS 84|Transversale Mercator projectie (N, E)|||Projectie voor UTM zone 31N (0° to 6°E)|
|WGS 84 / UTM Zone 32N|32632|WGS 84|Transversale Mercator projectie (N, E)|||Projectie voor UTM zone 32N (6° to 12°E)|
