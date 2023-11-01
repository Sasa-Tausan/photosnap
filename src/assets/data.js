const menuList = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'stories',
    path: '/stories',
  },
  {
    name: 'features',
    path: '/features',
  },
  {
    name: 'pricing',
    path: '/pricing',
  },
];

export { menuList };

import createImgDesktop from '../assets/home/desktop/create-and-share.jpg';
import createImgTablet from '../assets/home/tablet/create-and-share.jpg';
import createImgMobile from '../assets/home/mobile/create-and-share.jpg';

import storiesImgDesktop from '../assets/home/desktop/beautiful-stories.jpg';
import storiesImgTablet from '../assets/home/tablet/beautiful-stories.jpg';
import storiesImgMobile from '../assets/home/mobile/beautiful-stories.jpg';

import everyoneImgDesktop from '../assets/home/desktop/designed-for-everyone.jpg';
import everyoneImgTablet from '../assets/home/tablet/designed-for-everyone.jpg';
import everyoneImgMobile from '../assets/home/mobile/designed-for-everyone.jpg';

const homePageData = [
  {
    images: {
      desktop: createImgDesktop,
      tablet: createImgTablet,
      mobile: createImgMobile,
    },
    title: 'create and share your photo stories.',
    text: 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
  },
  {
    images: {
      desktop: storiesImgDesktop,
      tablet: storiesImgTablet,
      mobile: storiesImgMobile,
    },
    title: 'beautiful stories every time',
    text: 'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
  },
  {
    images: {
      desktop: everyoneImgDesktop,
      tablet: everyoneImgTablet,
      mobile: everyoneImgMobile,
    },
    title: 'designed for everyone',
    text: 'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ',
  },
];

export { homePageData };

import voyageImgDesktop from '../assets/stories/desktop/18-days-voyage.jpg';
import voyageImgMobile from '../assets/stories/mobile/18-days-voyage.jpg';
import arcitecturalsImgDesktop from '../assets/stories/desktop/architecturals.jpg';
import arcitecturalsImgMobile from '../assets/stories/mobile/architecturals.jpg';
import wavesImgDesktop from '../assets/stories/desktop/behind-the-waves.jpg';
import wavesImgMobile from '../assets/stories/mobile/behind-the-waves.jpg';
import watersImgDesktop from '../assets/stories/desktop/calm-waters.jpg';
import waterImgMobile from '../assets/stories/mobile/calm-waters.jpg';
import cityscapesImgDesktop from '../assets/stories/desktop/cityscapes.jpg';
import cityscapesImgMobile from '../assets/stories/mobile/cityscapes.jpg';
import forestImgDesktop from '../assets/stories/desktop/dark-forest.jpg';
import forestImgMobile from '../assets/stories/mobile/dark-forest.jpg';
import lionImgDesktop from '../assets/stories/desktop/king-on-africa.jpg';
import lionImgMobile from '../assets/stories/mobile/king-on-africa.jpg';
import dreamsImgDesktop from '../assets/stories/desktop/land-of-dreams.jpg';
import dreamsImgMobile from '../assets/stories/mobile/land-of-dreams.jpg';
import milkywayImgDesktop from '../assets/stories/desktop/milky-way.jpg';
import milkywayImgMobile from '../assets/stories/mobile/milky-way.jpg';
import mountainsImgDesktop from '../assets/stories/desktop/mountains.jpg';
import mountainsImgMobile from '../assets/stories/mobile/mountains.jpg';
import seaImgDesktop from '../assets/stories/desktop/rage-of-the-sea.jpg';
import seaImgMobile from '../assets/stories/mobile/rage-of-the-sea.jpg';
import runningImgDesktop from '../assets/stories/desktop/running-free.jpg';
import runningImbMobile from '../assets/stories/mobile/running-free.jpg';
import somwarpetImgDesktop from '../assets/stories/desktop/somwarpet.jpg';
import somwarpetImgMobile from '../assets/stories/mobile/somwarpet.jpg';
import nowhereImgDesktop from '../assets/stories/desktop/trip-to-nowhere.jpg';
import nowhereImgMobile from '../assets/stories/mobile/trip-to-nowhere.jpg';
import cornersImgDesktop from '../assets/stories/desktop/unforeseen-corners.jpg';
import cornersImgMobile from '../assets/stories/mobile/unforeseen-corners.jpg';
import tourImgDesktop from '../assets/stories/desktop/world-tour.jpg';
import tourImgMobile from '../assets/stories/mobile/world-tour.jpg';

