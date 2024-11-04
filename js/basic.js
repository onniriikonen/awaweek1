const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

const data = [
    { title: "Rottweiler", text: "text", breed: "rottweiler" },
    { title: "Saluki", text: "text", breed: "saluki"},
    { title: "Pug", text: "text", breed: "pug" },
    { title: "German shepherd", text: "text", breed: "germanshepherd" },
    { title: "Beagle", text: "text", breed: "beagle" }

];

async function fetchImage(breed) {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    const data = await response.json();
    return data.message;
}

async function create({ title, text, breed }) {

    const img = await fetchImage(breed);

    const wikiItem = document.createElement("div");
    wikiItem.classList.add("wiki-item");

    const header = document.createElement("h1");
    header.classList.add("wiki-header");
    header.textContent = title;

    const wikiContent = document.createElement("div");
    wikiContent.classList.add("wiki-content");

    const wikiText = document.createElement("p");
    wikiText.classList.add("wiki-text");
    wikiText.textContent = text;

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const image = document.createElement("img");
    image.classList.add("wiki-img");
    image.src = img

    imgContainer.appendChild(image);
    wikiContent.appendChild(imgContainer);
    wikiContent.appendChild(wikiText);
    wikiItem.appendChild(header);
    wikiItem.appendChild(wikiContent);

    container.appendChild(wikiItem);
}

data.forEach(create);