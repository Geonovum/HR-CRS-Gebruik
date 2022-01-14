## Aandachtspunten voor CRS gebruik

### Aandachtspunten bij CRS in informatiemodel en informatieketen

In een informatiemodel voor geo-informatie worden regels opgenomen voor het te gebruiken CRS(-en). 
#### Aandachtspunten t.a.v. CRS-keuze
Bij het opstellen van het informatiemodel is de aanbeveling om te inventariseren welke CRS-en al gebruikt worden in het domein en waarom. Dit kan leiden tot verschillende keuzes in de implementatie, zoals te zien in het onderstaande voorbeeld voor BGT, BRO en DSO.

<div class="example">
_VOORBEELD_ 
Het gebruik van CRS-en in de keten van inwinning tot uitwisseling en visualisatie van de Basisregistratie Grootschalige Topografie (BGT) kan als volgt worden geïnterpreteerd:

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggTFJcbiAgc3ViZ3JhcGggQnJvbmhvdWRlclxuICBzdWJncmFwaCBJbndpbm5pbmdcbiAgICBBMVtcIkVUUlM4OSA8YnI-IChHTlNTLVJUSylcIl0gXG4gICAgICAgIEEyW1wiUkQgPGJyPiAoTHVjaHRmb3RvKVwiXVxuICAgIEEzW1wiTG9rYWFsIDxicj4gKFRhY2h5bWV0cmllIDxicj4gTWVldGJhbmQpXCJdXG4gIGVuZFxuICBzdWJncmFwaCBWZXJ3ZXJraW5nIGVuIG9wc2xhZ1xuICAgIEJbUkRdXG4gIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggXCJMYW5kZWxpamtlIFZvb3J6aWVuaW5nXCJcbiAgc3ViZ3JhcGggXCJPcHNsYWcgTFZcIlxuICAgIEQxW1JEXVxuICBlbmRcbiAgZW5kXG4gIHN1YmdyYXBoIFwiRGF0YXBsYXRmb3JtIChQRE9LKVwiXG4gIHN1YmdyYXBoIFwiT3BzbGFnIFBET0tcIlxuICAgIERbUkRdXG4gIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggR2VicnVpa2VyXG4gIHN1YmdyYXBoIFwiR2VvIFNlcnZpY2VzXCJcbiAgICBFMVtFVFJTODldXG4gICAgRTJbUkRdXG4gICAgRTNbV0dTIDg0XVxuICBlbmRcbiAgc3ViZ3JhcGggXCJEb3dubG9hZCAoQXBpL0FwcClcIlxuICAgIEU0W1JEXVxuICBlbmRcbiAgZW5kXG4gIEExLS0-QlxuICBBMi0tPkJcbiAgQTMtLT5CXG4gIEItLT58VWl0d2lzc2VsaW5nfEQxXG4gIEQxLS0-fFVpdHdpc3NlbGluZ3xEXG4gIEQtLT58VWl0d2lzc2VsaW5nfEUxXG4gIEQtLT58VWl0d2lzc2VsaW5nfEUyXG4gIEQtLT58VWl0d2lzc2VsaW5nfEUzXG4gIEQtLT58VWl0d2lzc2VsaW5nfEU0IiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOmZhbHNlLCJ1cGRhdGVEaWFncmFtIjpmYWxzZX0)](https://mermaid-js.github.io/mermaid-live-editor/edit/#eyJjb2RlIjoiZ3JhcGggTFJcbiAgc3ViZ3JhcGggQnJvbmhvdWRlclxuICBzdWJncmFwaCBJbndpbm5pbmdcbiAgICBBMVtcIkVUUlM4OSA8YnI-IChHTlNTLVJUSylcIl0gXG4gICAgICAgIEEyW1wiUkQgPGJyPiAoTHVjaHRmb3RvKVwiXVxuICAgIEEzW1wiTG9rYWFsIDxicj4gKFRhY2h5bWV0cmllIDxicj4gTWVldGJhbmQpXCJdXG4gIGVuZFxuICBzdWJncmFwaCBWZXJ3ZXJraW5nIGVuIG9wc2xhZ1xuICAgIEJbUkRdXG4gIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggXCJMYW5kZWxpamtlIFZvb3J6aWVuaW5nXCJcbiAgc3ViZ3JhcGggXCJPcHNsYWcgTFZcIlxuICAgIEQxW1JEXVxuICBlbmRcbiAgZW5kXG4gIHN1YmdyYXBoIFwiRGF0YXBsYXRmb3JtIChQRE9LKVwiXG4gIHN1YmdyYXBoIFwiT3BzbGFnIFBET0tcIlxuICAgIERbUkRdXG4gIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggR2VicnVpa2VyXG4gIHN1YmdyYXBoIFwiR2VvIFNlcnZpY2VzXCJcbiAgICBFMVtFVFJTODldXG4gICAgRTJbUkRdXG4gICAgRTNbV0dTIDg0XVxuICBlbmRcbiAgc3ViZ3JhcGggXCJEb3dubG9hZCAoQXBpL0FwcClcIlxuICAgIEU0W1JEXVxuICBlbmRcbiAgZW5kXG4gIEExLS0-QlxuICBBMi0tPkJcbiAgQTMtLT5CXG4gIEItLT58VWl0d2lzc2VsaW5nfEQxXG4gIEQxLS0-fFVpdHdpc3NlbGluZ3xEXG4gIEQtLT58VWl0d2lzc2VsaW5nfEUxXG4gIEQtLT58VWl0d2lzc2VsaW5nfEUyXG4gIEQtLT58VWl0d2lzc2VsaW5nfEUzXG4gIEQtLT58VWl0d2lzc2VsaW5nfEU0IiwibWVybWFpZCI6IntcbiAgXCJ0aGVtZVwiOiBcImRlZmF1bHRcIlxufSIsInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjpmYWxzZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)

Bij de inwinning van de BGT worden ETRS89, RD en lokale CRS-en gebruikt. Voor de opslag bij bronhouders, de Landelijke Voorziening en het dataplatform wordt voor de uitwisseling het CRS RD gebruikt. Voor uitwisseling tussen dataplatform en gebruiker worden het Nederlandse RD, het Europese ETRS89 en het wereldwijde WGS 84 gebruikt. Hierbij zijn voor de visualisatie van ETRS89 en WGS 84 verschillende kaartprojecties mogelijk. 

Voor de BRO is de keten echter anders:

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggTFJcbiAgc3ViZ3JhcGggQnJvbmhvdWRlclxuICAgIHN1YmdyYXBoIElud2lubmluZ1xuICAgICAgQTFbXCJSRFwiXSBcbiAgICAgIEEyW1wiRVRSUzg5XCJdXG4gICAgICBBM1tcIldHUyA4NFwiXVxuICAgIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggXCJMYW5kZWxpamtlIFZvb3J6aWVuaW5nXCJcbiAgICBzdWJncmFwaCBcIkludGFrZSBMVlwiXG4gICAgICBCMVtcIlJEXCJdIFxuICAgICAgQjJbXCJFVFJTODlcIl1cbiAgICAgIEIzW1wiV0dTIDg0XCJdXG4gICAgZW5kXG4gICAgc3ViZ3JhcGggXCJPcHNsYWcgTFZcIlxuICAgICAgQjRbRVRSUzg5XVxuICAgIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggXCJEYXRhcGxhdGZvcm0gKFBET0spXCJcbiAgICBzdWJncmFwaCBcIk9wc2xhZyBQRE9LXCJcbiAgICAgIERbRVRSUzg5XVxuICAgIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggR2VicnVpa2VyXG4gICAgc3ViZ3JhcGggXCJHZW8gU2VydmljZXNcIlxuICAgICAgRTFbRVRSUzg5XVxuICAgICAgRTJbUkRdXG4gICAgICBFM1tXR1MgODRdXG4gICAgZW5kXG4gICAgc3ViZ3JhcGggXCJEb3dubG9hZCAoQXRvbSlcIlxuICAgICAgRTRbRVRSUzg5XVxuICAgIGVuZFxuICAgIHN1YmdyYXBoIFwiQlJPIExva2V0XCJcbiAgICAgICAgRjFbRVRSUzg5XVxuICAgIGVuZFxuICBlbmRcbiAgQTEtLT5CMVxuICBBMi0tPkIyXG4gIEEzLS0-QjNcbiAgQjEtLT58VHJhbnNmb3JtYXRpZXxCNFxuICBCMi0tPkI0XG4gIEIzLS0-fFRyYW5zZm9ybWF0aWV8QjRcbiAgQjQtLT58VWl0d2lzc2VsaW5nfERcbiAgRC0tPnxVaXR3aXNzZWxpbmd8RTFcbiAgRC0tPnxVaXR3aXNzZWxpbmd8RTJcbiAgRC0tPnxVaXR3aXNzZWxpbmd8RTNcbiAgRC0tPnxVaXR3aXNzZWxpbmd8RTRcbiAgQjQgLS0-fFVpdHdpc3NlbGluZ3xGMVxuXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)](https://mermaid-js.github.io/mermaid-live-editor/edit/#eyJjb2RlIjoiZ3JhcGggTFJcbiAgc3ViZ3JhcGggQnJvbmhvdWRlclxuICAgIHN1YmdyYXBoIElud2lubmluZ1xuICAgICAgQTFbXCJSRFwiXSBcbiAgICAgIEEyW1wiRVRSUzg5XCJdXG4gICAgICBBM1tcIldHUyA4NFwiXVxuICAgIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggXCJMYW5kZWxpamtlIFZvb3J6aWVuaW5nXCJcbiAgICBzdWJncmFwaCBcIkludGFrZSBMVlwiXG4gICAgICBCMVtcIlJEXCJdIFxuICAgICAgQjJbXCJFVFJTODlcIl1cbiAgICAgIEIzW1wiV0dTIDg0XCJdXG4gICAgZW5kXG4gICAgc3ViZ3JhcGggXCJPcHNsYWcgTFZcIlxuICAgICAgQjRbRVRSUzg5XVxuICAgIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggXCJEYXRhcGxhdGZvcm0gKFBET0spXCJcbiAgICBzdWJncmFwaCBcIk9wc2xhZyBQRE9LXCJcbiAgICAgIERbRVRSUzg5XVxuICAgIGVuZFxuICBlbmRcbiAgc3ViZ3JhcGggR2VicnVpa2VyXG4gICAgc3ViZ3JhcGggXCJHZW8gU2VydmljZXNcIlxuICAgICAgRTFbRVRSUzg5XVxuICAgICAgRTJbUkRdXG4gICAgICBFM1tXR1MgODRdXG4gICAgZW5kXG4gICAgc3ViZ3JhcGggXCJEb3dubG9hZCAoQXRvbSlcIlxuICAgICAgRTRbRVRSUzg5XVxuICAgIGVuZFxuICAgIHN1YmdyYXBoIFwiQlJPIExva2V0XCJcbiAgICAgICAgRjFbRVRSUzg5XVxuICAgIGVuZFxuICBlbmRcbiAgQTEtLT5CMVxuICBBMi0tPkIyXG4gIEEzLS0-QjNcbiAgQjEtLT58VHJhbnNmb3JtYXRpZXxCNFxuICBCMi0tPkI0XG4gIEIzLS0-fFRyYW5zZm9ybWF0aWV8QjRcbiAgQjQtLT58VWl0d2lzc2VsaW5nfERcbiAgRC0tPnxVaXR3aXNzZWxpbmd8RTFcbiAgRC0tPnxVaXR3aXNzZWxpbmd8RTJcbiAgRC0tPnxVaXR3aXNzZWxpbmd8RTNcbiAgRC0tPnxVaXR3aXNzZWxpbmd8RTRcbiAgQjQgLS0-fFVpdHdpc3NlbGluZ3xGMVxuXG4iLCJtZXJtYWlkIjoie1xuICBcInRoZW1lXCI6IFwiZGVmYXVsdFwiXG59IiwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)

Bij de BRO kunnen bronhouders in verschillende CRS-en aanbieden. Bij intake in de landelijke voorziening wordt getransformeerd naar ETRS89. Voor uitwisseling tussen dataplatform en gebruiker worden het Nederlandse RD, het Europese ETRS89 en het wereldwijde WGS 84 gebruikt. Hierbij zijn voor de visualisatie van ETRS89 en WGS 84 verschillende kaartprojecties mogelijk.  

In de architectuur voor de landelijke voorziening van het Digitaal Stelsel Omgevingswet (DSO-LV) zijn weer andere keuzes gemaakt, waaronder het dubbel opslaan van data in twee CRS-en:

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggTFJcbiAgc3ViZ3JhcGggQnJvbmRhdGFcbiAgICBBMVtcIkVUUlM4OVwiXSBcbiAgICBBMltcIlJEXCJdXG4gIGVuZFxuICBzdWJncmFwaCBcIkRTTy1MVlwiXG4gICAgRDJbUkRdXG4gICAgRDFbRVRSUzg5XVxuICBlbmRcbiAgc3ViZ3JhcGggR2VicnVpa1xuICBzdWJncmFwaCBcIlZpZXdlciBSZWdlbHMgZW4gS2FhcnRcIlxuICAgIEYyW1JEPGJyPm1ldCBnZXRvb25kZSBjb8O2cmRpbmF0ZW48YnI-aW4gUkQgb2YgRVRSUzg5XVxuICBlbmRcbiAgc3ViZ3JhcGggQVBJXG4gICAgRTJbUkRdXG4gICAgRTFbRVRSUzg5XVxuICAgIEUzW1dHUyA4NDxicj5XZWItTWVyY2F0b3JdXG4gIGVuZFxuICBlbmRcbiAgQTEtLT5EMVxuICBBMi0tPkQyIFxuICBEMSAtLS18VHJhbnNmb3JtYXRpZXwgRDJcbiAgRDEtLT58VWl0d2lzc2VsaW5nfEUxXG4gIEQyLS0-fFVpdHdpc3NlbGluZ3xFMlxuICBEMS0tPnxVaXR3aXNzZWxpbmc8YnI-TnVsdHJhbnNmb3JtYXRpZXxFM1xuICBEMi0tPkYyXG4gIEQxLS4tPkYyXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)](https://mermaid-js.github.io/mermaid-live-editor/edit/#eyJjb2RlIjoiZ3JhcGggTFJcbiAgc3ViZ3JhcGggQnJvbmRhdGFcbiAgICBBMVtcIkVUUlM4OVwiXSBcbiAgICBBMltcIlJEXCJdXG4gIGVuZFxuICBzdWJncmFwaCBcIkRTTy1MVlwiXG4gICAgRDJbUkRdXG4gICAgRDFbRVRSUzg5XVxuICBlbmRcbiAgc3ViZ3JhcGggR2VicnVpa1xuICBzdWJncmFwaCBcIlZpZXdlciBSZWdlbHMgZW4gS2FhcnRcIlxuICAgIEYyW1JEPGJyPm1ldCBnZXRvb25kZSBjb8O2cmRpbmF0ZW48YnI-aW4gUkQgb2YgRVRSUzg5XVxuICBlbmRcbiAgc3ViZ3JhcGggQVBJXG4gICAgRTJbUkRdXG4gICAgRTFbRVRSUzg5XVxuICAgIEUzW1dHUyA4NDxicj5XZWItTWVyY2F0b3JdXG4gIGVuZFxuICBlbmRcbiAgQTEtLT5EMVxuICBBMi0tPkQyIFxuICBEMSAtLS18VHJhbnNmb3JtYXRpZXwgRDJcbiAgRDEtLT58VWl0d2lzc2VsaW5nfEUxXG4gIEQyLS0-fFVpdHdpc3NlbGluZ3xFMlxuICBEMS0tPnxVaXR3aXNzZWxpbmc8YnI-TnVsdHJhbnNmb3JtYXRpZXxFM1xuICBEMi0tPkYyXG4gIEQxLS4tPkYyXG4iLCJtZXJtYWlkIjoie1xuICBcInRoZW1lXCI6IFwiZGVmYXVsdFwiXG59IiwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)

Brondata van geometrieën voor de DSO-LV wordt volgens de architectuur aangeleverd in ETRS89 of RD. Binnen de DSO-LV worden de geometrieën *'as is'* getransformeerd voor dubbele opslag in RD en ETRS89. De bronhouder is verantwoordelijk voor toepassing van het langelijnenadvies. Geometrieën worden via een API uitgewisseld in RD, ETRS89 en WGS 84 Web-Mercator. Voor de transformatie tussen ETRS89 en WGS 84 wordt een nultransformatie gebruikt. In de viewer van DSO-LV wordt altijd de RD-kaartprojectie gebruikt en kan de gebruiker kiezen tussen het weergeven van RD of ETRS89 coördinaten.

</div>

#### Aandachtspunten t.a.v. informatie over CRS-en
In het informatiemodel en de bijbehorende afspraken wordt bij voorkeur de volgende informatie vastgelegd:

- In welk(e) CRS(-en) mogen gegevens worden aangeleverd en opgevraagd.
- In welk(e) CRS(-en) worden gegevens opgeslagen.
- Waar eventueel coördinaatformaties plaatsvinden, bijvoorbeeld bij uitwisseling tussen dataplatform en gebruiker.
- Hoe informatie over het bron CRS en de gebruikte transformaties wordt opgeslagen bij gebruik van meerdere CRS-en.
- De numerieke precisie van coördinaten in het model.

De volgende tabel geeft de link naar voorbeelden van het specificeren van het CRS in informatiemodellen:

|Informatiemodel|Soort specificatie|Link|
|---|---|---|
|Omgevingswet|Gebruik van RD en ETRS89 in GML-bestanden|https://geonovum.github.io/TPOD/CIMOW/IMOW_v2.0.0.pdf#page=15|
|BRO Booronderzoek|2D: Gebruik van ETRS89 voor opslag, aanlevering toegestaan in RD, ETRS89 en WGS 84|https://docs.geostandaarden.nl/bro/bhr-g/#referentiestelsels-voor-de-horizontale-positie|

#### Aandachtspunten t.a.v. dubbel opslaan of on-the-fly transformeren
Bij het ontwerp van het informatiemodel, landelijke voorziening of dataportaal kan de afweging worden gemaakt om datumtransformaties op verschillende plaatsen in de keten te laten plaatsvinden en data dubbel op te slaan of juist de transformaties on-the-fly uit te voeren. Aandachtspunten bij deze afweging zijn onder andere de authenticiteit van gegevens, de kostenafweging tussen dubbel opslaan en (herhaaldelijk) on-the-fly transformeren en de borging van voldoende performance. 

#### Nauwkeurigheid van coördinaten
De nauwkeurigheid van coördinaten moet minstens de nauwkeurigheid realiseren die vermeld wordt in het informatiemodel of bijgeleverde inwinningseisen. Meestal is het aantal decimalen dat in software standaard wordt opgeleverd, groter. Deze decimalen hebben dan geen betekenis meer. Om te voorkomen dat er te grote databestanden ontstaan, wordt aanbevolen de coördinaten af te ronden op 1 decimaal meer dan de nauwkeurigheid van de dataset vereist. Hierdoor kunnen fouten bij herhaaldelijk heen en weer transformeren worden voorkomen.

<div class="example">
_VOORBEELD_ zoals opgenomen in [IMOW](https://geonovum.github.io/TPOD/CIMOW/IMOW_v2.0.0.pdf#page=15) en het [model Basisgeometrie](https://docs.geostandaarden.nl/nen3610/def-st-basisgeometrie-20200930/#nauwkeurigheid-van-coordinaten)

*Coördinaten opgenomen bij een geometrie worden standaard uitgewisseld met een getalsnauwkeurigheid van 1 mm of het equivalent daarvan in graden. Voor RD, NAP en ETRS89 komt dat overeen met de volgende nauwkeurigheden:*

- *RD in meters 3 decimalen (1 mm);*  
- *NAP-hoogte in meters 3 decimalen (1 mm);*  
- *ETRS89-breedte in graden 8 decimalen (1,1 mm);*  
- *ETRS89-lengte in graden 8 decimalen (0,7 mm);*  
- *ETRS89-hoogte in meters 3 decimalen (1 mm).*

*Alles wat nauwkeuriger is wordt afgerond op deze nauwkeurigheid van 3 of 8 decimalen. Afronding is volgens de volgende regel:*

- *0,0015 -\> 0,002;*
- *0,0014 -\> 0,001.*
</div>

### Aandachtspunten bij meerdere CRS-en
Bij het gebruik van meerdere CRS-en bestaat risico op introductie van fouten door onjuiste implementatie van de relaties tussen CRS-en. Eindgebruikers worden geadviseerd data waar mogelijk op te vragen in hetzelfde CRS.

Aanbieders van data worden geadviseerd om data aan te bieden in de verschillende CRS-en gericht op de eindgebruikers. Hierbij is het advies zo nauwkeurig mogelijk te transformeren, omdat het niet altijd duidelijk is wie de eindgebruiker is.

Wanneer voor opslag, uitwisseling en/of visualisatie andere CRS-en worden gebruikt zijn er een aantal aandachtspunten, de belangrijkste zijn:

- Voorkom dat te grote geometrische of topologische verschillen ontstaan
- Maak gebruik van een eenduidige coördinaatransformatie (en leg dit vast)

##### Vormvastheid

Een rechte lijn in werkelijkheid is meestal geen rechte lijn in een kaart, maar een lijn die licht krom loopt. Om er voor te zorgen dat een begrenzing in de kaart -ongeacht de kaartprojectie- met voldoende nauwkeurigheid eenduidig is, heeft de NSGI hiervoor een [advies](https://forum.pdok.nl/uploads/default/original/2X/c/c0795baa683bf3845c866ae4c576a880455be02a.pdf) geformuleerd. In dit advies staat dat lange lijnsegmenten van grenzen voorzien moeten worden van synthetische tussenpunten om bij coördinaatransformatie grote geometrische en topologische verandering van de data te voorkomen. De afstand tussen deze tussenpunten is afhankelijk van de acceptabele afwijking en de locatie op aarde. Voor Europees Nederland inclusief EEZ kan de volgende tabel worden gehanteerd:

|Acceptabele afwijking|Advies lijnlengte|
|----|----|
|1 mm	                 |200 m   |
|1 cm                    |500 m   |
|1 dm                    |2 km    |
|1 m                     |5 km    |
|10 m                    |20 km   |
|100 m                   |50 km   |

Voor een nauwkeurigheid van 1 mm zijn dus punten met 200 m tussenafstand nodig voor de in Nederland gangbare projecties. Voor het genereren van synthetische tussenpunten kan afhankelijk van wat bedoeld is, gekozen worden tussen punten op een rechte lijn in de kaart of een rechte lijn in werkelijkheid (geodetische lijn in ETRS89).

<div class="advisement">
_ADVIES_ Wanneer lijnen worden getransformeerd met behulp van RDNAPTRANS™ gebruik dan geen lijnsegmenten die langer zijn dan 200 meter om de lijnen eenduidig te transformeren met de nauwkeurigheid van RDNAPTRANS™.
</div>

<div class="example">
_VOORBEELD_ In de de stelselafspraken voor het DSO is het langelijnenadvies als volgt opgenomen, inclusief een schematisch voorbeeld:

Het ophakken van lange lijnstukken, zoals geadviseerd door het NSGI, is de expliciete verantwoordelijkheid van de bronhouder. Hierbij kan de volgende aanpak worden gevolgd:

* *RDNAPTRANS™ wordt gebruikt voor de transformatie. De Transformatie-API van de NSGI geeft daarbij aan wat de (on)nauwkeurigheid is van de uitgevoerde transformatie.*
* *Indien de onnauwkeurig te groot is (te bepalen door de bronhouder), is het noodzakelijk om voor alle lange lijnen in de brongegevens synthetische tussenpunten toe te voegen.*
* *De bronhouder moet voor het toevoegen van de genoemde punten kiezen uit a) een rechte lijn in werkelijkheid of b) een rechte lijn op de kaart.*
* *De benodigde voorbewerking kan op basis van de gekozen strategie geautomatiseerd worden uitgevoerd en doorgeleverd aan RDNAPTRANS™, teneinde een nauwkeurige transformatie te bereiken.*
* *De voorbewerking dient bij de bron of elders te worden uitgevoerd, maar altijd op aanwijzing van de bronhouder. Voor de plan tot publicatie keten zijn de bronhouders altijd verantwoordelijk voor aanlevering binnen de gestelde eisen. De LVBB en DSO-LV voeren wel transformaties maar geen geo-bewerkingen uit.*
</div>

#### Aandachtspunten bij coördinaattransformatie
De relatie tussen CRS-en is vastgelegd in een [coördinaattransformatie](#coordinaattransformatie-datumtransformatie-en-coordinaatconversie). De relaties RD/NAP, ETRS89, ITRS en WGS 84 zijn weergegeven in onderstaande figuur met daarbij de organisatie die de gegevens van coördinaattransformatie beheerd.

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggTFIgXG4gICAgQVtSRE5BUF1cbiAgICBCW0VUUlM4OV1cbiAgICBDW0lUUlNdXG4gICAgRFtXR1MgODRdXG4gICAgXG4gIEEtLS18XCJOU0dJIChSRE5BUFRSQU5TKVwifEJcbiAgQi0tLXxFVVJFRnxDXG4gIEMtLS18TkdBfERcbiAgIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/edit/#eyJjb2RlIjoiZ3JhcGggTFIgXG4gICAgQVtSRE5BUF1cbiAgICBCW0VUUlM4OV1cbiAgICBDW0lUUlNdXG4gICAgRFtXR1MgODRdXG4gICAgXG4gIEEtLS18XCJOU0dJIChSRE5BUFRSQU5TKVwifEJcbiAgQi0tLXxFVVJFRnxDXG4gIEMtLS18TkdBfERcbiAgIiwibWVybWFpZCI6IntcbiAgXCJ0aGVtZVwiOiBcImRlZmF1bHRcIlxufSIsInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjp0cnVlLCJ1cGRhdGVEaWFncmFtIjpmYWxzZX0)
    <figcaption>Voor coördinaattransformatie van RDNAP naar WGS 84 moet eerst naar ETRS89 en dan naar ITRS worden getransformeerd. Voor de de transformatie tussen RDNAP is de NSGI verantwoordelijk. Voor de transformatie tussen ETRS89 en ITRS publiceert EUREF parameters. De relatie tussen ITRS en WGS 84 wordt beheerd door de Amerkiaanse NGA.</figcaption>

In de volgende paragrafen worden de coördinaattransformatie tussen RD en ETRS89 en tussen ETRS89 en WGS 84 beschreven.

##### Transformatie en conversie tussen RD/NAP en ETRS89
Bij de koppeling tussen ETRS89 en RD in de jaren 1990 werden systematische verschillen gevonden. Vanwege de wens van gebruikers dat RD-coördinaten niet wijzigden bij de introductie van ETRS89, is er voor gekozen om de verschillen te modelleren in correctiegrid, dat deel uitmaakt van de coördinaattransformatie procedure tussen geprojecteerde RD-coördinaten en geografische ETRS89-coördinaten. NAP hoogten kunnen met een quasi-geoïdemodel naar ellipsoïdische hoogten in ETRS89 worden getransformeerd met een precisie die hoger is dan de ETRS89-coördinaten die met de meeste GNSS-metingen wordt verkregen. Het correctiegrid en quasi-geoïdemodel zijn onderdeel van de procedure RDNAPTRANS™. 

RDNAPTRANS™ kent verschillende versies, in veel (oudere) GIS-pakketten en andere software is RDNAPTRANS™ niet volledig geïmplementeerd, wat fouten op decimeterniveau oplevert. Met de publicatie van RDNAPTRANS™ 2018 is een versie beschikbaar gekomen die voor aanbieders van GIS-software eenvoudiger te implementeren is. In de regel blijven de oudere, niet juist geïmplementeerde, versies ook beschikbaar in software, waarmee het voor gebruikers belangrijk is om goed te weten welke transformatie zij het beste kunnen gebruiken in hun software. De NSGI publiceert advies over het gebruik en de actuele procedure van RDNAPTRANS™ haar [website](https://www.nsgi.nl/rdnaptrans). Voor validatie van implementaties van RDNAPTRANS heeft de NSGI een [transformatievalidatieservice](https://www.nsgi.nl/geodetische-infrastructuur/producten/programma-rdnaptrans/transformatievalidatie) beschikbaar.  Voor de transformatie tussen RD/NAP en ETRS89 met gebruik van de RDNAPTRANS™ procedure is tevens een [transformatie-API](https://www.nsgi.nl/coordinatentransformatie-api) beschikbaar bij de NSGI. Voorbeelden van implementatie van RDNAPTRANS™ in software worden gegeven in de paragraaf [CRS in software](#crs-in-software).

<div class="advisement">
_AANBEVELING_  Voor de uitwisseling van geo-informatie binnen Europa is het nadrukkelijke advies om altijd de weg via ETRS89 te kiezen. Bij gebruik van de actuele RDNAPTRANS™ procedure is daarbij voor het Nederlandse deel een nauwkeurigheid op centimeterniveau gewaarborgd. 
</div>

##### Transformatie tussen ETRS89 en ITRS/WGS 84
Wanneer na zorgvuldige afweging gebruik wordt gemaakt van WGS 84 of ITRS voor visualisatie of uitwisseling zijn verschillende strategieën mogelijk:

* **[WGS 84 gelijkstellen aan ETRS89](#wgs-84-gelijkstellen-aan-etrs89)**. Dit is de juiste keuze als er geen expliciete realisatie of epoche van WGS 84 wordt gebruikt. Het beoogd gebruik van de WGS 84 coördinaten mag geen toepassing zijn die hoge nauwkeurigheid vereist.
* **[Tijdsafhankelijke transformatie tussen ETRS89 en ITRS/WGS 84](#tijdsafhankelijke-transformatie-tussen-etrs89-en-itrs-wgs-84)**. Dit is de juiste keuze wanneer wel een expliciete realisatie én epoche van ITRS of WGS 84 worden gebruikt.

Het is verstandig de gekozen strategie in de metadata te vermelden.

###### WGS 84 gelijkstellen aan ETRS89
Wanneer de brondata in RD of ETRS89 is en het beoogd gebruik van de data bestaat uit visualisatie of combinatie met andere datasets, kan worden gekozen om WGS 84 en ETRS89 aan elkaar gelijk te stellen. Dit is de standaard implementatie in meerdere GIS-pakketten, namelijk dat zonder expliciete vermelding van de WGS 84 en ETRS89-realisaties een nultransformatie wordt gebruikt. De nauwkeurigheid van de nultransformatie is circa 2 meter. Door het toepassen van deze strategie moet het resultaat worden geïnterpreteerd als een CRS dat bestaat uit een ongedefinieerd datum met als coördinatensysteem lengte en breedte. Het voordeel van het gebruik van de nultransformatie is dat de transformatie niet tijdsafhankelijk is en coördinaten dus niet veranderen in de tijd.

<div class=example>
_VOORBEELD_ In de de [stelselafspraken voor het DSO, versie 2.5 27-09-2021](https://iplo.nl/digitaal-stelsel/documenten/architectuurdocumenten/) is gebruik van de nultransformatie als volgt vastgelegd:

*Voor de uitlevering via API’s kan ook Pseudo-Mercator op basis van WGS84 (EPSG:3857) worden ondersteund. Hiermee kan bijvoorbeeld in gebruikerstoepassingen worden voorzien die beter aansluiten op Google Maps™. Voor de transformatie van (RD via) ETRS89 naar WGS84 is de aanbeveling om tussen ETRS89 en WGS84 een nultransformatie toe te passen en de coördinaten in ETRS89 en WGS84 dus gelijk aan elkaar te stellen. Gezien de onnauwkeurigheid van WGS84 is dat een gebruikelijke keuze met een acceptabele nauwkeurigheid, waarmee tevens voorkomen wordt dat de verkregen coördinaten in WGS84 door de tijd heen veranderen als gevolg van de tektonische beweging van Europa.*
</div>

<div class="note">
Bij gebruik van data waarbij het aangegeven CRS WGS 84 (EPSG:4326) is zonder duidelijke informatie over het CRS van de brondata, de gebruikte transformaties, realisatie en/of het epoche moet de gebruiker er rekening mee houden dat de data systematische fouten in de orde van meters kan bevatten. De toepassing bepaalt of dit acceptabel is of niet. 
</div>

###### Tijdsafhankelijke transformatie tussen ETRS89 en ITRS/WGS 84
Wanneer de dataspecificatie expliciet een realisatie en epoche van WGS 84 of ITRS benoemt, of data gecombineerd wordt met de actuele locatie van de eindgebruiker, dan kan worden gekozen de transformatie tussen ETRS89 en WGS 84 uit te voeren met hoge nauwkeurigheid voor een specifieke realisatie op een specifiek epoche. Dergelijke transformaties zijn vaak niet standaard geïmplementeerd in GIS-software, waardoor de gebruiker zelf de juiste transformatie moet definiëren in de software. 

Voor Nederlandse data mag voor ETRS89 de realisatie ETRF2000 worden gekozen. Wanneer de WGS 84-realisatie niet is gespecificeerd, dan wordt de meest recente realisatie gekozen (2D/3D WGS 84 (G2139)) of de realisatie van het (gemiddelde) moment van inwinning van de dataset.

Om te kunnen transformeren worden de door EUREF gepubliceerde tijdsafhankelijke [transformatieparameters tussen ETRF2000 en ITRS gebruikt](http://etrs89.ensg.ign.fr/pub/EUREF-TN-1.pdf) die ook in EPSG zijn opgenomen. Bij deze transformatie wordt de WGS 84-realisatie dan gelijkgesteld aan de bijbehorende ITRS-realisatie (ITRF2014 voor WGS 84 (G2139)). De keuze van het epoche kan voortkomen uit de datum van inwinning, publicatiedatum of een expliciete specificatie en kan indien noodzakelijk per geometrie verschillend zijn.

<div class=example>
_VOORBEELD_ Voor de uitwisseling van terrein- en obstakelgegevens voor de luchtvaart in Europa [specificeert Eurocontrol](https://www.eurocontrol.int/sites/default/files/2021-07/eurocontrol-tod-manual-ed-3-0.pdf#page=125) dat het horizontale referentiesysteem WGS 84 is. In de [handreiking bij deze specificatie](https://www.eurocontrol.int/sites/default/files/publication/files/20130204-do-spec-vol.2-v1.0.pdf#page=16) wordt aangegeven dat WGS 84 voor deze toepassing wordt gelijkgesteld aan ITRF2000 op epoche 2000.0.
</div>

Indien de publicatiedatum van de dataset wordt gekozen als epoche voor de transformatie worden bij regelmatige updates (bijvoorbeeld jaarlijks) de WGS 84/ITRS coördinaten bijgesteld als gevolg van de platentektoniek. Wanneer als epoche de (gemiddelde) datum van de inwinning van de dataset, komen de coördinaten gemiddeld het best overeen met de WGS 84/ITRS coördinaten op het moment van inwinning. 

<div class="advisement">
_AANBEVELING_ Wanneer een coördinaattransformatie plaatsvindt in de keten van inwinning tot gebruik is het advies de gekozen transformatieprocedure in het model en/of metadata op te nemen. Bij tijdsafhankelijke transformaties, zoals van ETRS89 naar WGS 84 moet dan ook het referentieepoche worden opgenomen. Tussen RD/NAP en ETRS89 is het van belang gebruik te maken van de RDNAPTRANS™ procedure. 
</div>

<div class="example">
_VOORBEELD_
In het informatiemodel van de BRO is gekozen voor het opnemen van het attribuut [Coördinaattransformatie](https://docs.geostandaarden.nl/bro/bhr-g/#detail_class_Model_Cordinaattransformatie) waarin in de waardelijst de mogelijke transformaties zijn vastgelegd.
</div>

### CRS bij uitwisselingsformaten

Niet alle uitwisselingsformaten ondersteunen (volledig) het gebruik van meerdere CRS-en. De [Handreiking Geometrie in uitwisselingsformaten](https://geonovum.github.io/geox/) geeft een keuzehulp van gebruik van uitwisselingsformaten voor 2D vector bestanden, waarin ook de ondersteuning van CRS-en is opgenomen. De tabel hieronder geeft een samenvatting van de ondersteuning van CRS-en voor deze formaten.

|CRS|URN|[HTML](https://geonovum.github.io/geox/#html)|[GeoJSON](https://geonovum.github.io/geox/#geojson)|[GeoPackage](https://geonovum.github.io/geox/#geopackage)|[GML](https://geonovum.github.io/geox/#gml)|[RDF](https://geonovum.github.io/geox/#rdf)|
|---|---|---|---|---|---|---|
|RD|urn:ogc:def:crs:EPSG::28992|<span id="kruisje">&#10005;|<span id="tilde">&#65374;|<span id="vinkje">&#10003;|<span id="vinkje">&#10003;|<span id="vinkje">&#10003;|
|ETRS89|urn:ogc:def:crs:EPSG::4258|<span id="kruisje">&#10005;|<span id="tilde">&#65374;|<span id="vinkje">&#10003;|<span id="vinkje">&#10003;|<span id="vinkje">&#10003;|
|WGS 84|urn:ogc:def:crs:EPSG::4326|<span id="vinkje">&#10003;|<span id="vinkje">&#10003;|<span id="vinkje">&#10003;|<span id="vinkje">&#10003;|<span id="vinkje">&#10003;|
|Web-Mercator|urn:ogc:def:crs:EPSG::3857|<span id="kruisje">&#10005;|<span id="tilde">&#65374;|<span id="vinkje">&#10003;|<span id="vinkje">&#10003;|<span id="vinkje">&#10003;|

De tabel laat zien dat de eenvoudige formaten HTML en GeoJSON default alleen WGS 84 ondersteunen. In het geval dat een formaat alleen WGS 84 ondersteund moet dit worden geïnterpreteerd als een ongedefinieerd CRS met geografische coördinaten en lage nauwkeurigheid, omdat bijvoorbeeld een [nultransformatie](#wgs-84-gelijkstellen-aan-etrs89) kan zijn toegepast. Voor veel toepassingen op het web voldoet deze lagere nauwkeurigheid. De andere formaten ondersteunen meerdere CRS-en, ook de CRS-en die niet in deze tabel zijn opgenomen, maar wel zijn gegeven in [Bijlage A](#bijlage-a-crs-overzicht-tabel).

#### Gebruik van andere CRS-en in GeoJSON

Voor GeoJSON zijn in bovenstaande tabel tildes aangegeven voor andere CRS-en. GeoJSON ondersteunt default alleen WGS 84, echter de standaard biedt de optie voor gebruik van andere CRS-en, mits door de ontvangende en leverende partij vooraf is afgesproken welk CRS wordt uitgewisseld. Deze ruimte in de GeoJSON-specificatie wordt bijvoorbeeld in de [DSO API-strategie](https://iplo.nl/digitaal-stelsel/aansluiten/standaarden/api-en-uri-strategie/) gebruikt door het aangeboden en gevraagde CRS te specificeren in de header van een REST-API aanroep.

<div class=example>
_VOORBEELD_ 
In een aanroep naar de REST-API van de DSO-LV moet het gebruikte CRS voor de geometrie in de aanroep expliciet worden aangegeven door middel van de `Content-Crs` header. Het CRS waarin de geometrie in het antwoord is gewenst wordt opgegeven via de `Accept-Crs` header.
</div>

### Aandachtspunten  bij toepassing in software

Diverse software (bibliotheken) ondersteunen het gebruik van meerdere CRS-en. Deze paragraaf geeft een aantal voorbeelden en is zeker niet volledig.

#### Voor ontwikkelaars: PROJ

[PROJ](https://proj.org) is een open source softwarebibliotheek voor datumtransformaties en coördinaatconversies, tot februari 2018 was de software bekend onder de naam PROJ.4. PROJ heeft zich ontwikkeld van een software voor conversie van coördinaten tot een software voor geodetische datumtransformaties en coördinaatconversies. In versie PROJ 8.1.1 worden RDNAPTRANS™ en tijdsafhankelijke transformaties ondersteund, versies gebaseerd op PROJ.4 (voor 2018) hebben deze ondersteuning niet. PROJ wordt onder andere gebruikt in de bibliotheek voor het omzetten van dataformaten [GDAL](https://gdal.org) en de open-source GIS-software [QGIS](https://qgis.org).
#### Voor gebruikers: QGIS

[QGIS](https://www.qgis.org/) is een open source GIS-software. De ondersteuning van datumtransformaties en coördinaatconversies is gebaseerd op PROJ. QGIS kan ook worden gebruikt om conform het langelijnenadvies tussenpunten volgens een rechte lijn in de kaartprojectie te berekenen. Het berekenen van tussenpunten volgens een rechte lijn in werkelijkheid (geodetische lijn) volgens het [langelijnenadvies](#geometrie-en-topologie) is minder eenvoudig, maar kan wel met een speciale functie van PROJ.

<div class="example">
_VOORBEELD_ QGIS 3.20 bevat diverse implementaties van de transformatie tussen RD en ETRS89 die zijn opgenomen in de EPSG-database. Zodra in een project RD en ETRS89 worden gebruikt verschijnt een pop-up met de vraag welke transformatie moet worden gebruikt, behalve wanneer de gebruiker al een default heeft geconfigureerd. De meest nauwkeurige transformatie, in het geval van QGIS 3.20 is dat de 2D implementatie van RDNAPTRANS™, wordt als eerste getoond. In onderstaande figuur wordt het pop-up scherm getoond.

<figure id="plaatje">
    <img src="media/rdnaptrans2018_qgis.png" alt="hr2">
    <figcaption>Keuzescherm voor transformatie tussen RD en ETRS89 in QGIS.</figcaption>
</figure>

De in rood omleidende elementen in de pop-up duiden hier op het gebruik van RDNAPTRANS™, bijvoorbeeld de hoge nauwkeurigheid van de transformatie (0.001 m), de verwijzing naar RDNAPTRANS™2018 in de omschrijving en het gebruik van het correctiegrid in de PROJ-string.
</div>

