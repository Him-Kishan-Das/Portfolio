import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} Him Kishan Das Portfolio, <span>himkishandas456@gmail.com</span>
      </div>
    </footer>
  );
}