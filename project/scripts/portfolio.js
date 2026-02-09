const quilts = [
    {
        imageSrc:
            "images/quilt1.webp",
        quiltName: "quilt-1",
        title: "The Big X",
        quilter: "Debbra Nelson"
    },
    {
        imageSrc:
            "images/quilt2.webp",
        quiltName: "quilt-2",
        title: "Patterns",
        quilter: "Debbra Nelson"
    },
    {
        imageSrc:
            "images/quilt3.webp",
        quiltName: "quilt-3",
        title: "Purple Flowers",
        quilter: "Debbra Nelson"
    },
    {
        imageSrc:
            "images/quilt4.webp",
        quiltName: "quilt-4",
        title: "Dinosaurs",
        quilter: "Debbra Nelson"
    },
    {
        imageSrc:
            "images/quilt5.webp",
        quiltName: "quilt-5",
        title: "Twas the Night Before Christmas",
        quilter: "Debbra Nelson"
    },
    {
        imageSrc:
            "images/quilt6.webp",
        quiltName: "quilt-6",
        title: "Springtime",
        quilter: "Debbra Nelson"

        
    },
    {
        imageSrc:
            "images/quilt7.webp",
        quiltName: "quilt-7",
        title: "A Very Scary Christmas!",
        quilter: "Debbra Nelson"
    },
    {
        imageSrc:
            "images/quilt8.webp",
        quiltName: "quilt-8",
        title: "Eage Scout Quilt",
        quilter: "Debbra Nelson"
    }
]

createQuiltCard(quilts);

function createQuiltCard(quilts) {
    quilts.forEach(quilt => {
        let card = document.createElement("section");
        let img = document.createElement("img");
        let title = document.createElement("h3")
        let quilter=document.createElement("p")

        // name.textContent = quilt.quiltName;
        img.setAttribute("src", `${quilt.imageSrc}`)
        img.setAttribute("alt", `${quilt.quiltName}`);
        img.setAttribute("loading", "lazy");
        title.innerHTML = `<span class="label"></span> ${quilt.title}`;
        quilter.innerHTML =`<span class="label"></span> ${quilt.quilter}`;


        card.appendChild(img)
        card.appendChild(title)
        card.appendChild(quilter)

        document.querySelector(".res-grid").appendChild(card);
    }
    );
}