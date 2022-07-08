let div = document.createElement('div');
div.className = 'container w-50 py-5';
let div2 = document.createElement('div');
div2.className = 'row justify-content-center text-center fixed-top bg-header';

let col = document.createElement('div');
col.className = 'col-md-11';
col.innerHTML = '<img src="asset/img/logo.webp" alt="Logo" width="120px" class="img-fluid border-bottom m-2">';

div.append(div2);
div2.append(col);

document.querySelector('#app').append(div);

// ==================================================
let container = document.createElement('div');
container.className = 'container';
let row = document.createElement('div');
row.className = 'row justify-content-center px-2';

let button = document.createElement('div');
button.className = 'd-flex col-md-8 col-lg-9';
button.innerHTML = `<a href="#" target="_blank" class="btn btn-outline-warning rounded-pill w-100 my-1 m-2">Login</a>
<a href="#" class="btn btn-outline-warning rounded-pill w-100 my-1 m-2">Register</a>`;

let colRef = document.createElement('div');
colRef.className = 'col-sm-11 col-md-8 col-lg-9';
colRef.innerHTML = `<a href="https://13.213.113.183/mobile/register" rel="nofollow noreferrer" target="_blank"><button type="login" class="button w-100 text-black fs-5 my-3">
Hoki138 Daftar Situs Judi 138 Slot Online Terpercaya Dan Terbaik</button></a>`;

let rowbank = document.createElement('div');
rowbank.className = 'row justify-content-center text-center mb-4';
// let colBom = document.createElement('div');
// colBom.className = 'col-md-8 col-lg-9';
// colBom.innerHTML = '<img src="asset/img/bom.png" alt="Logo" width="150px" class="img-fluid m-2">';

let colBank = document.createElement('div');
colBank.className = 'col-sm-11 col-md-7 col-lg-8';
let borderBank = document.createElement('div');
borderBank.className = 'border-bank p-3';
borderBank.innerHTML = ' <img src="asset/img/bank.webp" alt="Bank Lokal" class="img-fluid" width="792px" height="auto" />';

container.append(row, rowbank);
row.append(button, colRef);

rowbank.append(colBank);
colBank.append(borderBank);

// ==================================================

document.querySelector('#app').append(container);

let containerTable = document.createElement('div');
containerTable.className = 'container';
let rowTable = document.createElement('div');
rowTable.className = 'row justify-content-center text-white px-3';
let divColTable = document.createElement('div');
divColTable.className = 'col-md-8 col-lg-9';
let divTable = document.createElement('div');
divTable.className = 'table';
divTable.id = 'table';


let table = document.createElement('table');
table.className = 'list_table';
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

containerTable.append(rowTable);
rowTable.append(divColTable);
divColTable.append(divTable);
divTable.append(table);
table.append(thead, tbody);

// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Tentang Situs Slot Online Mentari138";
heading_1.setAttribute("colspan", "3");

row_1.appendChild(heading_1);
thead.appendChild(row_1);

// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.setAttribute("class", "p-2");
row_2_data_1.innerHTML = "Nama Situs";
let row_2_data_2 = document.createElement('td');
row_2_data_2.setAttribute("class", "p-2");
row_2_data_2.innerHTML = '<a href="https://13.213.113.183/" title="BomSlot" rel="noopener"target="_blank">BomSlot</a>';

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
tbody.appendChild(row_2);

// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.setAttribute("class", "p-2");
row_3_data_1.innerHTML = "Jenis Permainan";
let row_3_data_2 = document.createElement('td');
row_3_data_2.setAttribute("class", "p-2");
row_3_data_2.innerHTML = '<a href="#" title="Slot Online">Slot Online</a></td>';

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
tbody.appendChild(row_3);

// Creating and adding data to third row of the table
let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.setAttribute("class", "p-2");
row_4_data_1.innerHTML = "Minimal Deposit";
let row_4_data_2 = document.createElement('td');
row_4_data_2.setAttribute("class", "p-2");
row_4_data_2.innerHTML = 'Rp20.000';

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
tbody.appendChild(row_4);

