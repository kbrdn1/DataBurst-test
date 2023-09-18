import useCanvas from '@/hooks/useCanvas';
import useEditor from '@/hooks/useEditor';
import { backgrounds } from '@/utils/constants';
import { PropsWithChildren } from 'react';
import Hotkeys from 'react-hot-keys';

const Shortcut = ({ children }: PropsWithChildren) => {
  const {
    setZoom,
    zoom,
    background,
    setBackground,
    setView,
    collapseNavBoard,
    setCollapseNavBoard,
    camera,
    setCamera
  } = useCanvas();
  const {
    showSettings,
    setShowSettings,
    showHelpFeedback,
    setShowHelpFeedback,
    setShowScript,
    setScriptView
  } = useEditor();

  const handleChangeBackground = (e: KeyboardEvent) => {
    e.preventDefault();
    const index = backgrounds.indexOf(background);
    setBackground(backgrounds[index + 1] || backgrounds[0]);
  };

  const handleZoomPlus = (e: KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (zoom >= 2) return;
    setZoom(zoom + 0.1);
    setCamera({
      ...camera,
      z: camera.z - 100
    })
  };

  const handleZoomMinus = (e: KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (zoom <= 0.5) return;
    setZoom(zoom - 0.1);
    setCamera({
      ...camera,
      z: camera.z + 100
    })
  };

  const handleZoomReset = (e: KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setZoom(1);
    setCamera({
      ...camera,
      z: 1000
    })
  };

  const handleCDM = (e: KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setView('CDM');
  };

  const handleUML = (e: KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setView('UML');
  };

  const handleLDM = (e: KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setView('LDM');
  };

  const handleCollapseNavBoard = (e: KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCollapseNavBoard(!collapseNavBoard);
  };

  const handleToggleSettings = (e: KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowSettings(!showSettings);
  };

  const handleToggleHelpFeedback = (e: KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowHelpFeedback(!showHelpFeedback);
  };

  const handleSQL = (e: KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowScript(true);
    setScriptView('SQL');
  };

  const handlePDM = (e: KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowScript(true);
    setScriptView('PDM');
  };

  return (
    <>
      <Hotkeys
        keyName='control+B,control+b,command+B,command+b'
        onKeyDown={(_, evn) => handleChangeBackground(evn)}
      >
        <Hotkeys
          keyName='control+plus,command+plus,control+=,command+='
          onKeyDown={(_, evn) => handleZoomPlus(evn)}
          allowRepeat
        >
          <Hotkeys
            keyName='control+minus,command+minus,control+-,command+-,control+6,command+6'
            onKeyDown={(_, evn) => handleZoomMinus(evn)}
            allowRepeat
          >
            <Hotkeys
              keyName='control+0,command+0,control+à,command+à'
              onKeyDown={(_, evn) => handleZoomReset(evn)}
            >
              <Hotkeys
                keyName='control+&,command+&,control+1,command+1'
                onKeyDown={(_, evn) => handleCDM(evn)}
              >
                <Hotkeys
                  keyName='control+é,command+é,control+2,command+2'
                  onKeyDown={(_, evn) => handleUML(evn)}
                >
                  <Hotkeys
                    keyName='control+",command+",control+3,command+3'
                    onKeyDown={(_, evn) => handleLDM(evn)}
                  >
                    <Hotkeys
                      keyName='control+q,command+q,control+Q,command+Q'
                      onKeyDown={(_, evn) => handleCollapseNavBoard(evn)}
                    >
                      <Hotkeys
                        keyName='control+/,command+/,control+:,command+:'
                        onKeyDown={(_, evn) => handleToggleSettings(evn)}
                      >
                        <Hotkeys
                          keyName='control+,,command+,,control+?,command+?'
                          onKeyDown={(_, evn) =>
                            handleToggleHelpFeedback(evn)
                          }
                        >
                          <Hotkeys
                            keyName='control+o,command+o,control+O,command+O'
                            onKeyDown={(_, evn) => handleSQL(evn)}
                          >
                            <Hotkeys
                              keyName='control+l,command+l,control+L,command+L'
                              onKeyDown={(_, evn) => handlePDM(evn)}
                            >
                              {children}
                            </Hotkeys>
                          </Hotkeys>
                        </Hotkeys>
                      </Hotkeys>
                    </Hotkeys>
                  </Hotkeys>
                </Hotkeys>
              </Hotkeys>
            </Hotkeys>
          </Hotkeys>
        </Hotkeys>
      </Hotkeys>
    </>
  );
};

export default Shortcut;
