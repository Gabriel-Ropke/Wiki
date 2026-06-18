// Sprites
import bulbasaurSprite from "../assets/pokemon/sprite/bulbasaur.webp";
import ivysaurSprite from "../assets/pokemon/sprite/ivysaur.webp";
import venusaurSprite from "../assets/pokemon/sprite/venusaur.webp";

import charmanderSprite from "../assets/pokemon/sprite/charmander.webp";
import charmeleonSprite from "../assets/pokemon/sprite/charmeleon.webp";
import charizardSprite from "../assets/pokemon/sprite/charizard.webp";

import squirtleSprite from "../assets/pokemon/sprite/squirtle.webp";
import wartortleSprite from "../assets/pokemon/sprite/wartortle.webp";
import blastoiseSprite from "../assets/pokemon/sprite/blastoise.webp";

import caterpieSprite from "../assets/pokemon/sprite/caterpie.webp";
import metapodSprite from "../assets/pokemon/sprite/metapod.webp";
import butterfreeSprite from "../assets/pokemon/sprite/butterfree.webp";

import weedleSprite from "../assets/pokemon/sprite/weedle.webp";
import kakunaSprite from "../assets/pokemon/sprite/kakuna.webp";
import beedrillSprite from "../assets/pokemon/sprite/beedrill.webp";

import pikachuSprite from "../assets/pokemon/sprite/pikachu.webp";

// Ícones antigos para Pokémons que ainda não têm sprites na nova pasta
import snorlaxSprite from "../assets/icons/Cute_Snorlax.png";
import growlitheSprite from "../assets/icons/Growlithe.png";

// Cartas (Cards)
import bulbasaurCard1 from "../assets/pokemon/cards/bulbasaur.webp";
import bulbasaurCard2 from "../assets/pokemon/cards/bulbasaur2.webp";
import ivysaurCard1 from "../assets/pokemon/cards/ivysaur.webp";
import ivysaurCard2 from "../assets/pokemon/cards/ivysaur2.webp";
import venusaurCard1 from "../assets/pokemon/cards/venusaur.webp";
import venusaurCard2 from "../assets/pokemon/cards/venusaur2.webp";

import charmanderCard1 from "../assets/pokemon/cards/charmander.webp";
import charmanderCard2 from "../assets/pokemon/cards/charmander2.webp";
import charmeleonCard1 from "../assets/pokemon/cards/charmeleon.webp";
import charmeleonCard2 from "../assets/pokemon/cards/charmeleon2.webp";
import charizardCard1 from "../assets/pokemon/cards/charizard.webp";
import charizardCard2 from "../assets/pokemon/cards/charizard2.webp";

import squirtleCard1 from "../assets/pokemon/cards/squirtle.webp";
import squirtleCard2 from "../assets/pokemon/cards/squirtle2.webp";
import wartortleCard1 from "../assets/pokemon/cards/wartortle.webp";
import wartortleCard2 from "../assets/pokemon/cards/wartortle2.webp";
import blastoiseCard1 from "../assets/pokemon/cards/blastoise.webp";
import blastoiseCard2 from "../assets/pokemon/cards/blastoise2.webp";

import caterpieCard1 from "../assets/pokemon/cards/caterpie.webp";
import caterpieCard2 from "../assets/pokemon/cards/caterpie2.webp";
import metapodCard1 from "../assets/pokemon/cards/metapod.webp";
import metapodCard2 from "../assets/pokemon/cards/metapod2.webp";
import butterfreeCard1 from "../assets/pokemon/cards/butterfree.webp";
import butterfreeCard2 from "../assets/pokemon/cards/butterfree2.webp";

import weedleCard1 from "../assets/pokemon/cards/weedle.webp";
import kakunaCard1 from "../assets/pokemon/cards/kakuna.webp";
import kakunaCard2 from "../assets/pokemon/cards/kakuna2.webp";
import beedrillCard1 from "../assets/pokemon/cards/beedrill.webp";
import beedrillCard2 from "../assets/pokemon/cards/beedrill2.webp";

import pikachuCard1 from "../assets/pokemon/cards/pikachu.webp";
import pikachuCard2 from "../assets/pokemon/cards/pikachu2.webp";

import snorlaxCard1 from "../assets/pokemon/cards/snorlax.webp";
import snorlaxCard2 from "../assets/pokemon/cards/snorlax2.webp";
import growlitheCard1 from "../assets/pokemon/cards/growlithe.webp";
import growlitheCard2 from "../assets/pokemon/cards/growlithe2.webp";

