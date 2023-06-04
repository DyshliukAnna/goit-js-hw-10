// const BASE_URL = 'https://api.thecatapi.com/v1';
// const API_KEY =
//   'live_Yev63kKIKQlvuwfV91tmMhA4RcWdQRKBtpQEc40LBA3Gqtc0uo9ZdRzJSAOtGlda';

// export const fetchBreeds = () => {
//   return fetch(`https://api.thecatapi.com/v1/breeds`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .catch(error => console.log(error));
// };

// export const fetchCatByBreed = breedId => {
//   return fetch(
//     `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
//   )
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .catch(error => console.log(error));
// };
