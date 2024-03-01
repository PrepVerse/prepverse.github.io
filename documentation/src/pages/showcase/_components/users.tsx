import {translate} from '@docusaurus/Translate';
import {sortBy} from '@site/src/utils/jsUtils';

/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE
 *
 *
 * Instructions for maintainers:
 * - Add the site in the json array below
 * - `title` is the project's name (no need for the "Docs" suffix)
 * - A short (≤120 characters) description of the project
 * - Use relevant tags to categorize the site (read the tag descriptions on the
 *   https://prepverse.github.io/showcase page and some further clarifications below)
 * - Add a local image preview (decent screenshot of the PrepVerse site)
 * - The image MUST be added to the GitHub repository, and use `require("img")`
 * - The image has to have minimum width 640 and an aspect of no wider than 2:1
 * - If a website is open-source, add a source link. The link should open
 *   to a directory containing the `docusaurus.config.js` file
 * - Resize images: node admin/scripts/resizeImage.js
 * - Run optimizt manually (see resize image script comment)
 * - Open a PR and check for reported CI errors
 */

export type TagType =
  | 'favorite'
  | 'opensource'
  | 'personal'
  | 'design'
  | 'html'
  | 'css'
  | 'js'
  | 'large'
  | 'product'
  | 'api'
  | 'clock'
  | 'calculators'
  | 'games'
  | 'blogs'
  | 'editor'

const Users: User[] = [
  {
    title: '3d-Background-Boxes',
    description: '3d-Background-Boxes',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/3d-Background-Boxes',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'Age Calculator',
    description: 'Age Calculator is a simple app that calculates your age based on the year you were born.',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Calculators/Age-Calculator',
    source: 'https://github.com/AkashSingh3031/Age-Calculator',
    tags: ['personal', 'design', 'html', 'css', 'js', 'calculators'],
  },
  {
    title: 'Analog-Clock',
    description: 'Analog-Clock',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Clock/Analog-Clock',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'clock'],
  },
  {
    title: 'Analog+Digital-Clock',
    description: 'Analog+Digital-Clock',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Clock/Analog+Digital-Clock',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'clock'],
  },
  {
    title: 'Animated-Countdown',
    description: 'Animated-Countdown',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Calculators/Animated-Countdown',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'calculators'],
  },
  {
    title: 'Auto-Text-Effect',
    description: 'Auto-Text-Effect',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Editor-Based/Auto-Text-Effect',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'editor'],
  },
  {
    title: 'Background-Slider',
    description: 'Background-Slider',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Background-Slider',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'Calculator With Voice Recognition',
    description: 'Calculator With Voice Recognition Is A Simple App That Can Perform Basic Arithmetic Operations.',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Calculators/Calculator-with-Voice-Command',
    source: 'https://github.com/AkashSingh3031/Calculator-with-Voice-Recognition',
    tags: ['personal', 'design', 'html', 'css', 'js', 'calculators'],
  },
  {
    title: 'Checkboxes',
    description: 'Checkboxes',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Checkboxes',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'Click-and-Drag',
    description: 'Click-and-Drag',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Click-and-Drag',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'CodePoint',
    description: 'Personal site',
    preview: null,
    website: 'https://prepverse.github.io/CodePoint',
    source: 'https://github.com/PrepVerse/CodePoint',
    tags: ['favorite', 'opensource','personal'],
  },
  {
    title: 'Color Flipper',
    description: 'Color Flipper Is A Simple App That Can Change The Background Color Of The Page.',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Color-flipper',
    source: 'https://github.com/AkashSingh3031/Color-Flipper',
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'Countdown Timer',
    description: 'Countdown Timer Is A Simple App That Can Count Down From A Given Time.',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Clock/Countdown-Timer',
    source: 'https://github.com/AkashSingh3031/Countdown-Timer',
    tags: ['personal', 'design', 'html', 'css', 'js', 'clock'],
  },
  {
    title: 'Counter',
    description: 'Counter',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Calculators/Counter',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'calculators'],
  },
  {
    title: 'Country-Search-App',
    description: 'Country Search App',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/API-Based/Country-Search-App',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'api'],
  },
  {
    title: 'CSS Variables With JS',
    description: 'CSS Variables With JS Is A Simple App That Can Change Radius Of Image, Blur Effect On Image And Border Color Of Image.',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/CSS-Variables/',
    source: 'https://github.com/AkashSingh3031/CSS-Variables-with-JS',
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'Custom-Video-Player',
    description: 'Custom-Video-Player',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Custom-Video-Player',
    source: 'https://github.com/AkashSingh3031/Color-Flipper',
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'Digital-Clock',
    description: 'Digital-Clock',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Clock/Digital-Clock',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'clock'],
  },
  {
    title: 'Double-Vertical-Slider',
    description: 'Double-Vertical-Slider',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Double-Vertical-Slider',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'Drag-n-Drop',
    description: 'Drag-n-Drop',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Drag-n-Drop',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'Drawing-App',
    description: 'Drawing-App',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Editor-Based/Drawing-App',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'editor'],
  },
  {
    title: 'Drink-Water',
    description: 'Drink-Water',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Games/Drink-Water',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'games'],
  },
  {
    title: 'Event-Keycodes',
    description: 'Event-Keycodes',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Event-Keycodes',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'Expanding-Cards',
    description: 'Expanding-Cards',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Expanding-Cards',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'Flex-Panel-Gallery',
    description: 'Flex-Panel-Gallery',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Flex-Panel-Gallery',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'Fun-with-Drawing',
    description: 'Fun-with-Drawing',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Editor-Based/Fun-with-Drawing',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'editor'],
  },
  {
    title: 'Github-Profiles',
    description: 'Github Profiles',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/API-Based/Github-Profiles',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'api'],
  },
  {
    title: 'Grade-Percentage-Calcy',
    description: 'Grade-Percentage-Calcy',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Calculators/Grade-Percentage-Calcy',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'calculators'],
  },
  {
    title: 'Hold-Shift-and-Check-Checkboxes',
    description: 'Hold-Shift-and-Check-Checkboxes',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Hold-Shift-and-Check-Checkboxes',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'Hoverboard',
    description: 'Hoverboard',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Hoverboard',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'Image-Carousel',
    description: 'Image-Carousel',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Image-Carousel',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'Insect-Catch-Game',
    description: 'Insect-Catch-Game',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Games/Insect-Catch-Game',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'games'],
  },
  {
    title: 'JS-Issue-Tracker',
    description: 'JS-Issue-Tracker',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/API-Based/JS-Issue-Tracker',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'api'],
  },
  {
    title: 'LeetVerse',
    description: 'Personal site',
    preview: null,
    website: 'https://prepverse.github.io/LeetVerse',
    source: 'https://github.com/PrepVerse/LeetVerse',
    tags: ['favorite', 'opensource','personal'],
  },
  {
    title: 'LocalStorage',
    description: 'LocalStorage',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/LocalStorage/',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'Mouse-Move-Shadow',
    description: 'Mouse-Move-Shadow',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Mouse-Move-Shadow/',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'Movie-App',
    description: 'Movie-App',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/API-Based/Movie-App',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'api'],
  },
  {
    title: 'Music-Player',
    description: 'Music-Player',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Music-Player',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'Notes-App',
    description: 'Notes-App',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Editor-Based/Notes-App',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'editor'],
  },
  {
    title: 'Number-Guess',
    description: 'Number-Guess',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Games/Number-Guess',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'games'],
  },
  {
    title: 'Paragraph-Generator',
    description: 'Paragraph-Generator',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Editor-Based/Paragraph-Generator',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'editor'],
  },
  {
    title: 'Password-Generator',
    description: 'Password-Generator',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Editor-Based/Password-Generator',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'editor'],
  },
  {
    title: 'Percentage-Calculator',
    description: 'Percentage-Calculator',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Calculators/Percentage-Calculator',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'calculators'],
  },
  {
    title: 'Portfolio',
    description: 'My portfolio web page',
    preview: null,
    website: 'https://prepverse.github.io/portfolio',
    source: 'https://github.com/PrepVerse/portfolio',
    tags: ['favorite', 'personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'Progress-Steps',
    description: 'Progress-Steps',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Progress-Steps',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'Quiz-Application-with-Timer',
    description: 'Quiz-Application-with-Timer',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Quiz-Application-with-Timer',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'Random-Choice-Picker',
    description: 'Random-Choice-Picker',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Editor-Based/Random-Choice-Picker',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'editor'],
  },
  {
    title: 'Random-Image-Feed',
    description: 'Random-Image-Feed',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Random-Image-Feed',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'Simple-Text-Editor',
    description: 'Simple-Text-Editor',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Editor-Based/Simple-Text-Editor',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'editor'],
  },
  {
    title: 'Solar-System',
    description: 'Solar-System',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Games/Solar-System',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'games'],
  },
  {
    title: 'Sound-btn',
    description: 'Sound-btn',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Sound-btn',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'Speech-Synthesis',
    description: 'Speech-Synthesis',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Editor-Based/Speech-Synthesis',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'editor'],
  },
  {
    title: 'Speech-Text-Reader',
    description: 'Speech-Text-Reader',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Editor-Based/Speech-Text-Reader',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'editor'],
  },
  {
    title: 'Stop-Watch',
    description: 'Stop-Watch',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Clock/Stop-Watch',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'clock'],
  },
  {
    title: 'Temperature-Converter',
    description: 'Temperature-Converter',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Calculators/Temperature-Converter',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'calculators'],
  },
  {
    title: 'Tetris-Game',
    description: 'Tetris-Game',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Games/Tetris-Game',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'games'],
  },
  {
    title: 'Textogram',
    description: 'Textogram',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Editor-Based/Textogram',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'editor'],
  },
  {
    title: 'Theme-Clock',
    description: 'Theme-Clock',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Clock/Theme-Clock',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'clock'],
  },
  {
    title: 'Todo App',
    description: 'Todo App',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Todo App',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'Type-Ahead',
    description: 'Type-Ahead',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/API-Based/Type-Ahead',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'api'],
  },
  {
    title: 'Video-Speed-Controller',
    description: 'Video-Speed-Controller',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Video-Speed-Controller/',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'Weather',
    description: 'Weather',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/API-Based/Weather',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'api'],
  },
  {
    title: 'Weather-App',
    description: 'Weather-App',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/API-Based/Weather-App',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'api'],
  },
  {
    title: 'Webcam-Fun',
    description: 'Webcam-Fun',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Webcam-Fun',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'Web Drum Kit',
    description: 'Web Drum Kit Is A Simple App That Can Play A Drum Sound When A Key Is Pressed.',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Drum-Kit/',
    source: 'https://github.com/AkashSingh3031/Web-Drum-Kit',
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'WeKeep-Notes',
    description: 'WeKeep-Notes',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Editor-Based/WeKeep-Notes',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'editor'],
  },
  {
    title: 'Whack-A-Mole',
    description: 'Whack-A-Mole',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Games/Whack-A-Mole/',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'games'],
  },
  {
    title: 'Words-Counter',
    description: 'Words-Counter',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Calculators/Words-Counter',
    source: null,
    tags: ['personal', 'design', 'html', 'css', 'js', 'calculators'],
  },

  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];

export type User = {
  title: string;
  description: string;
  preview: string | null; // null = use our serverless screenshot service
  website: string;
  source: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: {[type in TagType]: Tag} = {
  favorite: {
    label: translate({message: 'Favorite'}),
    description: translate({
      message:
        'Our favorite PrepVerse projects that you must absolutely check out!',
      id: 'showcase.tag.favorite.description',
    }),
    color: '#e9669e',
  },

  opensource: {
    label: translate({message: 'Open-Source'}),
    description: translate({
      message: 'Open-Source PrepVerse projects can be useful for inspiration!',
      id: 'showcase.tag.opensource.description',
    }),
    color: '#39ca30',
  },

  api: {
    label: translate({message: 'API'}),
    description: translate({
      message: 'API based PrepVerse projects that you must absolutely check out!',
      id: 'showcase.tag.api.description',
    }),
    color: '#39ca30',
  },

  personal: {
    label: translate({message: 'Personal'}),
    description: translate({
      message:
        'Personal websites, blogs and digital gardens',
      id: 'showcase.tag.personal.description',
    }),
    color: '#14cfc3',
  },

  design: {
    label: translate({message: 'Design'}),
    description: translate({
      message:
        'Beautiful PrepVerse projects, polished and standing out from the initial template!',
      id: 'showcase.tag.design.description',
    }),
    color: '#a44fb7',
  },

  html: {
    label: translate({message: 'HTML'}),
    description: translate({
      message:
        'PrepVerse projects using the html feature',
      id: 'showcase.tag.html.description',
    }),
    color: '#fe6829',
  },

  css: {
    label: translate({message: 'CSS'}),
    description: translate({
      message:
        'PrepVerse projects using the css feature',
      id: 'showcase.tag.css.description',
    }),
    color: '#127f82',
  },

  js: {
    label: translate({message: 'JavaScript'}),
    description: translate({
      message: 'PrepVerse projects using the js feature',
      id: 'showcase.tag.js.description',
    }),
    color: '#dfd545',
  },

  clock: {
    label: translate({message: 'Clock'}),
    description: translate({
      message:
        'Clock based PrepVerse projects',
      id: 'showcase.tag.clock.description',
    }),
    color: '#8c2f00',
  },

  large: {
    label: translate({message: 'Large'}),
    description: translate({
      message:
        'Very large PrepVerse projects, including many more pages than the average!',
      id: 'showcase.tag.large.description',
    }),
    color: '#8c2f00',
  },

  product: {
    label: translate({message: 'Product'}),
    description: translate({
      message: 'Projects associated to a commercial product!',
      id: 'showcase.tag.product.description',
    }),
    color: '#dfd545',
  },

  calculators: {
    label: translate({message: 'Calculators'}),
    description: translate({
      message: 'Calculators based PrepVerse projects',
      id: 'showcase.tag.calculators.description',
    }),
    color: '#dfd545',
  },

  games: {
    label: translate({message: 'Games'}),
    description: translate({
      message:
        'Games based PrepVerse projects',
      id: 'showcase.tag.games.description',
    }),
    color: '#14cfc3',
  },

  blogs: {
    label: translate({message: 'Blogs'}),
    description: translate({
      message: 'Blogs elements as PrepVerse projects',
      id: 'showcase.tag.blogs.description',
    }),
    color: '#dfd545',
  },

  editor: {
    label: translate({message: 'Editor'}),
    description: translate({
      message: 'Editor elements as PrepVerse projects',
      id: 'showcase.tag.editor.description',
    }),
    color: '#dfd545',
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const sortedUsers = sortUsers();
