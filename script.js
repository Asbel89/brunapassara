const form = document.getElementById('lead-form');
const nomeEl = document.getElementById('f-nome');
const inglesEl = document.getElementById('f-ingles');
const quandoEl = document.getElementById('f-quando');
const moneyEl = document.getElementById('f-money');
const btnSubmit = document.getElementById('btn-submit');
const formOk = document.getElementById('form-ok');
const WA = 'https://wa.me/message/JQ7TFFYIMI4OJ1';

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nome = nomeEl.value.trim();
  if (!nome) {
    nomeEl.focus();
    nomeEl.style.borderColor = '#e11d48';
    return;
  }
  nomeEl.style.borderColor = '';

  const ingles = inglesEl.value;
  const quando = quandoEl.value
    ? new Date(quandoEl.value + '-02').toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })
    : 'nos próximos meses';
  const money = moneyEl.value;

  const texto = `Olá Bruna! Sou ${nome} 🇧🇷\nVi que você trabalha em escola em Dublin e quero informação REAL 🏫🇮🇪\n\n• Inglês: ${ingles}\n• Quero ir: ${quando}\n• Investimento: ${money}\n\nPode me passar valores, turmas e meu diagnóstico gratuito? 💚`;

  try {
    await navigator.clipboard.writeText(texto);
  } catch {}

  btnSubmit.disabled = true;
  btnSubmit.textContent = 'ABRINDO WHATSAPP…';
  formOk.hidden = false;

  window.open(WA, '_blank', 'noopener');

  setTimeout(() => {
    btnSubmit.disabled = false;
    btnSubmit.textContent = 'ENVIAR FORMULÁRIO →';
  }, 3000);
});
