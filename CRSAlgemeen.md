## Coördinaat referentiesystemen 

Geo-informatie is direct gekoppeld aan locaties op aarde. De wijze waarop dat gebeurt wordt beschreven in het ruimtelijk-referentie systeem. Er zijn meerdere methoden om de locatie van objecten vast te leggen. De meest bekende methode is het gebruik van coördinaatreferentiesystemen (CRS) waarbij coördinaten van een locatie worden vastgelegd. 

CRS-en nemen de vorm van de aarde als uitgangspunt om de locaties vast te leggen. Maar niets is zo ingewikkeld als meten op een bol met de bedoeling dit in een plat vlak (kaart) weer te geven. Zeker niet als die bol niet een exacte bol is.

### Ellipsoïdes: Het benaderen van de aardbol

Bij een grove benadering is de aarde een bol. Maar de aarde is bij de polen afgeplat, en een driedimensionale ellips, een zogenaamde ellipsoïde, is een betere benadering. Maar ook dan is de vorm van het aardoppervlak, met al zijn bergen en dalen, onmogelijk perfect wiskundig te beschrijven.

Een ellipsoïde voor wereldwijd gebruik heeft tot doel het gehele aardoppervlak zo goed mogelijk te beschrijven. Er kunnen echter ook ellipsoïdes gedefinieerd worden met een iets ander middelpunt, een iets andere oriëntatie en een iets andere vorm, die zo goed mogelijk bij een bepaald gedeelte van het aardoppervlak passen. Zo is voor Nederland in de negentiende eeuw de Bessel-ellipsoïde gedefinieerd. Een voorbeeld van een wereldwijde ellipsoïde is de WGS84-ellipsoïde, van het GPS-systeem (satellietnavigatie).

Coördinaten op zo’n wiskundig lichaam (de benadering van de aardbol) zijn geografische coördinaten. Een punt op aarde wordt daarbij beschreven door een lengtegraad en een breedtegraad ten opzichte van de nulmeridiaan door Greenwich respectievelijk de evenaar.

Het omrekenen tussen verschillende ellipsoïdes heet datumtransformatie.

### Kaartprojecties: De aarde plat slaan

Hoe beeld je de bolle aarde af op een plat vlak zoals een kaart of een beeldscherm? De bolle aarde volledig correct verbeelden in een platte kaart is onmogelijk. Welke projectiemethode er ook gebruikt wordt, de werkelijkheid wordt altijd geweld aangedaan. In een kaart kunnen niet tegelijkertijd met de werkelijkheid overeenkomende maten voor hoeken, afstanden en oppervlaktes worden gemeten. Hoe groter het gebied is dat wordt afgebeeld, hoe groter de vervormingen in het kaartvlak zijn. Een bekend voorbeeld is de vroeger populaire kaart en nog steeds bekende Mercator-projectie van de wereld. Daarbij wordt Groenland als een enorm eiland afgebeeld, terwijl het in het echt qua oppervlakte overeenkomt met het Arabische schiereiland. Maar de vorm van de landen is wel correct.

In de loop der tijd zijn er diverse methodes bedacht om geografische coördinaten (van de ellipsoïde) naar coördinaten in een plat vlak om te rekenen. Doel was steeds om de vervormingen zo klein mogelijk te maken. Deze rekenkundige methodes worden kaartprojecties genoemd. Welke kaartprojectie het meest geschikt is, hangt af van de toepassing en van de grootte, de vorm en de positie op aarde van het af te beelden gebied. Maar kaartprojecties zonder enige vervorming bestaan niet.

### Representatie van coördinaten

De aarde kan eenvoudig worden gemodelleerd door een ellipsoïde, waarvan het snijpunt van de lange en korte as het middelpunt van de aarde geeft en de korte as samenvalt met de rotatieas van de aarde. De ligging (en/of hoogte) van objecten kan op de ellipsoïde worden vastgelegd met geocentrische of geografische coördinaten. Voor een afbeelding van objecten op een plat vlak is een kaartprojectie nodig, in een kaartprojectie wordt de ligging van objecten weergegeven met rechthoekige coördinaten. Onderstaande figuur geeft de relaties tussen de verschillende coördinaatrepresentaties. 

<figure id="plaatje">
    <img src="media/CrsProjectie.jpg" alt="hr2">
    <figcaption>Geocentrische, geografische en rechthoekige coördinaten.</figcaption>
</figure>

Geocentrische coördinaten, aangeduid met X, Y en Z, geven de positievector ten opzichte van het middelpunt van de aarde. Geografische coördinaten geven de positie ten opzichte van de ellipsoïde in geodetische breedte (φ), geodetische lengte (λ) en hoogte boven de ellipsoïde (h). Rechthoekige coördinaten (x en y) geven de positie ten opzichte van oorsprong van het geprojecteerde vlak. 

### Conversie en transformatie

[logica dictaat TU](http://gnss1.tudelft.nl/pub/vdmarel/reader/CTB3310_RefSystems_1-2a_online.pdf#page=33)
<figure id="plaatje">
    <img src="media/conversionTransformation.jpg" alt="hr2">
    <figcaption>Conversie en transformatie van coördinaten.</figcaption>
</figure>


### URN

abcd

#### EPSG URN authority

De EPSG geodetische parameter dataset is een verzameling van datumdefinities, projectiedefinities en transformatieparameters voor coördinatenconversies en datumtransformaties. De database bevat wereldwijde, regionale, nationale en lokale datums. De dataset kan benaderd worden via een online interface en kan als database worden gedownloaded. Voor meer informatie zie, http://www.epsg.org// 

- Samengesteld (compound)
- Geprojecteerd
- Verticaal
- Ensemble
