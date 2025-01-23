import styles from './footer.module.css';

function Footer() {
  return (
    <footer>
      <h3>Contact us</h3>
      <div className={styles.footerLinks}>
        <div>
          <a href="">About us</a>
          <br />
          <a href="">Phone: +0123 456 789</a>
          <br />
          <a href="">Email: localhost@info.com</a>
          <br />
          <a href="">Address: 123 Jerald Street, Texas, US</a>
          <br />
        </div>
        <div>
          <a href="">FAQ</a>
          <br />
          <a href="">Account</a>
          <br />
          <a href="">Help Center</a>
          <br />
          <a href="">Terms of Use</a>
          <br />
        </div>
        <div>
          <a href="">Legal Notices</a>
          <br />
          <a href="">Privacy policy</a>
          <br />
          <a href="">Cookie Preferences</a>
          <br />
          <a href="">Corporate Information</a>
          <br />
        </div>
        <div>
          <a href="">Blogs</a>
          <br />
          <a href="">Events</a>
          <br />
          <a href="">Socials</a>
          <br />
          <a href="">Promotions</a>
          <br />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
