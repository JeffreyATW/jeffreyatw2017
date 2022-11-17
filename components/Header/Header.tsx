import React from "react";
import Backgrounds from "@/components/Backgrounds/Backgrounds";
import MoreMenu from "@/components/MoreMenu/MoreMenu";
import Image from "next/image";
import { links } from "@/constants";

export default function Header({ currentSection }: { currentSection: number }) {
    return (
      <header className="Header">
        <div className="Header__backgrounds">
          <Backgrounds currentSection={currentSection} />
        </div>
        <h1 className="Header__heading">JeffreyATW</h1>
        <ul className="Header__links">
          {links.map(link => <li className="Header__link Header__link--no-mobile" key={link.name}>
            <a href={link.url}>
              <Image src={link.icon} alt={link.name} title={link.name} width={32} height={32} />
            </a>
          </li>)}
          <li className="Header__link">
            <MoreMenu currentSection={currentSection} />
          </li>
        </ul>
      </header>
    );
}
