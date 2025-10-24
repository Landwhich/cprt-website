class Header extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
            <header>
                <a href="./index.HTML">
                    <div class="nav-icon">
                        <div>
                            <img src="static/images/CPRTProfileWhite.png">
                        </div>
                        <div>
                            <p style="padding-left:5px;">CPRT</p>
                        </div>
                    </div>
                </a>
                <ul class="right-nav-div">
                    <li>
                        <a href="/team.HTML">THE TEAM</a>
                    </li>
                    <li>
                        <a href="./sponsors.HTML">SPONSORS</a>
                    </li>
                    <li>
                        <a href="./contact.HTML">CONTACT</a>
                    </li>
                    <li>
                        <a href="./merch.HTML">MERCH</a>
                    </li>
                </ul>
            </header>
        `;
    }
}

customElements.define('header-component', Header);