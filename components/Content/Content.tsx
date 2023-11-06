import React, { Dispatch, MouseEvent, SetStateAction, useCallback, useEffect } from "react";
import { sections } from "@/constants";
import Showcase from "@/components/Showcase";
import Backgrounds from "../Backgrounds";
import arrowDown from "@/public/images/svg/arrow-down.svg";
import Image from "next/image";

export default function Content({ currentSection, setSection }: { currentSection: number, setSection: Dispatch<SetStateAction<number>> }) {
  const doWaypoints = useCallback(async () => {
    await import('waypoints/lib/noframework.waypoints.js');

    sections.forEach((section, i) => {
      const element = document.querySelector(`.Content__section--${section}`);

      new (window as any).Waypoint({
        element,
        handler: (direction: string) => {
          if (direction === 'down') {
            setSection(i);
          }
        },
        offset: 100
      });

      new (window as any).Waypoint({
        element,
        handler: (direction: string) => {
          if (direction === 'up') {
            setSection(i);
          }
        },
        offset: -200
      });
    });
  }, [setSection]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      doWaypoints();
  }
  }, [doWaypoints]);

  const goToSection = useCallback((section: string) => (event: MouseEvent) => {
    event.preventDefault();
    document.querySelector(`.Content__section--${section}`)?.scrollIntoView({ behavior: "smooth" });
  }, []);
    
    return (
      <main className="Content">
        <div className="Content__backgrounds">
          <Backgrounds currentSection={currentSection} />
        </div>
        <div className="Content__sections">
          <section className="Content__section Content__section--intro">
            <h1>
              <span>Hi, I’m Jeffrey.</span>
            </h1>
            <div className="Content__text">
              <p>
                <span>
                  I’m a senior software engineer at <a href="https://labzero.com">Lab Zero</a>.
                  I enjoy taking the helm of development of web-based apps, particularly
                  on the front-end side of things. I’ve been making websites since 1994,
                  and I’ve always worked hard to stay on the cutting edge.
                </span>
              </p>
              <a href="#sites" onClick={goToSection('sites')}><Image className="Content__skipper" alt="Next section" src={arrowDown} width={48} height={48} /></a>
            </div>
          </section>
          <section className="Content__section Content__section--sites">
            <h1>
              <span>Sites? Apps? Sure, whatever!</span>
            </h1>
            <div className="Content__text">
              <p>
                <span>
                  From brochure-ware to enterprise forms-inside-forms solutions, I’ve done
                  it all. I’m equally fond of putting together marketing sites with their
                  design game on point, as I am building performant single-page apps comprising
                  thousands of components. If it’s web-based, I’m on it.
                </span>
              </p>
              <a href="#opinionated" onClick={goToSection('opinionated')}><Image className="Content__skipper" alt="Next section" src={arrowDown} width={48} height={48} /></a>
            </div>
          </section>
          <section className="Content__section Content__section--opinionated">
            <h1>
              <span>Opinionated, but not curmudgeonly.</span>
            </h1>
            <div className="Content__text">
              <p>
                <span>
                  I’m a big fan of anything that makes code more friendly to read and write.
                  Strict linting rules? Yes please. Descriptive naming and unit tests to
                  complement? But of course. That doesn’t mean there’s only one way of doing
                  things, or that I can’t operate in an environment one could call
                  &ldquo;sub-optimal&rdquo;. I’m all about doing good work, as correctly as
                  possible, without sacrificing velocity.
                </span>
              </p>
              <a href="#teaching" onClick={goToSection('teaching')}><Image className="Content__skipper" alt="Next section" src={arrowDown} width={48} height={48} /></a>
            </div>
          </section>
          <section className="Content__section Content__section--teaching">
            <h1>
              <span>Good at teaching.</span>
            </h1>
            <div className="Content__text">
              <p>
                <span>
                  You can’t make an impression if you can’t describe what you’re doing.
                  That’s why I care about imparting the things I’ve learned onto others.
                  For years, I taught a{' '}
                  <a href="https://www.noisebridge.net/wiki/Front-end_Web_Development">
                    free web development class at Noisebridge Hackerspace
                  </a>{' '}
                  trying to get a more diverse group of people into the web industry. In my
                  own work, I make sure that my clients and coworkers are on the same page,
                  whether it’s during a simple pull request, or a project sign-off.
                </span>
              </p>
              <a href="#showcase" onClick={goToSection('showcase')}><Image className="Content__skipper" alt="Next section" src={arrowDown} width={48} height={48} /></a>
            </div>
          </section>
          <section className="Content__section Content__section--showcase">
            <h1>I’ve made some things.</h1>
            <div className="Content__text">
              <p>
                <span>
                  Between dozens of clients and the occasional weekend of just messing
                  around, a bunch of projects out in the wild have my fingerprints all over
                  them. Here are a few worth checking out.
                </span>
              </p>
            </div>
          </section>
        </div>
        <Showcase />
      </main>
    );
}