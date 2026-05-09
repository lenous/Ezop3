import './styles/theme.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/mobile.css';

import { shellHtml } from './ui/shell';
import legacyRuntimeSource from './legacy/runtime.js?raw';

declare global {
  interface Window {
    __EZOP3_VERSION__?: string;
  }
}

window.__EZOP3_VERSION__ = '0.1.0';

const root = document.querySelector<HTMLDivElement>('#root');
if (!root) throw new Error('Missing #root element');

root.innerHTML = shellHtml;

const runtimeScript = document.createElement('script');
runtimeScript.dataset.ezopRuntime = 'legacy-compatible';
runtimeScript.textContent = legacyRuntimeSource;
document.body.appendChild(runtimeScript);
