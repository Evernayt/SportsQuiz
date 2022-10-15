import {IQuiz} from '../models/IQuiz';
import {
  badminton,
  basketball,
  gloves,
  kimono,
  skateboard,
  sneakers,
  soccer,
  swimming_cap,
  tennis_racket,
  yoga,
} from './images';

export const quizzes: IQuiz[] = [
  {
    id: 1,
    name: 'UFC',
    image: gloves,
    questions: [
      {
        id: 1,
        question: 'When was the UFC founded?',
        answers: [
          {
            id: 1,
            label: '1999',
            value: 0,
          },
          {
            id: 2,
            label: '2002',
            value: 0,
          },
          {
            id: 3,
            label: '1993',
            value: 1,
          },
        ],
      },
      {
        id: 2,
        question: 'What is the shape of the UFC ring?',
        answers: [
          {
            id: 1,
            label: 'Hexagon',
            value: 0,
          },
          {
            id: 2,
            label: 'Pentagon',
            value: 0,
          },
          {
            id: 3,
            label: 'Octagon',
            value: 1,
          },
        ],
      },
      {
        id: 3,
        question: 'Where is Brock Lesnar from?',
        answers: [
          {
            id: 1,
            label: 'South Dakota',
            value: 1,
          },
          {
            id: 2,
            label: 'Mimi',
            value: 0,
          },
          {
            id: 3,
            label: 'New York',
            value: 0,
          },
        ],
      },
      {
        id: 4,
        question: "Where is UFC's headquarters?",
        answers: [
          {
            id: 1,
            label: 'Las Vegas, Nevada',
            value: 1,
          },
          {
            id: 2,
            label: 'Miami, Florida',
            value: 0,
          },
          {
            id: 3,
            label: 'New York, New York',
            value: 0,
          },
        ],
      },
      {
        id: 5,
        question: 'Which university did Brock Lesnar attend?',
        answers: [
          {
            id: 1,
            label: 'University of Minnesota',
            value: 1,
          },
          {
            id: 2,
            label: 'Harvad University',
            value: 0,
          },
          {
            id: 3,
            label: 'University of Liverpool',
            value: 0,
          },
        ],
      },
      {
        id: 6,
        question: 'When was Ronda Rousey signed by UFC?',
        answers: [
          {
            id: 1,
            label: 'November, 2012',
            value: 1,
          },
          {
            id: 2,
            label: 'April, 2012',
            value: 0,
          },
          {
            id: 3,
            label: 'December, 2012',
            value: 0,
          },
        ],
      },
      {
        id: 7,
        question: 'Who won UFC 1 on November 12, 1993?',
        answers: [
          {
            id: 1,
            label: 'Royce Gracie',
            value: 1,
          },
          {
            id: 2,
            label: 'James Irvin',
            value: 0,
          },
          {
            id: 3,
            label: 'Robbie Lawler',
            value: 0,
          },
        ],
      },
      {
        id: 8,
        question: 'Which "UFC" tournament did Marco Ruas win?',
        answers: [
          {
            id: 1,
            label: 'UFC 8',
            value: 0,
          },
          {
            id: 2,
            label: 'UFC 7',
            value: 1,
          },
          {
            id: 3,
            label: 'UFC 9',
            value: 0,
          },
        ],
      },
      {
        id: 9,
        question: 'George lost his first title defense to _____',
        answers: [
          {
            id: 1,
            label: 'Matt Serra',
            value: 1,
          },
          {
            id: 2,
            label: 'Royce Gracie',
            value: 0,
          },
          {
            id: 3,
            label: 'James Irvin',
            value: 0,
          },
        ],
      },
      {
        id: 10,
        question: 'Who is known as “Sandman”?',
        answers: [
          {
            id: 1,
            label: 'Houston Alexander',
            value: 0,
          },
          {
            id: 2,
            label: 'Marlon Sandro',
            value: 0,
          },
          {
            id: 3,
            label: 'James Irvin',
            value: 1,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Badminton',
    image: badminton,
    questions: [
      {
        id: 1,
        question: 'What is badminton?',
        answers: [
          {
            id: 1,
            label: 'A sport',
            value: 1,
          },
          {
            id: 2,
            label: 'A type of house',
            value: 0,
          },
          {
            id: 3,
            label: 'A band',
            value: 0,
          },
        ],
      },
      {
        id: 2,
        question: 'What is the name of the object that is hit in badminton?',
        answers: [
          {
            id: 1,
            label: 'Ball',
            value: 0,
          },
          {
            id: 2,
            label: 'Shuttlecock',
            value: 1,
          },
          {
            id: 3,
            label: 'Featherball',
            value: 0,
          },
        ],
      },
      {
        id: 3,
        question: 'What is used to hit the shuttlecock in badminton?',
        answers: [
          {
            id: 1,
            label: 'Racquets',
            value: 1,
          },
          {
            id: 2,
            label: 'Legs',
            value: 0,
          },
          {
            id: 3,
            label: 'Bats',
            value: 0,
          },
        ],
      },
      {
        id: 4,
        question: 'Where did the game develop?',
        answers: [
          {
            id: 1,
            label: 'Ancient Greece',
            value: 0,
          },
          {
            id: 2,
            label: 'Ancient Rome',
            value: 0,
          },
          {
            id: 3,
            label: 'British India',
            value: 1,
          },
        ],
      },
      {
        id: 5,
        question: 'In which year did badminton become an Olympic sport?',
        answers: [
          {
            id: 1,
            label: '1994',
            value: 0,
          },
          {
            id: 2,
            label: '1993',
            value: 0,
          },
          {
            id: 3,
            label: '1992',
            value: 1,
          },
        ],
      },
      {
        id: 6,
        question:
          'Which country was NOT one of the founding members of the International Badminton Federation in 1934?',
        answers: [
          {
            id: 1,
            label: 'Denmark',
            value: 0,
          },
          {
            id: 2,
            label: 'China',
            value: 1,
          },
          {
            id: 3,
            label: 'Scotland',
            value: 0,
          },
        ],
      },
      {
        id: 7,
        question: 'In what year were the first rules of the game written?',
        answers: [
          {
            id: 1,
            label: '1845',
            value: 0,
          },
          {
            id: 2,
            label: '1873',
            value: 1,
          },
          {
            id: 3,
            label: '1992',
            value: 0,
          },
        ],
      },
      {
        id: 8,
        question: 'How many points does each game play?',
        answers: [
          {
            id: 1,
            label: '18',
            value: 0,
          },
          {
            id: 2,
            label: '21',
            value: 1,
          },
          {
            id: 3,
            label: '7',
            value: 0,
          },
        ],
      },
      {
        id: 9,
        question: 'How many types of main grips are there in badminton?',
        answers: [
          {
            id: 1,
            label: '2',
            value: 1,
          },
          {
            id: 2,
            label: '3',
            value: 0,
          },
          {
            id: 3,
            label: '1',
            value: 0,
          },
        ],
      },
      {
        id: 10,
        question: 'Which sport is badminton compared to?',
        answers: [
          {
            id: 1,
            label: 'Volleyball',
            value: 0,
          },
          {
            id: 2,
            label: 'Baseball',
            value: 0,
          },
          {
            id: 3,
            label: 'Tennis',
            value: 1,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Water Polo',
    image: swimming_cap,
    questions: [
      {
        id: 1,
        question: 'When was water polo created?',
        answers: [
          {
            id: 1,
            label: '20th century',
            value: 0,
          },
          {
            id: 2,
            label: '19th century',
            value: 1,
          },
          {
            id: 3,
            label: '18th century',
            value: 0,
          },
        ],
      },
      {
        id: 2,
        question: 'Who is thought to be the developer of water polo?',
        answers: [
          {
            id: 1,
            label: 'Hugh Chisholm',
            value: 0,
          },
          {
            id: 2,
            label: 'William Henry',
            value: 0,
          },
          {
            id: 3,
            label: 'William Wilson',
            value: 1,
          },
        ],
      },
      {
        id: 3,
        question: "When did men's water polo become the Olympic sport?",
        answers: [
          {
            id: 1,
            label: '1904',
            value: 0,
          },
          {
            id: 2,
            label: '1900',
            value: 1,
          },
          {
            id: 3,
            label: '1968',
            value: 0,
          },
        ],
      },
      {
        id: 4,
        question: 'How many team members are on a water polo team?',
        answers: [
          {
            id: 1,
            label: '5',
            value: 0,
          },
          {
            id: 2,
            label: '6',
            value: 0,
          },
          {
            id: 3,
            label: '7',
            value: 1,
          },
        ],
      },
      {
        id: 5,
        question: 'What is the highest governing body for water polo?',
        answers: [
          {
            id: 1,
            label: 'FINA',
            value: 1,
          },
          {
            id: 2,
            label: 'FAA',
            value: 0,
          },
          {
            id: 3,
            label: 'FIFA',
            value: 0,
          },
        ],
      },
      {
        id: 6,
        question:
          'When was the first international league of water polo organized?',
        answers: [
          {
            id: 1,
            label: '2002',
            value: 1,
          },
          {
            id: 2,
            label: '2000',
            value: 0,
          },
          {
            id: 3,
            label: '2006',
            value: 0,
          },
        ],
      },
      {
        id: 7,
        question: 'Who is allowed to touch the ball with two hands?',
        answers: [
          {
            id: 1,
            label: 'Each team member',
            value: 0,
          },
          {
            id: 2,
            label: 'Defenders',
            value: 0,
          },
          {
            id: 3,
            label: 'Goalkeeper',
            value: 1,
          },
        ],
      },
      {
        id: 8,
        question: 'In which time period was surf polo first played?',
        answers: [
          {
            id: 1,
            label: '1930s and 1940s',
            value: 1,
          },
          {
            id: 2,
            label: '1930s and 1950s',
            value: 0,
          },
          {
            id: 3,
            label: '1920s and 1940s',
            value: 0,
          },
        ],
      },
      {
        id: 9,
        question: 'Who wears inner tubes in inner tubes water polo?',
        answers: [
          {
            id: 1,
            label: 'Attackers',
            value: 0,
          },
          {
            id: 2,
            label: 'Everybody except the goalkeeper',
            value: 1,
          },
          {
            id: 3,
            label: 'Goalkeeper',
            value: 0,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Soccer',
    image: soccer,
    questions: [
      {
        id: 1,
        question:
          'What was the name of a game similar to soccer in ancient Rome?',
        answers: [
          {
            id: 1,
            label: 'Harpastum',
            value: 1,
          },
          {
            id: 2,
            label: 'Episkyros',
            value: 0,
          },
          {
            id: 3,
            label: 'Zhu-Ke',
            value: 0,
          },
        ],
      },
      {
        id: 2,
        question: 'How long is one half in a soccer game?',
        answers: [
          {
            id: 1,
            label: '25 minutes',
            value: 0,
          },
          {
            id: 2,
            label: '30 minutes',
            value: 0,
          },
          {
            id: 3,
            label: '45 minutes',
            value: 1,
          },
        ],
      },
      {
        id: 3,
        question: 'At what distance is the kick at goal during a penalty kick?',
        answers: [
          {
            id: 1,
            label: '7 yards',
            value: 0,
          },
          {
            id: 2,
            label: '12 yards',
            value: 1,
          },
          {
            id: 3,
            label: '15 yards',
            value: 0,
          },
        ],
      },
      {
        id: 4,
        question: 'What is the probability of a goal from a penalty kick?',
        answers: [
          {
            id: 1,
            label: '12 % to 21 %',
            value: 0,
          },
          {
            id: 2,
            label: '47 % to 58 %',
            value: 0,
          },
          {
            id: 3,
            label: '72 % to 86 %',
            value: 1,
          },
        ],
      },
      {
        id: 5,
        question: 'Panenka is ...',
        answers: [
          {
            id: 1,
            label: 'a penalty kick',
            value: 1,
          },
          {
            id: 2,
            label: 'a soccer ball type',
            value: 0,
          },
          {
            id: 3,
            label: 'the name of a famous soccer player',
            value: 0,
          },
        ],
      },
      {
        id: 6,
        question: 'Who on the team can replace the goalkeeper in soccer?',
        answers: [
          {
            id: 1,
            label: 'Any player',
            value: 1,
          },
          {
            id: 2,
            label: 'Only the captain of the soccer team',
            value: 0,
          },
          {
            id: 3,
            label: 'No one',
            value: 0,
          },
        ],
      },
      {
        id: 7,
        question:
          'What is the maximum number of players on the field, including the goalkeeper?',
        answers: [
          {
            id: 1,
            label: '7',
            value: 0,
          },
          {
            id: 2,
            label: '11',
            value: 1,
          },
          {
            id: 3,
            label: '13',
            value: 0,
          },
        ],
      },
      {
        id: 8,
        question: '"Metodo" is a soccer formation ...',
        answers: [
          {
            id: 1,
            label: '2-3-2-3',
            value: 1,
          },
          {
            id: 2,
            label: '4-3-3',
            value: 0,
          },
          {
            id: 3,
            label: '4-2-3-1',
            value: 0,
          },
        ],
      },
      {
        id: 9,
        question: 'What does the Webster Rule govern?',
        answers: [
          {
            id: 1,
            label: 'Transfer to another club without monetary compensation.',
            value: 0,
          },
          {
            id: 2,
            label: 'The number of foreign players in a soccer team.',
            value: 0,
          },
          {
            id: 3,
            label: 'Termination of a contract with a soccer club.',
            value: 1,
          },
        ],
      },
      {
        id: 10,
        question:
          'Edson Arantes do Nascimento is known worldwide as the great soccer player ...',
        answers: [
          {
            id: 1,
            label: 'Pele',
            value: 1,
          },
          {
            id: 2,
            label: 'Maradona',
            value: 0,
          },
          {
            id: 3,
            label: 'Garrincha',
            value: 0,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'Capoeira',
    image: kimono,
    questions: [
      {
        id: 1,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 2,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 3,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 4,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 5,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 6,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 7,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 8,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 9,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 10,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'NBA',
    image: basketball,
    questions: [
      {
        id: 1,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 2,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 3,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 4,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 5,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 6,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 7,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 8,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 9,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 10,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: 'Athletics',
    image: sneakers,
    questions: [
      {
        id: 1,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 2,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 3,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 4,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 5,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 6,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 7,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 8,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 9,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 10,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: 'Yoga',
    image: yoga,
    questions: [
      {
        id: 1,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 2,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 3,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 4,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 5,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 6,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 7,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 8,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 9,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 10,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
    ],
  },
  {
    id: 9,
    name: 'Skateboarding',
    image: skateboard,
    questions: [
      {
        id: 1,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 2,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 3,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 4,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 5,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 6,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 7,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 8,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 9,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 10,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
    ],
  },
  {
    id: 10,
    name: 'Tennis',
    image: tennis_racket,
    questions: [
      {
        id: 1,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 2,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 3,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 4,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 5,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 6,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 7,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 8,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 9,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
      {
        id: 10,
        question: 'NULL',
        answers: [
          {
            id: 1,
            label: 'NULL',
            value: 0,
          },
          {
            id: 2,
            label: 'NULL',
            value: 0,
          },
          {
            id: 3,
            label: 'NULL',
            value: 0,
          },
        ],
      },
    ],
  },
];
