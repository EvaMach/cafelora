import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrderItem from '../components/OrderItem';
import Order from '../components/Order';

const response = await fetch('http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image');
const { data } = await response.json();
console.log(data);

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <Header showMenu={false} />
      <main className="order">
        <div className="order__content container">
          <h1>Vaše objedávnka</h1>
          {data.length === 0 ? (
            <p className="empty-order empty-order--hide">Zatím nemáte nic objednáno</p>
          ) : (
            <div className="order__items">
              <Order items={data} />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  </div>
);
