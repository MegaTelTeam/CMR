import Title from "@/components/Title";
import React from "react";
import Costum_Button from "@/components/Costum_Button";
import Actuelle_section from "@/components/Actuelle_section";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <div className="px-[12vw]">
      <Title title="Aktuelles" />
      <div className="flex flex-col gap-[50px] mt-12">
        
        <Actuelle_section>
        <p>
              Sind Sie ein Käseliebhaber? Wir suchen Sie! Weitere Informationen
              sowie den Link zum Vorabinterview finden Sie
            </p>
            <Costum_Button 
            text_className="font-medium text-xl"
              inside={false}
              link="www.facebook.com"
              text="hier."
              displayIcon1={false}
              height={50}
              width={150}
            />
        </Actuelle_section>
        
        <Actuelle_section>
          <p className="font-medium text-2xl">
            Meinungsumfrage zur Oberbürgermeisterwahl am 23. September 2018 in
            Zweibrücken
          </p>
          <p>
            Am 23. September wählt Zweibrücken einen neuen Oberbürgermeister.
            Die RHEINPFALZ hat mittels einer Meinungsumfrage den Zuspruch für
            die Kandidaten ermittelt. Ein wichtiges Ergebnis: Kurz vor der Wahl
            wissen mehr als ein Drittel der Zweibrücker noch nicht, ob und wen
            sie wählen. Deshalb bleibt das Rennen offen, auch wenn die Abstände
            vorm Endspurt groß sind. Artikel aus der Rheinpfalz zur
            Oberbürgermeisterwahl in Zweibrücken: 
          </p>
          <div className="flex flex-col md:flex-row gap-5">
            <Costum_Button
              inside={true}
              link="#"
              text="Seite 1"
              height={50}
              width={190}
              text_className="font-medium text-xl"
            />
            <Costum_Button
              inside={true}
              link="#"
              text="Seite 2"
              height={50}
              width={190}
              text_className="font-medium text-xl"
            />
            <Costum_Button
              inside={true}
              link="#"
              text="Seite 3"
              height={50}
              width={190}
              text_className="font-medium text-xl"
            />
          </div>
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">
            Stimmungsbild zur Oberbürgermeisterwahl 2018 in Speyer
          </p>
          <p>
            Wenn heute Oberbürgermeisterwahl wäre, gäbe es ein
            Kopf-an-Kopf-Rennen zwischen Amtsinhaber Hansjörg Eger (CDU) und der
            Beigeordneten Stefanie Seiler (SPD). Dieses Stimmungsbild hat eine
            repräsentative Meinungsumfrage im Auftrag der RHEINPFALZ
            ergeben.Artikel aus der Rheinpfalz zur Oberbürgermeisterwahl in
            Speyer: 
          </p>
          <div className="flex flex-col md:flex-row gap-5">
            <Costum_Button
              inside={true}
              link="#"
              text="Seite 1"
              height={50}
              width={190}
              text_className="font-medium text-xl"
            />
            <Costum_Button
              inside={true}
              link="#"
              text="Seite 2"
              height={50}
              width={190}
              text_className="font-medium text-xl"
            />
          </div>
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">
            Repräsentative Meinungsumfrage zu Ehrung für Altbundeskanzler in
            Speyer – Helmut-Kohl-Ufer
          </p>
          <p>
            Das Stadtratsvotum vom 15. März, die Rheinpromenade in
            „Helmut-Kohl-Ufer“ umzubenennen, ist mit dem Bürgerwillen vereinbar.
            Das ist das Ergebnis einer repräsentativen Umfrage unter 500
            Speyerern im Auftrag der RHEINPFALZ.
          </p>
          <div>
            <Costum_Button
              inside={true}
              link="#"
              text="Artikel aus der Speyerer Rundschau  "
              height={50}
              width={470}
              text_className="font-medium text-xl"
            />
          </div>
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">
            Wahlbarometer für den Wahlkreis 268 Schwäbisch Hall-Hohenlohe, vom
            28. und 29. August sowie vom 4. bis 6. September
          </p>
          <p>
            Das Meinungsforschungsinstitut C.M.R. hat im Auftrag von Haller
            Tagblatt, Hohenloher Tagblatt und Rundschau Gaildorf im
            Bundestagswahlkreis Schwäbisch Hall-Hohenlohe in der KW 35 sowie 36
            Umfragen durchgeführt, um das Stimmungsbild der Bevölkerung zu
            erfassen. Artikel zur Bundestagswahl im Hohenloher Tagblatt:
          </p>
          <div>
            <Costum_Button
              inside={true}
              link="#"
              text="Hohenloher Tagblatt KW35 Hohenloher Tagblatt KW36  "
              height={50}
              width={650}
              text_className="font-medium text-xl"
            />
          </div>
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">
            Meinungsumfrage zur Oberbürgermeisterwahl am 24. September 2017 in
            Ludwigshafen am Rhein
          </p>
          <p>
            C.M.R. führte im Auftrage der RHEINPFALZ eine repräsentative
            Meinungsumfrage durch. Eine Stichwahl ist wahrscheinlich.Artikel zur
            OB-Wahl in Luwigshafen:
          </p>
          <div className="flex flex-col md:flex-row gap-5">
            <Costum_Button
              inside={true}
              link="#"
              text="Seite 1"
              height={50}
              width={190}
              text_className="font-medium text-xl"
            />
            <Costum_Button
              inside={true}
              link="#"
              text="Seite 2"
              height={50}
              width={190}
              text_className="font-medium text-xl"
            />
          </div>
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">
            Vier Wochen vor der OB-Wahl in Neustadt an der Weinstraße: Hat sich
            die Stimmung geändert?
          </p>
          <p>
            Marc Weigel will sich nicht zu früh freuen. Ingo Röthlingshöfer und
            Pascal Bender geben sich für die kommenden vier Wahlkampfwochen
            ausgesprochen kämpferisch.
          </p>
          <p>
            Das sind die Reaktionen auf die repräsentative Umfrage, die wir Ende
            August durchgeführt haben. Artikel aus der Rheinpfalz zur
            Oberbürgermeisterwahl in Neustadt an der Weinstraße:
          </p>
          <div className="flex flex-col md:flex-row gap-5">
            <Costum_Button
              inside={true}
              link="#"
              text="Seite 1"
              height={50}
              width={190}
              text_className="font-medium text-xl"
            />
            <Costum_Button
              inside={true}
              link="#"
              text="Seite 2"
              height={50}
              width={190}
              text_className="font-medium text-xl"
            />
            <Costum_Button
              inside={true}
              link="#"
              text="Seite 3"
              height={50}
              width={190}
              text_className="font-medium text-xl"
            />
          </div>
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">
            Stimmungsbild zur Oberbürgermeisterwahl 2017 in Neustadt an der
            Weinstraße / Politische Stimmung in Neustadt / Beurteilung der
            Arbeit des Stadtvorstands
          </p>
          <p>
            500 Neustadter hat das Mannheimer Institut für Communication- und
            Marketing-Research (C.M.R.) am Telefon befragt. 338 erklärten, sich
            für die Oberbürgermeisterwahl im Herbst 2017 bereits entschieden zu
            haben. 45 Prozent dieser Personen wollen Marc Weigel (FWG) wählen,
            30 Prozent Ingo Röthlingshöfer und 26 Prozent Pascal Bender (SPD).
          </p>
          <Costum_Button
            inside={true}
            link="#"
            text="Artikel zum Stimmungsbild Oberbürgermeisterwahl"
            height={50}
            width={620}
            text_className="font-medium text-xl"
          />
          <p>
            29 Prozent für die SPD, 28 Prozent für die CDU – die
            Sozialdemokraten vor der Union: Ein solches Wahlergebnis hat es im
            kommunalpolitischen Neustadt noch nie gegeben. Es ist eine
            Momentaufnahme…
          </p>
          <Costum_Button
            inside={true}
            link="#"
            text="Artikel zur politischen Stimmung in Neustadt "
            height={50}
            width={570}
            text_className="font-medium text-xl"
          />
          <p>
            Die Durchschnittsnote 3,4 bekommt Oberbürgermeister Hans Georg
            Löffler (CDU), wenn die Statistiker des Mannheimer Instituts für
            Communication- und Marketing- Research (C.M.R.) ihre Umfrage
            auswerten. 500 wahlberechtigte Bürger wurden im Auftrag der
            RHEINPFALZ am Telefon gebeten, die Arbeit des Stadtvorstandes mit
            Schulnoten zu bewerten.
          </p>
          <Costum_Button
            inside={true}
            link="#"
            text="Artikel “Beurteilung der Arbeits des Stadtrats” "
            height={50}
            width={600}
            text_className="font-medium text-xl"
          />
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">
            Meinungsumfragen zur Landtagswahl 2016 in den Wahlkreisen
            Schwäbisch-Hall und Hohenlohe
          </p>
          <p>
            C.M.R. führte im Auftrag des Hohenloher Tagblatts, des Haller
            Tagblatts und der Rundschau für den Schwäbischen Wald Ende Februar
            die erste von insgesamt drei Umfragen zur bevorstehenden
            Landtagswahl durch.Die vollständigen Artikel der ersten Umfrage
            finden Sie
          </p>
          <Costum_Button
            inside={true}
            link="#"
            text="hier."
            height={50}
            width={150}
            text_className="font-medium text-xl"
          />
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">
            Wahlbarometer 2016 für die Bietigheimer Zeitung / Umfrage zur
            Biomüllvergärungsanlage im Steinbruch Fink
          </p>
          <p>
            Die in Baden-Württemberg regierende grün-rote Koalition ist beliebt
            in den Wahlkreisen 13 und 14. Laut einer repräsentativen BZ-Umfrage
            würde eine relative Mehrheit die Fortsetzung des Bündnisses
            favorisieren – gefolgt von Schwarz-Grün.Den vollständigen Artikel
            aus der Bieterheimer Zeitung vom
          </p>
          <Costum_Button
            inside={true}
            link="#"
            text="27.02.2016"
            height={50}
            width={200}
            text_className="font-medium text-xl"
          />
          <p>und vom</p>
          <Costum_Button
            inside={true}
            link="#"
            text="01.03.2016"
            height={50}
            width={200}
            text_className="font-medium text-xl"
          />
          <p>
            zur Landtagswahl können Sie mit einem Klick auf das jeweilige Datum
            lesen.Den Artikel aus der Bieterheimer Zeitung vom 01.03.2016 zum
            Thema Biomüllvergärungsanlage finden Sie
          </p>
          <Costum_Button
            inside={true}
            link="#"
            text="hier."
            height={50}
            width={150}
            text_className="font-medium text-xl"
          />
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">
            Umfrage zum geplanten Tunnel-Neubau in Neustadt an der Weinstraße
          </p>
          <p>
            Eine deutliche Mehrheit der Neustadter lehnt den geplanten B
            39-Tunnel unter dem Bahnhofsvorplatz ab.
          </p>
          <p>
            Das ist das Ergebnis einer repräsentativen Umfrage von C.M.R. im
            Auftrag der RHEINPFALZ.Den vollständigen Artikel finden Sie
          </p>
          <Costum_Button
            inside={true}
            link="#"
            text="hier."
            height={50}
            width={150}
            text_className="font-medium text-xl"
          />
          <p>
            Quelle: <span className="text-gray-400">Rheinpfalz</span> vom
            04.05.2013
          </p>
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">
            C.M.R.-Umfrage zu Windkraftanlagen im Pfälzerwald
          </p>
          <p>
            Wie die Pfälzer zur Windkraft stehen, hängt nicht zuletzt davon ab,
            wo solche Anlagen hinkommen sollen: 56 Prozent der vom Mannheimer
            Marktforschungsinstitut Communication & Marketing-Research (C.M.R.)
            Befragten hätten zwar nichts dagegen, wenn in der Nähe ihrer Wohnung
            Windräder errichtet würden. Die Zustimmung schrumpft aber auf 43
            Prozent, wenn nach der Aufstellung von Windrädern im Pfälzerwald
            gefragt wird.Den vollständigen Artikel finden Sie
          </p>
          <Costum_Button
            inside={true}
            link="#"
            text="hier."
            height={50}
            width={150}
            text_className="font-medium text-xl"
          />
          <p>
            Quelle: <span className="text-gray-400">Rheinpfalz</span> vom
            22.03.2013
          </p>
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">
            Umfrage zur Landratswahl 2013 im Landkreis Südliche Weinstraße
          </p>
          <p>
            Nach einer von der RHEINPFALZ in Auftrag gegebenen repräsentativen
            Umfrage gilt die von der SPD nominierte Landrätin Theresia Riedmaier
            als klare Favoritin in die Landratswahl im Landkreis Südliche
            Weinstraße am 14. April.Den vollständigen Artikel finden Sie
          </p>
          <Costum_Button
            inside={true}
            link="#"
            text="hier."
            height={50}
            width={150}
            text_className="font-medium text-xl"
          />
          <p>
            Quelle: <span className="text-gray-400">Rheinpfalz</span> vom
            21.03.2013
          </p>
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">Vereinbarkeitsstudie 2012</p>
          <p>
            Die Metropolregion Rhein-Neckar (MRN) ist in den vergangenen fünf
            Jahren familienfreundlicher geworden und schneidet auch im
            bundesweiten Vergleich sehr gut ab. Zu diesem Ergebnis kommt die von
            C.M.R im Auftrag der Metropolregion Rhein-Neckar GmbH durchgeführte
            Vereinbarkeitsstudie 2012.Für die Vereinbarkeitsstudie 2012, wurden
            von C.M.R. 585 Unternehmen und öffentliche Einrichtungen aus der
            Region, zu den Themen Vereinbarkeit von Beruf und Familie sowie
            Beruf und Pflege befragt.Die Ergebnisse der Studie wurden am
            Freitag, den 10.08.2012 im Rahmen einer Pressekonferenz bei der IHK
            Rhein-Neckar in Mannheim vorgestellt.
          </p>
          <div className="flex flex-col  gap-5">
            <Costum_Button
              inside={true}
              link="#"
              text="Artikel aus dem Mannheimer Morgen zur Vereinbarkeitsstudie"
              height={50}
              width={750}
              text_className="font-medium text-xl"
            />
            <Costum_Button
              inside={true}
              link="#"
              text="Artikel von Familie-in-NRW.de zur Vereinbarkeitsstudie "
              height={50}
              width={650}
              text_className="font-medium text-xl"
            />
          </div>
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">AS&S Radio Liga Live:</p>
          <p>
            Umfrage zur Ermittlung der Bekanntheit der Firmen, die im Umfeld der
            Konferenzschaltung geworben hatten im Vergleich zur Bekanntheit
            unter der BevölkerungStudienbeschreibung und Ergebnisse als
          </p>
          <div className="flex flex-col items-center lg:items-start  gap-5">
            <Costum_Button
              inside={true}
              link="#"
              text="pdf-Datei"
              height={50}
              width={210}
              text_className="font-medium text-xl"
            />
            <Costum_Button
              inside={true}
              link="#"
              text="Artikel von Familie-in-NRW.de zur Vereinbarkeitsstudie  "
              height={50}
              width={670}
              text_className="font-medium text-xl"
            />
          </div>
          <p>
            Quelle:{" "}
            <span className="text-gray-400">
              AS&S Radio LigaLive Begleitforschung
            </span>{" "}
          </p>
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">
            Crossmedia-Kampagne: Radio und Online wirkt besser: Listen & Surf
            bringt WIESENHOF Bruzzzler groß raus
          </p>
          <p>
            Zwei Produkte, zwei Medien, eine integrierte crossmediale
            Mediaaussteuerung nach fünf Kriterien (Wochentage, Wetterlage,
            Region, Prime-Time-Zeitschienen und Alter der Mediennutzer) – und
            ein überzeugendes Ergebnis: Zur Bewerbung des WIESENHOF Bruzzzler
            und zur Markteinführung der neuen Bruzzzler Variante „Hot Safari“
            setzte WIESENHOF auf eine integrierte Radio-Online-Kampagne mit der
            Listen & Surf Recency Crossmedia-Kombi von AS&S Radio und United
            Internet Media (Mediaplanung: Zenithmedia, Düsseldorf, Kreation:
            KD+P, Bremen).Die vollständige Pressemitteilung finden Sie
          </p>
          <Costum_Button
            inside={true}
            link="#"
            text="hier."
            height={50}
            width={150}
            text_className="font-medium text-xl"
          />

          <p>
            Quelle:{" "}
            <span className="text-gray-400">ARD Sales & Services GmbH</span>{" "}
          </p>
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">
            Werbewirkung: Reminder-Spots erhöhen Werbeerinnerung deutlich
          </p>
          <p>
            Markenspots im Radio, auf die ein Reminder-Spot folgt, werden
            deutlich besser erinnert als Spots ohne Reminder. Dies ergab eine
            Studie der ARD Werbung SALES & SERVICES (AS&S) im Auftrag der AS&S
            Radio, bei der vier Markenspots aus den Bereichen Getränke, Reisen,
            Jobbörse und Food mit und ohne Reminder getestet wurden. Dabei
            sorgten die Reminder-Spots für eine durchschnittlich 78 Prozent
            höhere Werbeerinnerung.Die vollständige Pressemitteilung finden Sie
          </p>
          <Costum_Button
            inside={true}
            link="#"
            text="hier."
            height={50}
            width={150}
            text_className="font-medium text-xl"
          />

          <p>
            Quelle:{" "}
            <span className="text-gray-400">ARD Sales & Services GmbH</span>{" "}
          </p>
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">
            Umfrage zur Bürgermeisterwahl in der Verbandsgemeinde Lambrecht
          </p>
          <p>
            Bei der repräsentativen Umfrage für die Rheinpfalz, die Ende März
            durchgeführt wurde, ermittelte C.M.R. folgende Werte: Kirr (63,1%);
            Kratz (22,9%) und Wenzel (13,9%).Den vollständigen Artikel finden
            Sie
          </p>
          <Costum_Button
            inside={true}
            link="#"
            text="hier."
            height={50}
            width={150}
            text_className="font-medium text-xl"
          />
          <p>
            Quelle: <span className="text-gray-400">Rheinpfalz</span> vom
            23.04.2012
          </p>
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">
            Bürgermeisterwahl in der Verbandsgemeide Zweibrücken-Land
          </p>
          <p>
            Bei der Wahl zum neuen Bürgermeister der Verbandsgemeinde
            Zweibrücken-Land zeichnet sich ein Kopf-an-Kopf-Rennen zwischen Paul
            Sefrin (CDU) und Jürgen Gundacker (SPD) ab: Drei Monate vor der Wahl
            liegen beide Kandidaten in einer repräsentativen Umfrage im Auftrag
            der RHEINPFALZ bei rund 50 Prozent. Dabei liegt Paul Sefrin mit
            einem Abstand von fünf Prozentpunkten leicht vorne.Den vollständigen
            Artikel finden Sie
          </p>
          <Costum_Button
            inside={true}
            link="#"
            text="hier."
            height={50}
            width={150}
            text_className="font-medium text-xl"
          />
          <p>
            Quelle: <span className="text-gray-400">Rheinpfalz</span> vom
            12.01.2012
          </p>
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">
            Wallhalben vor der Verbandsbürgermeisterwahl
          </p>
          <p>
            Der Wunsch der Wallhalber, ihre Verbandsgemeinde (VG) zu erhalten,
            ist nach wie vor groß: 86 Prozent aller Befragten gaben bei einer
            <br />
            repräsentativen Umfrage im Auftrag der RHEINPFALZ an, dass die VG
            Wallhalben in ihrer jetzigen Form bestehen bleiben soll. Neun <br />{" "}
            Prozent antworteten mit nein, fünf Prozent ist es egal. Kommt es zur
            Auflösung, wissen die meisten genau, wohin sie wechseln möchten.Den
            vollständigen Artikel finden Sie
          </p>
          <Costum_Button
            inside={true}
            link="#"
            text="hier."
            height={50}
            width={150}
            text_className="font-medium text-xl"
          />
          <p>
            Quelle: <span className="text-gray-400">Rheinpfalz</span> vom
            7.01.2012
          </p>
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">
            Zur Bürgermeister-Wahl in Hassloch
          </p>
          <p>
            Wenn am kommenden Sonntag Bürgermeisterwahlen in Haßloch wären,
            könnte Amtsinhaber Hans-Ulrich Ihlenfeld (CDU) nach dem Ergebnis
            einer repräsentativen RHEINPFALZ-Umfrage mit einem komfortablen
            Vorsprung gegenüber seinem Herausforderer Reiner Ullrich (SPD)
            rechnen.Den vollständigen Artikel finden Sie
          </p>
          <Costum_Button
            inside={true}
            link="#"
            text="hier."
            height={50}
            width={150}
            text_className="font-medium text-xl"
          />
          <p>
            Quelle: <span className="text-gray-400">Rheinpfalz</span> vom
            24.12.2011
          </p>
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">
            Umfrage zu Nationalpark im Pfälzerwald
          </p>
          <p>
            Zwei überraschende Ergebnisse bringt die repräsentative Umfrage der
            RHEINPFALZ: Im Gräfensteiner Land <br />
            sind genau so viele Menschen dafür wie dagegen, im Pfälzerwald einen
            Nationalpark einzurichten.
          </p>
          <p>
            Und: Viele schätzen die Stimmung in der Bevölkerung ganz anders ein
            als ihre eigene.Den vollständigen Artikel finden Sie
          </p>
          <Costum_Button
            inside={true}
            link="#"
            text="hier."
            height={50}
            width={150}
            text_className="font-medium text-xl"
          />
          <p>
            Quelle: <span className="text-gray-400">Rheinpfalz</span> vom
            23.12.2011
          </p>
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">
            C.M.R.-Umfrage zur Flugplatzerweiterung in Speyer
          </p>
          <p>
            Es gibt mehr Gegner als Befürworter des laufenden Flugplatz-Ausbaus
            in Speyer. Ein Großteil der Bürger befürchtet auch, dass mit den
            Bauarbeiten das Ende einer Erweiterung noch nicht erreicht ist. Sie
            halten sie – obwohl das juristisch derzeit unmöglich ist und ein
            neues Planfeststellungsverfahren notwendig wäre – nicht für
            ausgeschlossen. Besonders skeptisch sind Anhänger der Grünen,
            darunter vor allem Frauen.Den vollständigen Artikel finden Sie
          </p>
          <Costum_Button
            inside={true}
            link="#"
            text="hier."
            height={50}
            width={150}
            text_className="font-medium text-xl"
          />
          <p>
            Quelle: <span className="text-gray-400">Rheinpfalz</span> vom
            27.11.2010
          </p>
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">
            C.M.R.-Umfrage zur OB-Wahl 2011 in Zweibrücken
          </p>
          <p>
            Wenn die Zweibrücker Bürger schon morgen einen neuen
            Oberbürgermeister wählen würden, dann hieße der Sieger Kurt Pirmann.
            Das ist das Ergebnis einer repräsentativen Meinungsumfrage der
            RHEINPFALZ.
          </p>
          <Costum_Button
            inside={true}
            link="#"
            text=" Meinungsumfrage "
            height={50}
            width={290}
            text_className="font-medium text-xl"
          />
          <p>der RHEINPFALZ.</p>
          <p>
            Quelle: <span className="text-gray-400">Rheinpfalz</span> vom
            6.11.2010
          </p>
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">
            Meinungsumfrage von C.M.R. zur Zweibrücker Stadtpolitik
          </p>
          <p>
            Würde jetzt ein neuer Stadtrat gewählt, änderte sich das
            Kräfteverhältnis klar: Das Zweibrücker
          </p>
          <Costum_Button
            inside={true}
            link="#"
            text="Meinungsklima"
            height={50}
            width={270}
            text_className="font-medium text-xl"
          />
          <p>
            lässt vor allem FWG und Grüne Liste erstarken, zudem FDP und CDU
            merklich verlieren.
          </p>
          <p>
            Quelle: <span className="text-gray-400">Rheinpfalz</span> vom
            6.11.2010
          </p>
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">
            Bahnverbindung zwischen Zweibrücken und Homburg
          </p>
          <p>
            92 Prozent der Zweibrücker wollen, dass die Bahnverbindung zwischen
            Zweibrücken und Homburg wiederhergestellt wird. Das ist das Ergebnis
            einer repräsentativen
          </p>
          <Costum_Button
            inside={true}
            link="#"
            text=" Meinungsumfrage "
            height={50}
            width={290}
            text_className="font-medium text-xl"
          />
          <p>
            im Auftrag der RHEINPFALZ. Nur sechs Prozent der Befragten lehnen
            die Reaktivierung ab.
          </p>
          <p>
            Quelle: <span className="text-gray-400">Rheinpfalz</span> vom
            5.11.2010
          </p>
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">
            Als Mitglied des ADM unterstützt C.M.R. die Initiative Markt- und
            Sozialforschung e.V.
          </p>
          <p>Weitere Informationen finden Sie unter :</p>
          <p className="text-gray-400">http://www.deutsche-marktforscher.de </p>
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">
            © C.M.R. – Emotions- und Motiv-Typologie
          </p>
          <p>
            C.M.R. hat eine neue Methodik zur Zielgruppen-Segmentierung
            entwickelt.
          </p>
          <p>
            Die Emotions- und Motiv-Typologie weist 7 verschiedene Typen aus,
            die nicht nach verschiedenen externen Faktoren wie Bildung oder
            Einkommen segmentiert werden, sondern auf der Gefühlsebene und
            Wertevorstellungen von Konsumenten ansetzt.
          </p>
          <p>
            Mit Hilfe der Typologie kann ermittelt werden, welches emotionale
            Image Marken besitzen bzw. mit welchen Emotionen und Assoziationen
            die eigene Zielgruppe, aber auch potenzielle Kunden angesprochen
            werden können.
          </p>
          <p>
            Die Methode ist universell einsetzbar, unabhängig von der Art der
            Interviewmethode und kann problemlos in jede Befragung integriert
            werden.
          </p>
          <p>
            Eine Beschreibung der C.M.R. Emotions- und Motiv-Typologie finden
            Sie hier:
          </p>
          <Costum_Button
            inside={true}
            link="#"
            text=" C.M.R. Emotions- und Motiv-Typologie"
            height={50}
            width={490}
            text_className="font-medium text-xl"
          />
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">
            Radio-7-Umfrage: Metzger kann Rückstand nur leicht verringern
          </p>
          <p>
            Oswald Metzger kann den Rückstand auf seinen Kontrahenten Daniel
            Rapp im Kampf um den OB-Sessel in Ravensburg nur leicht verringern.
            Das ist das Ergebnis einer repräsentativen Umfrage im Auftrag von
          </p>
          <Costum_Button
            inside={true}
            link="#"
            text=" Meinungsumfrage "
            height={50}
            width={280}
            text_className="font-medium text-xl"
          />
          <p>
            Das beauftragte Marktforschungsinstitut C.M.R. in Mannheim, befragte
            in den vergangenen Tagen 500 wahlberechtigte Bürger. Nach dem
            vorliegenden Ergebnis ist klar:Der Ex-Grüne Oswald Metzger konnte in
            den letzten beiden Wochen zwar leicht aufholen, aber dennoch nur
            wenig Kapital aus Rapps Ausrutschern im Wahlkampf
            schlagen.Sigmaringens Bürgermeister hatte der Öffentlichkeit seine
            Scheidung verschwiegen und war wegen der so genannten Twitter-Affäre
            in die Kritik geraten. Weiteres Details aus der repräsentativen
            Umfrage: Aus dem Lager der Grünen hat Metzger, nach dem Rückzug von
            Kandidatin Brigitte Lösch, Wähler auf seine Seite ziehen können.
            Metzger punktet eher bei den ganz jungen und den älteren Wählern,
            Rapp bezieht seine Stärke aus der Mitte der Wählerschaft.Der Sieger
            des ersten Wahlgangs, CDU Kandidat Daniel Rapp hat die Nase immer
            noch vorn.(Erschienen: 26.03.2010 23:07)Quelle:
          </p>

          <p>
            Quelle:{" "}
            <span className="text-gray-400"> Schwäbische Zeitung Online</span>
          </p>
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">
            Konsum und Anschaffungsabsichten im Jahre 2010
          </p>
          <p>
            Für 2010 ist nicht unbedingt mit einer Verbesserung der
            wirtschaftlichen Situation zu rechnen. Kurzarbeit wird weiterhin ein
            wichtiges Instrument zur Regulierung des Arbeitsmarktes darstellen.
            Viele Bürger sind verunsichert, oder zumindest skeptisch oder
            vorsichtig. Erwartunsgsgemäß zeigt daher auch der Konsum-Klima-Index
            nach unten.Wie reagiert der Einzelne aber nun konkret? C.M.R. hat in
            der Woche vom 25. bis 31. Januar 2010 eine repräsentative
            telefonische Umfrage in Niedersachsen durchgeführt. Dabei wurden 500
            Personen befragt, die sich entweder als Haushaltsführende(r)
            und/oder als Haushalts-Vorstand bezeichneten. Themen waren
            Anschaffungsabsichten im laufenden Jahr und beabsichtigte
            Konsumänderungen.Bei Gaststättenbesuchen, Kinobesuchen und für
            Urlaub sind in der Tendenz geringere Ausgaben geplant, als noch
            2009.
          </p>
          <p>Es planen 2010 den Kauf…</p>
          <p>
            eines Breitbildfernsehers: 15%
            <br />
            eines Fahrrades: 12%
            <br />
            von Badmöbeln: 10%
            <br />
            neuer Fenster: 8%
            <br />
            eines Kühlschrankes: 7%
            <br />
            eines Wohnzimmerschrankes: 10%
            <br />
            eines Gefrierschrankes: 6%
            <br />
            einer neuen Haustür: 6%
            <br />
            einer Geschirrspülmaschine: 5%
            <br />
            einer Digitalkamera: 5%
            <br />
            eines Autonavigationssystems: 4%
            <br />
            einer Waschmaschine: 4%
            <br />
            eines Kamines: 4%
            <br />
            einer neuen Heizung: 4%
            <br />
            eines Wäschetrockers: 2%
            <br />
            von Energiesparlampen: 52%
            <br />
            einer Sehhilfe (Brille): 28%
          </p>
          <p>
            Bei den Sehhilfen steht bei der Anschaffung ganz klar der Preis im
            Vordergrund, die Marke spielt nur eine untergeordnete Rolle. Nur bei
            zwei Konsumgütern zeigt sich ein ähnlicher Reflex. Mehr als noch
            2009 wollen 2010 Verbraucher den Preis der Marke vorziehen und zwar
            bei Nudeln und Butter. Ähnliches gilt auch für den Kauf von
            Handtaschen und bei Produkten der Gartengestaltung.Die Marke gewinnt
            gegenüber dem Vorjahr an Bedeutung unter anderem bei Soft Drinks,
            Bier, Spirituosen, Kaffee, Süßigkeiten, Babynahrung,
            Körperpflegemitteln, Waschmitteln, Schuhen, Heimwerkerprodukten,
            OTC-Produkten und Handys.Den kompletten Ergebnisbericht können Sie
            gern kostenlos anfordern – so lange Vorrat reicht – unter 
            <span className="text-gray-400">info@cmr.de </span> oder bei
            Hans-Michael Mohr unter der Telefonnummer 0621 – 18 16 302.
          </p>
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">
            Umfragen in der Metropolregion Rhein-Neckar
          </p>

          <p>
            C.M.R. hat in den Jahren 2007 und 2009 im Auftrag der „Zukunft
            Metropolregion Rhein-Neckar e.V.“ ein „Bürgermonitoring“ unter dem
            Namen „Bürger in Bewegung“ in der Metropolregion Rhein-Neckar
            durchgeführt. Die Zielgruppe bildeten Personen im Alter ab 17 Jahren
            aus den Landkreisen und den kreisfreien Städten der Metropolregion
            Rhein-Neckar.Die Untersuchungen fanden als telefonische Befragungen
            statt, bei der in beiden Jahren jeweils 2.000 Personen interviewt
            wurden.Das Projekt “Bürger in Bewegung” ist ein Kooperationsprojekt
            zwischen der
            <span className="text-gray-400">
              Metropolregion Rhein-Neckar GmbH
            </span>
            und dem
            <span className="text-gray-400">
              Deutschen Forschungsinstitut für öffentliche Verwaltung in Speyer
            </span>
            ,Deutschen Forschungsinstitut für öffentliche Verwaltung in Speyer
            <span className="text-gray-500">
               Q | Agentur für Forschung GmbH, Mannheim.
            </span>
            Projektleiterin ist Sylvana Mehrwald von der Metropolregion
            Rhein-Neckar GmbH, wissenschaftlicher Leiter ist Professor Dr.
            Helmut Klages vom Deutschen Forschungsinstitut für öffentliche
            Verwaltung in Speyer. Themen der Befragung waren im weitesten Sinne
            Wissen und Vorstellungen über die Metropolregion Rhein-Neckar sowie
            Zufriedenheiten (wahrgenommene Lebensqualität) und die persönliche
            Relevanz von Lebensbereichen in der Region. Mit dem Bürgermonitoring
            werden einerseits Aussagen über die gesamte Region und andererseits
            auch über die fünfzehn räumlichen Einheiten der Region, die
            kreisfreien Städte und Landkreise, möglich: Auf der Homepage der
            Metropolregion Rhein-Neckar (
            <span className="text-gray-500"> www.m-r-n.de</span>) werden zurzeit
            u. a. folgende Ergebnisse zusammengestellt (und dort auch graphisch
            aufbereitet und inhaltlich unterfüttert):
          </p>
          <p>
            <br />
            Wussten Sie, ……, dass nahezu 80% von der Metropolregion Rhein-Neckar
            (MRN) gehört haben?
          </p>
          <p>
            …, dass nur rund 22% der Befragten sich ein mindestens gutes Wissen
            über die Region zuschreiben?
            <br />
            …,dass die Lebensqualität als besondere Stärke der MRN wahrgenommen
            wird?
            <br />
            …,dass rund 45% der befragten Bürger keine Nachteile oder Schwächen
            zur MRN benennen? <br /> …,dass die Bürger sich stark mit ihrem
            Wohnort verbunden fühlen? <br /> …,dass die Attraktivität der MRN
            höher bewertet wird als die Attraktivität des eigenen Wohnorts?
            <br /> …,dass fast jeder zweite Bürger der Region ehrenamtlich tätig
            ist?
          </p>
        </Actuelle_section>

        <Actuelle_section>
          <p className="font-medium text-2xl">
            Vor der Oberbürgermeister-Wahl in Mannheim – Mai 2007
          </p>
          <p>
            Wer zur Zeit nach Mannheim fährt sieht es ganz deutlich an den
            Plakaten. Mannheim steht im Zeichen der Oberbürgermeister-Wahl, die
            am 17. Juni stattfindet. Anlass für C.M.R., eine repräsentative
            Umfrage unter 500 wahlberechtigten Mannheimerinnen und Mannheimern
            durchzuführen, um einen ersten Eindruck von den Wahlchancen der
            einzelnen Kandidaten zu erhalten.Unter den Kandidaten führt Peter
            Kurtz (SPD) mit rund 42% vor Ingo Wellenreuther (CDU) mit 34%. Aber:
            mehr als ein Drittel der Wähler hat sich noch nicht für einen
            Kandidaten entschieden. Es bleibt also spannend, wie sich diese
            Wählergruppe letztendlich entscheiden wird.Weitere Informationen
            finden Sie hier:
          </p>
          <Costum_Button
            inside={true}
            link="#"
            text="Vor der Oberbürgermeister-Wahl in Mannheim"
            height={50}
            width={600}
            text_className="font-medium text-xl"
          />
        </Actuelle_section>

        <Actuelle_section>
          <p className="font-medium text-2xl">
            Leben(squalität) in der Süd-Pfalz – März 2007
          </p>
          <p>
            n Neustadt an der Weinstraße und in Landau, Weinkennern und
            Liebhabern pfälzischer Weinfeste wohlbekannte Orte, lässt es sich
            gut leben. Wie Untersuchungen von C.M.R. im Auftrag der RHEINPFALZ
            zeigen, sind die Bewohner dieser Orte mit ihrem Lebensumfeld sehr
            zufrieden. Auch interessant, die attraktivste Stadt in der Region
            ist für die Bewohner Landaus und Neustadts Speyer mit seinem
            Kaiserdom.
          </p>
          <p>Weitere Informationen finden Sie hier:</p>{" "}
          <Costum_Button
            inside={true}
            link="#"
            text="Leben(squalität) in der Süd-Pfalz"
            height={50}
            width={500}
            text_className="font-medium text-xl"
          />
        </Actuelle_section>
        <Actuelle_section>
          <p className="font-medium text-2xl">
            Pfälzer wollen D-Mark zurück – Januar 2007
          </p>
          <p>
            Wie eine repräsentative Befragung von C.M.R. im Auftrag der
            RHEINPFALZ in der Pfalz zeigte, wünscht sich eine Mehrheit von 52%
            auch fünf Jahre nach der Einführung des Euro die D-Mark zurück.
            Dabei sind es nicht nur die Älteren, die an der D-Mark hängen. Das
            Ergebnis aus der Pfalz bestätigt damit andere bundesweite
            Ergebnisse. Weitere Informationen finden Sie hier:
          </p>
          <Costum_Button
            inside={true}
            link="#"
            text="Pfälzer wollen D-Mark zurück"
            height={50}
            width={500}
            text_className="font-medium text-xl"
          />
        </Actuelle_section>
        <Actuelle_section>
          <Link href="/aktuelles/archiv" >
          <div className="flex gap-2.5">
            <p className="font-medium text-2xl text-gray-500">Archiv </p>
            <Image
              src="/images/right_arrow.svg"
              width={8}
              height={11}
              alt="download"
            />
          </div>
          </Link>
          <p>
            (To view files in Adobe PDF format, you need the free{" "}
            <span className="text-gray-400"> Adobe® Reader® </span> software .)
          </p>
        </Actuelle_section>
      </div>
    </div>
  );
};
export default page;
