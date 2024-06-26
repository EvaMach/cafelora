import Drink from '../Drink';
import './style.css';

const Menu = ({ drinks }) => {
  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div className="drinks-list">
          {drinks.map((drink) => (
            <Drink
              key={drink.id}
              id={drink.id}
              image={drink.image}
              layers={drink.layers}
              name={drink.name}
              ordered={drink.ordered} />
          ))}
        </div>

        <div className="order-detail">
          <a href="/order.html">Detail objednávky</a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
