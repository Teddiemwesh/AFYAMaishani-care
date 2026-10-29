// COMPLETE - OFFICIAL + DISTRIBUTOR CENTERS - ALL AUTO ALLOCATE
const branchAddressMap = {
// NAIROBI OFFICIAL
"Nairobi - Mfangano Street Branch": "Rainbow Downtown Hotel, Mfangano Street, Nairobi CBD - BF Suma HQ",
"Nairobi - Kasarani Branch": "Kasarani - Mwiki Road, Nairobi - Kasarani Branch",
"Nairobi - Kayole Branch": "Kayole Spine Road, Opp. Naivas, Kayole, Nairobi",
"Nairobi - Zimmerman Branch": "Zimmerman Estate, Off Kamiti Road, Nairobi",
"Nairobi - Shauri Moyo Branch": "Butecho Road, Shauri Moyo, Nairobi",
"Nairobi - Ngara Branch": "Ngara, Near Fig Tree, Nairobi County",
// COAST
"Mombasa Branch": "Ambalal House, Digo Road, Mwembe Tayari, Mombasa - BF Suma Mombasa",
"Kilifi Branch": "Kilifi Town, Kilifi Plaza, Kilifi-Malindi Road, Kilifi County",
"Kwale Branch": "Kwale Town, Kwale Plaza, Next to Kwale Hospital, Kwale County",
// EASTERN
"Machakos Branch": "Off Machakos-Wote Road, Near Syokimau Road, Machakos Town",
"Kitui Branch": "Kitui Town, Kitui Business Centre, Kitui Town Center",
"Kitengela Branch": "Off Kitengela Prisons Road, Kitengela Town, Kajiado County",
"Mtito Andei Branch": "Mtito Andei Town, Along Mombasa Road, Makueni County",
"Meru Branch": "Meru Town, Greenwood City Mall, 2nd Floor, Meru-Embu Road, Meru County",
"Embu Branch": "Embu Town, Embu Town Plaza, Embu-Meru Road, Embu County",
// RIFT VALLEY
"Nakuru Branch": "Nakuru Town, Eldoret Metro Tower, 4th Floor, Room 1 - Next to Naivas, Nakuru CBD",
"Eldoret Branch": "Eldoret Town, Zion Mall, 1st Floor, Room 12, Oloo Street, Eldoret CBD",
"Kericho Branch": "Kericho Town, Kericho Arcade, 2nd Floor, Tea Hotel Road, Kericho",
"Bomet Branch": "Bomet Town, Bomet Arcade, 2nd Floor, Next to Bomet Stadium, Bomet",
"Narok Branch": "Narok Town, Oltalet Mall, 1st Floor, Narok-Bomet Road, Narok",
"Kajiado Branch": "Kajiado Town, Kajiado Town Plaza, Next to KCB, Kajiado County",
"Kitale Branch": "Kitale Town, Khetia's Building, 1st Floor, Kitale-Eldoret Road, Trans Nzoia",
"Nandi Branch": "Kapsabet Town, Nandi Plaza, Kapsabet Town Center, Nandi County",
"Baringo Branch": "Kabarnet Town, Baringo Plaza, Kabarnet Town Center, Baringo County",
// WESTERN & NYANZA
"Kisumu Branch": "Kisumu Town, Swan Centre, 3rd Floor, Room 8, Oginga Odinga Street, Kisumu CBD",
"Kakamega Branch": "Kakamega Town, Joyex Building, Ground Floor, Kakamega-Kisumu Road, Kakamega",
"Bungoma Branch": "Bungoma Town, Bungoma Plaza, 2nd Floor, Bungoma Town Center, Bungoma County",
"Kisii Branch": "Kisii Town, Ouru Complex, 2nd Floor, Room 4, Kisii-Kisumu Road, Kisii County",
"Migori Branch": "Migori Town, Migori Plaza, Next to Equity Bank, Migori Town, Migori County",
"Homa Bay Branch": "Homa Bay Town, Homa Bay Plaza, Homa Bay Town Center, Homa Bay County",
// CENTRAL
"Thika Branch": "Thika Town, Thika Business Centre, 3rd Floor, Kenyatta Avenue, Thika, Kiambu County",
"Kiambu Branch": "Kiambu Town, Kiambu Mall, 2nd Floor, Kiambu Town Center, Kiambu County",
"Nyeri Branch": "Nyeri Town, Nyeri Town Plaza, 2nd Floor, Nyeri-Nairobi Road, Nyeri County",
"Kirinyaga Branch": "Kerugoya Town, Kirinyaga Business Centre, Kerugoya Town Center, Kirinyaga County",
"Muranga Branch": "Murang'a Town, Murang'a Town Plaza, 2nd Floor, Murang'a-Kenol Road, Murang'a County"
};

