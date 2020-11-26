import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="d-flex flex-column border p-3 bg-light h-100" style={{width: '15vw'}}>
      <Link to="/id-card">1. Id Card</Link>
      <Link to="/greetings">2. Greetings</Link>
      <Link to="/random-number">3. Random</Link>
      <Link to="/box-color">4. Box Color</Link>
      <Link to="/credit-card">5. Credit Card</Link>
      <Link to="/rating">6. Rating</Link>
      <Link to="/drive-card">7. Drive Card</Link>
      <Link to="/likes">8. Like Button</Link>
      <Link to="/picture">9. Clickable Picture</Link>
      <Link to="/dice">10. Dice</Link>
      <Link to="/carousel">11. Carousel</Link>
      <Link to="/numbers-table">12. NumbersTable</Link>
      <Link to="/facebook">13. Facebook</Link>
      <Link to='/quiz'>14. Quiz</Link>
    </div>
  );
};

export default Menu;
