const gallery = document.getElementById('gallery');

const images = [
{
    "file_name": "Choppy_cut_back.jpg",
    "date": "2025-06-01"
},
{
    "file_name": "Choppy_cut_right.jpg",
    "date": "2025-06-01"
},
{
    "file_name": "Messy_curls_back.jpg",
    "date": "2025-06-02"
},
{
    "file_name": "Blowout_straight_blonde_front.jpg",
    "date": "2025-06-02"
},
{
    "file_name": "Twists_both_sides_left.jpg",
    "date": "2025-06-03"
},
{
    "file_name": "Twists_both_sides_zoom.jpg",
    "date": "2025-06-03"
},
{
    "file_name": "Twists_both_sides.jpg",
    "date": "2025-06-03"
},
{
    "file_name": "Ballerina_bun_red_roses.jpg",
    "date": "2025-06-04"
},
{
    "file_name": "Ballerina_bun.jpg",
    "date": "2025-06-04"
},
{
    "file_name": "Braids_with_ribbon_right.jpg",
    "date": "2025-06-05"
},
{
    "file_name": "Braids_with_ribbon.jpg",
    "date": "2025-06-05"
},
{
    "file_name": "Curly_bun_with_twist_back.jpg",
    "date": "2025-06-06"
},
{
    "file_name": "Curly_bun_with_twist_front_curls.jpg",
    "date": "2025-06-06"
},
{
    "file_name": "Curly_bun_with_twist_left.jpg",
    "date": "2025-06-06"
},
{
    "file_name": "Curly_bun_with_twist_right.jpg",
    "date": "2025-06-06"
},
{
    "file_name": "Heart_braid_back.jpg",
    "date": "2025-06-07"
},
{
    "file_name": "Heart_braid_right.jpg",
    "date": "2025-06-07"
},
{
    "file_name": "S_braid.jpg",
    "date": "2025-06-08"
},
{
    "file_name": "Flipped_bob_right.jpg",
    "date": "2025-06-09"
},
{
    "file_name": "Dutch_braid_butterflies.jpg",
    "date": "2025-06-10"
},
{
    "file_name": "Bun_roll_horizontal_above.jpg",
    "date": "2025-06-12"
},
{
    "file_name": "Bun_roll_horizontal.jpg",
    "date": "2025-06-12"
},
{
    "file_name": "Rolls_with_tousled_pieces_above.jpg",
    "date": "2025-06-13"
},
{
    "file_name": "Rolls_with_tousled_pieces_front.jpg",
    "date": "2025-06-13"
},
{
    "file_name": "Rolls_with_tousled_pieces.jpg",
    "date": "2025-06-13"
},
{
    "file_name": "Rolls._with_tousled_pieces_left.jpg",
    "date": "2025-06-13"
},
{
    "file_name": "French_twist_pink_back.jpg",
    "date": "2025-06-14"
},
{
    "file_name": "French_twist_pink_right.jpg",
    "date": "2025-06-14"
},
{
    "file_name": "French_twist_pink_side.jpg",
    "date": "2025-06-14"
},
{
    "file_name": "Curls_tight.jpg",
    "date": "2025-07-16"
},
{
    "file_name": "French_braid_butterfly.jpg",
    "date": "2025-07-16"
},
{
    "file_name": "French_twist_back.jpg",
    "date": "2025-07-16"
},
{
    "file_name": "French_twist_side.jpg",
    "date": "2025-07-16"
},
{
    "file_name": "Rose_bun_back.jpg",
    "date": "2025-07-16"
},
{
    "file_name": "Rose_bun_right_side.jpg",
    "date": "2025-07-16"
},
{
    "file_name": "Roses_braids_with_dutch_braid.jpg",
    "date": "2025-07-16"
},
{
    "file_name": "Waves_back.jpg",
    "date": "2025-07-17"
},
{
    "file_name": "Waves_left.jpg",
    "date": "2025-07-17"
},
{
    "file_name": "Waves_long_back.jpg",
    "date": "2025-07-17"
},
{
    "file_name": "Waves.jpg",
    "date": "2025-07-17"
},
{
    "file_name": "Double_braided_headband_back_wind.jpg",
    "date": "2025-07-18"
},
{
    "file_name": "Double_braided_headband_back.jpg",
    "date": "2025-07-18"
},
{
    "file_name": "Double_braided_headband_right.jpg",
    "date": "2025-07-18"
},
{
    "file_name": "Double_braided_headband.jpg",
    "date": "2025-07-18"
},
{
    "file_name": "Bun_daphne_bridgerton_back_sun.jpg",
    "date": "2025-07-19"
},
{
    "file_name": "Bun_daphne_bridgerton_back.jpg",
    "date": "2025-07-19"
},
{
    "file_name": "Bun_daphne_bridgerton_right_sun.jpg",
    "date": "2025-07-19"
}
{
    "file_name": "Spiral_braid_back.jpg",
    "date": "2025-07-22"
}
{
    "file_name": "Spiral_braid_right.jpg",
    "date": "2025-07-22"
}
{
    "file_name": "Spiral_braid_left.jpg",
    "date": "2025-07-22"
}
{
    "file_name": "Blow_out_straight_blonde_back.jpg",
    "date": "2025-07-22"
}
{
    "file_name": "Blow_out_straight_blonde.jpg",
    "date": "2025-07-22"
}
{
    "file_name": "Blow_out_straight_blonde_right.jpg",
    "date": "2025-07-22"
}
]

images
  .slice() // create a copy to avoid mutating the original array
  .sort((a, b) => b.date.localeCompare(a.date)) // newest first
  .forEach(imageObj => {
    const img = document.createElement('img');
    img.src = 'resources/images/' + imageObj.file_name;
    img.alt = "Hair styling work";
    gallery.appendChild(img);
  });

const modal = document.getElementById('fullscreenModal');
const fullscreenImage = document.getElementById('fullscreenImage');

gallery.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', () => {
    fullscreenImage.src = img.src;
    modal.style.display = 'flex';
  });
});

modal.addEventListener('click', () => {
  modal.style.display = 'none';
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal.style.display = 'none';
  }
});