// Creating and adding data to third row of the table
let row_5 = document.createElement('tr');
let row_5_data_1 = document.createElement('td');
row_5_data_1.setAttribute("class", "p-2");
row_5_data_1.innerHTML = "Metode Deposit";
let row_5_data_2 = document.createElement('td');
row_5_data_2.setAttribute("class", "p-2");
row_5_data_2.innerHTML = 'Transfer Bank, E-Wallet/QRIS, Pulsa';

row_5.appendChild(row_5_data_1);
row_5.appendChild(row_5_data_2);
tbody.appendChild(row_5);

// Creating and adding data to third row of the table
let row_6 = document.createElement('tr');
let row_6_data_1 = document.createElement('td');
row_6_data_1.setAttribute("class", "p-2");
row_6_data_1.innerHTML = "Mata Uang";
let row_6_data_2 = document.createElement('td');
row_6_data_2.setAttribute("class", "p-2");
row_6_data_2.innerHTML = 'IDR (Indonesian Rupiah)';

row_6.appendChild(row_6_data_1);
row_6.appendChild(row_6_data_2);
tbody.appendChild(row_6);

// Creating and adding data to third row of the table
let row_7 = document.createElement('tr');
let row_7_data_1 = document.createElement('td');
row_7_data_1.setAttribute("class", "p-2");
row_7_data_1.innerHTML = "Jam Operasional";
let row_7_data_2 = document.createElement('td');
row_7_data_2.setAttribute("class", "p-2");
row_7_data_2.innerHTML = '24 Jam Online';

row_7.appendChild(row_7_data_1);
row_7.appendChild(row_7_data_2);
tbody.appendChild(row_7);

// Creating and adding data to third row of the table
let row_8 = document.createElement('tr');
let row_8_data_1 = document.createElement('td');
row_8_data_1.setAttribute("class", "p-2");
row_8_data_1.innerHTML = "Daftar Sekarang";
let row_8_data_2 = document.createElement('td');
row_8_data_2.setAttribute("class", "p-2");
row_8_data_2.innerHTML = '<a href="https://13.213.113.183/mobile/register" rel="nofollow noopener"target="_blank" title="Daftar Slot Online BomSlot">Klik Disini</a>';

row_8.appendChild(row_8_data_1);
row_8.appendChild(row_8_data_2);
tbody.appendChild(row_8);
// Adding the entire table to the body tag
document.querySelector('#app').appendChild(containerTable);


let containerContent = document.createElement('div');
containerContent.setAttribute("class", "container bg-card py-4");

let rowContent = document.createElement('div');
rowContent.setAttribute("class", "row justify-content-center text-white");

let colBanner = document.createElement('div');
colBanner.setAttribute("class", "col-md-8 col-lg-12 text-center");
let titleBanner = document.createElement('p');
titleBanner.setAttribute("class", "fs-4");
titleBanner.innerHTML = 'Situs Slot Online Terpercaya Indonesia';

let imgBanner = document.createElement('div');
imgBanner.setAttribute("class", "text-center");
imgBanner.innerHTML = '<img src="asset/img/bomslot-3.jpg" class="img-fluid border" alt="banner"><hr style="color: #FFFFFF;">';

let colBody = document.createElement('div');
colBody.setAttribute("class", "col-md-8 col-lg-11");

let titleBody = document.createElement('h1');
titleBody.setAttribute("class", "text-warning text-center");
titleBody.innerHTML = 'Hoki138 Daftar Situs Judi 138 Slot Online Terpercaya Dan Terbaik';

let divBody = document.createElement('div');
divBody.setAttribute("class", "text-white");

