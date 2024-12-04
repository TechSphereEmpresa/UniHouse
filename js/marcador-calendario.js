function updateMarkerPosition() {
  const horarios = document.getElementById('horarios');
  const marker = document.getElementById('currentTimeMarker');

  if (!horarios || !marker) {
    console.error('Elementos #horarios ou #currentTimeMarker não encontrados.');
    return;
  }

  // Obtemos a altura real do contêiner de horários
  const containerHeight = horarios.offsetHeight;

  // Hora e minuto atuais
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  // Calculamos o progresso do dia em porcentagem
  const totalMinutesInDay = 24 * 60;
  const currentMinutes = currentHour * 60 + currentMinute;
  const dayProgress = currentMinutes / totalMinutesInDay;

  // Calculamos a posição do marcador
  const positionY = Math.min(containerHeight, Math.max(0, dayProgress * containerHeight));

  marker.style.top = `${positionY}px`;
}

// Chamada inicial e atualização a cada minuto
updateMarkerPosition();
setInterval(updateMarkerPosition, 60000);