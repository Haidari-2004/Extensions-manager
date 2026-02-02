//toggle active/inactive
const cards = document.querySelectorAll('.extension-card');
cards.forEach(card => {
    const removeBtn = card.querySelector('.remove');
    const toggle = card.querySelector('toggle');
});

cards .forEach(card=> {
    const toggle = card .querySelector('.toggle');
    toggle.addEventListener('click',() => {
        toggle.classList.toggle('active');
    });
});


//Btn remove
cards.forEach(card =>{
    const removeBtn = card.querySelector('.remove');

    removeBtn.addEventListener('click',() =>{ 
    card.remove();});
});


//Extention list filters
const filterButtons = document.querySelectorAll('.btn');
const card = document.querySelectorAll('.extension-card');

// toggle logic
cards.forEach(card => {
  const toggle = card.querySelector('.toggle');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
  });
});

// filter logic
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.dataset.filter;

    cards.forEach(card => {
      const isActive = card.querySelector('.toggle')
        .classList.contains('active');

      if (type === 'all') {
        card.style.display = '';
      }
      else if (type === 'active' && isActive) {
        card.style.display = '';
      }
      else if (type === 'inactive' && !isActive) {
        card.style.display = '';
      }
      else {
        card.style.display = 'none';
      }
    });
  });
});

const toggles = document.querySelectorAll('.toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
  });
});

// dark mood / light mood
const themeIcon = document.querySelector('.theme-icon')
themeIcon.addEventListener('click',() => {
  document.body.classList.toggle('dark');

themeIcon.src=document.body.classList.contains('dark')
? './assets/images/icon-sun.svg'
: './assets/images/icon-moon.svg';
});
