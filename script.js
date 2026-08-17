/* Dharini Birthday — LIVE LOCKED VERSION */
const PREVIEW_MODE = false;
const IST_OFFSET = "+05:30";
const birthday = Date.parse("2026-08-27T00:00:00+05:30");
const FIRST_MEET_DATE = "2023-07-10";

const memories = [
  {
    gift: 1,
    unlock: "2026-08-17T00:00:00+05:30",
    title: "FIRST TRADITIONAL DAY 🥻",
    question: "Namma office-ku vandha apram idhu dhaan namma first traditional day. Endha festival-ku namma traditional-ah dress pottu vandhom? 👀",
    options: ["🪔 Diwali", "🌼 Onam", "🌾 Pongal"], answer: 0,
    wrong: "Konjam innum yosichu paaru. 👀",
    correct: "Correct! Diwali dhaan! ❤️",
    photo: "day1.png",
    story: `Namma office-ku vandha apram idhu dhaan namma first traditional day.<br><br>
    Nee, naan traditional-ah vandhom, and Kamesh romba traditional-ah varalana kooda, oru alavukku namma match pannitaan. 😂<br><br>
    Namma moonu perum veliya suthittu, jolly-ah, andha stairs pakkathula, elevator-la irukkura sofa set-la ukkandhu photos eduthu, neraya pesittu irundhom.<br><br>
    It was one memorable day for us. ❤️<br><br>
    <div class="story-divider">♡</div>
    <p>Even though namma rendu perum same day join pannala naalum, un kooda ippadi oru friendship build aagumnu naan serious ah expect pannala.</p>
    <p>Actually, everything started from a process called Home Automation. 👀</p>
    <p>I don't know if you remember... but exactly anga dhaan everything started.</p>
    <p>Yaarunu correct-ah nyabagam illa... Vaishnavi-aa illa vera yaaravadhu, namakku Home Automation process assign pannanga.</p>
    <p>Appo dhaan naan un kooda first time work panna aarambichen.</p>
    <p>Adhula dhaan namma pesa aarambichom...</p>
    <p>Photos eduthu WhatsApp-la pottutu, “Idhukku enna podureenga?”<br>“Idhukku enna podureenga?” 😂</p>
    <p>Appadiye konjam konjama pesinom... and somehow, everything just continued from there.</p>
    <p>Andha oru process moolama start aana friendship, nee en life-la ippadi oru important part-a aagiduva-nu naan konjam kooda expect pannala. ❤️</p>
    <p>Adhukkapparam namma vera edhulayum onna work pannala.</p>
    <p>Aana andha one process-la start aana friendship eppadi ivlo perusa build aachu-nu enakkume ippo varaikkum puriyala. 😂</p>
    <p>It just continued...<br>continued...<br>and continued till now. ❤️</p>
    <p>Neriya ups and downs irundhaalum...</p>
    <p>You have always been special to me.</p>
    <p>You will always be that one pretty bundle of irritation in a modern package. 😂❤️</p>
    <p>I've seen your happiness.<br>I've seen your secrets.<br>I've seen your ups.<br>I've seen your downs.<br>I've seen your love.</p>
    <p>I've seen so many versions of you.</p>
    <p>And everything you've shared with me...<br>I'll hold it forever. ❤️</p>
    <p>Because...</p>
    <h4>This friendship is for life. ❤️</h4>`
  },
  {
    gift: 2,
    unlock: "2026-08-19T00:00:00+05:30",
    title: "THE MORNING MEETING SPOT 😂",
    question: "Namma rendu perum separate cabs-la office-ku varuvom. 8 o'clock-ku munnaadi, everyday morning namma enga meet pannuvom? 👀",
    options: ["A. 6th Floor", "B. LS", "C. Ground Floor Restroom", "D. Scrum Area", "E. All of these 😌"], answer: 4,
    wrong: "Inga mattuma namma meet pannirukkom? 😂",
    correct: "YESSS! Correct! 😂❤️",
    photo: "day2.png",
    story: `<p>Actually, namma enga meet pannuradhu-nu oru mukkiyamaana vishayam decide pannum... <strong>Adhu un makeup-a poruthadhu dhaan.</strong> 😂💄</p>
    <p>💄 <strong>Nee makeup pottutu vandirukka + serious matter illa:</strong><br>→ Cafeteria ☕</p>
    <p>💄 <strong>Nee makeup pottutu vandirukka + edho oru problem:</strong><br>→ Scrum area 💀</p>
    <p>😭 <strong>Nee makeup pannama vandirukka:</strong><br>→ LS / Ground Floor Restroom 😂</p>
    <p>Aana enga meet pannalum...</p>
    <p><strong>Kadaisila naan en place-ku poguradhu 8 o'clock dhaan. 😌😂</strong></p>
    <p>And especially <strong>evening-la...</strong> 😂</p>
    <p>Naan <strong>4:45-ku logout pannalum, 5:15-ku dhaan cab pidippen.</strong><br><strong>Ellame unnaala dhaan!</strong> 😭😂</p>
    <p>5:15 cab-ku, nee <strong>5:13-ku</strong> dhaan locker kitta varuva. 😂</p>
    <p>Anga irundhu <strong>5th floor-la irundhu B3 varaikkum, literally ten floors, appadiye odi poganum.</strong> 🏃‍♀️🏃‍♀️😂</p>
    <p>Appappo kadupaa irukkum... 😭<br>But honestly, <strong>adhuvum oru long-lasting memory.</strong> ❤️</p>
    <p>And all those phone calls...</p>
    <p><strong>Hours and hours and hours.</strong> 📞😂</p>
    <p>Ippavum kooda hours-a pesittu irukkom...<br><strong>Niruthave maatom.</strong> 😂❤️</p>
    <p>You have always been <strong>a pillar of strength to me.</strong> ❤️</p>
    <p>I just want you to be <strong>much more happier, the happiest</strong> in your life, with everything you're wishing for.</p>
    <p><strong>And definitely, you will.</strong> ❤️</p>`
  },
  {
    gift: 3,
    unlock: "2026-08-21T00:00:00+05:30",
    title: "OUR FIRST OUTING 🚗❤️",
    question: "Namma moonu perum first time car-la serndhu veliya pona place edhu? 👀",
    options: ["A. Forum Mall", "B. VR Mall", "C. Writer's Cafe, Tharamani"], answer: 1,
    wrong: "Konjam innum yosichu paaru. 👀",
    correct: "Correct! VR Mall dhaan! ❤️",
    photo: "day3.png",
    story: `<p>Kamesh birthday-ku munnaadi office-la cake cut pannitu, adhukkapparam dhaan namma moonu perum first time veliya pona outing! ❤️</p>
    <p>Namma VR Mall poitu, anga irundha Writer's Cafe-la poi saaptom. 😂</p>
    <p>Saaptuttu, nalla suthittu, paathuttu, enjoy pannittu veetukku poom.</p>
    <p>Andha bypass road-la pona drive romba pleasant-ah, oru super-aana long drive + outing madhiri irundhudhu. 🚗✨</p>
    <p>Office mudichuttu, namma moonu perum first time serndhu veliya pona day adhu. ❤️</p>
    <p>Adhukkapparam namma neraya vaati veliya poirukkom. ❤️</p>
    <p>Naan office vittu vandha piragu, first time nee enga veetukku vandhappo, annaikkum namma besant nagar beach ponom. 🌊</p>
    <p>Adhuvum oru long drive. 🚗❤️</p>
    <p>And all those movies which we watched... 😂 Gore, Rocky...</p>
    <p>Enna dhaan nee Hail mary movie paathu azhudhuttu irundhaalum, nee azhuradhu paakradhe oru fun! 😭😂</p>
    <p>Engalukku dhaan thookam vandhudhu...</p>
    <p>Adhuvum oru semma memory.</p>
    <p>And everything... all our outings. ❤️</p>
    <p>VR-la irukkura Writer's Cafe,<br>Tharamani Writer's Cafe,<br>Adyar Writer's Cafe...</p>
    <p>Namma ella Writer's Cafe-kum poittom! 😂</p>
    <p>Andha same pizza and chicken wings... 🍕🍗<br>Ennaikkume maaradhu. 😂</p>
    <p>Epo enga ponaalum, angellaam namma best time spend pannirukkom. ❤️</p>
    <p>And all those car rides... 🚗</p>
    <p>Andha car rides-la namma pesuna talks...</p>
    <p>Serious-a irukkattum,<br>fun-a irukkattum,<br>depression-a irukkattum...</p>
    <p>Ellame namma pesirukom.</p>
    <p>Vera yaar kitta ippadi pesuradhu?<br>Vera yaaru irukka? ❤️</p>
    <p>Remember that time...</p>
    <p>Adhu namakku oru stress-buster day madhiri irukkum. 🥹</p>
    <p>Seriously, very lucky to have you as my friend. ❤️</p>
    <p>Not only as a friend...</p>
    <p>Having you in my life itself is a very blessed thing for me. ❤️</p>
    <p>Konjam over-ah dhaan irukku... 😂</p>
    <p>But irundhaalum solluven.</p>
    <p>Advance birthday wishes, beautiful girl. ❤️🎂</p>`
  },
  {
    gift: 4,
    unlock: "2026-08-23T00:00:00+05:30",
    title: "WAYANAD MEMORIES 🌿❤️",
    type: "text",
    question: "Wayanad trip-la, namma 900 Kandi Glass Bridge poitu, thirumbi varra vazhiyila oru restaurant-la saaptom. Andha restaurant-oda name enna? 👀",
    acceptedAnswers: ["1980's", "1980s", "1980’s", "1980"],
    wrong: "Aiyo 😂 konjam yosichu paaru...",
    correct: "Correct! 1980's dhaan! ❤️",
    photo: "day4.png",
    story: `<p>Wayanad trip-la, <strong>resort-larundhu kelamburadhukku munnadiye oru photo shoot vera!</strong> 📸😂<br><strong>“Naan unga Sukumaran...”</strong> 😭😂<br>I still have that reel! 💀</p>
    <p>Adhukkulla <strong>leech vera!</strong> 🪱😭</p>
    <p>Adhukkappuram <strong>jeep safari ponom.</strong> 🚙🌿<br><strong>Andha jeep trip-a marakkave mudiyadhu. Semmayaana trip!</strong> 😂❤️</p>
    <p>Appuram <strong>900 Kandi Glass Bridge-ku ponom.</strong> 🌉</p>
    <p>Anga poi <strong>avlo bayandhuttu...</strong> 😭😂<br>Appuram <strong>andha tree bridge-la eri</strong>, anga ninnu photos eduthuttu... 📸</p>
    <p><strong>Adhukkappuram gun shooting vera!</strong> 🔫😂</p>
    <p>Ellame mudichuttu, thirumbi varra vazhiyila <strong>1980's restaurant-ku poi saaptom.</strong> 🍽️</p>
    <p>Andha <strong>thenga paal, prawn, Kamesh-ku pidikkadha oru biryani, fried rice</strong>... 😂</p>
    <p>Adhukkapparam <strong>bird park, boat ride, python, birds</strong>-nu...<br><strong>vera level!</strong> 🐍🦜🚣‍♀️😂</p>
    <p>Resort-ku return aagumbodhu <strong>oru kutty tea vera.</strong> ☕😂</p>
    <p><strong>Veralevel day! ❤️</strong></p>
    <p>And that whole <strong>road trip through the Bandipur forest</strong>... 🌿🚗<br>Especially that resort... <strong>enna maadhiri resort!</strong> ❤️</p>
    <p>Anga saapta food, andha place, andha environment... everything. 🥹</p>
    <p>Seriously, <strong>I never expected that we would have such a beautiful trip.</strong></p>
    <p>Namma <strong>Bangalore-la panna shopping, D-Mart...</strong> everything. 😂</p>
    <p><strong>It was such an unimagined trip for me.</strong><br>And I guess, <strong>for you too.</strong> ❤️</p>
    <p>And yes... trip mudichuttu vandha apram namakku <strong>neraya fights-um vandhudhu.</strong> 😂</p>
    <p>Aana adhu edhuvume en heart-la irundhu vandhadhu illa.<br><strong>Ellame oru urimai-la dhaan.</strong></p>
    <p>Andha moment-la irundha emotions... adhanala vandha sanda.<br>Aana adhukkapparamum namma <strong>bounce back pannitom.</strong> ❤️</p>
    <p>You have always been <strong>a good soul, a good person, a lovable person.</strong> ❤️</p>
    <p>And all your <strong>smile and laughter</strong> will always remain in my memories and in my heart. ❤️</p>`
  },
  {
    gift: 5,
    unlock: "2026-08-25T00:00:00+05:30",
    title: "THE LAST AMAZON DAY ❤️",
    type: "text",
    question: "Namma Amazon-la last time meet pannadhu eppo? 👀<br><strong>Nalla yosichu sollu...</strong>",
    acceptedAnswers: ["17/04/2025", "17-04-2025", "17.04.2025", "17 04 2025", "2025-04-17"],
    wrong: "Aiyo... konjam innum yosichu paaru. 🥹",
    correct: "Correct... 17/04/2025. ❤️",
    photo: "day5.png",
    story: `<p>Andha naal dhaan namma Amazon-la onna irundha last day.</p>
    <p>Neriya emotions.<br>Neriya laughs.<br>Neriya photos. ❤️</p>
    <p>Andha photos-la idhuvum enakku romba memorable.<br><strong>In fact, naan idha daily basis-la paakra oru photo.</strong> 🥹</p>
    <p>I don't want to just say <strong>“thank you”</strong> for giving me such a lovable friend from Amazon.</p>
    <p><strong>I just want you to stay forever.</strong> ❤️</p>
    <p>Nee pod-la azhudhuttu irundha...</p>
    <p>I just didn't want to break out that day.<br><strong>But after seeing you crying, I just couldn't hold my tears.</strong> 🥹</p>
    <p>Adhanala dhaan naan unna <strong>proper-ah bye kooda sollama, appadiye unna vittuttu poitten.</strong></p>
    <p>Ennaalaum adha handle panna mudiyala... ❤️</p>
    <p><strong>And thank God for giving me such a wonderful friend.</strong> ❤️</p>
    <p>I don't know what our future looks like...</p>
    <p><strong>But if there is a chance, maybe someday we'll end up in the same office again.</strong> ❤️</p>
    <p>And if that happens, I hope we get to create all those memories <strong>which we missed creating before.</strong> 🥹</p>
    <p><strong>More laughs, more outings, more random talks... and many more memories together.</strong> ❤️</p>`
  }
];

