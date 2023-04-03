import "./FooterStyles.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div>
            <h1>Carcass</h1>
            <p>An english project (For the nerds: Created with React JS using React Router DOM, Vite Build Tool, Vercel, and DALL-E 2 AI image generation)</p>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/damodar-kamani-a7204123a/" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/damodar_kamanii/" target="_blank">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://github.com/dudeunoob" target="_blank">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://twitter.com/DudeUnoob69/" target="_blank">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h4>Project</h4>
            {/* <a href="">Changelog</a>
            <a href="">Status</a>
            <a href="">License</a>
            <a href="">All Versions</a> */}
            <a>Created by <a href="https://github.com/dudeunoob" target="_blank"><b>@Dom</b></a></a>
          </div>
          <div>
            <h4>Community</h4>
            {/* <a href="https://github.com/dudeunoob/" target="_blank">
           
              <i className="fa fa-github" style={{fontSize:"36px"}}></i>
              </a> */}
            <a href="">Issues</a>
            <a href="https://github.com/DudeUnoob/Carcass" target="_blank">Source Code</a>
            <a href="">Twitter</a>
          </div>
          <div>
            <h4>Help</h4>
            <a href="/contact">Support</a>
            <a href="">Troubleshooting</a>
            <a href="/contact">Contact Us</a>
          </div>
          <div>
            <h4>Others</h4>
            <a href="">Terms of Service</a>
            <a href="">Privacy Policy</a>
            <a href="">License</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
