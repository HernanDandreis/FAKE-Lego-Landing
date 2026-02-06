const iwantBtn = document.querySelectorAll(".hero")
const modal = document.querySelector(".modal")

    iwantBtn.forEach(heroIndex => {
        heroIndex.addEventListener("click", () => {
        modal.classList.remove("modal-hidden");
        modal.classList.add("modal-visible");

    const modalTemplate = 
        `   
        <div class="modal-child">
            <div class="image-container">
                <img class= "modal-btn--close" src="./assets/img/btn_cierre.png" alt="">
                <img class= "hero-image" src="${heroIndex.src}" alt=""> 
            </div>  
            <div class="iWantBtn">
                <button class="iWantModalBtn">LO QUIERO!</button>
            </div>
        </div>
        `

        document.querySelector('.modal').innerHTML = modalTemplate

        const modalBtnClose = document.querySelector(".modal-btn--close")

        modalBtnClose.addEventListener("click", () => {
            console.log('Ey!')
            modal.classList.add("modal-hidden");
            modal.classList.remove("modal-visible");
        })
    });
})

