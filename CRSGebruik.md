## CRS-gebruik bij verschillende toepassingen

In het [vorige hoofdstuk](#crs-en-in-nederland) zijn de CRS-en beschreven die worden gebruikt in Nederland. Dit hoofstuk geeft voor verschillende toepassingen de mogelijke CRS-en aan.

### Opslag en uitwisseling van data

Voor opslag en uitwisseling wordt het gebruik van eenduidige CRS-en geadviseerd. De data hoeft voor opslag en uitwisseling niet geprojecteerd te zijn. Voor hoge nauwkeurigheid kan voor de horizontale component het [RD](#crs-op-land-rd-en-nap) geografisch of geprojecteerd [ETRS89](#europees-crs-etrs89) (bij centimeternauwkeurigheid de realisatie ETRF2000) en realisaties van het [ITRS](#itrs) (inclusief epoche) worden gebruikt. Bij 3D datasets kan [RDNAP](#crs-op-land-rd-en-nap), geografisch ETRS89-GRS80h (bij centimeternauwkeurigheid de realisatie ETRF2000) of een ITRS-realisatie (inclusief epoche) worden gebruikt. Daarnaast kan een samengesteld (compound) CRS worden gebruikt voor 3D data, waarbij de geprojecteerde of geografische 2D-data wordt aangevuld met een 1D CRS zoals NAP of EVRF2019. 

### Uitwisseling voor visualisatie

Bij visualisatie in een plat vlak wordt een geprojecteerd CRS gebruikt. De keuze van de kaartprojectie is afhankelijk van de toepassing en schaal, de RD-projectie is voor veel toepassingen binnen Europees Nederland een geschikte projectie met weinig vervorming en schaaleffecten. 

Het is een misverstand dat de RD-projectie niet geschikt is voor gebruik op zee, maar dat hiervoor een UTM-variant moet worden gebruikt zoals ETRS89-TM*zn*. Alleen in de meest noordwestelijke punt van de Nederlandse Exclusieve Economische Zone (EEZ) heeft de RD-projectie voor sommige toepassingen ongunstigere eigenschappen dan de ETRS89-TM*zn* projectie. ETRS89-TM*zn* heeft als nadeel dat nederland in twee zones (31 en 32) valt, de RD-projectie geeft op land en het grootste deel van de Noordzee minder vervormingen dan ETRS89-TM*zn*.

#### Visualisatie op het web

Voor visualisatie op het web is het uitgangspunt dat de data wordt afgebeeld op een plat beeldscherm. De de-facto kaartprojectie die door veel tooling wordt ondersteund is de Web-Mercator projectie op basis van WGS 84. [SDW-BP](https://www.w3.org/TR/sdw-bp/) raden aan om minimaal [WGS 84](#wgs-84) aan te bieden voor visualisatie op het web. De Web-Mercator projectie is geschikt voor visualisatie, maar niet voor het uitvoeren van berekeningen. Voor nauwkeurige visualisatie toepassingen op het web is het daarom nodig data ook aan te bieden in andere CRS-en, zoals RD, ETRS89-LAEA, ETRS89-LCC en ETRS89-TM*zn* en bij de implementatie tooling en services te gebruiken die deze CRS-en ondersteunen.

### INSPIRE
Bij visualisatie in het kader van INSPIRE zijn een aantal projecties van geografisch ETRS89 gedefinieërd, namelijk ETRS89-LAEA, ETRS89-LCC en ETRS89-TM*zn*. 

Voor INSPIRE-verplichtingen mag voor data-uitwisseling van 2D vectordata zowel geografisch als geprojecteerd ETRS89 worden gebruikt. Bij uitwisseling en visualisatie van 2D rasterdata wordt volgens sectie 2.2 van [Annex II](http://data.europa.eu/eli/reg/2010/1089/oj) ETRS89-LAEA gebruikt, tenzij daar binnen de technische specificaties van wordt afgeweken. Sectie 2.2.1 van [Annex II](http://data.europa.eu/eli/reg/2010/1089/oj) geeft de definitie van de eigenschappen van het ETRS89-LAEA raster, zoals de mogelijke resoluties en de celnummering.

Voor 3D datasets gelden voor vector- en rasterdata dezelfde voorwaarden als voor 2D data. Voor 3D data kan het geografisch ETRS89-GRS80h worden gebruikt of een samengesteld CRS met als 1D CRS een EVRS-realisatie op land en op zee LAT in getijdegebied (zee en kustgebied), of MSL in gebieden waar geen significant getij aanwezig is, en als 2D CRS een geografisch of geprojecteerd INSPIRE CRS. 

<div class="example">
_VOORBEELD_
Afhankelijk van de specifieke INSPIRE datasets kan worden afgeweken van de voorwaarde in sectie 2.2 van [Annex II](http://data.europa.eu/eli/reg/2010/1089/oj) (namelijk dat ETRS89-LAEA wordt gebruikt voor het visualisatie en uitwisseling van rasterdata) en een specifieke andere aanbeveling worden gedaan. Een voorbeeld hiervan is de [Annex III](https://eur-lex.europa.eu/eli/reg/2013/1253/oj) in paragraaf 1.7.2 voor hoogterasters. 

<em>
Eisen voor hoogteraster coverages

(1) In afwijking van de eis in Paragraaf 2.2 van bijlage II, kan elk raster dat verenigbaar is met een van de
volgende coördinatenreferentiesystemen worden gebruikt om gerasterde hoogtegegevens te leveren:

— twee-dimensionale geodetische coördinaten (breedtegraad en lengtegraad) gebaseerd op een datum
gespecificeerd in 1.2 van bijlage II en met gebruik van de parameters van de GRS80 ellipsoïde;

— vlakke coördinaten met gebruik van het ETRS89 Lambert hoekgetrouwe conische coördinaatreferentiesysteem;

T
Het raster gespecificeerd in Paragraaf 2.2.1 van bijlage II moet niet worden gebruikt.
</em>

Waarbij *Het raster gespecificeerd in Paragraaf 2.2.1 van bijlage II* ETRS89-LAEA is. 

In aanvulling hierop wordt in de [technische specificaties voor hoogtedata](https://inspire.ec.europa.eu/id/document/tg/el) de aanbeveling gedaan om voor uitwisseling een samengesteld CRS te gebruiken, bestaand uit geografisch of geprojecteerd ETRS89 als 2D CRS en EVRS als 1D CRS: 

*Recommendation 13
  For pan-European global Elevation datasets the compound CRS ETRS89-GRS80/EVRS is recommended for data provision, in areas within the geographical scope of ETRS89.*

Voor visualisatie wordt het samengestelde CRS geprojecteerd ETRS89TM*zn* voor 2D en EVRS voor 1D aanbevolen:

*Recommendation 14 
  For regional European Elevation datasets, covering specific parts of countries, the compound CRS ETRS89-TMzn/EVRS is recommended for data provision and display, in areas within the geographical scope of ETRS89.*

</em>
</div>
