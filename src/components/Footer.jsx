import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-night text-white sm:flex-row flex-col flex items-start sm:items-center justify-around py-5 ">
      <div className="footer-sub-title flex flex-col sm:items-center sm:text-center text-left py-5 w-full sm:w-1/4">
        <ul>
          <h1 className="text-lg font-bold sm:text-3xl">Easy To Learning</h1>
          <p className="break-words">
            “For the things we have to learn before we can do them, we learn by
            doing them.” ― Aristotle
          </p>
        </ul>
      </div>

      <div className="footer-sub-title flex flex-col items-start sm:items-center sm:text-center py-5">
        <ul className="text-left">
          <h1 className="text-lg font-bold sm:text-3xl">Explore</h1>
          <Link to="/">
            <li className="text-lg">Home</li>
          </Link>
          <Link to="/course">
            <li className="text-lg">Courses</li>
          </Link>
          <li className="text-lg">Speaking Practice</li>
          <Link to="/dictionary">
            <li className="text-lg">Dictionary</li>
          </Link>
          <Link to="/about">
            <li className="text-lg">About Me</li>
          </Link>
          <li className="text-lg">Contact Us</li>
        </ul>
      </div>

      <div className="footer-sub-title flex flex-col items-center text-center py-5">
        <ul className="text-left">
          <h1 className="text-lg font-bold sm:text-3xl">Contact Info</h1>
          <li className="py-1 text-lg">Bogor, Indonesia 00000</li>
          <li className="py-1 text-lg">Example@Naver.Com</li>
          <li className="py-1 text-lg">+628-000-000-0000</li>
        </ul>
      </div>
      <div className="footer-sub-title flex flex-col items-center text-center py-5">
        <ul className="text-left">
          <h1 className="text-lg font-bold sm:text-3xl">Follow</h1>
          <li className="py-1 text-lg">Twitter</li>
          <li className="py-1 text-lg">Instagram</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