let descBody = document.createElement('p');
descBody.className = 'justify';
descBody.innerHTML = `Para pemain pasti saat ini tengah mencari situs judi Hoki138 slot online terpercaya, Kini anda bisa memainkan permainan slot dengan berada di rumah saja. 
Perkembangan teknologi yang begitu pesat memberikan keuntungan bagi para pemain slot karena tentunya mereka tidak harus lagi pergi ke casino untuk menikmati permainan judi. <br><br>
Hoki138 hadir untuk membantu pemain menemukan situs judi slot online yang terpercaya, dengan hadirnya kami para pemain tidak perlu khawatir dengan situs yang akan menipu anda karena 
kami sudah bekerja sama dengan pemegang lisensi slot resmi international. <br> <br> 
Di luar sana ada begitu banyak situs judi slot online yang beredar, tapi tentu saja tidak semua dapat dipercaya sebab ada begitu banyak situs slot online palsu yang tidak membayarkan 
kemenangan anda. Daftar Situs Judi Slot online Terpercaya Hoki 138 dapat memberikan pemain kepuasan dalam bermain karena 100% kemenangan anda akan kami bayarkan penuh tanpa ada 
kecurangan sama sekali. Hoki 138 slot juga menyediakan rangkaian jam permainan slot gampang jackpot saat ini yang bisa anda coba untuk mainkan dari provider Pragmatic Play Slot 
Online permainan dengan jackpot tak terbatas.
`;

let titleBody_2 = document.createElement('h2');
titleBody_2.setAttribute("class", "text-warning text-center");
titleBody_2.innerHTML = 'Daftar 10 Situs Judi Slot Online Paling Resmi Hoki 138';

let divBody_2 = document.createElement('div');
divBody_2.setAttribute("class", "text-white");

