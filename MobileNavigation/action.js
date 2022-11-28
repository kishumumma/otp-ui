const image = document.querySelectorAll(".image");
const lists = document.querySelectorAll("ul li");
lists.forEach((e,i)=>{
    e.addEventListener('click' ,()=>{
        image.forEach((el)=>{
            el.classList.remove("show");
        })

        lists.forEach((el)=>{
            el.classList.remove('active')
        })
        e.classList.add('active')
        image[i].classList.add("show");
    })
})