const finalLetter = `
<p>Dear Dharini🩷🫂</p>
<p>Wishing you many, many, many, many more happy returns of the day! 🥳🎂❤️</p>
<p>I want you to be more happy, happier, happiest throughout this day — and not only this day, but throughout your life. 🥰✨</p>
<p>Always, I’ll love you — not only now. I want our friendship to go beyond the sea. 🌊❤️</p>
<p>Idha ezhudhumbodhu konjam emotional-ah dhaan irundhuchu. 🥹 But, naan namma kooda irundha sila memories-a dhaan indha letter-la share panniruppen. Aana un kooda enakku irukkura memories romba romba romba neraya — ups, downs, happy moments, silly moments, everything. Namma munnadi sonna maadhiri dhaan. ❤️</p>
<p>You have been such an awesome friend to me. Not only a friend, you are more than that — and you know that. And if you don’t, please andha nyabagam vachukkonga. 😌❤️ Ungalukku adhulaye endha oru doubt-um vendaam! 😂</p>
<p>Always sirichitte iru. 😄❤️ Clip pottadhaan nalla irukkum nu ela! 😂 Clip podaamaliyum nalla dhaan irukkum nee siricha 😌😂</p>
<p>Eppavum pola happy-ah, sandhoshama iru. ❤️✨</p>
<p>I don't want this to become a very emotional letter. 😂 Because eppadiyum varusham varusham ezhuthanum la, indha varushame ellathayum sollitta, next year ku content irukadhu 😂</p>
<p>So, apart from all the jokes, I’m genuinely so grateful to have your friendship in my life. ❤️</p>
<p>I’ll always love you, I’ve always loved you, I’m loving you, and I’ll love you for the rest of my life. ❤️🫶</p>
<p>Happy Birthday, Lusu! 🎂🥳❤️</p>
<p class="letter-sign">Yours, Jay ❤️</p>`;