let descBody_2 = document.createElement('p');
descBody_2.className = 'justify';
descBody_2.innerHTML = `Pilihan situs judi slot online paling resmi Hoki138 selalu memberikan keuntungan terbesar kepada para pemain slot saat ini. Di kenal sebagai situs judi 
slot online terpercaya dan terbaik Hoki138 menghadirkan permainan slot online resmi dengan jaminan pemain mendapatkan keuntungan terbuka lebar dari situs slot terpercaya kami. 
Hoki138 akan memberikan anda 12 daftar situs judi online paling resmi indonesia dengan potensi mendapatkan maxwin terbuka lebar yang bisa anda mainkan setiap hari. <br><br>
<ol>
<li><b>Slot Online Pragmatic Play</b><br>
Slot online pragmatic play adalah provider game slot yang sangat terkenal di Indonesia. Ada begitu banyak pilihan permainan yang bisa anda mainkan d
ari provider ini seperti Gates of Olympus, Sweet Bonanza, Starlight Princess, Great Rhino <br><br>
Megaways. Pragmatic Play selalu menyajikan permainan dengan tingkat perkalian hingga x500 dengan tingkat deposit yang rendah. 
</li><br>
<li><b>Slot Online PGSOFT</b><br>
Provider PGSOFT adalah pendiri permainan slot online dengan tema dan suasana permainan yang menarik. Hampir seluruh permainan slot online yang didirikan oleh PGSOFT 
menghadirkan banyak cerita baru dengan kemenangan jackpot sangat besar. Mahjong Ways adalah permainan slot yang bisa anda coba ketika bermain di provider judi online terpercaya ini. </li><br>
<li><b>Slot Online Microgaming</b><br>
Selanjutnya adalah Microgaming selalu menjadi perbincangan orang-orang karena sejatinya permainan yang dihadirkan tidak kalah menarik dengan Provider Slot Online lain. 
Microgaming sudah berdiri cukup lama dan menghadirkan permainan slot online gampang maxwin dengan perkalian hingga belasan juta rupiah.</li><br>
<li><b>Slot Online Spadegaming</b>
Provider selanjutnya yaitu Spadegaming adalah pendiri beragam permainan judi slot online yang bisa anda mainkan setiap harinya tanpa mengenal waktu karena tentunya 
seluruh permainan slot online Spadegaming bisa anda mainkan 24 jam penuh dimana saja dengan 1 User ID saja.</li><br>
<li><b>Slot Online Toptrend Gaming</b><br>
Provider Slot Online Playtech menghadirkan beragam permainan slot online terpercaya yang bisa anda mainkan setiap hari. Toptrend Gaming mempunyai berbagai permainan slot online yang gampang 
menang dan telah mendapat berbagai penghargaan dari Komunitas Slot International saat ini. Jadi untuk para pemain jangan ragu untuk mencoba permainan slot dari Toptrend Gaming.<br></li><br>
<li><b>Slot Online Habanero</b><br>
Rangkaian Provider Slot Habanero selalu menghadirkan jackpot yang bisa didapatkan oleh para pemain dengan deposit yang rendah. Provider slot online habanero menyajikan permainan slot yang 
bisa anda mainkan secara cuma-cuma dengan ratusan permainan slot online paling gampang maxwin di Indonesia saat ini.</li><br>
<li><b>Slot Online BBIN</b><br>
Slot BBIN merupakan provider slot yang dikenal oleh para member Hoki138 karena hampir seluruh permainan slot mereka mudah untuk dimenangkan dengan hadiah jackpot hingga puluhan juta rupiah. 
Untuk mendapatkan jackpot dari provider ini tidaklah sulit pemain hanya cukup bermain dan mencoba pola-pola jitu yang mengantarkan anda menuju kemenangan.</li><br>
<li><b>Slot Online BBP</b><br>
Saat ini jika anda tengah mencari permainan slot online dengan perkalian hingga ratusan tentu anda sudah berada di provider yang tepat. BBP sudah menjadi unggulan bagi para pemain dengan 
bonus maxwin mencapai puluhan juta rupiah tentunya. Permainan slot dari BBP ini bisa anda mainkan setiap hari tanpa mengenal waktu, ayo segera raih bonus jackpot dari permainan slot ini 
dengan bergabung menjadi member Hoki138.</li><br>
<li><b>Slot Online BNG</b><br>
BNG merupakan provider permainan slot online dengan chance untuk mendapatkan kemenangan sangat tinggi. Seluruh permainan slot online dari BNG tengah menjadi bahan perbincangan banyak orang 
sebab saat ini para pemain selalu mendapatkan jackpot terbesar dengan perkalian hingga puluhan kali. Dengan modal anda yang tidak besar kesempatan anda untuk mendapatkan jackpot puluhan 
juta rupiah bukanlah hal yang sulit.</li><br>
<li><b>Slot Online Joker 123</b><br>
Joker123 tengah menjadi bahan perbincangan banyak orang sebab sistem permainan serta kinerja yang dihadirkan memberikan kenyamanan dalam bermain slot. Joker123 menghadirkan permainan slot 
yang sangat fairplay dengan perkalian hingga puluhan dengan tingkat rtp hingga 96.8% khusus para member Hoki 138 slot.</li><br>
</ol>`;


let titleBody_3 = document.createElement('h2');
titleBody_3.setAttribute("class", "text-warning text-center justify-content-between");
titleBody_3.innerHTML = 'Hoki 138 Slot Daftar 5 Permainan Situs Judi Slot Online Terbaik Dan Terpercaya No 1';

let divBody_3 = document.createElement('div');
divBody_3.setAttribute("class", "text-white justify");

