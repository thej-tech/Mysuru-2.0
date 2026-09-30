# Mysuru 2.0

A responsive, static guide to places, food, culture and outdoor experiences in
Mysuru. Browse the guide, search by interest, filter by category, and save
places to a favorites list in your browser.

## Features

- Home page with featured Mysuru attractions and links to the full guide.
- Explore page with 18 places across Heritage, Nature, Food and Entertainment,
  including nearby day-trip ideas.
- Search by place name, category, description or discovery keywords. Searches
  are case-insensitive and can match multiple words, so try terms such as
  `dosa`, `bonda`, `birds`, `temple`, `lake`, `trains`, `art`,
  `Ranganathittu` or `Brindavan Gardens`.
- Popular-search shortcuts, category filters, a result count, and a clear
  button to make discovery quicker.
- Add or remove favorites. The selection is saved in the browser's local
  storage and is available on the Favorites page on that same browser.
- Use the heart on a place card to favorite or unfavorite it: an outline heart
  is not saved, and a filled heart is saved.
- Locally stored images; no remote image requests or third-party JavaScript
  libraries are needed to use the site.

## Run the site

No package installation or build step is required. Open `index.html` in a
browser, then use the navigation to visit Explore and Favorites. Alternatively,
serve this folder with any static web server.

## Project files

| File or folder | Purpose |
| --- | --- |
| `index.html` | Homepage and featured-place cards |
| `explore.html` | Search, category filters and place results |
| `favorites.html` | Saved places and the empty-favorites state |
| `style.css` | Shared responsive styling for all pages |
| `script.js` | Place catalogue, search/filter logic and favorites |
| `images/` | Downloaded local JPEG images used by the pages |

## JavaScript overview

The project uses plain browser JavaScript; there is no framework or server.
`script.js` contains the shared place catalogue and initializes the parts of the
interface that exist on the current page.

### Place catalogue

The `places` array is the source of truth for the Explore and Favorites pages.
Each entry has a `name`, `category`, local `image` path, `description` and
`keywords`. Add new places here and include useful alternate search terms
(food names, activities, common spellings or related interests). Put the
matching image in `images/` and add its attribution to this README.

### Search and filters

- `displayPlaces()` combines the selected category with the current search.
  It searches the name, category, description and keywords without regard to
  letter case. For a multi-word query, every word must match somewhere in the
  place's searchable text.
- `searchPlaces()` refreshes the results as the visitor types.
- `filterCategory()` changes the active category and updates the selected
  filter's accessible pressed state.
- Popular-search buttons fill the search field with useful example queries.
  The clear button removes the typed query; **Clear filters** resets both the
  query and category when no results are found.
- `createPlaceCard()` builds a result card and its favorite button using DOM
  elements and text content. Its accessible heart button uses `aria-pressed`
  to indicate whether the place is saved.

Search is local: it only searches the places and keywords in `script.js`; it
does not query the web or a live places database. Its usefulness grows as the
catalogue and keywords are expanded.

### Favorites

`addFavorite()` toggles a place in the favorites list and saves the list as JSON
in `localStorage` under the key `favorites`. `displayFavorites()` renders saved
places on `favorites.html` and shows the empty state when none are saved.
Favorites are specific to a browser profile and device; clearing browser
storage removes them.

## Image credits and licenses

The images below are stored in `images/` and sourced from Wikimedia Commons.
They remain subject to their authors' licenses; follow the linked license terms
when reusing them.

| Local file | Work and author | License |
| --- | --- | --- |
| `palace.jpg` | [Mysore Palace (1)](https://commons.wikimedia.org/wiki/File:Mysore_Palace_(1).jpg), Hari R | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) |
| `chamundi.jpg` | [Chamundi Hills (Image 1)](https://commons.wikimedia.org/wiki/File:Chamundi_Hills_(Image_1),_Mysore,_Karnataka,_India.jpg), Gpkp | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `zoo.jpg` | [Girraffe at Mysore zoo-1](https://commons.wikimedia.org/wiki/File:Girraffe_at_Mysore_zoo-1.jpg), Ramesh NG | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) |
| `krs.jpg` | [Brindavan Gardens (Image 1)](https://commons.wikimedia.org/wiki/File:Brindavan_Gardens_(Image_1),_Krishna_Raja_Sagara,_Mandya,_Karnataka,_India.jpg), Gpkp | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `market.jpg` | [Devaraja Market](https://commons.wikimedia.org/wiki/File:Devaraja_Market_-Mysore_-Karnataka_-20190214_172824.jpg), Schüler1000 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `church.jpg` | [St. Philomena's Church, Mysore (2025) 02](https://commons.wikimedia.org/wiki/File:St._Philomena%27s_Church,_Mysore_(2025)_02.jpg), Gpkp | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `mylari-dosa.jpg` | [Mylari dosa 01](https://commons.wikimedia.org/wiki/File:Mylari_dosa_01.jpg), Ganesh Mohan T | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `mysore-pak.jpg` | [Ghee Mysore Pak](https://commons.wikimedia.org/wiki/File:Ghee_Mysore_Pak.jpg), Vaidehi Pujary | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `jaganmohan-palace.jpg` | [A side wide angle view of Jaganmohan Palace](https://commons.wikimedia.org/wiki/File:A_side_wide_angle_view_of_Jaganmohan_Palace,_Mysuru,_Karnataka.jpg), Shashank Mehendale | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `rail-museum.jpg` | [Mysuru Rail Museum - Rail Bus - 1](https://commons.wikimedia.org/wiki/File:Mysuru_Rail_Museum_-_Rail_Bus_-_1.jpg), Ingo Mehling | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `karanji-lake.jpg` | [North View Karanji Lake](https://commons.wikimedia.org/wiki/File:North_View_Karanji_Lake_Mysore_Nov23_A7C_08174.jpg), Timothy A. Gonsalves | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `sand-museum.jpg` | [Mysore Sand Art Museum](https://commons.wikimedia.org/wiki/File:IMG_MYSORE_SAND_ART_MEUSEUM_DSC001.jpg), Kunalsaxena2109 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `kukkarahalli-lake.jpg` | [Kukkarahalli Lake](https://commons.wikimedia.org/wiki/File:Kukkarahalli_Lake.jpg), LittleT889 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `somanathapura-temple.jpg` | [Somnathpur Temple (near Mysore), front view](https://commons.wikimedia.org/wiki/File:Somnathpur_Temple_(near_Mysore)_Front_View.jpg), Bala.gop76 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `ranganathittu.jpg` | [Eurasian Spoonbill at Ranganathittu](https://commons.wikimedia.org/wiki/File:Eurasian_Spoonbill_Breeding_Ranganathittu_Karnataka_Jan24_A7C_09142.jpg), Timothy A. Gonsalves | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `lalitha-mahal.jpg` | [Lalitha Mahal Palace Hotel](https://commons.wikimedia.org/wiki/File:Lalitha_Mahal_Palace_Hotel.jpg), Rb.sg | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `mysore-masala-dosa.jpg` | [Mysore Masala Dosa and Chutney](https://commons.wikimedia.org/wiki/File:Mysore_Masala_Dosa_and_Chutney.jpg), Mrudit161187 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `mysuru-bonda.jpg` | [Mysuru Bonda](https://commons.wikimedia.org/wiki/File:Mysuru_Bonda.jpg), Nitinshrinivas | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
