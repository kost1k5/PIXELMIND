const fs = require("fs").promises;
const path = require("path");

// Configuration
const componentsDir = "./components"; // Directory with component HTML files
const outputFile = "./generated.js"; // Output JS file

// ComponentFactory definition for CommonJS
const factoryCode = `
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
                    if (!response.ok) throw new Error(\`Failed to fetch \${htmlFile}\`);
                    const html = await response.text();
                    if (this.shadow) {
                        this.shadow.innerHTML = html;
                    } else {
                        this.innerHTML = html;
                    }
                } catch (error) {
                    console.error(\`Error in \${tagName}:\`, error);
                    const errorMsg = \`<p>Error loading \${htmlFile}</p>\`;
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
`;

// Recursively find all .html files
async function findHtmlFiles(dir) {
  let results = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(await findHtmlFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      results.push(fullPath);
    }
  }
  return results;
}

// Generate the components file
async function generateComponents() {
  try {
    // Find all HTML files
    const htmlFiles = await findHtmlFiles(componentsDir);
    if (htmlFiles.length === 0) {
      console.log("No .html files found in ./components");
      return;
    }

    // Generate component registration calls
    const componentRegistrations = htmlFiles
      .map((file) => {
        // Convert file path to tagName (e.g., "header/main.html" -> "header-main")
        const relativePath = path.relative(componentsDir, file);
        const tagName = [
          path.dirname(relativePath),
          path.basename(relativePath, ".html")
        ]
          .filter((part) => part !== ".") // Remove '.' from root-level files
          .join("-")
          .toLowerCase()
          .replace(/\\/g, "-"); // Replace backslashes with hyphens for Windows paths

        // Use relative path from project root for fetch
        const htmlFilePath = file.replace(/\\/g, "/"); // Normalize slashes for fetch

        return `ComponentFactory.createComponent({
    tagName: '${tagName}',
    htmlFile: '${htmlFilePath}',
    useShadow: true
});`;
      })
      .join("\n\n");

    // Combine factory and registrations into final content
    const fileContent = `${factoryCode}\n\n// Auto-generated component registrations\n${componentRegistrations}`;

    // Write to output file
    await fs.writeFile(outputFile, fileContent, "utf8");
    console.log(`Generated ${outputFile} with ${htmlFiles.length} components`);
  } catch (error) {
    console.error("Error generating components:", error);
  }
}

// Run the generator
generateComponents();
