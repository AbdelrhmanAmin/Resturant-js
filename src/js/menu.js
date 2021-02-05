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
      'https://theforkedspoon.com/wp-content/uploads/2020/01/How-to-Cook-Couscous-9.jpg',
    ],
    [
      'Lentil Soup',
      'https://frommybowl.com/wp-content/uploads/2020/04/Feel_Good_Red_Lentil_Soup_Vegan_GlutenFree_FromMyBowl-8-scaled.jpg',
    ],
    [
      'Cauliflower Flafael',
      'https://whatgreatgrandmaate.com/wp-content/uploads/2020/02/paleo-falafel-sq-scaled.jpg',
    ],
  ];
  menu.forEach((meal) => {
    const li = document.createElement('li');
    const liHead = document.createElement('h3');
    const liImg = document.createElement('img');
    liImg.className = 'img-styling';
    [liImg.src, liHead.innerHTML] = [meal[0], meal[1]];
    li.appendChild(liHead);
    li.appendChild(liImg);
    ul.appendChild(li);
  });
  content.appendChild(img);
  content.appendChild(headline);
  content.appendChild(ul);
};

export default Menu;
