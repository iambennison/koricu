document.querySelectorAll('.kiC').forEach(c => {
    const s = c.getAttribute('data');
    const h = c.getAttribute('height');
    const w = c.getAttribute('width');
    const f = c.getAttribute('border');
    const p = 'https://www.kor.icu/p/embed.html';
    let l = false;
    const o = new IntersectionObserver(e => {
        e.forEach(d => {
            if (d.isIntersecting && !l) {
                c.style.width = w;
                c.style.height = h;
                c.style.position = 'relative';
                c.style.overflow = 'hidden';
                c.style.borderRadius = '15px';
                c.style.background = '#F1F6F9';
                c.style.display = 'block';
                const i = document.createElement('iframe');
                i.src = p;
                i.height = '100%';
                i.width = '100%';
                i.frameBorder = f;
                i.addEventListener('load', function() {
                    const ifTt = i.contentWindow.document.getElementById('ifTt');
                    if (ifTt) {
                        ifTt.src = `https://o.kor.icu/${s}`;
                    }
                });

                c.appendChild(i);
                l = true;
                o.unobserve(c);
            }
        });
    }, {
        threshold: 1.0
    });
    o.observe(c);
});
