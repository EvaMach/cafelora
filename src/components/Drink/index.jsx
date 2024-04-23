import Layer from '../Layer';
import './style.css';

const Drink = ({id, name, ordered, image, layers}) => {
  return (
    <div className="drink">
    <div className="drink__product">
      <div className="drink__cup">
        <img src={image} />
      </div>
      <div className="drink__info">
        <h3>{name}</h3>
        <Layer />
      </div>
    </div>
    <form className="drink__controls">
      <input type="hidden" className="order-id" value="0" />
      <button className="order-btn">
        Objednat
      </button>
    </form>
  </div>
  )
}

export default Drink