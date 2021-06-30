# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

[Screenshot](./screenshot.png)

### Links

- Solution URL: [FrontEndMentor](https://www.frontendmentor.io/solutions/flexboox-39DN4TmRt)
- Live Site URL: [Vercel](https://sunnyside-agency-landing-page-five.vercel.app/)

## My process

### Built with

- ReactJS
- Styled Components
- Framer Motion
- React-Intersection-Observer
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I am practicing to retain my previous knowledge on using react-intersection-observer and creating custom hook. In essence, I wanted to activate animation when the view is within threshold of the elements. The code excerpt can be found below:

```js
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });

  if (view) {
    controls.start("animate");
  }

  return [element, controls];
};
```

### Continued development

Currently, there are no plans to add more features to this website.

### Useful resources

- [Net Ninja's Framer Motion Tutorial](https://www.youtube.com/watch?v=2V1WK-3HQNk&list=PL4cUxeGkcC9iHDnQfTHEVVceOEBsOf07i&index=1) - This is an amazing tutorial when it comes on how to use Framer Motion for beginners. Definitely check it out.

## Author

- Frontend Mentor - [@akaahl](https://www.frontendmentor.io/profile/akaahl)
- Twitter - [@akaahl1](https://twitter.com/akaahl1)

## Acknowledgments

I would like to thank DevEd, NetNinja on their tutorials for using Framer Motion and react-intersection-observer. Also, to FrontEndMentor and its community for for creating such amazing challenges and providing encouraging environment for us beginners to lift each other's up. Thank you.
