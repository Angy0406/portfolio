const imagePaths = [
  'Ballerina_bun_red_roses.jpg',
  'Ballerina_bun.jpg',
  'Braids_with_ribbon_right.jpg',
  'Braids_with_ribbon.jpg',
  'Bun_roll_horizontal_above.jpg',
  'Bun_roll_horizontal.jpg',
  'Choppy_cut_back.jpg',
  'Choppy_cut_right.jpg',
  'Curly_bun_with_twist_back.jpg',
  'Curly_bun_with_twist_front_curls.jpg',
  'Curly_bun_with_twist_left.jpg',
  'Curly_bun_with_twist_right.jpg',
  'Dutch_braid_butterflies.jpg',
  'Flipped_bob_right.jpg',
  'French_braid_butterfly.jpg',
  'French_twist_back.jpg',
  'French_twist_pink_back.jpg',
  'French_twist_pink_right.jpg',
  'French_twist_pink_side.jpg',
  'French_twist_side.jpg',
  'Heart_braid_back.jpg',
  'Heart_braid_right.jpg',
  'Messy_curls_back.jpg',
  'Rolls_with_tousled_pieces_above.jpg',
  'Rolls_with_tousled_pieces_front.jpg',
  'Rolls_with_tousled_pieces.jpg',
  'Rolls._with_tousled_pieces_left.jpg',
  'Rose_bun_back.jpg',
  'Rose_bun_right_side.jpg',
  'Roses_braids_with_dutch_braid.jpg',
  'S_braid.jpg',
  'Twists_both_sides_left.jpg',
  'Twists_both_sides_zoom.jpg',
  'Twists_both_sides.jpg',
  'Waves.jpg'
  // Add more image filenames here
];

const gallery = document.getElementById('gallery');

imagePaths.forEach(path => {
  const img = document.createElement('img');
  img.src = 'resources/images/' + path;
  img.alt = "Hair styling work";
  gallery.appendChild(img);
});
