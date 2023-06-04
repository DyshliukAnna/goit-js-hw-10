import scss from './sass/index.scss';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const refs = {
  select: document.querySelector('#single'),
  option: document.querySelector('.option-js'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

refs.select.addEventListener('change', onSelectChange);

fetchBreeds()
  .then(breeds => {
    renderCard(breeds);
    refs.select.classList.remove('visually-hidden');
  })
  .catch(error => {
    refs.error.classList.remove('visually-hidden');
    refs.select.classList.add('visually-hidden');
    Notify.failure('Oops! Something went wrong! Try reloading the page!');
  })
  .finally(() => refs.loader.classList.add('visually-hidden'));

function renderCard(breeds) {
  refs.select.innerHTML = breeds
    .map(({ id, name }) => {
      return `<option value="${id}" class="option-js">${name}</option>`;
    })
    .join('');
  new SlimSelect({
    select: '#single',
  });
}

function renderInfo(breeds) {
  refs.catInfo.innerHTML = breeds
    .map(({ url, breeds }) => {
      return `<img src="${url}" width='350'><div class="wrapper"><h2 class="title">${breeds[0].name}</h2><p class="description">${breeds[0].description}</p>
     <span class = "accent">Temperament:</span>  <p> ${breeds[0].temperament}</p></div>`;
    })
    .join('');
}

function onSelectChange(e) {
  const breedId = e.target.value;
  refs.loader.classList.remove('visually-hidden');
  refs.catInfo.innerHTML = '';

  fetchCatByBreed(breedId)
    .then(breeds => {
      renderInfo(breeds);
      refs.catInfo.classList.remove('visually-hidden');
    })
    .catch(error => {
      refs.error.classList.remove('visually-hidden');
    })
    .finally(() => refs.loader.classList.add('visually-hidden'));
}