let descBody_3 = document.createElement('p');
descBody_3.innerHTML = `Saat ini hoki 138 selalu menghadirkan rangkaian permainan situs judi slot online terbaik dan terpercaya yang bisa anda mainkan setiap harinya. Maka itu para pemain 
saat ini pasti akan merasa sangat senang dengan keunggulan menarik dari Hoki138 di tahun 2022 ini. Berikut adalah 5 permainan situs judi slot online terbaik dan terpercaya pilihan 
Hoki 138 slot paling resmi saat ini :<br><br>
<ol>
<li><b>138 Slot Gates of Olympus - Pragmatic Play</b><br>
Gates of Olympus sudah menjadi permainan judi slot online yang sangat populer saat ini. Ada begitu banyak teknik jitu untuk para pemain slot online dalam meraih jackpot terbesar saat ini, 
kesempatan pemain untuk meraih kemenangan dalam permainan slot online ini. 
</li><br>
<li><b>138 Slot Mahjong Ways - PGSOFT</b><br>
Mahjong ways memiliki sistem permainan yang sangat menarik dengan tingkat pertaruhan yang rendah pemain berkesempatan untuk mendapatkan jackpot sangat terbuka lebar. Mahjong Ways telah 
menghadirkan banyak sekali orang kaya baru karena setidaknya dengan perputaran yang mereka berikan pemain berkesempatan mendapatkan maxwin dengan perkalian sangat tinggi dari permainan 
judi slot online ini.</li><br>
<li><b>138 Slot 777 Surge - Microgaming</b><br>
777 Surge mungkin terbilang cukup awam bagi para pemain slot online tetapi mereka harus ketahui bahwa tingkat kemenangan dalam permainan judi slot online satu ini sangatlah mudah dan besar. 
Pemain bisa berkesempatan mendapatkan jackpot hingga puluhan juta rupiah serta ratusan juta rupiah ketika mencoba permainan slot online terbaru ini. RTP dari permainan judi slot online 
Hoki138 ini hingga 97.4% sangat besar sekali bukan ?</li><br>
<li><b>138 Slot Hot hot fruit - Habanero</b><br>
Tingkat pemain mendapatkan maxwin jackpot dalam permainan slot online ini sangatlah besar, pemain hanya membutuhkan 2x kesempatan untuk mendapatkan jackpot dari permainan judi slot online 
provider Habanero ini. Hot hot fruit juga dikenal sebagai pemberi jackpot gratis oleh para member hoki138 slot ini.
</li>
</ol>
Itulah 5 pilihan permainan situs judi slot online terbaik dan terpercaya indonesia yang bisa anda coba mainkan setiap harinya. Ayo segera coba permainan slot online pilihan 
kami dan raih jackpot sebanyak banyaknya.`;

let titleBody_4 = document.createElement('h2');
titleBody_4.setAttribute("class", "text-warning text-center");
titleBody_4.innerHTML = '3 Kriteria Situs Slot Online Uang Asli Indonesia Paling Nyaman Dari Admin Hoki138';

let divBody_4 = document.createElement('div');
divBody_4.setAttribute("class", "text-white");

