
import envelopeSquare from "@/public/images/svg/envelope-square.svg";
import github from "@/public/images/svg/github.svg";
import twitch from "@/public/images/svg/twitch.svg";
import wordpress from "@/public/images/svg/wordpress.svg";

export const sections = [
  'intro',
  'sites',
  'opinionated',
  'teaching',
  'showcase'
];

export const links = [{
  name: "Twitch",
  icon: twitch,
  url: "https://twitch.tv/jeffreyatw",
}, {
  name: "GitHub",
  icon: github,
  url: "https://github.com/JeffreyATW",
}, {
  name: "Blog",
  icon: wordpress,
  url: "https://jeffreyatw.com/blog"
}, {
  name: "Email",
  icon: envelopeSquare,
  url: "mailto:jeffreyatw@gmail.com"
}]
