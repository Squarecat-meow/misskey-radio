export const ProcessingRadio = (note) => {
  let finalNote;

  if (note[note.length - 1]?.renote[0]) {
    finalNote = "리노트입니다. " + note[note.length - 1].renote[0]?.renoteText;
  } else {
    finalNote = note[note.length - 1]?.text;
  }

  if (typeof finalNote !== "undefined" && finalNote.indexOf("https:") >= 0) {
    const httpIndex = finalNote.indexOf("http");
    const httpSpaceIndex = finalNote.indexOf(" ", httpIndex + 1);
    const urlInNote = finalNote.slice(httpIndex, httpSpaceIndex);
    finalNote = finalNote.replace(urlInNote, ". 링크");
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

  return finalNote;
};
