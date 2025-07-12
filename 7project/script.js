        const notescontainer = document.querySelector(".notes-container");
        const Createbtn = document.querySelector(".create-btn");
        let notes = document.querySelectorAll(".input-box");
       
        Createbtn.addEventListener("click", ()=> {
            let inputBox = document.createElement("p");
            let img = document.createElement("img");
            inputBox.className = "input-box";
            inputBox.setAttribute("contenteditable","true");
            img.src ="images/delete.png";
            notescontainer.appendChild(inputBox).appendChild(img);
        })
