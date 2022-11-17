import React, { useCallback, useState } from "react";
import Backgrounds from "../Backgrounds/Backgrounds";
import envelopeSquare from "@/public/images/svg/envelope-square.svg";
import facebookOfficial from "@/public/images/svg/facebook-official.svg";
import github from "@/public/images/svg/github.svg";
import twitch from "@/public/images/svg/twitch.svg";
import twitter from "@/public/images/svg/twitter.svg";
import wordpress from "@/public/images/svg/wordpress.svg";
import ellipsisV from "@/public/images/svg/ellipsis-v.svg";
import Image from "next/image";
import { links } from "@/constants";

export default function MoreMenu({ currentSection }: { currentSection: number }) {
  const [expanded, setExpanded] = useState(false);

  const toggle = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

    return (
      <div className="MoreMenu">
        <button
          className="MoreMenu__toggler"
          onClick={toggle}
          aria-haspopup="true"
          aria-controls="MoreMenu__dropdown"
        >
          <Image src={ellipsisV} alt="More..." width={32} height={32} />
        </button>
        <div
          id="MoreMenu__dropdown"
          className={`MoreMenu__dropdown ${
            expanded ? "MoreMenu__dropdown--expanded" : ""
          }`}
          aria-hidden={!expanded}
          aria-label="submenu"
        >
          <div className="MoreMenu__backgrounds">
            <Backgrounds currentSection={currentSection} />
          </div>
          <ul className="MoreMenu__list">
            {links.map(link => <li className="MoreMenu__item MoreMenu__item--mobile" key={link.name}>
              <a href={link.url}>
                <Image src={link.icon} alt={link.name} title={link.name} width={28} height={28} />
              </a>
            </li>)}
            <li>
              <h2 className="MoreMenu__heading">Previous Site Versions</h2>
              <ol className="MoreMenu__versions">
                <li>
                  <a href="/static/v13/">13</a> (2010)
                </li>
                <li>
                  <a href="/static/v12/">12</a> (2007)
                </li>
                <li>
                  <a href="/static/v11/">11</a> (2005)
                </li>
                <li>
                  <a href="http://www.livejournal.com/customview.cgi?styleid=565270&amp;user=jeffreyatw">
                    10
                  </a>{" "}
                  (2005)
                </li>
                <li>
                  <a href="http://www.livejournal.com/customview.cgi?styleid=497465&amp;user=jeffreyatw">
                    9
                  </a>{" "}
                  (2004)
                </li>
                <li>
                  <a href="http://www.livejournal.com/customview.cgi?styleid=481429&amp;user=jeffreyatw">
                    8
                  </a>{" "}
                  (2004)
                </li>
                <li>
                  <a href="http://www.livejournal.com/customview.cgi?styleid=419413&amp;user=jeffreyatw">
                    7
                  </a>{" "}
                  (2004)
                </li>
                <li>
                  <a href="/static/index_v6.shtml">6</a> (2003)
                </li>
                <li>
                  <a href="/static/index_v5.shtml">5</a> (2005)
                </li>
                <li>
                  <a href="/static/index_v4.shtml">4</a> (2002)
                </li>
                <li>
                  <a href="/static/index_v3.shtml">3</a> (2002)
                </li>
                <li>
                  <a href="/static/index_v2.shtml">2</a> (2002)
                </li>
                <li>
                  <a href="http://sentra.tripod.com">1</a> (2001)
                </li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
    );
        }
