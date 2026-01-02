export default function hanitra(character) {
  // Ton mouvement ici !!!
  character.rotation.y += 0.1; // rotation sur l'axe Y
  character.position.y = Math.sin(Date.now() * 0.001) * 0.5; // petit saut
}
