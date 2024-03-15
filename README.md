# Frontend Mentor - Planets fact site solution

This is a solution to the [Planets fact site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- View each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology"

### Screenshot

#### Mobile Page

![iPhone XR](./public/screenshots/iPhone%20XR-1710111815990.png)

---
![Samsung Galaxy X8](./public/screenshots/Samsung%20Galaxy%20S8+-side.png)

---


#### Tablet Page

![iPad Air](./public/screenshots/iPad%20Air-1710111835794.png)

---

#### Desktop Page

![MacBook Pro](./public/screenshots/Macbook%20Pro-1710111865993.png)

---
I have include four screen shots of four devices:

- iPhone XR (414x896)
- Samsung Galaxy X8 (360x740)
- iPad (820x1180)
- MacBook Pro (1440x900)

I used the Responsively app while coding. They have a great screen-shot function. I also used Photoscape app to edit and combine the screen shots.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: (https://planet-facts-site-w-react-js-bootstrap.vercel.app/)

## My process

### Built with

- Mobile-first workflow
- [React with Vite](https://vitejs.dev/guide/) - Build tool for using ReactJS
- [React Bootstrap](https://react-bootstrap.netlify.app/) - Frontend framework for ReactJS
- [React Router](https://reactrouter.com/en/main)


### What I learned

My goal was to design this project as an Single Page App (SPA). I initially started my project in February 2023 using HTML and JS. I got stuck and frustrated, so I put the project aside. After working on more ReactJS projects, I decided to start the project again in January 2024. I finally learned how to input data from a json file to populate information for each planet when the navigation links and planet buttons are clicked. (Yay Me!)  

I am also proud that I learned how to override Bootstrap default styles within my SCSS files. That took some trial and error, but I was able to get the colors set for each planet. 

Some code snippets I am proud of:

```css

.planet-card__nav--mobile {
    .mercury .btn-primary.active {
        border-color: $mercury !important
    }
    .venus .btn-primary.active {
        border-color: $venus !important;
    }
    .earth .btn-primary.active {
        border-color: $earth !important;
    }
    .mars .btn-primary.active {
        border-color: $mars !important;
    }
    .jupiter .btn-primary.active {
        border-color: $jupiter !important
    }
    .saturn .btn-primary.active {
        border-color: $saturn !important;
    }
    .uranus .btn-primary.active {
        border-color: $uranus !important;
    }
    .neptune .btn-primary.active {
        border-color: $neptune !important
    }
    .btn-primary.active {
        font-weight: 700 !important;
        .text-secondary {
            color: white !important;
        }
    }
}

```
```js
<Button className={`btnPlanetMobile mx-2 ${pageState === 'overview' ? 'active' : null}`} size='sm' type='button' onClick={showOverviewInfo}>
     <span className='px-2 text-uppercase text-secondary'>Overview</span>
</Button>
```

### Continued development

I want to continue working with ReactJS to improve my skills. I used **Bootstrap** for this project. I plan on using **TailwindCSS** for my next project. 


### Useful resources

- [Daggala](https://www.daggala.com/react-state-not-updating-immediately/) - Blog post that helped me diagnose the issue of React states not setting immediately.
- [Dave Ceddia](https://daveceddia.com/react-before-render/) - Blog article that helped me with setting up conditional rendering (preventing React from trying to render components before the data was loaded and set in state).
- [Passing ClassName to Component in React](https://dev.to/dailydevtips1/passing-classname-to-components-in-react-12o2) - How to add mixed class names to React Components.
- [Ultimate React Router Guide](https://blog.webdevsimplified.com/2022-07/react-router/) - Blog post about React Router.
- [React Router](https://reactrouter.com/en/main) 
- [Resolving the Vercel 404 page not found Error](https://dev.to/stanlisberg/resolving-the-vercel-404-page-not-found-error-after-page-refresh-9b9) - How to add a vercel.json file to help Vercel configure the routing accurately.


## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
