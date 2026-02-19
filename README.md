# Web Music Player

This is a personalized, interactive web music player template that lets you showcase your favorite songs in a beautiful, artsy interface for friends and loved ones . Each song card opens a modal with:

- A **fully-featured audio player** (play, pause, seek, volume controls)  
- A **custom image** representing the song  
- A **personal note or memory** about that song  

The layout is responsive, dark-desaturated with desi-inspired colors and mobile-friendly. While this version features **5 songs** for space reasons, the template is easily expandable to include more songs, images, and notes.
<img width="935" height="639" alt="Screenshot 2026-02-19 at 9 32 41 PM" src="https://github.com/user-attachments/assets/960e8a24-82c1-47ce-8fd6-42445cb57f8b" />

This project is ideal for anyone wanting to create a meaningful playlist or a personal music diary that’s simple, elegant, and interactive.
<img width="935" height="639" alt="Screenshot 2026-02-19 at 9 32 48 PM" src="https://github.com/user-attachments/assets/1f149765-45de-4b03-b99b-e2d26e8a2eee" />

---

## ⚙️ How to Use / Reuse This Template

1. **Clone or download** the repository.
2. Open `index.html` in your browser to see the site in action.
3. **Add your own songs**:
   - Place your audio files in the `songs/` folder (MP3 recommended).  
   - Place corresponding images in the `images/` folder.
4. **Edit or add song cards** in `index.html`:

   Each song is represented as a `div.song-card`:

   ```html
   <div class="song-card"
        data-song="song1.mp3"
        data-image="images/song1.jpg"
        data-note="Your personal note about this song.">
        <div class="song-icon">🎵</div>
        <div class="song-title">Song 01</div>
   </div>
To add more songs:

Copy one song-card block

Change data-song, data-image, data-note, and song-title

Paste it into the .songs-container section

Edit notes or song titles
Update the data-note attribute for personal messages and the inner text of .song-title for the displayed name.

Change images
Update data-image to point to the file name of your song image.

🎨 Styling

All styles are in css/style.css.

Customize colors, fonts, or card styles by editing this file.

Example: change .song-card:hover to adjust hover color or animation.

💻 Functionality

script.js handles:

Opening the modal on click

Loading the correct audio and image

Showing the personal note

Playing and pausing audio

Closing modal on click outside or on close button

Adding new songs does not require changes to JS — just ensure you update the data-* attributes correctly.

📱 Mobile-Friendly

Grid layout automatically adapts to smaller screens

Modal scales nicely to smaller devices

🔧 Tips for Expansion

Add more songs by following the song-card pattern

Swap audio formats if needed (MP3 recommended)

Add different icons per song if you like

Personalize notes, titles, and images to make it uniquely yours

Consider adding carousel images for each song in the modal for extra flair

🎉 Credits

Made with ❤️ by Jannat — for music, memories, and meaningful moments.