let descBody_4 = document.createElement('p');
descBody_4.innerHTML = `Situs slot online menggunakan uang asli menghasilkan banyak keberuntungan setiap hari. Taruhan situs hoki138 dengan uang sungguhan di website adalah kegiatan 
yang menyenangkan bagi semua orang. Kini anda bisa menjalankan permainan judi dengan sistem online yang tentunya akan memudahkan semua penggemarnya. Saat memasang game, anda tidak akan keberatan lagi. 
Berjudi di Indonesia merupakan kegiatan yang dikecam oleh pemerintah. Maka kami hadir sebagai situs online yang memberikan kemudahan untuk semua kalangan penggemar. Kalian bisa bermain dengan 
lebih aman dan nyaman kapan saja. Bersama kami khususnya, kalian tidak perlu mengeluarkan banyak uang apabila ingin berjudi, sebab website kami sudah siapkan beberapa range. Jika tidak ingin menerima 
resiko besar, maka pergunakan dana rendah untuk memasang slot online disini.<br><br>
<b>Kemudahan memasang judi di situs online indonesia</b><br>
Perbedaannya terlihat jelas ketika anda memainkan game dirumah atau ditempat secara langsung. Di mana anda akan merakasan konsentrasi maksimal.<br><br>
<ul>
<li><b>Member hanya perlu menyiapkan smarthphone</b><br>
Karena anda hanya perlu memainkannya dengan smartphone, tidak ada gangguan dari orang lain. Tentu hal ini membuat anda selalu fokus pada game yang sedang dimainkan. Sementara permainan slot dari 
hoki 138 yang diterapkan di tempat langsung membuat konsentrasi anda terganggu. Jadi pada masa maju dan modern seperti sekarang, kalian dianjurkan untuk masuk ke dalam website dalam dunia internet 
dan memulai semua taruhan yang disukai.</li><br>
<li><b>Lebih aman daripada tempat umum</b><br>
Bahkan saat memasang game tidak akan pernah merasa nyaman. Di Indonesia, permainan judi belum aman, oleh karena itu sistem online akan membuat semua orang lebih nyaman dan terjaga. Anda seharusnya 
dapat mengaturnya bersama kami sekarang. Anda bisa bermain taruhan di situs slot hoki138 uang asli dengan smartphone atau komputer yang mudah diakses. Anda hanya perlu memilih dan datang langsung 
ke situs online yang membuat anda yakin telah memilihnya.</li><br>
<li><b>Keamanan selalu terjamin</b><br>
Setelah menemukan situs yang tepat, anda harus mendaftar segera, gratis. Setelah itu anda bisa menjalankan game tersebut tanpa rasa takut, semuanya sangat aman. Jadi ada banyak pengalaman yang bisa 
anda dapatkan dan lakukan saat bermain game judi dengan tempat seperti kami. <br><br>
Pertama, anda akan merasakan jaminan pelayanan dari admin customer service yang selalu memberikan bantuan hingga 24 jam. Jika anda mengalami kendala atau kendala saat memasang taruhan slot online 
tentunya anda bisa bertanya kepada admin yang mengoperasikan website tersebut.
</li>
</ul>
Jadi tunggu apalagi, daftar sekarang dan dapatkan banyak uang nyata keberuntungan bersama kami dalam waktu singkat. Jadi kalian semua bisa memasang slot online menggunakan modal terjangkau, semoga 
banyak hal menarik yang anda temukan saat bermain di situs slot online hoki138.`;

let titleBody_7 = document.createElement('h2');
titleBody_7.setAttribute("class", "text-warning text-center");
titleBody_7.innerHTML = 'FAQ - Pertanyaan Umum Seputar Situs Judi Slot Online Terpercaya HOKI138';

let divBody_7 = document.createElement('div');
divBody_7.setAttribute("class", "text-white");

let descBody_7 = document.createElement('p');
descBody_7.innerHTML = `<b>Q: Apakah situs judi slot Hoki138 bisa dipercayai ?</b><br>
A : Tentu saja, Hoki138 sudah dikenal baik oleh situs judi slot online terpercaya indonesia karena kami sudah bekerja sama selama beberapa tahun ini dengan pemegang lisensi resmi PAGCOR saat ini 
dengan berbagai keuntungan lainnya. Hoki138 siap membantu anda untuk memenuhi keinginan anda dalam bermain judi slot online setiap harinya.  <br><br>

<b>Q : Provider apa saja yang disediakan oleh Hoki138 ?</b><br>
A : Hoki138 menyediakan belasan provider slot online saat ini yang bisa kalian mainkan setiap harinya tanpa mengenal waktu. Berikut pilihan provider yang bisa anda mainkan ketika bergabung dengan kami : <br>
<ul>
<li>Provider Slot Online Pragmatic Play</li>
<li>Provider Slot Online Microgaming</li>
<li>Provider Slot Online PGSOFT</li>
<li>Provider Slot Online Toptrend Gaming</li>
<li>Provider Slot Online Habanero</li>
<li>Provider Slot Online BBIN</li>
<li>Provider Slot Online BBP</li>
<li>Provider Slot Online Spadegaming</li>
<li>Provider Slot Online Joker123</li>
<li>Provider Slot Online Playstar</li>
<li>Provider Slot Online CQ9</li>
<li>Provider Slot Online BNG</li>
<li>Provider Slot Online MMG</li>
<li>Provider Slot Online Slot88</li>
</ul>

<b>Q : Metode Deposit Apa saja yang disediakan Oleh Hoki138</b><br>
A : Hoki138 menyediakan begitu banyak pilihan untuk anda melakukan deposit <br>
<ul>
<li>Bank Lokal : BCA, Mandiri, CIMB, BNI dan BRI</li>
<li>Deposit Pulsa : XL Dan Telkomsel</li>
<li>Deposit E-Wallet : Ovo, Gopay, dan Dana</li>
</ul>
`;

