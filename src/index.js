import scss from './sass/index.scss';
const API_KEY =
  'live_YQPtgQjxNvntrxfOyZ3N1MnSlZixBwThs5vJDplQB1hkUEVNvIS1L7Eq7M1b054J';

const refs = {
  select: document.querySelector('.breed-select'),
  option: document.querySelector('.option-js'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};
// function fetchBreeds(breed) {
//   return fetch(`https://api.thecatapi.com/v1/breeds/`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// fetch('https://api.thecatapi.com/v1/breeds').then(response => {
//   return response.json();
// });

// refs.loader.classList.add('visually-hidden');
refs.select.classList.add('visually-hidden');
refs.catInfo.classList.add('visually-hidden');
fetchBreeds();

function fetchBreeds() {
  fetch('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      return response.json();
    })
    .then(breeds => {
      refs.loader.classList.add('visually-hidden');
      refs.select.classList.remove('visually-hidden');
      renderCard(breeds);
    })
    .catch(error => {
      refs.error.classList.remove('visually-hidden');
      refs.select.classList.add('visually-hidden');
      console.log(error);
    });
}

function renderCard(breeds) {
  refs.select.innerHTML = breeds
    .map(({ id, name }) => {
      return `<option value="${id}" class="option-js">${name}</option>`;
    })
    .join('');
  // refs.loader.classList.remove('visually-hidden');
}

function fetchCatByBreed(breedId) {
  fetch(
    `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  )
    .then(response => {
      // refs.loader.classList.remove('visually-hidden');
      return response.json();
    })
    .then(breeds => {
      renderInfo(breeds);
      refs.catInfo.classList.remove('visually-hidden');
      refs.loader.classList.add('visually-hidden');
    })
    .catch(error => {
      refs.error.classList.remove('visually-hidden');
      console.log(error);
    });
}

function renderInfo(breeds) {
  refs.catInfo.innerHTML = breeds
    .map(({ url, breeds }) => {
      return `<img src="${url}" width='350' hight='auto'><div class="wrapper"><h2 class="title">${breeds[0].name}</h2><p class="description">${breeds[0].description}</p>
      <p>Temperament:${breeds[0].temperament}</p></div>`;
    })
    .join('');
}

refs.select.addEventListener('change', onSelectChange);
function onSelectChange(e) {
  const breedId = e.target.value;
  refs.loader.classList.remove('visually-hidden');
  refs.catInfo.classList.add('visually-hidden');
  fetchCatByBreed(breedId);
}

// function renderCard(breeds) {
//   const markup = `<option value="${breeds.id}">${breeds.name}</option>`;
//   refs.select.innerHTML = markup;
// }
