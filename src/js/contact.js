import Img from '../images/thanks.gif';

const Contact = () => {
  const content = document.querySelector('#content');
  const img = new Image();
  img.className = 'head-img';
  img.src = Img;
  const headline = document.createElement('h1');
  headline.innerHTML = 'How To Contact Neko Master';
  const div = document.createElement('div');
  div.className = 'd-flex flex-row justify-content-around';
  const a1 = document.createElement('a');
  a1.href = 'https://www.facebook.com/AliZien1999';
  const fb = document.createElement('i');
  fb.className = 'fab fa-facebook-square fa-4x';
  a1.appendChild(fb);
  const a2 = document.createElement('a');
  a2.href = 'https://www.linkedin.com/in/abdo-amin-ab786a1b0/';
  const linkedin = document.createElement('i');
  linkedin.className = 'fab fa-linkedin fa-4x';
  a2.appendChild(linkedin);
  const a3 = document.createElement('a');
  a3.href = 'https://github.com/AbdelrhmanAmin';
  const github = document.createElement('i');
  a3.appendChild(github);
  github.className = 'fab fa-github-square fa-4x';
  div.appendChild(a1);
  div.appendChild(a2);
  div.appendChild(a3);
  content.appendChild(img);
  content.appendChild(headline);
  content.appendChild(div);
};

export default Contact;
