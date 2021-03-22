var comb = "1";
const basedir_F = "./src/F_p233_045_mic1/";
const basedir_M = "./src/M_p311_094_mic1/";
// var select = document.getElementById("select");

// https://stackoverflow.com/questions/10792163/change-audio-src-with-javascript
function update_audio(src, gender) {
   const audioname = gender+"_output_wav";
   // const sourcename = gender+"_output_wav_source";
   var audio = document.getElementById(audioname);
   // var source = document.getElementById(sourcename);
   // source.src = src;
   audio.pause();
   audio.setAttribute('src', src);
   audio.load();
   audio.play();
}

function selectComb(value) {
 const comb = value; 
 if (comb.includes("F")) {
   const gender = 'F'
   const filename = "inspect" + comb.replace("F","");
   const src = basedir_F + filename
   document.getElementById(gender+"_output_mel").src = src + ".png";
   update_audio(src + ".wav", gender);
} else {
   const gender = 'M'
   const filename = "inspect" + comb.replace("M","");
   const src = basedir_M + filename
   document.getElementById(gender+"_output_mel").src = src + ".png";
   update_audio(src + ".wav", gender);
 }
}