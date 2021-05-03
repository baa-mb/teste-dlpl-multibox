function showKoordinaten () {
    DLPLmultibox.setPunkt(
    0,
    0,
    0xffff00,
    nrMatrix.mitte
    )
    DLPLmultibox.setPunkt(
    0,
    0,
    0xffff00,
    nrMatrix.mitte
    )
    DLPLmultibox.setPunkt(
    7,
    7,
    0xffff00,
    nrMatrix.mitte
    )
    DLPLmultibox.setPunkt(
    0,
    7,
    0xffff00,
    nrMatrix.mitte
    )
    DLPLmultibox.setPunkt(
    7,
    0,
    0xffff00,
    nrMatrix.mitte
    )
    basic.pause(2000)
    DLPLmultibox.loescheMatrix(nrMatrix.mitte)
    basic.pause(1000)
}
input.onButtonPressed(Button.A, function () {
    modus = (modus + 1) % 4
})
function setTestmodus () {
    if (modus == 0) {
        DLPLmultibox.scrolleText(
        nrMatrix.mitte,
        "TASTE A",
        0x0000ff,
        -3
        )
    } else if (modus == 1) {
        DLPLmultibox.schreibeText(nrMatrix.mitte, "ABC", 0xff0000)
    } else if (modus == 2) {
        DLPLmultibox.schreibeText(nrMatrix.mitte, "15,9,9,15", 0xffffff)
        basic.pause(2000)
        DLPLmultibox.loescheMatrix(nrMatrix.mitte)
        basic.pause(1000)
    } else {
        showKoordinaten()
    }
}
let modus = 0
modus = 0
basic.forever(function () {
    setTestmodus()
})
