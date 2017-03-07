import React from 'react';
import smoothScroll from 'smoothscroll';
import beatsMusic from './beats-music.jpg';
import bim360Plan from './bim-360-plan.jpg';
import jeffreyAndAnna from './jeffrey-and-anna.jpg';
import lunch from './lunch.jpg';
import mbfcIcon from './mbfc-icon.jpg';
import stockpile from './stockpile.jpg';
import longArrowRight from '../../images/svg/long-arrow-right.svg';
import './Showcase.scss';

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
    url: 'https://lunch.labzero.com/',
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
        for <a href="https://mediabiasfactcheck.com/" target="_blank">
          Media Bias Fact Check
        </a>, so you can easily see if what you're reading is complete garbage!
      </span>
    ),
    url: 'http://jeffreyatw.com/blog/2016/11/check-news-bias-with-a-simple-browser-icon/',
    image: mbfcIcon,
  },
]

const goToSection = section => (event) => {
  event.preventDefault();
  smoothScroll(document.querySelector(`.Showcase__target--${section}`), undefined, undefined, document.querySelector('.Showcase__list'), 'horizontal');
};

const Showcase = () => (
  <div className="Showcase">
    <ul className="Showcase__list">
      {items.map((item, i) => (
        <li className={`Showcase__item Showcase__item--${item.id}`} id={item.id} key={item.id}>
          <div className={`Showcase__target Showcase__target--${item.id}`} />
          <div className="Showcase__text">
            <h2 className="Showcase__heading"><a href={item.url} target="_blank">{item.name}</a></h2>
            <p className="Showcase__paragraph">
              {item.description}
              {(i < items.length - 1) && (
                <a href={`#${items[i + 1].id}`} onClick={goToSection(items[i + 1].id)}>
                  <img className="Showcase__skipper" alt="Next project" src={longArrowRight} />
                </a>
              )}
            </p>
          </div>
          <a className="Showcase__image" href={item.url} target="_blank"><img src={item.image} alt={item.name} /></a>
        </li>
      ))}
    </ul>
  </div>
);

export default Showcase;
