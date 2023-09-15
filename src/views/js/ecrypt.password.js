class Encriptar {
    constructor() {
        this.caracteres = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
            "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
            "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "]

        this.dicionarioDeFrases = new Map();
        this.dicionarioDeFrases.set("a", "c@inpo")
            .set("b", "maco")
            .set("c", "w]do")
            .set("d", "njan")
            .set("e", "jd¿h")
            .set("f", "sd9S")
            .set("g", "J#kp")
            .set("h", "jsbd")
            .set("i", "adgb")
            .set("j", "w3uq")
            .set("k", "oejs")
            .set("l", "w}wd")
            .set("m", "pwss")
            .set("n", "khcs")
            .set("o", "sk5c")
            .set("p", "gftd")
            .set("q", "q-vc")
            .set("r", "vdde")
            .set("s", "rhyv")
            .set("t", "ps!h")
            .set("u", "pteb")
            .set("v", "yasb")
            .set("w", "v*hs")
            .set("x", "cino")
            .set("y", "phbh")
            .set("z", "jfgk")
            .set(" ", "2p9j")

            .set("A", "c@Nd")
            .set("B", "ma.J")
            .set("C", "wSF]")
            .set("D", "nsjD")
            .set("E", "jiSd")
            .set("F", "shDC")
            .set("G", "JH#k")
            .set("H", "jdsb")
            .set("I", "a&&g")
            .set("J", "whDS")
            .set("K", "owej")
            .set("L", "w0}w")
            .set("M", "pqws")
            .set("N", "kdhC")
            .set("O", "sdDF")
            .set("P", "gi=t")
            .set("Q", "qp-v")
            .set("R", "vcdd")
            .set("S", "rchy")
            .set("T", "pjs!")
            .set("U", "pite")
            .set("V", "ydas")
            .set("W", "vñ*h")
            .set("X", "caiz")
            .set("Y", "p&hb")
            .set("Z", "jhfg");
    }

    encriptarTexto(texto) {
        this.texto = texto;
        let escript = '';
        for (var i = 0; i < this.texto.length; i++) {
            for (var i = 0; i < this.texto.length; i++) {
                if (this.dicionarioDeFrases.get(this.texto[i]) !== undefined) {
                    escript += this.dicionarioDeFrases.get(this.texto[i]);
                } else {
                    escript += this.texto[i];
                }
            }
            return escript;
        }
    }

    comprovarPassword(passwordSave, passwordInsert) {
        if (passwordSave === this.encriptarTexto(passwordInsert)) {
            return true;
        } else {
            return false;
        }
    }
}

export default Encriptar;