export const POKEMON_DB = [
    {
        id: "001",
        name: "Bulbasaur",
        img: bulbasaurSprite,
        sprite: bulbasaurSprite,
        cards: [bulbasaurCard1, bulbasaurCard2],
        numberDex: "001",
        types: ["Grass", "Poison"],
        generation: 1,
        height: 0.7,
        weight: 6.9,
        evolutionLine: ["Bulbasaur", "Ivysaur", "Venusaur"],
        description: "Há uma semente de planta em suas costas desde o dia que este Pokémon nasce. A semente cresce lentamente."
    },
    {
        id: "002",
        name: "Ivysaur",
        img: ivysaurSprite,
        sprite: ivysaurSprite,
        cards: [ivysaurCard1, ivysaurCard2],
        numberDex: "002",
        types: ["Grass", "Poison"],
        generation: 1,
        height: 1.0,
        weight: 13.0,
        evolutionLine: ["Bulbasaur", "Ivysaur", "Venusaur"],
        description: "Há um bulbo em suas costas. Quando absorve nutrientes, o bulbo se transforma em uma grande flor."
    },
    {
        id: "003",
        name: "Venusaur",
        img: venusaurSprite,
        sprite: venusaurSprite,
        cards: [venusaurCard1, venusaurCard2],
        numberDex: "003",
        types: ["Grass", "Poison"],
        generation: 1,
        height: 2.0,
        weight: 100.0,
        evolutionLine: ["Bulbasaur", "Ivysaur", "Venusaur"],
        description: "A planta floresce quando está absorvendo energia solar. Fica sempre em movimento para buscar luz solar."
    },
    {
        id: "004",
        name: "Charmander",
        img: charmanderSprite,
        sprite: charmanderSprite,
        cards: [charmanderCard1, charmanderCard2],
        numberDex: "004",
        types: ["Fire"],
        generation: 1,
        height: 0.6,
        weight: 8.5,
        evolutionLine: ["Charmander", "Charmeleon", "Charizard"],
        description: "Tem uma preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda."
    },
    {
        id: "005",
        name: "Charmeleon",
        img: charmeleonSprite,
        sprite: charmeleonSprite,
        cards: [charmeleonCard1, charmeleonCard2],
        numberDex: "005",
        types: ["Fire"],
        generation: 1,
        height: 1.1,
        weight: 19.0,
        evolutionLine: ["Charmander", "Charmeleon", "Charizard"],
        description: "Tem uma natureza bárbara. Em batalha, ele chicoteia sua cauda ardente e corta com garras afiadas."
    },
    {
        id: "006",
        name: "Charizard",
        img: charizardSprite,
        sprite: charizardSprite,
        cards: [charizardCard1, charizardCard2],
        numberDex: "006",
        types: ["Fire", "Flying"],
        generation: 1,
        height: 1.7,
        weight: 90.5,
        evolutionLine: ["Charmander", "Charmeleon", "Charizard"],
        description: "Cospe fogo quente o suficiente para derreter pedras. Causa incêndios florestais acidentalmente."
    },
    {
        id: "007",
        name: "Squirtle",
        img: squirtleSprite,
        sprite: squirtleSprite,
        cards: [squirtleCard1, squirtleCard2],
        numberDex: "007",
        types: ["Water"],
        generation: 1,
        height: 0.5,
        weight: 9.0,
        evolutionLine: ["Squirtle", "Wartortle", "Blastoise"],
        description: "Após o nascimento, suas costas incham e endurecem formando uma concha. Ele cospe uma espuma poderosa pela boca."
    },
    {
        id: "008",
        name: "Wartortle",
        img: wartortleSprite,
        sprite: wartortleSprite,
        cards: [wartortleCard1, wartortleCard2],
        numberDex: "008",
        types: ["Water"],
        generation: 1,
        height: 1.0,
        weight: 22.5,
        evolutionLine: ["Squirtle", "Wartortle", "Blastoise"],
        description: "É reconhecido como símbolo de longevidade. Se sua carapaça tem algas nela, aquele Wartortle é muito velho."
    },
    {
        id: "009",
        name: "Blastoise",
        img: blastoiseSprite,
        sprite: blastoiseSprite,
        cards: [blastoiseCard1, blastoiseCard2],
        numberDex: "009",
        types: ["Water"],
        generation: 1,
        height: 1.6,
        weight: 85.5,
        evolutionLine: ["Squirtle", "Wartortle", "Blastoise"],
        description: "Ele esmaga seus inimigos com seu peso avassalador. Desmaia se estiver em uma desvantagem terrível."
    },
    {
        id: "010",
        name: "Caterpie",
        img: caterpieSprite,
        sprite: caterpieSprite,
        cards: [caterpieCard1, caterpieCard2],
        numberDex: "010",
        types: ["Bug"],
        generation: 1,
        height: 0.3,
        weight: 2.9,
        evolutionLine: ["Caterpie", "Metapod", "Butterfree"],
        description: "Para se proteger, ele libera um cheiro horrível das antenas para afastar inimigos."
    },
    {
        id: "011",
        name: "Metapod",
        img: metapodSprite,
        sprite: metapodSprite,
        cards: [metapodCard1, metapodCard2],
        numberDex: "011",
        types: ["Bug"],
        generation: 1,
        height: 0.7,
        weight: 9.9,
        evolutionLine: ["Caterpie", "Metapod", "Butterfree"],
        description: "Ele está esperando o momento de evoluir. Neste estágio, ele só consegue endurecer."
    },
    {
        id: "012",
        name: "Butterfree",
        img: butterfreeSprite,
        sprite: butterfreeSprite,
        cards: [butterfreeCard1, butterfreeCard2],
        numberDex: "012",
        types: ["Bug", "Flying"],
        generation: 1,
        height: 1.1,
        weight: 32.0,
        evolutionLine: ["Caterpie", "Metapod", "Butterfree"],
        description: "Ele adora o néctar das flores e pode localizar as que têm uma quantidade pequena de pólen."
    },
    {
        id: "013",
        name: "Weedle",
        img: weedleSprite,
        sprite: weedleSprite,
        cards: [weedleCard1],
        numberDex: "013",
        types: ["Bug", "Poison"],
        generation: 1,
        height: 0.3,
        weight: 3.2,
        evolutionLine: ["Weedle", "Kakuna", "Beedrill"],
        description: "Seu ferrão venenoso na cabeça é muito perigoso. Fica comendo folhas escondido em grama alta."
    },
    {
        id: "014",
        name: "Kakuna",
        img: kakunaSprite,
        sprite: kakunaSprite,
        cards: [kakunaCard1, kakunaCard2],
        numberDex: "014",
        types: ["Bug", "Poison"],
        generation: 1,
        height: 0.6,
        weight: 10.0,
        evolutionLine: ["Weedle", "Kakuna", "Beedrill"],
        description: "Quase incapaz de se mover, este Pokémon apenas aguarda a evolução em sua casca dura."
    },
    {
        id: "015",
        name: "Beedrill",
        img: beedrillSprite,
        sprite: beedrillSprite,
        cards: [beedrillCard1, beedrillCard2],
        numberDex: "015",
        types: ["Bug", "Poison"],
        generation: 1,
        height: 1.0,
        weight: 29.5,
        evolutionLine: ["Weedle", "Kakuna", "Beedrill"],
        description: "Ele pode ser visto voando em alta velocidade. Usa seus três ferrões venenosos para atacar inimigos."
    },
    {
        id: "025",
        name: "Pikachu",
        img: pikachuSprite,
        sprite: pikachuSprite,
        cards: [pikachuCard1, pikachuCard2],
        numberDex: "025",
        types: ["Electric"],
        generation: 1,
        height: 0.4,
        weight: 6.0,
        evolutionLine: ["Pichu", "Pikachu", "Raichu"],
        description: "Sempre que o Pikachu se depara com algo novo, ele lança um choque elétrico. Se você encontrar uma fruta torrada, é sinal de que esse Pokémon errou a intensidade da carga."
    },
    {
        id: "058",
        name: "Growlithe",
        img: growlitheSprite,
        sprite: growlitheSprite,
        cards: [growlitheCard1, growlitheCard2],
        numberDex: "058",
        types: ["Fire"],
        generation: 1,
        height: 0.7,
        weight: 19.0,
        evolutionLine: ["Growlithe", "Arcanine"],
        description: "Tem uma natureza corajosa e confiável. Ele enfrenta sem medo oponentes maiores e mais fortes."
    },
    {
        id: "143",
        name: "Snorlax",
        img: snorlaxSprite,
        sprite: snorlaxSprite,
        cards: [snorlaxCard1, snorlaxCard2],
        numberDex: "143",
        types: ["Normal"],
        generation: 1,
        height: 2.1,
        weight: 460.0,
        evolutionLine: ["Munchlax", "Snorlax"],
        description: "Não se satisfaz a menos que coma 400 quilos de comida por dia. Quando termina de comer, ele vai dormir prontamente."
    }
];
