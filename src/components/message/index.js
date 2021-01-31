import Message from './instance';
Message.install = (app) => {
    app.config.globalProperties.$message = Message;
};
export default Message;
//# sourceMappingURL=index.js.map