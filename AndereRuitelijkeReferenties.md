## Andere ruimtelijke referenties

Naast het gebruik van een CRS kan de locatie van een object ook o.b.v. een lineaire referentie of indirect beschreven zijn. In dit hoofdstuk een toelichting.

### Lineaire referentie

Bij een lineair referentie systeem (ISO 19148) wordt de afstand tot een bekend punt in een netwerkvastgelegd.

Bijvoorbeeld een netwerk dat bestaat uit alle wegonderdelen. Elk wegonderdeel heeft een unieke coderingen een lengte. Van objecten die een deel van het wegonderdeel betreft (bijvoorbeeld een weglaagvak)hoeft alleen maar het begin-, eindpunt en de code van het betreffende wegonderdeel geadministreerd ten worden. Van puntobjecten, zoals verkeersborden, hoeft alleen maar het punt en de code van hetbetreffende wegonderdeel vastgelegd te worden. Uiteraard worden van de wegonderdelen wel de X- en Y-coördinaten van begin-, eindpunt en knikpunten vastgelegd. Het is van belang te realiseren dat vanobjecten die gelokaliseerd worden met een lineaire referentie niet de absolute positie wordt weergegeven. De relatieve positie is bekend t.o.v. de wegonderdelen, maar niet de absolute positie ten opzichte van de aarde.

### Indirect

Voor het gebruik van indirecte ruimtelijke referenties of geografische identificaties zijn veel mogelijkheden. De basisregistratie adressen (als onderdeel van de BAG) zal hierin een belangrijke functie gaan vervullen.Immers daarin zijn de adressen (straatnamen en huisnummers) opgenomen en hun locatie. Daardoor kan er eenvoudig verwezen worden naar een BAG-adres of een BAG-straat vanuit een ander informatieobject,om zodoende toch de locatie te weten van het informatieobject.

Er bestaan ook een hele groep geografische namen die niet expliciet geduid zijn. Zo kent de ‘UtrechtseHeuvelrug’ geen formele begrenzing, maar weet iedereen wel ongeveer waar het ligt. Die worden alstoponiemen weergegeven op de topografische kaarten van Nederland.

Bij het georefereren naar geografische identificaties, is de context weer van belang. Als van eeninformatieobject de locatie indirect wordt vastgelegd moet ook gekeken worden wat er gebeurt als de geometrie van de gegeorefereerde geografische identificatie verandert. Zo kan een bodemvervuilinglocatie vastgelegd worden op basis van het kadastrale perceel, maar dat kadastrale perceel kan latergescheiden worden. De wijk de Berggierslanden in Meppel ligt in een voormalig stuk van de gemeenteStaphorst en provincie Overijssel. Hierdoor zijn de algemene bepalingen van de gemeente Staphorst nietmeer van kracht op dit gebied. Maar verleende vergunningen voor bedrijfsactiviteiten binnen dit gebiedvallen nu wel onder de gemeente en woonplaats Meppel. Indien bij het georefereren geen rekeninggehouden is met het effect van dergelijke wijzigingen, dan kan een verleende vergunning voor eenbedrijfspand in principe niet meer gevonden worden.

Geografische identificaties kunnen ook opgenomen worden bij de metadata van ongestructureerdeinformatieobjecten zoals documenten. In de Dublin Core standaard is daartoe dc.Spatial opgenomen.