const places = [
    {
        name: "Mysore Palace",
        category: "Heritage",
        image: "images/palace.jpg",
        description: "The famous royal palace and one of Mysuru's biggest attractions.",
        keywords: ["royal", "history", "architecture", "Dasara", "Mysore", "Mysuru"]
    },
    {
        name: "Chamundi Hills",
        category: "Nature",
        image: "images/chamundi.jpg",
        description: "A beautiful hill with scenic views of Mysuru city.",
        keywords: ["Chamundeshwari Temple", "temple", "viewpoint", "stairs", "hiking", "Mysore", "Mysuru"]
    },
    {
        name: "Mysuru Zoo",
        category: "Entertainment",
        image: "images/zoo.jpg",
        description: "One of the most popular zoological parks in Karnataka.",
        keywords: ["animals", "wildlife", "family", "zoo", "Mysore", "Mysuru"]
    },
    {
        name: "KRS Dam",
        category: "Nature",
        image: "images/krs.jpg",
        description: "A popular destination known for its gardens and beautiful surroundings.",
        keywords: ["Krishna Raja Sagara", "Brindavan Gardens", "fountains", "garden", "dam", "Mysore", "Mysuru"]
    },
    {
        name: "Devaraja Market",
        category: "Food",
        image: "images/market.jpg",
        description: "A traditional market filled with flowers, fruits and local products.",
        keywords: ["bazaar", "shopping", "flowers", "spices", "local", "Mysore", "Mysuru"]
    },
    {
        name: "St. Philomena's Church",
        category: "Heritage",
        image: "images/church.jpg",
        description: "A beautiful historic church with impressive architecture.",
        keywords: ["architecture", "cathedral", "religion", "landmark", "Mysore", "Mysuru"]
    },
    {
        name: "Mylari Dose",
        category: "Food",
        image: "images/mylari-dosa.jpg",
        description: "Try Mysuru's much-loved soft, buttery set dosa served with coconut chutney.",
        keywords: ["mylari", "dose", "dosa", "breakfast", "tiffin", "South Indian", "vegetarian", "Mysore", "Mysuru"]
    },
    {
        name: "Mysore Pak",
        category: "Food",
        image: "images/mysore-pak.jpg",
        description: "Taste the iconic Mysuru sweet made with ghee, gram flour and sugar.",
        keywords: ["sweet", "sweets", "dessert", "mithai", "ghee", "gram flour", "Guru Sweet Mart", "Mysore", "Mysuru"]
    },
    {
        name: "Jaganmohan Palace Art Gallery",
        category: "Heritage",
        image: "images/jaganmohan-palace.jpg",
        description: "Explore an art collection in a historic palace, including paintings and traditional works.",
        keywords: ["art", "gallery", "painting", "Raja Ravi Varma", "museum", "culture", "Mysore", "Mysuru"]
    },
    {
        name: "Mysuru Rail Museum",
        category: "Entertainment",
        image: "images/rail-museum.jpg",
        description: "See vintage railway exhibits, locomotives and carriages at this family-friendly museum.",
        keywords: ["train", "trains", "railway", "locomotive", "carriage", "museum", "family", "Mysore", "Mysuru"]
    },
    {
        name: "Karanji Lake Nature Park",
        category: "Nature",
        image: "images/karanji-lake.jpg",
        description: "Enjoy a quiet nature outing known for its lake, aviary and birdlife.",
        keywords: ["birds", "birdwatching", "bird watching", "aviary", "lake", "nature", "butterflies", "outdoors", "Mysore", "Mysuru"]
    },
    {
        name: "Mysuru Sand Sculpture Museum",
        category: "Entertainment",
        image: "images/sand-museum.jpg",
        description: "Discover detailed sand sculptures inspired by Indian culture, wildlife and local stories.",
        keywords: ["sand art", "sculpture", "art", "museum", "culture", "family", "Mysore", "Mysuru"]
    },
    {
        name: "Kukkarahalli Lake",
        category: "Nature",
        image: "images/kukkarahalli-lake.jpg",
        description: "Take a peaceful walk by this city lake, popular with walkers and birdwatchers.",
        keywords: ["lake", "walk", "walking", "birds", "birdwatching", "sunset", "outdoors", "Mysore", "Mysuru"]
    },
    {
        name: "Chennakeshava Temple, Somanathapura",
        category: "Heritage",
        image: "images/somanathapura-temple.jpg",
        description: "Visit a celebrated Hoysala temple known for its finely carved stone architecture.",
        keywords: ["Somanathapura", "Somnathpur", "temple", "Hoysala", "carvings", "architecture", "history", "day trip"]
    },
    {
        name: "Ranganathittu Bird Sanctuary",
        category: "Nature",
        image: "images/ranganathittu.jpg",
        description: "Spot waterbirds at this river-island sanctuary near Srirangapatna, a popular nature day trip.",
        keywords: ["Ranganathittu", "birds", "birdwatching", "sanctuary", "wildlife", "river", "nature", "Srirangapatna", "day trip"]
    },
    {
        name: "Lalitha Mahal Palace",
        category: "Heritage",
        image: "images/lalitha-mahal.jpg",
        description: "See one of Mysuru's grand white palaces, set against a scenic hillside backdrop.",
        keywords: ["Lalitha Mahal Palace Hotel", "royal", "palace", "architecture", "history", "landmark", "Mysore", "Mysuru"]
    },
    {
        name: "Mysore Masala Dosa",
        category: "Food",
        image: "images/msd.jpeg",
        description: "Try the crisp, spiced dosa served with chutney, a favourite South Indian meal.",
        keywords: ["masala dosa", "Mysore dosa", "dose", "breakfast", "tiffin", "chutney", "vegetarian", "food"]
    },
    {
        name: "Mysuru Bonda",
        category: "Food",
        image: "images/mysuru-bonda.jpg",
        description: "Enjoy a hot, savoury bonda as a local-style tea-time snack.",
        keywords: ["Mysore bonda", "Mysuru bajji", "snack", "tea time", "street food", "vegetarian", "food"]
    }
];

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

