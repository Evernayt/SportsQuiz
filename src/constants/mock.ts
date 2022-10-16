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
        question: 'Where was capoeira developed?',
        answers: [
          {
            id: 1,
            label: 'England',
            value: 0,
          },
          {
            id: 2,
            label: 'Ghana',
            value: 0,
          },
          {
            id: 3,
            label: 'Brazil',
            value: 1,
          },
        ],
      },
      {
        id: 2,
        question: 'When was capoeria developed?',
        answers: [
          {
            id: 1,
            label: '18th century',
            value: 0,
          },
          {
            id: 2,
            label: '17th century',
            value: 0,
          },
          {
            id: 3,
            label: '16th century',
            value: 1,
          },
        ],
      },
      {
        id: 3,
        question: 'What is a practitioner of the capoeira known as?',
        answers: [
          {
            id: 1,
            label: 'Caputira',
            value: 0,
          },
          {
            id: 2,
            label: 'Caporcera',
            value: 0,
          },
          {
            id: 3,
            label: 'Capoeirista',
            value: 1,
          },
        ],
      },
      {
        id: 4,
        question:
          'When was Capoeira declared as "intangible cultural heritage" by UNESCO?',
        answers: [
          {
            id: 1,
            label: '2014',
            value: 1,
          },
          {
            id: 2,
            label: '2013',
            value: 0,
          },
          {
            id: 3,
            label: '2015',
            value: 0,
          },
        ],
      },
      {
        id: 5,
        question: 'What is capoeira?',
        answers: [
          {
            id: 1,
            label: 'A Brazilian food',
            value: 0,
          },
          {
            id: 2,
            label: 'A martial art',
            value: 1,
          },
          {
            id: 3,
            label: 'A philosophy',
            value: 0,
          },
        ],
      },
      {
        id: 6,
        question:
          'In the 19th century, criminals and warlords used capoeiristas as:',
        answers: [
          {
            id: 1,
            label: 'Body guards',
            value: 1,
          },
          {
            id: 2,
            label: 'Lawyers',
            value: 0,
          },
          {
            id: 3,
            label: 'Shopkeepers',
            value: 0,
          },
        ],
      },
      {
        id: 7,
        question: 'What are the groups of capoeiristas also known as?',
        answers: [
          {
            id: 1,
            label: 'Captas',
            value: 0,
          },
          {
            id: 2,
            label: 'Maltas',
            value: 1,
          },
          {
            id: 3,
            label: 'Campatis',
            value: 0,
          },
        ],
      },
      {
        id: 8,
        question: 'Which one is the fundamental movement in capoeira?',
        answers: [
          {
            id: 1,
            label: 'Tinga',
            value: 0,
          },
          {
            id: 2,
            label: 'The ginga',
            value: 1,
          },
          {
            id: 3,
            label: 'Kicka',
            value: 0,
          },
        ],
      },
      {
        id: 9,
        question: 'Avoiding an attack in capoeira is known as:',
        answers: [
          {
            id: 1,
            label: 'Esquivas',
            value: 1,
          },
          {
            id: 2,
            label: 'Iskurika',
            value: 0,
          },
          {
            id: 3,
            label: 'Caperika',
            value: 0,
          },
        ],
      },
      {
        id: 10,
        question: 'What is the meaning of Roda in terms of capoeira?',
        answers: [
          {
            id: 1,
            label: 'A road',
            value: 0,
          },
          {
            id: 2,
            label: 'A stick',
            value: 0,
          },
          {
            id: 3,
            label: 'A wheel',
            value: 1,
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
        question: 'How many teams from Canada are there in the NBA?',
        answers: [
          {
            id: 1,
            label: '2',
            value: 0,
          },
          {
            id: 2,
            label: '3',
            value: 0,
          },
          {
            id: 3,
            label: '1',
            value: 1,
          },
        ],
      },
      {
        id: 2,
        question: 'Who competed in the first game in the history of NBA?',
        answers: [
          {
            id: 1,
            label: 'Toronto Huskies vs New York Knickerbokers',
            value: 1,
          },
          {
            id: 2,
            label: 'Cleveland Cavaliers vs San Antonio Spurs',
            value: 0,
          },
          {
            id: 3,
            label: 'Boston Celtics vs Miami Heat',
            value: 0,
          },
        ],
      },
      {
        id: 3,
        question:
          'The highest point scored in a game was 100 points. Who keep this record?',
        answers: [
          {
            id: 1,
            label: 'Micheal Jordan',
            value: 0,
          },
          {
            id: 2,
            label: 'Kobe Bryant',
            value: 0,
          },
          {
            id: 3,
            label: 'Wilt Chamberlain',
            value: 1,
          },
        ],
      },
      {
        id: 4,
        question: 'How many time does the NBA match last?',
        answers: [
          {
            id: 1,
            label: '40 minutes',
            value: 0,
          },
          {
            id: 2,
            label: '60 minutes',
            value: 0,
          },
          {
            id: 3,
            label: '48 minutes',
            value: 1,
          },
        ],
      },
      {
        id: 5,
        question: 'An NBA team have to shoot within how many seconds?',
        answers: [
          {
            id: 1,
            label: '24',
            value: 1,
          },
          {
            id: 2,
            label: '30',
            value: 0,
          },
          {
            id: 3,
            label: '15',
            value: 0,
          },
        ],
      },
      {
        id: 6,
        question: 'Which NBA team has the most tiltles?',
        answers: [
          {
            id: 1,
            label: 'Boston Celtics',
            value: 1,
          },
          {
            id: 2,
            label: 'Miami Heat',
            value: 0,
          },
          {
            id: 3,
            label: 'Los Angeles Lakers',
            value: 0,
          },
        ],
      },
      {
        id: 7,
        question:
          'An NBA team have to get the ball across the midcourt-line within how many seconds?',
        answers: [
          {
            id: 1,
            label: '12',
            value: 0,
          },
          {
            id: 2,
            label: '8',
            value: 1,
          },
          {
            id: 3,
            label: '10',
            value: 0,
          },
        ],
      },
      {
        id: 8,
        question: 'Who is the manufacturer of the official NBA game ball?',
        answers: [
          {
            id: 1,
            label: 'Nike',
            value: 0,
          },
          {
            id: 2,
            label: 'Spalding',
            value: 1,
          },
          {
            id: 3,
            label: 'Wilson',
            value: 0,
          },
        ],
      },
      {
        id: 9,
        question: 'Who is the tallest NBA player in history?',
        answers: [
          {
            id: 1,
            label: 'Gheorghe Mureșan',
            value: 1,
          },
          {
            id: 2,
            label: 'Shawn Bradley',
            value: 0,
          },
          {
            id: 3,
            label: 'Yao Ming',
            value: 0,
          },
        ],
      },
      {
        id: 10,
        question: 'When does the NBA season regularly end?',
        answers: [
          {
            id: 1,
            label: 'End of June',
            value: 0,
          },
          {
            id: 2,
            label: 'Early of January',
            value: 0,
          },
          {
            id: 3,
            label: 'Middle of April',
            value: 1,
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
        question: 'Athletics is considered:',
        answers: [
          {
            id: 1,
            label: 'The hardest sport in the world',
            value: 0,
          },
          {
            id: 2,
            label: 'The newest sport in the world',
            value: 0,
          },
          {
            id: 3,
            label: 'The oldest sport in the world',
            value: 1,
          },
        ],
      },
      {
        id: 2,
        question: 'Where is athletics practiced?',
        answers: [
          {
            id: 1,
            label: 'In Water',
            value: 0,
          },
          {
            id: 2,
            label: 'Only indoors',
            value: 0,
          },
          {
            id: 3,
            label: 'Outodoors and indoors',
            value: 1,
          },
        ],
      },
      {
        id: 3,
        question: 'Where was the first appearance of the athletics?',
        answers: [
          {
            id: 1,
            label: 'Olympic Games 2000',
            value: 0,
          },
          {
            id: 2,
            label: 'Ancient Olympic Games',
            value: 1,
          },
          {
            id: 3,
            label: 'British Athletics Tournaments',
            value: 0,
          },
        ],
      },
      {
        id: 4,
        question: 'When did athletics become the part of the Olympic Games?',
        answers: [
          {
            id: 1,
            label: 'Athenas Olympic Games in 1896',
            value: 1,
          },
          {
            id: 2,
            label: 'London Olympic Games in 2012',
            value: 0,
          },
          {
            id: 3,
            label: 'Rio Olympic Games in 2016',
            value: 0,
          },
        ],
      },
      {
        id: 5,
        question: 'Who was discovered to be a man in female athletics in 1932?',
        answers: [
          {
            id: 1,
            label: 'Stanislawa Walasiewicz',
            value: 1,
          },
          {
            id: 2,
            label: 'Leila Yates',
            value: 0,
          },
          {
            id: 3,
            label: 'Dianna Kross',
            value: 0,
          },
        ],
      },
      {
        id: 6,
        question: 'What is IAAF stand for?',
        answers: [
          {
            id: 1,
            label: 'International Association of Athenas Football',
            value: 0,
          },
          {
            id: 2,
            label: 'International Association of Athlectics Federations',
            value: 1,
          },
          {
            id: 3,
            label: 'International Society for Athletics Federals',
            value: 0,
          },
        ],
      },
      {
        id: 7,
        question:
          'What was the way Anthony Scott Weiland did the Detroit Marathon?',
        answers: [
          {
            id: 1,
            label: 'On a horse',
            value: 0,
          },
          {
            id: 2,
            label: 'On a bus',
            value: 0,
          },
          {
            id: 3,
            label: 'Running backwards',
            value: 1,
          },
        ],
      },
      {
        id: 8,
        question: 'How did the athlete run during some time in ancient Greece?',
        answers: [
          {
            id: 1,
            label: 'Naked',
            value: 1,
          },
          {
            id: 2,
            label: 'With a uniform',
            value: 0,
          },
          {
            id: 3,
            label: 'With a tunic',
            value: 0,
          },
        ],
      },
      {
        id: 9,
        question:
          'In the past, women were not allowed to participate in athletics. What was the penalty for that?',
        answers: [
          {
            id: 1,
            label: 'Public beating',
            value: 0,
          },
          {
            id: 2,
            label: 'Putting in prison',
            value: 0,
          },
          {
            id: 3,
            label: 'Jumping off the cliff',
            value: 1,
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
        question: 'Who is the father of yoga?',
        answers: [
          {
            id: 1,
            label: 'Krishnamacharya',
            value: 0,
          },
          {
            id: 2,
            label: 'Maharshi Patanjali',
            value: 1,
          },
          {
            id: 3,
            label: 'Baba Ramdev',
            value: 0,
          },
        ],
      },
      {
        id: 2,
        question: 'Which language the word "Yoga" originates from?',
        answers: [
          {
            id: 1,
            label: 'Mandarin',
            value: 0,
          },
          {
            id: 2,
            label: 'Sanskrit',
            value: 1,
          },
          {
            id: 3,
            label: 'Gurmukhi',
            value: 0,
          },
        ],
      },
      {
        id: 3,
        question: 'Yoga suggests how many fold path of life?',
        answers: [
          {
            id: 1,
            label: '4',
            value: 0,
          },
          {
            id: 2,
            label: '6',
            value: 0,
          },
          {
            id: 3,
            label: '8',
            value: 1,
          },
        ],
      },
      {
        id: 4,
        question: 'What is the ultimate goal of yoga?',
        answers: [
          {
            id: 1,
            label: 'Mahasamadhi',
            value: 1,
          },
          {
            id: 2,
            label: 'Savitarkasamadhi',
            value: 0,
          },
          {
            id: 3,
            label: 'Nirvitarkasamadhi',
            value: 0,
          },
        ],
      },
      {
        id: 5,
        question: 'How many Koshas do humans have as per yogic system?',
        answers: [
          {
            id: 1,
            label: '5',
            value: 1,
          },
          {
            id: 2,
            label: '7',
            value: 0,
          },
          {
            id: 3,
            label: '6',
            value: 0,
          },
        ],
      },
      {
        id: 6,
        question: 'Who brought yoga to the humans?',
        answers: [
          {
            id: 1,
            label: 'Shiva',
            value: 1,
          },
          {
            id: 2,
            label: 'Vishnu',
            value: 0,
          },
          {
            id: 3,
            label: 'Brahma',
            value: 0,
          },
        ],
      },
      {
        id: 7,
        question: 'There were how many asanas classically enlisted in yoga?',
        answers: [
          {
            id: 1,
            label: '132',
            value: 0,
          },
          {
            id: 2,
            label: '100',
            value: 0,
          },
          {
            id: 3,
            label: '84',
            value: 1,
          },
        ],
      },
      {
        id: 8,
        question: 'What type of yoga was invented by Bharat Thakur?',
        answers: [
          {
            id: 1,
            label: 'Artistic Yoga',
            value: 1,
          },
          {
            id: 2,
            label: 'Yin Yoga',
            value: 0,
          },
          {
            id: 3,
            label: 'Bikram Yoga',
            value: 0,
          },
        ],
      },
      {
        id: 9,
        question: 'What are the five elements in yoga?',
        answers: [
          {
            id: 1,
            label: 'Earth, Water, Fire, Air, Akash',
            value: 1,
          },
          {
            id: 2,
            label: 'Earth, Water, Fire, Air, Wood',
            value: 0,
          },
          {
            id: 3,
            label: 'Earth, Space, Fire, Air, Akash',
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
            label: '7',
            value: 0,
          },
          {
            id: 2,
            label: '114',
            value: 1,
          },
          {
            id: 3,
            label: '12',
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
        question: 'When was first skateboard created?',
        answers: [
          {
            id: 1,
            label: '1970',
            value: 0,
          },
          {
            id: 2,
            label: '1967',
            value: 1,
          },
          {
            id: 3,
            label: '1947',
            value: 0,
          },
        ],
      },
      {
        id: 2,
        question:
          'Who was the first skateboarder to achieve a 900-degree aerial rotation?',
        answers: [
          {
            id: 1,
            label: 'Tony Hawk',
            value: 1,
          },
          {
            id: 2,
            label: 'Bob Burnquist',
            value: 0,
          },
          {
            id: 3,
            label: 'Rodney Mullen',
            value: 0,
          },
        ],
      },
      {
        id: 3,
        question: 'Initially, Skateboarding was known as?',
        answers: [
          {
            id: 1,
            label: 'Flat Boarding',
            value: 0,
          },
          {
            id: 2,
            label: 'Sidewalk Surfing',
            value: 1,
          },
          {
            id: 3,
            label: 'Street Sliding',
            value: 0,
          },
        ],
      },
      {
        id: 4,
        question: 'How many wheels are there in a skateboard?',
        answers: [
          {
            id: 1,
            label: 'Eight',
            value: 0,
          },
          {
            id: 2,
            label: 'Four',
            value: 1,
          },
          {
            id: 3,
            label: 'Six',
            value: 0,
          },
        ],
      },
      {
        id: 5,
        question: 'How many piles of wood skateboards are usually made of?',
        answers: [
          {
            id: 1,
            label: '7',
            value: 1,
          },
          {
            id: 2,
            label: '15',
            value: 0,
          },
          {
            id: 3,
            label: '3',
            value: 0,
          },
        ],
      },
      {
        id: 6,
        question:
          'What do we call a rider if his/her leading foot is the right one?',
        answers: [
          {
            id: 1,
            label: 'Normal',
            value: 0,
          },
          {
            id: 2,
            label: 'Goofy',
            value: 1,
          },
          {
            id: 3,
            label: 'Regular',
            value: 0,
          },
        ],
      },
      {
        id: 7,
        question:
          'What is the ideal shape of skateboard for performing tricks?',
        answers: [
          {
            id: 1,
            label: 'Concave',
            value: 1,
          },
          {
            id: 2,
            label: 'Convex',
            value: 0,
          },
          {
            id: 3,
            label: 'Flat',
            value: 0,
          },
        ],
      },
      {
        id: 8,
        question: 'Longboards are NOT usually used for?',
        answers: [
          {
            id: 1,
            label: 'Racing',
            value: 0,
          },
          {
            id: 2,
            label: 'Cruising',
            value: 0,
          },
          {
            id: 3,
            label: 'Doing Tricks',
            value: 1,
          },
        ],
      },
      {
        id: 9,
        question: 'Which of the following is not a part of skateboard?',
        answers: [
          {
            id: 1,
            label: 'Wheels',
            value: 0,
          },
          {
            id: 2,
            label: 'Deck',
            value: 0,
          },
          {
            id: 3,
            label: 'Plastic Rod',
            value: 1,
          },
        ],
      },
      {
        id: 10,
        question: 'Go Skateboarding Day is celebrated on?',
        answers: [
          {
            id: 1,
            label: '15 of May',
            value: 0,
          },
          {
            id: 2,
            label: '21 of June',
            value: 1,
          },
          {
            id: 3,
            label: '25 of December',
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
        question: 'When did tennis become an Olympic sport?',
        answers: [
          {
            id: 1,
            label: '1920',
            value: 0,
          },
          {
            id: 2,
            label: '1952',
            value: 0,
          },
          {
            id: 3,
            label: '1896',
            value: 1,
          },
        ],
      },
      {
        id: 2,
        question: 'Where did the modern version of the game originate?',
        answers: [
          {
            id: 1,
            label: 'England',
            value: 1,
          },
          {
            id: 2,
            label: 'Germany',
            value: 0,
          },
          {
            id: 3,
            label: 'Italy',
            value: 0,
          },
        ],
      },
      {
        id: 3,
        question: 'When was tennis first played in the Paralympics?',
        answers: [
          {
            id: 1,
            label: '1992',
            value: 1,
          },
          {
            id: 2,
            label: '1948',
            value: 0,
          },
          {
            id: 3,
            label: '1996',
            value: 0,
          },
        ],
      },
      {
        id: 4,
        question: 'Which of the following is not a tennis competition?',
        answers: [
          {
            id: 1,
            label: 'Wimbledon',
            value: 0,
          },
          {
            id: 2,
            label: 'World Cup',
            value: 1,
          },
          {
            id: 3,
            label: 'Australian Open',
            value: 0,
          },
        ],
      },
      {
        id: 5,
        question:
          'Which country has the most gold medals for tennis in the Olympics?',
        answers: [
          {
            id: 1,
            label: 'Great Britain',
            value: 0,
          },
          {
            id: 2,
            label: 'Germany',
            value: 0,
          },
          {
            id: 3,
            label: 'United States',
            value: 1,
          },
        ],
      },
      {
        id: 6,
        question: 'Which female has won the most Grand Slam tournaments?',
        answers: [
          {
            id: 1,
            label: 'Steffi Graf',
            value: 0,
          },
          {
            id: 2,
            label: 'Margaret Court',
            value: 1,
          },
          {
            id: 3,
            label: 'Serena Williams',
            value: 0,
          },
        ],
      },
      {
        id: 7,
        question: 'Which male has won the most Grand Slam tournaments titles?',
        answers: [
          {
            id: 1,
            label: 'Rafael Nadal',
            value: 0,
          },
          {
            id: 2,
            label: 'Roger Federer',
            value: 1,
          },
          {
            id: 3,
            label: 'Pete Sampras',
            value: 0,
          },
        ],
      },
      {
        id: 8,
        question: 'Which tennis competition is the oldest in the world?',
        answers: [
          {
            id: 1,
            label: 'French Open',
            value: 0,
          },
          {
            id: 2,
            label: 'Australian Open',
            value: 0,
          },
          {
            id: 3,
            label: 'Wimbledon',
            value: 1,
          },
        ],
      },
      {
        id: 9,
        question: 'Where was the ancient origin of tennis created?',
        answers: [
          {
            id: 1,
            label: 'France',
            value: 1,
          },
          {
            id: 2,
            label: 'England',
            value: 0,
          },
          {
            id: 3,
            label: 'Greece',
            value: 0,
          },
        ],
      },
      {
        id: 10,
        question: 'When did people start using rackets for tennis?',
        answers: [
          {
            id: 1,
            label: '16th Century',
            value: 1,
          },
          {
            id: 2,
            label: '18th Century',
            value: 0,
          },
          {
            id: 3,
            label: '14th Century',
            value: 0,
          },
        ],
      },
    ],
  },
];
