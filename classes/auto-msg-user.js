module.exports = class AutoMsgUser {
    constructor(userID, todo) {
        this.userID = userID;
        this.todo = todo;
    }

    get_data() {
        const returnobj = {
            userID: this.userID,
            todo: this.todo,
        };
        return returnobj;
    }
};
