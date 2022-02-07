import React from "react";

function Footer() {
  return (
    <div className=" sm:flex-row flex-col flex items-center justify-around py-24 ">
      <div className="footer-sub-title flex flex-col items-center text-center py-10">
        <ul>
          <h1 className="text-lg font-bold sm:text-3xl">Social Media</h1>
          <li className="py-1 text-lg">Twitter</li>
          <li className="py-1 text-lg">Instagram</li>
        </ul>
      </div>
      <div className="footer-sub-title flex flex-col items-center text-center py-10">
        <ul>
          <h1 className="text-lg font-bold sm:text-3xl">Contact Info</h1>
          <li className="py-1 text-lg">Bogor, Indonesia 00000</li>
          <li className="py-1 text-lg">Example@Naver.Com</li>
          <li className="py-1 text-lg">+628-000-000-0000</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
