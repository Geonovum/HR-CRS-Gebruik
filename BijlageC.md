## Bijlage A: CRS overzicht tabel

Onderstaande tabel geeft EPSG-code, het datum en het coördinaat systeem voor veelgebruikte CRS-en in Nederland. Wanneer ook de kolommen Datum2 en CS2 zijn ingevuld is sprake van een samengesteld (compound) CRS.

|CRS-naam|EPSG-code            |Datum1          | CS1     |Datum2 | CS2 |Opmerking|
|--------|--------------|----------------|---------|-------|------|------|
|RD|28992|RD Bessel| Dubbelprojectie van Schreiber(x, y)|
|NAP|5709|NAP| Waterpashoogte (H)||||
|ETRS89|4258|ETRS89 |Geografisch 2D (ϕ, λ)|||Ensemble|
|ETRS89|4937|ETRS89 |Geografisch 3D (ϕ, λ, h)|||Ensemble|
|ETRS89|4936|ETRS89 |Geocentrisch (X, Y, Z)|||Ensemble|
|ETRF2000|7931|ETRS89|Geografisch 3D (ϕ, λ, h)|||Aanbevolen ETRS89 realisatie voor geo-informatie|
|ETRF2000|9067|ETRS89|Geografisch 2D (ϕ, λ)|||Aanbevolen ETRS89 realisatie voor geo-informatie|
|ETRF2000|7930|ETRS89|Geocentrisch (X, Y ,Z)|||Aanbevolen ETRS89 realisatie voor geo-informatie|
|EVRF2007|5621|NAP|Normaal hoogte (H)|||||
|EVRF2019|9389|NAP|Normaal hoogte (H)|||||
|RD + NAP|7415|RD Bessel|Geprojecteerd|NAP|Waterpashoogte (H)||
|ETRS89 + NAP|7432|ETRS89|Geografisch|NAP|Waterpashoogte (H)|ETRS89=Ensemble|
|ETRS89 + EVRF2007|7423|ETRS89|Geografisch|NAP|Normaal hoogte (H)|ETRS89=Ensemble|
|ETRS89 + EVRF2019|9422|ETRS89|Geografisch|NAP|Normaal hoogte (H)|ETRS89=Ensemble|
|ETRF2000 + NAP||ETRS89|Geografisch|NAP|Waterpashoogte (H)||
|WGS 84|4258|WGS 84|Geografisch 2D (ϕ, λ)|||Ensemble|
|WGS 84 (G2139)|9755|WGS 84|Geografisch 2D|||WGS 84 realisatie va 3 januari 2021|
