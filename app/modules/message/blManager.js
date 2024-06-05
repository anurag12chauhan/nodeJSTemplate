import MessageModel from "../../models/message";

class BLManager {
    async addMessages(requestBody) {
        if (!requestBody)
            throw "invalid request";
        console.log("New message received ", requestBody)
        // const message = new MessageModel(requestBody);
        // const addMessageRes = await message.save();
        return requestBody;
    }

    async getMessages(requestBody) {
        if (!requestBody)
            throw "invalid request";
        return MessageModel.getDocuments(requestBody);
    }
}

export default BLManager;