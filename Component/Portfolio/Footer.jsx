const Footer = () => {
  const date = new Date();

  let style = {
    background: "rgba(188,188,188)",
    padding: "1rem 0",
    textAlign: "center",
    height: "max-content",
    fontFamily: '"Inter", sans-serif',
    fontSize: "1.5rem",
  };

  return <div style={style}>All Right Reserved @{date.getFullYear()}.</div>;
};

export default Footer;
