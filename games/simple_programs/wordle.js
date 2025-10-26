function secretWord() {
  const words = [
    "apple", "brave", "crane", "delta", "eagle", "flame", "grape", "heart", "ideal", "joker",
    "karma", "lemon", "mango", "night", "ocean", "pearl", "queen", "robot", "snake", "tiger",
    "uncle", "vivid", "whale", "xenon", "youth", "zebra", "angel", "beach", "cloud", "dance",
    "earth", "focus", "giant", "happy", "ivory", "jolly", "kneel", "light", "magic", "noble",
    "orbit", "piano", "quest", "royal", "smile", "table", "union", "voice", "water", "yacht",
    "zesty", "amber", "bloom", "chase", "dream", "frost", "grind", "honor", "input", "joint",
    "knock", "lunar", "model", "nurse", "olive", "press", "quilt", "river", "shade", "treat",
    "urban", "vital", "wheat", "xylem", "young", "zonal", "adapt", "blend", "craft", "drift",
    "flock", "globe", "haste", "infer", "jewel", "layer", "march", "nerve", "oasis", "plate",
    "quick", "ridge", "scale", "trace", "vapor", "weary", "yield", "zeros", "catch", "spice"
  ];
  const randomIndex = Math.floor(words.length * Math.random()); 

  return words[randomIndex]; 
}


function main() {
  console.log(secretWord()); 
}

main(); 
