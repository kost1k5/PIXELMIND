
const ComponentFactory = {
    createComponent({ tagName, htmlFile, useShadow = true }) {
        class CustomComponent extends HTMLElement {
            constructor() {
                super();
                if (useShadow) {
                    this.shadow = this.attachShadow({ mode: 'open' });
                }
                this.loadContent();
            }

            async loadContent() {
                try {
                    const response = await fetch(htmlFile);
                    if (!response.ok) throw new Error(`Failed to fetch ${htmlFile}`);
                    const html = await response.text();
                    if (this.shadow) {
                        this.shadow.innerHTML = html;
                    } else {
                        this.innerHTML = html;
                    }
                } catch (error) {
                    console.error(`Error in ${tagName}:`, error);
                    const errorMsg = `<p>Error loading ${htmlFile}</p>`;
                    if (this.shadow) {
                        this.shadow.innerHTML = errorMsg;
                    } else {
                        this.innerHTML = errorMsg;
                    }
                }
            }
        }

        if (!customElements.get(tagName)) {
            customElements.define(tagName, CustomComponent);
        }
    }
};

// Make ComponentFactory globally available
window.ComponentFactory = ComponentFactory;


// Auto-generated component registrations
ComponentFactory.createComponent({
    tagName: 'app-footer',
    htmlFile: 'components/app-footer.html',
    useShadow: true
});

ComponentFactory.createComponent({
    tagName: 'app-header',
    htmlFile: 'components/app-header.html',
    useShadow: true
});

ComponentFactory.createComponent({
    tagName: 'test',
    htmlFile: 'components/test.html',
    useShadow: true
});