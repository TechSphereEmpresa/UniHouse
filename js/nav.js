class nav extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav>
            <ul>
        <li>
            <a href="../inicio/home.html">
                <img src="../../assets/icons/nav/home.svg" alt="">
                <p>Início</p>
            </a>
            <a href="../financeiro/financeiro.html">
                <img src="../../assets/icons/nav/wallet.svg" alt="">
                <p>Financeiro</p>
            </a>
            <a href="../relatorio/relatorio.html">
                <img src="../../assets/icons/nav/relatorio.svg" alt="">
                <p>Relatório</p>
            </a>
            <a href="../chat/chat.html">
                <img src="../../assets/icons/nav/chat.svg" alt="">
                <p>Chat</p>
            </a>
        </li>
    </ul>
        </nav>
      `;
    }
  }
  customElements.define('my-header', MyHeader);