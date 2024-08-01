import CodePanel from "../../components/CodeEditor/Code/CodePanel";
import { useEffect, useState } from "react";
import CustomButton from "../../components/CornerButton/customButton";
import { useCodeContext } from "../../contexts/CodeContext";
import Chat from "../../components/Chat";
import HTMLCode from "../../assets/Templates/default/HTMLCode";
import Styles from "../../assets/Templates/default/Styles";

function CodeEditor() {
  const { htmlCode, cssCode, jsCode, setHtmlCode, setCssCode, setJsCode } =
    useCodeContext();

  // setHtmlCode(HTMLCode);
  // setCssCode(Styles);

  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${htmlCode}</body>
        <style>${cssCode}</style>
        <script>${jsCode}</script>
      </html>
    `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [htmlCode, cssCode, jsCode]);

  return (
    <>
      <div className="panel top-panel">
        <CodePanel
          title="HTML"
          language="xml"
          value={htmlCode}
          onChange={setHtmlCode}
        />
        <CodePanel
          title="CSS"
          language="css"
          value={cssCode}
          onChange={setCssCode}
        />
        <CodePanel
          title="JS"
          language="javascript"
          value={jsCode}
          onChange={setJsCode}
        />
      </div>
      <div className="panel">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        ></iframe>
      </div>

      <CustomButton icon="VEIcon" link="/visual-editor" />
      <Chat />
    </>
  );
}

export default CodeEditor;
