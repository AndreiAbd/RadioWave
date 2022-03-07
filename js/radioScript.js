/* Powered | CoderX | Andrei Abd
█▀▀ █▀█ █▀▄ █▀▀ █▀█ ▀▄▀
█▄▄ █▄█ █▄▀ ██▄ █▀▄ █░█
CODER X |تم تصميم الموقع و برمجته من قبل اندريه عبد
mail      :  usr.g0a1@gmial.com
Whatsapp  :  +963934820511
Pinterest :  https://www.pinterest.com/andreiabd93/
Instagram :  https://www.instagram.com/andrei_abd/
Linkeden  :  https://www.linkedin.com/in/andreiabd
Facebook  :  https://www.facebook.com/andreiaabd/
Github    :  https://github.com/AndreiAbd
*/
let
    d = new Date();
// Get Current Year
document.getElementById("addCurrentYear").innerHTML = d.getFullYear();

// Screen Resiolution
class Player {}
onload = new Player();
// Radio Buttons
class Audio_Player {
    constructor() {
        this.audio_file = document.getElementById("audio_file");
        this.title_audio = document.getElementById("title_radio");
        this.play_pause_button = document.getElementById("play_pause");
        this.isPlayed;
        this.play_pause_button.addEventListener("click", () => {
            this.play_pause();
        });
        this.name_radio = [];
        this.name_radio[0] = "Monti Carlo Arabic";
        this.name_radio[1] = "BBC Arabic";
        this.name_radio[2] = "Sky News Arabic";
        this.name_radio[3] = "SAWA";
        this.name_radio[4] = "9090";
        this.name_radio[5] = "Al Madina";
        this.name_radio[6] = "Rayan";
        this.name_radio[7] = "Sawt Al Shabab";
        this.name_radio[8] = "Ninar";
        this.name_radio[9] = "Damascus";
        this.name_radio[10] = "Amwaj";
        this.name_radio[11] = "Fuse";
        this.name_radio[12] = "Sada ljabl";
        this.name_radio[13] = "Melody";
        this.name_radio[14] = "Zenobia";
        this.name_radio[15] = "Karma";
        this.name_radio[16] = "Sham";
        this.name_radio[17] = "Nostalgie";
        this.name_radio[18] = "Angamy";
        this.name_radio[19] = "Quran";
        this.name_radio[20] = "Magic";



        this.source_audio = [];
        this.source_audio[0] = "http://live02.mc-doualiya.com/mc-doualiya.mp3?1590567757821";
        this.source_audio[1] = "http://bbcwssc.ic.llnwd.net/stream/bbcwssc_mp1_ws-araba_backup?1590567921819a";
        this.source_audio[2] = "https://radio.skynewsarabia.com/stream/radio/skynewsarabia";
        this.source_audio[3] = "http://n0d.radiojar.com/mzw8z62r92quv?download=1&1590579033224=&rj-ttl=5&rj-tok=AAABclXvOl8AKHv3D62IE0ctDA";
        this.source_audio[4] = "http://9090streaming.mobtada.com/9090FMEGYPT";
        this.source_audio[5] = "http://192.99.17.12:4978/;stream.mp3";
        this.source_audio[6] = "http://radio.farah.fm:8015/;?1590580272768.mp3";
        this.source_audio[7] = "http://radioliveb.rtv.gov.sy:8002/RadioShabab";
        this.source_audio[8] = "http://ninarfm.grtvstream.com:8896/";
        this.source_audio[9] = "http://radioliveb.rtv.gov.sy:8002/RadioDimshq";
        this.source_audio[10] = "http://radioliveb.rtv.gov.sy:8002/RadioAmwaj";
        this.source_audio[11] = "http://192.99.17.12:4986/;stream.mp3";
        this.source_audio[12] = "http://148.251.92.51:9342/stream?type=http&amp;nocache=10";
        this.source_audio[13] = "http://streaming.inet.sy:8000/melodyfm?type=.mp3/;stream.mp3";
        this.source_audio[14] = "http://radioliveb.rtv.gov.sy:8002/RadioZenobia";
        this.source_audio[15] = "http://radioliveb.rtv.gov.sy:8002/RadioKarma";
        this.source_audio[16] = "http://radioshamfm.grtvstream.com:8400/;stream.nsv";
        this.source_audio[17] = "http://185.52.127.172/lb/55157/mp3_128.mp3";
        this.source_audio[18] = "http://angamy.com:9302/";
        this.source_audio[19] = "http://162.244.81.30:8224/;";
        this.source_audio[20] = "http://s1.voscast.com:9376/stream/1/";

        this.server = 0;
        this.setResource();
        document.getElementById("next").addEventListener("click", () => {
            if (this.server < this.source_audio.length - 1) {
                ++this.server;
                this.isPlayed = false;
            } else {
                this.server = 0;
            }
            localStorage.setItem("SAVE-POSITION", this.server);
            this.setResource();
        });
        document.getElementById("back").addEventListener("click", () => {
            if (this.server > 0) {
                --this.server;
                this.isPlayed = false;
            } else {
                this.server = this.source_audio.length - 1;
            }
            localStorage.setItem("SAVE-POSITION", this.server);
            this.setResource();
        });
    }
    setResource() {
        if (localStorage.getItem("SAVE-POSITION") != null) {
            this.server = localStorage.getItem("SAVE-POSITION");
        }
        this.audio_file.src = this.source_audio[this.server];
        this.title_audio.innerHTML = this.name_radio[this.server];
        this.play_pause();
    }
    play_pause() {
        if (this.isPlayed == false) {
            document.getElementById('waveGif').style.display = 'block';
            document.getElementById('blankGif').style.display = 'none';
            this.play_pause_button.innerHTML = "&#10073;&#10073;";
            this.audio_file.play();
            this.isPlayed = true;
        } else {
            document.getElementById('waveGif').style.display = 'none';
            document.getElementById('blankGif').style.display = 'block';
            this.play_pause_button.innerHTML = "&#10097;"
            this.audio_file.pause();
            this.isPlayed = false;
        }
    }
}
onload = new Audio_Player();
class Volume {
    constructor() {
        this.audio_file = document.getElementById("audio_file");
        this.audio_file.volume = 50 / 100;
        this.volume_range = document.getElementById("volume_range");
        this.volume_range.addEventListener("change", () => {
            this.audio_file.volume = this.volume_range.value / 100;
        });
        this.volume_speed = document.getElementById("volume_speed");
        this.volume_speed.playbackRate = 1;
        this.volume_speed.addEventListener("change", () => {
            this.audio_file.playbackRate = this.volume_speed.value / 100;
        });
    }
}
onload = new Volume();
class Color {
    constructor() {
        this.color_1 = document.getElementById("color_1");
        this.color_1.addEventListener("click", () => {
            this.select_color("color_1");
        });
        this.color_2 = document.getElementById("color_2");
        this.color_2.addEventListener("click", () => {
            this.select_color("color_2");
        });
        this.color_3 = document.getElementById("color_3");
        this.color_3.addEventListener("click", () => {
            this.select_color("color_3");
        });
        this.color_4 = document.getElementById("color_4");
        this.color_4.addEventListener("click", () => {
            this.select_color("color_4");
        });
    }
}
//Ctl Sound
function ctlSound() {
    document.getElementById('volume').style.display = 'block';
    document.getElementById('click_Sound').play();
    setTimeout(() => {
        document.getElementById('volume').style.display = 'none';
    }, 10000);
}
//Disable Right Mouse Click
document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener("keydown", (e) => {
    // USE THIS TO DISABLE CONTROL AND ALL FUNCTION KEYS
    // if (e.ctrlKey || (e.keyCode>=112 && e.keyCode<=123)) {
    // THIS WILL ONLY DISABLE CONTROL AND F12
    if (e.ctrlKey || e.keyCode == 123) {
        e.stopPropagation();
        e.preventDefault();
    }
});
//Loader Page
window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
});