export type ScriptProps = {
  setShow: (show: boolean) => void;
};

export type EntityFormProps = {
  show: boolean;
  setShow: (show: boolean) => void;
  position: {
    x: number;
    y: number;
  };
};
