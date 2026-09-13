function tentukanNilai() {
    let name = document.getElementById('namaSiswa').value;
    let nilai = parseInt(document.getElementById('nilaiSiswa').value) || 0;
    
    let gradeSiswa = "";
    if (nilai ==0) {
        gradeSiswa = "S";
    } else if (nilai >=90&&nilai <=99) {
        gradeSiswa = "A";
    } else if (nilai >=80) {
        gradeSiswa = "B";
    } else if (nilai >=70) {
        gradeSiswa = "C";
    } else if (nilai >=60) {
        gradeSiswa = "D";
    } else {
        gradeSiswa = "E";
    }

let passorNot = "Not Pass";
    if (['S', 'A', 'B', 'C'].includes(gradeSiswa)) {
        passorNot = "Pass";
    } else
        passorNot = "Not Pass"



document.getElementById('resNama').innerText = name;
document.getElementById('resScore').innerText = nilai ;
document.getElementById('resGrade').innerText = gradeSiswa;
document.getElementById('resTorf').innerText = passorNot;

    document.getElementById('hasilBox').style.display = 'block';
}