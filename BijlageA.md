## Bijlage A: CRS overzicht tabel

Onderstaande tabel geeft de naam en EPSG-code veelgebruikte CRS-en in Nederland. Een ensemble CRS groepeert volgens EPSG en ISO 19111:2019 individuele realisaties van CRS-en en kan worden gebruikt waneer voor de beoogde toepassing en nauwkeurigheid het verschil tussen de individuele relaties niet significant is. Voor het WGS 84 ensemble zijn de verschillen tussen realisaties circa 2 meter, voor ETRS89 realisaties zijn de verschillen minder dan 0,1 meter.

|CRS-naam|Authority:Code (URN als link)           |CRS-type          | Opmerkingen|
|--------|---------------------|------------------|------|
|RD|[EPSG:28992](https://www.opengis.net/def/crs/EPSG/9.9.1/28992)|Geprojecteerd<br>Stereografische projectie (x, y)|[Horizontaal CRS voor Nederland](https://www.nsgi.nl/geodetische-infrastructuur/referentiestelsels)
|NAP|[EPSG:5709](https://www.opengis.net/def/crs/EPSG/9.9.1/5709)|Vertikaal<br>hoogte (H)|[Vertikaal CRS voor Nederland](https://www.nsgi.nl/geodetische-infrastructuur/referentiestelsels)
|LAT-NL|[EPSG:9287](https://www.opengis.net/def/crs/EPSG/9.9.1/9287)|Vertikaal<br>diepte (H)|[Hydrografische toepassingen op zee](https://www.defensie.nl/onderwerpen/hydrografie/coordinatenstelsels-op-zee/dieptebepaling-op-zee)
|ETRS89|[EPSG:4258](https://www.opengis.net/def/crs/EPSG/9.9.1/4258)|Geografisch<br>GRS80 ellipsoïde (&phi;, &lambda;)|Ensemble<br>Binnen INSPIRE aangeduid als ETRS89-GRS80
|ETRS89|[EPSG:4937](https://www.opengis.net/def/crs/EPSG/9.9.1/4937)|Geografisch<br>GRS80 ellipsoïde (&phi;, &lambda;, h)|Ensemble<br>Binnen INSPIRE aangeduid als ETRS89-GRS80h
|ETRS89|[EPSG:4936](https://www.opengis.net/def/crs/EPSG/9.9.1/4936)|Geocentrisch (X, Y, Z)|Ensemble<br>Binnen INSPIRE aangeduid als ETRS89-XYZ
|ETRS89-LAEA|[EPSG:3035](https://www.opengis.net/def/crs/EPSG/9.9.1/3035)|Geprojecteerd<br>Lambert Equal Area projectie (Y, X)|[INSPIRE projectie voor statistische data](https://inspire.ec.europa.eu/id/document/tg/rs)
|ETRS89-LCC|[EPSG:3034](https://www.opengis.net/def/crs/EPSG/9.9.1/3034)|Geprojecteerd<br>Lambert Conformal Conical (N, E)|[INSPIRE projectie voor kleinschalige (< 1:500 000) pan-Europese data](https://inspire.ec.europa.eu/id/document/tg/rs)
|ETRS89-TM31|[EPSG:3043](https://www.opengis.net/def/crs/EPSG/9.9.1/3043)|Geprojecteerd<br>Transversale Mercator projectie (N, E)|[INSPIRE projectie voor grootschalige (> 1:500 000) data voor zone 31N (0° to 6°E)](https://inspire.ec.europa.eu/id/document/tg/rs) 
|ETRS89-TM32|[EPSG:3044](https://www.opengis.net/def/crs/EPSG/9.9.1/3044)|Geprojecteerd<br>Transversale Mercator projectie (N, E)|[INSPIRE projectie voor grootschalige (> 1:500 000) data voor zone 32N (6° to 12°E)](https://inspire.ec.europa.eu/id/document/tg/rs) 
|ETRF2000|[EPSG:7931](https://www.opengis.net/def/crs/EPSG/9.9.1/7931)|Geografisch<br>GRS80 ellipsoïde (&phi;, &lambda;, h)|[Aanbevolen ETRS89-realisatie voor geo-informatie dor EUREF](http://etrs89.ensg.ign.fr/pub/EUREF-TN-1.pdf)
|ETRF2000|[EPSG:9067](https://www.opengis.net/def/crs/EPSG/9.9.1/9067)|Geografisch<br>GRS80 ellipsoïde (&phi;, &lambda;)|[Aanbevolen ETRS89-realisatie voor geo-informatie dor EUREF](http://etrs89.ensg.ign.fr/pub/EUREF-TN-1.pdf)
|ETRF2000|[EPSG:7930](https://www.opengis.net/def/crs/EPSG/9.9.1/7930)|Geocentrisch (X, Y ,Z)|[Aanbevolen ETRS89-realisatie voor geo-informatie dor EUREF](http://etrs89.ensg.ign.fr/pub/EUREF-TN-1.pdf)
|EVRF2007|[EPSG:5621](https://www.opengis.net/def/crs/EPSG/9.9.1/5621)|Vertikaal<br>Normaal hoogte (H)|
|EVRF2019 mean-tide|[EPSG:9390](https://www.opengis.net/def/crs/EPSG/9.9.1/9390)|Vertikaal<br>Normaal hoogte (H)|[EVRS-realisatie voor plaatsbepaling](https://evrs.bkg.bund.de/Subsites/EVRS/EN/EVRF2019/evrf2019.html)
|RDNAP|[EPSG:7415](https://www.opengis.net/def/crs/EPSG/9.9.1/7415)|Samengesteld<br>RD en NAP|
|ETRS89 + NAP|[EPSG:9286](https://www.opengis.net/def/crs/EPSG/9.9.1/9286)|Samengesteld<br>ETRS89-GRS80 en NAP|ETRS89=Ensemble
|ETRS89 + EVRF2007|[EPSG:7423](https://www.opengis.net/def/crs/EPSG/9.9.1/7423)|Samengesteld<br>ETRS89-GRS80 en EVRF2007|ETRS89=Ensemble
|ETRS89 + EVRF2019 mean-tide|[EPSG:9423](https://www.opengis.net/def/crs/EPSG/9.9.1/9423)|Samengesteld<br>ETRS89-GRS80 en EVRF2019|ETRS89=Ensemble
|ETRS89 + LAT-NL|[EPSG:9289](https://www.opengis.net/def/crs/EPSG/9.9.1/9289)|Samengesteld<br>ETRS89-GRS80 en LAT-NL|ETRS89=Ensemble
|ETRF2000 + NAP||Samengesteld<br>Geografisch ETRF2000 en NAP|
|ITRF2014|[EPSG:9000](https://www.opengis.net/def/crs/EPSG/9.9.1/9000)|Geografisch<br>GRS80 ellipsoïde  (&phi;, &lambda;)|Aanbevolen wereldwijd CRS door VN, IUGG en EPSG
|ITRF2014|[EPSG:7912](https://www.opengis.net/def/crs/EPSG/9.9.1/7912)|Geografisch<br>GRS80 ellipsoïde  (&phi;, &lambda;, h)|Aanbevolen wereldwijd CRS door VN, IUGG en EPSG
|ITRF2014|[EPSG:7789](https://www.opengis.net/def/crs/EPSG/9.9.1/7789)|Geocentrisch (X, Y, Z)|Aanbevolen wereldwijd CRS door VN, IUGG en EPSG
|WGS 84|[EPSG:4326](https://www.opengis.net/def/crs/EPSG/9.9.1/4326)|Geografisch<br>WGS 84 ellipsoïde (&phi;, &lambda;)|Ensemble<br>CRS van het Amerkiaanse GPS-systeem, vaak gebruikt in minder nauwkeurige toepassingen en visualisaties.
|CRS84|[OGC:CRS84](https://www.opengis.net/def/crs/OGC/0/CRS84)|Geografisch<br>WGS 84 ellipsoïde (&lambda;, &phi;)|Aanbevolen wereldwijd CRS voor toepassingen op het web door OGC. Verschil met WGS 84 is de volgorde van de coördinaten (lengte, breedte in plaats van breedte, lengte)
|CRS84h|[OGC:CRS84h](https://www.opengis.net/def/crs/OGC/0/CRS84h)|Geografisch<br>WGS 84 ellipsoïde (&lambda;, &phi;)|Aanbevolen wereldwijd CRS voor 3D toepassingen op het web door OGC. Verschil met WGS 84 is de volgorde van de coördinaten (lengte, breedte, hoogte in plaats van breedte, lengte)
|WGS 84|[EPSG:4979](https://www.opengis.net/def/crs/EPSG/9.9.1/4979)|Geografisch<br>WGS 84 ellipsoïde  (&phi;, &lambda;, h)|Ensemble<br>Aanbevolen wereldwijd CRS voor toepassingen op het web door OGC
|WGS 84 (G2139)|[EPSG:9755](https://www.opengis.net/def/crs/EPSG/9.9.1/9755)|Geografisch (&phi;, &lambda;)|WGS 84 realisatie van 3 januari 2021
|WGS 84 (G2139)|[EPSG:9754](https://www.opengis.net/def/crs/EPSG/9.9.1/9754)|Geografisch (&phi;, &lambda;, h)|WGS 84 realisatie van 3 januari 2021
|WGS 84 (G2139)|[EPSG:9753](https://www.opengis.net/def/crs/EPSG/9.9.1/9753)|Geocentrisch (X, Y, Z)|WGS 84 realisatie van 3 januari 2021
|WGS 84 / Web Mercator of Pseudo Mercator|[EPSG:3857](https://www.opengis.net/def/crs/EPSG/9.9.1/3857)|Gesimplificeerde  mercator projectie (x, y)|Geen geodetisch CRS, alleen geschikt eenvoudige visualisatie van onnauwkeurige data<br>Aanbevolen voor visualisatie op het web door OGC
|WGS 84 / UTM Zone 31N|[EPSG:32631](https://www.opengis.net/def/crs/EPSG/9.9.1/32631)|Transversale Mercator projectie (N, E)|Projectie voor UTM zone 31N (0° to 6°E)
|WGS 84 / UTM Zone 32N|[EPSG:32632](https://www.opengis.net/def/crs/EPSG/9.9.1/32632)|Transversale Mercator projectie (N, E)|Projectie voor UTM zone 32N (6° to 12°E)
