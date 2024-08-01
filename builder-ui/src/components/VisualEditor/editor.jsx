import React, { useEffect } from "react";
import grapesjs from "grapesjs";
import { useCodeContext } from "../../contexts/CodeContext";
import HTMLCode from "../../assets/Templates/default/HTMLCode";
import Styles from "../../assets/Templates/default/Styles";

function Editor() {
  const { htmlCode, cssCode, jsCode, setHtmlCode, setCssCode, setJsCode } =
    useCodeContext();

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      components: `${HTMLCode}`,
      style: `${Styles}`,
      storageManager: false,
      plugins: ["grapesjs-tailwind"],
      // Block Manager
      blockManager: {
        blocks: [
          {
            id: "button-block",
            label: "Button",
            content: "<button>Click Me</button>",
          },
          {
            id: "label-block",
            label: "Label",
            content: "<label>Label</label>",
          },
          {
            id: "text-block",
            label: "Text",
            content: "<p>Text goes here</p>",
          },
          {
            id: "image-block",
            label: "Image",
            content:
              '<img src="https://via.placeholder.com/150" alt="Placeholder Image">',
          },
          {
            id: "link-block",
            label: "Link",
            content:
              '<a href="https://www.google.com" target="_blank">Link</a>',
          },
          {
            id: "header-block",
            label: "Header",
            content: "<h1>Header</h1>",
          },
          {
            id: "footer-block",
            label: "Footer",
            content: "<footer>Footer content here</footer>",
          },
          {
            id: "list-block",
            label: "List",
            content:
              "<ul><li>List Item 1</li><li>List Item 2</li><li>List Item 3</li></ul>",
          },
          {
            id: "table-block",
            label: "Table",
            content:
              "<table><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Data 1</td><td>Data 2</td></tr></table>",
          },
          {
            id: "form-block",
            label: "Form",
            content:
              '<form><input type="text" placeholder="Enter text"><input type="submit" value="Submit"></form>',
          },
          // Templates will be dynamically loaded
        ],
      },
    });

    editor.on("canvas:spot", () => {
      const html = editor.getHtml();
      const css = editor.getCss();
      // const js = editor.getJs();

      if (html) {
        setHtmlCode(html);
      }
      if (css) {
        setCssCode(css);
      }
      // if (js) {
      //   setJsCode(js);
      // }
    });

    return () => {
      editor.destroy();
    };
  }, []);

  return <div id="gjs"></div>;
}

export default Editor;
