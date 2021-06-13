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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app"));
const index_1 = __importDefault(require("../../index"));
let api;
//let mockGetVideos:  jest.Mock<typeof getVideos, any>;
beforeAll(() => {
    api = supertest_1.default(app_1.default);
    jest.mock('../../services/videos.service');
});
describe('GET /videos', () => {
    it('GET all videos', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockGetVideos = jest.fn();
        mockGetVideos.mockImplementation(() => {
            let videos;
            videos = [];
            return videos;
        });
        yield api.get('/videos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
    }));
    it('GET all videos check content', () => __awaiter(void 0, void 0, void 0, function* () {
        jest.mock('../../services/videos.service');
        const mockGetVideos = jest.fn();
        mockGetVideos.mockImplementation(() => {
            return [];
        });
        const response = yield api.get('/videos');
        expect(response.body).toHaveLength(0);
    }));
    it('GET one videos', () => __awaiter(void 0, void 0, void 0, function* () {
        let id = 0;
        jest.mock('../../services/videos.service');
        const mockGetVideos = jest.fn();
        mockGetVideos.mockImplementation((...args) => {
            let videos;
            videos = [];
            return videos;
        });
        const response = yield api.get('/videos/' + id)
            .set('Accept', 'application/json')
            .expect(204);
    }));
});
afterAll(() => {
    index_1.default.close();
});
//# sourceMappingURL=videos.controller.test.js.map