function updateCountdown() {
  const diff = birthday - Date.now();
  const vals = diff <= 0 ? [0,0,0,0] : [Math.floor(diff/86400000), Math.floor(diff/3600000)%24, Math.floor(diff/60000)%60, Math.floor(diff/1000)%60];
  ["days","hours","minutes","seconds"].forEach((id,i)=>document.getElementById(id).textContent=String(vals[i]).padStart(2,"0"));
}
setInterval(updateCountdown,1000); updateCountdown();

const $ = id => document.getElementById(id);
$("enterButton").addEventListener("click",()=>{$("secretMessage").classList.add("show");$("secretMessage").scrollIntoView({behavior:"smooth"});});
$("maybeButton").addEventListener("click",()=>{$("identityBox").style.display="none";$("maybeResponse").classList.add("show");});
$("tryAgainButton").addEventListener("click",()=>{$("maybeResponse").classList.remove("show");$("identityBox").style.display="block";});
$("obviouslyButton").addEventListener("click",()=>{$("identityBox").style.display="none";$("dateQuestion").classList.add("show");$("dateQuestion").scrollIntoView({behavior:"smooth",block:"center"});});
$("verifyDateButton").addEventListener("click",()=>{
  const value=$("firstMeetDate").value;
  if(!value){$("dateResult").textContent="😑 Date enter pannunga madam.";return;}
  if(value===FIRST_MEET_DATE){
    $("dateResult").textContent="🎉 Correct!";
    setTimeout(()=>{$("dateQuestion").classList.remove("show");$("firstMeetReveal").classList.add("show");$("firstMeetReveal").scrollIntoView({behavior:"smooth",block:"center"});confetti();},400);
  } else $("dateResult").textContent="❌ Aiyooo... first meet date-ah marandhutiya? 😭 Try again!";
});
$("openArchiveButton").addEventListener("click",()=>{$("memoryArchive").classList.add("show");$("memoryArchive").scrollIntoView({behavior:"smooth"});renderMemories();});


