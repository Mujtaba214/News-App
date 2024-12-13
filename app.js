const card = cardDiv;
const inputfield = input;
let search = () => {
  const newsapp = `https://newsapi.org/v2/everything?q=${inputfield.value}&from=2024-11-13&sortBy=publishedAt&apiKey=95664bea59774c849c60701e82a9997a`;
  fetch(newsapp)
    .then((res) => res.json())
    .then((data) => {
      data.articles.map((e, i) => {
        card.innerHTML += `
       <div class="card" style="width: 18rem;">
            <img src="${e.urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${e.title}</h5>
                <p class="card-text">${e.description}</p>
            </div>
        </div>
        `;
      });
    })
      .catch(() => {
          document.write("Unable to fetch");
    });
};

// const card = cardDiv;
// const inputfield = input;

// let search = () => {
//     const newsapp = `https://newsapi.org/v2/everything?q=${inputfield.value}&from=2024-11-07&sortBy=publishedAt&apiKey=56299e04bd24481ebb30b9543f4a37ec`;

//     fetch(newsapp)
//         .then((res) => res.json())
//         .then((data) => {
//             // Clear previous results
//             card.innerHTML = "";

//             // Generate the cards for each article
//             data.articles.forEach((e,i) => {
//                 const articleCard = `
//                     <div class="card" style="width: 18rem;">
//                         <img src="${e.urlToImage}" class="card-img-top" alt="Image">
//                         <div class="card-body">
//                             <h5 class="card-title">${e.title}</h5>
//                             <p class="card-text">${e.description}</p>
//                             <a href="${e.url}" class="btn btn-primary" target="_blank">Read More</a>
//                         </div>
//                     </div>
//                 `;
//                 card.innerHTML += articleCard;
//             });
//         })
//         .catch((error) => console.error(error));
// };
