
    onload = () => {
      const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");

        const titles = ('GIPY, I LOVE YOU').split('');
        const titleElement = document.getElementById('title');
        let index = 0;

        function appendTitle() {
          if (index < titles.length) {
            titleElement.innerHTML += titles[index];
            index++;
            setTimeout(appendTitle, 300); // 300ms delay per huruf
          } else {
            // Setelah teks utama selesai, tambahkan subtitle kecil
            const subtitle = document.createElement('p');
            subtitle.innerText = "Makasih udah mau percaya sama aku buat bikinin hadiah buat kalian kasih ke orang spesial";
            subtitle.style.fontSize = '20px'; // Ukuran font lebih kecil
            subtitle.font-family= '"Playwrite DE Grund", cursive';
            subtitle.style.marginTop = '2px'; // Spasi antara teks utama dan subtitle
            subtitle.style.color = '#fff'; // Warna abu-abu untuk teks subtitle


            // Menambahkan subtitle di bawah #title
            titleElement.appendChild(subtitle);
          }
        }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
