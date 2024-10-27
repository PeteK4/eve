function aikaLaskuri() {
    const nytHetki = new Date();
    const kuluvaVuosi = nytHetki.getFullYear();
    const jouluaatto = new Date(`December 24, ${kuluvaVuosi} 00:00:00`);
    if (nytHetki > jouluaatto) {
        jouluaatto.setFullYear(kuluvaVuosi + 1);
    }

    const kaikkiSekunnit = (jouluaatto - nytHetki) / 1000;
    const paivatL = Math.floor(kaikkiSekunnit / 3600 / 24);
    const tunnitL = Math.floor(kaikkiSekunnit / 3600) % 24 - 1;
    const minuutitL = Math.floor(kaikkiSekunnit / 60) % 60;
    const sekunnitL= Math.floor(kaikkiSekunnit) % 60;

    const yot = document.getElementById('yot')
    const paivat = document.getElementById('paivat')
    const tunnit = document.getElementById('tunnit')
    const minuutit = document.getElementById('minuutit')
    const sekunnit = document.getElementById('sekunnit')
    
    const yo = document.getElementById('yo')
    const pva = document.getElementById('pva')
    const tun = document.getElementById('tun')
    const min = document.getElementById('min')
    const sek = document.getElementById('sek')

    const otsikko = document.getElementById('otsikko')
    const hyvaaJoulua = document.getElementById('hyvaaJoulua')
    const valiLause = document.getElementById('valiLause')
    const ptms = document.getElementById('ptms')

    yot.innerHTML = paivatL + 1;
    paivat.innerHTML = paivatL;
    tunnit.innerHTML = tunnitL;
    minuutit.innerHTML = minuutitL;
    sekunnit.innerHTML = sekunnitL;

    if (paivatL >= 0) { 
        otsikko.innerHTML = "Jouluaattoon on aikaa"
        hyvaaJoulua.style = "display: none"
        yot.style = "display: span"
        yo.style = "display: span"
        valiLause.style = "display: block"
        ptms.style = "display: span"
    }
        
    if (nytHetki.getDate() == 24 && nytHetki.getMonth() == 11) {
        otsikko.innerHTML = "Nyt on jouluaatto"
        hyvaaJoulua.innerHTML = "Hyvää ja Rauhallista Joulua!";
        yot.style = "display: none"
        yo.style = "display: none"
        valiLause.style = "display: none"
        ptms.style = "display: none"
    }

    if (paivatL == 0) {
        yo.innerHTML = " yö"
        paivat.style = "display: none"
        pva.style = "display: none"
    } else {
        yo.innerHTML = " yötä"
    }

    if (paivatL <= 0) {
        paivat.innerHTML = " . . . . . . ."
        pva.style = "display: none"
    } else {
        sekunnit.style = "display: span"
        sek.style = "display: span"
    }

    if (paivatL == 1) {
         pva.innerHTML = " päivä"
    } else {
        pva.innerHTML = " päivää"
    }

    if (tunnitL <= 0) {
        tunnit.innerHTML = " . . . . . . ."
        tun.style = "display: none"
    } else {
        sekunnit.style = "display: span"
        sek.style = "display: span"
    }

    if (tunnitL == 1) {
        tun.innerHTML = " tunti"
    } else {
        tun.innerHTML = " tuntia"
    }

    if (minuutitL <= 0) {
        minuutit.innerHTML = " . . . . . . ."
        min.style = "display: none"
    } else {
        minuutit.style = "display: span"
        min.style = "display: span"
    }

    if (minuutitL == 1) {
        min.innerHTML = " minuutti"
    } else {
        min.innerHTML = " minuuttia"
    }

    if (sekunnitL == 0) {
        sekunnit.innerHTML = " . . . . . . ."
        sek.style = "display: none"
    } else {
        sekunnit.style = "display: span"
        sek.style = "display: span"
    }

    if (sekunnitL== 1) {
        sek.innerHTML = " sekunti"
    } else {
        sek.innerText = " sekuntia"
    }
}  

setInterval(aikaLaskuri, 1000); 
aikaLaskuri();
