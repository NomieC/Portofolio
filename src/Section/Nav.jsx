import '../Styles/nav.scss';

export const Nav = () => {
  return (
    <div className="navbar">
      <nav className='nav'>
        <ul className="nav-ul">
            <a href="#">Home</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;