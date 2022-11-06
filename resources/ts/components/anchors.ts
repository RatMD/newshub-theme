import query from "../utilities/query";
import ready from "../utilities/ready";

function invokeAnchors(root: HTMLElement) {
    let selector = [1,2,3,4,5,6].map(i => `${root.dataset.target} > h${i}`).join(', ');
    let headers: NodeListOf<HTMLElement> = document.querySelectorAll(selector);
    let anchors: NodeListOf<HTMLElement> = root.querySelectorAll('[data-toc-position]');
    if (headers.length === 0 || anchors.length === 0) {
        return;
    }

    // Set Headers
    let firstIsTop = headers.length < anchors.length;
    for (let i = 0; i < headers.length; i++) {
        if (i === 0 && firstIsTop) {
            anchors[i].addEventListener('click', (ev) => {
                ev.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        let header = headers[i];
        let anchor = anchors[firstIsTop? i+1: i].firstElementChild as HTMLAnchorElement;
        if (!header.id || header.id === '') {
            header.id = anchor.hash.slice(1);
        } else {
            anchor.hash = `#${header.id}`;
        }
    }

    // Scroll to Current
    let currentHash = location.hash;
    if (currentHash && currentHash.length > 0) {
        let currentHeader = Array.from(headers).filter(h => h.id === currentHash.slice(1));
        currentHeader[0].scrollIntoView();
    }
}

// Export Module
export default (() => {
    ready(() => { query('[data-handle="js-anchors"][data-target]').map(c => invokeAnchors(c)) });
});
