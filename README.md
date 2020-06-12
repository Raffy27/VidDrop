# VidDrop
Egy videómegosztó és rendszerező projekt, első sorban vicces feladatok strukturált megoldására és megosztására.

## Cél és működés
* Több felhasználó által hozzáférhető felület
* Adaptív felület (jól alkalmazkodik különböző eszközökhöz)
* Letisztult felület
* Videók feltöltése, centralizált tárolása
* Lista a feltöltött videókkal, a feladatok szerint
* Feladatok teljesítése, lefoglalása időhatárok között
* Dinamikus adatok, frissíthető feladatlista
* Statisztikák

## Frontend
Felhasznált keretrendszerek:
* [Bootstrap 4](https://getbootstrap.com/)
* Jquery
* Popper.js

<details>
    <summary>Általános kinézet</summary>
    <p align="center">
        <img alt="Bejelentkezés" height="550" src="https://i.imgur.com/4B155mb.png">
        <img alt="Feladatlista" height="550" src="https://i.imgur.com/5NMJ9bF.png">
        <img alt="Navigáció" height="550" src="https://i.imgur.com/XLJIE7I.png">
        <img alt="Feladatmegoldás" height="550" src="https://i.imgur.com/nT0gx9f.png">
        <img alt="Dinamikus adatok" height="550" src="https://i.imgur.com/utDPeLf.png">
        <img alt="Statisztikák" height="550" src="https://i.imgur.com/7rLAIJ1.png">
    </p>
</details>

Létezik kompatibilis Dark mode is.

## Backend
Node.js alkalmazás, a hálózati kérelmek keretrendszere az [Express](http://expressjs.com/).
Az adatbázis [Sqlite3](https://sqlite.org/index.html) alapú.
Az összes felhasznált egységet és ezek fejlesztőit lásd a **Dependencies** oldalon.

A fontosabb részletek és események megjelennek a naplóban:

![Napló](https://i.imgur.com/masng09.png)
