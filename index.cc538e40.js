const e={select:document.querySelector(".breed-select"),option:document.querySelector(".option-js"),loader:document.querySelector(".loader"),error:document.querySelector(".error"),catInfo:document.querySelector(".cat-info")};function t(t){e.select.innerHTML=t.map((({id:e,name:t})=>`<option value="${e}" class="option-js">${t}</option>`)).join("")}function n(t){e.catInfo.innerHTML=t.map((({url:e,breeds:t})=>`<img src="${e}" width='350' hight='auto'><div class="wrapper"><h2 class="title">${t[0].name}</h2><p class="description">${t[0].description}</p>\n      <p>Temperament:${t[0].temperament}</p></div>`)).join("")}fetch("https://api.thecatapi.com/v1/breeds").then((e=>e.json())).then(t).catch((e=>{console.log(e)})),e.select.addEventListener("change",(function(e){!function(e){fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_YQPtgQjxNvntrxfOyZ3N1MnSlZixBwThs5vJDplQB1hkUEVNvIS1L7Eq7M1b054J&breed_ids=${e}`).then((e=>e.json())).then(n).catch((e=>{console.log(e)}))}(e.target.value)}));
//# sourceMappingURL=index.cc538e40.js.map
