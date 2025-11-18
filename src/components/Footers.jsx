import React from 'react'
import {footerLinks} from "../constants/index.js";

const Footers = () => {
  return (
    <footer>
      <div className="info">
        <p>
          More ways to shop: Find an Apple Store or other retailer near you. Or call 0812 9077 7722.
          <img src="/logo.svg" alt="Apple Logo"/>
        </p>
      </div>

      <hr />

      <div className="links">
        <p>Copyright © 2025 Apple Inc. All rights reserved.</p>

        <ul>
          {footerLinks.map(({label,link}) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
            ))}
        </ul>
      </div>
    </footer>
  )

}

export default Footers
