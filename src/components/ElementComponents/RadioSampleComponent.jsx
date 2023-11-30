import { useEffect } from "react";

import { useSelector } from "react-redux";

const RadioSampleComponent = () => {
  const rate = useSelector((state) => state.setting.rate);
  const pitch = useSelector((state) => state.setting.pitch);
  const volume = useSelector((state) => state.setting.volume);

  const synth = window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance(
    "샘플텍스트입니다. 다람쥐 헌 쳇바퀴 타고파."
  );

  utterThis.rate = rate;
  utterThis.pitch = pitch;
  utterThis.volume = volume;

  const sampleText = () => {
    synth.speak(utterThis);
  };

  useEffect(() => {
    sampleText();
  }, [rate, pitch, volume]);

  return;
};

export default RadioSampleComponent;
