"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSlug = void 0;
const models_1 = __importDefault(require("../models"));
const db_utils_1 = require("../lib/db_utils");
const createSlug = (_req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
_next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { AdjectiveList, NounList, AdjectiveIndex, NounIndex } = models_1.default.sequelize.models;
        const adjectiveIndex = yield (0, db_utils_1.modelFindOne)(AdjectiveIndex, { attributes: ['currentIndex'] }, 'currentIndex');
        const nounIndex = yield (0, db_utils_1.modelFindOne)(NounIndex, { attributes: ['currentIndex'] }, 'currentIndex');
        let adjective = yield (0, db_utils_1.modelFindOne)(AdjectiveList, {
            where: { id: adjectiveIndex },
            attributes: ['word'],
        }, 'word');
        let noun = yield (0, db_utils_1.modelFindOne)(NounList, {
            where: { id: nounIndex },
            attributes: ['word'],
        }, 'word');
        yield AdjectiveIndex.update({ currentIndex: adjectiveIndex + 1 }, { where: { currentIndex: [adjectiveIndex] } });
        yield NounIndex.update({ currentIndex: nounIndex + 1 }, { where: { currentIndex: [nounIndex] } });
        if (!adjective) {
            adjective = yield (0, db_utils_1.modelFindOne)(AdjectiveList, { where: { id: 1 }, attributes: ['word'] }, 'word');
            yield AdjectiveIndex.update({ currentIndex: 1 }, { where: { currentIndex: [adjectiveIndex] } });
        }
        if (!noun) {
            noun = yield (0, db_utils_1.modelFindOne)(NounList, { where: { id: 1 }, attributes: ['word'] }, 'word');
            yield NounIndex.update({ currentIndex: 1 }, { where: { currentIndex: [nounIndex] } });
        }
        res
            .status(200)
            .json({ message: 'Success', data: { slug: `${adjective}-${noun}` } });
    }
    catch (e) {
        res
            .status(500)
            .json({ message: 'Error', data: { error: 'Internal Server Error' } });
    }
});
exports.createSlug = createSlug;
//# sourceMappingURL=slugController.js.map