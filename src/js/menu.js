import Couscous from '../images/couscous.jpg';
import Soup from '../images/soup.jpg';
import Flafael from '../images/flafael.jpg';

const Menu = () => {
  const content = document.querySelector('#content');
  const img = document.createElement('img');
  img.className = 'head-img';
  img.src = 'https://149366112.v2.pressablecdn.com/wp-content/uploads/2019/08/h2slax_w-e1566485538962.jpeg';
  const headline = document.createElement('h1');
  headline.innerHTML = 'Neko Menu';
  const ul = document.createElement('ul');
  ul.className = 'p-0 m-0';
  const menu = [
    [
      'Couscous',
      Couscous,
    ],
    [
      'Lentil Soup',
      Soup,
    ],
    [
      'Cauliflower Flafael',
      Flafael,
    ],
  ];
  menu.forEach((meal) => {
    const li = document.createElement('li');
    const liHead = document.createElement('h3');
    const liImg = document.createElement('img');
    liImg.className = 'img-styling';
    [liHead.innerHTML, liImg.src] = [meal[0], meal[1]];
    li.appendChild(liHead);
    li.appendChild(liImg);
    ul.appendChild(li);
  });
  content.appendChild(img);
  content.appendChild(headline);
  content.appendChild(ul);
};

export default Menu;
