let ponksName = [
    "Alien", "Ape", "Zombie", "Female", "Male", "Beanie", "Choker", "Pilot Helmet", "Tiara" , "Orange Side", "Buck Teeth", "Welding Goggles", "Pigtails", "Pink With Hat",
    "Top Hat", "Spots", "Rosy Cheeks" , "Blonde Short", "Wild White Hair", "Cowboy Hat", "Wild Blonde", "Straight Hair Blonde", "Big Beard", "Red Mohawk", "Half Shaved"
    , "Blonde Bob", "Vampire Hair" ,"Clown Hair Green", "Straight Hair Dark", "Straight Hair", "Silver Chain" ,"Dark Hair" , "Purple Hair", "Gold Chain", "Medical Mask"
    , "Tassle Hat", "Fedora", "Police Cap", "Clown Nose", "Smile", "Cap Forward", "Hoodie", "Front Beard Dark", "Frown", "Purple Eye Shadow", "Handlebars", "Blue Eye Shadow"
   , "Green Eye Shadow", "Vape" ,"Front Beard", "Chinstrap", "3D Glasses", "Luxurious Beard", "Mustache" , "Normal Beard Black", "Normal Beard", "Eye Mask", "Goat", 
   "Do-rag", "Shaved Head" ,"Muttonchops", "Peak Spike", "Pipe", "VR" , "Cap", "Small Shades", "Clown Eyes Green", "Clown Eyes Blue", "Headband", "Crazy Hair", "Knitted Cap"
   , "Mohawk Dark", "Mohawk", "Mohawk Thin", "Frumpy Hair" ,"Wild Hair", "Messy Hair", "Eye Patch" ,"Stringy Hair", "Bandana", "Classic Shades", "Shadow Beard", "Regular Shades"
   , "Horned Rim Glasses", "Big Shades", "Nerd Glasses", "Black Lipstick", "Mole", "Purple Lipstick", "Hot Lipstick", "Cigarette", "Earring"
   ]
let ponksCount = [
    9, 24, 88, 3840, 6039, 44, 48, 54, 55, 66, 78, 86, 94, 95, 	115, 124, 128, 129, 136, 142, 144, 144, 146, 147, 147, 147, 147, 148, 148, 151, 156, 157, 165, 169, 
    175, 178, 186, 203, 212, 238, 254, 259, 260, 261, 262, 263, 266, 271, 272, 273, 282, 286, 286 ,288, 289, 292, 293, 295, 300, 300, 303, 303, 317, 332, 351, 378,
    382, 384, 406, 414, 419, 429, 441, 441, 442, 447, 460, 461, 463, 481, 502 , 526, 527, 535, 535, 572, 617, 644, 655, 696, 961, 2459
]

   console.log(ponksName.length);
   console.log(ponksCount.length);
   let sum = 0;
   for(let i = 0 ; i < ponksName.length ; i++){
    sum += ponksCount[i];
   }
   console.log(sum);