const mapDesc={
"Full Body Screening":"A comprehensive wellness assessment that helps detect potential health concerns early and supports you in making informed decisions for a healthier life.",
"Blood Pressure Check":"Accurate BP monitoring and hypertension management to keep your heart healthy and prevent complications. Includes BP, pulse and advice.",
"Arthritis & Joint Care":"Specialized care for arthritis, joint pain and mobility issues. We provide pain relief, exercises and BF Suma supplements for joints.",
"Diabetes Screening":"Early detection of diabetes through blood sugar testing, HbA1c and lifestyle guidance to manage sugar levels effectively.",
"General Consultation":"Professional medical consultation for all health concerns with expert diagnosis, treatment and referral if needed.",
"Wound Care":"Professional wound cleaning, dressing and healing support to prevent infection and promote fast recovery at clinic or home.",
"Health Education":"Empowering you with health knowledge for prevention, nutrition and better lifestyle choices for your family.",
"Home Based Care":"Quality medical care at the comfort of your home - we come to you anywhere. Call for home visit arrangement.",
"BF Suma Supplements":"Original BF Suma natural supplements for immunity, arthritis, BP, diabetes and overall wellness. Countrywide delivery available."
};

function init(){
 const now=new Date();
 document.getElementById('date').value=now.toISOString().split('T')[0];
 document.getElementById('time').value=now.toTimeString().slice(0,5);
 document.getElementById('booking').value = 'KE141561919'; 
 document.getElementById('desc').value=mapDesc["Full Body Screening"];
 document.getElementById('branch').value='Nakuru Branch';
 document.getElementById('addr').value=branchAddressMap['Nakuru Branch'];
 addListeners(); update();
}
function addListeners(){
 ['pname','addr','date','time','customBranch','customService','desc','charges','booking','served','wa'].forEach(id=>{
   const el=document.getElementById(id);
   if(el){el.addEventListener('input',update);}
 });
 document.getElementById('branch').addEventListener('change', onBranchChange);
 document.getElementById('service').addEventListener('change', onServiceChange);
}
function onBranchChange(){
 const branchSelect=document.getElementById('branch').value;
 const customInput=document.getElementById('customBranch');
 const addrInput=document.getElementById('addr');
 if(branchSelect==='Custom Branch'){
   customInput.style.display='block';
   addrInput.value='';
   customInput.focus();
 } else if(branchSelect===''){
   customInput.style.display='none';
   addrInput.value='';
 } else {
   customInput.style.display='none';
   let address = branchAddressMap[branchSelect];
   if(address){addrInput.value = address;} 
   else {addrInput.value = branchSelect.replace(' Branch','') + ' Town, Main Plaza - BF Suma Center';}
 }
 update();
}
function onServiceChange(){
 const s=document.getElementById('service').value;
 document.getElementById('customService').style.display=s==='Custom'?'block':'none';
 if(s!=='Custom'){document.getElementById('desc').value=mapDesc[s]||'';}
 update();
}
function fmtDate(d){if(!d)return'';let dt=new Date(d);let day=dt.getDate();let suf=(day>3&&day<21)?'th':['th','st','nd','rd'][day%10]||'th';return `${day}${suf} ${dt.toLocaleString('en-GB',{month:'short'})}, ${dt.getFullYear()}`;}
function fmtTime(t){if(!t)return'';let[h,m]=t.split(':');let hr=parseInt(h);let ap=hr>=12?'PM':'AM';hr=hr%12||12;return `${hr}:${String(m).padStart(2,'0')} ${ap}`;}
function getBranchDisplay(){let branch=document.getElementById('branch').value; if(branch==='Custom Branch'){branch=document.getElementById('customBranch').value||'Custom Branch';} return branch||'Nakuru Branch';}
function update(){
 let pname=document.getElementById('pname').value||'FESTUS MWANZIA';
 document.getElementById('outName').textContent=pname.toUpperCase();
 let branchDisplay=getBranchDisplay(); let addr=document.getElementById('addr').value||'';
 document.getElementById('outBranch').innerHTML=': '+branchDisplay+'<br><small>'+addr+'</small>';
 document.getElementById('outDate').textContent=': '+(fmtDate(document.getElementById('date').value)||'');
 document.getElementById('outTime').textContent=': '+(fmtTime(document.getElementById('time').value)||'');
 let svc=document.getElementById('service').value; if(svc==='Custom') svc=document.getElementById('customService').value||'Custom Service';
 document.getElementById('outService').textContent=': '+svc;
 document.getElementById('outServiceHead').textContent=svc.toUpperCase();
 document.getElementById('outCharges').innerHTML=': '+(document.getElementById('charges').value||'KSh 2,000')+'<br><small>Payable at the facility</small>';
 document.getElementById('outBooking').textContent=': '+(document.getElementById('booking').value||'');
 document.getElementById('outDesc').textContent=document.getElementById('desc').value||'';
 document.getElementById('outServed').textContent=(document.getElementById('served').value||'PRISCA SANDI').toUpperCase();
 document.getElementById('outWa').textContent='Call/WhatsApp: '+(document.getElementById('wa').value||'0705539841');
}
function downloadAsPicture(){
 const status=document.getElementById('status'); status.textContent='Creating picture...';
 const canvas=document.getElementById('downloadCanvas'); const ctx=canvas.getContext('2d');
 ctx.fillStyle='#f8f9f7'; ctx.fillRect(0,0,1000,720);
 ctx.fillStyle='#ffffff'; ctx.fillRect(0,0,1000,125);
 ctx.fillStyle='#0a332c'; ctx.beginPath(); ctx.moveTo(500,0); ctx.lineTo(1000,0); ctx.lineTo(1000,125); ctx.lineTo(440,125); ctx.closePath(); ctx.fill();
 ctx.fillStyle='#b08a3a'; ctx.beginPath(); ctx.arc(75,62,35,0,6.28); ctx.fill();
 ctx.fillStyle='white'; ctx.font='28px Arial'; ctx.fillText('🌿',60,72);
 ctx.fillStyle='#0a332c'; ctx.font='bold 22px Arial'; ctx.fillText('AfyaMaishani',125,55); ctx.fillText('Care',185,80);
 ctx.fillStyle='#555'; ctx.font='10px Arial'; ctx.fillText('BF Suma Official Partner - Countrywide',125,95);
 ctx.fillStyle='white'; ctx.font='bold 13px Arial'; ctx.fillText('YOUR HEALTH',700,45); ctx.fillText('OUR PRIORITY',700,65);
 ctx.fillStyle='#c9a86a'; ctx.fillRect(700,75,160,1);
 ctx.fillStyle='white'; ctx.font='11px Arial'; ctx.fillText('Prevent • Detect • Treat • Thrive',700,90);
 ctx.fillStyle='#0a332c'; ctx.fillRect(0,125,1000,45);
 ctx.fillStyle='#c9a86a'; ctx.fillRect(150,146,120,1); ctx.fillRect(730,146,120,1); ctx.beginPath(); ctx.arc(285,147,4,0,6.28); ctx.arc(715,147,4,0,6.28); ctx.fill();
 ctx.fillStyle='white'; ctx.font='bold 26px Arial'; ctx.textAlign='center'; ctx.fillText('APPOINTMENT CARD',500,154); ctx.textAlign='left';
 ctx.fillStyle='#333'; ctx.font='13px Arial'; ctx.textAlign='center'; ctx.fillText('Thank you for choosing BF Suma / AfyaMaishani Care.',500,185); ctx.textAlign='left';
 let y=215; ctx.fillStyle='#0a332c'; ctx.font='bold 12px Arial'; ctx.fillText('PATIENT DETAILS',35,y);
 y+=18; let pname=document.getElementById('pname').value||'FESTUS MWANZIA'; ctx.font='bold 24px Arial'; ctx.fillText(pname.toUpperCase(),35,y);
 y+=12; ctx.strokeStyle='#bbb'; ctx.beginPath(); ctx.moveTo(35,y); ctx.lineTo(450,y); ctx.stroke(); y+=18;
 function row(label,val,small){
   ctx.fillStyle='#0a332c'; ctx.font='bold 10px Arial'; ctx.fillText(label,35,y);
   ctx.fillStyle='#222'; ctx.font='11px Arial'; ctx.fillText(': '+(val||'').substring(0,42),170,y);
   if(small){ctx.font='8px Arial'; ctx.fillStyle='#555'; let sm=small.length>62?small.substring(0,62)+'..':small; ctx.fillText(sm,170,y+12); y+=12;}
   y+=20;
 }
 let branchDisplay=getBranchDisplay(); let addr=document.getElementById('addr').value||'';
 row('BRANCH',branchDisplay,addr);
 row('DATE',fmtDate(document.getElementById('date').value));
 row('TIME',fmtTime(document.getElementById('time').value));
 let svc=document.getElementById('service').value; if(svc==='Custom') svc=document.getElementById('customService').value||'Custom Service';
 row('SERVICE',svc);
 row('CHARGES',document.getElementById('charges').value||'KSh 2,000','Payable at the facility');
 row('BOOKING NO',document.getElementById('booking').value||'');
 ctx.strokeStyle='#0a332c'; ctx.lineWidth=1.5; ctx.strokeRect(500,210,480,260);
 ctx.fillStyle='#0a332c'; ctx.beginPath(); ctx.arc(525,232,12,0,6.28); ctx.fill();
 ctx.fillStyle='white'; ctx.font='10px Arial'; ctx.fillText('♥',519,236);
 ctx.fillStyle='#0a332c'; ctx.font='bold 11px Arial'; ctx.fillText((svc||'FULL BODY SCREENING').toUpperCase().substring(0,32),545,236);
 ctx.fillStyle='#333'; ctx.font='11px Arial'; let desc=document.getElementById('desc').value||''; let words=desc.split(' '); let line=''; let dy=255;
 for(let i=0;i<words.length;i++){let test=line+words[i]+' '; if(ctx.measureText(test).width>440 && i>0){ctx.fillText(line,525,dy); line=words[i]+' '; dy+=14; if(dy>450) break;} else{line=test;}} ctx.fillText(line,525,dy);
 y=485; ctx.fillStyle='#0a332c'; ctx.font='bold 11px Arial'; ctx.fillText('SERVED BY',500,y);
 let served=document.getElementById('served').value||'PRISCA SANDI'; ctx.font='bold 16px Arial'; ctx.fillText(served.toUpperCase(),500,y+18);
 ctx.strokeStyle='#0a332c'; ctx.beginPath(); ctx.moveTo(500,y+20); ctx.lineTo(700,y+20); ctx.stroke();
 ctx.fillStyle='#0a332c'; ctx.fillRect(20,530,960,28); ctx.fillStyle='white'; ctx.font='bold 11px Arial'; ctx.textAlign='center'; ctx.fillText('ⓘ  KINDLY ARRIVE 15 MINUTES EARLY FOR YOUR APPOINTMENT.',500,548); ctx.textAlign='left';
 ctx.fillStyle='#e8f5e9'; ctx.fillRect(20,562,960,140);
 ctx.fillStyle='#0a332c'; ctx.font='bold 11px Arial'; ctx.fillText('Need to reschedule?',35,580);
 let wa=document.getElementById('wa').value||'0705539841'; ctx.font='bold 26px Arial'; ctx.fillText('📞 '+wa,35,610);
 ctx.font='bold 12px Arial'; ctx.fillText('Call / WhatsApp - Always Available!',35,630);
 ctx.fillStyle='#555'; ctx.font='10px Arial'; ctx.fillText("We're here to help.",35,645);
 ctx.fillStyle='#bbb'; ctx.fillRect(300,570,1,120);
 ctx.fillStyle='#0a332c'; ctx.font='italic 22px cursive'; ctx.fillText('Thank you!',320,610);
 ctx.fillStyle='#bbb'; ctx.fillRect(450,570,1,120);
 ctx.fillStyle='#333'; ctx.font='11px Arial'; ctx.fillText('We look forward to serving you. ♥',470,590);
 ctx.fillStyle='#0a332c'; ctx.font='bold 10px Arial'; ctx.fillText('BF Suma Countrywide - All Counties Served.',470,610);
 try{
   const dataURL=canvas.toDataURL('image/png');
   const a=document.createElement('a');
   a.download='BF_Suma_'+(document.getElementById('pname').value||'appointment')+'_'+branchDisplay.replace(/[^a-zA-Z0-9]/g,'_')+'.png';
   a.href=dataURL; document.body.appendChild(a); a.click(); document.body.removeChild(a);
   status.textContent='✅ Picture Downloaded! Branch: '+branchDisplay;
   status.style.color='green';
 }catch(e){status.textContent='❌ Error: '+e.message; status.style.color='red';}
}
window.onload=init;