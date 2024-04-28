/* eslint-disable no-undef */
let config = {
  minZoom: 3,
  maxZoom: 18,
};

const zoom = 5;

const lat = 40.22977;
const lng = 15.01178;

const points = [
  [35.9078, 127.7669, "Korea", "point 1"],
  [-9.88808, -75.370098, "Peru", "Chifa"],
  [52.1326, 5.2913, "Netherlands", "point 3"],
  [52.978327, -1.708439, "UK", "point 4"],
];

let points2 = [
  [
    -14.074149,
    -75.727956,
    "Chifa Kuong Tong",
    "https://img.restaurantguru.com/cc5b-Restaurant-Chifa-Kuong-Tong-photo.jpg",
    "https://media-cdn.tripadvisor.com/media/photo-s/1c/c8/21/c1/img-20210324-194421-largejpg.jpg",
    "<br>秘鲁炒饭，米饭加菜和肉。<br>经常会用香葱和鸡蛋。肉可以是鸡，猪，牛，或者虾。用油和酱油在锅里煮熟。秘鲁人喜欢用黑酱油。<br><br> Arroz Chaufa 是从19世纪的华人移民来的。味道跟中国的炒米饭很像，变化主要在他的材料。有一些地方会用特别的肉，比如说鳄鱼或西医。",
    "Arroz Chaufa",
    "https://tastesbetterfromscratch.com/arroz-chaufa/",
    "https://lh3.googleusercontent.com/p/AF1QipNgD7AIz8_ZmeSiLvKt50uyg-6zQNWgk-d7NdJB=s1360-w1360-h1020",
  ],
  [
    -12.052179573806928,
    -77.02514030409998,
    "Chifa Wa Lok",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Wa_Lok_chifa.jpg/1280px-Wa_Lok_chifa.jpg",
    "https://www.piscotrail.com/sf/media/2016/12/tallarin-saltado-chifa-shrimp-stir-fry.jpg",
    "<br>秘鲁炒面，名字是从Stir-Fry（saltear）来的。<br>跟美国的Chow Mein很像。把面，菜，和肉块炒在一起。在秘鲁也会用中国的香料，再加上芝麻酱。<br><br>Tallarin 和 Arroz Chaufa 常常会做到一块。这个菜叫 Aeropuerto (Airport）。",
    "Tallarin Saltado",
    "https://piquantpost.com/blogs/recipes/tallarin-saltado-peruvian-stir-fried-noodles",
    "https://lh3.googleusercontent.com/p/AF1QipN1Z_JlIyDHAdnPYbF9gEemtudkw1YjJyy7gcoo=s1360-w1360-h1020",
  ],
  [
    52.35601629479816,
    4.90049756737411,
    "Yu Fung",
    "https://s3-media0.fl.yelpcdn.com/bphoto/A5AxM9noBN7S0dglnWgo3A/348s.jpg",
    "https://images.getrecipekit.com/20240304171058-img_4055.jpeg?aspect_ratio=1:1&quality=90&",
    "<br>荷兰富永蛋。<br>做法跟广东的富永蛋很像，可是味道和材料有一些改变。最重要的是在荷兰必须得更甜番茄酱或者甜酸酱一块吃。常常会用猪和虾肉。<br>虽然它名字里的“hai”表明螃蟹，平常不会用螃蟹肉做的。",
    "Foe Yong Hai",
    "https://twisted-chef.com/blogs/recipes/foe-yong-hai",
    "https://lh3.googleusercontent.com/p/AF1QipM4nJMUbADoBgbLEqXxWaqxBQAPrYms6j9JpbAi=s1360-w1360-h1020",
  ],
  [
    51.930333909410855,
    4.501187300987044,
    "Wha Kong",
    "https://images.squarespace-cdn.com/content/v1/58fdbb0a893fc0d7605998cb/1685881383250-AAD55MXGAKM5C88SH1SK/52a179cb-d511-42e4-b489-47cd3cbc16c3.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Babi_panggang_speciaal_met_nasi.jpg/227px-Babi_panggang_speciaal_met_nasi.jpg",
    "<br>Babi Pangang 是从印尼中式融合餐厅出身的，最有可能是粤菜厨师开发的。<br> 荷兰的中国菜常常是印尼中式融合。1970年好多这些饭馆先出现，现在大部分是香港厨师。<br>Babi Pangang 是把脆皮扎猪肉放在acar campur上，要加很多番茄酱和甜酸酱。",
    "Babi Pangang",
    "https://arrisje.com/babi-pangang/",
    "https://lh3.googleusercontent.com/p/AF1QipOShGxEkdUgusbmZL5An_B0oDIx2ZVSHUn9sDES=s1360-w1360-h1020",
  ],
  [
    37.57073989620927,
    126.97970692698539,
    "신승관",
    "https://lh3.googleusercontent.com/p/AF1QipPQ03TSq8YhRl2DBIuK8AhS2ZEOsACze2s9EyuH=s1360-w1360-h1020",
    "https://lh3.googleusercontent.com/p/AF1QipOBXwZjZusApxIxVTae3xQ08jGHDMKlQFDf5JiP=s1360-w1360-h1020",
    "<br>韩国的炸酱面<br>韩式中餐是从华人移民发展而来。韩式中餐跟中餐主要的区别是在味道和材料。<br>jjajangmyeon 是用小麦粉面条和美味的黑豆酱（jjajang 酱)，做出来一个又甜又咸的味道。<br>jjajang 酱是从发酵黑豆、小麦粉和焦糖做的。jjajangmyeon 以外，很多韩国疗愈美食使用 jjajang 酱。",
    "Jajangmyeon (짜장면)",
    "https://www.maangchi.com/recipe/jjajangmyeon",
    "https://lh3.googleusercontent.com/p/AF1QipN5ZQ_IfBU_QVNmoN9vnK4rEMxbNnqbxrZdhyzb=s1360-w1360-h1020",
  ],
  [
    37.505163987506315,
    126.72168316791506,
    "관동탕수육",
    "https://lh3.googleusercontent.com/p/AF1QipMAoQInq15lr49lxRyrqCmlnkvR1L4UoS5OyjRQ=s1360-w1360-h1020",
    "https://lh3.googleusercontent.com/p/AF1QipNnSOdGikV2hh-Gki6mrurPhsFq12f2IyHKCXFm=s1360-w1360-h1020",
    "<br>韩国糖醋肉。<br>Tangsuyuk 是中国商人在 Incheon做的。Incheon 以前是韩国最多中国人的城市。虽然大部分中国人现在都住在 Seoul，Incheon 还是留下很多中国人民和饮食的影响。<br>Tangsuyuk 可以用猪肉或者牛肉。先把肉切成小块，然后裹在土豆和玉米淀粉，放进水几小时，最后沥干。Tangsuyuk，跟很多韩国炸菜，要双炸。炸完更这甜酸酱一块吃。",
    "Tangsuyuk (탕수육)",
    "https://www.maangchi.com/recipe/tangsuyuk",
    "https://lh3.googleusercontent.com/p/AF1QipPRtoXvoAwrNq7B26O2zIphhmcy5jv7hHM-uEHb=s1360-w1360-h1020",
  ],
  [
    51.55937297892064,
    -0.07431964375159349,
    "Lee How",
    "https://lh3.googleusercontent.com/p/AF1QipMzj029Iu0N79D4IB0Zm_AnB2meEBsFGcVBdzIf=s1360-w1360-h1020",
    "https://lh3.googleusercontent.com/p/AF1QipN-Y542vaBrOcJF_Hx6uJXO-Xl0oFYlO9wwjvaH=s1360-w1360-h1020",
    "<br>英国的甜酸鸡（或者猪）<br>这个菜更美国里的 Orange Chicken 和他们的 Sweet and Sour Chicken 差不多一样。这是因为美国和英国喜欢类似的口味。<br>英国的中餐是19世纪的移民先开始的. 他们只能用英国的材料，也得改变菜的口味所以可以跟适合那里的人。<br>英国的Sweet and Sour Pork 是把鸡或者猪肉切成小块，然后加酱。酱是用番茄酱，麦芽粗，红糖，和菠萝快类似的材料做出的，会有英国人喜欢的甜酸味道。",
    "Sweet and Sour Chicken/Pork",
    "https://www.kitchensanctuary.com/sweet-and-sour-chicken/",
    "https://www.leehowchinese.co.uk/",
  ],
  [
    55.858614242759145,
    -4.217925680041991,
    "Super Wok Chinese Takeaway",
    "https://c.yell.com/t_galleryFit,f_auto/4eecb2e9-76c0-4016-add7-13472d5ab7c9_image_jpeg.jpg",
    "https://feed-your-sole.com/wp-content/uploads/2021/08/Salt-and-Pepper-Chips-Recipe.jpg",
    "<br>Salt and Pepper Chips 是一个英式中餐的发明。<br>虽然大部分饮食中餐更美式中餐很像，英国北部有一些特别的菜。Salt and Pepper Chips 是1960年中国人开的炸鱼薯条店发明的。这个菜先在 Liverpool 出现的，可现在是在英国全北部流行。<br>做这菜要先切好洋葱、青椒和辣椒，再加上花椒和黑胡椒。把土豆跟这些材料住在一块，完了加一些盐、蒜、五香粉、和糖。",
    "Salt and Pepper Chips",
    "https://www.dishbyrish.co.uk/2023/09/salt-and-pepper-chips/",
    "https://lh3.googleusercontent.com/p/AF1QipN3VpZFPddezLnliCOUwMbEVUByWUppP7ZoY6F5=s1360-w1360-h1020",
  ],
];

