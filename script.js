// Select the button and response paragraph
const joinBtn = document.getElementById("joinBtn");
const response = document.getElementById("response");

// Add click event
joinBtn.onclick = function() {
  response.textContent = "Thank you for joining Tech Society, Clifton Choongo welcomes you!";
  document.body.style.backgroundColor = "#7d9598ff"; // Change background color
  joinBtn.textContent = "Joined!";
};

// Load saved likes and emails
let likes = localStorage.getItem("likes")
  ? parseInt(localStorage.getItem("likes"))
  : 0;

let likedEmails = localStorage.getItem("likedEmails")
  ? JSON.parse(localStorage.getItem("likedEmails"))
  : [];

const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");
const emailInput = document.getElementById("likeEmail");
const likeMessage = document.getElementById("likeMessage");
const shareBtn = document.getElementById("shareBtn");

// Display saved likes
likeCount.textContent = likes;

likeBtn.addEventListener("click", () => {
  const email = emailInput.value.trim().toLowerCase();

  if (!email) {
    likeMessage.textContent = "❌ Please enter an email.";
    likeMessage.style.color = "red";
    return;
  }

  if (likedEmails.includes(email)) {
    likeMessage.textContent = "⚠️ This email has already liked.";
    likeMessage.style.color = "orange";
    return;
  }

  // New valid like
  likes++;
  likedEmails.push(email);

  localStorage.setItem("likes", likes);
  localStorage.setItem("likedEmails", JSON.stringify(likedEmails));

  likeCount.textContent = likes;
  likeMessage.textContent = "✅ Thanks for liking Tech Society!";
  likeMessage.style.color = "green";

  emailInput.value = "";
});


const wisdomBox = document.getElementById("wisdomBox");

wisdomBox.onclick = function () {
  alert(
    "💡 Wisdom from Tech Society:\n\nEvery expert was once a beginner. Keep coding, Clifton Choongo!"
  );
};
   const langTitle = document.getElementById("langTitle");
const langText = document.getElementById("langText");

langTitle.onclick = function () {
  langText.style.display =
    langText.style.display === "none" ? "block" : "none";
};

const progTitle = document.getElementById("progTitle");
const progText = document.getElementById("progText");

progTitle.onclick = function () {
  progText.style.display =
    progText.style.display === "none" ? "block" : "none";
};
const form = document.getElementById("joinForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;

  message.textContent =
    "Welcome to Tech Society, " + name + "! 🎉 We’re glad to have you.";
  form.reset();
});


