
document.addEventListener('DOMContentLoaded', () => {
    // Rename "Namespaces" sidebar item to "Routes"
    const nsHeader = document.getElementById('sidebar-namespaces');
    if (nsHeader) {
        // The structure is <div>Namespaces</div><svg>...</svg>
        // We only want to change the text in the div
        const textDiv = nsHeader.querySelector('div');
        if (textDiv) textDiv.textContent = 'Routes';
    }

    // Find all method headings
    // In clean-jsdoc-theme, methods usually start with h3.name or h4.name depending on nesting
    // Based on the ApiUser.html snippet, it's <h3 class="name has-anchor" id="...">

    // We want to group:
    // 1. The Method Name (h3.name) + Description (div.description after it)
    // 2. The Parameters (div.method-member-container with table.params inside)
    // 3. The Returns (div.method-member-container with dl.param-type inside or similar)
    // 4. Examples (div.method-member-container with pre) - Maybe keep full width or put in col 1?

    // The structure in Clean JSDoc Theme is flat:
    // h3
    // div.description
    // div.method-member-container (params)
    // div.method-member-container (returns)
    // div.method-member-container (example)
    // hr (sometimes) or next h3

    const methods = document.querySelectorAll('.article h3.name, article h3.name');

    methods.forEach(methodHeading => {
        // Create a wrapper for this method entry
        const wrapper = document.createElement('div');
        wrapper.className = 'custom-method-row';

        // Insert wrapper before the method heading
        methodHeading.parentNode.insertBefore(wrapper, methodHeading);

        // Create 3 columns
        const col1 = document.createElement('div');
        col1.className = 'method-col-info';

        const col2 = document.createElement('div');
        col2.className = 'method-col-params';

        const col3 = document.createElement('div');
        col3.className = 'method-col-returns';

        wrapper.appendChild(col1);
        wrapper.appendChild(col2);
        wrapper.appendChild(col3);

        // Move Elements into columns
        // We need to iterate siblings until we hit the next h3 or end of container

        // 1. Move Title (h3) and Description to Col 1
        col1.appendChild(methodHeading);

        // The description usually follows immediately
        let next = wrapper.nextElementSibling;

        // Safety check loop
        while (next && next.tagName !== 'H3' && !next.classList.contains('custom-method-row')) {
            const current = next;
            next = next.nextElementSibling; // Get next reference before moving current

            // Logic to distribute content
            if (current.classList.contains('description')) {
                col1.appendChild(current);
            } else if (current.classList.contains('method-member-container')) {
                // Check if it holds Parameters or Returns or Example
                if (current.innerText.includes('Parameters:')) {
                    col2.appendChild(current);
                } else if (current.innerText.includes('Returns:')) {
                    col3.appendChild(current);
                } else {
                    // Examples or others -> Put in Col 1 for now (or maybe a full width row?)
                    // If we put it in col1 it might stretch too much.
                    // For now let's put it in Col 1 at bottom
                    // col1.appendChild(current);
                }
            } else if (current.tagName === 'DL' && current.classList.contains('details')) {
                // Deprecated warnings etc often come in DL details
                col1.appendChild(current);
            } else {
                // Catch-all
                col1.appendChild(current);
            }
        }

        // Post-processing: Check if columns are empty
        if (!col2.hasChildNodes() || col2.innerText.trim() === '') {
            const noneSpan = document.createElement('span');
            noneSpan.className = 'param-desc';
            noneSpan.style.fontStyle = 'italic';
            noneSpan.style.color = '#888';
            noneSpan.innerText = 'None';
            col2.appendChild(noneSpan);
        }
    });
});
