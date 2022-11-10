let r = document.querySelector(":root");
let mode = 1;

function calculation(){
    let num = document.getElementById("calc").value;
    if(num <= 0 || num >= 21){
        alert("Pilih bilangan antara 1 sampai 20");
    }else{
        let hasil = document.getElementById("hasil");
        hasil.removeChild(hasil.firstElementChild);
        let text = "";

        if(num % 2 != 0){
            let array = [1, 1];
            let count = 1;
            for(let i=2; array[i-1]<=(num*10); i++){
                array[i] = array[i-2] + array[i-1];
                count = i - 1;
            }
            for(let i=0; i<=count; i++){
                let temp = array[i] + " ";
                text += temp;
                temp = " ";
            }
        }else{
            let temp, answer = 1;
            for(let i=1; i<=(num/2); i++){
                answer *= i;
            }
            for(let i=1; i<=(num/2); i++){
                if(i != num/2){
                    temp = i + "x";
                    text += temp;
                    temp = " ";
                }else{
                    temp = i + "=" + answer;
                    text += temp;
                }
            }
        }

        let x = document.createTextNode(text);
        let p = document.createElement("p");
        p.appendChild(x);
        hasil.appendChild(p);
    }
}

function GantiTema(){
    if(mode == 1){
        ModeTerang()
    }else{
        ModeGelap()
    }
}

function ModeTerang(){
    r.style.setProperty("--bgcolor1", "#f9d7c2");
    r.style.setProperty("--bgcolor2", "#da927a");
    r.style.setProperty("--textcolor", "##200900");
    r.style.setProperty("--navcolor", "#f7c8ab");
    r.style.setProperty("--spancolor", "#b84a00");
    r.style.setProperty("--formcolor", "#e0a591");
    r.style.setProperty("--tablecolor1", "#fe7792");
    r.style.setProperty("--tablecolor2", "#b84a00");
    r.style.setProperty("--tablecolor3", "#222222");
    r.style.setProperty("--tablecolor4", "#d5564a");
    r.style.setProperty("--white", "#000000");
    r.style.setProperty("--black", "#ffffff");
    r.style.setProperty("--bgimg", "url('assets/bg2.png')");
    mode = 0;
}

function ModeGelap(){
    r.style.setProperty("--mode", "gelap");
    r.style.setProperty("--bgcolor1", "#06283D");
    r.style.setProperty("--bgcolor2", "#256D85");
    r.style.setProperty("--textcolor", "#DFF6FF");
    r.style.setProperty("--navcolor", "#083754");
    r.style.setProperty("--spancolor", "#47B5FF");
    r.style.setProperty("--formcolor", "#1F5A6E");
    r.style.setProperty("--tablecolor1", "#01886d");
    r.style.setProperty("--tablecolor2", "#47B5FF");
    r.style.setProperty("--tablecolor3", "#dddddd");
    r.style.setProperty("--tablecolor4", "#2aa9b5");
    r.style.setProperty("--white", "#ffffff");
    r.style.setProperty("--black", "#000000");
    r.style.setProperty("--bgimg", "url('assets/bg1.png')");
    mode = 1;
}