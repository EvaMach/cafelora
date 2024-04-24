import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Menu from '../components/Menu';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

const response = await fetch('http://localhost:4000/api/drinks');
const {data: drinks} = await response.json();

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header/>
      <main>
        <Banner/>
        <Menu drinks={drinks} />
        <Gallery />
        <Contact />  
      </main>
    <Footer/>
  </div>
);

const rolloutNav = document.querySelector('.rollout-nav');
rolloutNav.addEventListener('click', () =>{
  rolloutNav.classList.toggle('nav-closed');
})

document.querySelector('.nav-btn').addEventListener('click', () => {
  console.log()
  rolloutNav.classList.toggle('nav-closed');
});
