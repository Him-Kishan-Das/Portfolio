import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} Him Kishan Das · Built with React + Framer Motion
      </div>
    </footer>
  );
}