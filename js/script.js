document.addEventListener("DOMContentLoaded", function () {
  if (window.hasRunWelcomePrompt) return;
  window.hasRunWelcomePrompt = true;

  // 🔹 Minta nama pengunjung
  let name = prompt("Halo! Siapa namamu?");
  const welcomeSpeech = document.getElementById("welcome-speech");

  // 🔹 Tampilkan sambutan personal
  if (welcomeSpeech) {
    if (name && name.trim() !== "") {
      welcomeSpeech.innerText =
        "Hai, " + name + "! Selamat datang di portofolio saya 👋";
    } else {
      welcomeSpeech.innerText = "Selamat datang di portofolio saya 👋";
    }
  }

  // 🔹 Tangani form kontak
  const form = document.getElementById("messageForm");
  const resultBox = document.getElementById("resultBox");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Ambil nilai form
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validasi nama
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
      alert("Nama hanya boleh berisi huruf dan spasi tanpa simbol atau angka!");
      return;
    }

    // Validasi pesan minimal 10 karakter
    if (message.length < 10) {
      alert("Pesan minimal harus berisi 10 karakter!");
      return;
    }

    // Ambil waktu saat ini di Asia/Jakarta
    const currentTime = new Date().toLocaleString("id-ID", {
      timeZone: "Asia/Jakarta",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    // Tampilkan hasil ke resultBox
    resultBox.innerHTML = `
      <p><strong>Waktu Dikirim :</strong> ${currentTime}</p><br>
      <p><strong>Nama :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Pesan :</strong> ${message}</p>
      <br>
      <p class="italic text-green-300">Terima kasih sudah menghubungi saya! 💬</p>
    `;

    resultBox.classList.remove("hidden");
    resultBox.scrollIntoView({ behavior: "smooth" });
    form.reset();
  });
});
