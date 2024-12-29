cl = console.log;

const SearchBar = document.getElementById("SearchBar");
const cardInfo = document.getElementById("cardInfo");

const NameBtn = document.getElementById("NameBtn");
const CapitalBtn = document.getElementById("CapitalBtn");
const PopulationBtn = document.getElementById("PopulationBtn");

const nameIcon = document.getElementById("nameIcon");
const capitalIcon = document.getElementById("capitalIcon");
const popIcon = document.getElementById("popIcon");

const Graphdata = document.getElementById("graph");

const CardTemplating = (array = countries) => {
  let result = "";

  array.forEach((ele) => {
    result += ` <div class="col-lg-2 mt-3">
          <div class="card countryflag" >
          <img
            src="${ele.flag}"
            class="card-img-top"
            alt="flag"
            title="flag"
          />
          <div class="card-body cardInfocontainerheight">
            <h5 class="card-title Ctitle">${ele.name}</h5>
            <p class="card-text">
              <p class="mb-0"><span class="font-weight-bold">Capital: </span>${ele.capital}</p>
              <p class="mb-0"><span class="font-weight-bold">Languages: </span>${ele.languages}</p>
              <p class="mb-0"><span class="font-weight-bold">Population: </span>${ele.population}</p>
            </p>
          </div>
        </div>
      </div>`;
  });

  cardInfo.innerHTML = result;
};

CardTemplating();

const onClickSearchname = (eve) => {
  let Searchword = eve.target.value.toLowerCase();

  let filtercountries = countries.filter((ele) => {
    return (
      ele.name.toLowerCase().includes(Searchword) ||
      (ele.capital && ele.capital.toLowerCase().includes(Searchword)) ||
      ele.languages.some((lang) => lang.toLowerCase().includes(Searchword))
    );
  });

  CardTemplating(filtercountries);
};

const onNameClick = () => {
  nameIcon.classList.remove("d-none");
  capitalIcon.classList.add("d-none");
  popIcon.classList.add("d-none");

  if (nameIcon.className.includes("fa-arrow-down")) {
    nameIcon.classList.remove("fa-arrow-down");
    nameIcon.classList.add("fa-arrow-up");

    countries.sort((a, b) => b.name.localeCompare(a.name));
  } else {
    nameIcon.classList.add("fa-arrow-down");
    nameIcon.classList.remove("fa-arrow-up");

    countries.sort((a, b) => a.name.localeCompare(b.name));
  }

  CardTemplating();
};

const OnCapitalBtnClick = () => {
  nameIcon.classList.add("d-none");
  capitalIcon.classList.remove("d-none");
  popIcon.classList.add("d-none");

  if (capitalIcon.className.includes("fa-arrow-down")) {
    capitalIcon.classList.remove("fa-arrow-down");
    capitalIcon.classList.add("fa-arrow-up");

    countries.sort((a, b) => {
      a.capital = a.capital || "unknown";
      b.capital = b.capital || "unknown";

      return b.capital.localeCompare(a.capital);
    });
  } else {
    capitalIcon.classList.add("fa-arrow-down");
    capitalIcon.classList.remove("fa-arrow-up");

    countries.sort((a, b) => {
      a.capital = a.capital || "unknown";
      b.capital = b.capital || "unknown";

      return a.capital.localeCompare(b.capital);
    });
  }

  CardTemplating();
};

const OnclickPop = () => {
  nameIcon.classList.add("d-none");
  capitalIcon.classList.add("d-none");
  popIcon.classList.remove("d-none");

  if (popIcon.className.includes("fa-arrow-down")) {
    popIcon.classList.remove("fa-arrow-down");
    popIcon.classList.add("fa-arrow-up");

    countries.sort((a, b) => b.population - a.population);
  } else {
    popIcon.classList.add("fa-arrow-down");
    popIcon.classList.remove("fa-arrow-up");

    countries.sort((a, b) => a.population - b.population);
  }

  CardTemplating();
};

const graphTemplating = () => {
  let totalpopulation = countries.reduce((acc, cv) => {
    acc += cv.population;
    return acc;
  }, 0);

  let top10populatedcounty = countries
    .sort((a, b) => b.population - a.population)
    .slice(0, 10);

  cl(top10populatedcounty);
};

graphTemplating();
const cl = console.log;

const cardInfo = document.getElementById("cardInfo");

const BtnName = document.getElementById("btnName");
const btnCap = document.getElementById("btnCap");
const btnPop = document.getElementById("btnPop");

const iconN = document.querySelector("#btnName i");
const iconC = document.querySelector("#btnCap i");
const iconP = document.querySelector("#btnPop i");

const onSearch = document.getElementById("search");

const commentAdd = document.getElementById("comment");

const dataContainer = document.getElementById("dataContainer");

const Populationbtn = document.getElementById("Populationbtn");

const languagesbtn = document.getElementById("languagesbtn");

