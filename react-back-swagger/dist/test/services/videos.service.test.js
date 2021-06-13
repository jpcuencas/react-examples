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
const videos_service_1 = __importDefault(require("../../services/videos.service"));
describe('getVideos function', () => {
    it('getVideos get all videos', () => __awaiter(void 0, void 0, void 0, function* () {
        let restult = yield videos_service_1.default.getVideos();
        expect(restult).toHaveLength(0);
    }));
    it('getVideo get video by id', () => __awaiter(void 0, void 0, void 0, function* () {
        let id = 0;
        let restult = yield videos_service_1.default.getVideo(id);
        expect(restult).toHaveLength(0);
    }));
});
//# sourceMappingURL=videos.service.test.js.map