let main = document.getElementById("main");

let arr = [
  `https://images.unsplash.com/photo-1749740587119-d3d7d9b9a19f?w=600&auto=format&fit=crop&q=60`,
  `https://images.unsplash.com/photo-1751528962027-ac9f0370ff5d?w=600&auto=format&fit=crop&q=60`,
  `https://images.unsplash.com/photo-1753808645289-283497260e33?w=600&auto=format&fit=crop&q=60`,
  `https://images.unsplash.com/photo-1751768853626-3737132f25f7?w=600&auto=format&fit=crop&q=60`,
  `https://images.unsplash.com/photo-1752805936214-bbdd8c94a576?q=80&w=685&auto=format&fit=crop`,
  `https://images.unsplash.com/photo-1753454116027-4f3ff53af389?w=600&auto=format&fit=crop&q=60`,
  `https://images.unsplash.com/photo-1749947393466-cb5e81bc943d?w=600&auto=format&fit=crop&q=60`,
  `https://images.unsplash.com/photo-1752772318262-00af359abf09?w=600&auto=format&fit=crop&q=60`,
];

for (let i = 0; i < arr.length; i++) {
  document.getElementById(`sq${i + 1}`).style.backgroundImage = `url(${arr[i]})`;
}

document.getElementById('text-area').innerHTML = `Not Selected`;


function imageText(id) {
  switch (id) {
    case 1:
      document.getElementById('text-area').innerHTML = `Girls`;
    //  document.body.style.backgroundColor = "#97d1e7ff";
      break;

    case 2: document.getElementById('text-area').innerHTML = `Car`;
    // document.body.style.backgroundColor = "#74e474ff";
      break;

    case 3: document.getElementById('text-area').innerHTML = `House`;
    // document.body.style.backgroundColor = "white";
      break;

    case 4: document.getElementById('text-area').innerHTML = `Tokyo Night`;
    // document.body.style.backgroundColor = "#132C2D";
      break;

    case 5: document.getElementById('text-area').innerHTML = `Pink Flower`;
    // document.body.style.backgroundColor = "#FFB6C1";
      break;

    case 6: document.getElementById('text-area').innerHTML = `White Flower`;
    // document.body.style.backgroundColor = "#e8e8bcff";
      break;

    case 7: document.getElementById('text-area').innerHTML = `Camera`;
    // document.body.style.backgroundColor = "#E8BEAC";
      break;

    case 8: document.getElementById('text-area').innerHTML = `City`;
    // document.body.style.backgroundColor = "#ece7e7ff";
      break;
  }
}
function openImageModal(imageUrl, captionText) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const caption = document.getElementById("imageCaption");

    modalImg.src = imageUrl;
    caption.textContent = captionText;
    modal.style.display = "flex";
}

function closeImageModal() {
    document.getElementById("imageModal").style.display = "none";
}