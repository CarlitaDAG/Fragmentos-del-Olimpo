const openSynopsis = document.getElementById("openSynopsis");

const closeSynopsis = document.getElementById("closeSynopsis");

const synopsisModal = document.getElementById("synopsisModal");


openSynopsis.addEventListener("click", () => {

    synopsisModal.style.display = "flex";

});


closeSynopsis.addEventListener("click", () => {

    synopsisModal.style.display = "none";

});
const serafinaCard = document.getElementById("serafinaCard");

const serafinaModal = document.getElementById("serafinaModal");

const closeSerafina = document.getElementById("closeSerafina");


serafinaCard.addEventListener("click", () => {
    serafinaModal.style.display = "flex";
});


closeSerafina.addEventListener("click", () => {
    serafinaModal.style.display = "none";
});
const yoonJiCard = document.getElementById("yoonJiCard");
const yoonJiModal = document.getElementById("yoonJiModal");
const closeYoonJi = document.getElementById("closeYoonJi");

yoonJiCard.addEventListener("click", () => {
    yoonJiModal.style.display = "flex";
});

closeYoonJi.addEventListener("click", () => {
    yoonJiModal.style.display = "none";
});
const joaoCard = document.getElementById("joaoCard");
const joaoModal = document.getElementById("joaoModal");
const closeJoao = document.getElementById("closeJoao");

joaoCard.addEventListener("click", () => {
    joaoModal.style.display = "flex";
});

closeJoao.addEventListener("click", () => {
    joaoModal.style.display = "none";
});
const rosieCard = document.getElementById("rosieCard");
const rosieModal = document.getElementById("rosieModal");
const closeRosie = document.getElementById("closeRosie");

rosieCard.addEventListener("click", () => {
    rosieModal.style.display = "flex";
});

closeRosie.addEventListener("click", () => {
    rosieModal.style.display = "none";
});
const victoriaCard = document.getElementById("victoriaCard");
const victoriaModal = document.getElementById("victoriaModal");
const closeVictoria = document.getElementById("closeVictoria");

victoriaCard.addEventListener("click", () => {
    victoriaModal.style.display = "flex";
});

closeVictoria.addEventListener("click", () => {
    victoriaModal.style.display = "none";
});
const adlerCard = document.getElementById("adlerCard");
const adlerModal = document.getElementById("adlerModal");
const closeAdler = document.getElementById("closeAdler");

adlerCard.addEventListener("click", () => {
    adlerModal.style.display = "flex";
});

closeAdler.addEventListener("click", () => {
    adlerModal.style.display = "none";
});
const crystalCard = document.getElementById("crystalCard");
const crystalModal = document.getElementById("crystalModal");
const closeCrystal = document.getElementById("closeCrystal");

crystalCard.addEventListener("click", () => {
    crystalModal.style.display = "flex";
});

closeCrystal.addEventListener("click", () => {
    crystalModal.style.display = "none";
});
const openPrologue = document.getElementById("openPrologue");
const prologueModal = document.getElementById("prologueModal");
const closePrologue = document.getElementById("closePrologue");

if (openPrologue && prologueModal && closePrologue) {

    openPrologue.addEventListener("click", () => {
        prologueModal.style.display = "flex";
    });

    closePrologue.addEventListener("click", () => {
        prologueModal.style.display = "none";
    });

}
