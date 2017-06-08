import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

import * as types from './util/dataTypes'
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class AppService {//REFACTOR: replace by server data get

  constructor(private http: Http) { }

  getInitialData(): Observable<any> {
    //return this.http.get('/api/InitialData')
    //.map(res=>res.json());
    return Observable.from([{
      type: "PortraitPlan",
      params: {
        db: './schuelerPlan.json',
        index1: 1,
        index2: 73,
        firstIndex: -42,
        /* slideshow: {
           interval: 4000,
           timeStart: -1, //
           timeEnd: -1, //TODO: implement timeStart/timeEnd
           params: {
             id: '1DOeyOhWo9hjwJDhcMJLW8Kb2kA9SEHAGcuSOLNV9sKU',
             iterations: 2,
             delay: 1000
           }
         }*/
      },
    }]);
  }

  getJsonData(file: String): Observable<any> {
    return Observable.from([
      [
        {
          "Titel": {
            "Inhalt": "Vertretungsplan fÃ¼r Donnerstag, den 08.06.2017",
            "Style": {
              "fontsize": 0,
              "fontcolor": "#000000",
              "backgroundcolor": "transparent"
            }
          },
          "UnterTitel2": {
            "Inhalt": "Immanuel-Kant-Schule, D-24534 NeumÃ¼nster",
            "Style": {
              "fontsize": 0,
              "fontcolor": "#000000",
              "backgroundcolor": "transparent"
            }
          },
          "Stand": {
            "Inhalt": "Stand: 7.6.2017, 20:09:34",
            "Style": {
              "fontsize": 0,
              "fontcolor": "#000000",
              "backgroundcolor": "transparent"
            }
          },
          "Abwesenheiten": [
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "Kuerzel": "Nm ab 7.",
              "Anmerkung": ""
            }
          ],
          "Vertretungen": [
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "#EF7E83"
              },
              "LehrerNeu": "Km",
              "VertretungNeu": "Pe",
              "StundeNeu": "1. + 2.",
              "KlasseNeu": "06b",
              "FachNeu": "M statt Ph",
              "RaumNeu": "C10",
              "AnmerkungNeu": "geÃ¤nd. Raum!"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ts",
              "VertretungNeu": "Ts",
              "StundeNeu": "3. + 4.",
              "KlasseNeu": "09c",
              "FachNeu": "D",
              "RaumNeu": "C15",
              "AnmerkungNeu": "geÃ¤nd. Raum!"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "#F6ED7E"
              },
              "LehrerNeu": "Wi",
              "VertretungNeu": "Kf",
              "StundeNeu": "3",
              "KlasseNeu": "Q1b",
              "FachNeu": "M statt Geo",
              "RaumNeu": "C13",
              "AnmerkungNeu": "geÃ¤nd. Raum! Klausur"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "#F6ED7E"
              },
              "LehrerNeu": "Wi",
              "VertretungNeu": "Wi",
              "StundeNeu": "4",
              "KlasseNeu": "Q1b",
              "FachNeu": "M statt Geo",
              "RaumNeu": "C13",
              "AnmerkungNeu": "geÃ¤nd. Raum! Klausur"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "#F6ED7E"
              },
              "LehrerNeu": "Kf",
              "VertretungNeu": "Kf",
              "StundeNeu": "5. + 6.",
              "KlasseNeu": "Q1b",
              "FachNeu": "M",
              "RaumNeu": "C13",
              "AnmerkungNeu": "Klausur"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "",
              "VertretungNeu": "Rad",
              "StundeNeu": "6",
              "KlasseNeu": "Ea",
              "FachNeu": "Rus",
              "RaumNeu": "C04",
              "AnmerkungNeu": "nur Ea"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ks",
              "VertretungNeu": "Ks",
              "StundeNeu": "3. + 4.",
              "KlasseNeu": "Ea Eb Ec",
              "FachNeu": "Phil",
              "RaumNeu": "C08",
              "AnmerkungNeu": "geÃ¤nd. Raum!"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "#F6ED7E"
              },
              "LehrerNeu": "Ts",
              "VertretungNeu": "Ts",
              "StundeNeu": "5",
              "KlasseNeu": "Ec",
              "FachNeu": "D",
              "RaumNeu": "C08",
              "AnmerkungNeu": "Klausur"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "#F6ED7E"
              },
              "LehrerNeu": "",
              "VertretungNeu": "Ts",
              "StundeNeu": "6",
              "KlasseNeu": "Ec",
              "FachNeu": "D statt Rus",
              "RaumNeu": "C08",
              "AnmerkungNeu": "Klausur"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ts",
              "VertretungNeu": "Ts",
              "StundeNeu": "FrÃ¼h",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "FrÃ¼h",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ka",
              "VertretungNeu": "Ka",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "C-Trakt",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Rei",
              "VertretungNeu": "Rei",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Sportplatz",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ste",
              "VertretungNeu": "Ste",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Mensa",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Sto",
              "VertretungNeu": "Sto",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Kant",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Wi",
              "VertretungNeu": "Wi",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "B-Trakt",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Bm",
              "VertretungNeu": "Bm",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Mensa",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Bru",
              "VertretungNeu": "Bru",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "B-Trakt",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Kle",
              "VertretungNeu": "Kle",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Sportplatz",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Nm",
              "VertretungNeu": "Nm",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "C-Trakt",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Rad",
              "VertretungNeu": "Rad",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Kant",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Rad",
              "VertretungNeu": "Rad",
              "StundeNeu": "MP 2.1",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "MiP",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Bt",
              "VertretungNeu": "Bt",
              "StundeNeu": "MP 2.2",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "MiP",
              "AnmerkungNeu": "Aufsicht"
            }
          ],
          "PlanZusatz": [
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "#F6ED7E"
              },
              "Inhalt": "8c: MÃ¼llsammeldienst SchulgelÃ¤nde (08.06. - 09.06.)"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "#2D8ACA"
              },
              "Inhalt": "BlÃ¤serklasse 6: Probenlager in Westensee (ab 13 Uhr)"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "#EF7E83"
              },
              "Inhalt": "Kunstprofil (Bt): Aufbau Austellung Gerisch-Park von 14.30 Uhr - 18.00 Uhr"
            }
          ]
        },
        {
          "Titel": {
            "Inhalt": "Vertretungsplan fÃ¼r Freitag, den 09.06.2017",
            "Style": {
              "fontsize": 0,
              "fontcolor": "#000000",
              "backgroundcolor": "transparent"
            }
          },
          "UnterTitel2": {
            "Inhalt": "Immanuel-Kant-Schule, D-24534 NeumÃ¼nster",
            "Style": {
              "fontsize": 0,
              "fontcolor": "#000000",
              "backgroundcolor": "transparent"
            }
          },
          "Stand": {
            "Inhalt": "Stand: 7.6.2017, 20:09:34",
            "Style": {
              "fontsize": 0,
              "fontcolor": "#000000",
              "backgroundcolor": "transparent"
            }
          },
          "Abwesenheiten": [
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "Kuerzel": "Ht ab 7.",
              "Anmerkung": ""
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "Kuerzel": "Nm",
              "Anmerkung": ""
            }
          ],
          "Vertretungen": [
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Nm",
              "VertretungNeu": "",
              "StundeNeu": "9. + 10.",
              "KlasseNeu": "08a 08b 08c 09a 09b 09c Ea Ec Q1a Q1b",
              "FachNeu": "Band",
              "RaumNeu": "",
              "AnmerkungNeu": "fÃ¤llt aus"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "#F6ED7E"
              },
              "LehrerNeu": "Nm",
              "VertretungNeu": "",
              "StundeNeu": "1. + 2.",
              "KlasseNeu": "09a 09b 09c",
              "FachNeu": "Mu",
              "RaumNeu": "",
              "AnmerkungNeu": "Stillarbeit Aufg. Nm"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ht",
              "VertretungNeu": "",
              "StundeNeu": "7. + 8.",
              "KlasseNeu": "Q1c",
              "FachNeu": "G",
              "RaumNeu": "",
              "AnmerkungNeu": "Stillarbeit Aufg. Ht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "#F6ED7E"
              },
              "LehrerNeu": "Kle",
              "VertretungNeu": "Kle",
              "StundeNeu": "5. + 6.",
              "KlasseNeu": "Ea",
              "FachNeu": "E",
              "RaumNeu": "C04",
              "AnmerkungNeu": "Klausur"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Nm",
              "VertretungNeu": "",
              "StundeNeu": "3. + 4.",
              "KlasseNeu": "Ea Eb",
              "FachNeu": "Mu",
              "RaumNeu": "",
              "AnmerkungNeu": "Stillarbeit Aufg. Nm"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ma",
              "VertretungNeu": "Ma",
              "StundeNeu": "FrÃ¼h",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "FrÃ¼h",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Bre",
              "VertretungNeu": "Bre",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "C-Trakt",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ho",
              "VertretungNeu": "Ho",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Sportplatz",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Le",
              "VertretungNeu": "Le",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Kant",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Pe",
              "VertretungNeu": "Pe",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Mensa",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ts",
              "VertretungNeu": "Ts",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "B-Trakt",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Bt",
              "VertretungNeu": "Bt",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "C-Trakt",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Gr",
              "VertretungNeu": "Gr",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Mensa",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ks",
              "VertretungNeu": "Ks",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Kant",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ni",
              "VertretungNeu": "Ni",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "B-Trakt",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ste",
              "VertretungNeu": "Ste",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Sportplatz",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Sh",
              "VertretungNeu": "Sh",
              "StundeNeu": "MP 2.1",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "MiP",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Nm",
              "VertretungNeu": "Pm",
              "StundeNeu": "MP 2.2",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "MiP",
              "AnmerkungNeu": "Aufsicht"
            }
          ],
          "PlanZusatz": [
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "#F6ED7E"
              },
              "Inhalt": "8c: MÃ¼llsammeldienst SchulgelÃ¤nde (08.06. - 09.06.)"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "#2D8ACA"
              },
              "Inhalt": "BlÃ¤serklasse 6: Probenlager in Westensee"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "#EF7E83"
              },
              "Inhalt": "Kunstprofil (Bt): ErÃ¶ffnung Austellung Gerisch-Park von 15 Uhr - 17 Uhr"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "#2D8ACA"
              },
              "Inhalt": "Q2: PlÃ¶nwochenende vom 09.06. - 11.06.17"
            }
          ]
        },
        {
          "Titel": {
            "Inhalt": "Vertretungsplan fÃ¼r Montag, den 12.06.2017",
            "Style": {
              "fontsize": 0,
              "fontcolor": "#000000",
              "backgroundcolor": "transparent"
            }
          },
          "UnterTitel2": {
            "Inhalt": "Immanuel-Kant-Schule, D-24534 NeumÃ¼nster",
            "Style": {
              "fontsize": 0,
              "fontcolor": "#000000",
              "backgroundcolor": "transparent"
            }
          },
          "Stand": {
            "Inhalt": "Stand: 7.6.2017, 20:09:34",
            "Style": {
              "fontsize": 0,
              "fontcolor": "#000000",
              "backgroundcolor": "transparent"
            }
          },
          "Abwesenheiten": [
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "Kuerzel": "Bru",
              "Anmerkung": ""
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "Kuerzel": "Hom (1. Stunde)",
              "Anmerkung": ""
            }
          ],
          "Vertretungen": [
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "#EF7E83"
              },
              "LehrerNeu": "Bru",
              "VertretungNeu": "Rei",
              "StundeNeu": "5",
              "KlasseNeu": "07a",
              "FachNeu": "Sp",
              "RaumNeu": "TurnhB",
              "AnmerkungNeu": ""
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "#F6ED7E"
              },
              "LehrerNeu": "Bru",
              "VertretungNeu": "Bs",
              "StundeNeu": "6",
              "KlasseNeu": "07a",
              "FachNeu": "E statt Sp",
              "RaumNeu": "B01",
              "AnmerkungNeu": "geÃ¤nd. Raum! Aufgaben von Bru"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Tg",
              "VertretungNeu": "Sa",
              "StundeNeu": "4",
              "KlasseNeu": "09a",
              "FachNeu": "E statt L2",
              "RaumNeu": "B05",
              "AnmerkungNeu": ""
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "#F6ED7E"
              },
              "LehrerNeu": "Bre",
              "VertretungNeu": "Bre",
              "StundeNeu": "3. + 4.",
              "KlasseNeu": "Q1a",
              "FachNeu": "Ku",
              "RaumNeu": "Ku 2 Zeichnen",
              "AnmerkungNeu": "Klausur"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "#F6ED7E"
              },
              "LehrerNeu": "Dw",
              "VertretungNeu": "Dw",
              "StundeNeu": "3. + 4.",
              "KlasseNeu": "Q1a",
              "FachNeu": "Ph",
              "RaumNeu": "PhÃœ1",
              "AnmerkungNeu": "Klausur"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ho",
              "VertretungNeu": "Ho",
              "StundeNeu": "1. + 2.",
              "KlasseNeu": "Q1a Q1b Q1c",
              "FachNeu": "Sp",
              "RaumNeu": "TurnhB",
              "AnmerkungNeu": "nur Klassen\u00a0Q1a\u00a0Q1c\u00a0"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Me",
              "VertretungNeu": "Me",
              "StundeNeu": "1. + 2.",
              "KlasseNeu": "Q1a Q1b Q1c",
              "FachNeu": "Sp",
              "RaumNeu": "",
              "AnmerkungNeu": "nur Klassen\u00a0Q1a\u00a0Q1c\u00a0"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "#EF7E83"
              },
              "LehrerNeu": "Bru",
              "VertretungNeu": "Rei",
              "StundeNeu": "1",
              "KlasseNeu": "Q1a Q1b Q1c",
              "FachNeu": "Sp",
              "RaumNeu": "TurnhA",
              "AnmerkungNeu": "MitfÃ¼hrung nur Klassen\u00a0Q1a\u00a0Q1c"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Rei",
              "VertretungNeu": "Rei",
              "StundeNeu": "1. + 2.",
              "KlasseNeu": "Q1a Q1b Q1c",
              "FachNeu": "Sp",
              "RaumNeu": "TurnhC",
              "AnmerkungNeu": "nur Klassen\u00a0Q1a\u00a0Q1c"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "#EF7E83"
              },
              "LehrerNeu": "Bru",
              "VertretungNeu": "Me",
              "StundeNeu": "2",
              "KlasseNeu": "Q1a Q1b Q1c",
              "FachNeu": "Sp",
              "RaumNeu": "TurnhA",
              "AnmerkungNeu": "MitfÃ¼hrung nur Klassen\u00a0Q1a\u00a0Q1c"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "#F6ED7E"
              },
              "LehrerNeu": "",
              "VertretungNeu": "Hom",
              "StundeNeu": "1",
              "KlasseNeu": "Q1b",
              "FachNeu": "E",
              "RaumNeu": "C13",
              "AnmerkungNeu": "Klausur"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "#F6ED7E"
              },
              "LehrerNeu": "",
              "VertretungNeu": "Hh",
              "StundeNeu": "2",
              "KlasseNeu": "Q1b",
              "FachNeu": "E",
              "RaumNeu": "C13",
              "AnmerkungNeu": "Klausur"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "#F6ED7E"
              },
              "LehrerNeu": "Hom",
              "VertretungNeu": "Hom",
              "StundeNeu": "3. + 4.",
              "KlasseNeu": "Q1b",
              "FachNeu": "E",
              "RaumNeu": "C13",
              "AnmerkungNeu": "Klausur"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Sa",
              "VertretungNeu": "Sa",
              "StundeNeu": "FrÃ¼h",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "FrÃ¼h",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Gr",
              "VertretungNeu": "Gr",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Kant",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ks",
              "VertretungNeu": "Ks",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "B-Trakt",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Le",
              "VertretungNeu": "Le",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Sportplatz",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Sa",
              "VertretungNeu": "Sa",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "C-Trakt",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Wi",
              "VertretungNeu": "Wi",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Mensa",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ho",
              "VertretungNeu": "Ho",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Sportplatz",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Hom",
              "VertretungNeu": "Hom",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "C-Trakt",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Kf",
              "VertretungNeu": "Kf",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "B-Trakt",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Rei",
              "VertretungNeu": "Rei",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Kant",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "#EF7E83"
              },
              "LehrerNeu": "Bru",
              "VertretungNeu": "Ste",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Mensa",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Gn",
              "VertretungNeu": "Gn",
              "StundeNeu": "MP 2.1",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "MiP",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Pe",
              "VertretungNeu": "Pe",
              "StundeNeu": "MP 2.2",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "MiP",
              "AnmerkungNeu": "Aufsicht"
            }
          ],
          "PlanZusatz": [
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "#F6ED7E"
              },
              "Inhalt": "9b: MÃ¼llsammeldienst SchulgelÃ¤nde (12.06. - 16.06.)"
            }
          ]
        },
        {
          "Titel": {
            "Inhalt": "Vertretungsplan fÃ¼r Dienstag, den 13.06.2017",
            "Style": {
              "fontsize": 0,
              "fontcolor": "#000000",
              "backgroundcolor": "transparent"
            }
          },
          "UnterTitel2": {
            "Inhalt": "Immanuel-Kant-Schule, D-24534 NeumÃ¼nster",
            "Style": {
              "fontsize": 0,
              "fontcolor": "#000000",
              "backgroundcolor": "transparent"
            }
          },
          "Stand": {
            "Inhalt": "Stand: 7.6.2017, 20:09:34",
            "Style": {
              "fontsize": 0,
              "fontcolor": "#000000",
              "backgroundcolor": "transparent"
            }
          },
          "Abwesenheiten": [
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "Kuerzel": "Ki bis 3.",
              "Anmerkung": ""
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "Kuerzel": "Bre (n2. Stunde)",
              "Anmerkung": ""
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "Kuerzel": "Bs (n4. Stunde)",
              "Anmerkung": ""
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "Kuerzel": "Kf (1. Stunde)",
              "Anmerkung": ""
            }
          ],
          "Vertretungen": [
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ki",
              "VertretungNeu": "Kf",
              "StundeNeu": "1",
              "KlasseNeu": "07a",
              "FachNeu": "M statt Ph",
              "RaumNeu": "B01",
              "AnmerkungNeu": "statt 9."
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ki",
              "VertretungNeu": "Kf",
              "StundeNeu": "2",
              "KlasseNeu": "07a",
              "FachNeu": "M statt Ph",
              "RaumNeu": "B01",
              "AnmerkungNeu": "statt 8."
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Kf",
              "VertretungNeu": "",
              "StundeNeu": "8",
              "KlasseNeu": "07a",
              "FachNeu": "M",
              "RaumNeu": "",
              "AnmerkungNeu": "fÃ¤llt aus, vorg. auf 2."
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Kf",
              "VertretungNeu": "",
              "StundeNeu": "9",
              "KlasseNeu": "07a",
              "FachNeu": "M",
              "RaumNeu": "",
              "AnmerkungNeu": "fÃ¤llt aus, vorg. auf 1."
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ki",
              "VertretungNeu": "Km",
              "StundeNeu": "3",
              "KlasseNeu": "07c",
              "FachNeu": "M",
              "RaumNeu": "B03",
              "AnmerkungNeu": "Aufg. Ki"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ht",
              "VertretungNeu": "Ht",
              "StundeNeu": "1. + 2.",
              "KlasseNeu": "Ec",
              "FachNeu": "E",
              "RaumNeu": "C08",
              "AnmerkungNeu": "Klausur"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ba",
              "VertretungNeu": "Ba",
              "StundeNeu": "FrÃ¼h",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "FrÃ¼h",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Bre",
              "VertretungNeu": "Bre",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Sportplatz",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Jd",
              "VertretungNeu": "Jd",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "B-Trakt",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Sh",
              "VertretungNeu": "Sh",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Kant",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Sto",
              "VertretungNeu": "Sto",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "C-Trakt",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Wi",
              "VertretungNeu": "Wi",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Mensa",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Bs",
              "VertretungNeu": "Bs",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "B-Trakt",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Hk",
              "VertretungNeu": "Hk",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Mensa",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ho",
              "VertretungNeu": "Ho",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Sportplatz",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Kr",
              "VertretungNeu": "Kr",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Kant",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ks",
              "VertretungNeu": "Ks",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "C-Trakt",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Pm",
              "VertretungNeu": "Pm",
              "StundeNeu": "MP 1.1",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "MiP",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Kf",
              "VertretungNeu": "Kf",
              "StundeNeu": "MP 2.1",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "MiP",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Bt",
              "VertretungNeu": "Bt",
              "StundeNeu": "MP 1.2",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "MiP",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Bm",
              "VertretungNeu": "Bm",
              "StundeNeu": "MP 2.2",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "MiP",
              "AnmerkungNeu": "Aufsicht"
            }
          ],
          "PlanZusatz": [
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "Inhalt": "9b: MÃ¼llsammeldienst SchulgelÃ¤nde (12.06. - 16.06.)"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "Inhalt": "Mathecoach Oberstufe in der 6. Stunde (Physikraum)"
            }
          ]
        },
        {
          "Titel": {
            "Inhalt": "Vertretungsplan fÃ¼r Mittwoch, den 14.06.2017",
            "Style": {
              "fontsize": 0,
              "fontcolor": "#000000",
              "backgroundcolor": "transparent"
            }
          },
          "UnterTitel2": {
            "Inhalt": "Immanuel-Kant-Schule, D-24534 NeumÃ¼nster",
            "Style": {
              "fontsize": 0,
              "fontcolor": "#000000",
              "backgroundcolor": "transparent"
            }
          },
          "Stand": {
            "Inhalt": "Stand: 7.6.2017, 20:09:34",
            "Style": {
              "fontsize": 0,
              "fontcolor": "#000000",
              "backgroundcolor": "transparent"
            }
          },
          "Abwesenheiten": [

          ],
          "Vertretungen": [
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Dw",
              "VertretungNeu": "Dw",
              "StundeNeu": "5",
              "KlasseNeu": "Ea",
              "FachNeu": "M",
              "RaumNeu": "C04",
              "AnmerkungNeu": "Klausur"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "",
              "VertretungNeu": "Dw",
              "StundeNeu": "6",
              "KlasseNeu": "Ea",
              "FachNeu": "M",
              "RaumNeu": "C04",
              "AnmerkungNeu": "Klausur"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Pp",
              "VertretungNeu": "",
              "StundeNeu": "7",
              "KlasseNeu": "Ea",
              "FachNeu": "WP",
              "RaumNeu": "",
              "AnmerkungNeu": "fÃ¤llt aus Mittagspause"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Hh",
              "VertretungNeu": "Hh",
              "StundeNeu": "7. + 8.",
              "KlasseNeu": "Eb",
              "FachNeu": "D",
              "RaumNeu": "C07",
              "AnmerkungNeu": "Klausur"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ma",
              "VertretungNeu": "Ma",
              "StundeNeu": "FrÃ¼h",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "FrÃ¼h",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ba",
              "VertretungNeu": "Ba",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Kant",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Bre",
              "VertretungNeu": "Bre",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "C-Trakt",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Kf",
              "VertretungNeu": "Kf",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "B-Trakt",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Le",
              "VertretungNeu": "Le",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Sportplatz",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ts",
              "VertretungNeu": "Ts",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Mensa",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ba",
              "VertretungNeu": "Ba",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Mensa",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Cs",
              "VertretungNeu": "Cs",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Sportplatz",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Hh",
              "VertretungNeu": "Hh",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "C-Trakt",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ni",
              "VertretungNeu": "Ni",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "B-Trakt",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Nm",
              "VertretungNeu": "Nm",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Kant",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Hk",
              "VertretungNeu": "Hk",
              "StundeNeu": "MP 2.1",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "MiP",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ste",
              "VertretungNeu": "Ste",
              "StundeNeu": "MP 2.2",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "MiP",
              "AnmerkungNeu": "Aufsicht"
            }
          ],
          "PlanZusatz": [
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "Inhalt": "9b: MÃ¼llsammeldienst SchulgelÃ¤nde (12.06. - 16.06.)"
            }
          ]
        },
        {
          "Titel": {
            "Inhalt": "Vertretungsplan fÃ¼r Donnerstag, den 15.06.2017",
            "Style": {
              "fontsize": 0,
              "fontcolor": "#000000",
              "backgroundcolor": "transparent"
            }
          },
          "UnterTitel2": {
            "Inhalt": "Immanuel-Kant-Schule, D-24534 NeumÃ¼nster",
            "Style": {
              "fontsize": 0,
              "fontcolor": "#000000",
              "backgroundcolor": "transparent"
            }
          },
          "Stand": {
            "Inhalt": "Stand: 29.8.2016, 12:37:14",
            "Style": {
              "fontsize": 0,
              "fontcolor": "#000000",
              "backgroundcolor": "transparent"
            }
          },
          "Abwesenheiten": [
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "Kuerzel": "Nm ab 3.",
              "Anmerkung": ""
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "Kuerzel": "Q1a 3. bis 6.",
              "Anmerkung": ""
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "Kuerzel": "B08 3. bis 4.",
              "Anmerkung": ""
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "Kuerzel": "Wi (n2. Stunde)",
              "Anmerkung": ""
            }
          ],
          "Vertretungen": [
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Nm",
              "VertretungNeu": "Ft",
              "StundeNeu": "5",
              "KlasseNeu": "08c",
              "FachNeu": "D statt Mu",
              "RaumNeu": "B09",
              "AnmerkungNeu": "geÃ¤nd. Raum!"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Nm",
              "VertretungNeu": "",
              "StundeNeu": "6",
              "KlasseNeu": "08c",
              "FachNeu": "Mu",
              "RaumNeu": "",
              "AnmerkungNeu": "fÃ¤llt aus"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Dw",
              "VertretungNeu": "",
              "StundeNeu": "3. + 4.",
              "KlasseNeu": "Q1a",
              "FachNeu": "M",
              "RaumNeu": "",
              "AnmerkungNeu": "fÃ¤llt aus"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ft",
              "VertretungNeu": "",
              "StundeNeu": "5",
              "KlasseNeu": "Q1a",
              "FachNeu": "D",
              "RaumNeu": "",
              "AnmerkungNeu": "fÃ¤llt aus"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Jd",
              "VertretungNeu": "Jd",
              "StundeNeu": "1",
              "KlasseNeu": "Ea Eb Ec",
              "FachNeu": "F",
              "RaumNeu": "C06",
              "AnmerkungNeu": "Klausur"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Rad",
              "VertretungNeu": "Rad",
              "StundeNeu": "1",
              "KlasseNeu": "Ea Eb Ec",
              "FachNeu": "L",
              "RaumNeu": "C04",
              "AnmerkungNeu": "Klausur"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Rm",
              "VertretungNeu": "Rm",
              "StundeNeu": "1",
              "KlasseNeu": "Ea Eb Ec",
              "FachNeu": "L2",
              "RaumNeu": "C07",
              "AnmerkungNeu": "Klausur"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Jd",
              "VertretungNeu": "Jd",
              "StundeNeu": "2",
              "KlasseNeu": "Ea Eb Ec",
              "FachNeu": "F",
              "RaumNeu": "C06",
              "AnmerkungNeu": "Klausur"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Rad",
              "VertretungNeu": "Rad",
              "StundeNeu": "2",
              "KlasseNeu": "Ea Eb Ec",
              "FachNeu": "L",
              "RaumNeu": "C04",
              "AnmerkungNeu": "Klausur"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Rm",
              "VertretungNeu": "Rm",
              "StundeNeu": "2",
              "KlasseNeu": "Ea Eb Ec",
              "FachNeu": "L2",
              "RaumNeu": "C07",
              "AnmerkungNeu": "Klausur"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ks",
              "VertretungNeu": "Ks",
              "StundeNeu": "3. + 4.",
              "KlasseNeu": "Ea Eb Ec",
              "FachNeu": "Phil",
              "RaumNeu": "Comp2",
              "AnmerkungNeu": "geÃ¤nd. Raum!"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ts",
              "VertretungNeu": "Ts",
              "StundeNeu": "FrÃ¼h",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "FrÃ¼h",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ka",
              "VertretungNeu": "Ka",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "C-Trakt",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Rei",
              "VertretungNeu": "Rei",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Sportplatz",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Ste",
              "VertretungNeu": "Ste",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Mensa",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Sto",
              "VertretungNeu": "Sto",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Kant",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Wi",
              "VertretungNeu": "Wi",
              "StundeNeu": "1.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "B-Trakt",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Bm",
              "VertretungNeu": "Bm",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Mensa",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Bru",
              "VertretungNeu": "Bru",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "B-Trakt",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Nm",
              "VertretungNeu": "Dw",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "C-Trakt",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Kle",
              "VertretungNeu": "Kle",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Sportplatz",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Rad",
              "VertretungNeu": "Rad",
              "StundeNeu": "2.P.",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "Kant",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Rad",
              "VertretungNeu": "Rad",
              "StundeNeu": "MP 2.1",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "MiP",
              "AnmerkungNeu": "Aufsicht"
            },
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "LehrerNeu": "Bt",
              "VertretungNeu": "Bt",
              "StundeNeu": "MP 2.2",
              "KlasseNeu": "",
              "FachNeu": "",
              "RaumNeu": "MiP",
              "AnmerkungNeu": "Aufsicht"
            }
          ],
          "PlanZusatz": [
            {
              "Style": {
                "fontsize": 0,
                "fontcolor": "#000000",
                "backgroundcolor": "transparent"
              },
              "Inhalt": "9b: MÃ¼llsammeldienst SchulgelÃ¤nde (12.06. - 16.06.)"
            }
          ]
        }
      ]
    ]);
  }


  getConfigData(): Observable<any> {
    //return this.http.get('/api/InitialData')
    //.map(res=>res.json());
    return Observable.from([{
      defaultTimeout: 5000,
    }]);
  }
  data: any

  setRoutingData(data: any) {
    this.data = data
  }

  getRoutingData() {
    return this.data;
  }

  getKeyCodeData() {
    return Observable.from([{
      32: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'And', timeout: 5000 } },
      33: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'BS', timeout: 5000 } },
      34: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Ba', timeout: 5000 } },
      35: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Bm', timeout: 5000 } },
      36: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Bi', timeout: 5000 } },
      37: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Bt', timeout: 5000 } },
      38: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Bre', timeout: 5000 } },
      39: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Bru', timeout: 5000 } },
      40: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Dkl', timeout: 5000 } },
      41: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Dw', timeout: 5000 } },
      42: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Ft', timeout: 5000 } },
      43: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Gh', timeout: 5000 } },
      44: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Go', timeout: 5000 } },
      45: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Gr', timeout: 5000 } },
      46: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Gn', timeout: 5000 } },
      47: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Hk', timeout: 5000 } },
      48: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Ht', timeout: 5000 } },
      49: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Ho', timeout: 5000 } },
      50: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Hom', timeout: 5000 } },
      51: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Hh', timeout: 5000 } },
      52: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Jö', timeout: 5000 } },
      53: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Jd', timeout: 5000 } },
      54: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Ka', timeout: 5000 } },
      55: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Ki', timeout: 5000 } },
      56: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Kle', timeout: 5000 } },
      57: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Kf', timeout: 5000 } },
      58: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Km', timeout: 5000 } },
      59: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Ks', timeout: 5000 } },
      60: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Le', timeout: 5000 } },
      61: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Lz', timeout: 5000 } },
      62: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Ma', timeout: 5000 } },
      63: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Mz', timeout: 5000 } },
      64: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Me', timeout: 5000 } },
      65: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Mll', timeout: 5000 } },
      66: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Nm', timeout: 5000 } },
      67: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Ni', timeout: 5000 } },
      68: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Pe', timeout: 5000 } },
      69: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Pm', timeout: 5000 } },
      70: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Pp', timeout: 5000 } },
      71: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Rad', timeout: 5000 } },
      72: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Rm', timeout: 5000 } },
      73: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Rei', timeout: 5000 } },
      74: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Sa', timeout: 5000 } },
      75: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Sh', timeout: 5000 } },
      76: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Sz', timeout: 5000 } },
      77: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Ste', timeout: 5000 } },
      78: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Steffen', timeout: 5000 } },
      79: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Stö', timeout: 5000 } },
      80: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Tg', timeout: 5000 } },
      81: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Ts', timeout: 5000 } },
      82: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Wb', timeout: 5000 } },
      83: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Wi', timeout: 5000 } },
      95: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: '05a', timeout: 5000 } },
      96: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: '05b', timeout: 5000 } },
      97: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: '05c', timeout: 5000 } },
      98: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: '05d', timeout: 5000 } },
      99: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: '06a', timeout: 5000 } },
      100: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: '06b', timeout: 5000 } },
      101: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: '06c', timeout: 5000 } },
      102: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: '06d', timeout: 5000 } },
      103: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: '07a', timeout: 5000 } },
      104: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: '07b', timeout: 5000 } },
      105: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: '07c', timeout: 5000 } },
      106: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: '07d', timeout: 5000 } },
      107: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: '08a', timeout: 5000 } },
      108: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: '08b', timeout: 5000 } },
      109: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: '08c', timeout: 5000 } },
      110: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: '08d', timeout: 5000 } },
      111: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: '09a', timeout: 5000 } },
      112: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: '09b', timeout: 5000 } },
      113: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: '09c', timeout: 5000 } },
      114: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: '09d', timeout: 5000 } },
      115: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Ea', timeout: 5000 } },
      116: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Eb', timeout: 5000 } },
      117: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Ec', timeout: 5000 } },
      118: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Ed', timeout: 5000 } },
      119: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Q1a', timeout: 5000 } },
      120: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Q1b', timeout: 5000 } },
      121: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Q1c', timeout: 5000 } },
      122: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Q1d', timeout: 5000 } },
      123: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Q2a', timeout: 5000 } },
      124: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Q2b', timeout: 5000 } },
      125: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Q2c', timeout: 5000 } },
      126: { type: "FilteredPlan", params: { db: './assets/json/lehrerPlan.json', index1: 0, filter: 'Q2d', timeout: 5000 } },
      144: { type: "Png", params: { file: "./assets/images/And.png", timeout: 5000 } },
      145: { type: "Png", params: { file: "./assets/images/BS.png", timeout: 5000 } },
      146: { type: "Png", params: { file: "./assets/images/Ba.png", timeout: 5000 } },
      147: { type: "Png", params: { file: "./assets/images/Bm.png", timeout: 5000 } },
      148: { type: "Png", params: { file: "./assets/images/Bi.png", timeout: 5000 } },
      149: { type: "Png", params: { file: "./assets/images/Bt.png", timeout: 5000 } },
      150: { type: "Png", params: { file: "./assets/images/Bre.png", timeout: 5000 } },
      151: { type: "Png", params: { file: "./assets/images/Bru.png", timeout: 5000 } },
      152: { type: "Png", params: { file: "./assets/images/Dkl.png", timeout: 5000 } },
      153: { type: "Png", params: { file: "./assets/images/Dw.png", timeout: 5000 } },
      154: { type: "Png", params: { file: "./assets/images/Ft.png", timeout: 5000 } },
      155: { type: "Png", params: { file: "./assets/images/Gh.png", timeout: 5000 } },
      156: { type: "Png", params: { file: "./assets/images/Go.png", timeout: 5000 } },
      157: { type: "Png", params: { file: "./assets/images/Gr.png", timeout: 5000 } },
      158: { type: "Png", params: { file: "./assets/images/Gn.png", timeout: 5000 } },
      159: { type: "Png", params: { file: "./assets/images/Hk.png", timeout: 5000 } },
      160: { type: "Png", params: { file: "./assets/images/Ht.png", timeout: 5000 } },
      161: { type: "Png", params: { file: "./assets/images/Ho.png", timeout: 5000 } },
      162: { type: "Png", params: { file: "./assets/images/Hom.png", timeout: 5000 } },
      163: { type: "Png", params: { file: "./assets/images/Hh.png", timeout: 5000 } },
      164: { type: "Png", params: { file: "./assets/images/Jö.png", timeout: 5000 } },
      165: { type: "Png", params: { file: "./assets/images/Jd.png", timeout: 5000 } },
      166: { type: "Png", params: { file: "./assets/images/Ka.png", timeout: 5000 } },
      167: { type: "Png", params: { file: "./assets/images/Ki.png", timeout: 5000 } },
      168: { type: "Png", params: { file: "./assets/images/Kle.png", timeout: 5000 } },
      169: { type: "Png", params: { file: "./assets/images/Kf.png", timeout: 5000 } },
      170: { type: "Png", params: { file: "./assets/images/Km.png", timeout: 5000 } },
      171: { type: "Png", params: { file: "./assets/images/Ks.png", timeout: 5000 } },
      172: { type: "Png", params: { file: "./assets/images/Le.png", timeout: 5000 } },
      173: { type: "Png", params: { file: "./assets/images/Lz.png", timeout: 5000 } },
      174: { type: "Png", params: { file: "./assets/images/Ma.png", timeout: 5000 } },
      175: { type: "Png", params: { file: "./assets/images/Mz.png", timeout: 5000 } },
      176: { type: "Png", params: { file: "./assets/images/Me.png", timeout: 5000 } },
      177: { type: "Png", params: { file: "./assets/images/Mll.png", timeout: 5000 } },
      178: { type: "Png", params: { file: "./assets/images/Nm.png", timeout: 5000 } },
      179: { type: "Png", params: { file: "./assets/images/Ni.png", timeout: 5000 } },
      180: { type: "Png", params: { file: "./assets/images/Pe.png", timeout: 5000 } },
      181: { type: "Png", params: { file: "./assets/images/Pm.png", timeout: 5000 } },
      182: { type: "Png", params: { file: "./assets/images/Pp.png", timeout: 5000 } },
      183: { type: "Png", params: { file: "./assets/images/Rad.png", timeout: 5000 } },
      184: { type: "Png", params: { file: "./assets/images/Rm.png", timeout: 5000 } },
      185: { type: "Png", params: { file: "./assets/images/Rei.png", timeout: 5000 } },
      186: { type: "Png", params: { file: "./assets/images/Sa.png", timeout: 5000 } },
      187: { type: "Png", params: { file: "./assets/images/Sh.png", timeout: 5000 } },
      188: { type: "Png", params: { file: "./assets/images/Sz.png", timeout: 5000 } },
      189: { type: "Png", params: { file: "./assets/images/Ste.png", timeout: 5000 } },
      190: { type: "Png", params: { file: "./assets/images/Steffen.png", timeout: 5000 } },
      191: { type: "Png", params: { file: "./assets/images/Stö.png", timeout: 5000 } },
      192: { type: "Png", params: { file: "./assets/images/Tg.png", timeout: 5000 } },
      193: { type: "Png", params: { file: "./assets/images/Ts.png", timeout: 5000 } },
      194: { type: "Png", params: { file: "./assets/images/Wb.png", timeout: 5000 } },
      195: { type: "Png", params: { file: "./assets/images/Wi.png", timeout: 5000 } },
      207: { type: "Png", params: { file: "./assets/images/05a.png", timeout: 5000 } },
      208: { type: "Png", params: { file: "./assets/images/05b.png", timeout: 5000 } },
      209: { type: "Png", params: { file: "./assets/images/05c.png", timeout: 5000 } },
      210: { type: "Png", params: { file: "./assets/images/05d.png", timeout: 5000 } },
      211: { type: "Png", params: { file: "./assets/images/06a.png", timeout: 5000 } },
      212: { type: "Png", params: { file: "./assets/images/06b.png", timeout: 5000 } },
      213: { type: "Png", params: { file: "./assets/images/06c.png", timeout: 5000 } },
      214: { type: "Png", params: { file: "./assets/images/06d.png", timeout: 5000 } },
      215: { type: "Png", params: { file: "./assets/images/07a.png", timeout: 5000 } },
      216: { type: "Png", params: { file: "./assets/images/07b.png", timeout: 5000 } },
      217: { type: "Png", params: { file: "./assets/images/07c.png", timeout: 5000 } },
      218: { type: "Png", params: { file: "./assets/images/07d.png", timeout: 5000 } },
      219: { type: "Png", params: { file: "./assets/images/08a.png", timeout: 5000 } },
      220: { type: "Png", params: { file: "./assets/images/08b.png", timeout: 5000 } },
      221: { type: "Png", params: { file: "./assets/images/08c.png", timeout: 5000 } },
      222: { type: "Png", params: { file: "./assets/images/08d.png", timeout: 5000 } },
      223: { type: "Png", params: { file: "./assets/images/09a.png", timeout: 5000 } },
      224: { type: "Png", params: { file: "./assets/images/09b.png", timeout: 5000 } },
      225: { type: "Png", params: { file: "./assets/images/09c.png", timeout: 5000 } },
      226: { type: "Png", params: { file: "./assets/images/09d.png", timeout: 5000 } },
      227: { type: "Png", params: { file: "./assets/images/Ea.png", timeout: 5000 } },
      228: { type: "Png", params: { file: "./assets/images/Eb.png", timeout: 5000 } },
      229: { type: "Png", params: { file: "./assets/images/Ec.png", timeout: 5000 } },
      230: { type: "Png", params: { file: "./assets/images/Ed.png", timeout: 5000 } },
      231: { type: "Png", params: { file: "./assets/images/Q1a.png", timeout: 5000 } },
      232: { type: "Png", params: { file: "./assets/images/Q1b.png", timeout: 5000 } },
      233: { type: "Png", params: { file: "./assets/images/Q1c.png", timeout: 5000 } },
      234: { type: "Png", params: { file: "./assets/images/Q1d.png", timeout: 5000 } },
      235: { type: "Png", params: { file: "./assets/images/Q2a.png", timeout: 5000 } },
      236: { type: "Png", params: { file: "./assets/images/Q2b.png", timeout: 5000 } },
      237: { type: "Png", params: { file: "./assets/images/Q2c.png", timeout: 5000 } },
      238: { type: "Png", params: { file: "./assets/images/Q2d.png", timeout: 5000 } }
    }]);
  }
}