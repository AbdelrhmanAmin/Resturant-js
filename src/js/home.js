const Home = () => {
  const content = document.querySelector('#content');
  const img = document.createElement('img');
  img.className = 'head-img';
  img.src =
    'https://media-cdn.tripadvisor.com/media/photo-s/11/9e/75/70/sala-a-restaurant.jpg';
  const headline = document.createElement('h1');
  headline.innerHTML = 'Vegan Resturant';
  const p = document.createElement('p');
  p.innerHTML = 'Welcome to Neko Vegan Resturant!';
  content.appendChild(img);
  content.appendChild(headline);
  content.appendChild(p);
};

export default Home;
