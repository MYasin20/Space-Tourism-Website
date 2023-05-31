const destinationsDB = [
  { name : 'moon',
    image: '../src/images/destination/image-moon.png',
    details: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    distance: '384,400 Km',
    travel: '3 Days' 
  },
  { name : 'mars',
    image: '../src/images/destination/image-mars.png',
    details: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    distance: '225 MIL. km',
    travel: '9 months' 
  },
  { name : 'europa',
    image: '../src/images/destination/image-europa.png',
    details: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    distance: '628 MIL. km',
    travel: '3 years' 
  },
  { name : 'titan',
    image: '../src/images/destination/image-titan.png',
    details: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    distance: '1.6 BIL. km',
    travel: '7 years' 
  },
];

const crewsDB =[
  {
    id: 1,
    position: 'commander',
    crewName: 'douglas hurley',
    details: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    image: '../src/images/crew/image-douglas-hurley.png',
  },
  {
    id: 2,
    position: 'mission specialist',
    crewName: 'mark shuttleworth',
    details: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    image: '../src/images/crew/image-mark-shuttleworth.png',
  },
  {
    id: 3,
    position: 'pilot',
    crewName: 'victor glover',
    details: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
    image: '../src/images/crew/image-victor-glover.png',
  },
  {
    id: 4,
    position: 'flight engineer',
    crewName: 'anousheh ansari',
    details: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
    image: '../src/images/crew/image-anousheh-ansari.png',
  },
];

const technologyDB = [
  {
    id: 1,
    techName: 'launch vehicle',
    imgLandscape: '../src/images/technology/image-launch-vehicle-landscape.png',
    imgPortrait: '../src/images/technology/image-launch-vehicle-portrait.jpg',
    details: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    id: 2,
    techName: 'spaceport',
    imgLandscape: '../src/images/technology/image-spaceport-landscape.jpg',
    imgPortrait: '../src/images/technology/image-spaceport-portrait.jpg',
    details: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    id: 3,
    techName: 'space capsule',
    imgLandscape: '../src/images/technology/image-space-capsule-landscape.jpg',
    imgPortrait: '../src/images/technology/image-space-capsule-portrait.jpg',
    details: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
]

export { destinationsDB, crewsDB, technologyDB };