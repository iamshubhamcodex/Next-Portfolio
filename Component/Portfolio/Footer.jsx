const Footer = () => {
  let style = {
    background: "rgba(188,188,188)",
    padding: "1rem 0",
    textAlign: "center",
    height: "max-content",
    fontFamily: '"Inter", sans-serif',
    fontSize: "1.5rem",
  };

  return <p style={style}>All Right Reserved @{new Date().getFullYear()}.</p>;
};

export default Footer;
