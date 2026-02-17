  let selectedService = null;

  function scrollToServices() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
  }

  function selectService(service) {
    selectedService = service;
    document.getElementById('filter').classList.remove('hidden');
    document.getElementById('filter').scrollIntoView({ behavior: 'smooth' });
  }

  function goToBriefing() {
    if (!selectedService) {
      alert("Por favor, selecione um serviço antes de continuar.");
      return;
    }

    localStorage.setItem("servico", selectedService);
    window.location.href = "detalhes.html";
  }

    function copyPixKey() {
    const pixKey = "pagamentosviapix@gmail.com";
    navigator.clipboard.writeText(pixKey).then(() => {
      alert("Chave Pix copiada: " + pixKey);
    });
  }
