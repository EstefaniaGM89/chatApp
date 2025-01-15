# chatApp Ejercicio
Aplicación sencilla de chat con filtros y opción de eliminación.

Exercici 1: Enviar Missatges i actualitzar comptador
Objectiu: Emmagatzemar cada missatge com a objecte JSON dins d'un array i actualitzar el comptador de missatges.

Instruccions:
Crea un array buit anomenat historialDeMissatges que contindrà els missatges.
Cada vegada que s’envia un missatge, guarda un objecte JSON dins de l'array historialDeMissatges amb els camps:

{ "username": "NomUsuari", "message": "Text del missatge" }
Actualitza el comptador #countMessages amb el nombre total d’objectes JSON dins de historialDeMissatges.
Mostra els missatges dins de #output utilitzant l’estructura següent:

<p class="message_box">
<span class="user">NomUsuari:</span>
<span class="message">Text del missatge</span>
</p>

Cada vegada que s’afegeix un missatge, l’element #output ha de reflectir els missatges enviats fins al moment.

DOM esperat: Quan s’envia un missatge nou, aquest apareix a #output amb l’estructura especificada i el comptador s’actualitza automàticament.

<p class="message_box">
<span class="user">Joan:</span>
<span class="message">Hola a tothom!</span>
</p>
<p class="message_box">
<span class="user">Maria:</span>
<span class="message">Bon dia!</span>
</p>

Exercici 2: Afegir data i hora al missatge
Objectiu: Capturar i mostrar la data i l’hora en què s’envia cada missatge.
Instruccions:
Afegeix un nou camp date a cada objecte JSON de historialDeMissatges amb la data i l’hora d’enviament en el format dd/mm/yyyy hh:mm, utilitzant l’objecte Date.
Mostra la data i l'hora al costat de cada missatge dins #output, seguint aquesta estructura:
<p class="message_box">
<span class="user">NomUsuari:</span>
<span class="message">Text del missatge</span>
<span class="date"><small>(dd/mm/yyyy hh:mm)</small></span>
</p>
Comprova que cada nou missatge afegit a #output es mostri amb el format correcte i amb la data/hora exacta d’enviament.

DOM esperat:  Cada missatge a #output ha de tenir el nom de l’usuari, el text del missatge i la data/hora d’enviament.

<p class="message_box">
<span class="user">Joan:</span>
<span class="message">Hola a tothom!</span>
<span class="date"><small>(12/09/2024 14:30)</small></span>
</p>
<p class="message_box">
<span class="user">Maria:</span>
<span class="message">Bon dia!</span>
<span class="date"><small>(12/09/2024 14:31)</small></span>
</p>

Exercici 3: Filtre de missatges per paraula clau
Objectiu: Implementar la cerca de missatges per paraula clau i mostrar els resultats en un modal.
Instruccions:
Implementa la funcionalitat de cerca: quan es prem el botó de cerca, recorre l'array historialDeMissatges i cerca coincidències dins del camp message de cada objecte JSON.
Crida al mètode de l’objecte window toggleModal() per obrir el modal i mostrar allà els resultats de la cerca.
Els missatges filtrats que coincideixin amb la paraula clau han d’aparèixer dins del modal, amb el format Usuari: Missatge (Data).

<!-- Contingut del modal -->
<ul id="searchResults">
<li>Joan: Hola a tothom! <small>(12/09/2024 14:30)</small></li>
</ul>

Observacions:
Hi ha un arxiu modal.js que gestiona la interacció amb el modal. No cal fer res amb aquest. Si vols pots analitzar-lo per entendre com funciona. Pero el seu objectiu és ajudar-nos amb la gestió del modal.
Exercici 4: Llista d’usuaris i filtre de missatges per usuari
Objectiu: Crear una llista d’usuaris del xat i permetre que l’usuari pugui filtrar els missatges de la conversa segons un usuari concret, amb la possibilitat de desactivar el filtre per veure la conversa completa.
Instruccions:
Llista d’usuaris:
Crea un array usuaris que contindrà una llista única de tots els usuaris que han enviat missatges al xat.
Cada vegada que s’envia un missatge, comprova si el nom d’usuari ja existeix a usuaris. Si no hi és, afegeix-lo a la llista.
Botons d’acció per usuari:
Afegeix un botó a la secció “Filtrar els missatges del xat per usuari” per a cada un dels usuaris existents. (fixat al html, hi han els formats dels botons)
Cada botó ha de permetre filtrar els missatges per l'usuari seleccionat, mostrant només els missatges d'aquest usuari a #output.
Desactivar el filtre:
Dinamitza el botó per mostra tots els missatges, que restableixi el filtre i torni a mostrar tota la conversa.
DOM esperat: Els botons d'acció a .action_buttons tindran un format similar a aquest, amb un botó per cada usuari, així com un botó per desactivar el filtre:

<section class="action_buttons">
<div class="outline user-filter" data-user="Joan" role="button">Mostra missatges de Joan</div>
<div class="outline user-filter" data-user="Maria" role="button">Mostra missatges de Maria</div>
</section>

Exemple de funcionament:
Si l’usuari fa clic en el botó "Mostra missatges de Joan", només els missatges enviats per "Joan" es mostraran a #output.
Si fa clic en mostrar tots els missatges, el xat original es tornarà a mostrar a #output.

Requisits tècnics:
Comprovar usuaris: Cada vegada que s’envia un missatge nou, s’ha de recórrer els usuaris amb un mètode com some() per comprovar si l’usuari ja existeix.
Afegir botons d’acció: Crea dinàmicament els botons d'acció quan s'afegeix un usuari nou, i assegura't que cada botó tingui un event listener per aplicar el filtre.
Gestió del filtre: Utilitza el valor de data-user de cada botó per filtrar l'array historialDeMissatges i mostrar només els missatges de l'usuari seleccionat.
