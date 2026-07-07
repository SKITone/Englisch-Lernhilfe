// content.js — Inhaltsdaten fuer die Englisch-Lern-App (muendliche Pruefung).
// Quelle: Medienenglisch_OCR.md (OCR-Fehler korrigiert). Von index.html als globales Skript geladen.
window.CHAPTERS = [
  {
    "id": 1,
    "topic": "The Internet of (All) Things",
    "hook": "A Water Bottle that Can Diagnose the Flu",
    "summary": [
      {
        "h": "What is it?",
        "de": "Das Internet der Dinge (IoT) ist ein Netz aus internetverbundenen Objekten, die Daten sammeln, verarbeiten und austauschen. Schon heute gibt es rund 8- bis 10-mal so viele vernetzte Geräte wie Menschen; bis 2030 könnten es etwa 500 Milliarden sein (ca. 60 pro Person). Das Buch beschreibt drei Stufen: IoCT (Internet of Computer Things) – Computer, Handys und Tablets teilen Daten; IoET (Internet of Electronic Things) – Haushaltselektronik wie Drucker, Thermostate und Überwachungskameras; und IoAT (Internet of All Things) – die neue Stufe, die zuvor nicht-elektronische Dinge wie Wasserflaschen, Kleidung und Möbel vernetzt.",
        "en": "The Internet of Things (IoT) is a network of Internet-connected objects that collect, process, and exchange data. Devices connected to the Internet already outnumber the world's population by roughly 8 to 10 times, and by 2030 there could be about 500 billion connected devices, or around 60 per person. The book describes IoT arriving in three stages: IoCT (Internet of Computer Things), which began with computers, phones, and tablets sharing data; IoET (Internet of Electronic Things), which connects household electronics such as printers, thermostats, and security cameras; and IoAT (Internet of All Things), the emerging stage that connects previously non-electronic items like water bottles, clothing, and furniture."
      },
      {
        "h": "How does it work?",
        "de": "Ein IoT-System besteht aus vier Schichten, im Buch am Navi-Dienst Waze erklärt. Schicht 1 (Sensor) erfasst Rohdaten wie GPS-Standort und Geschwindigkeit; Schicht 2 (Kommunikation) überträgt sie – zu Hause per WLAN, Bluetooth, RFID oder NFC, unterwegs per Mobilfunk wie 5G; Schicht 3 (Datenverwaltung) bündelt und ordnet die Daten vieler Nutzer; Schicht 4 (Anwendung) macht mit Algorithmen etwas Nützliches daraus, z. B. Waze' Routen- und Stauempfehlungen. Es gibt hunderte Sensortypen (GPS, Beschleunigung, Temperatur, Feuchte, Gas, Biometrie), meist für 1–50 $. Weil viele Systeme als „lean tech“ mit minimaler Hard- und Software gebaut werden, wird die Sicherheit oft zuerst weggelassen – mit realen Folgen. Edge Computing verarbeitet Daten nah am Entstehungsort statt in der Cloud, ist aber nicht immer praktikabel (etwa bei Waze).",
        "en": "An IoT system is built from four layers, illustrated in the book using the navigation app Waze. Layer 1 (Sensor) captures raw data such as GPS-based location and speed; Layer 2 (Communication) transmits that data, typically over WiFi, Bluetooth, RFID, or NFC at home, or over cellular networks like 5G on the road; Layer 3 (Data Management) aggregates and organizes the incoming data from many users; and Layer 4 (Application) applies algorithms to turn the data into useful output, such as Waze's route and traffic recommendations. Hundreds of different sensor types exist, from GPS and accelerometers to temperature, moisture, gas, and biometric sensors, usually costing between $1 and $50. Because many IoT systems are built as 'lean tech' with only the minimum hardware and software needed, security is often the first feature left out, which has led to real breaches. Edge computing offers an alternative by processing data close to where it is captured instead of sending everything to the cloud, though this is not always practical, as with Waze."
      },
      {
        "h": "Example from the book",
        "de": "Der Aufhänger des Kapitels ist eine Gatorade-„Smart Gx“-Wasserflasche, deren Sensoren den Flüssigkeitshaushalt und die Trinkmenge verfolgen – mit einem zusätzlichen Bakteriensensor könnte sie sogar erkennen, dass man eine Grippe ausbrütet. Das steht für Stufe 3 (IoAT): ein alltägliches, nicht-elektronisches Objekt wird zum vernetzten Sensor. Ebenfalls genannt: Irrigreens „sehende“ Sprinkler, die ihre Reichweite automatisch an Steingärten und Rasenkanten anpassen, sowie der reale Target-Hack von 2013, bei dem Angreifer über das IoT-vernetzte Klima-Überwachungssystem eines Dienstleisters in Targets Kundendaten eindrangen.",
        "en": "The chapter's opening hook imagines a Gatorade Smart Gx water bottle whose IoT sensors track a user's hydration level and beverage intake, and that could, with an added bacteria sensor, detect that the user is coming down with the flu. This illustrates stage #3, IoAT, since an everyday non-electronic object like a water bottle gains sensing and connectivity. The book also describes Irrigreen's 'seeing' sprinkler heads, which automatically adjust their spray distance around rock gardens and lawn corners, and it recounts the real 2013 Target breach, in which hackers used a vendor's IoT-connected HVAC monitoring system as a gateway into Target's customer records."
      },
      {
        "h": "Opportunities & Risks",
        "de": "Das Buch sagt voraus, dass durch immer kleinere und billigere Technik praktisch alles ans Internet kommt – von Zahnbürsten bis Türstoppern. Es betont, dass Sicherheit ernst genommen werden muss (gehackte autonome Autos, der Target-Hack als Warnung), und erwartet, dass Biometrie („etwas, das man ist“) zunehmend Schlüssel und Passwörter („etwas, das man hat oder weiß“) ersetzt. Warnung: „Ein Schwein wird nicht dicker, nur weil man es wiegt“ – gesammelte Daten sind wertlos, solange man daraus keine Entscheidungen oder Handlungen ableitet. Empfehlung fürs Innovieren: der „Add Just a Pinch of…“-Ansatz – ein vorhandenes Produkt nehmen, IoT-Sensoren ergänzen und einen groben Prototyp bzw. ein MVP bauen, um die Idee zu beweisen, bevor man sie verfeinert.",
        "en": "The book predicts that, driven by shrinking and cheaper technology, almost everything, from toothbrushes to doorstops, will eventually connect to the Internet. It stresses that security must be taken seriously, citing hacked autonomous vehicles and the Target HVAC breach as warnings, and predicts that biometrics (something you are) will increasingly replace keys and passwords (something you have or know) for physical security. It also cautions that 'you don't make a pig fatter just by weighing it': collecting sensed data is worthless unless it is actually used to make decisions or take action. Finally, it recommends an 'Add Just a Pinch of...' approach to innovation: take an existing product, add IoT sensors to it, and build a rough proof-of-concept prototype or minimum viable product to prove the idea works before refining it."
      }
    ],
    "details": [
      "Zahlen: vernetzte Geräte übersteigen die Weltbevölkerung um Faktor ~8–10; bis 2030 ca. 500 Mrd. Geräte (~60 pro Person).",
      "3 Stufen: IoCT (Computer, Handys, Tablets) → IoET (Drucker, Thermostate, Kameras) → IoAT (Wasserflaschen, Kleidung, Möbel).",
      "4-Schichten-Modell (am Beispiel Waze): 1 Sensor · 2 Kommunikation · 3 Datenverwaltung · 4 Anwendung.",
      "Sensoren: hunderte Typen (GPS, Beschleunigung, Temperatur, Feuchte, Gas, Biometrie), meist 1–50 $.",
      "Funk: nah per WLAN, Bluetooth, RFID, NFC; unterwegs per Mobilfunk/5G.",
      "Beispiel-Produkte: Gatorade „Smart Gx“-Flasche (Trinkmenge + Grippe-Erkennung via Bakteriensensor); Irrigreens „sehende“ Sprinkler.",
      "Sicherheits-Fallbeispiel: Target-Hack 2013 – Einstieg über das IoT-Klimaüberwachungssystem (HVAC) eines Dienstleisters → Kundendaten.",
      "Schlüsselbegriffe: „lean tech“ (Sicherheit fällt zuerst weg), Edge Computing (Verarbeitung nah am Sensor), Biometrie ersetzt Schlüssel/Passwörter.",
      "Merksätze: „You don't make a pig fatter just by weighing it“ (Daten nur wertvoll, wenn genutzt); „Add Just a Pinch of…“ (Produkt + IoT-Sensoren + Prototyp/MVP).",
      "Datenbegriffe: sensed data vs. transaction data (Beispiele Amazon Go, Netflix)."
    ],
    "vocab": [
      {
        "en": "sensor",
        "de": "Sensor",
        "note": "device that detects and measures physical properties, e.g. GPS, temperature, moisture"
      },
      {
        "en": "Internet of Things (IoT)",
        "de": "Internet der Dinge",
        "note": "network of Internet-connected objects that collect, process, and exchange data"
      },
      {
        "en": "Internet of Computer Things (IoCT)",
        "de": "Internet der Computer-Dinge",
        "note": "stage 1: computers, phones, tablets sharing data"
      },
      {
        "en": "Internet of Electronic Things (IoET)",
        "de": "Internet der elektronischen Dinge",
        "note": "stage 2: household electronics like printers, thermostats, cameras"
      },
      {
        "en": "Internet of All Things (IoAT)",
        "de": "Internet aller Dinge",
        "note": "stage 3: non-electronic objects like water bottles, clothing, furniture"
      },
      {
        "en": "smart home",
        "de": "intelligentes Zuhause",
        "note": "also called home automation or domotics"
      },
      {
        "en": "smart city",
        "de": "intelligente Stadt",
        "note": "uses IoT data to improve utilities, transportation, safety"
      },
      {
        "en": "smart grid",
        "de": "intelligentes Stromnetz",
        "note": "IoT applied to the delivery and reliability of electricity"
      },
      {
        "en": "interoperability",
        "de": "Interoperabilität",
        "note": "ability of different brands' devices to work together, e.g. via the Matter standard"
      },
      {
        "en": "Industrial Internet of Things (IIoT)",
        "de": "industrielles Internet der Dinge",
        "note": "IoT used in commercial/industrial settings, e.g. monitoring manufacturing equipment"
      },
      {
        "en": "edge computing",
        "de": "dezentrale Datenverarbeitung",
        "note": "processes data close to where it is captured instead of in the cloud"
      },
      {
        "en": "lean tech",
        "de": "schlanke Technik",
        "note": "system with only the minimum necessary hardware/software; security often omitted"
      },
      {
        "en": "sensed data",
        "de": "erfasste Daten",
        "note": "raw data captured at its point of origin, e.g. Amazon Go, Netflix viewing behavior"
      },
      {
        "en": "transaction data",
        "de": "Transaktionsdaten",
        "note": "data from completed purchases, e.g. scanned checkout items"
      },
      {
        "en": "biometrics",
        "de": "Biometrie",
        "note": "identification via unique physical traits like a fingerprint"
      },
      {
        "en": "hydration",
        "de": "Flüssigkeitszufuhr",
        "note": "tracked by the Gatorade Smart Gx bottle example"
      },
      {
        "en": "proof-of-concept prototype",
        "de": "Konzeptnachweis-Prototyp",
        "note": "rough working version built to prove an idea works"
      },
      {
        "en": "minimum viable product (MVP)",
        "de": "minimal funktionsfähiges Produkt"
      },
      {
        "en": "gateway",
        "de": "Zugangspunkt",
        "note": "e.g. the HVAC system hackers used to reach Target's network"
      },
      {
        "en": "facial recognition",
        "de": "Gesichtserkennung",
        "note": "used e.g. for classroom attendance or Amazon Go checkout"
      }
    ],
    "mc": [
      {
        "q": "According to the chapter, which is greater worldwide?",
        "options": [
          "The number of people on the planet",
          "The number of devices connected to the Internet",
          "They are roughly equal"
        ],
        "correct": 1,
        "why": "The chapter states that Internet-connected devices already outnumber the world's population by a factor of about 8 to 10."
      },
      {
        "q": "Which stage of IoT evolution is represented by everyday non-electronic objects such as water bottles, clothing, and furniture becoming Internet-connected?",
        "options": [
          "IoCT (Internet of Computer Things)",
          "IoET (Internet of Electronic Things)",
          "IoAT (Internet of All Things)"
        ],
        "correct": 2,
        "why": "IoAT is the third stage, extending Internet connectivity to previously non-electronic things."
      },
      {
        "q": "In the four-layer IoT model illustrated with Waze, what does Layer #1 (Sensor) do?",
        "options": [
          "It aggregates data from millions of users by location",
          "It uses GPS to determine speed, direction, and location",
          "It applies algorithms to calculate the shortest route",
          "It sends the collected data to the cloud via a cellular network"
        ],
        "correct": 1,
        "why": "Layer 1 is the sensor layer, capturing raw data such as GPS-based speed and location; the other options describe layers 3, 4, and 2 respectively."
      },
      {
        "q": "What does the term 'lean tech' describe in the context of IoT security problems?",
        "options": [
          "A system built with only the minimum hardware and software needed for its task, often omitting security",
          "A low-power, energy-efficient sensor design",
          "An encrypted communication protocol used in smart homes",
          "A minimalist app design philosophy"
        ],
        "correct": 0,
        "why": "The chapter explains that lean tech systems include only what is strictly necessary to function, and security software is frequently the first thing left out."
      },
      {
        "q": "Which company suffered a data breach in 2013 because hackers gained access through a vendor's IoT-connected HVAC monitoring system?",
        "options": [
          "Amazon",
          "Target",
          "Netflix",
          "Google"
        ],
        "correct": 1,
        "why": "Hackers penetrated an HVAC contractor that wirelessly monitored Target's environmental control systems and used that gateway to access millions of customer records."
      },
      {
        "q": "What is edge computing, as described in the chapter?",
        "options": [
          "A computing model that moves data storage and processing closer to the point where data is captured",
          "A method of encrypting sensor data before it is sent to the cloud",
          "A type of biometric authentication",
          "A pricing model for IoT sensors"
        ],
        "correct": 0,
        "why": "Edge computing shortens the physical and time distance between the sensor layer and the data management/application layers, e.g. processing classroom attendance locally instead of sending it to the cloud."
      }
    ],
    "recall": [
      {
        "q": "Explain the three stages of the Internet of Things (IoCT, IoET, IoAT) using one example from the book for each.",
        "answer": "IoCT is the first stage, connecting computers, phones, and tablets so they can share files and photos with each other. IoET is the second stage, connecting household electronics such as printers, thermostats, and security cameras to the Internet. IoAT is the emerging third stage, connecting previously non-electronic things such as water bottles, clothing, and furniture.",
        "useVocab": [
          "Internet of Computer Things (IoCT)",
          "Internet of Electronic Things (IoET)",
          "Internet of All Things (IoAT)"
        ]
      },
      {
        "q": "Describe the book's water bottle example and explain which stage of IoT it represents.",
        "answer": "The Gatorade Smart Gx bottle uses sensors to track a user's hydration level and beverage intake, reminding them when to drink and how much more to consume. With an added bacteria sensor, the book imagines it could even warn a user that they may be coming down with the flu. Because it turns an everyday non-electronic object into a connected sensor, it represents stage #3, IoAT.",
        "useVocab": [
          "hydration",
          "Internet of All Things (IoAT)",
          "sensor"
        ]
      },
      {
        "q": "Using Waze as an example, describe the four layers of an IoT system.",
        "answer": "The sensor layer uses the phone's GPS to determine speed, direction, and location. The communication layer sends that information to the cloud over a cellular network. The data management layer aggregates and organizes this data from millions of current users by location. Finally, the application layer applies algorithms to show shortest routes, traffic jams, and emergency vehicle locations.",
        "useVocab": [
          "sensor",
          "Internet of Things (IoT)"
        ]
      },
      {
        "q": "Why is security often weak in IoT systems, and what real-world example illustrates the risk?",
        "answer": "Many IoT systems are built as 'lean tech', including only the minimum hardware and software needed to perform their specific task, and security software is often the first thing left out. In 2013, hackers exploited this by penetrating an HVAC company that wirelessly monitored Target's environmental control systems, using that gateway to access millions of customer records.",
        "useVocab": [
          "lean tech",
          "gateway"
        ]
      },
      {
        "q": "What is the difference between 'sensed data' and traditional transaction data, and why does this matter for businesses like Amazon Go or Netflix?",
        "answer": "Transaction data only records what was actually bought, such as items scanned at checkout, while sensed data captures behavior in its raw, natural form, such as which aisles a shopper walked through or which movies someone previewed but chose not to watch. Businesses like Amazon Go and Netflix use sensed data to build much richer profiles of customer behavior than transaction data alone could provide, including what people looked at but decided not to buy or watch.",
        "useVocab": [
          "sensed data",
          "transaction data"
        ]
      }
    ]
  },
  {
    "id": 2,
    "topic": "Blockchain & Cryptocurrency",
    "hook": "$250 Million for a Pizza",
    "summary": [
      {
        "h": "What is it?",
        "de": "Kryptowährung ist eine rein digitale Form von Geld ohne physisches Gegenstück, die keiner Regierung untersteht. Blockchain ist die zugrunde liegende Technologie: eine Umsetzung der \"Distributed Ledger Technology\" (DLT), bei der Informationen in verketteten Blöcken gespeichert werden. Wichtig ist die Hierarchie: Alle Blockchains basieren auf DLT, aber nicht jede DLT ist eine Blockchain; alle Kryptowährungen basieren auf Blockchain, aber nicht jede Blockchain-Anwendung ist eine Kryptowährung (z. B. Lieferketten-Tracking oder Wahlregistrierung). Ergänzend erklärt das Buch die Begriffe Fiatgeld (von einer Zentralbank reguliertes Geld) und gesetzliches Zahlungsmittel (was zur Schuldentilgung akzeptiert werden muss) sowie die \"Central Bank Digital Currency\" (CBDC) als digitale Form des Fiatgelds eines Landes.",
        "en": "Cryptocurrency is a purely digital form of money with no physical equivalent, not backed by any government. Blockchain is the underlying technology: an implementation of distributed ledger technology (DLT) in which information is stored in linked, chained blocks. The key hierarchy is that all blockchain is based on DLT, but not all DLT is blockchain; all cryptocurrencies are based on blockchain, but not all blockchain applications are cryptocurrency (e.g. supply chain tracking or voter registration). The book also introduces fiat money (currency regulated by a central bank) and legal tender (the form of money legally required to settle debt), plus the central bank digital currency (CBDC), the digital form of a country's own fiat money."
      },
      {
        "h": "How does it work?",
        "de": "Bei einer klassischen (zentralisierten) Datenbank gibt es ein \"Master\"-Register und eine zentrale Autorität (z. B. eine Bank); bei DLT besitzt dagegen jeder Knoten (Node) im Netzwerk eine vollständige, aktuelle Kopie und muss neuen Transaktionen zustimmen. In der Blockchain werden geprüfte Transaktionen in Blöcken gesammelt; ist ein Block voll, erzeugt ein einzigartiger 256-Bit-Hash (nach dem \"Falltür\"-Prinzip nicht rückrechenbar) das Ende des Blocks und zugleich den Start des nächsten – das verkettet die Blöcke. Wer die Transaktionen prüft und den Hash berechnet, sind die sogenannten Miner: Beim Proof-of-Work-Verfahren (z. B. Bitcoin) gewinnt, wer zuerst ein komplexes Rechenproblem löst; beim Proof-of-Stake-Verfahren (z. B. Ethereum) hinterlegen Miner Kryptowährung als Sicherheit und werden zufällig ausgewählt. Für den Zugriff braucht man ein Schlüsselpaar: einen öffentlichen Schlüssel (zur Identifikation) und einen privaten Schlüssel (das exklusive Nutzungsrecht), verwaltet in einer Wallet – online (\"hot\", bequem aber angreifbar) oder offline (\"cold\", z. B. ein USB-Hardware-Wallet, sicherer).",
        "en": "In a classic centralized system there is one \"master\" ledger and a central authority (e.g. a bank); in DLT, by contrast, every node on the network holds a complete, up-to-date copy and all nodes must approve new transactions. On the blockchain, verified transactions are collected into blocks; once a block is full, a unique 256-bit hash (based on an irreversible trap-door principle) closes that block and becomes the starting entry of the next one, chaining the blocks together. Verifying transactions and computing the hash is the job of miners: under proof-of-work (e.g. Bitcoin) whoever solves a complex computational problem first wins the reward, while under proof-of-stake (e.g. Ethereum) miners stake cryptocurrency as collateral and are randomly chosen to verify. Access requires a key pair: a public key (used for identification) and a private key (the exclusive right to spend the funds), both managed in a wallet that can be hot (online, convenient but hackable) or cold (offline, e.g. a USB hardware wallet, more secure)."
      },
      {
        "h": "Example from the book",
        "de": "Der Aufhänger ist die Geschichte von Laszlo Hanyecz, der 2010 für zwei Pizzen 10.000 Bitcoin bezahlte – damals nur rund 40 US-Dollar wert, aber zum Bitcoin-Kurs von Ende 2023 (ca. 42.000 $) wären das etwa 420 Millionen Dollar gewesen. Das Buch nennt weitere Prominenten-Beispiele für Krypto-Akzeptanz: NFL-Profi Aaron Rodgers ließ sich 2021 teilweise in Bitcoin bezahlen und verschenkte 1 Million Dollar in Bitcoin an Fans, NYCs Bürgermeister Eric Adams nahm seine ersten drei Gehälter in Bitcoin, und Trevor Lawrence ließ sich seinen NFL-Draft-Bonus (über 22 Mio. $) in Bitcoin auszahlen. Als konkretes Länderbeispiel für gesetzliches Zahlungsmittel nennt das Buch El Salvador (2021) und die Zentralafrikanische Republik, während China beim CBDC führend ist: Bis Januar 2022 hatten 261 Millionen Menschen (ca. 19 % der Bevölkerung) eine digitale Yuan-Wallet eingerichtet.",
        "en": "The chapter's hook is the story of Laszlo Hanyecz, who paid 10,000 bitcoin for two pizzas in 2010 – worth only about $40 at the time, but roughly $420 million at late-2023 Bitcoin prices (about $42,000 per coin). The book gives further celebrity examples of crypto adoption: NFL player Aaron Rodgers took part of his 2021 pay in Bitcoin and gave away $1 million in Bitcoin to fans, New York City mayor Eric Adams took his first three paychecks in Bitcoin, and Trevor Lawrence had his NFL draft bonus (over $22 million) paid out in Bitcoin. As country-level examples of legal tender, the book cites El Salvador (2021) and the Central African Republic, while China leads on CBDCs: by January 2022, 261 million people (about 19% of the population) had set up a digital yuan wallet."
      },
      {
        "h": "Opportunities & Risks",
        "de": "Kryptowährungen wie Bitcoin und ETH sind extrem volatil (Bitcoin schwankte 2023 zwischen 16.500 $ und 44.000 $); daher wurden Stablecoins erfunden, die z. B. an den US-Dollar gekoppelt sind (Tether/USDT, USD Coin/USDC, Dai/DAI u. a.). Ein großes Risiko sind Hacks von Krypto-Börsen: 2021 wurden bei Liquid rund 100 Mio. $ gestohlen, beim Poly-Network-Hack rund 600 Mio. $ (der Hacker gab später über 300 Mio. $ zurück und erklärte, es sei \"nur zum Spaß\" gewesen), und beim Ronin-Network-Hack im März 2022 sogar 625 Mio. $ – der bisher größte Krypto-Diebstahl. Zu den vielversprechenden Nicht-Krypto-Anwendungen von Blockchain zählen Wahlregistrierung (USPS-Patent), Diamanten-Tracking (De Beers), Lieferketten (Walmart) und Gesundheitsdaten; NFTs (nicht-fungible Token) ermöglichen zudem den Nachweis eindeutigen digitalen Eigentums (z. B. Beeples \"Everydays\" für 69,3 Mio. $). Das Buch prognostiziert, dass ein großes Land (vermutlich China) in 3–5 Jahren seine Fiatwährung zur Kryptowährung macht, Datenbanken zunehmend durch Blockchain ersetzt werden und Bargeld in unserer Lebenszeit ausstirbt.",
        "en": "Cryptocurrencies like Bitcoin and ETH are extremely volatile (Bitcoin ranged between $16,500 and $44,000 in 2023 alone); this is why stablecoins were invented, pegged to assets such as the U.S. dollar (Tether/USDT, USD Coin/USDC, Dai/DAI, and others). A major risk is exchange hacking: in 2021, hackers stole about $100 million from Liquid and about $600 million from the Poly Network (the hacker later returned over $300 million, saying it was done \"for fun\"), and in March 2022 the Ronin Network was hit for $625 million, the largest crypto theft to date. Promising non-cryptocurrency uses of blockchain include voter registration (a USPS patent), diamond tracking (De Beers), supply chain management (Walmart), and healthcare records; NFTs (non-fungible tokens) also enable proof of unique digital ownership (e.g. Beeple's \"Everydays\" sold for $69.3 million). The book predicts that a major country (likely China) will make its fiat money a cryptocurrency within 3-5 years, that databases will increasingly evolve into blockchain-based storage, and that physical cash will disappear within our lifetime."
      }
    ],
    "details": [
      "Laszlo Hanyecz zahlte 2010 10.000 Bitcoin (damals ~40 $) für 2 Pizzen; zu Kursen von Ende 2023 (~42.000 $/BTC) wären das ~420 Mio. $.",
      "Prominente Krypto-Nutzer: Aaron Rodgers (Teil-Gehalt + 1 Mio. $ Bitcoin an Fans, 2021), Bürgermeister Eric Adams (NYC, erste 3 Gehälter in Bitcoin), Trevor Lawrence (NFL-Bonus >22 Mio. $ in Bitcoin).",
      "El Salvador (2021) und die Zentralafrikanische Republik erklärten Bitcoin zum gesetzlichen Zahlungsmittel; China, Ägypten, Irak und Marokko verbieten Kryptowährung.",
      "Chinas CBDC (digitaler Yuan/e-CNY): bis Jan. 2022 261 Mio. Wallets (~19 % der Bevölkerung), z. T. wegen Verlosungen im Wert von >50 Mio. $.",
      "Block-Hash: 256-Bit/64-Zeichen-Wert nach Falltür-Prinzip – aus dem Blockinhalt berechenbar, aber nicht umkehrbar; jede Änderung ändert den Hash komplett und bricht die Kette.",
      "Proof of Work (Bitcoin): Miner lösen als Erste ein Rechenproblem, Belohnung aktuell 6,25 BTC/Block (halbiert sich ~alle 4 Jahre, Start bei 50 BTC); Satoshi Nakamoto (unbekannte Identität) begrenzte die Gesamtmenge auf 21 Mio. BTC.",
      "Proof of Stake (z. B. Ethereum): Miner hinterlegen Kryptowährung als Pfand (bei ETH 32 ETH) und werden zufällig zur Verifikation ausgewählt.",
      "Größte Krypto-Hacks: Ronin Network (März 2022, 625 Mio. $), Poly Network (Aug. 2021, ~600 Mio. $, >300 Mio. $ zurückgegeben), Liquid (2021, ~100 Mio. $).",
      "Stablecoins (an den US-Dollar gekoppelt): Tether (USDT), USD Coin (USDC), Dai (DAI), Binance USD (BUSD), Gemini Dollar (GUSD) u. a.",
      "Teuerste je verkaufte NFTs: Pak, \"The Merge\" (91,8 Mio. $); Beeple, \"Everydays: The First 5000 Days\" (69,3 Mio. $); Pak & Julian Assange, \"Clock\" (52,8 Mio. $)."
    ],
    "vocab": [
      {
        "en": "blockchain",
        "de": "Blockchain",
        "note": "chain of linked blocks of records, each secured by a unique hash"
      },
      {
        "en": "cryptocurrency",
        "de": "Kryptowährung",
        "note": "purely digital currency with no physical equivalent, e.g. Bitcoin, ETH"
      },
      {
        "en": "distributed ledger technology (DLT)",
        "de": "verteilte Ledger-Technologie",
        "note": "every node holds a full, up-to-date copy of the ledger; no single central authority"
      },
      {
        "en": "node",
        "de": "Knoten",
        "note": "participant on the network that verifies transactions and keeps a copy of the ledger"
      },
      {
        "en": "hash",
        "de": "Hash(-wert)",
        "note": "unique 256-bit, 64-character key that describes a block's contents; cannot be reverse-engineered"
      },
      {
        "en": "fiat money",
        "de": "Fiatgeld",
        "note": "currency established and regulated by a government/central bank, e.g. the U.S. dollar"
      },
      {
        "en": "legal tender",
        "de": "gesetzliches Zahlungsmittel",
        "note": "form of money a country's courts require to be accepted to settle debt"
      },
      {
        "en": "central bank digital currency (CBDC)",
        "de": "digitale Zentralbankwährung",
        "note": "the digital form of a country's own fiat money, controlled by its central bank, e.g. China's e-CNY"
      },
      {
        "en": "public key",
        "de": "öffentlicher Schlüssel",
        "note": "publicly known key used to identify the owner of cryptocurrency"
      },
      {
        "en": "private key",
        "de": "privater Schlüssel",
        "note": "secret key that gives the sole right to use one's cryptocurrency"
      },
      {
        "en": "cryptocurrency wallet",
        "de": "Krypto-Wallet",
        "note": "software system used to store and manage cryptocurrency"
      },
      {
        "en": "hot wallet",
        "de": "Hot Wallet",
        "note": "always-on, Internet-connected wallet enabling real-time transactions"
      },
      {
        "en": "cold wallet",
        "de": "Cold Wallet",
        "note": "offline wallet, e.g. a USB hardware device, considered more secure"
      },
      {
        "en": "cryptocurrency exchange",
        "de": "Krypto-Börse",
        "note": "marketplace for buying/selling crypto, e.g. Coinbase, Binance, Kraken"
      },
      {
        "en": "stablecoin",
        "de": "Stablecoin",
        "note": "cryptocurrency pegged to an external asset like the U.S. dollar to reduce volatility"
      },
      {
        "en": "mining",
        "de": "Mining / Schürfen",
        "note": "process of verifying transactions and creating a block's ending hash, rewarded with new coins"
      },
      {
        "en": "proof of work",
        "de": "Proof of Work",
        "note": "miners race to solve a computational problem first; used by Bitcoin"
      },
      {
        "en": "proof of stake",
        "de": "Proof of Stake",
        "note": "miners stake cryptocurrency as collateral and are randomly chosen to verify; used by ETH"
      },
      {
        "en": "smart contract",
        "de": "Smart Contract",
        "note": "software running on a blockchain that automates tasks and payments once conditions are met"
      },
      {
        "en": "decentralized app (Dapp)",
        "de": "dezentrale Anwendung",
        "note": "software application that runs on a blockchain, e.g. CryptoKitties, Brave"
      },
      {
        "en": "decentralized autonomous organization (DAO)",
        "de": "dezentrale autonome Organisation",
        "note": "an Internet community with a shared bank account governed by automated smart-contract rules"
      },
      {
        "en": "non-fungible token (NFT)",
        "de": "nicht-fungibles Token",
        "note": "blockchain-based token representing unique, non-interchangeable ownership"
      },
      {
        "en": "immutability",
        "de": "Unveränderlichkeit",
        "note": "once approved and recorded, a blockchain transaction can never be altered"
      },
      {
        "en": "double spending",
        "de": "Doppelausgabe",
        "note": "spending the same digital coin twice; prevented because blockchain tracks unique ownership"
      },
      {
        "en": "decentralized finance (DeFi)",
        "de": "dezentrales Finanzwesen",
        "note": "financial technology based on DLT that can eliminate fees of traditional banking"
      }
    ],
    "mc": [
      {
        "q": "What did Laszlo Hanyecz famously buy with 10,000 bitcoin in 2010?",
        "options": [
          "A house",
          "Two pizzas",
          "A car",
          "A laptop"
        ],
        "correct": 1,
        "why": "In 2010 Laszlo spent 10,000 bitcoin, then worth about $40, on two pizzas; at late-2023 prices that amount would be worth roughly $420 million."
      },
      {
        "q": "Which statement correctly describes the relationship between distributed ledger technology (DLT), blockchain, and cryptocurrency?",
        "options": [
          "All DLT is blockchain, and all blockchain is cryptocurrency",
          "All blockchain is based on DLT (but not all DLT is blockchain), and all cryptocurrency is based on blockchain (but not all blockchain is cryptocurrency)",
          "Cryptocurrency has nothing to do with blockchain",
          "DLT is a subset of blockchain, which is a subset of cryptocurrency"
        ],
        "correct": 1,
        "why": "The chapter's Figure 2.1 shows cryptocurrency nested inside blockchain, which is nested inside the broader category of DLT."
      },
      {
        "q": "What happens if a hacker manages to change a transaction that has already been recorded on the blockchain?",
        "options": [
          "Nothing changes; the alteration is silently accepted",
          "The block's hash changes and no longer matches the next block's starting hash, causing a system error",
          "The transaction is automatically reversed by the miner",
          "The hacker's private key is instantly revealed to everyone"
        ],
        "correct": 1,
        "why": "Because hashes are extremely sensitive to the exact block contents, any alteration produces a completely different hash, breaking the chain and causing an error across all distributed copies."
      },
      {
        "q": "As of late 2023, how much new bitcoin is a miner rewarded for winning the proof-of-work race?",
        "options": [
          "50 bitcoin",
          "21 million bitcoin",
          "6.25 bitcoin",
          "32 bitcoin"
        ],
        "correct": 2,
        "why": "The original reward of 50 bitcoin per block has been halved roughly every four years; as of 2023 it stands at 6.25 bitcoin, worth about $250,000 at the time."
      },
      {
        "q": "Why can an existing cryptocurrency like Bitcoin never become a country's fiat money, according to the chapter?",
        "options": [
          "Because it is illegal in every country",
          "Because no country's central bank can control the supply of an existing cryptocurrency",
          "Because cryptocurrency has no monetary value",
          "Because cryptocurrency cannot be stored digitally"
        ],
        "correct": 1,
        "why": "Fiat money requires a central bank to control supply and monetary policy; no central bank can control Bitcoin's supply, so a country would instead need to create its own CBDC."
      },
      {
        "q": "What makes an NFT fundamentally different from a fungible currency like a $20 bill, according to the chapter?",
        "options": [
          "NFTs have no formal, standardized exchange ratio and represent unique, non-interchangeable ownership",
          "NFTs can only be used to buy cars",
          "NFTs are physical objects you can hold",
          "NFTs are always worth exactly $1"
        ],
        "correct": 0,
        "why": "Unlike a $20 bill, which has a government-defined exchange ratio to other denominations, there is no fixed exchange ratio between NFTs; each represents unique ownership."
      }
    ],
    "recall": [
      {
        "q": "Explain the difference between a hot wallet and a cold wallet, and why experts recommend cold storage.",
        "answer": "A hot wallet is always connected to the Internet, which makes it convenient for real-time transactions but vulnerable to hacking, as happened to exchanges like Liquid and the Ronin Network. A cold wallet, such as a USB hardware device, stores private keys offline and must be deliberately connected to be used, making it much harder for hackers to steal the cryptocurrency. Because exchange hacks have led to losses in the hundreds of millions of dollars, experts recommend storing significant amounts of cryptocurrency in a cold wallet rather than leaving it on an exchange's hot wallet.",
        "useVocab": [
          "hot wallet",
          "cold wallet",
          "private key"
        ]
      },
      {
        "q": "Using the example of writing a personal check, explain how a blockchain-based banking system would validate a transaction.",
        "answer": "In the book's example, once the entire banking system runs on blockchain, every bank, credit union, and brokerage firm is a node with an up-to-date copy of the ledger. When a friend deposits your check, her bank sends the transaction to all other nodes, which check things like whether your bank and account exist and whether you have enough funds, using their copies of the distributed ledger technology. Once enough nodes approve, the transaction is written into a block, and when that block is full, it is sealed with a unique hash that chains it to the next block.",
        "useVocab": [
          "node",
          "distributed ledger technology (DLT)",
          "hash"
        ]
      },
      {
        "q": "What is a stablecoin, and why was it invented?",
        "answer": "A stablecoin is a type of cryptocurrency that is pegged to an external asset, such as the U.S. dollar, to keep its price stable. It was invented because major cryptocurrencies like Bitcoin and ETH are not regulated by any government's fiat money system and are therefore extremely volatile in price. By tying its value to something like the dollar, a stablecoin behaves much more like traditional fiat money, so $1 worth of it will still be worth about $1 in the future.",
        "useVocab": [
          "stablecoin",
          "fiat money"
        ]
      },
      {
        "q": "Describe what a smart contract is and give an example of how one could be used in home construction.",
        "answer": "A smart contract is a piece of software running on a blockchain that automates processes, tasks, and the movement of money once certain conditions are verified by a number of nodes. In the book's home-construction example, you place money in an escrow account managed by a smart contract; as subcontractors like the electrician finish their work, nodes such as the general contractor, county inspector, and homeowner verify it, and payment is automatically released from escrow to the contractor. This removes the need for a person to manually track and approve every payment.",
        "useVocab": [
          "smart contract",
          "node"
        ]
      },
      {
        "q": "What is a central bank digital currency (CBDC), and how does it differ from an existing cryptocurrency like Bitcoin?",
        "answer": "A central bank digital currency (CBDC) is the digital form of a country's own fiat money, regulated by that country's central bank, which can control its supply and set monetary policy just like physical cash. This differs from an existing cryptocurrency like Bitcoin, which no central bank controls, meaning Bitcoin cannot become a country's official fiat money even though some countries, like El Salvador, have made it legal tender. China is currently the leader in CBDC development with its digital yuan, or e-CNY.",
        "useVocab": [
          "central bank digital currency (CBDC)",
          "fiat money",
          "cryptocurrency"
        ]
      }
    ]
  },
  {
    "id": 3,
    "topic": "Artificial Intelligence",
    "hook": "A Cat Mistaken for Guacamole",
    "summary": [
      {
        "h": "What is it?",
        "de": "Künstliche Intelligenz (KI) wird im Buch als Maschine definiert, die menschliche intellektuelle Fähigkeiten nachahmt – etwa Lernen, Problemlösen und soziale Interaktion. Das Buch beschreibt ein Spektrum von acht (teils überlappenden) Kategorien: künstliche schwache Intelligenz (ANI, mit den Unterkategorien reaktive KI und KI mit begrenztem Gedächtnis), allgemeine künstliche Intelligenz (AGI), Theory-of-Mind-KI, selbstbewusste KI und künstliche Superintelligenz (ASI, auch \"Singularität\" genannt) sowie generative KI. Fast alle heute erfolgreichen KI-Anwendungen fallen unter ANI – eine einzige Aufgabe sehr gut erledigen –, während AGI, Theory-of-Mind-KI, Selbstbewusstsein und Superintelligenz noch weit entfernte, teils rein hypothetische Ziele sind.",
        "en": "Artificial intelligence (AI) is defined in the book as a machine that mimics human intellectual tasks such as learning, problem solving, and social interaction. The book describes a spectrum of eight, partly overlapping categories: artificial narrow intelligence (ANI, which includes the subcategories reactive AI and limited-memory AI), artificial general intelligence (AGI), theory of mind AI, self-aware AI and artificial superintelligence (ASI, also called \"singularity\"), and generative AI. Almost all of today's successful AI applications fall under ANI, performing a single task very well, while AGI, theory of mind AI, self-awareness, and superintelligence remain distant, in some cases purely hypothetical, goals."
      },
      {
        "h": "How does it work?",
        "de": "Das wichtigste Werkzeug für KI mit begrenztem Gedächtnis ist das künstliche neuronale Netz (ANN) mit einer Eingabe-, einer oder mehreren verborgenen Schichten und einer Ausgabeschicht; im Buchbeispiel Hund/Katze erhalten Eingabeknoten Merkmale wie Ohrlänge oder Zungenlänge, verborgene Knoten gewichten diese Werte, und die Ausgabeschicht liefert die Entscheidung. Beim maschinellen Lernen wird das Netz mit vielen Beispielen trainiert und passt bei jeder richtigen oder falschen Antwort die Gewichte in den verborgenen Knoten an (bestärkendes Lernen); Deep Learning nutzt mehr verborgene Schichten für feinere Unterscheidungen, und Convolutional Neural Networks (CNN) sind auf Bild-, Video- und Audiodaten spezialisiert. Beim überwachten Lernen gibt man die Eingaben vor und bewertet richtig/falsch, beim unüberwachten Lernen bestimmt das System selbst die relevanten Merkmale (Beispiel: ein Netz meisterte Super Mario World in 24 Stunden nur mit dem Ziel \"Fitness maximieren\"); von der Natur inspirierte Ansätze wie genetische Algorithmen (Selektion, Crossover, Mutation), Neuroevolution und Biomimikry ergänzen diese Methoden.",
        "en": "The main tool for limited-memory AI is the artificial neural network (ANN), with an input layer, one or more hidden layers, and an output layer; in the book's dog/cat example, input nodes receive features like ear length or tongue visibility, hidden nodes apply weights to these values, and the output layer produces the decision. In machine learning, the network is trained on many examples and adjusts the weights in its hidden nodes after every right or wrong answer (reinforced learning); deep learning uses more hidden layers for finer distinctions, and convolutional neural networks (CNNs) are specialized for image, video, and audio data. In supervised learning you specify the inputs and label answers as right or wrong, while in unsupervised learning the system determines the relevant features itself (example: a network mastered Super Mario World in 24 hours with only the goal of maximizing fitness); nature-inspired approaches such as genetic algorithms (selection, crossover, mutation), neuroevolution, and biomimicry complement these methods."
      },
      {
        "h": "Example from the book",
        "de": "Der Aufhänger ist eine Geschichte, in der ein Harvard-Professor zeigte, wie Googles KI-Bilderkennung dazu gebracht werden konnte, ein Katzenfoto für Guacamole zu halten – ein humorvoller Beweis dafür, wie weit KI noch von menschlicher Intelligenz entfernt ist, obwohl das Feld seit den 1950er-Jahren existiert. Für reaktive KI beschreibt das Buch ein einfaches Ampel-Beispiel mit Wenn-Dann-Regeln (ein sogenanntes Expertensystem, in den 1980ern in der Sprache LISP entwickelt), wobei die Regeln erweitert werden müssen (z. B. um Einsatzfahrzeuge zu berücksichtigen), da das System selbst nicht lernen kann. Für Theory-of-Mind-KI nennt das Buch reale Beispiele: den humanoiden Roboter Sophia (2017 als erster Roboter mit Staatsbürgerschaft, Saudi-Arabien), Kismet von Cynthia Breazeal am MIT und ToMnet von Google DeepMind.",
        "en": "The chapter's hook is the story of a Harvard professor showing how Google's AI-based image recognition could be fooled into believing a photo of a cat was actually guacamole, a humorous illustration of how far AI still is from human intelligence despite the field existing since the 1950s. For reactive AI, the book describes a simple traffic-light example built from if-then rules (called an expert system, developed in the 1980s in the LISP language), where the rules must be manually expanded to handle new situations, such as an approaching emergency vehicle, because the system itself cannot learn. For theory of mind AI, the book cites real examples: the humanoid robot Sophia (in 2017 the first robot to receive citizenship, from Saudi Arabia), Kismet by Cynthia Breazeal at MIT, and ToMnet by Google DeepMind."
      },
      {
        "h": "Opportunities & Risks",
        "de": "Generative KI (ChatGPT, DALL-E, Midjourney, Stable Diffusion u. a.) hat sich seit der letzten Buchausgabe (2022) zum meistdiskutierten KI-Thema entwickelt; große Sprachmodelle (LLMs) sind dabei nur eine Untergruppe generativer KI. Das Buch warnt eindringlich vor eingebauten Verzerrungen (Bias): Entfernt man Demografie-Merkmale wie Alter, Geschlecht oder Ethnie aus einer Kreditentscheidungs-KI, können andere Merkmale wie Bildungsniveau, Beschäftigungsdauer oder Ersparnisse indirekt dieselbe Verzerrung erzeugen. Eine IBM-Studie von 2019 schätzte, dass 120 Millionen Arbeitskräfte innerhalb von drei Jahren wegen KI umgeschult werden müssten – das Buch erwartet dennoch, dass wie bei früheren technologischen Umwälzungen (Telefon, Telegraf) unterm Strich mehr Arbeitsplätze entstehen als verschwinden. Als Ausblick beschreibt das Buch \"Web 3.0\" (Web + KI + Distributed-Ledger-Technologie + Internet der Dinge) mit semantischen, dezentralen und allgegenwärtigen Eigenschaften sowie die Erwartung, dass wir in zehn Jahren in fast jedem Beruf mit einer KI zusammenarbeiten werden.",
        "en": "Generative AI (ChatGPT, DALL-E, Midjourney, Stable Diffusion, and others) has become the most talked-about AI topic since the book's last edition in 2022; large language models (LLMs) are just one subset of generative AI. The book warns strongly about built-in bias: even if demographic inputs like age, gender, or race are removed from a credit-approval AI, other inputs such as education level, length of employment, or savings can indirectly recreate the same bias. A 2019 IBM survey estimated that 120 million workers would need retraining within three years because of AI, though the book expects that, as with past technological upheavals (the telephone, the telegraph), more jobs will ultimately be created than lost. Looking ahead, the book describes \"Web 3.0\" (Web + AI + distributed ledger technology + Internet of Things) with semantic, decentralized, and ubiquitous characteristics, and predicts that within ten years almost every job will involve working alongside an AI."
      }
    ],
    "details": [
      "AI-Definition: eine Maschine, die menschliche intellektuelle Aufgaben nachahmt (Lernen, Problemlösen, soziale Interaktion).",
      "8 Kategorien im Spektrum: ANI (inkl. reaktiver KI + KI mit begrenztem Gedächtnis), AGI, Theory-of-Mind-KI, selbstbewusste KI/ASI (Singularität), generative KI.",
      "Guacamole-Anekdote: Harvard-Professor überlistete Googles Bilderkennung, ein Katzenfoto als Guacamole zu klassifizieren.",
      "Reaktive KI = Expertensystem mit Wenn-Dann-Regeln (Beispiel Ampel), entwickelt in den 1980ern in LISP; kann nicht lernen. Beispiele: Deep Blue (schlug Kasparov 1997), Spamfilter, Netflix-Empfehlungen.",
      "KI mit begrenztem Gedächtnis lernt aus historischen Daten und wird kontinuierlich besser – dominante KI-Kategorie heute, z. B. autonome Fahrzeuge.",
      "Neuronales Netz: Eingabeschicht → verborgene Schicht(en, mit Gewichten) → Ausgabeschicht; Deep Learning = mehr verborgene Schichten für feinere Unterscheidungen (z. B. 190–360 Hunderassen).",
      "Überwachtes Lernen (Eingaben + Richtig/Falsch vorgegeben) vs. unüberwachtes Lernen (System bestimmt Merkmale selbst, z. B. KI meisterte Super Mario World in 24 Stunden).",
      "Von der Natur inspiriert: genetische Algorithmen (Selektion, Crossover, Mutation), Neuroevolution, Biomimikry (z. B. Bienenstöcke, Ameisen, Vögel, Termitenhügel).",
      "Theory-of-Mind-KI Beispiele: Sophia (Hanson Robotics, 2017 Staatsbürgerschaft Saudi-Arabien), Kismet (Cynthia Breazeal, MIT), ToMnet (Google DeepMind).",
      "Generative KI-Kategorien: Text-zu-Text (ChatGPT, Gemini), Text-zu-Bild (DALL-E, Midjourney, Stable Diffusion), Text-zu-Code (GitHub Copilot), Text-zu-Audio (ElevenLabs), Text-zu-Video (Runway Gen-2)."
    ],
    "vocab": [
      {
        "en": "artificial intelligence (AI)",
        "de": "künstliche Intelligenz",
        "note": "a machine that mimics human intellectual tasks like learning and problem solving"
      },
      {
        "en": "artificial narrow intelligence (ANI)",
        "de": "künstliche schwache Intelligenz",
        "note": "AI that performs one single task very well; where almost all successful AI falls today"
      },
      {
        "en": "reactive AI",
        "de": "reaktive KI",
        "note": "produces the same predictable outcome from the same inputs; cannot learn or adapt"
      },
      {
        "en": "limited-memory AI",
        "de": "KI mit begrenztem Gedächtnis",
        "note": "learns from historical/past data to keep improving its decisions, e.g. autonomous vehicles"
      },
      {
        "en": "artificial general intelligence (AGI)",
        "de": "allgemeine künstliche Intelligenz",
        "note": "AI that can apply knowledge learned in one situation to a completely new one"
      },
      {
        "en": "theory of mind AI",
        "de": "Theory-of-Mind-KI",
        "note": "AI that can discern and respond to people's emotions, beliefs, and expectations"
      },
      {
        "en": "self-aware AI",
        "de": "selbstbewusste KI",
        "note": "hypothetical AI that is sentient, has a conscience, and its own emotions"
      },
      {
        "en": "artificial superintelligence (ASI)",
        "de": "künstliche Superintelligenz",
        "note": "the most far-reaching category, popularly called 'singularity'"
      },
      {
        "en": "generative AI (GenAI)",
        "de": "generative KI",
        "note": "AI that dynamically creates new output from a prompt, e.g. ChatGPT, DALL-E"
      },
      {
        "en": "large language model (LLM)",
        "de": "großes Sprachmodell",
        "note": "a subset of generative AI trained on text to create new text, e.g. ChatGPT"
      },
      {
        "en": "expert system",
        "de": "Expertensystem",
        "note": "uses if-then rules to work through inputs and decide an action; a form of reactive AI"
      },
      {
        "en": "artificial neural network (ANN)",
        "de": "künstliches neuronales Netz",
        "note": "software patterned after the human brain; the main tool for limited-memory AI"
      },
      {
        "en": "hidden layer",
        "de": "verborgene Schicht",
        "note": "interior nodes that mathematically weight inputs and pass a value to the output layer"
      },
      {
        "en": "machine learning",
        "de": "maschinelles Lernen",
        "note": "the ability of AI to learn from data by changing how it works, i.e. adjusting weights"
      },
      {
        "en": "deep learning",
        "de": "Deep Learning",
        "note": "machine learning with many hidden layers for handling finer subtleties in data"
      },
      {
        "en": "supervised learning",
        "de": "überwachtes Lernen",
        "note": "training process where you specify the inputs and label outcomes as right or wrong"
      },
      {
        "en": "unsupervised learning",
        "de": "unüberwachtes Lernen",
        "note": "training process where the AI determines the best inputs itself"
      },
      {
        "en": "convolutional neural network (CNN)",
        "de": "Convolutional Neural Network",
        "note": "a neural network specialized for processing images, video, and audio"
      },
      {
        "en": "genetic algorithm",
        "de": "genetischer Algorithmus",
        "note": "biologically-inspired technique using selection, crossover, and mutation"
      },
      {
        "en": "neuroevolution",
        "de": "Neuroevolution",
        "note": "using genetic algorithms within an unsupervised learning context"
      },
      {
        "en": "biomimicry",
        "de": "Biomimikry",
        "note": "simulating elements of nature (e.g. bees, ants, birds) to solve human problems"
      },
      {
        "en": "prompt engineering",
        "de": "Prompt-Engineering",
        "note": "the process of creating and structuring a textual prompt for a generative AI tool"
      },
      {
        "en": "algorithmic bias",
        "de": "algorithmische Verzerrung",
        "note": "unintended discrimination baked into an AI, e.g. via correlated non-demographic inputs"
      },
      {
        "en": "Web 3.0",
        "de": "Web 3.0",
        "note": "Web + AI + distributed ledger technology + IoT; semantic, decentralized, ubiquitous"
      },
      {
        "en": "training (data)",
        "de": "Trainingsdaten",
        "note": "the examples fed into a neural network so it can learn to make correct decisions"
      }
    ],
    "mc": [
      {
        "q": "In the book's spectrum of AI, which category performs one single task very well and includes almost all of today's successful AI applications?",
        "options": [
          "Artificial general intelligence",
          "Artificial narrow intelligence",
          "Self-aware AI",
          "Artificial superintelligence"
        ],
        "correct": 1,
        "why": "Artificial narrow intelligence (ANI) performs only one task, such as a recommendation engine or spam filter, and is where nearly all current successful AI implementations fall."
      },
      {
        "q": "What is the key difference between reactive AI and limited-memory AI?",
        "options": [
          "Reactive AI always produces the same output for the same input and cannot learn, while limited-memory AI learns from historical data to improve",
          "Reactive AI can adapt to new situations, but limited-memory AI cannot",
          "They are exactly the same type of AI",
          "Reactive AI only works with images, limited-memory AI only works with text"
        ],
        "correct": 0,
        "why": "Reactive AI follows fixed if-then rules and cannot learn, whereas limited-memory AI continually adapts and improves using historical/past data, as with autonomous vehicles."
      },
      {
        "q": "What did a Harvard professor demonstrate about Google's AI-based image recognition in the anecdote that opens the chapter?",
        "options": [
          "It could translate any language perfectly",
          "It could be fooled into believing a photo of a cat was guacamole",
          "It won a chess match against a grandmaster",
          "It passed a full conversation Turing test"
        ],
        "correct": 1,
        "why": "The professor showed the image recognition system could be tricked into classifying a cat photo as guacamole, illustrating how far AI still is from human-level intelligence."
      },
      {
        "q": "In a neural network, what is the role of the hidden layer?",
        "options": [
          "It stores the raw input data unchanged",
          "It directly gives the final answer to the user",
          "It receives data from the input layer, applies weights to it, and passes a value toward the output layer",
          "It only exists in reactive AI systems"
        ],
        "correct": 2,
        "why": "The hidden layer takes input values, multiplies them by weights, sums the results, and passes them on; training adjusts these weights so the network learns."
      },
      {
        "q": "What is the main difference between supervised and unsupervised learning, as illustrated with the dog/cat example?",
        "options": [
          "Supervised learning specifies which inputs to use and confirms right/wrong answers; unsupervised learning lets the AI determine the best inputs itself",
          "Supervised learning requires no training data at all",
          "Unsupervised learning always performs worse and is never used",
          "There is no real difference between the two"
        ],
        "correct": 0,
        "why": "In supervised learning you constrain the AI to specific inputs and label results as right or wrong; in unsupervised learning, the AI discovers useful input features on its own."
      },
      {
        "q": "According to the chapter's bias example, why can an AI become biased even after demographic inputs like age, gender, and race are removed?",
        "options": [
          "Because the AI assigns bias completely at random",
          "Because other inputs, such as education level, employment length, or savings, often correlate strongly with demographic status",
          "Because AI models cannot process financial data at all",
          "Because bias is technically impossible without explicit demographic inputs"
        ],
        "correct": 1,
        "why": "The chapter explains that inputs like education, employment length, salary, and savings implicitly describe a specific demographic group even without directly using demographic data."
      }
    ],
    "recall": [
      {
        "q": "Explain the concept of deep learning and how it relates to machine learning.",
        "answer": "Deep learning is a subset of machine learning that uses many hidden layers in a neural network to become much more accurate at making decisions. All deep learning is machine learning, but not all machine learning is deep learning, since a network can improve using just one hidden layer. The book gives the example of distinguishing between the roughly 190 to 360 dog breeds, a task subtle enough that it would require deep learning's extra hidden layers.",
        "useVocab": [
          "deep learning",
          "machine learning",
          "hidden layer"
        ]
      },
      {
        "q": "Describe the traffic-light example of a reactive AI (expert system), and explain why it cannot handle new situations like an approaching emergency vehicle without being reprogrammed.",
        "answer": "The book's reactive AI uses if-then rules, such as checking whether the light is red or yellow and whether there is time to stop, and it always produces the same outcome for the same inputs. Because it is an expert system built only on the rules it was given, it cannot learn or adapt on its own, so to handle a new situation such as an approaching emergency vehicle, a developer must manually add new rules to the system.",
        "useVocab": [
          "reactive AI",
          "expert system"
        ]
      },
      {
        "q": "What is generative AI, and name the five major categories of generative AI tools described in the chapter, with one example each.",
        "answer": "Generative AI dynamically creates new output, usually from a prompt, and prompt engineering is the skill of writing effective prompts for it. The chapter lists five categories: large language models such as ChatGPT (text-to-text), image tools such as DALL-E (text-to-image), coding tools such as GitHub Copilot (text-to-code), audio tools such as ElevenLabs (text-to-audio), and video tools such as Runway's Gen-2 (text-to-video).",
        "useVocab": [
          "generative AI (GenAI)",
          "large language model (LLM)",
          "prompt engineering"
        ]
      },
      {
        "q": "Explain the AI bias example involving credit approval decisions.",
        "answer": "In the book's example, a developer removes obvious demographic inputs like age, gender, and race from a credit-approval AI and instead uses education level, length of employment, salary, and savings. Even though this seems neutral, those inputs strongly correlate with demographic status, so the AI ends up implicitly favoring the same group it would have favored had it used demographic data directly, illustrating a serious form of algorithmic bias.",
        "useVocab": [
          "algorithmic bias"
        ]
      },
      {
        "q": "What are genetic algorithms, and what three techniques do they primarily use?",
        "answer": "Genetic algorithms are a set of techniques modeled on biological intelligence that help an AI improve its outcomes. They use selection, choosing a better outcome over a worse one; crossover, combining elements of two good outcomes to try to create a better one; and mutation, randomly trying something new to see if it improves results. Neuroevolution applies genetic algorithms within an unsupervised learning context, while biomimicry more broadly copies nature, such as bees or termite mounds, to solve human problems.",
        "useVocab": [
          "genetic algorithm",
          "neuroevolution",
          "biomimicry"
        ]
      }
    ]
  },
  {
    "id": 4,
    "topic": "Extended Reality (VR/AR)",
    "hook": "No Matter Where You Don't Go, There You Are",
    "summary": [
      {
        "h": "What is it?",
        "de": "Extended Reality (XR) ist der Oberbegriff für Augmented Reality (AR), Mixed Reality (MR) und Virtual Reality (VR) – jede Form der Verschmelzung physischer und virtueller Welten mittels Technologie. Das Buch stellt sich das als Kontinuum vor: ganz links die rein physische Welt ohne technische Erweiterung, ganz rechts die vollständig virtuelle Welt (VR); dazwischen liegt AR (überwiegend physisch, mit ergänzenden digitalen Inhalten) und MR (physische und virtuelle Welt koexistieren und schränken sich gegenseitig ein). Alle drei Formen sind bereits Teil des Alltags – von Einblendungen bei Sportübertragungen (AR) bis zu Spielen wie Pokémon Go.",
        "en": "Extended reality (XR) is the umbrella term for augmented reality (AR), mixed reality (MR), and virtual reality (VR) – any technology-driven blending of the physical and virtual worlds. The book frames this as a continuum: on the far left is the purely physical world with no technology enhancement, on the far right is a fully virtual world (VR); in between sit AR (mostly physical, with added digital content) and MR (physical and virtual worlds coexisting and constraining each other in real time). All three are already part of everyday life, from on-screen overlays during sports broadcasts (AR) to games like Pokemon Go."
      },
      {
        "h": "How does it work?",
        "de": "Augmented Reality benötigt kaum spezielle Technik – meist reicht die Kamera eines Smartphones oder ein Bildschirm, um Inhalte über das reale Bild zu legen; Entwicklungswerkzeuge sind u. a. Unity, Vuforia, Apples ARKit und Googles ARCore. Virtual Reality erfordert ein VR-Headset (passt das Sichtfeld an Kopfbewegungen an) und einen Handcontroller und erzeugt eine vollständig immersive, simulierte Erfahrung über Sehen, Hören und teils Fühlen. Mixed Reality ist am aufwendigsten zu entwickeln: Ein MR-Headset (oder ein Smartphone mit LiDAR) kartiert zunächst den physischen Raum, damit virtuelle Objekte sich realistisch in diesen Raum einfügen und von ihm begrenzt werden – deshalb gilt laut Buch die Reihenfolge der Entwicklungs-Komplexität: AR am einfachsten, VR mittel, MR am schwierigsten.",
        "en": "Augmented reality needs almost no special hardware – usually just a smartphone camera or a screen to overlay content on the real image; development tools include Unity, Vuforia, Apple's ARKit, and Google's ARCore. Virtual reality requires a VR headset (which adjusts the field of vision to head movement) and a hand controller, creating a fully immersive simulated experience through sight, hearing, and sometimes even smell. Mixed reality is the most complex to develop: an MR headset (or a LiDAR-equipped smartphone) first maps the physical room so that virtual objects can realistically fit into and be constrained by that space – which is why the book ranks development complexity as AR easiest, VR in between, and MR the most difficult."
      },
      {
        "h": "Example from the book",
        "de": "Als konkretes Beispiel für Mixed Reality beschreibt das Buch die Einrichtung eines Wohnheimzimmers: Zunächst kartiert man mit einem Smartphone (LiDAR) oder MR-Headset die Raummaße, dann bewegt man virtuell vorhandene und neue Möbel im Raum, wobei das System verhindert, dass Möbel z. B. die Tür blockieren. Für Augmented Reality nennt das Buch Pokémon Go, AR-Restaurantmenüs und Google Translate; für Virtual Reality Beispiele wie das virtuelle Begehen der Chinesischen Mauer oder von Jurassic Park: Afterworld. Beim Thema Metaverse beschreibt das Buch, wie Facebook sich Ende 2021 in \"Meta Platforms\" umbenannte, Microsoft mit \"Mesh\" 3D-Avatare/Hologramme in Teams-Meetings integrierte, und wie Barbados noch 2021 eine Botschaft im Metaverse Decentraland eröffnete und dieses virtuelle Land offiziell zu souveränem Territorium erklärte.",
        "en": "As a concrete mixed reality example, the book describes furnishing a dorm room: you first map the room's dimensions with a smartphone's LiDAR or an MR headset, then virtually move existing and new furniture around the room, with the system preventing furniture from, say, blocking the door. For augmented reality, the book cites Pokemon Go, AR-enhanced restaurant menus, and Google Translate; for virtual reality, examples like virtually walking the Great Wall of China or exploring Jurassic Park: Afterworld. On the metaverse, the book describes how Facebook renamed itself \"Meta Platforms\" in late 2021, how Microsoft integrated 3D avatars and holograms into Teams meetings via \"Mesh,\" and how Barbados opened an embassy in the metaverse platform Decentraland that same year, officially declaring that virtual land sovereign territory."
      },
      {
        "h": "Opportunities & Risks",
        "de": "Berufsaussichten sind attraktiv: Einstiegsgehälter in der Mixed-Reality-Entwicklung liegen laut Buch zwischen 150.000 und 200.000 US-Dollar, wobei Microsoft und Magic Leap den Markt dominieren und Apple neu einsteigt. Das Buch beschreibt drei Entwicklungsphasen: Phase 1 (XR als etwas Neues, Separates), Phase 2 (XR als Standard-Apps – Vapps, Mapps, Aapps) und Phase 3 (XR fest in Alltagsgeräte eingebettet, z. B. smarte Spiegel oder Fernseher, die auf Zuruf Zusatzinfos liefern). Als Zukunftstrends nennt das Buch \"echte\" Hologramme aus Lichtfeldern (Googles Project Starline), das Verschwinden klassischer Brillen zugunsten smarter Eyewear sowie eine zunehmende Verschmelzung der Begriffe AR/MR/VR. Wichtig zum Verständnis der 4. industriellen Revolution insgesamt: Die größten Chancen liegen laut Buch nicht im einzelnen Einsatz einer Technologie, sondern in deren multiplikativer Kombination (z. B. Metaverse = XR + Kryptowährung + NFTs).",
        "en": "Career prospects look attractive: the book states starting salaries in mixed reality development range from $150,000 to $200,000, with Microsoft and Magic Leap dominating the market and Apple a new entrant. The book describes three development phases: Phase 1 (XR as something new and separate), Phase 2 (XR as standard apps – Vapps, Mapps, Aapps), and Phase 3 (XR embedded into everyday devices, such as smart mirrors or TVs that provide extra information on request). Future trends the book highlights include \"real\" holograms created from light fields (Google's Project Starline), the decline of traditional eyewear in favor of smart eyewear, and an increasing blurring of the terms AR/MR/VR. Importantly for the 4th industrial revolution as a whole, the book argues that the biggest opportunities lie not in any single technology but in combining them multiplicatively (e.g. the metaverse = XR + cryptocurrency + NFTs)."
      }
    ],
    "details": [
      "XR-Kontinuum: rein physisch → Augmented Reality → Mixed Reality → Virtual Reality (rein virtuell).",
      "AR-Beispiele: Sportübertragungen (Weltrekord-Linien, First-Down-Linie), Pokémon Go, AR-Restaurantmenüs, Google Translate; benötigt nur Kamera/Bildschirm.",
      "AR-Entwicklungstools: Unity, Vuforia (plattformübergreifend), ARKit (Apple/iOS), ARCore (Google/Android); Kurse ab ca. 20-100 $ für ~20 Stunden.",
      "VR-Headsets: HTC Vive Pro 2, Meta Quest Pro/3, Valve Index VR Kit, Sony PlayStation VR2; günstige Alternative: Google Cardboard (~10 $, ohne Elektronik).",
      "MR-Headsets: Apple Vision Pro, Microsoft HoloLens 2, Magic Leap 2, Varjo XR-4; MR-Einstiegsgehälter 150.000-200.000 $; Komplexität: AR am einfachsten, MR am schwersten.",
      "Wohnheimzimmer-Beispiel (MR): Raum wird per LiDAR/Headset kartiert, Möbel werden virtuell verschoben, System verhindert z. B. Blockieren der Tür.",
      "Metaverse: Facebook → \"Meta Platforms\" (Ende 2021), Übernahme von Oculus (2014), Within, Unit 2 Games, Bigbox VR; Microsoft \"Mesh\" für 2D/3D-Avatare in Teams.",
      "Weitere Metaverse-Plattformen: Decentraland, Roblox, Minecraft, Second Life, Sandbox, Spatial; Barbados eröffnete 2021 eine Botschaft in Decentraland (erklärt als souveränes Land).",
      "Enterprise-Anwendungen (AR/VR): Fernwartung (Mercedes-Benz), medizinische Diagnostik (Aris MD), Logistik (Amazon, DHL), Fertigung (Airbus, Bosch), Einzelhandel (IKEA Reality Kitchen).",
      "Echte Hologramme (Google Project Starline): 3D-Bilder mit Tiefe aus aufgezeichneten Lichtfeldern, erzeugt durch sich kreuzende Lichtstrahlen – kein klassisches Kamerabild."
    ],
    "vocab": [
      {
        "en": "extended reality (XR)",
        "de": "erweiterte Realität (Oberbegriff)",
        "note": "umbrella term for augmented, mixed, and virtual reality"
      },
      {
        "en": "augmented reality (AR)",
        "de": "erweiterte Realität (AR)",
        "note": "enhances the view of the physical world by adding content, e.g. Pokemon Go"
      },
      {
        "en": "virtual reality (VR)",
        "de": "virtuelle Realität",
        "note": "a completely immersive simulated experience, real-world or fictitious"
      },
      {
        "en": "mixed reality (MR)",
        "de": "gemischte Realität",
        "note": "physical and virtual worlds coexist in real time and constrain each other"
      },
      {
        "en": "VR headset",
        "de": "VR-Headset",
        "note": "electronic headset that adjusts the field of vision to head movement"
      },
      {
        "en": "hand controller",
        "de": "Handcontroller",
        "note": "device for selecting menu items or acting as a specialized in-game tool"
      },
      {
        "en": "LiDAR",
        "de": "LiDAR",
        "note": "laser-based sensing used by phones/headsets to map a physical room"
      },
      {
        "en": "metaverse",
        "de": "Metaverse",
        "note": "a virtual universe using XR, holograms, and avatars for connecting, working, and commerce"
      },
      {
        "en": "avatar",
        "de": "Avatar",
        "note": "a digital representation of a person used in virtual meetings or the metaverse"
      },
      {
        "en": "hologram",
        "de": "Hologramm",
        "note": "a 3D image; 'real' holograms are created from a recorded light field"
      },
      {
        "en": "immersive",
        "de": "immersiv",
        "note": "engaging multiple senses so the user feels transported into the experience"
      },
      {
        "en": "Enterprise AR",
        "de": "Unternehmens-AR",
        "note": "AR used for business purposes like remote assistance or manufacturing"
      },
      {
        "en": "smart mirror",
        "de": "intelligenter Spiegel",
        "note": "a mirror that displays your image plus extended reality content like avatars"
      },
      {
        "en": "physical-to-virtual continuum",
        "de": "Kontinuum physisch-virtuell",
        "note": "the spectrum from the fully physical world to a fully virtual one"
      },
      {
        "en": "field of vision",
        "de": "Sichtfeld",
        "note": "the visible area a VR/MR headset adjusts as the user moves their head"
      },
      {
        "en": "Project Starline",
        "de": "Project Starline",
        "note": "Google's booth-based holographic video conferencing initiative"
      },
      {
        "en": "Vapps/Mapps/Aapps",
        "de": "VR-/MR-/AR-Apps",
        "note": "the book's terms for future virtual, mixed, and augmented reality apps"
      },
      {
        "en": "embedded extended reality",
        "de": "eingebettete erweiterte Realität",
        "note": "Phase 3: XR built into everyday devices like TVs and mirrors"
      },
      {
        "en": "remote assistance",
        "de": "Fernunterstützung",
        "note": "an enterprise AR use case, e.g. Mercedes-Benz helping technicians troubleshoot"
      },
      {
        "en": "room mapping",
        "de": "Raumkartierung",
        "note": "capturing a room's dimensions, e.g. via LiDAR, to enable mixed reality"
      },
      {
        "en": "Google Cardboard",
        "de": "Google Cardboard",
        "note": "an inexpensive, non-electronic VR viewer that uses a smartphone as the screen"
      },
      {
        "en": "light field",
        "de": "Lichtfeld",
        "note": "a recording of light used to create real 3D holograms, unlike a traditional camera image"
      }
    ],
    "mc": [
      {
        "q": "On the physical-to-virtual continuum described in the chapter, which technology sits closest to the fully physical end, adding content to the real world with barely any special hardware?",
        "options": [
          "Virtual reality",
          "Mixed reality",
          "Augmented reality",
          "The metaverse"
        ],
        "correct": 2,
        "why": "Augmented reality is mostly based in the physical world and typically only requires a camera or screen to add enhancing content."
      },
      {
        "q": "Why does the chapter call mixed reality the most technically challenging of the three to develop?",
        "options": [
          "Because it always requires the most expensive headsets on the market",
          "Because it requires mapping the physical world and constraining virtual content to fit within it",
          "Because it doesn't require any hardware at all",
          "Because it can only be used for gaming"
        ],
        "correct": 1,
        "why": "Mixed reality must map the physical space around the user and use that mapping to constrain what happens in the virtual world, which the book says makes it harder to build than AR or VR."
      },
      {
        "q": "In the book's dorm-room example of mixed reality, what does the system do first before you can virtually rearrange furniture?",
        "options": [
          "It automatically orders new furniture online",
          "It maps the physical dimensions of the room, e.g. using LiDAR",
          "It generates a completely fictional room unrelated to reality",
          "It downloads an unrelated VR game"
        ],
        "correct": 1,
        "why": "The book explains that a phone or MR headset first maps the room's dimensions, including windows, doors, and fixtures, before furniture can be virtually placed and constrained within it."
      },
      {
        "q": "What event in late 2021 does the chapter cite as signaling Facebook's major shift into the metaverse space?",
        "options": [
          "Facebook banned all VR apps",
          "Facebook changed its name to Meta Platforms",
          "Facebook sold Oculus to Microsoft",
          "Facebook launched its own cryptocurrency called Bitcoin"
        ],
        "correct": 1,
        "why": "In late 2021 Facebook renamed itself Meta Platforms, which the chapter presents as a clear signal of its strategic shift toward the metaverse."
      },
      {
        "q": "What are 'real holograms', as explained through Google's Project Starline?",
        "options": [
          "Ordinary flat video projections on a screen",
          "3D images with depth, created from a recorded light field using intersecting light beams",
          "Images that can only be viewed on a smartphone",
          "A type of non-fungible token (NFT)"
        ],
        "correct": 1,
        "why": "The chapter explains that real holograms come from recording a light field, not a traditional camera lens, with intersecting light beams creating suspended 3D pixels."
      },
      {
        "q": "According to the chapter, what starting salary range can mixed reality developers expect?",
        "options": [
          "$30,000-$50,000",
          "$150,000-$200,000",
          "$1 million or more",
          "The book gives no salary information"
        ],
        "correct": 1,
        "why": "The chapter states that starting salaries for mixed reality development are in the $150,000-$200,000 range."
      }
    ],
    "recall": [
      {
        "q": "Explain the difference between augmented reality, virtual reality, and mixed reality using the chapter's continuum.",
        "answer": "Augmented reality stays mostly in the physical world, simply adding digital content like lines or information to what you already see, such as a first-down line on a football broadcast. Virtual reality sits at the opposite, fully virtual end, immersing the user completely in a simulated environment through a headset. Mixed reality sits in between, merging the physical and virtual worlds so they coexist and constrain each other in real time, such as virtual furniture that cannot pass through a real wall.",
        "useVocab": [
          "augmented reality (AR)",
          "virtual reality (VR)",
          "mixed reality (MR)"
        ]
      },
      {
        "q": "Describe the metaverse concept and give two examples of organizations or countries getting involved in it, according to the chapter.",
        "answer": "The metaverse is a virtual universe, enabled by extended reality, holograms, and avatars, in which people connect, work, conduct commerce, and play. The chapter describes how Facebook renamed itself Meta Platforms in late 2021 to signal its push into this space, and how Microsoft added avatar and hologram support to Teams via its Mesh tool. It also mentions that the country of Barbados opened an embassy in the metaverse platform Decentraland that same year, declaring the virtual land sovereign territory.",
        "useVocab": [
          "metaverse",
          "avatar"
        ]
      },
      {
        "q": "What equipment do you minimally need to experience virtual reality, according to the chapter?",
        "answer": "At a minimum you need a VR headset, which adjusts your field of vision as you move your head in different directions, and some kind of hand controller for selecting menu items or interacting with the environment. The hand controller can also double as a specialized tool depending on the game, such as a fishing pole or a light saber. Together these create a fully immersive experience that engages sight, hearing, and sometimes touch.",
        "useVocab": [
          "VR headset",
          "hand controller",
          "immersive"
        ]
      },
      {
        "q": "Explain what 'real holograms' are and how Google's Project Starline uses them.",
        "answer": "Unlike the holograms we see today, real holograms are 3D images with actual depth created from a recording of a light field rather than a traditional camera lens. Panels of lights facing each other emit millions of intersecting light beams that create visible pixels suspended in space, and changing the color of the beams changes the color at each intersection point. Google's Project Starline uses this technology in a booth-based system for holographic video conferencing.",
        "useVocab": [
          "hologram",
          "Project Starline",
          "light field"
        ]
      },
      {
        "q": "What does the chapter predict about the future phases of extended reality apps?",
        "answer": "Right now we are in Phase 1, where extended reality is treated as new and separate from other technology. Phase 2 will bring embedded extended reality as a set of common apps, called Vapps, Mapps, and Aapps, so users won't need to build the app itself, just build inside it. Phase 3 goes further, embedding extended reality into everyday technology like TVs and mirrors, so you could simply ask your TV about a building you're watching and take a virtual tour of it.",
        "useVocab": [
          "embedded extended reality",
          "Vapps/Mapps/Aapps"
        ]
      }
    ]
  },
  {
    "id": 5,
    "topic": "3D Printing",
    "hook": "One Pair of Shoes for Life",
    "summary": [
      {
        "h": "What is it?",
        "de": "3D-Druck ist eine Form der additiven Fertigung: Ein dreidimensionales Objekt wird Schicht für Schicht aus flüssig gemachtem Material aufgebaut, bis es vollständig entstanden ist. Das ist das Gegenteil von subtraktiver Fertigung, bei der man von einem großen Materialblock ausgehend Teile wegschneidet, schnitzt oder fräst (z. B. ein Baumstamm wird zu Brettern). 3D-Druck ist mittlerweile so eng mit additiver Fertigung verknüpft, dass beide Begriffe synonym verwendet werden. Praktisch alles, was physische Form hat, lässt sich heute 3D-drucken – von Zahnbürsten über Häuser bis hin zu lebendem Gewebe (Bioprinting).",
        "en": "3D printing is a form of additive manufacturing: a three-dimensional object is built up layer by layer from material that has been heated into a liquid state, until the object is fully formed. This is the opposite of subtractive manufacturing, where you start with a large block of material and cut, chisel, or whittle parts away (for example, a tree trunk becomes boards). 3D printing has become so closely associated with additive manufacturing that the two terms are now used interchangeably. Almost anything with a physical form can be 3D printed today, from toothbrushes to entire houses to living tissue through bioprinting."
      },
      {
        "h": "How does it work?",
        "de": "Der 3D-Druckprozess besteht aus 4 Schritten: (1) das Objekt auf Papier entwerfen/durchdenken, (2) mit 3D-Modellierungssoftware (z. B. Tinkercad, Blender, Fusion 360) ein digitales CAD-Modell erstellen, das als STL-Datei (Standard Tessellation Language) gespeichert wird, (3) mit Slicing-Software (z. B. Cura, Slic3r) die STL-Datei in G-Code zerlegen – Schicht-für-Schicht-Anweisungen für den Drucker, (4) das Objekt drucken. Es gibt 2 dominante Druckertypen: FDM-Drucker (Fused Deposition Modeling) schmelzen einen festen Filament-Spulendraht über eine beheizte Düse (Extruder); DLP-Drucker (Digital Light Processing) verarbeiten flüssiges Harz (Resin). Harzdrucker sind teurer, aber schneller und liefern eine höhere Druckqualität. Gängige Filamentmaterialien sind PLA, ABS, PETG und Nylon; „exotische“ Materialien reichen von Holz und Metall über biologisch abbaubare und leitfähige Filamente bis zu Materialien, die im Dunkeln leuchten.",
        "en": "The 3D printing process has 4 steps: (1) sketch out and think through the object on paper, (2) use 3D modeling software (e.g. Tinkercad, Blender, Fusion 360) to create a digital CAD model, saved as an STL file (Standard Tessellation Language), (3) use slicing software (e.g. Cura, Slic3r) to convert the STL file into g-code, layer-by-layer instructions for the printer, (4) print the object. There are 2 dominant printer types: FDM (Fused Deposition Modeling) printers melt a solid spool of filament through a heated print head called an extruder; DLP (Digital Light Processing) printers work with liquid resin. Resin printers are more expensive but faster and produce higher-quality finished parts. Common filament materials include PLA, ABS, PETG, and nylon; 'exotic' materials range from wood and metal to biodegradable and conductive filaments, and even glow-in-the-dark material."
      },
      {
        "h": "Example from the book",
        "de": "Das Buch zeigt beeindruckende Beispiele: Die chinesische Firma WinSun druckte ein Haus an einem einzigen Tag sowie eine 5-stöckige Wohnanlage und eine 11.840 Quadratfuß große Villa – alles aus recyceltem Baumaterial und Zement. Das US Marine Corps druckte eine 500 Quadratfuß große Kaserne aus Zement in nur 40 Stunden (statt einer Woche mit 5 Marines). Die Baufirma ICON druckt Häuser in Austin, Texas, die zum Verkauf stehen. Bei der Kleidung sind Danit Peleg (Forbes-„50 einflussreichste Frauen in Tech Europas“ 2018) und Ministry of Supply (35% Materialersparnis bei gestrickten Blazern) Pioniere. Besonders anschaulich ist die Geschichte von Xander Backus, einem 12-Jährigen, der mit seinem Vater eine originalgetreue, fahrtaugliche Lamborghini-Replika druckte – Lamborghini unterstützte das Projekt sogar mit einem geliehenen Aventador S. Im Bereich Bioprinting kann bereits synthetische lebende Haut für Brandverletzungen gedruckt werden (jährlich betrifft das über 11 Millionen Menschen weltweit).",
        "en": "The book gives striking examples: the Chinese company WinSun 3D printed a house in a single day, as well as a 5-story apartment complex and an 11,840-square-foot villa, all using recycled construction material and cement. The US Marine Corps printed a 500-square-foot barracks made of cement in just 40 hours (compared to a week for 5 marines building it conventionally). Construction company ICON is 3D printing homes for sale in Austin, Texas. In clothing, Danit Peleg (named one of Forbes' 50 most influential women in European tech in 2018) and Ministry of Supply (which achieved a 35% reduction in material usage on knit blazers) are pioneers. A particularly vivid story is that of Xander Backus, a 12-year-old who, together with his dad, built an exact, road-ready 3D-printed replica of a Lamborghini, a project Lamborghini itself supported by loaning them an Aventador S. In bioprinting, synthetic living skin can already be printed for burn treatment, a procedure needed by more than 11 million people worldwide every year."
      },
      {
        "h": "Opportunities & Risks",
        "de": "3D-Druck bietet enorme Chancen: individuelle Anpassung (maßgeschneiderte Schuhe, Motorräder, Kleidung), günstigeren und schnelleren Hausbau für bezahlbaren Wohnraum, sowie neue medizinische Möglichkeiten durch Bioprinting (Hautersatz, Prothesen, künftig eventuell Organe). Besonders wichtig ist das Konzept des „3D-Reprinting“ – man recycelt das Filament alter, kaputter Objekte direkt zu Hause, um neue zu drucken (z. B. eine Zahnbürste, eine Kerze oder – die titelgebende Anekdote des Kapitels – ein Paar Schuhe fürs ganze Leben, das mit dem wachsenden Kind immer wieder aus demselben Material neu gedruckt wird). Risiken bzw. offene Fragen: Bioprinting steckt noch in den Kinderschuhen der Forschung, und mit zunehmender Verbreitung von Heim-3D-Druck stellt sich die Frage, was passiert, wenn buchstäblich jeder alles drucken kann (z. B. Ersatzteile, aber potenziell auch bedenkliche Gegenstände).",
        "en": "3D printing offers enormous opportunities: customization (tailor-made shoes, motorcycles, clothing), cheaper and faster home construction for affordable housing, and new medical possibilities through bioprinting (skin grafts, prosthetics, and potentially organs in the future). A particularly important concept is '3D reprinting': recycling the filament from old, broken objects at home to print new ones, for example a toothbrush, a candle, or, the chapter's title anecdote, a pair of shoes for life, reprinted from the same material again and again as a child grows. Risks and open questions remain: bioprinting is still in the early research stages, and as home 3D printing spreads, questions arise about what happens once literally anyone can print anything, from useful replacement parts to potentially concerning objects."
      }
    ],
    "details": [
      "3D-Druck = Additive Fertigung (Schicht für Schicht aufbauen); Gegenteil: subtraktive Fertigung (wegschneiden/wegschnitzen).",
      "4-Schritte-Prozess: Entwurf auf Papier -> 3D-Modellierungssoftware (STL-Datei) -> Slicing-Software (G-Code) -> Drucken.",
      "2 Druckertypen: FDM (Filament, Extruder) vs. DLP (Harz/Resin); Harzdrucker teurer, aber schneller und höhere Qualität.",
      "Materialien: PLA, ABS, PETG, Nylon, TPE, PC, ASA, PVA; Exoten: Holz, Metall, Hanf, biologisch abbaubar, leitfähig, im Dunkeln leuchtend, magnetisch, Keramik.",
      "Software-Empfehlung für Einsteiger: Tinkercad, Blender, 3D Slash, SketchUp; für Profis: Autodesk-Suite (Fusion 360, Maya, 3ds Max, Inventor).",
      "Häuser: WinSun (China) – Haus an 1 Tag, 5-stöckige Wohnanlage, 11.840 sq ft Villa; US Marine Corps – 500 sq ft Kaserne in 40 Std.; ICON – Häuser in Austin, TX; Mario Cucinella Architects/WASP – Häuser aus Erde/Reishülsen.",
      "Kleidung: Danit Peleg (Pionierin, Forbes 2018), Ministry of Supply (35% weniger Materialverbrauch bei Blazern), Julia Daviy, Viptie 3D (Krawatten), Zellerfeld/Futurecraft 4D (Schuhe).",
      "Essen: Food Ink (London, druckt ganzes Menü inkl. Möbel), Beehex (Pizza, NASA-Interesse), Open-Meals „Sushi Singularity“ (DNA-basiert personalisiert), Novameat/Redefine Meat (pflanzliches Fleisch).",
      "Lamborghini-Replika: Xander Backus (12 Jahre) und Vater Sterling; Lamborghini lieh ihnen einen Aventador S für 2 Wochen.",
      "Bioprinting: Bioink + Scaffold + lebende Zellen; synthetische Haut für Brandopfer (>11 Mio./Jahr); auch Brustimplantate, Knochengewebe, Ohren/Nasen, Zähne; e-NABLE druckt Open-Source-Handprothesen.",
      "2018: Forscher der University of Minnesota druckten biologische Sensoren direkt auf menschliche Haut.",
      "3D-Reprinting/Recycling: ReDeTech ProtoCycler V3 recycelt altes Filament zu Hause; Konzept „ein Paar Schuhe fürs Leben“."
    ],
    "vocab": [
      {
        "en": "additive manufacturing",
        "de": "additive Fertigung",
        "note": "building an object by adding material layer by layer"
      },
      {
        "en": "subtractive manufacturing",
        "de": "subtraktive Fertigung",
        "note": "making something smaller by cutting/carving material away"
      },
      {
        "en": "filament",
        "de": "Filament (Druckdraht)",
        "note": "solid spool of material used in FDM printers"
      },
      {
        "en": "resin",
        "de": "Harz",
        "note": "liquid material used in DLP/resin printers"
      },
      {
        "en": "FDM (Fused Deposition Modeling)",
        "de": "Schmelzschichtung",
        "note": "most common 3D printer type, uses filament and an extruder"
      },
      {
        "en": "DLP (Digital Light Processing)",
        "de": "digitale Lichtverarbeitung",
        "note": "resin printer type, also called stereolithography"
      },
      {
        "en": "extruder",
        "de": "Extruder",
        "note": "heated print head that melts and deposits filament"
      },
      {
        "en": "STL file",
        "de": "STL-Datei",
        "note": "Standard Tessellation Language file describing an object's surface geometry"
      },
      {
        "en": "slicing software",
        "de": "Slicing-Software",
        "note": "converts an STL file into g-code, layer-by-layer print instructions"
      },
      {
        "en": "g-code",
        "de": "G-Code",
        "note": "CNC instruction set telling the 3D printer how to print layer by layer"
      },
      {
        "en": "build area",
        "de": "Bauraum",
        "note": "the maximum size of object a 3D printer can print"
      },
      {
        "en": "bioprinting",
        "de": "Bioprinting (biologisches Drucken)",
        "note": "3D printing with bioink and biomaterials to replicate tissue or organs"
      },
      {
        "en": "bioink",
        "de": "Biotinte",
        "note": "material combined with living cells used in bioprinting"
      },
      {
        "en": "scaffold",
        "de": "Gerüststruktur",
        "note": "polymeric structure providing support for cell attachment in bioprinting"
      },
      {
        "en": "skin graft",
        "de": "Hauttransplantat",
        "note": "used to treat burn wounds; can now be 3D bioprinted"
      },
      {
        "en": "prosthetic",
        "de": "Prothese",
        "note": "e.g. 3D-printed hands via the open-source e-NABLE community"
      },
      {
        "en": "3D reprinting",
        "de": "3D-Wiederverdrucken",
        "note": "recycling filament from old objects to print new ones at home"
      },
      {
        "en": "biodegradable",
        "de": "biologisch abbaubar"
      },
      {
        "en": "custom-made / customization",
        "de": "maßgeschneidert / Individualisierung",
        "note": "e.g. designing a motorcycle to fit your exact body"
      },
      {
        "en": "manifold / water tight (model)",
        "de": "wasserdicht/geschlossen (Modell)",
        "note": "a solid model with walls that have thickness, required for 3D printing"
      },
      {
        "en": "polygon modeling software",
        "de": "Polygon-Modellierungssoftware",
        "note": "creates zero-thickness walls, used for games/graphics, needs extra steps for 3D printing"
      },
      {
        "en": "affordable housing",
        "de": "bezahlbarer Wohnraum"
      },
      {
        "en": "fast fashion",
        "de": "schnelllebige Modeindustrie",
        "note": "problem 3D-printed, biodegradable clothing could help address"
      },
      {
        "en": "spool",
        "de": "Filamentspule"
      }
    ],
    "mc": [
      {
        "q": "According to the chapter, what is the relationship between 3D printing and additive manufacturing?",
        "options": [
          "3D printing is a subset of additive manufacturing, and the terms are now used interchangeably",
          "Additive manufacturing is a newer, unrelated technology",
          "3D printing is a form of subtractive manufacturing"
        ],
        "correct": 0,
        "why": "The chapter states that 3D printing is a subset of additive manufacturing, and the two terms are used interchangeably today (a Wikipedia search for additive manufacturing redirects to 3D printing)."
      },
      {
        "q": "What is the key difference between FDM and DLP 3D printers?",
        "options": [
          "FDM printers use resin, DLP printers use filament",
          "FDM printers use filament, DLP printers use liquid resin",
          "There is no difference; both terms describe the same technology"
        ],
        "correct": 1,
        "why": "FDM (Fused Deposition Modeling) printers melt and extrude solid filament, while DLP (Digital Light Processing) printers work with liquid resin."
      },
      {
        "q": "What file format describes the surface geometry of a 3D object after modeling, before slicing?",
        "options": [
          "STL file",
          "g-code",
          "MP4 file"
        ],
        "correct": 0,
        "why": "An STL (Standard Tessellation Language) file is the digital file produced by 3D modeling software that describes an object's surface geometry."
      },
      {
        "q": "Which Chinese company 3D printed a house in just one day, as well as a 5-story apartment complex?",
        "options": [
          "ICON",
          "WinSun",
          "WASP"
        ],
        "correct": 1,
        "why": "WinSun made multiple achievements in 3D-printed construction, including a house built in a single day and a 5-story apartment complex, using recycled and waste materials."
      },
      {
        "q": "What does 'bioprinting' use to replicate tissues such as skin, bone, and organs?",
        "options": [
          "Standard PLA filament only",
          "Bioink and other biomaterials, combined with living cells",
          "Recycled plastic bottles"
        ],
        "correct": 1,
        "why": "Bioprinting combines 3D printing with bioink and biomaterials, depositing living cells within a supportive scaffold to grow replacement tissue."
      }
    ],
    "recall": [
      {
        "q": "Explain the 4 steps of the 3D printing process, from idea to finished object.",
        "answer": "First, you ideate and design the object on paper. Second, you use 3D modeling software to create a digital CAD model, producing an STL file that describes the object's surface geometry. Third, slicing software converts the STL file into g-code, a set of layer-by-layer instructions. Fourth, the 3D printer prints the object using the chosen filament or resin.",
        "useVocab": [
          "STL file",
          "slicing software",
          "g-code",
          "filament"
        ]
      },
      {
        "q": "Describe the WinSun and US Marine Corps 3D-printed housing examples from the book.",
        "answer": "The Chinese company WinSun 3D printed an entire house in just one day, and also produced a 5-story apartment complex and an 11,840-square-foot villa, all using industrial waste, recycled construction material, and cement. The US Marine Corps 3D printed a 500-square-foot barracks made entirely of cement in only 40 hours, a task that would normally take 5 marines a full week using wood.",
        "useVocab": [
          "additive manufacturing",
          "affordable housing"
        ]
      },
      {
        "q": "What is bioprinting, and what medical example does the book give?",
        "answer": "Bioprinting is the use of 3D printing technologies with bioink and other biomaterials to replicate body parts such as bones, tissue, tendons, skin, blood vessels, and organs. The book's main example is 3D-printed synthetic living skin used in burn treatment, where a scaffold is printed together with living cells and later matured for use as a skin graft, relevant since more than 11 million people need burn-related medical procedures every year.",
        "useVocab": [
          "bioprinting",
          "bioink",
          "scaffold",
          "skin graft"
        ]
      },
      {
        "q": "What is 3D reprinting, and why does the book connect it to sustainability?",
        "answer": "3D reprinting means recycling the filament or resin from old, broken, or worn-out 3D-printed items to print new ones at home, instead of relying only on large-scale municipal recycling. The book gives examples like toothbrushes, candles, and especially a pair of shoes reprinted from the same material as a child grows, arguing this brings reduce-reuse-recycle down to the personal, 'small r' level.",
        "useVocab": [
          "3D reprinting",
          "biodegradable"
        ]
      },
      {
        "q": "Give an example of how 3D printing enables customization, according to the chapter.",
        "answer": "The book describes designing and printing a motorcycle or bicycle to fit a person's exact body style, with a perfectly fitted seat, handlebar distance, and pedal placement, plus personal choices of color, frame style, and accessories. This kind of custom-made product would be far more expensive or impossible with traditional subtractive manufacturing.",
        "useVocab": [
          "custom-made / customization",
          "subtractive manufacturing"
        ]
      }
    ]
  },
  {
    "id": 6,
    "topic": "Autonomous Vehicles",
    "hook": "The Death of the Driver's License",
    "summary": [
      {
        "h": "What is it?",
        "de": "Ein autonomes Fahrzeug ist ein Fahrzeug, das sich mithilfe von Sensoren, Software und verschiedenen Fahrassistenzsystemen ohne menschliches Zutun selbst steuern kann. Die Society of Automotive Engineers (SAE) definiert 6 Autonomiestufen von 0 (keine Automatisierung) bis 5 (vollständig autonom unter allen Bedingungen). In den Stufen 0–2 hat der Mensch stets die volle Kontrolle; ab Stufe 3–4 kann das Auto unter bestimmten Bedingungen selbst fahren, muss aber teilweise die Kontrolle zurückgeben; Stufe 5 benötigt keinen Fahrer mehr. Der Auslöser des Kapitels: Laut der US-Verkehrssicherheitsbehörde NHTSA werden 94% aller Autounfälle in den USA durch menschliches Versagen verursacht.",
        "en": "An autonomous vehicle is a vehicle that can guide itself without human conduction, using sensors, software, and a variety of driver-assistance technologies. The Society of Automotive Engineers (SAE) defines 6 levels of autonomy, from 0 (no automation) to 5 (fully autonomous under all conditions). At levels 0-2, the human is always in full control; at levels 3-4, the car can drive itself under certain limited conditions but may still need to hand control back to the driver; level 5 requires no driver at all. The chapter's hook is striking: according to the US National Highway Traffic Safety Administration (NHTSA), 94% of all automobile accidents in the US are caused by human error."
      },
      {
        "h": "How does it work?",
        "de": "Das Buch beschreibt autonome Fahrzeuge als Kombination mehrerer Technologien der 4. industriellen Revolution: AV = KI (künstliche Intelligenz) + Sensortechnologien + Kommunikationstechnologien + IoT (+ Batterie). KI ermöglicht dem Fahrzeug, aus Millionen simulierter Meilen zu „lernen“ (vorab trainiert) und kontinuierlich weiterzulernen. Zum „Sehen“ nutzen Fahrzeuge eine Kombination aus Sonar, Radar und Lidar sowie Kameras: Radar erkennt Objekte bis zu 60 Meilen entfernt (gut für Routenplanung), Lidar ist bei nahen Objekten viel präziser. Waymo setzt hauptsächlich auf Lidar, Tesla auf Sonar und Radar (12 Ultraschallsensoren, Erkennung bis 500 Fuß), Rivian kombiniert 12 Kameras, 12 Ultraschallsensoren und 5 Radareinheiten. Über Kommunikationstechnologien sollen Fahrzeuge künftig untereinander kommunizieren, um z. B. gemeinsam durch Kreuzungen zu fahren oder sich gegenseitig vor Schlaglöchern zu warnen.",
        "en": "The book describes autonomous vehicles as a combination of several 4th industrial revolution technologies: AV = AI (artificial intelligence) + sensing technologies + communications technologies + IoT (+ battery). AI lets the vehicle 'learn' from millions of simulated miles before you ever buy it (preloaded intelligence), and it continues learning afterward. To 'see,' vehicles use a combination of sonar, radar, and Lidar plus cameras: radar can detect objects up to 60 miles away (useful for route planning), while Lidar is far more accurate for identifying nearby objects. Waymo relies mainly on Lidar, Tesla mainly on sonar and radar (12 ultrasonic sensor units detecting objects up to 500 feet away), and Rivian combines 12 exterior cameras, 12 ultrasonic sensors, and 5 radar units. Through communications technologies, vehicles are expected to eventually talk to each other, for example to move through intersections together or warn each other about potholes."
      },
      {
        "h": "Example from the book",
        "de": "Konkrete Zahlen aus dem Buch: 2022 starben 42.795 Menschen in den USA bei Autounfällen, jährlich passieren über 6 Millionen Unfälle, und 2021 starben 13.384 Menschen bei alkoholbedingten Unfällen (im Schnitt alle 39 Minuten ein Todesfall). Als Beispiel für die Unternehmenslandschaft nennt das Buch etablierte Autohersteller (Toyota, VW, Ford u.a.), Robotaxi-Anbieter (Waymo, Cruise, Motional, Zoox, Aurora) und Anbieter für autonome Fernlastwagen (Kodiak, Embark, TuSimple), die auf der Strecke Denver–Salt Lake City ein Modell vorschlagen: menschliche Fahrer bringen den Anhänger nur bis zu einem Umschlagpunkt außerhalb der Stadt, der autonome Lkw übernimmt nur die Autobahnstrecke. China wird als besonderer Akteur genannt (Pony.ai, AutoX, WeRide, Baidu, DidiChuxing), der bisher fast ausschließlich im eigenen Land aktiv ist.",
        "en": "The book gives concrete figures: in 2022, 42,795 people died in US automobile accidents, over 6 million accidents happen each year, and in 2021, 13,384 people died in drunk-driving crashes (on average, one fatality every 39 minutes). As an example of the business landscape, the book lists established carmakers (Toyota, Volkswagen, Ford, and others), robotaxi providers (Waymo, Cruise, Motional, Zoox, Aurora), and autonomous long-haul trucking companies (Kodiak, Embark, TuSimple), which propose a hub model on the Denver-to-Salt-Lake-City route: human drivers only handle the trailer to a transportation hub outside each city, while the autonomous truck only drives the highway stretch in between. China is noted as a distinct player (Pony.ai, AutoX, WeRide, Baidu, DidiChuxing), operating almost entirely within its own borders so far."
      },
      {
        "h": "Opportunities & Risks",
        "de": "Chancen: drastisch weniger Unfälle und Tote (da 94% der Unfälle menschliches Versagen sind), neue Mobilitätsformen (geteilte statt eigene Fahrzeuge, mobile Einkaufsfahrzeuge, Robotaxis), und weitreichende Veränderungen des Alltags – vom Wegfall des Führerscheins bis zum Verschwinden von Verkehrsschildern, Ampeln und Fahrspuren, da Fahrzeuge sich künftig direkt untereinander abstimmen. Risiken/Nebeneffekte: Arbeitsplatzverlust bei Berufsfahrern (Taxi, Lkw, Lieferdienste), negative Auswirkungen auf Versicherungsbranche, Autowerkstätten und Abschleppdienste (weil weniger Unfälle passieren) sowie – ein besonders eindrückliches „unbeabsichtigtes“ Risiko – weniger Organspenden, da viele Spenderorgane bisher von Unfallopfern stammen.",
        "en": "Opportunities: drastically fewer accidents and deaths (since 94% of accidents are caused by human error), new forms of mobility (shared rather than owned vehicles, mobile shopping vehicles, robotaxis), and far-reaching everyday changes, from the end of the driver's license to the disappearance of stop signs, traffic lights, and lanes, as vehicles coordinate with each other directly. Risks and side effects: job losses among professional drivers (taxi, truck, delivery), negative impacts on the auto insurance industry, body shops, and tow truck businesses (because there will be fewer accidents), and one particularly striking unintended consequence, fewer organ donations, since many donor organs currently come from accident victims."
      }
    ],
    "details": [
      "NHTSA-Zahl: 94% aller US-Autounfälle werden durch menschliches Versagen verursacht.",
      "2022: 42.795 Verkehrstote in den USA; über 6 Mio. Unfälle/Jahr; 2021: 13.384 alkoholbedingte Todesfälle (1 alle 39 Min.).",
      "SAE-6-Stufen-Modell: 0 keine Automatisierung, 1 Lenken ODER Bremsen/Beschleunigen, 2 beides gleichzeitig, 3 selbstfahrend unter Bedingungen (Übernahme evtl. nötig), 4 wie 3 aber ohne Übernahmepflicht, 5 vollständig autonom überall.",
      "Formel: AV = KI (Artificial Intelligence) + Sensortechnologien (ST) + Kommunikationstechnologien (CT) + IoT (+ Batterie).",
      "Sehen: Sonar, Radar, Lidar, Kameras. Radar erkennt bis 60 Meilen (Routenplanung); Lidar präziser bei nahen Objekten.",
      "Firmenbeispiele Sensorik: Waymo (v.a. Lidar), Tesla (Sonar+Radar, 12 Ultraschallsensoren, bis 500 ft), Rivian (12 Kameras, 12 Ultraschallsensoren, 5 Radare), Aurora (Radar+Lidar).",
      "Konsumenten-AV-Hersteller: Tesla, Apple, Kia-Hyundai, Ford, Audi, Huawei, Rivian.",
      "Robotaxis: Waymo (bekanntester), Cruise (Honda/GM), Argo (Ford/VW), Motional (Hyundai), Zoox (Amazon), Aurora.",
      "Autonome Fernlastwagen: Kodiak, Embark, TuSimple, Waymo, Aurora; Hub-Modell: autonom nur auf der Autobahn (Beispiel Denver–Salt Lake City).",
      "China als eigener Player: Pony.ai, AutoX, WeRide, Baidu, DidiChuxing – bisher primär im Inland aktiv.",
      "Negative Nebeneffekte: Jobverlust bei Berufsfahrern; Belastung für Versicherungen/Werkstätten/Abschleppdienste; weniger Organspenden von Unfallopfern.",
      "Zukunftsvision: Ende von Führerschein, Verkehrsschildern, Ampeln, Fahrspuren, Rückspiegeln, Scheibenwischern, Scheinwerfern; Fahrzeug bezahlt Maut/Parken via Kryptowährung.",
      "Wortherkunft: „car“ kommt vom keltischen Wort „carrus“ für Karren/Wagen."
    ],
    "vocab": [
      {
        "en": "autonomous vehicle (AV)",
        "de": "autonomes Fahrzeug",
        "note": "guides itself without human conduction using sensors, software, and driver-assistance technologies"
      },
      {
        "en": "driver-assistance technology",
        "de": "Fahrassistenztechnologie",
        "note": "e.g. adaptive cruise control, remote parking, lane-departure warning"
      },
      {
        "en": "level of autonomy",
        "de": "Autonomiestufe",
        "note": "SAE scale from Level 0 (no automation) to Level 5 (fully autonomous)"
      },
      {
        "en": "adaptive cruise control",
        "de": "adaptiver Tempomat",
        "note": "keeps distance from the car ahead automatically"
      },
      {
        "en": "lane-departure warning",
        "de": "Spurverlassenswarnung"
      },
      {
        "en": "remote parking",
        "de": "Fernparken",
        "note": "car parks itself while you are not inside it"
      },
      {
        "en": "human error",
        "de": "menschliches Versagen",
        "note": "cause of 94% of US car accidents per NHTSA"
      },
      {
        "en": "sensing technologies (ST)",
        "de": "Sensortechnologien"
      },
      {
        "en": "communications technologies (CT)",
        "de": "Kommunikationstechnologien"
      },
      {
        "en": "sonar",
        "de": "Sonar",
        "note": "used e.g. by Tesla's ultrasonic sensors"
      },
      {
        "en": "radar",
        "de": "Radar",
        "note": "detects objects up to 60 miles away, useful for route planning"
      },
      {
        "en": "Lidar",
        "de": "Lidar",
        "note": "highly accurate for identifying close objects; Waymo's main sensing technology"
      },
      {
        "en": "vehicle-to-vehicle communication",
        "de": "Fahrzeug-zu-Fahrzeug-Kommunikation",
        "note": "vehicles share what they detect, e.g. a pothole, with each other"
      },
      {
        "en": "robotaxi",
        "de": "Robotertaxi",
        "note": "autonomous vehicle used as a taxicab, e.g. Waymo"
      },
      {
        "en": "long-haul trucking",
        "de": "Fernverkehr (LKW)",
        "note": "autonomous trucks may operate highway-only, connecting to human-driven trucks at hubs"
      },
      {
        "en": "transportation hub",
        "de": "Verkehrsknotenpunkt / Umschlagpunkt",
        "note": "point where a trailer switches from human-driven to autonomous truck"
      },
      {
        "en": "preloaded intelligence",
        "de": "vorinstallierte Intelligenz",
        "note": "AI in the car has already 'driven' millions of simulated miles before purchase"
      },
      {
        "en": "continual learning",
        "de": "fortlaufendes Lernen",
        "note": "the vehicle's AI keeps learning after purchase, e.g. about your neighborhood"
      },
      {
        "en": "collaborative decision making",
        "de": "gemeinschaftliche Entscheidungsfindung",
        "note": "autonomous vehicles communicate to decide what's best for all vehicles nearby"
      },
      {
        "en": "organ donation",
        "de": "Organspende",
        "note": "unintended consequence: fewer accidents may mean fewer donor organs"
      },
      {
        "en": "rideshare",
        "de": "Mitfahrdienst",
        "note": "e.g. Uber, Lyft, expected to be disrupted by driverless vehicles"
      },
      {
        "en": "toll road",
        "de": "Mautstraße",
        "note": "future autonomous vehicles may pay tolls automatically via cryptocurrency"
      }
    ],
    "mc": [
      {
        "q": "According to the NHTSA figure cited in the chapter, what percentage of US automobile accidents are caused by human error?",
        "options": [
          "74%",
          "84%",
          "94%"
        ],
        "correct": 2,
        "why": "The chapter states that 94% of all automobile accidents in the US are caused by human error, including speeding, distraction, and tailgating."
      },
      {
        "q": "At which SAE level can the car drive itself under certain limited conditions but may still require the driver to take back control?",
        "options": [
          "Level 1",
          "Level 3",
          "Level 5"
        ],
        "correct": 1,
        "why": "Level 3 allows the car to drive itself under limited conditions, but the driver may still be required to take control back; Level 4 removes that requirement, and Level 5 needs no driver at all."
      },
      {
        "q": "Which sensing technology does Waymo rely on as its main 'seeing' technology, according to the chapter?",
        "options": [
          "Sonar",
          "Lidar",
          "Infrared cameras only"
        ],
        "correct": 1,
        "why": "The chapter states that Waymo uses Lidar as its main seeing technology, supplemented by radar for rough weather conditions."
      },
      {
        "q": "What is the formula the book uses to describe autonomous vehicles as a combination of technologies?",
        "options": [
          "AV = AI + ST + CT + IoT (+Ba)",
          "AV = IoT + Blockchain + AI",
          "AV = 5G + VR + AI"
        ],
        "correct": 0,
        "why": "The book presents autonomous vehicles as a combination of artificial intelligence (AI), sensing technologies (ST), communications technologies (CT), IoT, and (optionally) battery (Ba)."
      },
      {
        "q": "According to the chapter, which unintended consequence could result from autonomous vehicles reducing the number of accidents?",
        "options": [
          "An increase in traffic congestion",
          "Fewer organ donations, since many donor organs come from accident victims",
          "Higher fuel prices"
        ],
        "correct": 1,
        "why": "The book explicitly names fewer organ donations as an unintended consequence, since a majority of donated organs currently come from automobile accident victims."
      }
    ],
    "recall": [
      {
        "q": "Explain the SAE's 6 levels of autonomy in your own words.",
        "answer": "Level 0 has no automation at all, the driver does everything. Levels 1 and 2 add driver-assistance for steering or braking/accelerating, first separately then together, but the human is always in control. Levels 3 and 4 allow the car to drive itself under limited conditions, with Level 3 sometimes requiring the driver to take back control and Level 4 not requiring it. Level 5 is fully autonomous everywhere, under all conditions, with no driver needed at all.",
        "useVocab": [
          "level of autonomy",
          "human error"
        ]
      },
      {
        "q": "How do sonar, radar, and Lidar differ in what they are best used for in autonomous vehicles?",
        "answer": "Radar can detect objects up to 60 miles away, which is useful for anticipating traffic congestion and planning routes, but it is less precise about what an object actually is. Lidar has much higher accuracy for identifying nearby objects, such as telling apart a signpost, a pedestrian, and a tree. Sonar, used heavily by Tesla via ultrasonic sensors, helps detect closer objects as well. Most manufacturers combine several of these technologies along with cameras.",
        "useVocab": [
          "radar",
          "Lidar",
          "sonar"
        ]
      },
      {
        "q": "Describe the hub model that some companies propose for autonomous long-haul trucking, using the Denver-Salt Lake City example.",
        "answer": "Human-driven trucks would carry a trailer from Denver to a transportation hub just outside the city. There, the trailer would be connected to an autonomous truck that drives the entire highway stretch to a hub near Salt Lake City. At that second hub, a human-driven truck would take over again for the final stretch into the city. This way, autonomous driving only happens on highways, the easiest and safest environment for it.",
        "useVocab": [
          "long-haul trucking",
          "transportation hub"
        ]
      },
      {
        "q": "What negative side effects of widespread autonomous vehicle adoption does the book mention?",
        "answer": "The book mentions job losses for professional drivers such as taxi, long-haul truck, and delivery drivers. It also notes that because autonomous vehicles will reduce accidents, industries like auto insurance, auto body shops, and tow trucking will be adversely affected. A particularly striking unintended consequence is a likely decline in organ donations, since many donor organs currently come from car accident victims.",
        "useVocab": [
          "organ donation"
        ]
      },
      {
        "q": "According to the book's vision of the future, why might stop signs, traffic lights, and lanes eventually disappear?",
        "answer": "Once vehicles are fully autonomous and use vehicle-to-vehicle communication, they will be able to negotiate directly with each other about who goes first at an intersection and how to position themselves on the road, without needing physical signs, lights, or painted lanes to coordinate human drivers. Lane configurations could even change dynamically depending on the time of day and traffic direction.",
        "useVocab": [
          "vehicle-to-vehicle communication",
          "collaborative decision making"
        ]
      }
    ]
  },
  {
    "id": 7,
    "topic": "Drones",
    "hook": "Male Bee, Bagpipe, Bladder Fiddle, or Flying Vehicle?",
    "summary": [
      {
        "h": "What is it?",
        "de": "Eine Drohne ist im weitesten Sinne ein Flugfahrzeug ohne Piloten an Bord, das ferngesteuert oder autonom fliegt. Man unterscheidet unbemannte Luftfahrzeuge (UAV/RPA – ferngesteuert) von autonomen Drohnen (mit KI, Sensoren und Software, die selbstständig fliegen). Zur Einordnung wichtig: Starrflügler (z. B. Verkehrsflugzeuge) erzeugen Vorwärtsschub, Drehflügler (z. B. Helikopter) erzeugen vertikalen Schub; ein Multicopter ist ein Drehflügler mit mehreren Motoren/Rotoren – die meisten Verbraucherdrohnen sind Quadcopter mit 4 Rotoren. Konsumentendrohnen dienen Freizeit, Fotografie und einfachen geschäftlichen Zwecken; kommerzielle Drohnen reichen von kleinen bis zu tonnenschweren Militärdrohnen.",
        "en": "In the broadest sense, a drone is a flying vehicle without a pilot on board, flown either remotely or autonomously. The book distinguishes unmanned aerial vehicles (UAVs, also called remotely piloted aircraft/RPA) from autonomous drones, which use AI, sensors, and software to fly themselves. Some key aviation terms: fixed-wing aircraft (like commercial airliners) generate forward thrust, while rotary-wing aircraft (like helicopters) generate vertical thrust; a multicopter is a rotary-wing aircraft with multiple engines/rotors, and most consumer drones are quadcopters with 4 rotors. Consumer drones are used for leisure, photography, and simple business tasks, while commercial drones range from small delivery drones to multi-ton military drones."
      },
      {
        "h": "How does it work?",
        "de": "Wie autonome Fahrzeuge sind Drohnen eine Kombination aus KI, Sensortechnologien, Kommunikationstechnologien und IoT (+ Batterie): D = KI + ST + KT + IoT (+ Ba). Für das „Sehen“ nutzen Drohnen Sonar, Radar und Lidar sowie Kameras; manche Drohnen (z. B. beim US Forest Service zur Waldbrand-Erkennung) nutzen sogar „Riech“-Sensoren, die Rauch/Chemikalien in der Luft erkennen. Die vollständig autonome Drohne steht laut Buch vor zwei besonderen Herausforderungen: der „zusätzlichen Dimension“ (Drohnen müssen im Gegensatz zu Autos in 3 statt 2 Dimensionen navigieren und auch die Höhe von Gebäuden/Bäumen kartieren) und der „zirkulären Herausforderung“ (mehr KI-Fähigkeiten bedeuten mehr Gewicht, was mehr Batteriekapazität erfordert, was wiederum mehr Gewicht bedeutet).",
        "en": "Like autonomous vehicles, drones are a combination of AI, sensing technologies, communications technologies, and IoT (+ battery): D = AI + ST + CT + IoT (+Ba). For 'seeing,' drones use sonar, radar, and Lidar as well as cameras; some drones, such as those used by the US Forest Service for wildfire detection, even use 'smelling' sensors that detect smoke and chemicals in the air. According to the book, fully autonomous drones face two special challenges: the 'added-dimension' challenge (unlike cars, drones must navigate in three dimensions instead of two, and maps must also capture the height of buildings and trees) and the 'circular' challenge (adding more AI capability adds weight, which requires more battery capacity, which adds more weight, and so on)."
      },
      {
        "h": "Example from the book",
        "de": "Das Buch nennt zahlreiche Anwendungen: Zipline liefert Blut und medizinische Güter per Drohne, Kroger arbeitet mit Drone Express für Lebensmittellieferungen zusammen, UPS und FedEx haben von der FAA die Genehmigung erhalten, ganze Drohnenflotten zu betreiben, und Amazon PrimeAir soll Pakete bis 5 Pfund in unter 30 Minuten liefern. Bei Konsumentendrohnen gilt die FAA Small UAS Rule (Part 107): Man braucht ein Remote Pilot Certificate, muss die Drohne registrieren, mindestens 16 Jahre alt sein und Englisch verstehen können (gilt ab 8,8 Unzen Gewicht); außerdem darf man nur bis 400 Fuß hoch fliegen, muss Sichtkontakt halten und darf nicht über Menschenmengen oder Sportstadien fliegen. Bei „Flugautos“ (eVTOL – elektrischer Senkrechtstart und -landung) nennt das Buch Firmen wie Joby Aviation (übernahm Ubers Flugtaxi-Sparte), Airbus (City Airbus NexGen) und Hyundai/Supernal.",
        "en": "The book lists many applications: Zipline delivers blood and medical supplies by drone, Kroger has partnered with Drone Express for grocery delivery, UPS and FedEx have received FAA authorization to operate full drone fleets, and Amazon's PrimeAir aims to deliver packages up to 5 pounds in under 30 minutes. For consumer drones, the FAA's Small UAS Rule (Part 107) applies: you need a Remote Pilot Certificate, must register the drone, must be at least 16 years old, and must understand English (applies to drones weighing 8.8 ounces or more); you also must fly at or below 400 feet, keep the drone within sight, and avoid flying over crowds or stadiums. For 'flying cars' (eVTOL, electric vertical take-off and landing), the book names companies such as Joby Aviation (which acquired Uber's flying-taxi division), Airbus (City Airbus NexGen), and Hyundai/Supernal."
      },
      {
        "h": "Opportunities & Risks",
        "de": "Chancen: schnellere, umweltfreundlichere Lieferungen (weniger Straßenverkehr, elektrischer Antrieb), neue Einsatzgebiete für Ersthelfer, Landwirtschaft (Feldkartierung, Ernteüberwachung) und Immobilienwirtschaft, sowie – kombiniert mit autonomen Lieferwagen – ganz neue, effizientere Lieferketten (das Buch nennt das ein 3-dimensionales statt 2-dimensionales Optimierungsproblem). Auch alltägliche Einsätze wie Innendrohnen zur Überwachung des eigenen Zuhauses (z. B. Ring Always Home Cam) oder künftige Flugtaxis für den Pendlerverkehr werden vorgestellt. Risiken: strenge FAA-Regeln existieren aus gutem Grund (Sicherheit im Luftraum, Privatsphäre, Verbot über Menschenmengen); mit zunehmender Zahl von Drohnen und Flugtaxis am Himmel wird laut Buch erhebliche neue Gesetzgebung nötig sein, ähnlich wie einst bei der Einführung des Autoverkehrs.",
        "en": "Opportunities: faster, more environmentally friendly deliveries (less road traffic, electric propulsion), new applications for first responders, agriculture (field mapping, crop monitoring), and real estate, and, combined with autonomous delivery vehicles, entirely new and more efficient supply chains, which the book describes as turning a 2-dimensional optimization problem into a 3-dimensional one. Everyday uses are also introduced, such as indoor drones for home monitoring (e.g. the Ring Always Home Cam) and future flying taxis for commuting. Risks: strict FAA rules exist for good reason (airspace safety, privacy, prohibitions on flying over crowds); as the number of drones and flying taxis in the sky grows, the book expects significant new legislation will be needed, much like when car traffic was first introduced."
      }
    ],
    "details": [
      "Definition: Drohne = Flugvehikel ohne Pilot an Bord; UAV/RPA = ferngesteuert; autonome Drohne = fliegt selbstständig mit KI.",
      "Starrflügler (Vorwärtsschub) vs. Drehflügler (vertikaler Schub, z. B. Helikopter); Multicopter = Drehflügler mit mehreren Rotoren.",
      "Konsumentendrohnen meist Quadcopter (4 Rotoren); Flugzeit 15 Min. bis 1 Std.; Geschwindigkeit ca. 45-70 mph.",
      "FAA Part 107 (Small UAS Rule): Remote Pilot Certificate nötig, Registrierung, Mindestalter 16, Englischkenntnisse; gilt ab 8,8 Unzen Gewicht.",
      "Flugregeln: max. 400 Fuß Höhe, Sichtkontakt halten, kein Flug über Menschenmengen/Stadien/Sperrzonen, nicht unter Alkoholeinfluss.",
      "Lieferdrohnen: Zipline (Blut/Medizin), Kroger + Drone Express (Lebensmittel), UPS und FedEx (FAA-Flottengenehmigung), Amazon PrimeAir (bis 5 Pfund, unter 30 Min.).",
      "Weitere Einsätze: Ersthelfer/Polizei, Landwirtschaft (Feldkartierung/Besprühen), Immobilien (Luftaufnahmen).",
      "Formel: D = KI (AI) + Sensortechnologien (ST) + Kommunikationstechnologien (CT) + IoT (+ Batterie) – analog zu autonomen Fahrzeugen.",
      "2 Herausforderungen für autonome Drohnen: „zusätzliche Dimension“ (3D-Navigation/-Kartierung) und „zirkuläre Herausforderung“ (mehr KI = mehr Gewicht = mehr Batterie = mehr Gewicht).",
      "eVTOL (elektrischer Senkrechtstart/-landung) = Flugtaxis/Flugautos; Firmen: Toyota, Joby Aviation (kaufte Uber Elevate), Hyundai/Supernal, Airbus (City Airbus NexGen), Boeing, SkyDrive.",
      "US Forest Service nutzt Drohnen mit „Riech“-Sensoren zur Waldbrand-Früherkennung (Rauch/Chemikalien in der Luft).",
      "Zukunftsvisionen: Innendrohnen (Ring Always Home Cam), Nano-/Mini-Drohnen, Drohnen für Laubblasen/Fensterputzen/Hausanstrich, überfüllter Luftraum erfordert neue Gesetze, Landepads für Flugtaxis."
    ],
    "vocab": [
      {
        "en": "drone",
        "de": "Drohne",
        "note": "a flying vehicle without a pilot on board, remotely piloted or autonomous"
      },
      {
        "en": "unmanned aerial vehicle (UAV)",
        "de": "unbemanntes Luftfahrzeug",
        "note": "aircraft without pilot/crew/passengers, remotely piloted"
      },
      {
        "en": "remotely piloted aircraft (RPA)",
        "de": "ferngesteuertes Luftfahrzeug",
        "note": "used interchangeably with UAV"
      },
      {
        "en": "autonomous drone",
        "de": "autonome Drohne",
        "note": "flies itself using AI, sensors, and software, no human conduction"
      },
      {
        "en": "fixed-wing aircraft",
        "de": "Starrflügler",
        "note": "generates forward thrust, e.g. commercial airliners"
      },
      {
        "en": "rotary-wing aircraft",
        "de": "Drehflügler",
        "note": "generates vertical thrust, e.g. helicopters"
      },
      {
        "en": "multicopter",
        "de": "Multicopter",
        "note": "rotary-wing aircraft with multiple engines/rotors, each spinning its own blade"
      },
      {
        "en": "quadcopter",
        "de": "Quadcopter",
        "note": "drone with 4 rotary blades; most common type of consumer drone"
      },
      {
        "en": "Remote Pilot Certificate",
        "de": "Fernpilotenschein",
        "note": "required under FAA Part 107 to fly most consumer drones"
      },
      {
        "en": "FAA Part 107 / Small UAS Rule",
        "de": "FAA-Kleindrohnen-Regelung",
        "note": "US regulation covering drone registration, licensing, and flight rules"
      },
      {
        "en": "payload",
        "de": "Nutzlast",
        "note": "the weight/cargo a drone can carry, e.g. up to 5 pounds for Amazon PrimeAir"
      },
      {
        "en": "eVTOL (electric vertical take-off and landing)",
        "de": "elektrisches Senkrechtstart-/-landeflugzeug",
        "note": "aircraft category including drones and flying cars/air taxis"
      },
      {
        "en": "air taxi",
        "de": "Flugtaxi",
        "note": "eVTOL aircraft, essentially the equivalent of a flying car"
      },
      {
        "en": "smelling technology",
        "de": "'Riech'-Sensorik",
        "note": "sensors that detect chemicals/gases in the air, e.g. to detect wildfire smoke"
      },
      {
        "en": "added-dimension challenge",
        "de": "Herausforderung der zusätzlichen Dimension",
        "note": "drones must navigate and be mapped in 3 dimensions, not just 2"
      },
      {
        "en": "circular challenge",
        "de": "zirkuläre Herausforderung",
        "note": "more AI capability adds weight, requiring more battery, adding more weight"
      },
      {
        "en": "supply chain management",
        "de": "Lieferkettenmanagement",
        "note": "becomes a 3-dimensional optimization problem once drones are combined with delivery vehicles"
      },
      {
        "en": "first responder",
        "de": "Ersthelfer",
        "note": "one of the innovative uses of drones, alongside police and public safety"
      },
      {
        "en": "field mapping",
        "de": "Feldkartierung",
        "note": "agricultural use of drones for crop scouting and spraying"
      },
      {
        "en": "indoor drone",
        "de": "Innendrohne",
        "note": "e.g. the Ring Always Home Cam, flies around a home for security"
      },
      {
        "en": "nano/mini drone",
        "de": "Nano-/Mini-Drohne",
        "note": "drone about the size of a palm, minimal payload"
      }
    ],
    "mc": [
      {
        "q": "What is the key difference between a UAV/RPA and an autonomous drone, according to the chapter?",
        "options": [
          "A UAV is remotely piloted by a human, while an autonomous drone flies itself using AI",
          "There is no difference, the terms are identical",
          "A UAV can only fly indoors"
        ],
        "correct": 0,
        "why": "The chapter defines UAV/RPA as aircraft without a pilot aboard but remotely piloted by a human, while an autonomous drone has the AI, sensors, and software to fly itself."
      },
      {
        "q": "Under FAA Part 107 (Small UAS Rule), what is one requirement for flying most consumer drones?",
        "options": [
          "The drone must weigh less than 8.8 ounces",
          "You must obtain a Remote Pilot Certificate and register the drone",
          "You must fly above 400 feet at all times"
        ],
        "correct": 1,
        "why": "Part 107 requires a Remote Pilot Certificate, drone registration, and meeting basic requirements such as a minimum age of 16, for drones weighing 8.8 ounces or more."
      },
      {
        "q": "What is the 'circular challenge' facing fully autonomous drones, as described in the book?",
        "options": [
          "More AI capability adds weight, requiring more battery capacity, which adds more weight",
          "Drones fly in circles when GPS signal is lost",
          "Regulations change every year in a repeating cycle"
        ],
        "correct": 0,
        "why": "The book describes a circular problem: adding AI capability increases weight, which requires more battery capacity, which increases weight further, and so on."
      },
      {
        "q": "Which company's flying-taxi initiative was acquired by Joby Aviation, according to the chapter?",
        "options": [
          "Uber Elevate",
          "Waymo",
          "Rivian"
        ],
        "correct": 0,
        "why": "The book states that Joby Aviation acquired Uber Elevate, Uber's flying-taxi division, as part of its eVTOL air taxi efforts."
      },
      {
        "q": "According to the chapter, how does the US Forest Service use drones for wildfire detection?",
        "options": [
          "Only through video and image recognition",
          "Through video/image recognition and 'smelling' sensors that detect smoke chemicals in the air",
          "By dropping fire retardant automatically"
        ],
        "correct": 1,
        "why": "The book explains that fire detection can occur through video/image recognition but also through sensors that intake air and measure for chemicals/gases signaling smoke."
      }
    ],
    "recall": [
      {
        "q": "Explain the difference between fixed-wing and rotary-wing aircraft, and what a multicopter is.",
        "answer": "Fixed-wing aircraft, like commercial airliners, generate forward thrust and rely on wing shape and airflow for lift. Rotary-wing aircraft, like helicopters, generate vertical thrust using spinning blades. A multicopter is a rotary-wing aircraft with multiple engines, each spinning its own rotor blade; most consumer drones are quadcopters, a type of multicopter with 4 rotors.",
        "useVocab": [
          "fixed-wing aircraft",
          "rotary-wing aircraft",
          "multicopter",
          "quadcopter"
        ]
      },
      {
        "q": "What rules must consumer drone pilots follow under the FAA's Part 107 regulation?",
        "answer": "Pilots need a Remote Pilot Certificate, must register their drone with the FAA, and must meet basic requirements like being at least 16 years old and understanding English, for drones weighing 8.8 ounces or more. Beyond that, they must fly at or below 400 feet, keep the drone within sight, avoid restricted airspace, crowds, and stadiums, and never fly under the influence.",
        "useVocab": [
          "Remote Pilot Certificate",
          "FAA Part 107 / Small UAS Rule"
        ]
      },
      {
        "q": "How do the book's delivery drone examples (Zipline, Amazon PrimeAir, UPS, FedEx) illustrate current commercial uses of drones?",
        "answer": "Zipline delivers blood and medical supplies by drone, which can be lifesaving in remote or urgent situations. Amazon's PrimeAir aims to deliver packages up to 5 pounds in 30 minutes or less. Both UPS and FedEx have received FAA authorization to operate full drone delivery fleets, showing that large-scale commercial drone delivery is moving from pilot projects toward regulatory approval.",
        "useVocab": [
          "payload"
        ]
      },
      {
        "q": "What two special challenges does the book identify for achieving fully autonomous drones?",
        "answer": "The first is the added-dimension challenge: unlike autonomous cars, which navigate in two dimensions, drones must navigate and be mapped in three dimensions, including the height of buildings, poles, and trees. The second is the circular challenge: adding more AI capability to support autonomy increases the drone's weight, which requires more battery capacity, which in turn adds more weight, creating a repeating cycle.",
        "useVocab": [
          "added-dimension challenge",
          "circular challenge"
        ]
      },
      {
        "q": "What are eVTOL aircraft, and which companies does the book name as working on them?",
        "answer": "eVTOL stands for electric vertical take-off and landing, aircraft that can take off, hover, and land vertically using electric power; the category includes drones as well as air taxis, essentially flying cars. The book names companies such as Toyota, Joby Aviation, Hyundai/Supernal, Airbus (City Airbus NexGen), Boeing, and the Japanese startup SkyDrive as racing to develop this technology.",
        "useVocab": [
          "eVTOL (electric vertical take-off and landing)",
          "air taxi"
        ]
      }
    ]
  },
  {
    "id": 8,
    "topic": "Energy Technologies",
    "hook": "9 Million Years of Power From One Second of Sunlight",
    "summary": [
      {
        "h": "What is it?",
        "de": "Energie ist die Fähigkeit, Arbeit zu verrichten, und tritt in vielen Formen auf: Wärme, Licht, Bewegung, Elektrizität, Chemie, Schwerkraft, Magnetismus und mehr. Energie wird nicht verbraucht, sondern nur von einer Form in eine andere umgewandelt, etwa wenn Nahrung im Körper zu Bewegungsenergie wird. Erneuerbare Energie stammt aus Quellen, die sich natürlich erneuern und CO2-neutral sind, etwa Sonne, Wind, Wasserkraft, Erdwärme und Biomasse; fossile Brennstoffe zählen nicht dazu, weil ihre Entstehung Jahrmillionen dauert.",
        "en": "Energy is the ability to do work and comes in many forms: heat, light, motion, electrical, chemical, gravitational, and magnetic, among others. Energy is never truly consumed, only converted from one form into another, as when food is transformed into kinetic energy in the body. Renewable energy comes from naturally-replenishing, carbon-neutral sources such as sunlight, wind, moving water, geothermal heat, and biomass, whereas fossil fuels do not count as renewable because they take millions of years to form."
      },
      {
        "h": "How does it work?",
        "de": "Statt Energie in Kraftwerken aus fossilen Rohstoffen herzustellen (energy manufacturing), will man sie zunehmend direkt vor Ort aus erneuerbaren Quellen ernten (energy harvesting), z. B. mit Solarzellen auf dem Dach. Bei Solarenergie unterscheidet man Photovoltaik-Systeme (PV, Solarzellen wandeln Licht direkt in Strom) und konzentrierte Solarenergie (CSP, Spiegel bündeln Sonnenlicht zu Wärme für eine Dampfturbine). Windkraft nutzt Turbinen an Land (onshore) oder auf dem Wasser (offshore); Wasserkraft nutzt Stauseen oder Flussströmung; Erdwärme liefert Strom oder Heizwärme aus dem Erdinneren; Biomasse verbrennt Pflanzen- und Holzreste; Wasserstoff-Brennstoffzellen erzeugen Strom aus Wasserstoff und Sauerstoff; Piezoelektrizität wandelt Druck (z. B. Schritte) in Strom um. Weil erneuerbare Energiequellen unregelmäßig liefern, ist Speicherung in Batterien entscheidend: primäre (nicht wiederaufladbare, z. B. Alkaline) und sekundäre (wiederaufladbare, z. B. Lithium-Ionen) Batterien, mit Festkörperbatterien als vielversprechender nächster Schritt.",
        "en": "Instead of manufacturing energy in plants that burn fossil raw materials, the goal is increasingly to harvest energy directly from renewable sources on the spot, such as rooftop solar panels. For solar power, a photovoltaic (PV) system uses solar panels to convert sunlight directly into electricity, while concentrated solar power (CSP) uses mirrors to focus sunlight into heat that drives a steam turbine. Wind power uses turbines on land (onshore) or on water (offshore); hydropower uses reservoirs or free-flowing rivers; geothermal power taps heat from inside the earth for electricity or heating; biomass burns plant and wood waste; hydrogen fuel cells generate electricity from hydrogen and oxygen; and piezoelectricity converts pressure, such as footsteps, into electricity. Because renewable sources supply energy intermittently, storing it in batteries is essential: primary (non-rechargeable, e.g. alkaline) and secondary (rechargeable, e.g. lithium-ion) batteries, with solid-state batteries emerging as a promising next generation."
      },
      {
        "h": "Example from the book",
        "de": "Das Buch stellt die Quizfrage, wie viele Jahre die Energieabgabe der Sonne von nur einer Sekunde die USA versorgen könnte; die Antwort lautet 9.000.000 Jahre. Als konkretes Beispiel nennt es Ivanpah in der kalifornischen Wüste, das größte CSP-Kraftwerk der USA (3.500 Acres), das jährlich 940.000 Megawattstunden sauberen Strom liefert und 500.000 Tonnen CO2 vermeidet. Der Hoover-Damm (fertiggestellt Ende der 1930er) versorgt jährlich 1,3 Millionen Menschen mit Strom. Hawaii wird als Vorzeigebeispiel genannt: 32 % seiner Energie stammt aus erneuerbaren Quellen, jedes dritte Haus hat eine PV-Anlage, und die Kapolei Energy Storage Facility kann mit 158 Lithium-Eisenphosphat-Speichereinheiten 17 % der Insel Oahu drei Stunden lang versorgen.",
        "en": "The book poses a quiz question asking how many years just one second of the sun's total energy output could power the United States; the answer is 9,000,000 years. As a concrete example, it cites Ivanpah in the California desert, the largest CSP plant in the U.S. (3,500 acres), which generates 940,000 megawatt-hours of clean energy annually while preventing 500,000 metric tons of CO2 emissions. The Hoover Dam (completed in the late 1930s) produces enough electricity annually to meet the needs of 1.3 million people. Hawaii is presented as a showcase example: 32% of its energy comes from renewables, one in three homes has a PV solar system, and the Kapolei Energy Storage Facility can power 17% of the island of Oahu for three hours using 158 lithium iron phosphate storage units."
      },
      {
        "h": "Opportunities & Risks",
        "de": "Treibhausgase wie CO2 sind grundsätzlich notwendig, um die Erde warm zu halten, aber ihr Übermaß verursacht die globale Erwärmung. Das Pariser Abkommen von 2015 (197 Länder) verpflichtet zur Begrenzung der Erderwärmung auf unter 2 °C, im Idealfall 1,5 °C, über dem vorindustriellen Niveau. Der Klimawandel hat spürbare persönliche Kosten: Die US-Regierung gab seit 2005 fast eine halbe Billion Dollar für klimabedingte Katastrophen aus, Stromrechnungen und Rindfleischpreise stiegen deutlich, und Versicherungsprämien erhöhten sich um 10–20 %. Unternehmen müssen zunehmend über Umwelt-, Sozial- und Unternehmensführungskriterien (ESG) berichten. Bei Wasserstoff gehen die Meinungen auseinander: Elon Musk nannte Brennstoffzellen „mind-bogglingly stupid“, während eine Umfrage unter 1.000 Autoindustrie-Führungskräften 2017 ergab, dass Wasserstoff langfristig batteriebetriebene Fahrzeuge übertreffen könnte.",
        "en": "Greenhouse gases such as CO2 are fundamentally necessary to keep the earth warm, but an excess of them causes global warming. The 2015 Paris Agreement (197 countries) commits nations to limiting global temperature increases to under 2°C, ideally 1.5°C, above pre-industrial levels. Climate change carries real personal costs: the U.S. government has spent almost half a trillion dollars on climate-related disasters since 2005, electric bills and beef prices have risen noticeably, and insurance premiums increased 10-20% over a two-year period. Companies increasingly must report on environmental, social, and corporate governance (ESG) criteria. Opinions on hydrogen are split: Elon Musk called hydrogen fuel cells 'mind-bogglingly stupid,' while a 2017 survey of 1,000 automotive industry executives found that hydrogen might ultimately outperform battery-powered vehicles."
      }
    ],
    "details": [
      "Energie wird nicht verbraucht, sondern nur umgewandelt (z. B. chemisch -> elektrisch -> Licht bei einer Taschenlampe).",
      "US-Energieverbrauch 2022 (Figure 8.1): Erdöl 36 %, erneuerbare Energien ca. 13 % des Gesamtverbrauchs (davon Wind 29 %, Biomasse 37 %, Wasserkraft 18 %, Solar 14,2 %, Erdwärme 1,6 %).",
      "Quizantwort: eine Sekunde der Sonnenenergie könnte die USA 9.000.000 Jahre versorgen.",
      "PV-System (Photovoltaik, Dach-Solarzellen) vs. CSP (Concentrated Solar Power, Spiegel/Dampfturbine); größtes US-CSP: Ivanpah, 3.500 Acres, 940.000 MWh/Jahr, spart 500.000 t CO2/Jahr.",
      "Windturbinen bis 500 Fuß hoch mit ~200 Fuß langen Blättern, versorgen 1.200-1.500 Haushalte; neue 'flower wind turbines' (Blumenform) erzeugen im Bouquet von 5 Stück über 200 % mehr Energie.",
      "Hoover-Damm (Nevada/Arizona, fertiggestellt Ende der 1930er): versorgt jährlich 1,3 Mio. Menschen mit Strom.",
      "Hawaii: 32 % Energie aus Erneuerbaren, 1 von 3 Haushalten hat PV-Anlage, 15 % Neuwagen elektrisch; Kapolei Energy Storage Facility (158 Speichereinheiten) versorgt 17 % Oahus 3 Std. bei Spitzenlast; Big Island: ~30 % Energie aus Geothermie (Kilauea-Vulkan).",
      "Wasserstoff-Brennstoffzelle: 2-3x effizienter als Verbrennungsmotor, einziges Nebenprodukt Wasser (zero-emission); 2021 < 50 Tankstellen in den USA (v. a. Kalifornien).",
      "Piezoelektrizität (Druck erzeugt Strom): Anwendungen in Tokioter U-Bahn, Sainsbury's-Supermarkt, Rotterdam-Club, Toulouse-Gehweg; Testabschnitt einer Fahrbahn bei Fresno, Kalifornien.",
      "Batterien: primär/nicht wiederaufladbar (Alkaline, ~80 % aller Batterien weltweit) vs. sekundär/wiederaufladbar (Lithium-Ionen); Festkörperbatterien (solid-state) versprechen höhere Energiedichte, geringeres Brandrisiko, schnelleres Laden.",
      "Größte Batteriespeicher-Anbieter: Tesla, LG Chem, Enphase Energy zusammen 85 % Marktanteil; Tesla Powerwall speichert PV-Solarstrom in Lithium-Ionen-Bank.",
      "Pariser Abkommen (2015, 197 Länder): Ziel < 2 °C, Stretch-Ziel 1,5 °C Erderwärmung gegenüber vorindustriellem Niveau.",
      "ESG (Environmental, Social, Corporate Governance) = Standard-Berichtsrahmen für Unternehmen; Fokus im Energiekapitel liegt auf dem 'E' (Umwelt)."
    ],
    "vocab": [
      {
        "en": "energy",
        "de": "Energie",
        "note": "the ability to do work; transforms between forms rather than being consumed"
      },
      {
        "en": "renewable energy",
        "de": "erneuerbare Energie",
        "note": "naturally-replenishing, carbon-neutral sources like solar, wind, hydropower"
      },
      {
        "en": "fossil fuels",
        "de": "fossile Brennstoffe",
        "note": "not renewable; take millions of years to form from decomposed organisms"
      },
      {
        "en": "greenhouse gas",
        "de": "Treibhausgas",
        "note": "e.g. CO2, water vapor, methane; causes the greenhouse effect"
      },
      {
        "en": "greenhouse effect",
        "de": "Treibhauseffekt",
        "note": "warming of the earth's surface from radiation trapped in the atmosphere"
      },
      {
        "en": "global warming",
        "de": "globale Erwärmung",
        "note": "rise in earth's average temperature, mainly from increased CO2"
      },
      {
        "en": "climate change",
        "de": "Klimawandel",
        "note": "long-term shifts in temperature and weather patterns"
      },
      {
        "en": "Paris Agreement",
        "de": "Pariser Abkommen",
        "note": "2015 treaty, 197 countries, limits warming to below 2°C"
      },
      {
        "en": "energy harvesting",
        "de": "Energiegewinnung/-ernte",
        "note": "capturing renewable energy on the spot for immediate use"
      },
      {
        "en": "energy manufacturing",
        "de": "Energieherstellung",
        "note": "producing energy from fossil raw materials in large plants"
      },
      {
        "en": "photovoltaic (PV) system",
        "de": "Photovoltaik-System",
        "note": "solar panels that convert sunlight directly into electricity"
      },
      {
        "en": "concentrated solar power (CSP)",
        "de": "konzentrierte Solarenergie",
        "note": "mirrors focus sunlight to drive a steam turbine, e.g. Ivanpah"
      },
      {
        "en": "wind farm",
        "de": "Windpark",
        "note": "collection of wind turbines, onshore or offshore"
      },
      {
        "en": "hydropower",
        "de": "Wasserkraft",
        "note": "captures kinetic/gravitational energy of water, e.g. Hoover Dam"
      },
      {
        "en": "geothermal power",
        "de": "Geothermie/Erdwärme",
        "note": "electricity or heat from thermal energy in the earth's crust"
      },
      {
        "en": "biomass",
        "de": "Biomasse",
        "note": "plant and animal material burned as fuel, e.g. wood waste"
      },
      {
        "en": "hydrogen fuel cell",
        "de": "Wasserstoff-Brennstoffzelle",
        "note": "produces electricity from hydrogen and oxygen; byproduct is water"
      },
      {
        "en": "piezoelectricity",
        "de": "Piezoelektrizität",
        "note": "electricity generated by applying pressure to certain materials"
      },
      {
        "en": "battery",
        "de": "Batterie",
        "note": "source of electrical power balancing energy supply and demand"
      },
      {
        "en": "primary battery",
        "de": "Primärbatterie (nicht wiederaufladbar)",
        "note": "e.g. alkaline batteries in toys and remotes"
      },
      {
        "en": "secondary (rechargeable) battery",
        "de": "Sekundärbatterie (wiederaufladbar)",
        "note": "e.g. lithium-ion batteries in phones and EVs"
      },
      {
        "en": "alkaline battery",
        "de": "Alkaline-Batterie",
        "note": "about 80% of all batteries worldwide"
      },
      {
        "en": "lithium-ion battery",
        "de": "Lithium-Ionen-Batterie",
        "note": "most common rechargeable battery, used in EVs and electronics"
      },
      {
        "en": "solid-state battery",
        "de": "Festkörperbatterie",
        "note": "solid electrodes/electrolytes; promises higher density, less fire risk"
      },
      {
        "en": "ESG (Environmental, Social, Corporate Governance)",
        "de": "ESG (Umwelt, Soziales, Unternehmensführung)",
        "note": "standard framework for reporting non-financial business risks"
      }
    ],
    "mc": [
      {
        "q": "According to the book's quiz, one second of the sun's total energy output could power the United States for how long?",
        "options": [
          "9,000 years",
          "900,000 years",
          "9,000,000 years"
        ],
        "correct": 2,
        "why": "The book gives the answer as 9,000,000 years, illustrating the enormous scale of solar energy potential."
      },
      {
        "q": "What is the key difference between a photovoltaic (PV) system and concentrated solar power (CSP)?",
        "options": [
          "PV converts sunlight directly into electricity via solar panels, while CSP uses mirrors to concentrate sunlight into heat that drives a turbine",
          "PV only works at night, while CSP only works during the day",
          "PV and CSP are simply two different brand names for the same rooftop solar panel technology"
        ],
        "correct": 0,
        "why": "PV panels directly convert light into electricity, while CSP plants like Ivanpah use mirrors to concentrate heat and drive a steam turbine/generator."
      },
      {
        "q": "What distinguishes a primary battery from a secondary battery?",
        "options": [
          "A primary battery is rechargeable, a secondary battery is not",
          "A secondary battery's chemical structure is designed to be restored to its original state by recharging, unlike a primary battery",
          "There is no real difference between them"
        ],
        "correct": 1,
        "why": "Secondary (rechargeable) batteries, like lithium-ion, can return to their original chemical state through recharging; primary batteries, like standard alkaline, are one-time-use."
      },
      {
        "q": "What is the main goal of the 2015 Paris Agreement?",
        "options": [
          "To ban the use of fossil fuels entirely by 2030",
          "To substantially reduce greenhouse gas emissions and limit global temperature increases to well below 2°C above pre-industrial levels",
          "To require every country to switch fully to nuclear energy"
        ],
        "correct": 1,
        "why": "The Paris Agreement's main goal is reducing greenhouse gas emissions to keep warming under 2°C, with a stretch goal of 1.5°C."
      },
      {
        "q": "How does piezoelectricity generate electricity?",
        "options": [
          "By applying pressure to certain materials, such as crystals or ceramics",
          "By burning biomass waste like wood chips",
          "By using mirrors to concentrate sunlight"
        ],
        "correct": 0,
        "why": "Piezoelectricity is created when pressure is applied to specific materials, as in sidewalk plates in Tokyo or Toulouse that generate electricity from footsteps."
      }
    ],
    "recall": [
      {
        "q": "Explain the difference between energy harvesting and energy manufacturing, with an example of each.",
        "answer": "Energy manufacturing produces energy in large processing plants that transform fossil raw materials like coal into another energy form, releasing smoke and requiring extensive infrastructure. Energy harvesting instead captures a renewable energy form and converts it directly into usable energy on the spot, such as rooftop solar panels converting sunlight into household electricity.",
        "useVocab": [
          "energy manufacturing",
          "energy harvesting",
          "photovoltaic (PV) system"
        ]
      },
      {
        "q": "Describe the Hawaii example from the book and explain why it matters for renewable energy.",
        "answer": "Hawaii has no extractable fossil fuels and must import all fossil-based fuel, which pushed the state to focus heavily on renewables: 32% of its energy comes from renewable sources, one in three homes has a PV solar system, and 15% of new cars are electric. The Kapolei Energy Storage Facility, with 158 lithium iron phosphate storage sheds, can power 17% of Oahu for three hours at peak load, showing how storage supports a renewable-heavy grid.",
        "useVocab": [
          "renewable energy",
          "photovoltaic (PV) system",
          "battery"
        ]
      },
      {
        "q": "Why is energy storage, particularly batteries, described as essential to the 4th industrial revolution?",
        "answer": "Renewable sources like solar and wind supply energy intermittently, so surplus energy captured on a sunny or windy day must be stored for use later, such as on a cloudy day. Batteries balance this supply and demand, and mobile technology everywhere in the world needs mobile energy rather than relying on being plugged into a wall outlet.",
        "useVocab": [
          "battery",
          "renewable energy",
          "secondary (rechargeable) battery"
        ]
      },
      {
        "q": "What personal, financial costs of climate change does the book mention?",
        "answer": "The U.S. government has spent almost half a trillion dollars since 2005 on climate change-related disasters, funded by taxpayers. Average monthly electric bills rose from $104.92 in 2009 to $115 in 2019, beef prices increased 17.6% from 2019 to 2021 due to drought and supply issues, and insurance companies raised rates by 10-20% over a two-year period because of catastrophic weather events.",
        "useVocab": [
          "climate change",
          "greenhouse gas"
        ]
      },
      {
        "q": "Compare the two opposing views on hydrogen fuel cells mentioned in the book.",
        "answer": "Elon Musk dismissed hydrogen fuel cells as 'mind-bogglingly stupid', reflecting skepticism about their practicality compared to battery-electric vehicles. In contrast, a 2017 survey of 1,000 automobile industry executives found that hydrogen fuel cells would ultimately outperform battery-powered electric vehicles, showing the technology is still viewed as promising despite very limited commercialization as of 2021.",
        "useVocab": [
          "hydrogen fuel cell"
        ]
      }
    ]
  },
  {
    "id": 9,
    "topic": "Sensing Technologies",
    "hook": "Hearing, Seeing, Feeling, and Smelling",
    "summary": [
      {
        "h": "What is it?",
        "de": "Sensing Technologies sind Technologien, die menschliche Sinne nachbilden: Hören (Sound/Speech), Sehen (Computer Vision), Fühlen (Haptik) und Riechen (digitaler Geruch). Der Mensch hat dabei eigentlich 7 statt der bekannten 5 Sinne, denn zusätzlich zu Sehen, Hören, Fühlen, Riechen und Schmecken gibt es noch das vestibuläre System (Gleichgewicht) und die Propriozeption (Körperwahrnehmung). Diese Sinnestechnologien existierten teils schon in der 3. industriellen Revolution, sind aber als Bausteine für die 4. industrielle Revolution unverzichtbar.",
        "en": "Sensing technologies are technologies that replicate human senses: hearing (sound/speech), seeing (computer vision), feeling (haptics), and smelling (digital scent). Humans actually have 7 senses rather than the commonly known 5 - in addition to sight, sound, touch, smell, and taste, there is also the vestibular sense (balance) and proprioception (body-position awareness). Many of these sensing technologies existed as far back as the 3rd industrial revolution, but they remain essential building blocks for the 4th industrial revolution."
      },
      {
        "h": "How does it work?",
        "de": "Drei technische Grundbegriffe erklären, wie Sensing-Systeme arbeiten: Ein Sensor überwacht und misst physikalische Eigenschaften der Umgebung (z. B. ein Mikrofon erfasst Schallwellen). Ein Transducer wandelt eine Energieform in eine andere um, z. B. Schallwellen in elektrische Signale. Das Control Module (das 'Gehirn' des Systems) verarbeitet diese elektrischen Signale und leitet sie ggf. an einen Aktuator (Actuator) weiter, der wiederum über einen Transducer die elektrischen Signale in eine Ausgabe umwandelt (Ton, Licht, Bewegung, Textnachricht usw.). Im Karaoke-Beispiel: Mikrofon (Sensor) erfasst die Stimme, ein Transducer wandelt sie in elektrische Signale um, das Control Module leitet sie weiter, und der Lautsprecher (Aktuator) wandelt sie zurück in Schallwellen.",
        "en": "Three technical terms explain how sensing systems work: a sensor monitors and measures physical properties of the environment (e.g., a microphone captures sound waves). A transducer converts one form of energy into another, for example sound waves into an electrical signal. The control module (the 'brain' of the system) processes these electrical signals and may pass them on to an actuator, which uses a transducer to convert the electrical signal into an output such as sound, a flashing light, motor rotation, or a text message. In the karaoke example: the microphone (sensor) captures your voice, a transducer converts it into an electrical signal, the control module passes it along, and the speaker (actuator) converts it back into sound waves."
      },
      {
        "h": "Example from the book",
        "de": "Das Buch nennt viele konkrete Beispiele: IoT-Sound-Sensoren (ab ca. 1 Dollar) für Heimsicherheit; Speech-Recognition-Dienste wie Google Cloud Speech API, Microsoft Azure Cognitive Services, Amazon Transcribe, IBM Watson und SpeechMatics; Lidar im iPhone 13 zur 3D-Vermessung von Räumen; SLAM bei der iRobot Roomba, die damit einen Raum kartiert und Hindernissen ausweicht; die Gebärdensprache-App GnoSys von Evalk, die Handbewegungen per Videoerfassung in Sprache übersetzt; sowie OVR Technology mit einer 'Architecture of Scent'-Plattform zur Erzeugung synthetischer Gerüche.",
        "en": "The book gives many concrete examples: IoT sound sensors (starting around $1) for home security; speech recognition services like Google Cloud Speech API, Microsoft Azure Cognitive Services, Amazon Transcribe, IBM Watson, and SpeechMatics; Lidar in the iPhone 13 for 3D room mapping; SLAM used by the iRobot Roomba to map a room and avoid obstacles; the sign-language app GnoSys by Evalk, which translates hand movements captured on video into speech; and OVR Technology's 'Architecture of Scent' platform for creating synthetic smells."
      },
      {
        "h": "Opportunities & Risks",
        "de": "Chancen: Assistive Technologien für Menschen mit Seh- oder Bewegungseinschränkungen (Speech Recognition, OCR-Vorlesefunktionen), bessere Sicherheit (Rauch- und Kohlenmonoxid-Detektoren, Verkehrsschilderkennung für autonome Fahrzeuge), realitätsnahe digitale Zwillinge (z. B. Windturbinen mit IoT-Sensoren) und immersivere Erlebnisse durch Geruchstechnologie, da der Geruchssinn stark mit dem Gedächtnis verknüpft ist. Risiken/Grenzen: Eye-Tracking wird zunehmend zur Überwachung genutzt (z. B. Betrugserkennung bei Online-Tests, Marketing-Tracking von Konsumentenaufmerksamkeit), was Datenschutzfragen aufwirft; zudem verwenden viele Menschen die Fachbegriffe Sensor/Transducer/Actuator unpräzise, was technisches Verständnis erschwert.",
        "en": "Opportunities: assistive technologies for people with sight or movement limitations (speech recognition, OCR read-aloud features), improved safety (smoke and carbon-monoxide detectors, traffic-sign recognition for autonomous vehicles), realistic digital twins (e.g., wind turbines fitted with IoT sensors), and more immersive experiences through scent technology, since smell is strongly linked to memory. Risks/limits: eye tracking is increasingly used for surveillance purposes (e.g., detecting cheating in online tests, tracking consumer attention in marketing), raising privacy concerns; also, many people use the technical terms sensor/transducer/actuator imprecisely, which can obscure real technical understanding."
      }
    ],
    "details": [
      "Menschen haben laut Buch 7 Sinne statt 5: Sehen, Hören, Fühlen, Riechen, Schmecken plus Vestibulärsinn (Gleichgewicht) und Propriozeption (Körperwahrnehmung, z. B. beim Ei-Aufschlagen ohne Zerdrücken)",
      "Sensor = misst/überwacht; Transducer = wandelt eine Energieform in eine andere um; Control Module = verarbeitet elektrische Signale ('Gehirn'); Actuator = erzeugt die physische Ausgabe",
      "IoT-Sound-Sensoren: mikrofonbasiert, ab ca. 1 US-Dollar, verschiedene Mikrofontypen (dynamic, carbon, ribbon, condenser), Sensitivität einstellbar",
      "Speech Recognition (ASR = Automatic Speech Recognition): u. a. Amazon Alexa, Google Assistant, Siri; Cloud-Dienste: Google Cloud Speech API, Microsoft Azure Cognitive Services, Amazon Transcribe, IBM Watson, SpeechMatics; Abrechnung meist pro Minute/Wort",
      "Computer Vision = formaler Begriff für Seeing Technologies; umfasst Bild-/Videoerfassung bis hin zu KI-basierter Objekterkennung (Convolutional Neural Networks)",
      "360-Grad-Kamera (omnidirektional): Anwendungen u. a. Überwachung, Google Street View, VR (dort 'VR-Kameras' genannt), virtuelle Live-Events, virtuelle Immobilienbesichtigungen",
      "Sonar (Sound Navigation and Ranging, Wasser/Marine), Radar (Radio Detection and Ranging, Luftverkehr/Geschwindigkeitsmessung), Lidar (Light Detection and Ranging, autonome Fahrzeuge) messen alle Laufzeit eines reflektierten Signals, unterscheiden sich aber im genutzten Signaltyp (Schall/Radiowellen/Licht)",
      "iPhone 13: erstes Apple-Smartphone mit Lidar-Sensor zur 3D-Raumvermessung (Höhe, Länge, Breite, Tiefe, Abstand)",
      "OCR (Optical Character Recognition): wandelt gedruckten/handgeschriebenen Text in maschinenlesbares Format; Anwendungen: Scheckverarbeitung, Verkehrsschild- und Kennzeichenerkennung, durchsuchbare PDFs, Vorlesefunktionen für Sehbehinderte",
      "SLAM (Simultaneous Localization and Mapping): Beispiel iRobot Roomba - kartiert Raum, erkennt Hindernisse, verfolgt eigene Position ('Agent')",
      "Biometrics = 'bio' (Leben) + 'metrics' (Messung); reicht von Blutdruckmessung über Fingerabdruck-Identifikation bis zu 3D-gedruckten synthetischen Hautimplantaten",
      "Motion Capture (Mocap): Einsatz in Film/Videospielen (2D/3D-Animation), Physiotherapie (Fortschrittsmessung), Sportsicherheit (Design von Helmen, Sicherheitsgurten); Unterkategorien: Gesture Recognition, Hand-/Fingertracking, Eye Tracking",
      "GnoSys (Evalk): Smartphone-App, die Gebärdensprache per Videoerfassung (ohne Handschuhe) in Sprache übersetzt; alternative Methode nutzt Handschuhe (zählt zu Haptik/Feeling-Technologien)",
      "Eye Tracking: wichtig für Human-Computer-Interaction bei Bewegungseinschränkungen, für Marketing/Customer Experience (Blickverfolgung auf Verpackungen) und zur Betrugserkennung bei Online-Prüfungen",
      "Haptik (Feeling Technologies) in zwei Richtungen: 'Ich fühle den Computer' (z. B. vibrierender Game-Controller, Lenkradvibration beim Spurwechsel, Vibrationsalarm am Handy) und 'Der Computer fühlt mich' (Maus, Touchpad, Controller, VR-Handcontroller, Headsets)",
      "Feeling-Sensoren für Maschinen/Umgebung: Vibrations-/Bewegungssensoren (Unwucht-Erkennung), Drucksensoren (Gewichtsänderung), Neigungssensoren/Tilt-Sensoren (unterstützen den Vestibulärsinn, z. B. bei Windturbinen)",
      "Digital Twin: Echtzeit-digitales Abbild eines physischen Objekts, z. B. Windturbine mit IoT-Sensoren für Stress, Vibration, Windgeschwindigkeit, Plattformstabilität, Bodenveränderungen",
      "Smelling/Digital Scent Technologies: erkennen Moleküle in der Luft (z. B. Kohlenmonoxid-Detektor - da CO farb-, geruchs- und geschmacklos ist) oder Partikel (Rauchmelder); Erdgas erhält künstlich den Duftstoff Mercaptan zur Lecksuche",
      "OVR Technology: 'Architecture of Scent Platform' zur Erzeugung synthetischer Gerüche für immersivere Erlebnisse; Geruchssinn hat die stärkste Verbindung zum Gedächtnis unter allen Sinnen",
      "Barcodes: UPC (Universal Product Code) = linearer 1D-Barcode, identifiziert Produkttyp (nicht das Einzelstück); QR-Code (Quick Response) = 2D-Matrixbarcode mit mehr Speicherkapazität (z. B. Datum/Zeit), weitere Varianten: Aztec Code, SnapTag, SPARQCode; Beispiel: Restaurant-Speisekarten per QR-Code während COVID-19"
    ],
    "vocab": [
      {
        "en": "sensor",
        "de": "Sensor",
        "note": "device that monitors and measures physical properties"
      },
      {
        "en": "transducer",
        "de": "Wandler",
        "note": "converts one form of energy into another"
      },
      {
        "en": "actuator",
        "de": "Aktuator/Stellglied",
        "note": "produces a physical output from an electrical signal"
      },
      {
        "en": "control module",
        "de": "Steuermodul",
        "note": "processes signals, the 'brain' of the system"
      },
      {
        "en": "vestibular sense",
        "de": "Gleichgewichtssinn",
        "note": "helps us stay upright"
      },
      {
        "en": "proprioception",
        "de": "Propriozeption/Körperwahrnehmung",
        "note": "body awareness relative to itself"
      },
      {
        "en": "speech recognition (ASR)",
        "de": "Spracherkennung",
        "note": "detects, interprets, and responds to spoken words"
      },
      {
        "en": "computer vision",
        "de": "Computer Vision/Bilderkennung",
        "note": "image recognition and understanding by a computer"
      },
      {
        "en": "360 camera",
        "de": "360-Grad-Kamera",
        "note": "omnidirectional camera capturing the entire surrounding area"
      },
      {
        "en": "sonar",
        "de": "Sonar",
        "note": "Sound Navigation and Ranging"
      },
      {
        "en": "radar",
        "de": "Radar",
        "note": "Radio Detection and Ranging"
      },
      {
        "en": "Lidar",
        "de": "Lidar",
        "note": "Light Detection and Ranging"
      },
      {
        "en": "OCR (optical character recognition)",
        "de": "optische Zeichenerkennung",
        "note": "converts printed or handwritten text into machine-usable format"
      },
      {
        "en": "SLAM (simultaneous localization and mapping)",
        "de": "simultane Lokalisierung und Kartierung",
        "note": "used e.g. by the iRobot Roomba"
      },
      {
        "en": "biometrics",
        "de": "Biometrie",
        "note": "measures of biological/life data, e.g. fingerprints"
      },
      {
        "en": "motion capture",
        "de": "Bewegungserfassung",
        "note": "recording the movement of objects or people"
      },
      {
        "en": "gesture recognition",
        "de": "Gestenerkennung",
        "note": "recognizing human gestures"
      },
      {
        "en": "hand and finger tracking",
        "de": "Hand- und Fingerverfolgung",
        "note": "e.g. for sign-language translation"
      },
      {
        "en": "eye tracking",
        "de": "Blickerfassung",
        "note": "measuring the point of gaze"
      },
      {
        "en": "haptic technology",
        "de": "Haptik-Technologie",
        "note": "creates or detects the sense of touch"
      },
      {
        "en": "digital twin",
        "de": "digitaler Zwilling",
        "note": "real-time digital counterpart of a physical object"
      },
      {
        "en": "digital scent technology",
        "de": "digitale Geruchstechnologie",
        "note": "detects or produces smells/odors"
      },
      {
        "en": "olfactory receptor",
        "de": "Geruchsrezeptor",
        "note": "binds odorous molecules to create a chemical stimulus"
      },
      {
        "en": "UPC (universal product code)",
        "de": "Universeller Produktcode",
        "note": "linear 1D barcode"
      },
      {
        "en": "QR code (quick response code)",
        "de": "QR-Code",
        "note": "2D matrix barcode holding more data than a UPC"
      }
    ],
    "mc": [
      {
        "q": "According to the book, how many senses do humans actually have?",
        "options": [
          "5",
          "6",
          "7"
        ],
        "correct": 2,
        "why": "The book states we have 7 senses: the 5 common ones plus vestibular sense and proprioception."
      },
      {
        "q": "What is the correct relationship between sensor, transducer, and actuator in the karaoke example?",
        "options": [
          "The microphone is a sensor, the speaker's transducer converts electrical signals to sound, and the speaker is the actuator",
          "The microphone is an actuator, and the speaker is a sensor",
          "The control module is the transducer, and the microphone is the actuator"
        ],
        "correct": 0,
        "why": "The microphone senses sound waves, a transducer converts them to electrical signals for the control module, and the speaker (actuator) uses a transducer to convert electrical signals back into sound."
      },
      {
        "q": "What distinguishes sonar, radar, and Lidar from one another?",
        "options": [
          "They use different signal types - sound, radio waves, and light - to measure time-of-flight to an object and back",
          "Only Lidar can be used underwater",
          "Radar is only used for medical imaging"
        ],
        "correct": 0,
        "why": "All three measure the time for a signal to reach an object and return, but sonar uses sound, radar uses radio waves, and Lidar uses light waves."
      },
      {
        "q": "What does SLAM stand for, and what is a real-world example given in the book?",
        "options": [
          "Simultaneous Localization and Mapping - used by the iRobot Roomba",
          "Sound Location and Motion - used in smoke detectors",
          "Sensor Linked Actuator Module - used in QR codes"
        ],
        "correct": 0,
        "why": "SLAM is simultaneous localization and mapping; the book gives the iRobot Roomba as the example, mapping a room and avoiding obstacles."
      },
      {
        "q": "Why do humans notice a smell when natural gas leaks, even though natural gas itself has no odor?",
        "options": [
          "Gas companies add a harmless odorant called mercaptan to give it a smell",
          "Natural gas reacts with oxygen to create a smell automatically",
          "Smoke detectors convert the gas into a scent"
        ],
        "correct": 0,
        "why": "The book explains that companies add mercaptan, a harmless gas, to natural gas to give it a detectable rotten-egg smell."
      },
      {
        "q": "What is the key difference between a UPC and a QR code?",
        "options": [
          "A UPC is a linear 1D barcode identifying a product type, while a QR code is a 2D matrix barcode that can store much more information",
          "A UPC can store date and time information, but a QR code cannot",
          "QR codes can only be used once, while UPCs are reusable"
        ],
        "correct": 0,
        "why": "The book describes the UPC as a linear 1D barcode (e.g., identifying a box of Cheerios) and the QR code as a 2D matrix barcode capable of holding more data, such as date and time information."
      }
    ],
    "recall": [
      {
        "q": "Explain the difference between a sensor, a transducer, an actuator, and a control module using the karaoke example from the book.",
        "answer": "A sensor, like the microphone, monitors and captures a physical event - in this case, sound waves from your voice. A transducer converts that sound-wave energy into an electrical signal, which the control module then processes and passes along. Finally, an actuator, like the speaker, uses another transducer to convert the electrical signal back into sound waves as the output.",
        "useVocab": [
          "sensor",
          "transducer",
          "actuator",
          "control module"
        ]
      },
      {
        "q": "What are the two lesser-known human senses mentioned in the book, and what do they do?",
        "answer": "The two lesser-known senses are the vestibular sense and proprioception. The vestibular sense relates to movement and balance, helping us stay upright when we sit, stand, or walk. Proprioception is body awareness, telling us where our body parts are relative to each other, which lets us apply the right amount of force, such as cracking an egg without crushing it.",
        "useVocab": [
          "vestibular sense",
          "proprioception"
        ]
      },
      {
        "q": "Describe how sonar, radar, and Lidar work and give one application for each mentioned in the book.",
        "answer": "Sonar, radar, and Lidar all measure the time it takes for a signal to travel to an object, bounce off it, and return. Sonar uses sound and is used by navies to detect vessels and map the ocean floor. Radar uses radio waves and is used to spot aircraft and measure vehicle speed for law enforcement. Lidar uses light pulses and is central to autonomous vehicles, and is also used in the iPhone 13 to create 3D maps of rooms.",
        "useVocab": [
          "sonar",
          "radar",
          "Lidar"
        ]
      },
      {
        "q": "What is SLAM, and how does the iRobot Roomba use it?",
        "answer": "SLAM stands for simultaneous localization and mapping, a seeing technology for constructing and updating a map of an environment while tracking the location of an agent within it. The iRobot Roomba is the example given: it uses SLAM to map a room, detect and avoid obstacles, and keep track of its own position while cleaning.",
        "useVocab": [
          "SLAM (simultaneous localization and mapping)"
        ]
      },
      {
        "q": "How do haptic technologies work in both directions - computer to person and person to computer? Give examples from the book.",
        "answer": "In one direction, the computer sends 'feeling' to a person, such as a vibrating game controller simulating an explosion or a car's steering wheel vibrating during an unsafe lane change. In the other direction, the computer 'feels' the person's actions, for example through a mouse, touchpad, VR hand controllers, or headsets that track head movement. Both directions typically rely on a combination of transducers and actuators.",
        "useVocab": [
          "haptic technology",
          "transducer",
          "actuator"
        ]
      },
      {
        "q": "What is a digital twin, and how is it created using sensing technologies, according to the book's wind turbine example?",
        "answer": "A digital twin is a real-time digital counterpart of a physical object. In the wind turbine example, IoT sensors placed on and around the turbine measure things like stress, motion and vibration, wind speed, platform stability, and changes in the surrounding soil. This data creates a real-time digital version of the turbine that can be monitored remotely without needing to be physically on site.",
        "useVocab": [
          "digital twin"
        ]
      },
      {
        "q": "How do smelling technologies detect things like carbon monoxide, natural gas leaks, and smoke, since these are not always detectable by humans?",
        "answer": "Carbon monoxide is colorless, odorless, and tasteless, so detectors recognize its molecular presence directly since humans cannot smell it. Natural gas has no natural odor, so companies add a harmless odorant called mercaptan to give it a detectable rotten-egg smell. Smoke detectors work differently, detecting the physical particles that smoke produces in the air.",
        "useVocab": [
          "digital scent technology"
        ]
      },
      {
        "q": "What is the difference between motion capture and its subset gesture recognition, and what role does hand and finger tracking play, according to the book?",
        "answer": "Motion capture is the broader process of detecting and recording the movement of objects or people, used in filmmaking, physical therapy, and sports safety research. Gesture recognition is a subset focused specifically on recognizing human gestures like shoulder shrugs or in-air hand swipes. Hand and finger tracking, an important part of gesture recognition, was first applied to interpreting sign language, as in the GnoSys app, which translates hand movements into speech without requiring gloves.",
        "useVocab": [
          "motion capture",
          "gesture recognition",
          "hand and finger tracking"
        ]
      }
    ]
  },
  {
    "id": 10,
    "topic": "Communications Technologies",
    "hook": "Anywhere Is the New Where",
    "summary": [
      {
        "h": "What is it?",
        "de": "Kommunikationstechnologien übertragen Daten zwischen Geräten und sind die Grundlage dafür, dass Technologien wie autonome Fahrzeuge, Drohnen, IoT und Extended Reality überhaupt funktionieren können. Viele dieser Technologien existieren schon seit der 3. industriellen Revolution, werden aber für die 4. industrielle Revolution unverzichtbar, weil Mobilität bedeutet, dass Geräte praktisch überall kommunizieren müssen ('Anywhere is the new where'). Sie reichen von sehr kurzer Reichweite (RFID, NFC, Bluetooth) über mittlere Reichweite (WiFi, LiFi) bis zu sehr großen Distanzen (Mobilfunk-Gs, Richtfunk, Satelliten).",
        "en": "Communications technologies transmit data between devices and form the foundation that makes technologies like autonomous vehicles, drones, IoT, and extended reality possible. Many of these technologies have existed since the 3rd industrial revolution, but they become essential for the 4th industrial revolution because mobility means devices must be able to communicate practically anywhere ('anywhere is the new where'). They range from very short range (RFID, NFC, Bluetooth) to medium range (WiFi, LiFi) to very long distances (cellular Gs, microwave relay, satellites)."
      },
      {
        "h": "How does it work?",
        "de": "Bluetooth verbindet Geräte über kurze Distanzen (~30 Fuß); Bluetooth LE (low energy) ist kleiner, günstiger und für seltene, kleine Datenmengen gedacht (z. B. Tile-Tracker), während klassisches Bluetooth für Dauerverbindungen mit viel Datenvolumen genutzt wird. RFID sendet per Funkwellen Identifikationsdaten von einem Chip an ein Lesegerät und kann passiv (keine eigene Batterie, wenige Meter Reichweite) oder aktiv (eigene Stromquelle, hunderte Meter Reichweite) sein; NFC ist eine RFID-Untergruppe mit nur wenigen Zentimetern Reichweite, z. B. bei kontaktlosen EMV-Kartenzahlungen. WiFi verbindet lokale Netzwerke über Funkwellen (~75-500 Fuß); LiFi ist eine neue Technologie, die stattdessen Licht zur Datenübertragung nutzt und über 100 Gbit/s erreichen kann. Mobilfunkgenerationen (2G bis 6G) werden immer schneller: von 64 kbit/s (2G) bis zu geplanten ~1.000 Gbit/s (6G, ca. 2030). Richtfunk und Satelliten (z. B. Starlink) übertragen große Datenmengen über weite Strecken in Sichtlinie ('line-of-sight'). Oft werden mehrere dieser Technologien miteinander verkettet ('tethering'), um eine einzige Anwendung zu ermöglichen.",
        "en": "Bluetooth connects devices over short distances (about 30 feet); Bluetooth LE (low energy) is smaller, cheaper, and meant for infrequent, small data transfers, such as Tile trackers, whereas classic Bluetooth is used for constant connections moving larger amounts of data, such as wireless speakers. RFID uses radio waves to send identification data from a chip to a reader device, and can be passive (no battery, range of a few feet) or active (own power supply, range of hundreds of meters); NFC is a subset of RFID limited to a few centimeters, used for example in contactless EMV card payments. WiFi connects local networks using radio waves (about 75-500 feet); LiFi is an emerging technology that instead uses light to transmit data and can exceed 100 gigabits per second. Cellular generations (2G through 6G) keep getting faster, from 64 kbps (2G) up to a projected roughly 1,000 gbps (6G, around 2030). Microwave relays and satellites (such as Starlink) transmit huge amounts of data over long, line-of-sight distances. Multiple of these technologies are often chained together ('tethering') to enable a single application."
      },
      {
        "h": "Example from the book",
        "de": "Das Buch beschreibt, wie ein 'riechender' Sensor im Kühlschrank erkennt, dass die Milch schlecht wird, dies per Bluetooth an die Kühlschrank-Zentrale meldet, die wiederum über WiFi das Smart-Home-System nutzt, um Milch nachzubestellen und eine Textnachricht zu senden; die Bestellung läuft dann über das 5G-Netz (das intern auch Richtfunk nutzen kann) zum Lebensmittelgeschäft. Dies illustriert das Konzept des 'Tethering' - mehrere Kommunikationstechnologien werden miteinander verkettet, um eine Anwendung zu realisieren. Als weiteres Beispiel nennt das Buch Starlink von Elon Musk, das derzeit fast 5.300 erdnahe Satelliten (LEOS) betreibt und langfristig bis zu 42.000 einsetzen will, um weltweit Internetzugang bereitzustellen.",
        "en": "The book describes how a 'smelling' sensor in a refrigerator detects that milk is going bad, communicates this via Bluetooth to the fridge's central command center, which then uses WiFi to connect to the smart home system to order milk and send a text alert; the order then travels through the 5G network (which internally may also use microwave links) to the grocery store. This illustrates the concept of tethering, chaining multiple communications technologies together to enable one application. As another example, the book cites Elon Musk's Starlink, which currently operates almost 5,300 low-earth-orbit satellites (LEOS) and may eventually deploy as many as 42,000 to provide Internet access to the entire global population."
      },
      {
        "h": "Opportunities & Risks",
        "de": "5G wird stark beworben, aber die '62 % Abdeckung' der Amerikaner bezieht sich nur auf verfügbare Haushalte, nicht auf die tatsächliche Flächenabdeckung, die auf dem Land viel geringer ist. 6G (~2030) soll rund 100-mal schneller als 5G sein und verspricht praktisch latenzfreie Nutzung von VR/AR, IoT und KI. LiFi hat den Vorteil, dass es andere funkbasierte Netze nicht stört (z. B. im Flugzeugcockpit), ist aber noch in einem frühen Erfindungsstadium und teuer (~2.000 $ Kit). Kabelgebundene Technologien wie Glasfaser bleiben trotz des Trends zu drahtloser Mobilität weiterhin zentral für die Infrastruktur. Da fast jede Innovation mehrere Kommunikationstechnologien gleichzeitig benötigt, hängt der Erfolg vieler 4IR-Anwendungen von einem robusten Zusammenspiel dieser Technologien ab.",
        "en": "5G is heavily advertised, but the '62% coverage' of Americans refers only to availability in homes, not actual land coverage, which is much lower in rural areas. 6G (around 2030) is expected to be roughly 100 times faster than 5G and promises virtually latency-free use of VR/AR, IoT, and AI. LiFi has the advantage of not interfering with other radio-frequency-based networks, such as in an airplane cockpit, but it is still in an early invention stage and expensive (about a $2,000 kit). Wired technologies like fiber optics remain central to infrastructure despite the trend toward wireless mobility. Because almost every innovation requires multiple communications technologies working together, the success of many 4IR applications depends on the robust interplay of these technologies."
      }
    ],
    "details": [
      "Bluetooth: kurze Reichweite bis ~30 Fuß, seit frühen 2000ern; Boards ab ca. 1 Zoll und $6; Bluetooth LE (low energy) z. B. bei Tile-Trackern; klassisches Bluetooth für Dauerverbindung mit viel Datenvolumen (z. B. Lautsprecher).",
      "RFID: passive Tags ohne Batterie (~$0,05, wenige Fuß Reichweite) vs. aktive Tags mit eigener Stromquelle (~$25+, hunderte Meter); außerdem beacon (sendet dauerhaft) vs. transponder (sendet nur auf Anfrage) und read-only vs. read-write.",
      "NFC: RFID-Untergruppe mit Reichweite bis ca. 10 cm (~4 Zoll); Basis für EMV (Europay, Mastercard, Visa) bei kontaktlosen Kartenzahlungen.",
      "WiFi: Reichweite ~75 Fuß (innen), bis 500 Fuß im Freien; meistgenutzte Netzwerktechnologie weltweit.",
      "LiFi (light fidelity): nutzt sichtbares Licht, UV oder Infrarot statt Funk; über 100 Gbit/s möglich (vs. durchschnittliches Heim-WiFi <1 Gbit/s, meist 100-200 Mbit/s); LiFi.co-Kit ca. $2.000; stört RF-Netze nicht (z. B. Flugzeug-Cockpit).",
      "Mobilfunkgenerationen: 2G 64 kbit/s (1990er), 3G 8 Mbit/s (frühe 2000er), 4G 50 Mbit/s (2009), 5G 10 Gbit/s (2018); 6G erwartet ca. 2030, ~100x schneller als 5G (ca. 1.000 Gbit/s).",
      "5G-Abdeckung 2024: ~62 % der Amerikaner, aber gemeint ist Verfügbarkeit in Haushalten (3 von 5), nicht Flächenabdeckung, die auf dem Land viel geringer ist.",
      "Richtfunk/Satelliten: Sichtlinien-Technologien ('line-of-sight'); Relaisstationen alle 8-10 Meilen; Starlink (Elon Musk/SpaceX): aktuell ~5.300 erdnahe Satelliten (LEOS), Ausbau auf bis zu 42.000 geplant.",
      "Tethering-Beispiel: 'riechender' Kühlschranksensor -> Bluetooth -> WiFi -> 5G-Netz (intern ggf. Richtfunk) -> Bestellung beim Lebensmittelgeschäft.",
      "Kabelgebundene Technologien (v. a. Glasfaser) bleiben trotz Mobilitätstrend eine zentrale Infrastruktursäule."
    ],
    "vocab": [
      {
        "en": "Bluetooth",
        "de": "Bluetooth",
        "note": "short-range wireless standard, up to about 30 feet"
      },
      {
        "en": "Bluetooth LE (low energy)",
        "de": "Bluetooth LE (Low Energy)",
        "note": "smaller, cheaper variant for intermittent, low-data connections"
      },
      {
        "en": "RFID (radio-frequency identification)",
        "de": "RFID (Funkerkennung)",
        "note": "reader device identifies/tracks tags via radio waves"
      },
      {
        "en": "passive RFID tag",
        "de": "passiver RFID-Tag",
        "note": "no battery, powered by the reader's radio wave, short range"
      },
      {
        "en": "active RFID tag",
        "de": "aktiver RFID-Tag",
        "note": "has its own power supply, works over hundreds of meters"
      },
      {
        "en": "beacon tag",
        "de": "Beacon-Tag",
        "note": "continuously transmits information at set intervals"
      },
      {
        "en": "transponder tag",
        "de": "Transponder-Tag",
        "note": "only transmits when it receives a signal from the reader"
      },
      {
        "en": "NFC (near-field communication)",
        "de": "NFC (Nahfeldkommunikation)",
        "note": "RFID subset limited to about 10 cm, e.g. contactless payments"
      },
      {
        "en": "EMV",
        "de": "EMV-Standard",
        "note": "Europay, Mastercard, Visa contactless payment standard using NFC"
      },
      {
        "en": "WiFi",
        "de": "WLAN",
        "note": "wireless network protocol suite for local area networking"
      },
      {
        "en": "LiFi (light fidelity)",
        "de": "LiFi (Lichttreue)",
        "note": "uses visible/UV/infrared light instead of radio waves for data"
      },
      {
        "en": "cellular network",
        "de": "Mobilfunknetz",
        "note": "network of land 'cells' each with at least one transceiver"
      },
      {
        "en": "broadband",
        "de": "Breitband",
        "note": "high-speed transmission of multiple communications simultaneously"
      },
      {
        "en": "mobile virtual network operator (MVNO)",
        "de": "virtueller Mobilfunkbetreiber",
        "note": "leases capacity from major carriers, e.g. Mint, Cricket, Boost"
      },
      {
        "en": "5G",
        "de": "5G",
        "note": "5th generation cellular network, ~10 gbps, introduced in 2018"
      },
      {
        "en": "6G",
        "de": "6G",
        "note": "6th generation cellular network, expected around 2030"
      },
      {
        "en": "latency",
        "de": "Latenz",
        "note": "delay between an action and the system's response"
      },
      {
        "en": "microwave relay",
        "de": "Richtfunkstrecke",
        "note": "line-of-sight towers positioned about every 8-10 miles"
      },
      {
        "en": "satellite",
        "de": "Satellit",
        "note": "orbiting line-of-sight communications infrastructure, e.g. Starlink"
      },
      {
        "en": "low-earth orbit satellite (LEOS)",
        "de": "erdnaher Satellit (LEOS)",
        "note": "used by Starlink; almost 5,300 currently in orbit"
      },
      {
        "en": "line-of-sight",
        "de": "Sichtlinie",
        "note": "sender and receiver must be able to 'see' each other, e.g. microwave/satellite"
      },
      {
        "en": "tethering",
        "de": "Verkettung (Tethering)",
        "note": "combining multiple communications technologies to enable one application"
      },
      {
        "en": "fiber optics",
        "de": "Glasfaser",
        "note": "wired communications technology still key to infrastructure"
      },
      {
        "en": "transceiver",
        "de": "Transceiver",
        "note": "device that can both transmit and receive data"
      }
    ],
    "mc": [
      {
        "q": "What is the main difference between classic Bluetooth and Bluetooth LE?",
        "options": [
          "Classic Bluetooth is for constant connections moving lots of data, while Bluetooth LE is for intermittent connections with little data, like Tile trackers",
          "Bluetooth LE only works underwater",
          "Classic Bluetooth and Bluetooth LE have identical range, cost, and power use"
        ],
        "correct": 0,
        "why": "The book distinguishes classic Bluetooth (constant connection, high data volume, e.g. wireless speakers) from Bluetooth LE (intermittent, low-data, low-energy use cases like item trackers)."
      },
      {
        "q": "How does NFC relate to RFID?",
        "options": [
          "NFC is a completely unrelated, older technology",
          "NFC is a subset of RFID limited to a range of about 10 centimeters, used e.g. for contactless payments",
          "NFC has a longer range than any RFID tag"
        ],
        "correct": 1,
        "why": "NFC is described as a subset of RFID with data, speed, and distance limitations, typically no more than about 10 cm, as used in EMV contactless payments."
      },
      {
        "q": "What key advantage does LiFi have over WiFi, according to the book?",
        "options": [
          "It uses light instead of radio frequency, so it doesn't interfere with RF-based networks, such as on an airplane",
          "It requires no electricity at all to operate",
          "It has unlimited range across entire continents"
        ],
        "correct": 0,
        "why": "Because LiFi transmits via light rather than radio waves, it would not interfere with RF-based communications networks, such as an airplane cockpit's systems."
      },
      {
        "q": "What does the '62% 5G coverage of Americans' figure actually mean, according to the book?",
        "options": [
          "62% of the entire U.S. land area has full 5G signal",
          "5G is available in the homes of 3 out of every 5 Americans, while actual land coverage is much lower",
          "62% of Americans have personally tested 5G speeds"
        ],
        "correct": 1,
        "why": "The book clarifies that this 'coverage' figure is about household availability, not land area, and rural land coverage is much lower."
      },
      {
        "q": "What do microwave relays and satellites have in common as communications technologies?",
        "options": [
          "They are both line-of-sight technologies where sender and receiver must be able to 'see' each other",
          "They both use Bluetooth LE protocols",
          "They only work indoors"
        ],
        "correct": 0,
        "why": "The book explains that microwaves and satellites are line-of-sight technologies, unlike WiFi signals that can bounce off walls indoors."
      }
    ],
    "recall": [
      {
        "q": "Explain the concept of 'tethering' communications technologies using the book's smart refrigerator example.",
        "answer": "Tethering means chaining multiple communications technologies together so one application can work end to end. In the book's example, a smelling sensor in a fridge detects spoiling milk and uses Bluetooth to alert the fridge's command center, which uses WiFi to reach the smart home system and place an order; that order then travels over the 5G network, which may itself use microwave links, to reach the grocery store.",
        "useVocab": [
          "tethering",
          "Bluetooth",
          "WiFi",
          "5G",
          "microwave relay"
        ]
      },
      {
        "q": "Describe the difference between passive and active RFID tags.",
        "answer": "Passive RFID tags have no battery and instead draw enough electrical energy from the reader's electromagnetic radio waves to send back their data; they work over short distances of a few feet and are very inexpensive. Active RFID tags have their own built-in power supply, can work over distances of several hundred meters, and can store and transmit more information, but cost significantly more.",
        "useVocab": [
          "passive RFID tag",
          "active RFID tag",
          "RFID (radio-frequency identification)"
        ]
      },
      {
        "q": "What is Starlink and why is it significant for global communications?",
        "answer": "Starlink is a satellite Internet project started by Elon Musk that aims to provide Internet access to the entire global population using low-earth orbit satellites. It currently operates almost 5,300 LEOS connected to dedicated ground transceivers, with the full deployment potentially reaching as many as 42,000 satellites.",
        "useVocab": [
          "satellite",
          "low-earth orbit satellite (LEOS)",
          "transceiver"
        ]
      },
      {
        "q": "Why does the book say 'anywhere is the new where' for communications technologies?",
        "answer": "Because 4th industrial revolution technologies like autonomous vehicles, drones, IoT, and extended reality depend on mobility, they need reliable communication wherever they are, not just at fixed locations with a wall outlet or wired connection. Faster, more reliable communications technologies, from Bluetooth to 5G and satellites, are what make this 'anywhere' connectivity possible.",
        "useVocab": [
          "cellular network",
          "5G",
          "tethering"
        ]
      },
      {
        "q": "What is the promise of 6G compared to 5G?",
        "answer": "6G is the sixth-generation cellular standard expected around 2030, and it is projected to be roughly 100 times faster than 5G, reaching speeds around 1,000 gbps. It promises to enable technologies like virtual and mixed reality, IoT, and AI over a broadband cellular network with no noticeable latency or degradation in speed.",
        "useVocab": [
          "6G",
          "5G",
          "latency"
        ]
      }
    ]
  },
  {
    "id": 11,
    "topic": "Infrastructure Technologies",
    "hook": "3 Minutes vs. 10,000 Years: The Quantum Supremacy Moment",
    "summary": [
      {
        "h": "What is it?",
        "de": "Infrastruktur-Technologien sind grundlegende Basistechnologien, die selbst nicht neu sind, aber für den Erfolg der 4. industriellen Revolution unverzichtbar sind: Quantencomputing, Cloud Computing und Nanotechnologie. Quantencomputing verspricht unglaubliche Rechengeschwindigkeit durch eine völlig andere Art der Informationsverarbeitung. Cloud Computing bedeutet, Daten und Software im Internet statt auf der eigenen Festplatte zu speichern und zu verarbeiten, meist als 'as-a-service'-Modell. Nanotechnologie manipuliert Materie im Maßstab von 1 bis 100 Nanometern, um daraus größere (aber weiterhin winzige) Dinge zu bauen.",
        "en": "Infrastructure technologies are foundational technologies that aren't new themselves but are essential to the success of the 4th industrial revolution: quantum computing, cloud computing, and nanotechnology. Quantum computing promises unbelievable computational speed through a fundamentally different way of processing information. Cloud computing means storing, accessing, and processing information and software over the Internet instead of on your own hard drive, usually delivered as an 'as-a-service' model. Nanotechnology manipulates matter at a scale of 1 to 100 nanometers to build larger (but still extremely small) things."
      },
      {
        "h": "How does it work?",
        "de": "Klassische Computer speichern Information als Bits (0 oder 1, binär); Quantencomputer nutzen stattdessen Qubits, die dank 'Superposition' gleichzeitig 0 und 1 sein können. Dadurch steigt die Rechengeschwindigkeit nicht linear, sondern als 2 hoch n (n = Anzahl Qubits) - jedes weitere Qubit verdoppelt die Geschwindigkeit, ähnlich der Reiskörner-Verdopplung auf einem Schachbrett. Cloud Computing basiert auf dem 'as-a-service'-Prinzip statt Eigentum: Infrastructure-as-a-Service (IaaS, z. B. virtueller Speicher), Platform-as-a-Service (PaaS, inkl. Entwicklungsumgebungen) und Software-as-a-Service (SaaS, fertige Anwendungen wie Salesforce), wobei SaaS den größten Marktanteil hat. Nanotechnologie funktioniert wie 3D-Druck im extrem kleinen Maßstab: additive Fertigung Schicht für Schicht, aber mit Schichten im Nanometerbereich (1 Nanometer = ein Milliardstel Meter), bis hin zum molekül- oder atomweisen Aufbau.",
        "en": "Classical computers store information as bits (0 or 1, binary); quantum computers instead use qubits, which thanks to 'superposition' can be both 0 and 1 at the same time. This means computational speed doesn't scale linearly but as 2 to the power of n (n = number of qubits) - each additional qubit doubles the speed, similar to the doubling of rice grains on a chessboard. Cloud computing is built on the 'as-a-service' principle instead of ownership: Infrastructure-as-a-Service (IaaS, e.g. virtual storage), Platform-as-a-Service (PaaS, including development environments), and Software-as-a-Service (SaaS, ready-made applications like Salesforce), with SaaS holding the largest market share. Nanotechnology works like 3D printing at an extremely small scale: additive manufacturing layer by layer, but with layers at the nanometer scale (1 nanometer = one-billionth of a meter), potentially down to building molecule by molecule or atom by atom."
      },
      {
        "h": "Example from the book",
        "de": "2019 gab Google bekannt, 'Quantenüberlegenheit' erreicht zu haben: Sein Quantencomputer löste eine mathematische Berechnung in 3 Minuten und 20 Sekunden, für die der damals schnellste Supercomputer Fugaku (425 Petaflops) über 10.000 Jahre gebraucht hätte. Als Beispiel für den medizinischen Nutzen nennt das Buch das menschliche Genom (3 Milliarden Basenpaare): Klassisch benötigt es etwa 1,5 Gigabyte Speicher, während 34 Qubits ausreichen - und 68 Qubits würden reichen, um das Genom aller Menschen der Welt zu speichern. Zur Veranschaulichung des exponentiellen Wachstums erzählt das Buch die Geschichte vom Schachspiel-Erfinder, der sich pro Feld die doppelte Menge Reiskörner des Vorfelds auszahlen ließ - am Ende entspräche die Reismenge dem Volumen des Mount Everest.",
        "en": "In 2019, Google announced it had achieved 'quantum supremacy': its quantum computer solved a mathematical computation in 3 minutes and 20 seconds that would have taken the then-fastest supercomputer, Fugaku (425 petaflops), over 10,000 years. As an example of medical benefit, the book cites the human genome (3 billion base pairs): storing it classically requires about 1.5 gigabytes, while 34 qubits suffice, and 68 qubits would be enough to store the genome of every person in the world. To illustrate exponential growth, the book tells the story of the inventor of chess, who was paid double the rice grains of the previous square for each square on the board - by the end, the total rice would equal the volume of Mount Everest."
      },
      {
        "h": "Opportunities & Risks",
        "de": "Quantencomputing eröffnet enorme Chancen in Medizin (Genomforschung, Medikamententests) und KI (schnelleres Training mit riesigen Datenmengen), birgt aber ein ernstes Sicherheitsrisiko: Ein 256-Qubit-Quantencomputer könnte theoretisch alle Kombinationen eines 256-Bit-Blockchain-Schlüssels gleichzeitig ausprobieren und damit heutige Kryptowährungs-Sicherheit aushebeln. Beim Cloud Computing lohnt sich eine Kosten-Nutzen-Analyse (Break-Even-Analyse): Statt einen 2-TB-USB-Stick für 40 $ zu kaufen, kostet Cloud-Speicher wie AWS S3 Glacier nur etwa 1 $/Monat. Nanotechnologie verspricht bahnbrechende medizinische Anwendungen wie zielgerichtete Medikamentenabgabe an Krebszellen oder Nanoroboter zur Zellreparatur, erfordert aber extrem teure und komplexe Fertigungstechnik.",
        "en": "Quantum computing opens huge opportunities in medicine (genome research, drug testing) and AI (faster training on massive datasets), but it also carries a serious security risk: a 256-qubit quantum computer could theoretically try all combinations of a 256-bit blockchain key simultaneously, undermining today's cryptocurrency security. For cloud computing, a break-even analysis is worthwhile: instead of buying a 2TB flash drive for $40, cloud storage like AWS S3 Glacier costs only about $1 per month. Nanotechnology promises groundbreaking medical applications, such as targeted drug delivery to cancer cells or nanorobots that repair cells, but it requires extremely expensive and complex manufacturing equipment."
      }
    ],
    "details": [
      "Google 2019: 'Quantenüberlegenheit' (quantum supremacy) - Berechnung in 3 Min 20 Sek gelöst, die der Supercomputer Fugaku (RIKEN/Fujitsu, 425 Petaflops) über 10.000 Jahre gebraucht hätte.",
      "Bit = kleinste binäre Einheit (0 oder 1); Byte = Gruppe von Bits (z. B. 1 Buchstabe); 1 Nibble = 4 Bit; 1 Crumb = 2 Bit (Buch-Insider-Scherz).",
      "Qubit = Quantum-Bit, kann dank Superposition gleichzeitig 0 und 1 sein; Geschwindigkeit skaliert als 2 hoch n (n = Anzahl Qubits), nicht linear.",
      "Reiskörner-Schachbrett-Geschichte: Verdopplung pro Feld -> am Ende Reismenge in der Größenordnung des Mount Everest (Veranschaulichung von exponentiellem Wachstum/Scaling).",
      "Menschliches Genom (3 Mrd. Basenpaare): klassisch ca. 1,5 GB Speicher nötig, aber nur 34 Qubits; 68 Qubits würden für das Genom aller Menschen weltweit reichen.",
      "Sicherheitsrisiko: 256-Bit-Blockchain-Schlüssel hat ca. 1,16 x 10^77 Kombinationen; ein 256-Qubit-Quantencomputer könnte theoretisch alle gleichzeitig testen.",
      "Marktakteure Quantencomputing: SpinQ Gemini-Desktop-Quantencomputer ($43.000) / Gemini Mini ($8.900); IBM-Chip-Entwicklung: 127 Qubits (2021) -> 433 Qubits (2022) -> 1.121 Qubits (aktuellster Chip).",
      "Cloud-Geschäftsmodelle: IaaS (Infrastructure-as-a-Service, z. B. virtueller Speicher/Server), PaaS (Platform-as-a-Service, inkl. Entwicklungsumgebungen), SaaS (Software-as-a-Service, größter Marktanteil, Beispiel Salesforce/CRM).",
      "Break-Even-Beispiel: 2-TB-Flash-Laufwerk für ca. $40 einmalig vs. AWS S3 Glacier Deep Archive für ca. $1/Monat (Break-even nach ca. 40 Monaten).",
      "Nanotechnologie: 1 Nanometer = 1 Milliardstel Meter; menschliches Haar ~100.000 nm breit; Definition: Materialmanipulation zwischen 1 und 100 nm; Vergleich: wäre eine Murmel 1 nm groß, wäre 1 Meter so groß wie die Erde.",
      "Medizinische Nanotechnologie: Nanopartikel zur zielgerichteten Medikamenten-/Wärme-/Lichtabgabe an Krebszellen; Nanoroboter zur Reparatur erkrankter Zellen (ähnlich körpereigenen Antikörpern)."
    ],
    "vocab": [
      {
        "en": "quantum computing",
        "de": "Quantencomputing",
        "note": "alternative to classical computing using quantum states like superposition"
      },
      {
        "en": "qubit",
        "de": "Qubit",
        "note": "quantum binary digit; can represent 0 and 1 simultaneously"
      },
      {
        "en": "superposition",
        "de": "Superposition",
        "note": "quantum state where a qubit is both 0 and 1 at once"
      },
      {
        "en": "quantum supremacy",
        "de": "Quantenüberlegenheit",
        "note": "Google's 2019 claim of solving a task no classical computer could in reasonable time"
      },
      {
        "en": "bit",
        "de": "Bit",
        "note": "binary digit, 0 or 1, the smallest unit in classical computing"
      },
      {
        "en": "byte",
        "de": "Byte",
        "note": "a logical group of bits, e.g. representing one letter"
      },
      {
        "en": "classical computing",
        "de": "klassisches Computing",
        "note": "information stored/processed in binary form (bits)"
      },
      {
        "en": "petaflop",
        "de": "Petaflop",
        "note": "one thousand million million floating point operations per second"
      },
      {
        "en": "cloud computing",
        "de": "Cloud Computing",
        "note": "storing, accessing, processing data/software over the Internet"
      },
      {
        "en": "as-a-service",
        "de": "als Dienstleistung (as-a-service)",
        "note": "paying for access instead of ownership, e.g. Netflix, Spotify"
      },
      {
        "en": "Infrastructure-as-a-Service (IaaS)",
        "de": "Infrastruktur als Dienstleistung",
        "note": "basic tech needs like virtual storage and servers"
      },
      {
        "en": "Platform-as-a-Service (PaaS)",
        "de": "Plattform als Dienstleistung",
        "note": "adds development environments and tools to IaaS"
      },
      {
        "en": "Software-as-a-Service (SaaS)",
        "de": "Software als Dienstleistung",
        "note": "using application software without owning it; largest cloud market share"
      },
      {
        "en": "break-even analysis",
        "de": "Break-Even-Analyse",
        "note": "comparing cost of ownership vs. as-a-service over time"
      },
      {
        "en": "nanotechnology",
        "de": "Nanotechnologie",
        "note": "manipulating matter with dimensions between 1 and 100 nanometers"
      },
      {
        "en": "nanometer",
        "de": "Nanometer",
        "note": "one-billionth of a meter"
      },
      {
        "en": "nanoparticle",
        "de": "Nanopartikel",
        "note": "engineered particle used e.g. for targeted drug delivery to cancer cells"
      },
      {
        "en": "nanorobot",
        "de": "Nanoroboter",
        "note": "microscopic robot proposed to repair diseased cells"
      },
      {
        "en": "additive manufacturing",
        "de": "additive Fertigung",
        "note": "building up material layer by layer, as in 3D printing and nanotech"
      },
      {
        "en": "subtractive manufacturing",
        "de": "subtraktive Fertigung",
        "note": "removing material from a larger piece to shape a product"
      }
    ],
    "mc": [
      {
        "q": "What made Google's 2019 quantum computing achievement so remarkable?",
        "options": [
          "It solved a calculation in 3 minutes and 20 seconds that would have taken the world's fastest supercomputer over 10,000 years",
          "It was the first computer ever built that could store more than one gigabyte of data",
          "It successfully predicted the stock market for an entire year"
        ],
        "correct": 0,
        "why": "This is the book's example of 'quantum supremacy': a task that would take supercomputer Fugaku over 10,000 years was solved in 3 minutes 20 seconds."
      },
      {
        "q": "What makes a qubit different from a classical bit?",
        "options": [
          "A qubit can only represent 0, never 1",
          "A qubit can represent both 0 and 1 at the same time through superposition",
          "A qubit is simply a faster version of a bit but works exactly the same way"
        ],
        "correct": 1,
        "why": "Unlike a classical bit, which is either 0 or 1, a qubit can be in superposition, representing both states simultaneously."
      },
      {
        "q": "Why does the book tell the story of rice grains doubling on a chessboard?",
        "options": [
          "To illustrate exponential scaling, similar to how adding one more qubit doubles quantum computing speed",
          "To explain how chess was invented in ancient China",
          "To describe the history of rice farming"
        ],
        "correct": 0,
        "why": "The chessboard story illustrates exponential growth (doubling per square), paralleling how each additional qubit doubles quantum computing speed (2^n scaling)."
      },
      {
        "q": "Which cloud computing service model accounts for the largest share of business cloud spending, according to the book?",
        "options": [
          "Infrastructure-as-a-Service (IaaS)",
          "Platform-as-a-Service (PaaS)",
          "Software-as-a-Service (SaaS)"
        ],
        "correct": 2,
        "why": "The book states SaaS is the dominant model, accounting for over half of all cloud computing spending, citing Salesforce as an early example."
      },
      {
        "q": "According to the book's formal definition, what size range does nanotechnology work with?",
        "options": [
          "Between 1 and 100 nanometers",
          "Between 1 and 100 millimeters",
          "Between 1 and 100 micrometers"
        ],
        "correct": 0,
        "why": "The book formally defines nanotechnology as the manipulation of material with at least one dimension between 1 and 100 nanometers."
      }
    ],
    "recall": [
      {
        "q": "Explain why quantum computing poses a security risk for blockchain and cryptocurrency, according to the book.",
        "answer": "Blockchain relies on 256-bit private keys, which have an astronomically large number of possible combinations that would take today's classical computers millions of years to brute-force. However, a quantum computer working with 256 qubits simultaneously could conceivably try all possible combinations at once due to superposition, potentially breaking that security very quickly.",
        "useVocab": [
          "qubit",
          "superposition",
          "quantum computing"
        ]
      },
      {
        "q": "Using the human genome example, explain why qubits can store far more information than classical bits.",
        "answer": "Storing the human genome's 3 billion base pairs classically requires about 1.5 gigabytes using bits, but the same information can be stored in just 34 qubits because qubits can represent multiple states simultaneously through superposition. Doubling that to 68 qubits would provide enough capacity to store the complete genome of every person in the world.",
        "useVocab": [
          "qubit",
          "bit",
          "superposition"
        ]
      },
      {
        "q": "What is the difference between IaaS, PaaS, and SaaS in cloud computing?",
        "answer": "Infrastructure-as-a-Service (IaaS) provides basic technology needs like virtual storage and servers. Platform-as-a-Service (PaaS) goes a step further, adding development environments and tools for building applications. Software-as-a-Service (SaaS) provides ready-to-use application software, such as Salesforce's CRM, without the customer owning or maintaining it, and it is the dominant cloud spending model.",
        "useVocab": [
          "Infrastructure-as-a-Service (IaaS)",
          "Platform-as-a-Service (PaaS)",
          "Software-as-a-Service (SaaS)"
        ]
      },
      {
        "q": "Using the flash drive vs. AWS example, explain the concept of break-even analysis in cloud computing.",
        "answer": "Buying a 2TB flash drive for backup costs about $40 as a one-time purchase, while using AWS S3 Glacier Deep Archive cloud storage costs roughly $1 per month for the same 2TB. A break-even analysis compares these costs over time: it would take about 40 months of cloud storage payments to equal the upfront cost of owning the flash drive, helping decide whether ownership or as-a-service makes more financial sense.",
        "useVocab": [
          "break-even analysis",
          "as-a-service",
          "cloud computing"
        ]
      },
      {
        "q": "What medical applications of nanotechnology does the book describe?",
        "answer": "Researchers are developing nanoparticles engineered to be attracted only to specific diseased cells, such as cancer cells, so they can deliver drugs, heat, or light directly to those cells without harming healthy surrounding tissue. Other researchers are working on nanorobots that could be programmed to repair diseased cells, essentially emulating the body's own natural antibody healing process.",
        "useVocab": [
          "nanoparticle",
          "nanorobot",
          "nanotechnology"
        ]
      }
    ]
  }
];