const map = L.map("map", config).setView([lat, lng], 2);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

let markers = L.markerClusterGroup();

const funny = L.icon({
  iconUrl:
    "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png",
  iconSize: [30, 30], // size of the icon
  iconAnchor: [20, 58], // changed marker icon position
  popupAnchor: [0, -60], // changed popup position
});

const customOptions = {
  minWidth: "220",
  keepInView: true,
};

for (let i = 0; i < points2.length; i++) {
  const [lat, lng, title, img, img2, text, title2, recipe, menu] = points2[i];

  let marker = L.marker(new L.LatLng(lat, lng), { icon: funny })
    .bindPopup(
      `<div class="customPopup">
      <ul class="tabs-example" data-tabs>
      <li><a data-tabby-default href="#one">${title}</a></li>
      <li><a href="#two">${title2}</a></li>
    </ul>
    <div id="one">
      <figure><img src="${img}" target="_blank"></a></div>
      <div><a href="${menu}" target="_blank">Menu</a></div>
    </div>
    <div id="two">
      <figure><img src="${img2}" style="height: 202px; width: auto; margin: auto;"></figure>
      <div>${text}</div>
      <div><a href="${recipe}" target="_blank">Recipe</a></div>
    </div>
  </div>`,
      customOptions
    )
    .on("click", runTabs);
  markers.addLayer(marker);
}

