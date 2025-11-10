document.addEventListener("DOMContentLoaded", function() {
    if (window.hasRunWelcomePrompt) return; 
    window.hasRunWelcomePrompt = true;

    let name = prompt("Please enter your name:");
    const welcomeSpeech = document.getElementById('welcome-speech');

    if (welcomeSpeech) {
        if (name && name.trim() !== "") {
            welcomeSpeech.innerText = 'Halo, ' + name + ' Selamat Datang di Mie Gacoan, Rasanya Jagoan!';
        } else {
            welcomeSpeech.innerText = 'Selamat Datang di Mie Gacoan, Rasanya Jagoan!';
        }
    }

    const form = document.getElementById("messageForm");
    const resultBox = document.getElementById("resultBox");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Ambil nilai dari form
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const gender = document.querySelector("input[name='gender']:checked")?.value;
        const message = document.getElementById("message").value.trim();

        // Validasi Nama: hanya huruf dan spasi
        const namePattern = /^[A-Za-z\s]+$/;
        if (!namePattern.test(name)) {
            alert("Nama hanya boleh berisi huruf dan spasi tanpa simbol atau angka!");
            return;
        }

        //  Pesan minimal 10 karakter
        if (message.length < 10) {
            alert("Pesan minimal harus berisi 10 karakter!");
            return;
        }

        // Pastikan gender dipilih
        if (!gender) {
            alert("Pilih jenis kelamin terlebih dahulu!");
            return;
        }

        // Ambil waktu saat ini di zona Asia/Jakarta
        const currentTime = new Date().toLocaleString("id-ID", {
        timeZone: "Asia/Jakarta",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
        });

        // Tampilkan hasil di resultBox
        resultBox.innerHTML = `
        <p><strong>Waktu Saat Ini :</strong> ${currentTime}</p><br>
        <p><strong>Nama :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Jenis Kelamin :</strong> ${gender}</p>
        <p><strong>Pesan :</strong> ${message}</p>
        `;
        resultBox.classList.remove("hidden");
        form.reset();
  });
});



