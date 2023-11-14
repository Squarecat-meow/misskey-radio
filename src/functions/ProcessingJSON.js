export const processingJSON = (data) => {
  const text = data.body.body.text;
  const avatarUrl = data.body.body.user.avatarUrl;
  let renote = [];
  const id = data.body.body.id;
  const username = data.body.body.user.name;

  if (data.body.body.renote) {
    renote.push({
      renoteText: data.body.body.renote.text,
      renoteUser: data.body.body.renote.user,
    });
  }

  const noteData = {
    text: text,
    username: username,
    avatarUrl: avatarUrl,
    id: id,
    renote: renote,
  };

  return noteData;
};
