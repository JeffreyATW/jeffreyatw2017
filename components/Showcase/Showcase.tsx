import React, { MouseEvent, useCallback, useEffect, useState } from 'react';
import kindred from './kindred.webp';
import bim360Plan from './bim-360-plan.webp';
import jeffreyAndAnna from './jeffrey-and-anna.webp';
import lunch from './lunch.webp';
import mbfcIcon from './mbfc-icon.webp';
import speed from './speed.webp';
import arrowLeft from '@/public/images/svg/arrow-left.svg';
import arrowRight from '@/public/images/svg/arrow-right.svg';
import Image from 'next/image';

const items = [
  {
    id: 'kindred',
    name: 'Kindred',
    description: `I was the sole front-end developer for this Next.js-based blueprinting app for an
    electric car company. Worked closely with design and API devs to make an intuitive tool!`,
    url: 'https://labzero.com/case-studies/kindred',
    image: kindred,
  },
  {
    id: 'speed',
    name: 'How We Gave a Redux-powered React App a Speed Boost',
    description: `A deep-dive blog post about the improvements we made to a long-lived React and
    Redux app. Includes some industry-standard, but also less conventional, approaches.`,
    url: 'https://labzero.com/blog/how-we-gave-a-redux-powered-react-app-a-speed-boost',
    image: speed,
  },
  {
    id: 'lunch',
    name: 'Lunch',
    description: `I wrote this React/Redux app to help the Lab Zero team decide on where to
    go for lunch. A helpful-yet-garish little tool that we use every day!`,
    url: 'https://lunch.pink',
    image: lunch,
  },
  {
    id: 'bim-360-plan',
    name: 'BIM 360 Plan',
    description: `This Lab Zero/Autodesk project involved setting up an Angular 1 app to work
    with the Gantt/Swimlane capabilities of ExtJS. Tricky stuff, great result!`,
    url: 'https://labzero.com/projects/autodesk-bim-360',
    image: bim360Plan,
  },
  {
    id: 'mbfc-icon',
    name: 'MBFC Icon',
    description: (
      <span>
        I created a scraper and a browser extension
        for <a href="https://mediabiasfactcheck.com/" rel="noopener noreferrer" target="_blank">
          Media Bias Fact Check
        </a>, so you can easily see if what you’re reading is complete garbage!
      </span>
    ),
    url: 'http://jeffreyatw.com/blog/2016/11/check-news-bias-with-a-simple-browser-icon/',
    image: mbfcIcon,
  },
  {
    id: 'jeffrey-and-anna',
    name: 'Jeffrey and Anna',
    description: `I made this super scrolling website originally for guests to RSVP to our
    wedding, but now it's become somewhat of a home base for our growing family.`,
    url: 'http://jeffreyandanna.us/',
    image: jeffreyAndAnna,
  },
]

export default function Showcase() {
  const [currentItem, setCurrentItem] = useState(0);

const goToItem = useCallback((itemId: string) => (event: MouseEvent) => {
  event.preventDefault();
  document.querySelector(`.Showcase__target--${itemId}`)?.scrollIntoView({ behavior: "smooth", inline: "start" });
}, []);

const doWaypoints = useCallback(async () => {
  await import('waypoints/lib/noframework.waypoints.js');

  const context = document.querySelector(`.Showcase__list`);
  items.forEach((item, i) => {
    const element = document.querySelector(`.Showcase__item--${item.id}`);

    new (window as any).Waypoint({
      context,
      element,
      handler: (direction: string) => {
        if (direction === 'right') {
          setCurrentItem(i);
        }
      },
      horizontal: true,
      offset: 'right-in-view'
    });

    new (window as any).Waypoint({
      context,
      element,
      handler: (direction: string) => {
        if (direction === 'left') {
          setCurrentItem(i);
        }
      },
      horizontal: true
    });
  });
}, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      doWaypoints();
  }
  }, [doWaypoints]);


    return (
      <div className="Showcase">
        <ul className="Showcase__list">
          {items.map((item, i) => (
            <li className={`Showcase__item Showcase__item--${item.id}`} id={item.id} key={item.id}>
              <div className={`Showcase__target Showcase__target--${item.id}`} />
              <div className="Showcase__text">
                <h2 className="Showcase__heading"><a href={item.url} rel="noopener noreferrer" target="_blank">{item.name}</a></h2>
                <p className="Showcase__paragraph">
                  <span>
                    {item.description}
                  </span>
                </p>
              </div>
              <a className="Showcase__image" href={item.url} rel="noopener noreferrer" target="_blank"><Image src={item.image} alt={item.name} /></a>
            </li>
          ))}
        </ul>
        {items[currentItem - 1] && <a href={`#${items[currentItem - 1].id}`} onClick={goToItem(items[currentItem - 1].id)}>
          <Image className="Showcase__prev" alt="Previous project" src={arrowLeft} />
        </a>}
        {items[currentItem + 1] && <a href={`#${items[currentItem + 1].id}`} onClick={goToItem(items[currentItem + 1].id)}>
          <Image className="Showcase__next" alt="Next project" src={arrowRight} />
        </a>}
      </div>
    );
  }
