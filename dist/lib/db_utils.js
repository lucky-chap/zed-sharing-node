"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelFindOne = void 0;
const models_1 = __importDefault(require("../models"));
const { AdjectiveList, NounList, AdjectiveIndex, NounIndex } = models_1.default.sequelize.models;
const modelFindOne = (model, query, item = null) => {
    return model
        .findOne(query)
        .then((modelEntry) => {
        if (modelEntry && item) {
            return modelEntry.get(item);
        }
        return modelEntry;
    });
};
exports.modelFindOne = modelFindOne;
//# sourceMappingURL=db_utils.js.map