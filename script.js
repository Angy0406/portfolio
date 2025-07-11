const imagePaths = [
  'resources/images/image1.jpg',
  'resources/images/image2.jpg',
  'resources/images/image3.jpg'
  // Add more image filenames here
];

const gallery = document.getElementById('gallery');

imagePaths.forEach(path => {
  const img = document.createElement('img');
  img.src = path;
  img.alt = "Hair styling work";
  gallery.appendChild(img);
});
