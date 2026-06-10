const phrases = [
    'write -O2 --no-undefined-behavior kernel.c',
    'cargo build --release --target thumbv7m-none-eabi',
    'nasm -f elf64 boot.asm && ld -o kernel boot.o',
    'zig build-exe main.zig -target x86_64-linux-musl',
    'odin run .'
];
let pi = 0, ci = 0, deleting = false;
const el = document.getElementById('typed-text');
function type() {
    const phrase = phrases[pi];
    if (!deleting) {
        el.textContent = phrase.slice(0, ++ci);
        if (ci === phrase.length) { deleting = true; setTimeout(type, 2200); return; }
        setTimeout(type, 38 + Math.random() * 22);
    } else {
        el.textContent = phrase.slice(0, --ci);
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(type, 400); return; }
        setTimeout(type, 18);
    }
}
setTimeout(type, 900);

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));