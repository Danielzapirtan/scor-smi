function main() {
  const domainNames = [
    "I. Separare și Respingere",
    "II. Autonomie și Performanță deficitare",
    "III. Limite deficitare",
    "IV. Dependență de alții sau Orientare către ceilalți",
    "V. Hipervigilență și Inhibiție"
  ];

  function hasQueryParam(paramName) {
    // Get the current URL's search parameters
    const urlParams = new URLSearchParams(window.location.search);

    // Check if the parameter exists
    return urlParams.has(paramName);
  }

  const resetAll = false;

  const domains = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9],
    [10, 11],
    [12, 13, 14],
    [15, 16, 17, 18]
  ];

  let domainDetails;
  const dditem = JSON.parse(localStorage.getItem("dditem"));
  if (dditem && !resetAll) domainDetails = dditem;
  else domainDetails = ["", "", "", "", ""];

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
    "124. Îmi vine greu să fiu prietenos şi spontan. ",
    "125. Trebuie să-mi îndeplinesc corect toate responsabilităţile ce-mi revin. ",
    "126. Ma gândesc adesea la greșelile pe care le-am făcut şi mă simt supărat pe mine însumi. ",
    "127. Când simt că cineva la care ţin se îndepărtează de mine, devin disperat. ",
    "128. Sunt destul de suspicios în ceea ce priveşte scopurile celorlalţi. ",
    "129. Cel mai adesea nu am avut pe cineva care să mă asculte şi să mă înţeleagă cu adevărat sau care să fie în acord cu adevăratele mele nevoi şi sentimente. ",
    "130. Familia mea a fost întotdeauna diferită de familiile din anturajul nostru. ",
    "131. Dacă alţii ar afla de defectele mele fundamentale, n-aş putea să dau faţă cu ei. ",
    "132. Sunt neîndemânatic/ă în cele mai multe domenii ale vieţii. ",
    "133. Mă tem că sufăr de o boală serioasă, chiar dacă nici un medic nu mi-a pus un diagnostic îngrijorător. ",
    "134. Sunt atât de legat de partenerul meu sau de părinţi încât nu ştiu cu adevărat cine sunt sau ce vreau. ",
    "135. Deseori mă simt jenat (stingherit) în preajma altor oameni pentru că nu mă pot compara cu ei în ceea ce priveşte realizările. ",
    "136. Simt adesea că sunt atât de implicat/ă în priorităţile mele încât nu am timp pentru prieteni sau familie. ",
    "137. Mă plictisesc foarte uşor. ",
    "138. Mi-e foarte greu să cer ca drepturile să-mi fie respectate şi să se ţină seama de sentimentele mele. ",
    "139. Oricât aş fi de ocupat/ă, întotdeauna pot să găsesc timp pentru ceilalţi. ",
    "140. Oamenii nu vor să mă includă în grupurile lor. ",
    "141. Ma concentrez mai mult pe aspectele negative ale vietii si ale evenimentelor decat pe cele pozitive. ",
    "142. Mă controlez atât de mult încât oamenii cred despre mine că sunt lipsit/ă de emoţii. ",
    "143. Simt că se exercită o presiune constantă asupra mea să-mi îndeplinesc sarcinile şi să duc lucrurile la bun sfârşit. ",
    "144. Când oamenii fac ceva rău, am probleme în a pune în practică expresia Iartă si uită. ",
    "145. Uneori sunt atât de îngrijorat/ă că oamenii mă vor părăsi încât, ca să nu fiu părăsit/ă, îi îndepărtez. ",
    "146. Ceilalţi nu sunt cinstiţi decât rar; de obicei nu sunt ceea ce par. ",
    "147. Rareori a existat o persoană puternică să-mi dea sfaturi sănătoase sau îndrumări, atunci când nu eram sigur/ă de ceea ce trebuie să fac. ",
    "148. Uneori sunt ca şi cum aş fi cu totul străin/ă de cei din jurul meu. ",
    "149. Când oamenii mă plac, simt că îi duc de nas (cred că o să le înşel aşteptările). ",
    "150. Dacă mă iau după propria judecată, în situaţiile de zi cu zi, voi alege hotărârea greşită. ",
    "151. Sunt o persoană temătoare. ",
    "152. Am probleme în a-mi separa punctul de vedere sau opiniile de cele ale părinţilor sau ale partenerului meu. ",
    "153. Deseori îmi compar realizările cu alţii şi simt că ei sunt mult mai plini de succes. ",
    "154. Oamenii îmi spun adesea că sunt tipicar (în legătură cu modurile în care fac lucrurile). ",
    "155. Când sarcinile devin dificile, de obicei nu pot persevera şi nu le pot duce la bun sfârşit. ",
    "156. Nu prea ripostez oamenilor şi nu-mi exteriorizez furia. ",
    "157. Mă ocup de mine foarte puţin pentru că nevoile mele sunt minimale. ",
    "158. Sunt foarte atent/ă la tot ceea ce fac atunci când sunt în preajma altor oameni. ",
    "159. Tind să fiu pesimist. ",
    "160. Oamenii consideră că sunt foarte încordat şi tensionat emoţional. ",
    "161. Relaţiile mele cu ceilalţi suferă deoarece mă forţez şi mă controlez prea mult. ",
    "162. Țin ranchiună, chiar și după ce cineva și-a cerut scuze. ",
    "163. Mă supăr atunci când cineva mă părăseşte, chiar şi pentru o perioadă scurtă de timp. ",
    "164. De obicei vreau să aflu scopurile ascunse pe care le urmăresc oamenii. ",
    "165. Dacă aş dispărea mâine, nimeni nu ar remarca absenţa mea. ",
    "166. Adesea mă simt atras/ă de persoane care sunt foarte critice şi mă resping. ",
    "167. Mă îngrijorez foarte tare de lucrurile rele care se întâmplă în lume: crimă, poluare etc. ",
    "168. Simt adesea că nu am intimitate când vine vorba de părinţii sau de partenerul/a meu/mea. ",
    "169. Îmi lipseşte intuiţia şi simţul comun. ",
    "170. Mă enervez foarte tare când oamenii nu fac ceea ce le cer. ",
    "171. Nu mă pot concentra prea mult la nimic. ",
    "172. Sunt în stare să fac mai multe sacrificii decât majoritatea oamenilor pentru a evita o confruntare sau un conflict. ",
    "173. Sunt fericit dacă cei din jurul meu sunt fericiţi. ",
    "174. Dacă fac observatii la o întâlnire sau sunt prezentat la o adunare, aştept cu nerăbdare recunoaștere si admiratie. ",
    "175. Oamenii apropiați mă consideră un îngrijorat mereu. ",
    "176. Sănătatea mea suferă pentru că mă supun unei presiuni atât de mari ca să fac ceea ce fac. ",
    "177. Ma supar cand cred ca cineva a fost „lăsat să scape” prea ușor. ",
    "178. Nu pot conta pe sprijinul permanent al apropiaţiilor mei. ",
    "179. Dacă mă gândesc că cineva urmăreşte să mă rănească, încerc să-l rănesc eu mai întâi. ",
    "180. Am secrete de care nu vreau să afle cei apropiaţi. ",
    "181. Cred că ceilalţi nu trebuie să se încreadă în judecata mea, nici chiar în situaţiile simple, cotidiene. ",
    "182. Simt adesea că aş putea să înnebunesc.",
    "183. Simt că părinţii mei ar fi foarte răniţi dacă aş trăi singur departe de ei. ",
    "184. Nu pot tolera ca alţii să-mi spună ce să fac. ",
    "185. Nu mă pot forţa să fac lucruri care nu-mi plac, chiar când ştiu că este spre binele meu. ",
    "186. Sunt atât de ocupat să fac ceva pentru oamenii la care ţin, încât am puţin timp pentru mine. ",
    "187. Multe laude și complimente mă fac să mă simt o persoană care merită. ",
    "188. Dacă oamenii devin prea entuziasmați de ceva, mă simt inconfortabil și am tendința să-i avertizez despre ce ar putea merge prost. ",
    "189. Îmi sacrific adesea fericirea şi plăcerea ca să fiu la înălţimea standardelor pe care mi le stabilesc. ",
    "190. Mă enervez cand oamenii isi găsesc scuze sau dau vina pe altii în locul lor. ",
    "191. Nu-mi fac prieteni deoarece nu pot fi sigur de loialitatea lor. ",
    "192. Trebuie ca mai întâi oamenii să-mi dovedească cine sunt cu adevărat, înainte să pot avea încredere în ei. ",
    "193. Este vina mea că părinţii mei n-au putut să mă iubească îndeajuns. ",
    "194. Nu am încredere în abilităţile mele de a rezolva problemele zilnice care apar. ",
    "195. Simt adesea că voi avea o criză de anxietate (că o să-mi pierd controlul din cauza fricii). ",
    "196. Îmi pierd cumpătul la cea mai mică ofensă. ",
    "197. Am fost întotdeauna cel (cea) care asculta problemele tuturor. ",
    "198. Când fac o greşeală merit să fiu criticat/ă dur. ",
    "199. Nu contează de ce greșesc; când fac ceva greșit, ar trebui să plătesc. ",
    "200. Mi se pare că oamenii care îmi sunt apropiaţi se perindă mereu prin viaţa mea şi nu rămân alături de mine decât pentru foarte puţin timp. ",
    "201. Pun la cale „teste” pentru ceilalţi ca să văd dacă spun adevărul sau dacă sunt bine intenţionaţi. ",
    "202. Nu-i las pe ceilalţi să mă cunoască cu adevărat. ",
    "203. Simt că am nevoie de cineva pe care să mă bizui ca să-mi dea sfaturi în problemele practice. ",
    "204. Mă îngrijorez adesea că aş putea face infarct, chiar dacă sunt puţine motive, din punct de vedere medical, să fiu îngrijorat. ",
    "205. Am fost de puţine ori capabil/ă să mă ţin de hotărârile mele. ",
    "206. Mă simt mai bine când fac un cadou decât atunci când primesc unul. ",
    "207. Nu mă dezic repede şi nu mă scuz uşor pentru greşelile mele. ",
    "208. Mă critic aspru pentru greșelile pe care le fac sau pentru lucrurile pe care le dau peste cap. ",
    "209. Mă îngrijorez că oamenii pe care îi iubesc vor prefera pe altcineva şi mă vor părăsi. ",
    "210. Subscriu la credinţa: Controlează sau vei fi controlat. ",
    "211. Una din cele mai mari frici ale mele este că defectele îmi vor fi descoperite. ",
    "212. Mă simt mai degrabă ca un copil decât ca un adult când vine vorba de a face faţă responsabilităţilor de zi cu zi. ",
    "213. Simt că lumea este un loc primejdios. ",
    "214. Nu pot aproape niciodată să mă abţin de la a arăta oamenilor ce simt cu adevărat, indiferent cât m-ar costa acest lucru. ",
    "215. Alţi oameni cred despre mine că nu fac destul pentru mine şi fac prea mult pentru ceilalţi. ",
    "216. Sunt o persoană foarte competitivă. ",
    "217. Sunt o persoană rea care merită să fie pedepsită. ",
    "218. Oamenii apropiați mie au fost foarte imprevizibili și certăreți; la un moment dat erau disponibili și drăguți cu mine; imediat după aceea erau nervoși, supărați, absorbiți de ei înșiși. ",
    "219. Mă enervez gândindu-mă la modul în care am fost maltratat de ceilalţi în cursul vieţii mele. ",
    "220. Nu pot să înţeleg cum m-ar putea iubi cineva. ",
    "221. Responsabilitatea vieţii de zi cu zi mi se pare copleşitoare. ",
    "222. Fac adesea lucruri în mod impulsiv şi le regret mai târziu. ",
    "223. Oricât de mult aş oferi celorlalţi, nu este niciodată destul. ",
    "224. Pun un mare preţ pe bani sau pe poziţia socială şi profesională. ",
    "225. Am nevoie de ceilalţi atât de mult, încât îmi fac griji că-i voi pierde. ",
    "226. În cursul vieţii mele cei apropiaţi mie au profitat de mine sau m-au folosit pentru propriile lor scopuri. ",
    "227. Dacă fac doar ceea ce vreau, nu mă simt bine deloc. ",
    "228. Trebuie să fiu mereu „Numărul unu” în domeniul în care lucrez sau învăţ. ",
    "229. Mă simt lipsit/ă de apărare dacă nu există cineva care să-mi ofere sprijin, iar atunci când cineva mă ajută mă tem să nu-l pierd. ",
    "230. Oamenii importanţi din viaţa mea au abuzat de mine fizic sau emoţional. ",
    "231. Îmi este foarte greu să le cer altora să aibă grijă de nevoile mele. ",
    "232. Nu pot fi eu însumi şi nici nu pot exprima ceea ce simt cu adevărat deoarece apropiaţii mei mă vor părăsi. "
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
    "1. Abandon/Instabilitate AB",
    "2. Neîncredere/Abuz MA",
    "3. Deprivare Emoțională ED",
    "4. Izolare socială/Înstrăinare SI",
    "5. Deficienţă/Ruşine DS",
    "6. Dependenţă/Incompetenţă DI",
    "7. Vulnerabilitate în fața pericolelor și a îmbolnăvirilor VH",
    "8. Protecționism/Personalitate Atrofiată/Sine infantil EM",
    "9. Eșec FA",
    "10. Îndreptățire/Dominanță/Grandomanie ET",
    "11. Lipsa de Autocontrol și Autodisciplină IS",
    "12. Subjugare SB",
    "13. Sacrificiu de Sine SS",
    "14. Indezirabilitate Socială/Nevoie de Aprobare SU/AS",
    "15. Negativism/Pesimism NP",
    "16. Inhibiție Emoțională/Autocontrol Exagerat EI",
    "17. Standarde Nerealiste/Exigență/Hipercriticism US",
    "18. Pedepsire/Spirit justițiar PU"
  ];

  const schemas = [
    [
      1,
      19,
      37,
      55,
      73,
      91,
      109,
      127,
      145,
      163,
      178,
      191,
      200,
      209,
      218,
      225,
      229,
      232
    ],
    [
      2,
      20,
      38,
      56,
      74,
      92,
      110,
      128,
      146,
      164,
      179,
      192,
      201,
      210,
      219,
      226,
      230
    ],
    [3, 21, 39, 57, 75, 93, 111, 129, 147],
    [4, 22, 40, 58, 76, 94, 112, 130, 148, 165],
    [5, 23, 41, 59, 77, 95, 113, 131, 149, 166, 180, 193, 202, 211, 220],
    [6, 24, 42, 60, 78, 96, 114, 132, 150, 169, 181, 194, 203, 212, 221],
    [7, 25, 43, 61, 69, 97, 115, 133, 151, 167, 182, 195, 204, 213],
    [8, 26, 44, 62, 80, 98, 116, 134, 152, 168, 183],
    [9, 27, 45, 63, 81, 99, 117, 135, 153],
    [10, 28, 46, 64, 85, 100, 118, 136, 154, 170, 184],
    [11, 29, 47, 65, 86, 101, 119, 137, 155, 171, 185, 196, 205, 214, 222],
    [12, 30, 48, 66, 82, 102, 120, 138, 156, 172],
    [
      13,
      31,
      49,
      67,
      83,
      103,
      121,
      139,
      157,
      173,
      186,
      197,
      206,
      215,
      223,
      227,
      231
    ],
    [14, 32, 50, 68, 84, 104, 122, 140, 158, 174, 187],
    [15, 33, 51, 69, 87, 105, 123, 141, 159, 175, 188],
    [16, 34, 52, 70, 88, 106, 124, 142, 160],
    [17, 35, 53, 71, 89, 107, 125, 143, 161, 176, 189, 198, 207, 216, 224, 228],
    [18, 36, 54, 72, 90, 108, 126, 144, 162, 177, 190, 199, 208, 217]
  ];

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

    if (data) {
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
<br>Butonul "Titlul domeniului cognitiv": Apăsați pentru a obține detalii despre semnificația domeniului cognitiv respectiv.
<br>Butonul "Titlul schemei cognitive": Apăsați pentru a accesa o descriere rezumativă a schemei cognitive.
<br>Butonul "Nr:": Apăsați pentru a vizualiza lista itemilor din chestionar asociați fiecărei scheme cognitive, împreună cu calificativele acestora.
<br>Butonul "Barele de scor": Apăsați pentru a consulta semnificația scorului obținut pentru schema curentă.
<div class="spacing"></div>
<div class="spacing"></div>
<div class="header-record">
    <span class="blk aldine th1">Schemele cognitive clasate pe domenii</span>
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
    const domainClasses = [
      "domain1",
      "domain2",
      "domain3",
      "domain4",
      "domain5"
    ];

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
