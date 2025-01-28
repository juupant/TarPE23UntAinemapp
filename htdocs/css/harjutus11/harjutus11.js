
// Algne nimede massiiv
const nimed = [
    "mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve",
    "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets",
    "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene",
    "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"
];
// Funktsioon, mis korrastab nimed (ees- ja perenimed suure algustähega)
function korrastaNimed(nimed) {
    return nimed.map(nimi => {
        return nimi
            .toLowerCase()
            .split(" ")
            .map(sõna => sõna.charAt(0).toUpperCase() + sõna.slice(1))
            .join(" ");
    });
}

// Funktsioon, mis loob emailid perenimede põhjal
function looEmailid(nimed) {
    return nimed.map(nimi => {
        const perenimi = nimi.split(" ")[1].toLowerCase();
        return `${perenimi}@metshein.com`;
    });
}

// Funktsioon, mis otsib nime massiivist
function otsiNimi(nimed, otsitavNimi) {
    const korrastatudNimed = korrastaNimed(nimed);
    const leitudNimed = korrastatudNimed.filter(nimi => nimi.toLowerCase().includes(otsitavNimi.toLowerCase()));
    
    if (leitudNimed.length > 0) {
        console.log("Leitud nimed:", leitudNimed);
    } else {
        console.log("Nime ei leitud.");
    }
}
// Korrasta nimed ja loo emailid
const korrastatudNimed = korrastaNimed(nimed);
const emailid = looEmailid(korrastatudNimed);

// Kuvame tulemused
console.log("Korrastatud nimed:", korrastatudNimed);
console.log("Emailid:", emailid);

// Otsib nime
otsiNimi(nimed, "Tiina");


const inimesteAndmed = [
    { nimi: "Mari Maasikas", isikukood: "38705123568" },
    { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
    { nimi: "Kristiina Kukk", isikukood: "39203029876" },
    { nimi: "Margus Mustikas", isikukood: "49807010346" },
    { nimi: "Jaak Järve", isikukood: "39504234985" },
    { nimi: "Kadi Kask", isikukood: "39811136789" },
    // Lisa kontrollimiseks oma nimi ja isikukood
    ];
    function birthday(people){
        people.forEach(person =>console.log(gteBirthDay(person.isikukood))
            
        );
    }
    function gteBirthDay(ssid){
        switch (ssid.at(0)) {
            case "1":
            case "2":
                year = 1800         
                break;
            case "3":
            case "4":
                year = 1900         
                break;
            case "5":
            case "6":
                year = 2000         
                break;
            default:
                console.log("vigane isikukood");
                break;
        }
        year += parseInt(ssid.substring(1,3));
        const month = parseInt(ssid.substring(3,5));
        const day = parseInt(ssid.substring(5,7));
        return new Date(year,month,day);
    }
    birthday(inimesteAndmed);
    function age(people){
        people.forEach(person=>{
            console.log((new Date().getFullYear() - gteBirthDay(person.isikukood).getFullYear))
        })
    }
    
    age(inimesteAndmed);
    
    
    //  Kaugushüpe
    const opilased = [
        { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
        { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
        { nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },
        { nimi: "Jaan", tulemused: [4.3, 4.6, 4.4] },
        { nimi: "Liis", tulemused: [5.0, 5.2, 5.1] },
        { nimi: "Peeter", tulemused: [5.5, 5.3, 5.4] },
        { nimi: "Eva", tulemused: [4.8, 4.9, 4.7] },
        { nimi: "Marten", tulemused: [4.7, 4.6, 4.8] },
        { nimi: "Kairi", tulemused: [5.1, 5.3, 5.0] },
        { nimi: "Rasmus", tulemused: [4.4, 4.5, 4.3] },
        ];
        
    //Siin on õpilaste kaugushüppe tulemused. Kuva õpilase nimi, parim tulemus ja keskmine tulemus. Keskmine tulemus ümarda 2 komakohta.
    opilased.forEach(opilane => {
        // Leian parima tulemuse
        const parimTulemus = Math.max(...opilane.tulemused);
      
        // Leian keskmise tulemuse ja ümardame
        const keskmineTulemus = opilane.tulemused.reduce((sum, tulemus) => sum + tulemus, 0) / opilane.tulemused.length;
        const umaratudKeskmine = keskmineTulemus.toFixed(2);
      
        // Kuva tulemused
        console.log(`${opilane.nimi}: Parim tulemus: ${parimTulemus} m, Keskmine tulemus: ${umaratudKeskmine} m`);
      });