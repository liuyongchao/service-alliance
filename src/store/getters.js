const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  basicId: state => state.evaluate.basicId,
  basicSecret: state => state.evaluate.basicSecret
};
export default getters;
