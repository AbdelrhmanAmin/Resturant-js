const navlist = ['Home', 'Menu', 'Contact'];
const Navbar = () => {
  const content = document.querySelector('#content');
  const nav = document.createElement('nav');
  nav.className = 'navbar  bg-dark';
  const divContainer = document.createElement('div');
  divContainer.className = 'container-fluid';
  const ulNav = document.createElement('ul');
  ulNav.className = 'nav navbar-nav flex-row d-flex justify-content-around w-100';
  navlist.map((tab) => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#';
    link.className = 'btn btn-light';
    link.id = tab.toLocaleLowerCase();
    link.innerHTML = tab;
    li.appendChild(link);
    ulNav.appendChild(li);
    return true;
  });

  divContainer.appendChild(ulNav);
  nav.appendChild(divContainer);
  content.appendChild(nav);
};

export default Navbar;