containerContent.append(rowContent);
rowContent.append(colBanner, colBody);
colBanner.append(titleBanner, imgBanner);
colBody.append(titleBody, divBody, titleBody_2, divBody_2, titleBody_3, divBody_3, titleBody_4, divBody_4, titleBody_7, divBody_7);
divBody.append(descBody);
divBody_2.append(descBody_2);
divBody_3.append(descBody_3);
divBody_4.append(descBody_4);
divBody_7.append(descBody_7);

// TABLE DI CONTENT
// let tableContent = document.createElement('table');
// tableContent.className = 'list_table';
// let theadContent = document.createElement('thead');
// let tbodyContent = document.createElement('tbody');

// containerContent.append(rowContent);
// rowContent.append(colBody);
// colBody.append(tableContent);
// tableContent.append(theadContent, tbodyContent);

// // Creating and adding data to first row of the table
// let row_1_content = document.createElement('tr');
// let heading_1_content = document.createElement('th');
// heading_1_content.innerHTML = "Slot Online Bomslot";
// heading_1_content.setAttribute("colspan", "3");

// row_1_content.appendChild(heading_1_content);
// theadContent.appendChild(row_1_content);

// // Creating and adding data to second row of the table
// let row_2_content = document.createElement('tr');
// let row_2_data_1_content = document.createElement('td');
// row_2_data_1_content.setAttribute("class", "tab-title p-2");
// row_2_data_1_content.innerHTML = "Nama Game:";
// let row_2_data_2_content = document.createElement('td');
// row_2_data_2_content.setAttribute("class", "p-2");
// row_2_data_2_content.innerHTML = 'Slot Online';

// row_2_content.appendChild(row_2_data_1_content);
// row_2_content.appendChild(row_2_data_2_content);
// tbodyContent.appendChild(row_2_content);

// // Creating and adding data to third row of the table
// let row_3_content = document.createElement('tr');
// let row_3_data_1_content = document.createElement('td');
// row_3_data_1_content.setAttribute("class", "p-2");
// row_3_data_1_content.innerHTML = "Platform:";
// let row_3_data_2_content = document.createElement('td');
// row_3_data_2_content.setAttribute("class", "p-2");
// row_3_data_2_content.innerHTML = 'ANDROID, IOS, WINDOWS, OSX, dan WEB';

// row_3_content.appendChild(row_3_data_1_content);
// row_3_content.appendChild(row_3_data_2_content);
// tbodyContent.appendChild(row_3_content);

// // Creating and adding data to third row of the table
// let row_4_content = document.createElement('tr');
// let row_4_data_1_content = document.createElement('td');
// row_4_data_1_content.setAttribute("class", "p-2");
// row_4_data_1_content.innerHTML = "Kategori:";
// let row_4_data_2_content = document.createElement('td');
// row_4_data_2_content.setAttribute("class", "p-2");
// row_4_data_2_content.innerHTML = 'Game';

// row_4_content.appendChild(row_4_data_1_content);
// row_4_content.appendChild(row_4_data_2_content);
// tbodyContent.appendChild(row_4_content);

// // Creating and adding data to third row of the table
// let row_5_content = document.createElement('tr');
// let row_5_data_1_content = document.createElement('td');
// row_5_data_1_content.setAttribute("class", "p-2");
// row_5_data_1_content.innerHTML = "Rating:";
// let row_5_data_2_content = document.createElement('td');
// row_5_data_2_content.setAttribute("class", "p-2");
// row_5_data_2_content.innerHTML = '5 (7785188 suara )';

