const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/Demonking14"> <img src="/assets/github.svg" alt="github" className="w-1/2 translate-x-3  h-1/2" /></a>
         
        </div>
        <div className="social-icon">
          <a href="https://x.com/Adarshkumar1408">
            <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 translate-x-3 h-1/2" />

          </a>
          
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/adarsh-kumar-jha-10509327b/">
            <img src="/assets/linkedin.svg" alt="instagram" className="w-1/2 translate-x-3 h-1/2 " />

          </a>
          
        </div>
      </div>

      <p className="text-white-500">© 2025 Adarsh kumar Jha. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
