import { render } from "solid-js/web";

function App() {
  return (
    <>
      <style>{`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
            'Helvetica Neue';
        }

        a {
          -webkit-tap-highlight-color: transparent;
        }

        html {
          scroll-behavior: smooth;
          scrollbar-width: thin;
          scrollbar-color: transparent transparent;
        }

        body {
          --bg-size: 48px;
          height: 100vh;
          width: 100%;
          display: flex;
          background-image: repeating-conic-gradient(
            from 90deg at 50% 50%,
            #10bed4 0deg,
            #d41f46 20deg
          );
          background-size: var(--bg-size) var(--bg-size);
        }
      `}</style>
    </>
  );
}

const root = document.createElement("div");
document.body.appendChild(root);
render(() => <App />, root);
