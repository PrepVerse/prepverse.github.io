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
  | 'product'
  | 'large'

const Users: User[] = [
  {
    title: 'Age Calculator',
    description: 'Age Calculator is a simple app that calculates your age based on the year you were born.',
    preview: null,
    website: 'https://akashsingh3031.github.io/Age-Calculator',
    source: 'https://github.com/AkashSingh3031/Age-Calculator',
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'Calculator With Voice Recognition',
    description: 'Calculator With Voice Recognition Is A Simple App That Can Perform Basic Arithmetic Operations.',
    preview: null,
    website: 'https://akashsingh3031.github.io/Calculator-with-Voice-Recognition',
    source: 'https://github.com/AkashSingh3031/Calculator-with-Voice-Recognition',
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
    website: 'https://akashsingh3031.github.io/Color-Flipper',
    source: 'https://github.com/AkashSingh3031/Color-Flipper',
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'Countdown Timer',
    description: 'Countdown Timer Is A Simple App That Can Count Down From A Given Time.',
    preview: null,
    website: 'https://akashsingh3031.github.io/Countdown-Timer',
    source: 'https://github.com/AkashSingh3031/Countdown-Timer',
    tags: ['personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'CSS Variables With JS',
    description: 'CSS Variables With JS Is A Simple App That Can Change Radius Of Image, Blur Effect On Image And Border Color Of Image.',
    preview: null,
    website: 'https://akashsingh3031.github.io/CSS-Variables-with-JS',
    source: 'https://github.com/AkashSingh3031/CSS-Variables-with-JS',
    tags: ['personal', 'design', 'html', 'css', 'js'],
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
    title: 'Portfolio',
    description: 'My portfolio web page',
    preview: null,
    website: 'https://prepverse.github.io/portfolio',
    source: 'https://github.com/PrepVerse/portfolio',
    tags: ['favorite', 'personal', 'design', 'html', 'css', 'js'],
  },
  {
    title: 'Web Drum Kit',
    description: 'Web Drum Kit Is A Simple App That Can Play A Drum Sound When A Key Is Pressed.',
    preview: null,
    website: 'https://akashsingh3031.github.io/Web-Drum-Kit',
    source: 'https://github.com/AkashSingh3031/Web-Drum-Kit',
    tags: ['personal', 'design', 'html', 'css', 'js'],
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
