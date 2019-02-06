# nhentai-json-http-server
Parses nhentai-js through to http via json

Installation
=====
1) Clone this repository
2) Open a console in the downloaded folder and run ```npm install```
3) Create a ```.env``` file inside the folder with ```PORT=(port)``` inside, replacing (port) your desired port (default port is 80).
4) To start, run ```node njhs.js``` or ```npm test```

Usage
=====
The server can be access by goint to</br>
`http://(your server):(port)/(nhentai book id)`</br>
The json object will be parsed directly from [nhentai-js](https://www.npmjs.com/package/nhentai-js).

Example json response
=====
`http://localhost:8080/147476`
```
{
    "title": "(Reitaisai 12) [Kuma-tan Flash! (Yamu)] Tanetsuke Oji-san Hazard | Jizz Geezer Hazard (Touhou Project) [English]",
    "details": {
        "parodies": [
            "touhou project (10,479)"
        ],
        "characters": [
            "satori komeiji (536)"
        ],
        "tags": [
            "nakadashi (19,279)",
            "impregnation (8,836)",
            "dilf (6,935)",
            "bbm (5,469)",
            "unusual pupils (2,189)"
        ],
        "artists": [
            "yamu (77)"
        ],
        "groups": [
            "kuma-tan flash (84)",
            "reverse noise (69)"
        ],
        "languages": [
            "translated (60,245)",
            "english (45,046)"
        ],
        "categories": [
            "doujinshi (138,514)"
        ]
    },
    "pages": [
        "https://i.nhentai.net/galleries/865683/1.png",
        "https://i.nhentai.net/galleries/865683/2.png",
        "https://i.nhentai.net/galleries/865683/3.png",
        "https://i.nhentai.net/galleries/865683/4.png",
        "https://i.nhentai.net/galleries/865683/5.png",
        "https://i.nhentai.net/galleries/865683/6.png"
    ],
    "link": "https://nhentai.net/g/147476/"
}
```
