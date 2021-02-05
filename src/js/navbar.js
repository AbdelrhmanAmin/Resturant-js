const navlist = ['Home', 'Menu', 'Contact'];
const Navbar = () => {
  const content = document.querySelector('#content');
  const nav = document.createElement('nav');
  nav.className = 'navbar  bg-dark';
  const div_container = document.createElement('div');
  div_container.className = 'container-fluid';
  const ul_nav = document.createElement('ul');
  ul_nav.className =
    'nav navbar-nav flex-row d-flex justify-content-around w-100';
  navlist.map((tab) => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#';
    link.className = 'btn btn-light';
    link.id = tab.toLocaleLowerCase();
    link.innerHTML = tab;
    li.appendChild(link);
    ul_nav.appendChild(li);
    return true;
  });

  div_container.appendChild(ul_nav);
  nav.appendChild(div_container);
  content.appendChild(nav);
};

export default Navbar;
