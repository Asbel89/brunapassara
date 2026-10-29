(() => {
  const form = document.getElementById('lead-form');
  if (!form) return;

  const nome = document.getElementById('f-nome');
  const ingles = document.getElementById('f-ingles');
  const quando = document.getElementById('f-quando');
  const money = document.getElementById('f-money');
  const duvida = document.getElementById('f-duvida');
  const success = document.getElementById('form-success');
  const fallback = document.getElementById('wa-fallback');
  const button = document.getElementById('btn-submit');

  const WHATSAPP = 'https://wa.me/353833722711';

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const linhas = [
      'Olá, Bruna! Vim pelo seu site. ☘️',
      '',
      `Meu nome é ${nome.value.trim()}.`,
      `Nível de inglês: ${ingles.value}.`,
      `Quando quero ir: ${quando.value.trim() || 'ainda não defini'}.`,
      `Investimento previsto: ${money.value}.`
    ];

    if (duvida.value.trim()) {
      linhas.push(`O que quero saber: ${duvida.value.trim()}`);
    }

    linhas.push(
      '',
      'Pode me passar mais informações sobre o intercâmbio na Irlanda?'
    );

    const url = `${WHATSAPP}?text=${encodeURIComponent(linhas.join('\n'))}`;

    fallback.href = url;
    success.hidden = false;

    window.open(url, '_blank', 'noopener');

    const textoOriginal = button.innerHTML;
    button.textContent = 'Abrindo o WhatsApp…';
    button.disabled = true;

    window.setTimeout(() => {
      button.innerHTML = textoOriginal;
      button.disabled = false;
    }, 2500);
  });
})();
