import{j as o}from"./iframe-pIPevrLj.js";import{B as e}from"./PdfViewer-4fTm4c85.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CAAcZTcv.js";import"./PdfViewer.module.css-1xth3fE8.js";import"./svgIconContainer-Bqu1DS22.js";import"./constants-rggtfkKZ.js";import"./usePdfDocument-DQPla9F1.js";import"./index-C1dFupi_.js";import"./index-CEyWZOcg.js";import"./PdfViewerAnnotationLayer-CuV93lcb.js";import"./PdfViewerOutlineSidebar-53ecv7Ly.js";import"./PdfViewerSidebarHeader-CakfOJwq.js";import"./useBaseUiId-WlGFjdYz.js";import"./useControlled-B3F8ppfC.js";import"./CompositeRoot-CBMu-7-s.js";import"./CompositeItem-DSAhzHpX.js";import"./ToolbarRootContext-is5pSOfa.js";import"./composite-CUHT0kJc.js";import"./PdfViewerSearchBar-M34cAhIX.js";import"./chevron-up-G_8CTgXV.js";import"./chevron-down-Bwv-_-td.js";import"./cross-DvRdx5e-.js";import"./PdfViewerSidebar-DPs0B97Z.js";import"./index-0PFIVuay.js";import"./PdfViewerToolbar-CS2Jk9wf.js";import"./Button-BIZZuaO2.js";import"./chevron-right-sIMLyk5y.js";import"./Input-CJjeMmWu.js";import"./minus-R3Gws1kC.js";import"./error-CMIr0mPQ.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,s="./compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],W={title:"Experimental/PdfViewer/Recipes",component:e,args:{src:s,annotations:l,onAnnotationClick:d()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},n={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
  return (
    <div style={{ background: "rgba(59, 130, 246, 0.9)", borderRadius: 6, color: "#fff", padding: "4px 8px" }}>
      {annotation.label ?? "Note"}
    </div>
  );
}

<BasePdfViewer
  src={pdfUrl}
  annotations={[
    {
      id: "tooltip-1",
      type: "custom",
      page: 1,
      rect: { x: 55, y: 400, width: 120, height: 28 },
      label: "Key finding",
      render: (props) => <TooltipAnnotation {...props} />,
    },
  ]}
  onAnnotationClick={(annotation) => console.log("Clicked:", annotation.id)}
/>`}}}};var r,a,p;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
  return (
    <div style={{ background: "rgba(59, 130, 246, 0.9)", borderRadius: 6, color: "#fff", padding: "4px 8px" }}>
      {annotation.label ?? "Note"}
    </div>
  );
}

<BasePdfViewer
  src={pdfUrl}
  annotations={[
    {
      id: "tooltip-1",
      type: "custom",
      page: 1,
      rect: { x: 55, y: 400, width: 120, height: 28 },
      label: "Key finding",
      render: (props) => <TooltipAnnotation {...props} />,
    },
  ]}
  onAnnotationClick={(annotation) => console.log("Clicked:", annotation.id)}
/>\`
      }
    }
  }
}`,...(p=(a=n.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const F=["CustomAnnotation"];export{n as CustomAnnotation,F as __namedExportsOrder,W as default};
