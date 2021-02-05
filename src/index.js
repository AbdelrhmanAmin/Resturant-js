import Home from './js/home';
import Menu from './js/menu';
import Navbar from './js/navbar';
import Contact from './js/contact';
import { setTab, getTab } from './js/tools';
const mountTab = () => {
  document.getElementById('content').innerHTML = '';
  Navbar();
  document.getElementById('home').addEventListener('click', () => {
    setTab(1);
    mountTab();
  });
  document.getElementById('menu').addEventListener('click', () => {
    setTab(2);
    mountTab();
  });
  document.getElementById('contact').addEventListener('click', () => {
    setTab(3);
    mountTab();
  });

  if (getTab() == 1) {
    Home();
  }
  if (getTab() == 2) {
    Menu();
  }
  if (getTab() == 3) {
    Contact();
  }
};
mountTab();
