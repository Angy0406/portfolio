const gallery = document.getElementById('gallery');

const images = [
        {
            "file_name": "Ballerina_bun_red_roses.jpg"
        },
        {
            "file_name": "Ballerina_bun.jpg"
        },
        {
            "file_name": "Braids_with_ribbon_right.jpg"
        },
        {
            "file_name": "Braids_with_ribbon.jpg"
        },
        {
            "file_name": "Bun_roll_horizontal_above.jpg"
        },
        {
            "file_name": "Bun_roll_horizontal.jpg"
        },
        {
            "file_name": "Choppy_cut_back.jpg"
        },
        {
            "file_name": "Choppy_cut_right.jpg"
        },
        {
            "file_name": "Curly_bun_with_twist_back.jpg"
        },
        {
            "file_name": "Curly_bun_with_twist_front_curls.jpg"
        },
        {
            "file_name": "Curly_bun_with_twist_left.jpg"
        },
        {
            "file_name": "Curly_bun_with_twist_right.jpg"
        },
        {
            "file_name": "Dutch_braid_butterflies.jpg"
        },
        {
            "file_name": "Flipped_bob_right.jpg"
        },
        {
            "file_name": "French_braid_butterfly.jpg"
        },
        {
            "file_name": "French_twist_back.jpg"
        },
        {
            "file_name": "French_twist_pink_back.jpg"
        },
        {
            "file_name": "French_twist_pink_right.jpg"
        },
        {
            "file_name": "French_twist_pink_side.jpg"
        },
        {
            "file_name": "French_twist_side.jpg"
        },
        {
            "file_name": "Heart_braid_back.jpg"
        },
        {
            "file_name": "Heart_braid_right.jpg"
        },
        {
            "file_name": "Messy_curls_back.jpg"
        },
        {
            "file_name": "Rolls_with_tousled_pieces_above.jpg"
        },
        {
            "file_name": "Rolls_with_tousled_pieces_front.jpg"
        },
        {
            "file_name": "Rolls_with_tousled_pieces.jpg"
        },
        {
            "file_name": "Rolls._with_tousled_pieces_left.jpg"
        },
        {
            "file_name": "Rose_bun_back.jpg"
        },
        {
            "file_name": "Rose_bun_right_side.jpg"
        },
        {
            "file_name": "Roses_braids_with_dutch_braid.jpg"
        },
        {
            "file_name": "S_braid.jpg"
        },
        {
            "file_name": "Twists_both_sides_left.jpg"
        },
        {
            "file_name": "Twists_both_sides_zoom.jpg"
        },
        {
            "file_name": "Twists_both_sides.jpg"
        },
        {
            "file_name": "Waves.jpg"
        }
    ]

images.forEach(imageObj => {
  const img = document.createElement('img');
  img.src = 'resources/images/' + imageObj.file_name;
  img.alt = "Hair styling work";
  gallery.appendChild(img);
});
