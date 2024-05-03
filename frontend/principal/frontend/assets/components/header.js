class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Crie uma instância do template
    const headerTemplate = document.createElement('template');

    headerTemplate.innerHTML = `
      <style>
        .close-menu {
          display: none;
        }
        .menu-spacing{
          height: 6.5rem;
        }
        .menu{
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1;
          width: 50%;
          background-color: var(--color-nav);
          border-bottom:0.1rem solid var(--ligth-gray-color);
        }
        .menu-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 0;
          height:15vh;
          padding-bottom: 0;
        }
        .menu h1{
          font-size: 2.3rem;
          color: var(--primary-color);
        }
        .menu h1 a {
          color: inherit;
        }
        .menu ul {
          list-style: none;
          display: flex;
        }
        .menu ul li a {
          display: block;
          text-decoration: none;
          padding: 2rem;
          font-size: 1.8rem;
          color: var(--primary-color);
          position: relative;
        }

        .menu ul li a::after {
          content: '';
          position: absolute;
          bottom: 1rem;
          left: 50%; 
          width: 0;
          height: 0.2rem;
          background: var(--secondary-color);
          transition: all 300ms ease-in-out;
        }
        .menu ul li a:hover::after{
          width: 50%;
          left: 25%;
        }
        .image_logo {
          max-width: 28vh;
          padding: 2.5vh;
        }
        @media (max-width: 800px) {

          .menu {
            bottom: 0;
            text-align: center;
          }
          .menu-content, .menu-content ul{
              flex-direction: column;
              justify-content: center;
          }
          .menu-content{
              height:100vh;
          }
          .menu{
              display: none;
          }
      
          .close-menu-label::after {
              content: '☰';
              position: fixed;
              z-index: 2;
              top: 2rem;
              right: 2rem;
              background: var(--primary-color);
              color: var(--white-color);
              font-size: 3rem;
              line-height: 3rem;
              width: 3rem;
              height: 3rem;
              text-align: center;
              padding: 0.5rem;
              cursor: pointer;
          }
          .close-menu:checked~.menu {
              display: block;
          }
          .close-menu:checked~.close-menu-label::after {
              content: '×';
          }
          .menu-spacing {
              display: none;
          }
        }
      </style>
      <header>
      <input id="close-menu" class="close-menu" type="checkbox" aria-label="Fechar menu" role="button">
      <label class="close-menu-label" for="close-menu" title="Close menu"></label>
      <aside class="menu">
          <div class="main-content menu-content">
              <h1 onclick="getElementById('close-menu').checked = false;">
                  <a href="#home"><img class="image_logo" src="/frontend/images/Logotipo-Way-Final.png" alt=""></a>
              </h1>
  
              <nav>
                <ul onclick="getElementById('close-menu').checked = false;">
                  <li><a href="index.html">Inicio</a></li>
                  <li><a href="Sobre.html">Sobre</a></li>
                  <li><a href="servicos.html">Serviços</a></li>
                  <li><a href="#pricing">Localização</a></li>
                  <li><a href="contato.html">Contato</a></li>
                  <li><a href="/frontend/index.html">Chat</a></li>
                </ul>
              </nav>
          </div>
      </aside>
      </header>
    `;

    // Clone o conteúdo do template e adicione ao elemento
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
  }
}

customElements.define('header-component', Header);
