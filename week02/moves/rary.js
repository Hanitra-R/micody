// Hello! Ce mouvement fait un coucou du personnage pendant 3 secondes
export default function rary(character) {
    const parts = character.userData.parts; 
    const start = performance.now();
    const duration = 3000;
    let raf;

    function animate() {
        const t = (performance.now() - start) / duration;
        const p = Math.min(1, t);

    
        parts.rightUpper.rotation.x = -Math.sin(p * Math.PI) * 1.2;
        parts.rightLower.rotation.x = -Math.sin(p * Math.PI) * 0.8;

        character.rotation.y = Math.sin(p * Math.PI) * 0.1;

        if (p < 1) raf = requestAnimationFrame(animate);
        else {
   
            parts.rightUpper.rotation.x = 0;
            parts.rightLower.rotation.x = 0;
            character.rotation.y = 0;
        }
    }

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf); 
}
