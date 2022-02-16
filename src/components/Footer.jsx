import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-night text-white sm:flex-row flex-col flex items-start sm:items-center justify-around py-3 my-12 rounded-b">
      <div className="footer-sub-title flex flex-col sm:items-center sm:text-center text-left py-5 w-full sm:w-1/4">
        <ul>
          <h1 className="text-base font-bold sm:text-2xl">Easy To Learning</h1>
          <p className="break-words">
            “For the things we have to learn before we can do them, we learn by
            doing them.” ― Aristotle
          </p>
        </ul>
      </div>

      <div className="footer-sub-title flex flex-col items-start sm:items-center sm:text-center py-5">
        <ul className="text-left">
          <h1 className="text-base font-bold sm:text-2xl mb-3">Explore</h1>
          <Link to="/">
            <li className="text-base hover:text-sky-600">Home</li>
          </Link>
          <Link to="/course">
            <li className="text-base hover:text-sky-600">Courses</li>
          </Link>
          <Link to="/speakingpractice">
          <li className="text-base hover:text-sky-600">Speaking Practice</li>
          </Link>
          <Link to="/dictionary">
            <li className="text-base hover:text-sky-600">Dictionary</li>
          </Link>
          <Link to="/about">
            <li className="text-base hover:text-sky-600">About Me</li>
          </Link>
        </ul>
      </div>

      <div className="footer-sub-title flex flex-col items-center text-center py-5">
        <ul className="text-left">
          <h1 className="text-base font-bold sm:text-2xl">Contact Info</h1>
          <li className="py-1 text-base">Bogor, Indonesia 16917</li>
          <li className="py-1 text-base">dindayuniardp14@naver.com</li>
          <li className="py-1 text-base">+621293846181</li>
        </ul>
      </div>
      <div className="footer-sub-title flex flex-col items-center text-center py-5">
        <ul className="text-left">
          <h1 className="text-base font-bold sm:text-2xl">Follow</h1>
          <a href="https://twitter.com/dinda_yuniar"><li className="py-1 text-base hover:text-sky-600">Twitter</li></a>
          <a href="https://www.instagram.com/dinda_yuniar/"><li className="py-1 text-base hover:text-sky-600">Instagram</li></a>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
