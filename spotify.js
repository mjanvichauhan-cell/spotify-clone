const trendingAlbums = [
  { id: "t1", title: "Aashiqui 2", subtitle: "Mithoon, Ankit Tiwari, Jeet Gannguli", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", img: "https://picsum.photos/seed/aashiqui2/300/300" },
  { id: "t2", title: "Yeh Jawaani Hai Deewani", subtitle: "Pritam", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", img: "https://picsum.photos/seed/yjhd/300/300" },
  { id: "t3", title: "Sanam Teri Kasam", subtitle: "Himesh Reshammiya, Sameer Anjaan", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", img: "https://picsum.photos/seed/stk/300/300" },
  { id: "t4", title: "Finding Her", subtitle: "Kushagra, Bharath, Saaheal", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", img: "https://picsum.photos/seed/findingher/300/300" },
  { id: "t5", title: "Young G.O.A.T", subtitle: "Cheema Y, Gur Sidhu", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", img: "https://picsum.photos/seed/younggoat/300/300" },
  { id: "t6", title: "Ultimate Love Songs", subtitle: "Arijit Singh", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", img: "https://picsum.photos/seed/ultimatelove/300/300" },
  { id: "t7", title: "Making Memories", subtitle: "Karan Aujla", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", img: "https://picsum.photos/seed/makingmemories/300/300" }
];

const radioArtists = [
  {
    id: "r1",
    name: "Pritam",
    img: "https://i.scdn.co/image/ab6761610000e5ebcb6926f44f620555ba444fca",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
  },

  {
    id: "r2",
    name: "A.R. Rahman",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/A.%20R.%20Rahman.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
  },

  {
    id: "r3",
    name: "Arijit Singh",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Arijit%20Singh.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
  },

  {
    id: "r4",
    name: "Sachin-Jigar",
    img: "https://i.scdn.co/image/ab6761610000e5ebbb4064bef3a825344d5eb79e",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3"
  },

  {
    id: "r5",
    name: "Vishal-Shekhar",
    img: "https://i.scdn.co/image/ab6761610000e5eb90b6c3d093f9b02aad628eaf",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3"
  },

  {
    id: "r6",
    name: "Shreya Ghoshal",
    img: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/shreya-ghoshal-32020-1764939123.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3"
  },

  {
    id: "r7",
    name: "Diljit Dosanjh",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Diljit%20Dosanjh.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3"
  },

  {
    id: "r8",
    name: "KK",
    img: "https://i.scdn.co/image/ab6761610000e5ebb09a31f853166e721d4d46b2",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3"
  }
];

const featuredCharts = [
  { id: "c1", title: "Top Songs Global", label: "Weekly Music Charts", desc: "Your weekly update of the most played tracks globally", gradient: "linear-gradient(135deg,#7b2ff7,#4a1c99)", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
  { id: "c2", title: "Top Songs India", label: "Weekly Music Charts", desc: "Your weekly update of the most played tracks in India", gradient: "linear-gradient(135deg,#e0432f,#8f1d10)", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { id: "c3", title: "Top 50 Global", label: "GLOBAL", desc: "Your daily update of the most played tracks right now", gradient: "linear-gradient(135deg,#1f4287,#122a54)", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { id: "c4", title: "Top 50 India", label: "INDIA", desc: "Your daily update of the most played tracks right now", gradient: "linear-gradient(135deg,#2f7d5c,#164a34)", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
];

const audioPlayer = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const playIcon = document.getElementById("playIcon");
const progressBar = document.getElementById("progressBar");
const progressFill = document.getElementById("progressFill");
const currentTimeLabel = document.getElementById("currentTime");
const totalTimeLabel = document.getElementById("totalTime");
const playerTitle = document.getElementById("playerTitle");
const playerSubtitle = document.getElementById("playerSubtitle");
const playerArt = document.getElementById("playerArt");
const volumeBar = document.getElementById("volumeBar");
const volumeFill = document.getElementById("volumeFill");
const playerLikeBtn = document.getElementById("playerLikeBtn");
const likedCountText = document.getElementById("likedCountText");

let playlist = [];
let currentIndex = 0;
let currentTrackId = null;
let likedSongs = [];

function formatTime(seconds) {
  if (isNaN(seconds)) {
    return "0:00";
  }

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return mins + ":" + (secs < 10 ? "0" + secs : secs);
}

function playTrack(track, list, index) {
  playlist = list;
  currentIndex = index;
  currentTrackId = track.id;

  audioPlayer.src = track.audio;
  audioPlayer.play();

  playerTitle.textContent = track.title || track.name;
  playerSubtitle.textContent = track.subtitle || track.desc || "";
  playerArt.src = track.img || buildAvatarUrl(track.name || track.title, "1ed760");

  updatePlayIcon(true);
  updatePlayerLikeIcon();
}

function updatePlayIcon(isPlaying) {
  if (isPlaying) {
    playIcon.className = "fa-solid fa-pause";
  } else {
    playIcon.className = "fa-solid fa-play";
  }
}

playBtn.addEventListener("click", function () {
  if (audioPlayer.src === "") {
    return;
  }

  if (audioPlayer.paused) {
    audioPlayer.play();
    updatePlayIcon(true);
  } else {
    audioPlayer.pause();
    updatePlayIcon(false);
  }
});

document.getElementById("nextBtn").addEventListener("click", function () {
  if (playlist.length === 0) {
    return;
  }

  currentIndex = (currentIndex + 1) % playlist.length;
  playTrack(playlist[currentIndex], playlist, currentIndex);
});

document.getElementById("prevBtn").addEventListener("click", function () {
  if (playlist.length === 0) {
    return;
  }

  currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
  playTrack(playlist[currentIndex], playlist, currentIndex);
});

audioPlayer.addEventListener("timeupdate", function () {
  const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;

  progressFill.style.width = (isNaN(percent) ? 0 : percent) + "%";
  currentTimeLabel.textContent = formatTime(audioPlayer.currentTime);
  totalTimeLabel.textContent = formatTime(audioPlayer.duration);
});

audioPlayer.addEventListener("ended", function () {
  document.getElementById("nextBtn").click();
});

progressBar.addEventListener("click", function (e) {
  const rect = this.getBoundingClientRect();
  const percent = (e.clientX - rect.left) / rect.width;

  audioPlayer.currentTime = percent * audioPlayer.duration;
});

volumeBar.addEventListener("click", function (e) {
  const rect = this.getBoundingClientRect();
  const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));

  audioPlayer.volume = percent;
  volumeFill.style.width = (percent * 100) + "%";
});

audioPlayer.volume = 0.7;

function isLiked(id) {
  return likedSongs.indexOf(id) !== -1;
}

function toggleLike(id) {
  if (isLiked(id)) {
    likedSongs = likedSongs.filter(function (item) {
      return item !== id;
    });
  } else {
    likedSongs.push(id);
  }

  updateLikedCountDisplay();
  refreshAllLikeButtons();
}

function updateLikedCountDisplay() {
  if (likedSongs.length === 0) {
    likedCountText.textContent = "You haven't liked anything yet";
  } else {
    likedCountText.textContent = likedSongs.length + " song" + (likedSongs.length === 1 ? "" : "s") + " liked";
  }
}

function updatePlayerLikeIcon() {
  const icon = playerLikeBtn.querySelector("i");

  if (isLiked(currentTrackId)) {
    playerLikeBtn.classList.add("liked");
    icon.className = "fa-solid fa-heart";
  } else {
    playerLikeBtn.classList.remove("liked");
    icon.className = "fa-regular fa-heart";
  }
}

function refreshAllLikeButtons() {
  document.querySelectorAll(".card-like-btn").forEach(function (btn) {
    const id = btn.getAttribute("data-id");
    const icon = btn.querySelector("i");

    if (isLiked(id)) {
      btn.classList.add("liked");
      icon.className = "fa-solid fa-heart";
    } else {
      btn.classList.remove("liked");
      icon.className = "fa-regular fa-heart";
    }
  });

  updatePlayerLikeIcon();
}

playerLikeBtn.addEventListener("click", function () {
  if (!currentTrackId) {
    return;
  }

  toggleLike(currentTrackId);
});

function createLikeButton(id) {
  const btn = document.createElement("button");
  btn.className = "card-like-btn";
  btn.setAttribute("data-id", id);

  const icon = document.createElement("i");
  icon.className = isLiked(id) ? "fa-solid fa-heart" : "fa-regular fa-heart";
  btn.appendChild(icon);

  if (isLiked(id)) {
    btn.classList.add("liked");
  }

  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleLike(id);
  });

  return btn;
}

function renderTrending() {
  const row = document.getElementById("trendingRow");
  row.innerHTML = "";

  trendingAlbums.forEach(function (album, index) {
    const card = document.createElement("div");
    card.className = "music-card trending-card";

    card.innerHTML =
      '<img src="' + album.img + '" alt="' + album.title + '">' +
      "<h3>" + album.title + "</h3>" +
      "<p>" + album.subtitle + "</p>" +
      '<div class="play-icon-badge"><i class="fa-solid fa-play"></i></div>';

    card.appendChild(createLikeButton(album.id));

    card.addEventListener("click", function () {
      playTrack(album, trendingAlbums, index);
    });

    row.appendChild(card);
  });
}

function renderRadio() {
  const row = document.getElementById("radioRow");

  if (!row) return;

  row.innerHTML = "";
  const artistTracks = radioArtists.map(function (artist) {
    return {
      id: artist.id,
      name: artist.name,
      audio: artist.audio,
      img: artist.img
    };
  });

  radioArtists.forEach(function (artist, index) {

    const card = document.createElement("div");
    card.className = "artist-card";

    card.innerHTML = `
      <img
        class="artist-photo"
        src="${artist.img}"
        alt="${artist.name}"
        loading="lazy"
      >

      <h3>${artist.name}</h3>

      <p>Artist</p>
    `;
    card.addEventListener("click", function () {
      playTrack(
        artistTracks[index],
        artistTracks,
        index
      );
    });

    row.appendChild(card);
  });
}

function renderCharts() {
  const row = document.getElementById("chartRow");
  row.innerHTML = "";

  const chartTracks = featuredCharts.map(function (c) {
    return { id: c.id, title: c.title, subtitle: c.desc, audio: c.audio, img: "" };
  });

  featuredCharts.forEach(function (chart, index) {
    const card = document.createElement("div");
    card.className = "music-card chart-card";
    card.style.background = chart.gradient;

    card.innerHTML =
      '<div class="chart-tag"><i class="fa-solid fa-chart-line"></i></div>' +
      "<h3>" + chart.title + "</h3>" +
      '<div class="chart-label"><i class="fa-solid fa-arrow-up-right-from-square"></i>' + chart.label + "</div>" +
      "<p>" + chart.desc + "</p>";

    card.appendChild(createLikeButton(chart.id));

    card.addEventListener("click", function () {
      playTrack(chartTracks[index], chartTracks, index);
    });

    row.appendChild(card);
  });
}

function initCarousels() {
  document.querySelectorAll(".carousel-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const row = document.getElementById(targetId);
      const scrollAmount = row.clientWidth * 0.8;

      if (this.classList.contains("next")) {
        row.scrollBy({ left: scrollAmount, behavior: "smooth" });
      } else {
        row.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    });
  });
}

function initSearch() {
  document.getElementById("searchInput").addEventListener("input", function (e) {
    const query = e.target.value.toLowerCase();
    const cards = document.querySelectorAll(".trending-card");

    cards.forEach(function (card, i) {
      const match = trendingAlbums[i].title.toLowerCase().includes(query) || trendingAlbums[i].subtitle.toLowerCase().includes(query);
      card.style.display = match || query === "" ? "block" : "none";
    });
  });
}

function init() {
  renderTrending();
  renderRadio();
  renderCharts();
  initCarousels();
  initSearch();
  updateLikedCountDisplay();
}

document.addEventListener("DOMContentLoaded", init);