const exploreContainer = document.querySelector(".explore-places .explore-container");
const searchInput = document.getElementById("searchInput");
const clearSearchButton = document.getElementById("clearSearch");
const resultsSummary = document.getElementById("resultsSummary");
const categoryButtons = document.querySelectorAll(".categories button");
let activeCategory = "All";

function displayPlaces() {
    if (!exploreContainer) {
        return;
    }

    const searchText = searchInput ? searchInput.value.trim().toLowerCase() : "";
    const filteredPlaces = places.filter(function(place) {
        const matchesCategory = activeCategory === "All" || place.category === activeCategory;
        const searchableText = [place.name, place.category, place.description]
            .concat(place.keywords)
            .join(" ")
            .toLowerCase();
        const matchesSearch = searchText
            .split(/\s+/)
            .filter(Boolean)
            .every(function(term) {
                return searchableText.includes(term);
            });

        return matchesCategory && matchesSearch;
    });

    exploreContainer.replaceChildren();

    if (resultsSummary) {
        const placeWord = filteredPlaces.length === 1 ? "place" : "places";
        resultsSummary.textContent = `Showing ${filteredPlaces.length} ${placeWord}`;
    }

    if (clearSearchButton) {
        clearSearchButton.disabled = !searchText;
    }

    if (filteredPlaces.length === 0) {
        const noResults = document.createElement("div");
        noResults.className = "no-results";

        const heading = document.createElement("h2");
        heading.textContent = "No places match that search";

        const message = document.createElement("p");
        message.textContent = "Try a food, interest or category such as dosa, birds, art or heritage.";

        const resetButton = document.createElement("button");
        resetButton.className = "favorite-btn";
        resetButton.textContent = "Clear filters";
        resetButton.addEventListener("click", resetFilters);

        noResults.append(heading, message, resetButton);
        exploreContainer.appendChild(noResults);
        return;
    }

    filteredPlaces.forEach(function(place) {
        exploreContainer.appendChild(createPlaceCard(place));
    });
}

function createPlaceCard(place) {
    const card = document.createElement("article");
    card.className = "place-card";

    const image = document.createElement("img");
    image.src = place.image;
    image.alt = place.name;
    image.loading = "lazy";

    const category = document.createElement("span");
    category.className = "category";
    category.textContent = place.category;

    const heading = document.createElement("h3");
    heading.textContent = place.name;

    const description = document.createElement("p");
    description.textContent = place.description;

    const favoriteButton = document.createElement("button");
    favoriteButton.className = "favorite-btn";
    favoriteButton.type = "button";
    const isFavorite = favorites.includes(place.name);
    favoriteButton.classList.toggle("is-favorite", isFavorite);
    favoriteButton.textContent = isFavorite ? "\u2665" : "\u2661";
    favoriteButton.setAttribute("aria-label", isFavorite
        ? `Remove ${place.name} from favorites`
        : `Add ${place.name} to favorites`);
    favoriteButton.setAttribute("aria-pressed", String(isFavorite));
    favoriteButton.title = isFavorite ? "Remove from favorites" : "Add to favorites";
    favoriteButton.addEventListener("click", function() {
        addFavorite(place.name);
    });

    card.append(image, category, heading, description, favoriteButton);
    return card;
}

function addFavorite(name) {
    if (favorites.includes(name)) {
        favorites = favorites.filter(function(place) {
            return place !== name;
        });
    } else {
        favorites.push(name);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

    displayPlaces();

    if (document.getElementById("favoritesContainer")) {
        displayFavorites();
    }
}

function searchPlaces() {
    displayPlaces();
}

function filterCategory(category) {
    activeCategory = category;
    categoryButtons.forEach(function(button) {
        button.setAttribute("aria-pressed", String(button.dataset.category === category));
    });
    displayPlaces();
}

if (searchInput) {
    searchInput.addEventListener("input", searchPlaces);
}

if (clearSearchButton) {
    clearSearchButton.addEventListener("click", function() {
        if (searchInput) {
            searchInput.value = "";
            searchInput.focus();
        }
        displayPlaces();
    });
}

categoryButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        filterCategory(button.dataset.category);
    });
});

document.querySelectorAll("[data-search]").forEach(function(button) {
    button.addEventListener("click", function() {
        if (searchInput) {
            searchInput.value = button.dataset.search;
            searchInput.focus();
        }
        displayPlaces();
    });
});

function resetFilters() {
    if (searchInput) {
        searchInput.value = "";
    }
    filterCategory("All");
}

function displayFavorites() {
    let favoritesContainer = document.getElementById("favoritesContainer");
    let emptyFavorites = document.getElementById("emptyFavorites");

    if (!favoritesContainer) {
        return;
    }

    favoritesContainer.innerHTML = "";

    let favoritePlaces = places.filter(function(place) {
        return favorites.includes(place.name);
    });

    if (favoritePlaces.length === 0) {
        if (emptyFavorites) {
            emptyFavorites.style.display = "block";
        }
        return;
    }

    if (emptyFavorites) {
        emptyFavorites.style.display = "none";
    }

    favoritePlaces.forEach(function(place) {
        favoritesContainer.appendChild(createPlaceCard(place));
    });
}

displayPlaces();
displayFavorites();