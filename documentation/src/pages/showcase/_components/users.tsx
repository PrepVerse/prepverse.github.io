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
  | 'api'
  | 'blogs'
  | 'calculators'
  | 'clock'
  | 'design'
  | 'editor'
  | 'games'
  | 'opensource'
  | 'personal'
  | 'html'
  | 'css'
  | 'js'
  | 'react'
  | 'node'
  | 'php'
  // | 'python'
  // | 'ml'
  // | 'ds'

const Users: User[] = [
  {
    title: '3d-Background-Boxes',
    description: '3d-Background-Boxes',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/3d-Background-Boxes',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/Others/21).%20%20JavaScript%203d-background-boxes',
    tags: ['html', 'css', 'js'],
  },
  {
    title: 'Age Calculator',
    description: 'Age Calculator is a simple app that calculates your age based on the year you were born.',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Calculators/Age-Calculator',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/05%5D.%20Calculators%20Based%20Project/01).%20JavaScript%20Age-Calculator',
    tags: ['html', 'css', 'js', 'calculators'],
  },
  {
    title: 'Analog-Clock',
    description: 'Analog-Clock',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Clock/Analog-Clock',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/06%5D.%20Clock%20Based%20Project/01).%20JavaScript%20Analog%20Clock',
    tags: ['html', 'css', 'js', 'clock'],
  },
  {
    title: 'Analog+Digital-Clock',
    description: 'Analog+Digital-Clock',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Clock/Analog+Digital-Clock',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/06%5D.%20Clock%20Based%20Project/03).%20JavaScript%20Analog%2BDigital%20Clock',
    tags: ['html', 'css', 'js', 'clock'],
  },
  {
    title: 'Animated-Countdown',
    description: 'Animated-Countdown',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Calculators/Animated-Countdown',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/05%5D.%20Calculators%20Based%20Project/08).%20JavaScript%20Animated-Countdown',
    tags: ['html', 'css', 'js', 'calculators'],
  },
  {
    title: 'Animated-Navigation',
    description: 'Animated-Navigation',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Blog-Page/Animated-Navigation',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/02%5D.%20Blog%20Page%20Based%20Project/06).%20JavaScript%20Animated-Navigation',
    tags: ['html', 'css', 'js', 'blogs'],
  },
  {
    title: 'Auto-Text-Effect',
    description: 'Auto-Text-Effect',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Editor-Based/Auto-Text-Effect',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/04%5D.%20Editor%20Based%20Project/08).%20JavaScript%20Auto-Text-Effect',
    tags: ['html', 'css', 'js', 'editor'],
  },
  {
    title: 'Background-Slider',
    description: 'Background-Slider',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Background-Slider',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/Others/18).%20%20JavaScript%20Background-Slider',
    tags: ['html', 'css', 'js'],
  },
  {
    title: 'Blurry-Loading',
    description: 'Blurry-Loading',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Blog-Page/Blurry-Loading',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/02%5D.%20Blog%20Page%20Based%20Project/19).%20JavaScript%20Blurry-Loading',
    tags: ['html', 'css', 'js', 'blogs'],
  },
  {
    title: 'Calculator With Voice Recognition',
    description: 'Calculator With Voice Recognition Is A Simple App That Can Perform Basic Arithmetic Operations.',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Calculators/Calculator-with-Voice-Command',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/05%5D.%20Calculators%20Based%20Project/03).%20JavaScript%20Calculator-with-Voice-Command',
    tags: ['html', 'css', 'js', 'calculators'],
  },
  {
    title: 'Checkboxes',
    description: 'Checkboxes',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Checkboxes',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/Others/26).%20%20JavaScript%20Checkboxes',
    tags: ['html', 'css', 'js'],
  },
  {
    title: 'Click-and-Drag',
    description: 'Click-and-Drag',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Click-and-Drag',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/Others/16).%20JavaScript%20Click%20and%20Drag',
    tags: ['html', 'css', 'js'],
  },
  {
    title: 'CodePoint',
    description: 'Personal site',
    preview: null,
    website: 'https://prepverse.github.io/CodePoint',
    source: 'https://github.com/PrepVerse/CodePoint',
    tags: ['favorite', 'personal', 'design', 'opensource'],
  },
  {
    title: 'Color Flipper',
    description: 'Color Flipper Is A Simple App That Can Change The Background Color Of The Page.',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Color-flipper',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/Others/12).%20JavaScript%20color-flipper',
    tags: ['html', 'css', 'js'],
  },
  {
    title: 'Content-Placeholder',
    description: 'Content-Placeholder',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Blog-Page/Content-Placeholder',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/02%5D.%20Blog%20Page%20Based%20Project/10).%20JavaScript%20content-placeholder',
    tags: ['html', 'css', 'js', 'blogs'],
  },
  {
    title: 'Countdown Timer',
    description: 'Countdown Timer Is A Simple App That Can Count Down From A Given Time.',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Clock/Countdown-Timer',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/06%5D.%20Clock%20Based%20Project/06).%20JavaScript%20Countdown%20Timer',
    tags: ['html', 'css', 'js', 'clock'],
  },
  {
    title: 'Counter',
    description: 'Counter',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Calculators/Counter',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/05%5D.%20Calculators%20Based%20Project/07).%20JavaScript%20counter',
    tags: ['html', 'css', 'js', 'calculators'],
  },
  {
    title: 'Country-Search-App',
    description: 'Country Search App',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/API-Based/Country-Search-App',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/01%5D.%20API%20Based%20Project/06).%20JavaScript%20Country-Search-App',
    tags: ['html', 'css', 'js', 'api'],
  },
  {
    title: 'CSS Variables With JS',
    description: 'CSS Variables With JS Is A Simple App That Can Change Radius Of Image, Blur Effect On Image And Border Color Of Image.',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/CSS-Variables/',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/Others/06).%20JavaScript%20CSS%20Variables',
    tags: ['html', 'css', 'js'],
  },
  {
    title: 'Custom-Video-Player',
    description: 'Custom-Video-Player',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Custom-Video-Player',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/Others/03).%20JavaScript%20Custom%20Video%20Player',
    tags: ['html', 'css', 'js'],
  },
  {
    title: 'Digital-Clock',
    description: 'Digital-Clock',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Clock/Digital-Clock',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/06%5D.%20Clock%20Based%20Project/02).%20JavaScript%20Digital%20Clock',
    tags: ['html', 'css', 'js', 'clock'],
  },
  {
    title: 'Double-Heart-Click',
    description: 'Double-Heart-Click',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Blog-Page/Double-Heart-Click',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/02%5D.%20Blog%20Page%20Based%20Project/15).%20JavaScript%20double-heart-click',
    tags: ['html', 'css', 'js', 'blogs'],
  },
  {
    title: 'Double-Vertical-Slider',
    description: 'Double-Vertical-Slider',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Double-Vertical-Slider',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/Others/19).%20%20JavaScript%20double-vertical-slider',
    tags: ['html', 'css', 'js'],
  },
  {
    title: 'Drag-n-Drop',
    description: 'Drag-n-Drop',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Drag-n-Drop',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/Others/17).%20%20JavaScript%20drag-n-drop',
    tags: ['html', 'css', 'js'],
  },
  {
    title: 'Drawing-App',
    description: 'Drawing-App',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Editor-Based/Drawing-App',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/04%5D.%20Editor%20Based%20Project/02).%20JavaScript%20Drawing-App',
    tags: ['html', 'css', 'js', 'editor'],
  },
  {
    title: 'Drink-Water',
    description: 'Drink-Water',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Games/Drink-Water',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/03%5D.%20Games/05).%20JavaScript%20drink-water',
    tags: ['html', 'css', 'js', 'games'],
  },
  {
    title: 'Event-Keycodes',
    description: 'Event-Keycodes',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Event-Keycodes',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/Others/24).%20%20JavaScript%20event-keycodes',
    tags: ['html', 'css', 'js'],
  },
  {
    title: 'Expanding-Cards',
    description: 'Expanding-Cards',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Expanding-Cards',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/Others/08).%20%20JavaScript%20expanding-cards',
    tags: ['html', 'css', 'js'],
  },
  {
    title: 'FAQ-Collapse',
    description: 'FAQ-Collapse',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Blog-Page/faq-Collapse',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/02%5D.%20Blog%20Page%20Based%20Project/11).%20JavaScript%20faq-collapse',
    tags: ['html', 'css', 'js', 'blogs'],
  },
  {
    title: 'Feedback-UI-Design',
    description: 'Feedback-UI-Design',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Blog-Page/Feedback-UI-Design',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/02%5D.%20Blog%20Page%20Based%20Project/12).%20JavaScript%20feedback-ui-design',
    tags: ['html', 'css', 'js', 'blogs'],
  },
  {
    title: 'Flex-Panel-Gallery',
    description: 'Flex-Panel-Gallery',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Flex-Panel-Gallery',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/Others/07).%20JavaScript%20Flex%20Panel%20Gallery',
    tags: ['html', 'css', 'js'],
  },
  {
    title: 'Follow-Along-Link-Highlighter',
    description: 'Follow-Along-Link-Highlighter',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Blog-Page/Follow-Along-Link-Highlighter',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/02%5D.%20Blog%20Page%20Based%20Project/04).%20JavaScript%20Follow%20Along%20Link%20Highlighter',
    tags: ['html', 'css', 'js', 'blogs'],
  },
  {
    title: 'Form-Wave-Animation',
    description: 'Form-Wave-Animation',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Blog-Page/Form-Wave-Animation',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/02%5D.%20Blog%20Page%20Based%20Project/17).%20JavaScript%20form-wave-animation',
    tags: ['html', 'css', 'js', 'blogs'],
  },
  {
    title: 'Fun-with-Drawing',
    description: 'Fun-with-Drawing',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Editor-Based/Fun-with-Drawing',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/04%5D.%20Editor%20Based%20Project/01).%20JavaScript%20Fun%20with%20Drawing',
    tags: ['html', 'css', 'js', 'editor'],
  },
  {
    title: 'Github-Profiles',
    description: 'Github Profiles',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/API-Based/Github-Profiles',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/01%5D.%20API%20Based%20Project/01).%20JavaScript%20github-profiles',
    tags: ['html', 'css', 'js', 'api'],
  },
  {
    title: 'Grade-Percentage-Calcy',
    description: 'Grade-Percentage-Calcy',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Calculators/Grade-Percentage-Calcy',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/05%5D.%20Calculators%20Based%20Project/04).%20JavaScript%20Grade-Percentage-Calcy',
    tags: ['html', 'css', 'js', 'calculators'],
  },
  {
    title: 'Hidden-Search-Widget',
    description: 'Hidden-Search-Widget',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Blog-Page/Hidden-Search-Widget',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/02%5D.%20Blog%20Page%20Based%20Project/05).%20JavaScript%20hidden-search-widget',
    tags: ['html', 'css', 'js', 'blogs'],
  },
  {
    title: 'HMS-React-Php-GOLANG',
    description: 'HMS-React-Php-GOLANG',
    preview: null,
    website: 'https://hms-nikhil.netlify.app',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/02%5D.%20Blog%20Page%20Based%20Project/23).%20HMS-React-Php-GOLANG',
    tags: ['html', 'css', 'js', 'react', 'php', 'blogs'],
  },
  {
    title: 'Hold-Shift-and-Check-Checkboxes',
    description: 'Hold-Shift-and-Check-Checkboxes',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Hold-Shift-and-Check-Checkboxes',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/Others/15).%20JavaScript%20Hold%20Shift%20and%20Check%20Checkboxes',
    tags: ['html', 'css', 'js'],
  },
  {
    title: 'Hoverboard',
    description: 'Hoverboard',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Hoverboard',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/Others/11).%20%20JavaScript%20hoverboard',
    tags: ['html', 'css', 'js'],
  },
  {
    title: 'Image-Carousel',
    description: 'Image-Carousel',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Image-Carousel',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/Others/20).%20%20JavaScript%20image-carousel',
    tags: ['html', 'css', 'js'],
  },
  {
    title: 'Incrementing-Counter',
    description: 'Incrementing-Counter',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Blog-Page/Incrementing-Counter',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/02%5D.%20Blog%20Page%20Based%20Project/13).%20JavaScript%20incrementing-counter',
    tags: ['html', 'css', 'js', 'blogs'],
  },
  {
    title: 'Insect-Catch-Game',
    description: 'Insect-Catch-Game',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Games/Insect-Catch-Game',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/03%5D.%20Games/02).%20JavaScript%20insect-catch-game',
    tags: ['html', 'css', 'js', 'games'],
  },
  {
    title: 'JS-Issue-Tracker',
    description: 'JS-Issue-Tracker',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/API-Based/JS-Issue-Tracker',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/01%5D.%20API%20Based%20Project/05).%20JS-Issue-Tracker',
    tags: ['html', 'css', 'js', 'api'],
  },
  {
    title: 'Kinetic-CSS-Loader',
    description: 'Kinetic-CSS-Loader',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Blog-Page/Kinetic-CSS-Loader',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/02%5D.%20Blog%20Page%20Based%20Project/08).%20JavaScript%20kinetic-css-loader',
    tags: ['html', 'css', 'js', 'blogs'],
  },
  {
    title: 'LeetVerse',
    description: 'Personal site',
    preview: null,
    website: 'https://prepverse.github.io/LeetVerse',
    source: 'https://github.com/PrepVerse/LeetVerse',
    tags: ['favorite', 'personal', 'design', 'opensource', 'api'],
  },
  {
    title: 'LocalStorage',
    description: 'LocalStorage',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/LocalStorage/',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/Others/13).%20JavaScript%20LocalStorage',
    tags: ['html', 'css', 'js'],
  },
  {
    title: 'Mobile-Tab-Navigation',
    description: 'Mobile-Tab-Navigation',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Blog-Page/Mobile-Tab-Navigation',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/02%5D.%20Blog%20Page%20Based%20Project/14).%20JavaScript%20mobile-tab-navigation',
    tags: ['html', 'css', 'js', 'blogs'],
  },
  {
    title: 'Mouse-Move-Shadow',
    description: 'Mouse-Move-Shadow',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Mouse-Move-Shadow/',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/Others/10).%20JavaScript%20Mouse%20Move%20Shadow',
    tags: ['html', 'css', 'js'],
  },
  {
    title: 'Movie-App',
    description: 'Movie-App',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/API-Based/Movie-App',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/01%5D.%20API%20Based%20Project/04).%20JavaScript%20movie-app',
    tags: ['html', 'css', 'js', 'api'],
  },
  {
    title: 'Music-Player',
    description: 'Music-Player',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Music-Player',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/Others/02).%20%20JavaScript%20Music-Player',
    tags: ['html', 'css', 'js'],
  },
  {
    title: 'Netflix-Clone',
    description: 'Netflix-Clone',
    preview: null,
    website: 'https://netflix-clone-b1517.web.app',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/ReactJS%20Projects/02).%20Netflix%20Clone',
    tags: ['react'],
  },
  {
    title: 'Notes-App',
    description: 'Notes-App',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Editor-Based/Notes-App',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/04%5D.%20Editor%20Based%20Project/04).%20JavaScript%20Notes-App',
    tags: ['html', 'css', 'js', 'editor'],
  },
  {
    title: 'Number-Guess',
    description: 'Number-Guess',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Games/Number-Guess',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/03%5D.%20Games/04).%20JavaScript%20Number-Guess',
    tags: ['html', 'css', 'js', 'games'],
  },
  {
    title: 'Paragraph-Generator',
    description: 'Paragraph-Generator',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Editor-Based/Paragraph-Generator',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/04%5D.%20Editor%20Based%20Project/12).%20JavaScript%20Paragraph%20Generator',
    tags: ['html', 'css', 'js', 'editor'],
  },
  {
    title: 'Password-Generator',
    description: 'Password-Generator',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Editor-Based/Password-Generator',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/04%5D.%20Editor%20Based%20Project/11).%20JavaScript%20Password%20Generator',
    tags: ['html', 'css', 'js', 'editor'],
  },
  {
    title: 'Password-Strength-Background',
    description: 'Password-Strength-Background',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Blog-Page/Password-Strength-Background',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/02%5D.%20Blog%20Page%20Based%20Project/21).%20JavaScript%20password-strength-background',
    tags: ['html', 'css', 'js', 'blogs'],
  },
  {
    title: 'Percentage-Calculator',
    description: 'Percentage-Calculator',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Calculators/Percentage-Calculator',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/05%5D.%20Calculators%20Based%20Project/02).%20JavaScript%20Percentage%20Calculator',
    tags: ['html', 'css', 'js', 'calculators'],
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
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/Others/25).%20%20JavaScript%20progress-steps',
    tags: ['html', 'css', 'js'],
  },
  {
    title: 'Quiz-Application-with-Timer',
    description: 'Quiz-Application-with-Timer',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Quiz-Application-with-Timer',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/Others/23).%20JavaScript%20Quiz%20Application%20with%20Timer',
    tags: ['html', 'css', 'js'],
  },
  {
    title: 'Random-Choice-Picker',
    description: 'Random-Choice-Picker',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Editor-Based/Random-Choice-Picker',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/04%5D.%20Editor%20Based%20Project/06).%20JavaScript%20random-choice-picker',
    tags: ['html', 'css', 'js', 'editor'],
  },
  {
    title: 'Random-Image-Feed',
    description: 'Random-Image-Feed',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Random-Image-Feed',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/Others/22).%20%20JavaScript%20random-image-feed',
    tags: ['html', 'css', 'js'],
  },
  {
    title: 'Rotation-Navigation',
    description: 'Rotation-Navigation',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Blog-Page/Rotation-Navigation',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/02%5D.%20Blog%20Page%20Based%20Project/07).%20JavaScript%20rotation-navigation',
    tags: ['html', 'css', 'js', 'blogs'],
  },
  {
    title: 'Scroll-Animation',
    description: 'Scroll-Animation',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Blog-Page/Scroll-Animation',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/02%5D.%20Blog%20Page%20Based%20Project/20).%20JavaScript%20scroll-animation',
    tags: ['html', 'css', 'js', 'blogs'],
  },
  {
    title: 'Simple-Text-Editor',
    description: 'Simple-Text-Editor',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Editor-Based/Simple-Text-Editor',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/04%5D.%20Editor%20Based%20Project/05).%20JavaScript%20Simple-Text-Editor',
    tags: ['html', 'css', 'js', 'editor'],
  },
  {
    title: 'Slide-in-on-Scroll',
    description: 'Slide-in-on-Scroll',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Blog-Page/Slide-in-on-Scroll',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/02%5D.%20Blog%20Page%20Based%20Project/09).%20JavaScript%20Slide%20in%20on%20Scroll',
    tags: ['html', 'css', 'js', 'blogs'],
  },
  {
    title: 'Solar-System',
    description: 'Solar-System',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Games/Solar-System',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/03%5D.%20Games/05).%20JavaScript%20Solar-System',
    tags: ['html', 'css', 'js', 'games'],
  },
  {
    title: 'Sound-btn',
    description: 'Sound-btn',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Sound-btn',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/Others/05).%20%20JavaScript%20sound-btn',
    tags: ['html', 'css', 'js'],
  },
  {
    title: 'Speech-Synthesis',
    description: 'Speech-Synthesis',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Editor-Based/Speech-Synthesis',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/04%5D.%20Editor%20Based%20Project/09).%20JavaScript%20Speech%20Synthesis',
    tags: ['html', 'css', 'js', 'editor'],
  },
  {
    title: 'Speech-Text-Reader',
    description: 'Speech-Text-Reader',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Editor-Based/Speech-Text-Reader',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/04%5D.%20Editor%20Based%20Project/10).%20JavaScript%20Speech-Text-Reader',
    tags: ['html', 'css', 'js', 'editor'],
  },
  {
    title: 'Split-Landing-Page',
    description: 'Split-Landing-Page',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Blog-Page/Split-Landing-Page',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/02%5D.%20Blog%20Page%20Based%20Project/22).%20JavaScript%20split-landing-page',
    tags: ['html', 'css', 'js', 'blogs'],
  },
  {
    title: 'Sticky-Nav',
    description: 'Sticky-Nav',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Blog-Page/Sticky-Nav',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/02%5D.%20Blog%20Page%20Based%20Project/02).%20JavaScript%20Sticky%20Nav',
    tags: ['html', 'css', 'js', 'blogs'],
  },
  {
    title: 'Sticky-Navbar',
    description: 'Sticky-Navbar',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Blog-Page/Sticky-Navbar',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/02%5D.%20Blog%20Page%20Based%20Project/03).%20JavaScript%20Sticky-Navbar',
    tags: ['html', 'css', 'js', 'blogs'],
  },
  {
    title: 'Stop-Watch',
    description: 'Stop-Watch',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Clock/Stop-Watch',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/06%5D.%20Clock%20Based%20Project/05).%20JavaScript%20Stop-Watch',
    tags: ['html', 'css', 'js', 'clock'],
  },
  {
    title: 'Stripe-Follow-Along-Nav',
    description: 'Stripe-Follow-Along-Nav',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Blog-Page/Stripe-Follow-Along-Nav',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/02%5D.%20Blog%20Page%20Based%20Project/01).%20JavaScript%20%20Stripe%20Follow%20Along%20Nav',
    tags: ['html', 'css', 'js', 'blogs'],
  },
  {
    title: 'Temperature-Converter',
    description: 'Temperature-Converter',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Calculators/Temperature-Converter',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/05%5D.%20Calculators%20Based%20Project/05).%20JavaScript%20Temperature-Converter',
    tags: ['html', 'css', 'js', 'calculators'],
  },
  {
    title: 'Testimonial-Box-Switcher',
    description: 'Testimonial-Box-Switcher',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Blog-Page/Testimonial-Box-Switcher',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/02%5D.%20Blog%20Page%20Based%20Project/16).%20JavaScript%20testimonial-box-switcher',
    tags: ['html', 'css', 'js', 'blogs'],
  },
  {
    title: 'Tetris-Game',
    description: 'Tetris-Game',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Games/Tetris-Game',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/03%5D.%20Games/03).%20JavaScript%20Tetris-Game',
    tags: ['html', 'css', 'js', 'games'],
  },
  {
    title: 'Textogram',
    description: 'Textogram',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Editor-Based/Textogram',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/04%5D.%20Editor%20Based%20Project/07).%20JavaScript-Textogram',
    tags: ['html', 'css', 'js', 'editor'],
  },
  {
    title: 'Theme-Clock',
    description: 'Theme-Clock',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Clock/Theme-Clock',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/06%5D.%20Clock%20Based%20Project/04).%20JavaScript%20Theme-Clock',
    tags: ['html', 'css', 'js', 'clock'],
  },
  {
    title: 'Todo App',
    description: 'Todo App',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Todo App',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/Others/14).%20Javascript%20Todo%20App',
    tags: ['html', 'css', 'js'],
  },
  {
    title: 'Type-Ahead',
    description: 'Type-Ahead',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/API-Based/Type-Ahead',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/01%5D.%20API%20Based%20Project/07).%20JavaScript%20Type%20Ahead',
    tags: ['html', 'css', 'js', 'api'],
  },
  {
    title: 'University-Website',
    description: 'University-Website',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Blog-Page/University-Website',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/02%5D.%20Blog%20Page%20Based%20Project/24).%20University%20Website%20Using%20Javascript%20And%20Bootstrap',
    tags: ['html', 'css', 'js', 'blogs'],
  },
  {
    title: 'Verify-Account-UI',
    description: 'Verify-Account-UI',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Blog-Page/Verify-Account-UI',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/02%5D.%20Blog%20Page%20Based%20Project/18).%20JavaScript%20verify-account-ui',
    tags: ['html', 'css', 'js', 'blogs'],
  },
  {
    title: 'Video-Speed-Controller',
    description: 'Video-Speed-Controller',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Video-Speed-Controller/',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/Others/04).%20JavaScript%20Video%20Speed%20Controller',
    tags: ['html', 'css', 'js'],
  },
  {
    title: 'Weather',
    description: 'Weather',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/API-Based/Weather',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/01%5D.%20API%20Based%20Project/03).%20JavaScript%20Weather',
    tags: ['html', 'css', 'js', 'api'],
  },
  {
    title: 'Weather-App',
    description: 'Weather-App',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/API-Based/Weather-App',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/01%5D.%20API%20Based%20Project/02).%20JavaScript%20weather-app',
    tags: ['html', 'css', 'js', 'api'],
  },
  {
    title: 'Webcam-Fun',
    description: 'Webcam-Fun',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Webcam-Fun',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/Others/09).%20JavaScript%20Webcam%20Fun',
    tags: ['html', 'css', 'js'],
  },
  {
    title: 'Web Drum Kit',
    description: 'Web Drum Kit Is A Simple App That Can Play A Drum Sound When A Key Is Pressed.',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/General/Drum-Kit/',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/Others/01).%20JavaScript%20Drum%20Kit',
    tags: ['html', 'css', 'js'],
  },
  {
    title: 'WeKeep-Notes',
    description: 'WeKeep-Notes',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Editor-Based/WeKeep-Notes',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/04%5D.%20Editor%20Based%20Project/03).%20JavaScript%20WeKeep-Notes',
    tags: ['html', 'css', 'js', 'editor'],
  },
  {
    title: 'Whack-A-Mole',
    description: 'Whack-A-Mole',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Games/Whack-A-Mole/',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/03%5D.%20Games/01).%20JavaScript%20Whack%20A%20Mole',
    tags: ['html', 'css', 'js', 'games'],
  },
  {
    title: 'Words-Counter',
    description: 'Words-Counter',
    preview: null,
    website: 'https://prepverse.github.io/portfolio/projects/Calculators/Words-Counter',
    source: 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects/Web%20Development/JavaScript%20Projects/05%5D.%20Calculators%20Based%20Project/06).%20JavaScript%20Words-Counter',
    tags: ['html', 'css', 'js', 'calculators'],
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

  api: {
    label: translate({message: 'API'}),
    description: translate({
      message: 'API based PrepVerse projects that you must absolutely check out!',
      id: 'showcase.tag.api.description',
    }),
    color: '#39ca30',
  },

  blogs: {
    label: translate({message: 'Blogs'}),
    description: translate({
      message: 'Blogs elements as PrepVerse projects',
      id: 'showcase.tag.blogs.description',
    }),
    color: '#ff6347',
  },

  calculators: {
    label: translate({message: 'Calculators'}),
    description: translate({
      message: 'Calculators based PrepVerse projects',
      id: 'showcase.tag.calculators.description',
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
    color: '#ff0000',
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

  editor: {
    label: translate({message: 'Editor'}),
    description: translate({
      message: 'Editor elements as PrepVerse projects',
      id: 'showcase.tag.editor.description',
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
    color: '#00ff7f',
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

  react: {
    label: translate({message: 'ReactJS'}),
    description: translate({
      message: 'PrepVerse projects using the react feature',
      id: 'showcase.tag.react.description',
    }),
    color: '#008b8b',
  },

  node: {
    label: translate({message: 'NodeJS'}),
    description: translate({
      message: 'PrepVerse projects using the node feature',
      id: 'showcase.tag.node.description',
    }),
    color: '#006400',
  },

  php: {
    label: translate({message: 'PHP'}),
    description: translate({
      message: 'PrepVerse projects using the php feature',
      id: 'showcase.tag.php.description',
    }),
    color: '#1e90fe',
  },

  // python: {
  //   label: translate({message: 'Python'}),
  //   description: translate({
  //     message: 'PrepVerse projects using the python feature',
  //     id: 'showcase.tag.python.description',
  //   }),
  //   color: '#ffff00',
  // },

  // ml: {
  //   label: translate({message: 'Machine Learning'}),
  //   description: translate({
  //     message: 'PrepVerse projects using the ml feature',
  //     id: 'showcase.tag.ml.description',
  //   }),
  //   color: '#c71585',
  // },

  // ds: {
  //   label: translate({message: 'Data Science'}),
  //   description: translate({
  //     message: 'PrepVerse projects using the ds feature',
  //     id: 'showcase.tag.ds.description',
  //   }),
  //   color: '#3cb371',
  // },
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
