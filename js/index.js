document.addEventListener("DOMContentLoaded", () => {
    const ocupation = document.querySelector(".person_ocupation");
    const topTop = document.querySelector(".to_top");
    const listItemA = [...document.querySelectorAll(".item_a")];
    const listElementBefore = [...document.querySelectorAll(".element_before")];
    const listSection = [...document.querySelectorAll(".section")];
    const person_picture = document.querySelector(".person_pinture");

    function time_slider_ocupation() {
        setTimeout(() => {
            ocupation.textContent = "Programador web";
        }, 0);
        setTimeout(() => {
            ocupation.textContent = "Analista software";
        }, 4000);
    }

    time_slider_ocupation();
    setInterval(time_slider_ocupation, 8000);

    function active_item(index) {
        for (let i = 0; i < listElementBefore.length; i++) {
            const element = listElementBefore[i];
            element.classList.remove("element_before_active");
        }
        listItemA.map(itemA=> {
            itemA.style.color="#000000cc";
        });
        listElementBefore[index].classList.add("element_before_active");
        listItemA[index].style.color="blue";
    }

    let hight = window.innerHeight / 3 * 2;

    if (listSection[0].getBoundingClientRect().top < hight) {
        active_item(listSection[0].dataset.id);
        person_picture.classList.add("animationImg");
    }

    window.addEventListener("scroll", () => {
        let scrollHight = window.scrollY;
        if (scrollHight > 500) {
            topTop.classList.add("to_top_active");
        } else {
            topTop.classList.remove("to_top_active");
        }

        listSection.map(section => {
            if (section.getBoundingClientRect().top < hight) {
                active_item(section.dataset.id);
            }
        });
        
    });

    topTop.addEventListener("click", () => {
        window.scrollTo(0, 0);
    });

    for (let i = 0; i < listItemA.length; i++) {
        const itemA = listItemA[i];
        itemA.addEventListener("click", (e) => {
            active_item(parseInt(e.currentTarget.dataset.id));
            
        });

    };
});