function main() {
  const domainNames = [
    "I. Moduri de copil",
    "II. Moduri de coping/adaptare",
    "III. Moduri de adult"
  ];

  function hasQueryParam(paramName) {
    // Get the current URL's search parameters
    const urlParams = new URLSearchParams(window.location.search);

    // Check if the parameter exists
    return urlParams.has(paramName);
  }

  const resetAll = false;

  const domains = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11],
    [12, 13, 14]
  ];

  let domainDetails;
  const dditem = JSON.parse(localStorage.getItem("dditem"));
  if (dditem && !resetAll) domainDetails = dditem;
  else domainDetails = ["", "", ""];

  const questions = [
    "1. Mă îngrijorez că oamenii pe care îi iubesc vor muri curând, chiar dacă nu există, din punct de vedere medical, nici un motiv care să-mi justifice îngrijorarea. ",
    "2. Simt că oamenii vor profita de mine. ",
    "3. Oamenii nu au venit în întâmpinarea nevoilor mele emoţionale. ",
    "4. Nu mă adaptez celorlalţi. ",
    "5. Nici un bărbat/o femei pe care o doresc nu m-ar putea iubi odată ce el/ea îmi va fi descoperit defectele. ",
    "6. Nu mă simt în stare să mă descurc singur/ă în viaţa de zi cu zi. ",
    "7. Trăiesc mereu sentimentul că ceva rău e pe cale să se întâmple. ",
    "8. N-am fost capabil/ă să mă despart de părinţii mei, în felul în care alte persoane de vârsta mea par să o fi făcut. ",
    "9. Aproape nimic din ceea ce fac la serviciu/la şcoală nu e la fel de bun ca ceea ce pot alţii să facă. ",
    "10. Mi-e foarte greu să accept un răspuns negativ când vreau ceva de la ceilalţi. ",
    "11. Am mari dificultăţi în a mă constrânge să mă las de băut sau de fumat, în a-mi controla reacţiile nepotrivite sau alte probleme comportamentale.",
    "12. Îi las pe ceilalţi să-şi urmeze propriul drum pentru că mă tem de consecinţele pe care le-ar avea influenţa mea asupra lor. ",
    "13. Pun nevoile celorlalţi înaintea propriilor nevoi pentru că altfel mă simt vinovat/ă. ",
    "14. Nu sunt atractiv/ă din punct de vedere sexual. ",
    "15. Chiar și atunci când lucrurile par să meargă bine, simt că este doar ceva temporar.",
    "16. Îmi este teamă că îmi voi pierde controlul atunci când mă enervez. ",
    "17. Trebuie să fiu cel mai bun în cele mai multe lucruri pe care le fac; nu pot accepta să fiu pe locul doi. ",
    "18. Dacă gresesc, merit sa fiu pedepsit. ",
    "19. Mă ţin scai de persoanele de care sunt apropiat/ă deoarece mă tem că mă vor părăsi. ",
    "20. Simt adesea că trebuie să mă apăr de ceilalţi. ",
    "21. Nu am primit suficientă dragoste sau afecţiune. ",
    "22. Sunt fundamental diferit de ceilalţi. ",
    "23. Nici o persoană pe care o doresc n-ar vrea să-mi stea aproape dacă el/ea m-ar cunoaşte cu adevărat. ",
    "24. Am nevoie de ajutorul altor oameni ca să mă descurc. ",
    "25. Simt că un dezastru (natural, criminal, financiar sau medical) s-ar putea produce în orice clipă. ",
    "26. Părinţii mei şi cu mine ne implicăm prea mult unii în viaţa celorlalţi. ",
    "27. Sunt incompetent/ă atunci când trebuie să realizez ceva. ",
    "28. Sunt adesea nervos/nervoasă sau iritabil/ă dacă nu obţin ceea ce vreau. ",
    "29. Nu prea mă pot disciplina să îndeplinesc sarcini plictisitoare şi nu mă pot resemna la rutina absolută. ",
    "30. Cred că dacă fac ceea ce vreau, dau numai de belea. ",
    "31. Mă simt vinovat/ă când las baltă sau dezamăgesc pe cineva. ",
    "32. Sunt prea gras/ă. ",
    "33. Dacă se întâmplă ceva bun, ma tem că este posibil să urmeze ceva rău. ",
    "34. Îmi fac griji că aş putea să rănesc pe cineva (fizic sau emoţional) dacă nu-mi controlez furia. ",
    "35. Mă străduiesc să păstrez aproape totul în perfectă ordine. ",
    "36. Daca nu fac tot posibilul, ar trebui să ma astept sa pierd.",
    "37. Mă îngrijorez de faptul că oamenii de care mă simt apropiat mă vor părăsi sau mă vor abandona. ",
    "38. Simt că nu pot lăsa garda jos în prezenţa celorlalţi, căci astfel mă vor răni intenţionat. ",
    "39. Cel mai adesea nu am avut pe cine să contez pentru sfaturi şi sprijin emoţional.",
    "40. Nu-mi găsesc locul; sunt un/o singuratic/ă. ",
    "41. Am multe defecte şi cusururi. ",
    "42. Simt că nu pot face faţă singur/ă. ",
    "43. Mă îngrijorează că s-ar putea să devin un om al străzii sau un vagabond. ",
    "44. E foarte greu pentru mine sau părinţii mei să ascundem detalii intime  unii faţă de alţii fără să ne simţim trădaţi sau vinovaţi. ",
    "45. Majoritatea oamenilor sunt mai capabili decât mine când lucrează sau realizează ceva. ",
    "46. Sunt o persoană specială şi nu ar trebui să accept multe din interdicţiile care-i privesc pe ceilalţi. ",
    "47. Îmi permit să dau curs unor impulsuri şi să exprim emoţii care îmi aduc necazuri sau îi rănesc pe ceilalţi. ",
    "48. Simt că trebuie să mă supun dorinţelor celorlalţi sau altfel se vor purta urât cu mine sau mă vor respinge. ",
    "49. Dau celorlalţi mai mult decât primesc în schimb. ",
    "50. Sunt urât/ă. ",
    "51. Nu poți fi niciodată suficient de precaut, ceva va merge prost aproape întotdeauna. ",
    "52. Simt că trebuie să-mi controlez emoţiile şi impulsurile, altfel e posibil să se întâmple ceva rău. ",
    "53. Trebuie să arăt bine în cea mai mare parte a timpului. ",
    "54. Nu există nicio scuză dacă greșesc. ",
    "55. Simt că-mi lipseşte sprijinul emoţional. ",
    "56. Dacă cineva se poartă drăguţ cu mine, îmi imaginez că el/ea urmăreşte ceva. ",
    "57. Foarte adesea, nu am avut pe cineva care să aibă grijă de mine, să se dăruiască sau căruia să-i pese cu adevărat de tot ceea ce mi se întâmplă. ",
    "58. Mă simt străin/ă de ceilalţi. ",
    "59. Oricât de mult m-aş strădui, simt că nu voi fi în stare să fac un bărbat/o femeie important/ă pentru mine să mă respecte sau să simtă că sunt merituos/merituoasă. ",
    "60. Cred că alţi oameni pot să aibă grijă de mine mai bine decât am eu însumi. ",
    "61. Mă tem că voi fi atacat/ă. ",
    "62. Părinţii mei şi cu mine trebuie să vorbim în fiecare zi, altfel unul dintre noi se va simţi vinovat, rănit, dezamăgit sau singur. ",
    "63. Sunt un/o ratat/ă. ",
    "64. Urăsc să fiu constrâns/ă sau împiedicat/ă să fac ceea ce vreau. ",
    "65. Dacă nu pot atinge un scop, devin cu uşurinţă frustrat/ă şi mă dau bătut/ă. ",
    "66. În relaţii, îi las pe ceilalţi să mă domine (să deţină controlul). ",
    "67. Ajung să am grijă de oamenii de care mă simt apropiat/ă. ",
    "68. Nu pot întreţine o conversaţie ca lumea. ",
    "69. Indiferent cât de mult aș munci, îmi fac griji că aș putea fi distrus financiar. ",
    "70. În mine s-au adunat multă furie şi resentimente pe care nu le exprim. ",
    "71. Mă străduiesc să fac lucrurile cât mai bine, nu pot să mă opresc la suficient de bine. ",
    "72. Oamenii care nu-și îndeplinesc sarcinile ar trebui să fie pedepsiţi într-un fel. ",
    "73. Simt că relaţiile mele apropiate cu alte persoane nu vor dura; cred că o să se sfârşească. ",
    "74. A fi trădat de cei din jurul meu e doar o chestiune de timp. ",
    "75. În cea mai mare parte din viaţa mea nu am avut pe cineva care să vrea să-mi fie aproape şi care să petreacă multă vreme cu mine. ",
    "76. Mă simt izolat/ă şi singur/ă. ",
    "77. Sunt nedemn de dragostea, atenţia şi respectul celorlalţi. ",
    "78. Mi-e greu să abordez sarcini noi în afara serviciului dacă nu am pe cineva care să mă îndrume. ",
    "79. Simt că trebuie să fiu foarte atent/ă cu banii, căci altfel voi sfârşi prin a nu mai avea nimic. ",
    "80. Simt adesea că nu am o identitate separată faţă de părinţii sau partenerul/a meu/mea. ",
    "81. Nu sunt la fel de talentat/ă în ceea ce fac la fel ca ceilalţi colegi de muncă (de şcoală). ",
    "82. Întotdeauna i-am lăsat pe ceilalţi să aleagă pentru mine, deci chiar nu ştiu ce vreau cu adevărat. ",
    "83. Nu există aproape nimic să nu pot suporta (îndura) dacă iubesc cu adevărat pe cineva. ",
    "84. Sunt şters şi plictisitor atunci când mă aflu în compania altor persoane. ",
    "85. Simt că nu trebuie să respect regulile, normele şi convenţiile pe care ceilalţi le respectă. ",
    "86. Mi-e foarte greu să sacrific un beneficiu imediat pentru unul mai îndepărtat, chiar dacă acesta din urmă este substanţial. ",
    "87. Mă tem că o decizie greșită ar putea duce la un dezastru. ",
    "88. Sunt prea cerebral ca să-mi mai arăt sentimentele pozitive (grijă, afecţiune) faţă de ceilalţi. ",
    "89. Am atât de multe de îndeplinit, încât nu am aproape deloc timp să mă relaxez cu adevărat. ",
    "90. Cel mai adesea nu accept scuzele prezentate de ceilalți. Pur și simplu nu sunt dispuși să accepte responsabilitatea și plătească consecințele. ",
    "91. Mă simt legat/ă, depind de persoane care nu pot fi mereu lângă mine şi să-mi ofere sprijinul de care am nevoie. ",
    "92. Mulţi oameni nu se gândesc decât la ei. ",
    "93. În general oamenii nu mi-au stat alături cu căldură, intimitate şi afecţiune. ",
    "94. Mă simt întotdeauna marginalizat/ă în grupuri.",
    "95. Simt că nu pot fi iubit/ă.",
    "96. Cred că sunt o persoană dependentă de ceilalţi dacă mă gândesc la viaţa de zi cu zi. ",
    "97. Îmi iau multe precauţii pentru a evita să mă îmbolnăvesc sau să mă rănesc. ",
    "98. Simt adesea că părinţii mei trăiesc prin mine – că nu am o viaţă a mea. ",
    "99. Nu sunt la fel de inteligent/ă ca majoritatea colegilor în probleme de serviciu/de şcoală. ",
    "100. Simt că ceea ce pot oferi are o valoare mai mare decât contribuţia celorlalţi. ",
    "101. Se întâmplă adesea, odată ce am început să mă simt furios, să nu mă mai pot controla. ",
    "102. Simt că deciziile majore din viaţa mea nu au fost chiar ale mele. ",
    "103. Sunt o persoană bună pentru că mă gândesc mai mult la ceilalţi decât mă gândesc la mine. ",
    "104. Oamenii pe care îi apreciez nu s-ar asocia cu mine din cauza statutului meu social (de exemplu: venitul, nivelul de educaţie, reuşita în carieră). ",
    "105. De multe ori sunt obsedat de decizii minore, deoarece consecinţele greselii mi se par atât de grave. ",
    "106. Mi se pare stânjenitor să-mi exprim sentimentele în faţa celorlalţi. ",
    "107. Aproape nimic din ceea ce fac nu este suficient de bun; pot întotdeauna să fac mai bine. ",
    "108. Dacă nu-mi fac treaba, ar trebui să suport consecinţele. ",
    "109. În cele din urmă voi rămâne singur/ă. ",
    "110. Îmi este greu să am încredere în oameni. ",
    "111. În cea mai mare parte din viaţa mea nu am simţit că sunt special/ă pentru cineva. ",
    "112. Nimeni nu mă înţelege cu adevărat. ",
    "113. Sunt prea inacceptabil/ă în multe probleme fundamentale ca să mă dezvălui celorlalţi. ",
    "114. Nu-mi reuşeşte nimic din ceea ce încerc, chiar şi în afara serviciului (sau a şcolii). ",
    "115. Mă tem că voi pierde banii şi voi deveni sărac. ",
    "116. Mi-e foarte greu să-i ţin la distanţă pe oamenii cu care sunt intim; îmi este dificil să mă separ de  ceilalţi şi să-mi definesc identitatea. ",
    "117. Sunt umilit/ă de ratările şi de scăpările mele când muncesc. ",
    "118. Pun de obicei nevoile mele înaintea nevoilor celorlalţi. ",
    "119. Am tendinţa să exagerez cu anumite lucruri, chiar şi atunci când ştiu că ele sunt rele pentru mine. ",
    "120. Îmi fac griji să le fiu pe plac celorlalţi, ca să nu mă respingă. ",
    "121. La serviciu, eu sunt cel care de cela mai multe ori se oferă voluntar să lucreze în plus. ",
    "122. Nu ştiu niciodată ce să spun sau cum să mă adresez în societate. ",
    "123. Mă simt mai bine dacă îmi asum că lucrurile NU vor merge bine pentru mine, ca să nu mă simt dezamăgit atunci când sunt probleme. ",
    "124. Îmi vine greu să fiu prietenos şi spontan. "
  ];
  // Dropdown options
  const options = [
    "1. Complet neadevărat în ceea ce mă privește",
    "2. În cea mai mare parte neadevărat în ceea ce mă privește",
    "3. Mai mult adevărat decât neadevărat",
    "4. Destul de adevărat în ceea ce mă privește",
    "5. În cea mai mare parte adevărat în ceea ce mă privește",
    "6. Mă descrie perfect"
  ];
  const schemaNames = [
    "1. Copil vulnerabil",
    "2. Copil supărat",
    "3. Copil furios",
    "4. Copil impulsiv",
    "5. Copil indisciplinat",
    "6. Copil fericit",
    "7. Capitulat/Conformist",
    "8. Protector detașat",
    "9. Autoliniștitor detașat",
    "10. Supracompensat/Auto-glorificator",
    "11. Agresor și Intimidant",
    "12. Părinte pedepsitor",
    "13. Părinte exigent",
    "14. Adultul sănătos"
  ];
  
  function distributeSchemas() {
    // Initialize 14 empty subarrays
    const schemas = Array.from({ length: 14 }, () => []);

    // Sort numbers from 1 to 124
    const numbers = Array.from({ length: 124 }, (_, i) => i + 1);

    // Distribute numbers to minimize variation between subarrays
    numbers.forEach((num, index) => {
      // Use modulo to cycle through domains
      const schemaIndex = index % 14;
      schemas[schemaIndex].push(num);
    });

    return schemas;
  }

  const schemas = distributeSchemas();

  let schemaDetails;
  const schitem = JSON.parse(localStorage.getItem("schitem"));
  if (schitem && !resetAll) schemaDetails = schitem;
  else schemaDetails = Array(schemaNames.length).fill("");
  let bakResponses;

  async function downloadJsonString(jsonString) {
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "dataToDownload.json"; // You can change this to any desired filename

    document.body.appendChild(link);
    link.click();

    // Clean up (optional)
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
  
  function downloadData() {
    // Example usage:
    const dataToDownload = {
      bakResponses: bakResponses,
      schemaDetails: schemaDetails,
      domainDetails: domainDetails
    };
    const myJsonString = JSON.stringify(dataToDownload);
    downloadJsonString(myJsonString);
  }

  // Încarcă și aplică culorile salvate pentru fiecare element la încărcarea paginii
  function arabicToRoman(num) {
    if (num < 1 || num > 3999) {
      return "Invalid Roman numeral";
    }

    const romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };

    let roman = "";
    for (let key in romanNumerals) {
      while (num >= romanNumerals[key]) {
        roman += key;
        num -= romanNumerals[key];
      }
    }

    return roman;
  }

  function loadSavedColors() {
    const myColors = [
      [0, 184, 255],
      [140, 228, 255],
      [176, 255, 255],
      [255, 255, 0],
      [255, 185, 35],
      [255, 125, 0]
    ];
    for (let i = 1; i <= 6; i++) {
      const className = `magenta${i}`;
      const myColor = myColors[i - 1];
      const savedColor = `rgb(${myColor[0]}, ${myColor[1]}, ${myColor[2]})`;
      document.querySelectorAll(`.${className}`).forEach((el) => {
        el.style.backgroundColor = savedColor;
      });
      document.querySelectorAll(`span .${className}`).forEach((el) => {
        el.style.backgroundColor = savedColor;
      });
    }
  }

  loadSavedColors();
  // Eveniment de click pentru salvarea culorii
  // Obține elementele HTML

  let iy;
  let iyz = null;

  //loadResponses();

  function processResponses(myResponses) {
    const fullname = myResponses.slice(0, 2);
    const antet = document.getElementById("fullname");
    const firstname = fullname[0];
    const lastname = fullname[1];
    antet.innerHTML = `<span class="aldine">Prenume: </span>${firstname}
    <span class="aldine">Nume: </span>${lastname}
    `;
    myResponses = myResponses.slice(2);
    bakResponses = myResponses;
    const questionsContainer = document.getElementById("questions");
    questions.forEach((question, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.className = "question";
      questionDiv.innerHTML = `<p>${question}</p>`;
      // Create a dropdown for each question
      const select = document.createElement("select");
      select.name = `response${index}`;
      options.forEach((option) => {
        const opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        select.appendChild(opt);
      });
      select.selectedIndex = myResponses[index] - 1;
      questionDiv.appendChild(select);
      //questionsContainer.appendChild(questionDiv);
    });
    const scores = Array(schemas.length).fill(0);
    for (let ix = 0; ix < myResponses.length; ix++) {
      const value = parseInt(myResponses[ix]);
      for (let iy = 0; iy < schemas.length; iy++) {
        for (let iw = 0; iw < schemas[iy].length; iw++) {
          if (schemas[iy][iw] === ix + 1) {
            scores[iy] += value;
          }
        }
      }
    }
    displayScores(firstname, lastname, scores);
  }

  //localStorage.removeItem("csvData");
  const storageKey = "csvData";
  let data = localStorage.getItem(storageKey);
  if (data && !resetAll) {
    data = JSON.parse(data);
    bakResponses = data;
    document.getElementById("clinician").classList.add("hidden");
    processResponses(data);
    if (hasQueryParam("test")) downloadData();
  } else {
    document.getElementById("clinician").classList.remove("hidden");
  }

  document.getElementById("processCSV").addEventListener("click", () => {
    let data = localStorage.getItem(storageKey);

    if (data && false) {
      data = JSON.parse(data);
      processResponses(data);
    } else {
      const input = document.getElementById("csvFileInput").files[0];
      const reader = new FileReader();

      reader.onload = function (e) {
        const csv = e.target.result;
        data = csv.split(",");
        localStorage.setItem(storageKey, JSON.stringify(data));
        processResponses(data);
      };

      reader.readAsText(input);
    }
  });

  // Function to find the longest question in a schema
  function findLongestTextWidth(arr) {
    let width = 0;
    arr.forEach((str) => {
      const textMeasure = document.getElementById("text-measure");
      textMeasure.innerText = str;
      if (textMeasure.offsetWidth > width) width = textMeasure.offsetWidth;
    });
    return width;
  }

  function findLongestQuestion(iy) {
    let width = 0;
    for (let ix = 0; ix < schemas[iy].length; ix++) {
      const index = schemas[iy][ix] - 1;
      const question = questions[index];
      const quenr = question.match("^[0-9]+[ ]*")[0];
      const quest00 = question.slice(quenr.length);

      const textMeasure = document.getElementById("text-measure");
      textMeasure.innerText = quest00;
      if (textMeasure.offsetWidth > width) width = textMeasure.offsetWidth;
    }
    return width;
  }

  /*function displayMoreInfo(index) {
    const realIndex = parseInt(index + 1);
    alert(`Domeniul ${arabicToRoman(realIndex)} : ${domainDetails[index]}`);
  }

  function displayDetails(index, score) {
    alert(`Schema: ${index + 1} Scor: ${score}: ${schemaDetails[index]}`);
  }

  function displayInterpretation(index, score) {
    alert(`Schema: ${index + 1} Scor: ${score}: Interpretare indisponibilă`);
  }*/
  function displayScores(firstname, lastname, scores) {
    document.getElementById("clinician").classList.add("hidden");
    const list = document.getElementById("schemaScores");
    list.innerHTML = `
<div class="spacing"></div>
<span class="aldine">Instrucțiuni pentru interpretarea rezultatelor:</span>
<br>Butonul "Titlul categoriei cognitive": Apăsați pentru a obține detalii despre semnificația categoriei cognitive respective.
<br>Butonul "Titlul modului cognitiv": Apăsați pentru a accesa o descriere rezumativă a modului cognitiv.
<br>Butonul "Nr:": Apăsați pentru a vizualiza lista itemilor din chestionar asociați fiecărui mod cognitiv, împreună cu calificativele acestora.
<br>Butonul "Barele de scor": Apăsați pentru a consulta semnificația scorului obținut pentru schema curentă.
<div class="spacing"></div>
<div class="spacing"></div>
<div class="header-record">
    <span class="blk aldine th1">Modurile cognitive clasate pe categorii</span>
    <span class="gap"></span>
    <span class="blk aldine th2">Itemi</span>
    <span class="gap2"></span>
    <span class="blk aldine th3">Analiza scorului</span>
</div>`;
    for (iy = 0; iy < schemas.length; iy++) {
      let qanda = ``;
      let qanda1 = ``; // Reset qanda1 for each schema
      const longestLength = findLongestQuestion(iy);
      const ixmed = Math.floor(schemas[iy].length / 2);
      for (let ix = 0; ix < schemas[iy].length; ix++) {
        const index = schemas[iy][ix] - 1;
        const response = bakResponses[index];

        // Only display the selected question and answer if `iyz` matches `izz`
        if (iyz !== null && iy === iyz) {
          const quest00 = questions[index].match("[ ].*$")[0].slice(1);
          const selected = ix === ixmed ? 1 : 0;
          qanda1 += `<div class="qanda-container qanda-selected${selected}">`;
          qanda1 += `<span class="magenta${response} quenr">${
            index + 1
          }. </span>`;
          qanda1 += `<span class="magenta${response} quest" style="min-width: ${longestLength}px"> ${quest00}</span>
          <span class="gap"></span>
          <span class="magenta${response} ans">R: ${response}</span>`;
          qanda1 += `</div><div class="spacing" style="--spacing: 1pt;"></div>`;
        }
      }
      const li = document.createElement("li");
      const thresholdWidth = schemas[iy].length * 3.5;
      let domain = ``;
      let iy1;
      for (let dx = 0; dx < domains.length; dx++) {
        if (iy === domains[dx][0] - 1) {
          domain += `${domainNames[dx]}`;
          iy1 = dx + 1;
        }
      }
      li.innerHTML = ``;
      try {
        if (domains[iy1 - 1][0] - 1 === iy) {
          li.innerHTML += `<div class="domain domain${iy1} clickable">${domain}</div>`;
        }
      } catch {}
      li.innerHTML += `<div class="container">
  <div class="buttons">
    <button class="li-click clickable">${schemaNames[iy]}</button>
    <button class="schema-click clickable">Nr:&nbsp;${
      schemas[iy].length
    }</button>
  </div>
  <div class="bar-container">
    <div class="bar-wrapper">
      <div class="bar bar1 clickable" style="width: ${
        scores[iy] * 4
      }px">&nbsp;</div>
      <div class="number">${scores[iy]}</div>
    </div>
    <div class="bar-wrapper">
      <div class="bar bar2 clickable" style="width: ${
        thresholdWidth * 4
      }px"></div>
      <div class="number">${Math.floor(schemas[iy].length * 3.5)}</div>
    </div>
  </div>
</div>
  ${qanda}${qanda1}
`;
      list.appendChild(li);
    }
    const arr = [];
    for (let i = 0; i < 232; i++) {
      const el = parseInt(i + 1) + ". ";
      arr.push(el);
    }
    const quenrLength = findLongestTextWidth(arr) + "px";
    document.querySelectorAll(".quenr").forEach((enr) => {
      enr.style.minWidth = quenrLength;
    });
    loadSavedColors();

    // Add click event listeners to each question number
    const domainClasses = ["domain1", "domain2", "domain3"];

    // Select all elements with 'domain' class
    const schemaElements = document.querySelectorAll(".li-click");
    const editDetails = document.getElementById("editDetails");
    editDetails.addEventListener("input", () => {
      editDetails.style.height = "auto";
      editDetails.style.height = editDetails.scrollHeight + "px";
    });
    const pageMain = document.getElementById("pageMain");
    const pageDetails = document.getElementById("pageDetails");
    schemaElements.forEach((element, index) => {
      // Add click event listener to each domain div
      element.addEventListener("click", function () {
        pageDetails.classList.remove("hidden");
        pageDetails.classList.add("show");
        pageMain.classList.add("hidden");
        pageMain.classList.remove("show");
        editDetails.value = schemaDetails[index];
        editDetails.dataset.schindex = index;
      });

      editDetails.addEventListener("blur", function () {
        const index = this.dataset.schindex;
        schemaDetails[index] = this.value;
        localStorage.setItem("schitem", JSON.stringify(schemaDetails));
        pageDetails.classList.add("hidden");
        pageDetails.classList.remove("show");
        pageMain.classList.remove("hidden");
        pageMain.classList.add("show");
        // Remove editable attribute
      });
    });
    // Select all elements with 'domain' class
    const domainElements = document.querySelectorAll(".domain");
    domainElements.forEach((element, index) => {
      // Add click event listener to each domain div
      element.addEventListener("click", function () {
        pageDetails.classList.remove("hidden");
        pageDetails.classList.add("show");
        pageMain.classList.add("hidden");
        pageMain.classList.remove("show");
        editDetails.value = domainDetails[index];
        editDetails.dataset.domindex = index;
      });

      editDetails.addEventListener("blur", function () {
        const index = this.dataset.domindex;
        domainDetails[index] = this.value;
        localStorage.setItem("dditem", JSON.stringify(domainDetails));
        pageDetails.classList.add("hidden");
        pageDetails.classList.remove("show");
        pageMain.classList.remove("hidden");
        pageMain.classList.add("show");
        // Remove editable attribute
      });
    });
    /*domainClasses.forEach((domainItem, index) => {
      const selector = "." + domainItem; // Concatenate the dot and the domainItem
      const doms = Array.from(document.querySelectorAll(selector));
      doms[0].addEventListener("click", function (event) {
        displayMoreInfo(index);
      });
    });*/
    const qs = Array.from(document.querySelectorAll("li .schema-click"));
    qs.forEach((q, index) => {
      q.addEventListener("click", function (event) {
        // Toggle `iyz` based on the clicked question
        iyz = index !== iyz ? index : null;
        displayScores(firstname, lastname, scores);
      });
    });
    /*const qs2 = Array.from(document.querySelectorAll("li .li-click"));
    qs2.forEach((q, index) => {
      q.addEventListener("click", function (event) {
        // Toggle `iyz` based on the clicked question
        iyz = index !== iyz ? index : null;
        displayDetails(index, scores[index]);
        document.querySelectorAll(".qanda-container").forEach((element) => {
          element.classList.remove("qanda-selected1");
        });
      });
    });*/
    const qs3 = Array.from(document.querySelectorAll(".bar"));
    qs3.forEach((q, index) => {
      q.addEventListener("click", function (event) {
        // Toggle `iyz` based on the clicked question
        iyz = index !== iyz ? index : null;
        index = Math.floor(index / 2);
        displayInterpretation(index, scores[index]);
      });
    });
    function centerElement(element) {
      const elementRect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementHeight = elementRect.height;
      const targetY =
        elementRect.top + window.scrollY - (viewportHeight - elementHeight) / 2;

      window.scrollTo({
        top: targetY,
        behavior: "smooth"
      });
    }

    const scrollY = list.offsetTop;
    if (iyz === null) window.scrollTo({ top: scrollY, behaviour: "smooth" });
    const qandaSelected = document.querySelectorAll(".qanda-selected1");
    qandaSelected.forEach((q, index) => {
      centerElement(q);
    });
  }
}

document.addEventListener("DOMContentLoaded", main);
