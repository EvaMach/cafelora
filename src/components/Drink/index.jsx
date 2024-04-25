import Layer from '../Layer';
import './style.css';

const Drink = ({ id, name, ordered, image, layers }) => {
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={`http://localhost:4000${image}`} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          {layers.map((layer) => (
            <Layer key={layer.label} label={layer.label} color={layer.color} />
          ))}
        </div>
      </div>
      <form data-id={id} className="drink__controls">
        <input type="hidden" className="order-id" value="0" />
        <button className={ordered ? " order-btn order-btn--ordered" : "order-btn"}>
          {ordered ? 'Zrušit' : 'Objednat'}
        </button>
      </form>
    </div>
  );
};

export default Drink;
