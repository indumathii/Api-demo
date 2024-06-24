const submit_btn = document.querySelector(".btn1")


submit_btn.addEventListener("click", async function (e) {
    e.preventDefault();

    // Clear existing content before adding new content
    const cat_image_row = document.querySelector(".row_class")
    cat_image_row.innerHTML = ""; // Clear inner HTML content
    document.body.appendChild(cat_image_row);

    const cat_text = document.getElementById("cat_text").value;
    console.log(cat_text)
    const cat_num = Number(document.getElementById("cat_number").value);

    // Iterate to fetch and display cat images
    for (let i = 0; i < cat_num; i++) {
        console.log(i)
        const cat_image_div = document.createElement("div");
        cat_image_div.setAttribute("class", " col col-sm-12 col-md-6 col-lg-4 image_div m-2 border-black");
        cat_image_row.appendChild(cat_image_div);

        const url = `https://cataas.com/cat/says/${cat_text}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.blob();
            const imgUrl = URL.createObjectURL(data);
            const cat_image = document.createElement("img");
            cat_image.setAttribute("class","cat_image m-2")
            cat_image.src = imgUrl;
            cat_image.alt = "Cat Image";

            cat_image_div.appendChild(cat_image);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }
    console.log("completed")
});

const clear_btn = document.querySelector(".btn2")
clear_btn.addEventListener("click", function () {
    alert("button clicked")
    window.location.reload();
})