function unlockedAt(iso){return PREVIEW_MODE || Date.now() >= Date.parse(iso);}
function readable(iso){return new Intl.DateTimeFormat("en-IN",{day:"numeric",month:"long",year:"numeric",hour:"numeric",minute:"2-digit",hour12:true,timeZone:"Asia/Kolkata"}).format(new Date(iso));}
function shortDate(iso){return new Intl.DateTimeFormat("en-IN",{day:"numeric",month:"short",year:"numeric",timeZone:"Asia/Kolkata"}).format(new Date(iso));}

function giftArt(){
  return `<div class="gift-box-art" aria-hidden="true"><div class="gift-bow"></div><div class="gift-lid"></div><div class="gift-base"></div><div class="gift-ribbon-v"></div><div class="gift-ribbon-h"></div></div>`;
}

function renderMemories(){
  const grid=$("memoryGrid");
  grid.innerHTML="";
  memories.forEach(memory=>{
    const card=document.createElement("article");
    const isOpen=unlockedAt(memory.unlock);
    card.className="gift-box-card"+(isOpen?"":" locked");
    card.innerHTML=`<span class="gift-number">${memory.gift}</span>${giftArt()}<div class="gift-unlock-label">GIFT ${memory.gift}</div><h3>${memory.title}</h3>${memory.gift===1?`<div class="gift-status">🔓 OPEN NOW</div>`:`<div class="gift-date">${shortDate(memory.unlock)}</div><div class="gift-status">${isOpen?"🔓 OPEN":"🔒 LOCKED"}</div>`}`;
    if(isOpen){
      card.addEventListener("click",()=>openGift(memory.gift));
      card.setAttribute("role","button");
      card.setAttribute("tabindex","0");
      card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openGift(memory.gift);}});
    } else {
      card.addEventListener("click",()=>showLockedMessage(card,memory));
    }
    grid.appendChild(card);
  });
  updateFinal();
}

