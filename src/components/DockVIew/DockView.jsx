import React, { useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { DockviewReact } from "dockview";
import "dockview/dist/styles/dockview.css";
import Draw from "../Draw/Draw";
import { v4 as uuidv4 } from "uuid";
import Select from "../Select";
import "./DockView.scss";

const components = {
  default: (props) => {
    return <Draw {...props} />;
  },
};

const DockView = () => {
  const api = useRef();

  const onReady = (event) => {
    api.current = event.api;
    event.api.layout(window.innerWidth, window.innerHeight);
  };

  const addAnotherPanel = React.useCallback(() => {
    const newPanel = {
      id: uuidv4(),
      title: "Окно",
      component: "default",
    };
    api.current.addPanel(newPanel);
  }, []);

  return (
    <div className="dockview-wrapper">
      <h1 className="dockview-title">Создайте панель и рисуйте ✍...</h1>
      <div className="dockview">
        <DockviewReact
          className="dockview-theme-dark"
          onReady={onReady}
          components={components}
        />
      </div>
      <div className="tool-body">
        <div className="tool-btn">
          <div className="btn-add-panel" onClick={addAnotherPanel}>
            <span>Создать панель</span> <AiOutlinePlus size={20} />
          </div>
        </div>
        <Select />
      </div>
    </div>
  );
};

export default DockView;
