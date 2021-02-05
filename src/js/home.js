import mainImg from '../images/main.jpg';
const Home = () => {
  const content = document.querySelector('#content');
  const img = new Image();
  img.className = 'head-img';
  img.src = mainImg;
  const headline = document.createElement('h1');
  headline.innerHTML = 'Vegan Resturant';
  const p = document.createElement('p');
  p.innerHTML = 'Welcome to Neko Vegan Resturant!';
  content.appendChild(img);
  content.appendChild(headline);
  content.appendChild(p);
};

export default Home;
