
document.addEventListener('DOMContentLoaded', () => {
    // Rename "Namespaces" sidebar item to "Routes"
    const nsHeader = document.getElementById('sidebar-namespaces');
    if (nsHeader) {
        // The structure is <div>Namespaces</div><svg>...</svg>
        // We only want to change the text in the div
        const textDiv = nsHeader.querySelector('div');
        if (textDiv) textDiv.textContent = 'Routes';
    }

    // --- NEW LOGIC: Section-aware formatting ---
    const article = document.querySelector('article');
    if (article) {
        let currentSection = '';
        const children = Array.from(article.children);

        children.forEach(child => {
            // Track current section
            if (child.tagName === 'H2') {
                // Check ID or content to identify section
                const id = child.id || '';
                const text = child.textContent.trim().toLowerCase();
                if (id.includes('members') || text.includes('members')) {
                    currentSection = 'members';
                } else if (id.includes('methods') || text.includes('methods')) {
                    currentSection = 'methods';
                } else {
                    currentSection = 'other';
                }
            }

            // Process H3 entries
            if (child.tagName === 'H3' && child.classList.contains('name')) {
                // If it's already inside a wrapper (due to previous pass?), skip. 
                // But we are iterating the original snapshot.
                // Just check parent to be safe, though snapshot shouldn't matter if we move it.
                if (child.parentNode !== article) return;

                if (currentSection === 'methods') {
                    formatMethod(child);
                } else if (currentSection === 'members') {
                    formatMember(child);
                } else {
                    // Default fallback (maybe treat as method if it looks like one?)
                    // For now, leave as is or default to method style if unsafe
                    // But safe to ignore if unknown
                }
            }
        });
    }

    function formatMethod(methodHeading) {
        const wrapper = document.createElement('div');
        wrapper.className = 'custom-method-row';
        methodHeading.parentNode.insertBefore(wrapper, methodHeading);

        const col1 = document.createElement('div');
        col1.className = 'method-col-info';
        const col2 = document.createElement('div');
        col2.className = 'method-col-params';

        wrapper.appendChild(col1);
        wrapper.appendChild(col2);

        col1.appendChild(methodHeading);

        let next = wrapper.nextElementSibling;
        while (next && next.tagName !== 'H3' && next.tagName !== 'H2' && !next.classList.contains('custom-method-row') && !next.classList.contains('custom-member-row')) {
            const current = next;
            next = next.nextElementSibling;

            if (current.classList.contains('description')) {
                col1.appendChild(current);
            } else if (current.tagName === 'H5' && (current.textContent.trim() === 'Example' || current.textContent.trim() === 'Examples')) {
                current.remove(); // Remove Example header
            } else if (current.tagName === 'PRE') {
                current.remove(); // Remove code blocks (examples)
            } else if (current.classList.contains('method-member-container')) {
                if (current.innerText.includes('Parameters:')) {
                    col2.appendChild(current);
                } else if (current.innerText.includes('Returns:')) {
                    // Place Returns below the definition (methodHeading)
                    if (methodHeading.nextSibling) {
                        col1.insertBefore(current, methodHeading.nextSibling);
                    } else {
                        col1.appendChild(current);
                    }
                } else {
                    col1.appendChild(current);
                }
            } else if (current.tagName === 'DL' && current.classList.contains('details')) {
                col1.appendChild(current);
            } else {
                col1.appendChild(current);
            }
        }

        if (!col2.hasChildNodes() || col2.innerText.trim() === '') {
            const noneSpan = document.createElement('span');
            noneSpan.className = 'param-desc';
            noneSpan.style.fontStyle = 'italic';
            noneSpan.style.color = '#888';
            noneSpan.innerText = 'None';
            col2.appendChild(noneSpan);
        }
    }

    function formatMember(memberHeading) {
        // Create grid wrapper
        const wrapper = document.createElement('div');
        wrapper.className = 'custom-member-row';

        memberHeading.parentNode.insertBefore(wrapper, memberHeading);

        // 1. Parse Name and Anchor
        const nameDiv = document.createElement('div');
        nameDiv.className = 'member-col-name';

        // Move ID to wrapper or keep strict link? 
        // Better to keep the H3 hidden or move ID to nameDiv if possible.
        // Let's copy ID to nameDiv so links work
        if (memberHeading.id) {
            nameDiv.id = memberHeading.id;
            memberHeading.removeAttribute('id'); // avoid duplicate ID
        }

        // Logic to extract clean name from Clean-JSDoc H3 info
        // H3 usually: <span class="type-signature"></span>name<span class="type-signature"> :type</span>
        // We want just "name"
        let rawName = '';
        let typeStr = '';

        // Iterate nodes
        memberHeading.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                rawName += node.textContent;
            } else if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('type-signature')) {
                // capture type
                typeStr += node.textContent;
            }
        });

        // Clean up name (remove Signature dots if any, usually Clean JSDoc puts dots in span)
        nameDiv.textContent = rawName.trim();
        wrapper.appendChild(nameDiv);

        // 2. Parse Type
        const typeDiv = document.createElement('div');
        typeDiv.className = 'member-col-type';
        // Clean up type string (remove leading colon if present)
        // usually ":string" -> "string"
        let cleanType = typeStr.trim();
        if (cleanType.startsWith(':')) cleanType = cleanType.substring(1).trim();
        // If empty, try to find it in next siblings (member-item-container)
        typeDiv.textContent = cleanType;
        wrapper.appendChild(typeDiv);

        // 3. Description placeholder
        const descDiv = document.createElement('div');
        descDiv.className = 'member-col-desc';
        wrapper.appendChild(descDiv);

        // Hide original heading
        memberHeading.style.display = 'none';

        // Process siblings
        let next = wrapper.nextElementSibling;
        while (next && next.tagName !== 'H3' && next.tagName !== 'H2' && !next.classList.contains('custom-method-row') && !next.classList.contains('custom-member-row')) {
            const current = next;
            next = next.nextElementSibling;

            if (current.classList.contains('description')) {
                // Move text to desc column
                descDiv.innerHTML = current.innerHTML; // Keep HTML formatting
                current.remove(); // Completely remove from DOM
            } else if (current.classList.contains('member-item-container')) {
                // This container usually holds "Type: ..."
                // Check if it has type info we already extracted or just duplicates it
                // In Clean JSDoc, it often looks like: <strong>Type:</strong> <ul><li>...</li></ul>
                // We want to hide this entire block as we have the type in the column
                // Check content text
                const text = current.textContent.trim();
                // If extracted type is empty, we might want to grab it from here first
                if ((!typeDiv.textContent || typeDiv.textContent.trim() === '') && text.startsWith('Type:')) {
                    let extracted = text.replace('Type:', '').trim();
                    // Remove potential bullet points or newlines
                    extracted = extracted.replace(/^[\s\S]*?([a-zA-Z0-9_.<>|]+)[\s\S]*$/, '$1');
                    // Simple heuristic: just take the text, maybe clean up
                    const cleanText = current.innerText.replace('Type:', '').trim();
                    if (cleanText) typeDiv.textContent = cleanText;
                }
                current.remove(); // Completely remove from DOM
            } else {
                // Hide other details (like default values if any, or source links?)
                // For "Members" we want super compact.
                current.remove(); // Completely remove from DOM
            }
        }
    }

    function customTypeCheck(el) {
        // Helper to check if this container holds type info
        // Not strictly needed if we hide all member-item-containers in this section
        return el.textContent.trim().startsWith('Type:');
    }

    // Remove "Members" title from documentation
    const headings = document.querySelectorAll('h3, h4, .subsection-title');
    headings.forEach(h => {
        if (h.textContent.trim() === 'Members') {
            h.style.display = 'none';
        }
    });

    // Remove "Members" from the "On this page" sidebar/TOC
    // The selector depends on the theme structure, but typically it is in a container like .toc-container or right-sidebar
    const tocLinks = document.querySelectorAll('.toc-container a');
    tocLinks.forEach(link => {
        if (link.textContent.trim() === 'Members') {
            link.style.display = 'none';
        }
    });
});
