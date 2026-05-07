import{f as a}from"./MultiColumnSortDialog-BHiLU3Kf.js";import"./DraggableList-Ba-4n59M.js";import"./iframe-pIPevrLj.js";import"./preload-helper-Dp1pzeXC.js";import"./svgIconContainer-Bqu1DS22.js";import"./index-CAAcZTcv.js";import"./Input-CJjeMmWu.js";import"./useBaseUiId-WlGFjdYz.js";import"./useControlled-B3F8ppfC.js";import"./index-C1dFupi_.js";import"./index-CEyWZOcg.js";import"./Button-BIZZuaO2.js";import"./small-cross-Cygv6FEx.js";import"./InternalBackdrop-DnvrkVYG.js";import"./composite-CUHT0kJc.js";import"./index-lS6-qGjO.js";import"./Dialog-BE_F8x7r.js";import"./cross-DvRdx5e-.js";import"./ToolbarRootContext-is5pSOfa.js";import"./getPseudoElementBounds-CORKkGHZ.js";import"./CompositeItem-DSAhzHpX.js";import"./getDisabledMountTransitionStyles-DqGN_eAZ.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],w={title:"Experimental/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

const [isOpen, setIsOpen] = useState(false);

<MultiColumnSortDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  columnOptions={[
    { id: "fullName", name: "Full Name", canSort: true },
    { id: "email", name: "Email", canSort: true },
    { id: "department", name: "Department", canSort: true },
  ]}
  currentSorting={[
    { id: "fullName", desc: false },
    { id: "department", desc: true },
  ]}
  onApply={(sorting) => console.log("Applied:", sorting)}
/>`}}}};var o,n,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

const [isOpen, setIsOpen] = useState(false);

<MultiColumnSortDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  columnOptions={[
    { id: "fullName", name: "Full Name", canSort: true },
    { id: "email", name: "Email", canSort: true },
    { id: "department", name: "Department", canSort: true },
  ]}
  currentSorting={[
    { id: "fullName", desc: false },
    { id: "department", desc: true },
  ]}
  onApply={(sorting) => console.log("Applied:", sorting)}
/>\`
      }
    }
  }
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const k=["Default"];export{e as Default,k as __namedExportsOrder,w as default};