function showLockedMessage(card,memory){
  const old=card.querySelector(".lock-pop");
  if(old) old.remove();
  const pop=document.createElement("div");
  pop.className="lock-pop";
  pop.textContent=`🔒 Opens on ${readable(memory.unlock)} IST`;
  Object.assign(pop.style,{position:"absolute",left:"10px",right:"10px",bottom:"10px",background:"rgba(255,255,255,.96)",padding:"9px 8px",borderRadius:"12px",fontSize:"11px",fontWeight:"800",color:"#a05d7d",boxShadow:"0 8px 18px rgba(90,50,90,.12)"});
  card.appendChild(pop);
  setTimeout(()=>pop.remove(),2200);
}

function openGift(giftNumber){
  const memory=memories.find(m=>m.gift===giftNumber);
  if(!memory || !unlockedAt(memory.unlock)) return;
  $("giftDashboard").style.display="none";
  const detail=$("memoryDetail");
  detail.className="memory-detail show";
  detail.innerHTML=`
    <div class="memory-detail-head">
      <span class="gift-tag">🎁 GIFT ${memory.gift}</span>
      <button class="back-to-gifts" type="button">← Back to gifts</button>
    </div>
    <article class="memory-detail-card">
      <h2>${memory.title}</h2>
      <div class="memory-detail-question">${memory.question}</div>
      <div class="detail-answer-area">
        ${memory.type==="text"
          ? `<input class="memory-input" type="text" placeholder="Type your answer..." autocomplete="off"><button class="memory-submit">🔓 Unlock Memory</button>`
          : `<div class="detail-options">${memory.options.map((o,i)=>`<button class="detail-option" data-answer="${i}">${o}</button>`).join("")}</div>`}
        <div class="detail-result"></div>
      </div>
      <div class="detail-reveal">
        <div class="detail-photo-wrap">
          <img class="detail-photo" src="${memory.photo}" alt="Gift ${memory.gift} memory">
          <div class="detail-photo-overlay"><span>🔒</span><span>Memory locked...</span></div>
        </div>
        <div class="detail-story">${memory.story}</div>
        <div class="detail-complete">✅ GIFT ${memory.gift} MEMORY UNLOCKED ❤️</div>
      </div>
    </article>`;

  detail.querySelector(".back-to-gifts").addEventListener("click",()=>{
    detail.className="memory-detail";
    detail.innerHTML="";
    $("giftDashboard").style.display="block";
    renderMemories();
    $("memoryArchive").scrollIntoView({behavior:"smooth",block:"start"});
  });

  const reveal=()=>{
    const result=detail.querySelector(".detail-result");
    result.textContent=memory.correct;
    detail.querySelector(".detail-reveal").classList.add("show");
    const wrap=detail.querySelector(".detail-photo-wrap");
    setTimeout(()=>wrap.classList.add("revealed"),250);
    detail.querySelectorAll(".detail-option, .memory-input, .memory-submit").forEach(x=>x.disabled=true);
    confetti();
  };

  detail.querySelectorAll(".detail-option").forEach(b=>b.addEventListener("click",()=>{
    Number(b.dataset.answer)===memory.answer
      ? reveal()
      : detail.querySelector(".detail-result").textContent="❌ "+memory.wrong;
  }));

  if(memory.type==="text"){
    const input=detail.querySelector(".memory-input"), submit=detail.querySelector(".memory-submit");
    const norm=v=>v.toLowerCase().trim().replace(/[’‘]/g,"'").replace(/\s+/g,"");
    const check=()=>memory.acceptedAnswers.map(norm).includes(norm(input.value))
      ? reveal()
      : detail.querySelector(".detail-result").textContent="❌ "+memory.wrong;
    submit.addEventListener("click",check);
    input.addEventListener("keydown",e=>{if(e.key==="Enter")check();});
  }
  detail.scrollIntoView({behavior:"smooth",block:"start"});
}

