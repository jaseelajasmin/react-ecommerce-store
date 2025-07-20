import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Navigation Links */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Quick Links</h4>
          <ul style={styles.list}>
            <li><a href="/shop" style={styles.link}>Shop</a></li>
            <li><a href="/about" style={styles.link}>About Us</a></li>
            <li><a href="/contact" style={styles.link}>Contact</a></li>
            <li><a href="/faq" style={styles.link}>FAQs</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Contact Us</h4>
          <p style={styles.text}>Email: support@ecommerce.com</p>
          <p style={styles.text}>Phone: +123 456 7890</p>
          <p style={styles.text}>Address: 123 E-Commerce St, City, Country</p>
        </div>

        {/* Social Media Links */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Follow Us</h4>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com" style={styles.icon}>Facebook</a>
            <a href="https://twitter.com" style={styles.icon}>Twitter</a>
            <a href="https://instagram.com" style={styles.icon}>Instagram</a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Subscribe to Our Newsletter</h4>
          <form style={styles.form}>
            <input
              type="email"
              placeholder="Enter your email"
              style={styles.input}
            />
            <button type="submit" style={styles.button}>Subscribe</button>
          </form>
        </div>
      </div>
      <div style={styles.copyright}>
        <p>&copy; 2025 E-Commerce App. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    
    backgroundColor: ' rgb(1, 1, 43)',
    color: "white",
    padding: "20px 0",
    textAlign: "center",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  section: {
    margin: "10px",
    flex: "1",
    minWidth: "200px",
  },
  heading: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  link: {
    color: "white",
    textDecoration: "none",
    display: "block",
    margin: "5px 0",
  },
  text: {
    margin: "5px 0",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  icon: {
    color: "white",
    textDecoration: "none",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    flex: "1",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#ff6f61",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  copyright: {
    marginTop: "20px",
    fontSize: "14px",
  },
};

export default Footer;
