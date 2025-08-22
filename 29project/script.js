         const accessKey = "n9r4bLp0iXtRAjhDTvV0h3J7mbPb6-RFWvch_Hwbr7I";

         const searchfrom = document.getElementById("search-form");
         const searchbox = document.getElementById("search-box");
         const searchresult = document.getElementById("search-result");
         const showbtn = document.getElementById("showbtn");


         let keyword = "";
         let page = 1;

          async function searchImages(){
              keyword = searchbox.value;
              const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

              const response = await fetch(url);
              const data = await response.json();



              if(page === 1){
                searchresult.innerHTML = "";
              } 

                const results = data.results;

                results.map((result)=>{
                const image  = document.createElement("img");
                image.src = result.urls.small;

                const imagelink = document.createElement("a");
                imagelink.href = result.links.html;
                imagelink.target = "_blank";

                imagelink.appendChild(image);
                searchresult.appendChild(imagelink);
              })
              showbtn.style.display = "block";

          }

          searchfrom.addEventListener("submit" , (e) =>{
            e.preventDefault();
            page = 1;
            searchImages();

          })

          showbtn.addEventListener("click" , () =>{
             page++;
             searchImages();
          })
