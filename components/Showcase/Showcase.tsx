import React, { MouseEvent, useCallback, useEffect, useState } from 'react';
import beatsMusic from './beats-music.webp';
import bim360Plan from './bim-360-plan.webp';
import jeffreyAndAnna from './jeffrey-and-anna.webp';
import lunch from './lunch.webp';
import mbfcIcon from './mbfc-icon.webp';
import stockpile from './stockpile.webp';
import arrowLeft from '@/public/images/svg/arrow-left.svg';
import arrowRight from '@/public/images/svg/arrow-right.svg';
import Image from 'next/image';

const items = [
  {
    id: 'beats-music',
    name: 'Beats Music Website',
    description: `Lab Zero worked with Beats to quickly release the marketing site for their
    short-lived streaming service. I wrote the majority of the HTML/CSS!`,
    url: 'https://labzero.com/projects/beats-music',
    image: beatsMusic,
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
    id: 'jeffrey-and-anna',
    name: 'Jeffrey and Anna',
    description: `I made this super scrolling website originally for guests to RSVP to our
    wedding, but now it's become somewhat of a home base for our growing family.`,
    url: 'http://jeffreyandanna.us/',
    image: jeffreyAndAnna,
  },
  {
    id: 'stockpile',
    name: 'Stockpile',
    description: `Stockpile brought Lab Zero on-board to help with a refresh of their onboarding
    and account management flow. Fun flexbox shenanigans at all screen dimensions.`,
    url: 'https://labzero.com/projects/stockpile',
    image: stockpile,
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
