document.getElementById('baseAlturaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const area = (base * altura) / 2;
    document.getElementById('resultadoBaseAltura').textContent = `Área: ${area}`;
});

document.getElementById('heronForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const ladoA = parseFloat(document.getElementById('ladoA').value);
    const ladoB = parseFloat(document.getElementById('ladoB').value);
    const ladoC = parseFloat(document.getElementById('ladoC').value);
    const semiPerimetro = (ladoA + ladoB + ladoC) / 2;
    const area = Math.sqrt(semiPerimetro * (semiPerimetro - ladoA) * (semiPerimetro - ladoB) * (semiPerimetro - ladoC));
    document.getElementById('resultadoHeron').textContent = `Área: ${area}`;
});