const storiesPageData = [
  {
    images: {
      desktop: mountainsImgDesktop,
      mobile: mountainsImgMobile,
    },
    date: 'April 16th 2020',
    title: 'The Mountains',
    author: 'John Appleseed',
  },
  {
    images: {
      desktop: cityscapesImgDesktop,
      mobile: cityscapesImgMobile,
    },
    date: 'April 14th 2020',
    title: 'Sunset Cityscapes',
    author: 'Benjamin Cruz',
  },
  {
    images: {
      desktop: voyageImgDesktop,
      mobile: voyageImgMobile,
    },
    date: 'April 11th 2020',
    title: '18 Days Voyage',
    author: 'Alexei Borodin',
  },
  {
    images: {
      desktop: arcitecturalsImgDesktop,
      mobile: arcitecturalsImgMobile,
    },
    date: 'April 9th 2020',
    title: 'Architecturals',
    author: 'Samantha Brooke',
  },
  {
    images: {
      desktop: tourImgDesktop,
      mobile: tourImgMobile,
    },
    date: 'April 7th 2020',
    title: 'World Tour 2019',
    author: 'Timothy Wagner',
  },
  {
    images: {
      desktop: cornersImgDesktop,
      mobile: cornersImgMobile,
    },
    date: 'April 3rd 2020',
    title: 'Unforeseen Corners',
    author: 'William Malcolm',
  },
  {
    images: {
      desktop: lionImgDesktop,
      mobile: lionImgMobile,
    },
    date: 'March 29th 2020',
    title: 'King on Africa: Part II',
    author: 'Tim Hillenburg',
  },
  {
    images: {
      desktop: nowhereImgDesktop,
      mobile: nowhereImgMobile,
    },
    date: 'March 21st 2020',
    title: 'The Trip to Nowhere',
    author: 'Felicia Rourke',
  },
  {
    images: {
      desktop: seaImgDesktop,
      mobile: seaImgMobile,
    },
    date: 'March 19th 2020',
    title: 'Rage of The Sea',
    author: 'Mohammed Abdul',
  },
  {
    images: {
      desktop: runningImgDesktop,
      mobile: runningImbMobile,
    },
    date: 'March 16th 2020',
    title: 'Running Free',
    author: 'Michelle',
  },
  {
    images: {
      desktop: wavesImgDesktop,
      mobile: wavesImgMobile,
    },
    date: 'March 11th 2020',
    title: 'Behind the Waves',
    author: 'Lamarr Wilson',
  },
  {
    images: {
      desktop: watersImgDesktop,
      mobile: waterImgMobile,
    },
    date: 'March 9th 2020',
    title: 'Calm Waters',
    author: 'Samantha Brooke',
  },
  {
    images: {
      desktop: milkywayImgDesktop,
      mobile: milkywayImgMobile,
    },
    date: 'March 5th 2020',
    title: 'The Milky Way',
    author: 'Benjamin Cruz',
  },
  {
    images: {
      desktop: forestImgDesktop,
      mobile: forestImgMobile,
    },
    date: 'March 4th 2020',
    title: 'Night at The Dark Forest',
    author: 'Mohammed Abdul',
  },
  {
    images: {
      desktop: somwarpetImgDesktop,
      mobile: somwarpetImgMobile,
    },
    date: 'March 1st 2020',
    title: 'Somwarpet’s Beauty',
    author: 'Michelle',
  },
  {
    images: {
      desktop: dreamsImgDesktop,
      mobile: dreamsImgMobile,
    },
    date: 'February 25th 2020',
    title: 'Land of Dreams',
    author: 'William Malcolm',
  },
];

export { storiesPageData };
