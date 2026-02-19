document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".song-card");
    const modal = document.getElementById("playerModal");
    const closeBtn = document.querySelector(".close-btn");
    const modalTitle = document.getElementById("modalSongTitle");
    const player = document.getElementById("audioPlayer");
    const audioSource = document.getElementById("audioSource");
    const modalImage = document.getElementById("modalImage");
    const modalNote = document.getElementById("modalNote");
    cards.forEach(card => {
        card.addEventListener("click", function () {

            const songFile = card.getAttribute("data-song");
            const songTitle = card.querySelector(".song-title").textContent;
            const songImage = card.getAttribute("data-image");
            const songNote = card.getAttribute("data-note");

            modalTitle.textContent = songTitle;
            modalImage.src = songImage;
            modalNote.textContent = songNote;

            audioSource.src = "songs/" + songFile;

            player.load();
            player.play();

            modal.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
        player.pause();
    });

});

