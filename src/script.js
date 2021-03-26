var comb = "1";
var refName = "11111";
const basedir_F = "./src/F_p233_045/";
const basedir_M = "./src/M_p311_094/";
const basedir_cont = "./src/control_r1_F_p323_229_r2_M_p259_284/";

// https://stackoverflow.com/a/1431113
String.prototype.replaceAt = function(index, replacement) {
   return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function updateImage(image_elem_id, src) {
   document.getElementById(image_elem_id).src = src + ".png";
}

// https://stackoverflow.com/questions/10792163/change-audio-src-with-javascript
function updateAudio(audio_elem_id, src, play) {
   var audio = document.getElementById(audio_elem_id);
   audio.pause();
   audio.setAttribute('src', src + ".wav");
   audio.load();
   if (play) {
      audio.play();
   }
}

function updateContents(src, mel_elem_id, wav_elem_id, play=true) {
   updateImage(mel_elem_id, src);
   updateAudio(wav_elem_id, src, play);
}

function selectComb(comb) {
   var gender, filename, src;
   switch(comb.includes("F")) {
      case true:
         gender = 'F';
         filename = "inspect" + comb.replace("F","");
         src = basedir_F + filename;
         updateContents(src, gender + "_output_mel", gender + "_output_wav");
         break;
      default:
         gender = 'M';
         filename = "inspect" + comb.replace("M","");
         src = basedir_M + filename;
         updateContents(src, gender + "_output_mel", gender + "_output_wav");
    }
}

function updateRef(factorId, refId, play=true){
   const filename = refName.replaceAt(factorId, refId);
   refName = filename;
   const src = basedir_cont + filename;
   updateContents(src, "cont_output_mel", "cont_output_wav", play);
}

// TDPES
function selectRef(ref) {
   refId = ref.charAt(1);
   switch(ref.charAt(0)) {
      case "T":
         updateRef(0, refId);
         break;
      case "D":
         updateRef(1, refId);
         break;
      case "P":
         updateRef(2, refId);
         break;
      case "E":
         updateRef(3, refId);
         break;
      default:
         updateRef(4, refId);
   }
}