import ToolbarFun1 from "./ToolbarFun1";
import ToolbarFun2 from "./ToolbarFun2";

function ToolbarComponent() {
  return (
    <div className="toolbar">
      <div className="t-num">
        <p>3425 ITEMS</p>
      </div>
      <ToolbarFun1 />
      <ToolbarFun2 />
    </div>
  );
}

export default ToolbarComponent;
