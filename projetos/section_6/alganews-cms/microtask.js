function understandMicroTask() {
  // primeiro executa os códigos sincronos
  // segundo executa as micro-taks (executa no final do loop atual)
  // terceiro as macro-tasks (executa no início do próximo loop)

  console.log('1 - console.log'); // sincrono
  setTimeout(() => console.log('2 - setTimeout'), 0); // macro-taks
  Promise.resolve().then(() => console.log('3 - Promisse')); // micro-taks
  console.log('4 - console.log'); // sincrono
  return 'batata';
}
