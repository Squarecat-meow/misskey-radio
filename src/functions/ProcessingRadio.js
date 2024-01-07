import { useSelector } from "react-redux";

export const ProcessingRadio = (note) => {
  const cw = useSelector((state) => state.readSetting.cw);
  const length = useSelector((state) => state.readSetting.length);

  let finalNote;

  if (note[note.length - 1]?.renote[0]) {
    finalNote = "리노트입니다. " + note[note.length - 1].renote[0]?.renoteText;
  } else {
    finalNote = note[note.length - 1]?.text;
  }

  if (typeof finalNote !== "undefined" && finalNote.indexOf("https:") >= 0) {
    const re =
      /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*))/gi;
    const Regex = new RegExp(re);
    finalNote = finalNote.replace(Regex, "링크");
  }

  if (typeof finalNote !== "undefined" && finalNote.indexOf("@") >= 0) {
    const userIndex = finalNote.indexOf("@");
    const userSpaceIndex = finalNote.indexOf(" ", userIndex + 1);
    const userInNote = finalNote.slice(userIndex, userSpaceIndex);
    finalNote = finalNote.replace(
      userInNote,
      `${note[Object.keys(note).length - 1].replyUser}님에 대한 답글입니다.`
    );
  }

  if (
    typeof finalNote !== "undefined" &&
    note[note.length - 1].cw !== "" &&
    cw === false
  ) {
    finalNote = `컨텐츠 워닝이 걸린 노트입니다. ${
      note[Object.keys(note).length - 1].cw
    }`;
  }

  if (
    typeof finalNote !== "undefined" &&
    finalNote.length >= 140 &&
    length === false
  ) {
    finalNote = "긴 노트입니다.";
  }

  return finalNote;
};