const CardTemplate = (array = countries) => {
  let result = "";
  array.forEach((ele) => {
    result += ` <div class="col-lg-2">
                    <div class="card country">
                    <img
                        src="${ele.flag}"
                        class="card-img-top shadow"
                        alt="Flag"
                        title="Flag"
                    />
                    <div class="card-body">
                        <h5 class="card-title text-center">${ele.name}</h5>
                        <div class="card-text">
                        <p class=" mb-0"><span class="font-weight-bold">Capital: </span>${ele.capital}</p>
                        <p class=" mb-0"><span class="font-weight-bold">Languages: </span>${ele.languages}</p>
                        <p class=" mb-0"><span class="font-weight-bold">Population: </span>${ele.population}</p>
                        </div>
                    </div>
                    </div>
                </div>
          `;
  });

  cardInfo.innerHTML = result;
};

CardTemplate();

const onClickSearch = (eve) => {
  let searchWord = eve.target.value.toLowerCase();
  let filteredCountries = countries.filter((ele) => {
    return (
      ele.name.toLowerCase().includes(searchWord) ||
      (ele.capital && ele.capital.toLowerCase().includes(searchWord)) ||
      ele.languages.some((lang) => lang.toLowerCase().includes(searchWord))
    );
  });
  CardTemplate(filteredCountries);

  commentAdd.innerHTML = `${filteredCountries.length} out of ${countries.length} countries`;
};

const OnClickSortName = () => {
  iconN.classList.remove("d-none");
  iconC.classList.add("d-none");
  iconP.classList.add("d-none");

  if (iconN.classList.contains("fa-arrow-down-long")) {
    iconN.classList.remove("fa-arrow-down-long");
    iconN.classList.add("fa-arrow-up-long");
    countries.sort((a, b) => b.name.localeCompare(a.name));
  } else {
    iconN.classList.add("fa-arrow-down-long");
    iconN.classList.remove("fa-arrow-up-long");
    countries.sort((a, b) => a.name.localeCompare(b.name));
  }

  CardTemplate();
};

const onCapButtonClick = () => {
  iconN.classList.add("d-none");
  iconC.classList.remove("d-none");
  iconP.classList.add("d-none");

  if (iconC.classList.contains("fa-arrow-down-long")) {
    iconC.classList.remove("fa-arrow-down-long");
    iconC.classList.add("fa-arrow-up-long");
    countries.sort((a, b) => {
      a.capital = a.capital || "Unknown";
      b.capital = b.capital || "Unknown";

      return b.capital.localeCompare(a.capital);
    });
  } else {
    iconC.classList.add("fa-arrow-down-long");
    iconC.classList.remove("fa-arrow-up-long");
    countries.sort((a, b) => {
      a.capital = a.capital || "Unknown";
      b.capital = b.capital || "Unknown";

      return a.capital.localeCompare(b.capital);
    });
  }

  CardTemplate();
};

const onClickPopulation = () => {
  iconN.classList.add("d-none");
  iconC.classList.add("d-none");
  iconP.classList.remove("d-none");

  if (iconP.classList.contains("fa-arrow-down-long")) {
    iconP.classList.remove("fa-arrow-down-long");
    iconP.classList.add("fa-arrow-up-long");
    countries.sort((a, b) => b.population - a.population);
  } else {
    iconP.classList.add("fa-arrow-down-long");
    iconP.classList.remove("fa-arrow-up-long");
    countries.sort((a, b) => a.population - b.population);
  }

  CardTemplate();
};

const displayGraphTemplate = () => {
  let totalWorldPopulation = countries.reduce((acc, cv) => {
    acc += cv.population;

    return acc;
  }, 0);
  // const worldPop = countries.reduce((acc, cv) => acc + cv.population, 0);

  let sort10populatedcounty = countries
    .sort((a, b) => b.population - a.population)
    .slice(0, 10);

  result = `<div class="row">
          <div class="col-md-2"><h5>World</h5></div>
          <div class="col-md-8">
            <div class="graphbar">
              <h5><div class="percent" style="width: 100%"></div></h5>
            </div>
          </div>
          <div class="col-md-2">
            <h5 class="countPopulation">${totalWorldPopulation}</h5>
          </div>
        </div>`;

  sort10populatedcounty.forEach((country) => {
    result += `<div class="row">
          <div class="col-md-2"><h5>${country.name}</h5></div>
          <div class="col-md-8">
            <div class="graphbar">
              <h5><div class="percent" style="width:${
                (country.population / totalWorldPopulation) * 100
              }%"></div></h5>
            </div>
          </div>
          <div class="col-md-2">
            <h5 class="countPopulation">${country.population}</h5>
          </div>
        </div>`;
  });

  dataContainer.innerHTML = result;
};

displayGraphTemplate();

const onClickshowpopGraph = () => {
  displayGraphTemplate();
};
// ----------------------------------------------graph langauge-------------

onSearch.addEventListener("keyup", onClickSearch);
BtnName.addEventListener("click", OnClickSortName);
btnCap.addEventListener("click", onCapButtonClick);
btnPop.addEventListener("click", onClickPopulation);
Populationbtn.addEventListener("click", onClickshowpopGraph);

SearchBar.addEventListener("keyup", onClickSearchname);
NameBtn.addEventListener("click", onNameClick);
CapitalBtn.addEventListener("click", OnCapitalBtnClick);
PopulationBtn.addEventListener("click", OnclickPop);
