## Specificeren van CRS



### Naamgeving van CRS
|CRS-naam|URN           |Datum1          | CS1     |Datum2 | CS2 |Opmerking|
|--------|--------------|----------------|---------|-------|------|------|
|RD|urn:ogc:def:crs:EPSG::28992|RD Bessel| Stereografische dubbelprojectie|
|NAP|urn:ogc:def:crs:EPSG::5709|NAP| Waterpashoogte||||
|ETRS89|urn:ogc:def:crs:EPSG::4936|ETRS89 |Geocentrisch|||Ensemble|
|ETRS89|urn:ogc:def:crs:EPSG::4258|ETRS89 |Geografisch 2D|||Ensemble|
|ETRS89|urn:ogc:def:crs:EPSG::4937|ETRS89 |Geografisch 3D|||Ensemble|
|ETRF2000|urn:ogc:def:crs:EPSG::7930|ETRS89|Geocentrisch|||||
|ETRF2000|urn:ogc:def:crs:EPSG::7931|ETRS89|Geografisch 3D|||||
|ETRF2000|urn:ogc:def:crs:EPSG::9067|ETRS89|Geografisch 2D|||||
|EVRF2007|urn:ogc:def:crs:EPSG::5621|NAP|Normaal hoogte|||||
|EVRF2019|urn:ogc:def:crs:EPSG::9389|NAP|Normaal hoogte|||||
|RD + NAP|urn:ogc:def:crs:EPSG::7415|RD Bessel|Geprojecteerd|NAP|Waterpashoogte||
|ETRS89 + NAP|urn:ogc:def:crs:EPSG::7432|ETRS89|Geografisch|NAP|Waterpashoogte|ETRS89=Ensemble|
|ETRS89 + EVRF2007|urn:ogc:def:crs:EPSG::7423|ETRS89|Geografisch|NAP|Normaal hoogte|ETRS89=Ensemble|
|ETRS89 + EVRF2019|urn:ogc:def:crs:EPSG::9422|ETRS89|Geografisch|NAP|Normaal hoogte|ETRS89=Ensemble|
|ETRF2000 + NAP||ETRS89|Geografisch|NAP|Waterpashoogte||
|enzovoort...||||||

### CRS in het informatiemodel

[Voorbeeld BRO](https://broprogramma.github.io/BHR-G/#co%C3%B6rdinaten-en-referentiestelsels) [[BRO-CAT]]
### CRS bij uitwisselingsformaten

#### GeoJson

#### GML

#### Geopackage

#### OGC API