// row_5_content.appendChild(row_5_data_1_content);
// row_5_content.appendChild(row_5_data_2_content);
// tbodyContent.appendChild(row_5_content);

// // Creating and adding data to third row of the table
// let row_6_content = document.createElement('tr');
// let row_6_data_1_content = document.createElement('td');
// row_6_data_1_content.setAttribute("class", "p-2");
// row_6_data_1_content.innerHTML = "Minimal Deposit:";
// let row_6_data_2_content = document.createElement('td');
// row_6_data_2_content.setAttribute("class", "p-2");
// row_6_data_2_content.innerHTML = 'Rp. 10.000';

// row_6_content.appendChild(row_6_data_1_content);
// row_6_content.appendChild(row_6_data_2_content);
// tbodyContent.appendChild(row_6_content);

// Content After Table 
// let divBody_5 = document.createElement('div');
// divBody_5.setAttribute("class", "text-white mt-4");

// let descBody_5 = document.createElement('p');
// descBody_5.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ipsum soluta ver. <ul> <li>Sweet Bonanza</li><li>Gate of Olympus (Slot Zeus)</li><li>Aztec Gems</li><li>Jokers Jewels </li ><li>Starlight Princess </li><li>Wild West Gold </li></ul >  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quas exercitationem non. Cum repudiandae reprehenderit, animi debitis esse iste facere, ratione qui ut itaque deleniti';

// colBody.append(divBody_5);
// divBody_5.append(descBody_5);

// Adding the entire table to the body tag
document.querySelector('#app').appendChild(containerContent);

// FOOTER
let footer = document.createElement('footer');
footer.setAttribute("class", "text-center");

let conFoo = document.createElement('div');
conFoo.setAttribute("class", "container text-white-50 py-2");

let textFoo = document.createElement('h5');
textFoo.setAttribute("class", "fs-6");
textFoo.innerHTML = 'copyright &copy; 2022 by Mentari138';

footer.append(conFoo);
conFoo.append(textFoo);
document.querySelector('#app').appendChild(footer);

// FOOTER MENU
let fixedFooter = document.createElement('div');
fixedFooter.className = 'fixed-footer d-lg-none';
fixedFooter.innerHTML = '<a href="https://13.213.113.183/mobile/promotion" rel="nofollow noopener" target="_blank"><img max-height="10" width="25" src="https://res.cloudinary.com/jh88/image/upload/v1636153463/MENANG8/bonus_nrpcrt.webp" alt="Bonus Promo BomSlot"></img> Bonus</a>';

let link1 = document.createElement('a');
link1.setAttribute("href", "#", "rel", "nofollow noopener", "target", "_blank");
link1.className = 'tada';
link1.innerHTML = '<img class="center" height="25" width="25" src="https://res.cloudinary.com/jh88/image/upload/v1636153463/MENANG8/user_mhgeva.svg" alt="Daftar Slot Online BomSlot"></img> Daftar';

let link2 = document.createElement('a');
link2.setAttribute("href", "#", "rel", "nofollow noopener", "target", "_blank");
link2.innerHTML = '<img class="center" height="15" width="15" src="https://res.cloudinary.com/jh88/image/upload/v1636153462/MENANG8/whatsapp_kcggke.svg" alt="Whatsapp"></img> Whatsapp';

let link3 = document.createElement('a');
link3.setAttribute("href", "#", "rel", "nofollow noopener", "target", "_blank");
link3.innerHTML = '<img class="center" height="15" width="15" src="https://res.cloudinary.com/jh88/image/upload/v1636153462/MENANG8/live-chat_qnj9vv.svg" alt="Live Chat"></img> Live Chat';

fixedFooter.append(link1, link2, link3);
document.querySelector('#app').appendChild(fixedFooter);