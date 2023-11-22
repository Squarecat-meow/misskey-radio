export const processingJSON = (data) => {
  const text = data.body.body.text;
  const avatarUrl = data.body.body.user.avatarUrl;
  let renote = [];
  const id = data.body.body.id;
  const username = data.body.body.user.name;
  let cw = "";
  let replyUser = "";

  if (data.body.body.cw !== null) {
    cw = data.body.body.cw;
  }

  if (data.body.body.renote) {
    renote.push({
      renoteText: data.body.body.renote.text,
      renoteUser: data.body.body.renote.user,
    });
  }

  if (data.body.body.reply) {
    replyUser = data.body.body.reply.user.name;
  }

  const noteData = {
    text: text,
    username: username,
    avatarUrl: avatarUrl,
    id: id,
    renote: renote,
    cw: cw,
    replyUser: replyUser,
  };

  return noteData;
};
