import { footerLinksData } from "@/data";
import { logo } from "@/utils/images";
import { ReactElement } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { Link, LinkProps } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" width={60} />
            <p className="navbar-brand-text">
              find<span className="text-orange">Recipe.</span>
            </p>
          </Link>
        </div>
        <div className="footer-links">
          {footerLinksData?.map((link, index) => (
            <Link key={index}>{link.linkName}</Link>
          ))}
        </div>

        <div className="footer-bottom">
          <SocialLink to="/" icon={<AiFillFacebook color="#FFF" />} />
          <SocialLink to="/" icon={<AiOutlineTwitter color="#FFF" />} />
          <SocialLink to="/" icon={<AiFillInstagram color="#FFF" />} />
          <SocialLink to="/" icon={<AiFillYoutube color="#FFF" />} />
          <SocialLink to="/" icon={<BsPinterest color="#FFF" />} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const SocialLink = ({ to, icon }: LinkProps & { icon: ReactElement }) => (
  <Link to={to} className="social-link">
    {icon}
  </Link>
);
