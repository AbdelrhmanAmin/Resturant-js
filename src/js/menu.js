const Menu = () => {
  const content = document.querySelector('#content');
  const img = document.createElement('img');
  img.className = 'head-img';
  img.src =
    'https://149366112.v2.pressablecdn.com/wp-content/uploads/2019/08/h2slax_w-e1566485538962.jpeg';
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
    const li_head = document.createElement('h3');
    const li_img = document.createElement('img');
    li_img.className = 'img-styling';
    li_head.innerHTML = meal[0];
    li_img.src = meal[1];
    li.appendChild(li_head);
    li.appendChild(li_img);
    ul.appendChild(li);
  });
  content.appendChild(img);
  content.appendChild(headline);
  content.appendChild(ul);
};

export default Menu;
