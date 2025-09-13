import type { TManga } from "../types";




const mangas:TManga[] = [
{
    id: 1,
    uniqueName: 'demon-slayer',
    title: 'Kimetsu No Yaiba',
    description: 'Tanjiro Kamado, a kind-hearted young man, is forced to become a demon slayer after a monster murders his family, leaving only his sister Nezuko, who is turned into a demon. Tanjiro joins the Demon Slayer Corps to find a cure for Nezuko and avenge his family. Along the way, he faces ferocious demons, forges important friendships with fellow slayers such as Zenitsu Agatsuma and Inosuke Hashibira, and fights alongside the powerful Hashira, the highest-ranking warriors of the organization.',
type: 'manga',
status: 'finished',
rate: 3,
demographic: 'shonen',
author: 'Koyoharu Gotoge',
genreIds: [1, 5, 33, 35],
cover: '/imgs/covers/demon-slayer.jpg',
portrait: '/imgs/portraits/demon-slayer.jpg'
},
{
    id: 2,
    uniqueName: 'one-piece',
    title: 'One Piece',
    description:
      'Monkey D. Luffy, a boy whose body gained the properties of rubber after unintentionally eating a Devil Fruit, sets off on a journey with his pirate crew, the Straw Hat Pirates, to find the legendary treasure known as One Piece and become the Pirate King.',
    type: 'manga',
    status: 'ongoing',
    rate: 5,
    demographic: 'shonen',
    author: 'Eiichiro Oda',
    genreIds: [1, 2, 3, 5, 29, 38],
    cover: '/imgs/covers/one-piece.jpg',
    portrait: '/imgs/portraits/one-piece.webp',
  },
  {
    id: 3,
    uniqueName: 'vinland-saga',
    title: 'Vinland Saga',
    description:
      'Thorfinn, the son of a great Viking warrior, seeks revenge against Askeladd, the man who killed his father. His journey unfolds in the midst of brutal wars and the pursuit of a true purpose beyond vengeance, inspired by the legends of Vinland.',
    type: 'manga',
    status: 'ongoing',
    rate: 5,
    demographic: 'seinen',
    author: 'Makoto Yukimura',
    genreIds: [1, 4, 18, 19, 35],
      cover: '/imgs/covers/vinland-saga.jpg',
    portrait: '/imgs/portraits/vinland-saga.webp',
  },
  {
    id: 4,
    uniqueName: 'coiling-dragon',
    title: 'Coiling Dragon',
    description:
      'Linley Baruch, a descendant of the once-glorious Dragonblood Warrior clan, embarks on a journey of cultivation, battles, and self-discovery as he strives to reclaim his family’s honor and uncover the mysteries of his world.',
    type: 'manhua',
    status: 'finished',
    rate: 4,
    demographic: 'seinen',
    author: 'I Eat Tomatoes',
    genreIds: [1, 5, 6, 17, 16],
    cover: '/imgs/covers/coiling-dragon.jpg',
    portrait: '/imgs/portraits/coiling-dragon.webp',
  },
  {
    id: 5,
    uniqueName:'solo-leveling',
    title: 'Solo Leveling',
    description:
      'Sung Jin-Woo, once the weakest hunter of all mankind, gains a mysterious ability to level up without limits. Rising from the bottom, he faces dangerous dungeons, monsters, and rival hunters as he transforms into the world’s strongest hunter.',
    type: 'mawnha',
    status: 'finished',
    rate: 5,
    demographic: 'shonen',
    author: 'Chugong',
    genreIds: [1, 5, 6, 16, 38],
    cover: '/imgs/covers/solo-leveling.png',
    portrait: '/imgs/portraits/solo-leveling.webp',
  }
];




export default mangas;








