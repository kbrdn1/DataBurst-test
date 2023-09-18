import useCanvas from '@/hooks/useCanvas';
import useEditor from '@/hooks/useEditor';
import useTheme from '@/hooks/useTheme';
import { backgrounds, colors } from '@/utils/constants';
import { PropsWithChildren } from 'react';
import Hotkeys from 'react-hot-keys';

const Shortcut = ({ children }: PropsWithChildren) => {
  const {
    setZoom,
    zoom,
    background,
    setBackground,
    setView,
    camera,
    setCamera
  } = useCanvas();
  const {
    showSettings,
    setShowSettings,
    showHelpFeedback,
    setShowHelpFeedback,
    setShowScript,
    setScriptView,
    collapseNavBoard,
    setCollapseNavBoard,
  } = useEditor();
  const { color, setColor } = useTheme();

  const handleChangeBackground = (e: KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const index = backgrounds.indexOf(background);
    setBackground(backgrounds[index + 1] || backgrounds[0]);
  };

  const handleChangeColor = (e: KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const index = colors.indexOf(color);
    setColor(colors[index + 1] || colors[0]);
  }

  const handleZoomPlus = (e: KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    let newZoom = zoom + 0.1;
    let newCameraZ = camera.z - 100;
    if (newZoom >= 2)
      newZoom = 2
    if (newCameraZ <= 500)
      newCameraZ = 500
    
    setZoom(newZoom);
    setCamera({
      ...camera,
      z: newCameraZ
    })
  };

  const handleZoomMinus = (e: KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    let newZoom = zoom - 0.1;
    let newCameraZ = camera.z + 100;
    if (zoom <= 0.5)
      newZoom = 0.5

    if (camera.z >= 2000)
      newCameraZ = 2000
    
    setZoom(newZoom);
    setCamera({
      ...camera,
      z: newCameraZ
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
          keyName='control+M,control+m,command+M,command+m'
          onKeyDown={(_, evn) => handleChangeColor(evn)}
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
      </Hotkeys>
    </>
  );
};

export default Shortcut;