map.addLayer(markers);

const container = document.querySelector(".container");
const featureGroups = [];
for (let i = 0; i < points.length; i++) {
  const [lat, lng, title] = points[i];

  const marker = L.marker([lat, lng], { title });
  marker.bindPopup(`${title}`).addTo(map).on("click", clickZoom);

  const el = document.createElement("a");
  el.id = marker._leaflet_id;
  el.className = "marker-click";
  el.href = "#";
  el.textContent = `${title}`;
  container.appendChild(el);
}

// set center map
function clickZoom(e) {
  map.setView(e.target.getLatLng(), zoom);

  setActive(e.target._leaflet_id);
}

function clickZoom2(e) {
  map.setView(e.target.getLatLng(), 10);

  setActive(e.target._leaflet_id);
}

function markerOpen(id) {
  map.eachLayer(function (layer) {
    if (layer.options && layer._leaflet_id === id) {
      centerMarker(layer);

      setActive(id);
    }
  });
}

function setActive(id) {
  const active = document.querySelector(".active");
  if (active) {
    active.classList.remove("active");
  }
  const el = document.getElementById(id);
  el.classList.add("active");
}

function centerMarker(layer) {
  layer.openPopup();
  map.panTo(L.latLng(layer.getLatLng()));
}

document.addEventListener("DOMContentLoaded", () => {
  const markersDiv = document.querySelectorAll(".marker-click");

  markersDiv.forEach((marker) => {
    marker.addEventListener("click", () => {
      markerOpen(+marker.id);
    });
  });
});

const legend = L.control({ position: "bottomleft" });

legend.onAdd = function () {
  let div = L.DomUtil.create("div", "description");
  L.DomEvent.disableClickPropagation(div);
  const text = `<b>Chinese Food</b> has been adapted in many different cultures beyond just the United States. The integration for a few countries is showcased on the map. Click the red markers located around each region to view a popular restaurant and a defining dish.<br><br>This project was made with <a href="https://leafletjs.com/index.html" target="blank">Leaflet</a>, an open source library. <br> View project code <a href="https://github.com/potofuu/potofuu.github.io" target="blank">here</a>`;
  div.insertAdjacentHTML("beforeend", text);
  return div;
};

legend.addTo(map);

function runTabs() {
  const tabs = new Tabby("[data-tabs]");
}
