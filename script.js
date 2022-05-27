const fortuneWheelTemplate = document.createElement('template');

fortuneWheelTemplate.innerHTML = `
<style>
  :root { --spin-factor: 1080deg; }

  #container {
    width: min-content;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2em;
  }

  #arrow {
    font-size: 2em;
  }

  #spinner {
    width: 15em;
    height: 15em;
    display: flex;
    justify-content: center;
  }

  .spin { animation: spin 2s ease-out forwards; }

  .slice {
    height: 15em;
    width: 15em;
    border-radius: 50%;
    position: absolute;
    clip-path: polygon(0 0, 0 0, 0 64%, 50% 50%);
    line-height: 13em;
  }

  #sl1 {
    background-color: red;
    transform: rotate(0deg);
  }

  #sl2 {
    background-color: gold;
    transform: rotate(60deg);
  }

  #sl3 {
    background-color: cornflowerblue;
    transform: rotate(120deg);
  }

  #sl4 {
    background-color: green;
    transform: rotate(180deg);
  }

  #sl5 {
    background-color: orange;
    transform: rotate(240deg);
  }

  #sl6 {
    background-color: hotpink;
    transform: rotate(300deg);
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(var(--spin-factor)); }
  }
</style>
<div id=container>
  <div id=arrow>⬇</div>
  <div id=spinner class=spin>
    <div class=slice id=sl1>&nbsp&nbsp option1</div>
    <div class=slice id=sl2>&nbsp&nbsp option2</div>
    <div class=slice id=sl3>&nbsp&nbsp option3</div>
    <div class=slice id=sl4>&nbsp&nbsp option4</div>
    <div class=slice id=sl5>&nbsp&nbsp option5</div>
    <div class=slice id=sl6>&nbsp&nbsp option6</div>
  </div>
</div>
  <script>
    document.documentElement.style.setProperty(
      '--spin-factor', 1080 + (Math.random() * 1080) + 'deg'
    );
  </script>
`;

class fortuneWheel extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(fortuneWheelTemplate.content.cloneNode(true));
    this.shadowRoot.querySelector('#spinner').classList.remove('spin');
    this.shadowRoot.querySelector('#spinner').classList.add('spin');
  }
}

customElements.define('fortune-wheel', fortuneWheel);
