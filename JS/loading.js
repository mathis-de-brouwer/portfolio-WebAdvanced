function loadingthisPedro() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 5000); // = 5 seconds
    });
}

async function pedroIsLoading() {
    await loadingthisPedro();
    window.location.href = '../HTML/home.html';
}

pedroIsLoading();
