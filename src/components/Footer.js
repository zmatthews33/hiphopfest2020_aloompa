/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://zachmatthews.me"
                  target="_blank"
                >
                  Zach Matthews
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/zmatthews33"
                  target="_blank"
                >
                  Github
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
