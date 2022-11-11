import React from "react";
import Backgrounds from "@/components/Backgrounds/Backgrounds";
import MoreMenu from "@/components/MoreMenu/MoreMenu";
import envelopeSquare from "@/public/images/svg/envelope-square.svg";
import facebookOfficial from "@/public/images/svg/facebook-official.svg";
import github from "@/public/images/svg/github.svg";
import twitch from "@/public/images/svg/twitch.svg";
import twitter from "@/public/images/svg/twitter.svg";
import wordpress from "@/public/images/svg/wordpress.svg";
import Image from "next/image";

export default function Header({ currentSection }: { currentSection: number }) {
    return (
      <header className="Header">
        <div className="Header__backgrounds">
          <Backgrounds currentSection={currentSection} />
        </div>
        <h1 className="Header__heading">JeffreyATW</h1>
        <ul className="Header__links">
          <li className="Header__link Header__link--no-mobile">
            <a href="https://twitter.com/JeffreyATW">
              <Image src={twitter} alt="Twitter" width={32} height={32} />
            </a>
          </li>
          <li className="Header__link Header__link--no-mobile">
            <a href="https://www.facebook.com/jeffreyatw">
              <Image src={facebookOfficial} alt="Facebook" width={32} height={32} />
            </a>
          </li>
          <li className="Header__link Header__link--no-mobile">
            <a href="https://twitch.tv/jeffreyatw">
              <Image src={twitch} alt="Twitch" width={32} height={32} />
            </a>
          </li>
          <li className="Header__link Header__link--no-mobile">
            <a href="https://github.com/JeffreyATW">
              <Image src={github} alt="GitHub" width={32} height={32} />
            </a>
          </li>
          <li className="Header__link Header__link--no-mobile">
            <a href="http://jeffreyatw.com/blog">
              <Image src={wordpress} alt="Blog" width={32} height={32} />
            </a>
          </li>
          <li className="Header__link Header__link--no-mobile">
            <a href="mailto:jeffreyatw@gmail.com">
              <Image src={envelopeSquare} alt="Email" width={32} height={32} />
            </a>
          </li>
          <li className="Header__link">
            <MoreMenu currentSection={currentSection} />
          </li>
        </ul>
      </header>
    );
}