function updateFinal(){
  const open=PREVIEW_MODE || Date.now()>=Date.parse("2026-08-27T00:00:00+05:30");
  $("finalLock").textContent=open?"🔓":"🔒";
  $("finalSub").textContent=open?"It's your birthday. You made it to the last one. ❤️":"Not yet, Dharini. Konjam wait pannu... 👀";
  $("openLetterButton").classList.toggle("hidden",!open);
}

$("openLetterButton").addEventListener("click",()=>{
  $("giftDashboard").style.display="none";
  $("letterContent").innerHTML=finalLetter;
  $("letter").classList.add("show");
  $("letter").scrollIntoView({behavior:"smooth",block:"start"});
  confetti();
});

function confetti(){const emojis=["💗","💕","💖","✨","🎀","🌸","🎉","🥳"];for(let i=0;i<28;i++){const el=document.createElement("div");el.textContent=emojis[Math.floor(Math.random()*emojis.length)];Object.assign(el.style,{position:"fixed",left:Math.random()*100+"vw",top:"-30px",fontSize:(15+Math.random()*20)+"px",zIndex:9999,pointerEvents:"none"});document.body.appendChild(el);const d=1500+Math.random()*1800;el.animate([{transform:"translateY(0) rotate(0deg)",opacity:1},{transform:"translateY(110vh) rotate(720deg)",opacity:0}],{duration:d,easing:"ease-out"});setTimeout(()=>el.remove(),d);}}
