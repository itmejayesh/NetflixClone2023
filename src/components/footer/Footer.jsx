import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="">
          <div style={{ marginBottom: 15 }}>
            {" "}
            Questions? Call 000-800-919-1694
          </div>
          <div className="menuContainer">
            <ul className="menuItems">
              <li className="menuItem">FAQ</li>
              <li className="menuItem">Investor Relations</li>
              <li className="menuItem">Privacy</li>
              <li className="menuItem">Speed Test</li>
            </ul>
            <ul className="menuItems">
              <li className="menuItem">Help Centre</li>
              <li className="menuItem">Investor Relations</li>
              <li className="menuItem">Terms of Use</li>
              <li className="menuItem">Corporate Information</li>
            </ul>
            <ul className="menuItems">
              <li className="menuItem">Account</li>
              <li className="menuItem">Jobs</li>
              <li className="menuItem">Privacy</li>
              <li className="menuItem">Contact Us</li>
            </ul>
          </div>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
