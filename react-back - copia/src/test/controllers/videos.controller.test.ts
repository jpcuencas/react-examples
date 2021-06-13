import supertest from 'supertest';
import app from '../../app';
import server from '../../index';
import { getVideos } from '../../controllers/videos.controller';
import Video from '../../models/Video';

let api: supertest.SuperTest<supertest.Test>;
//let mockGetVideos:  jest.Mock<typeof getVideos, any>;
beforeAll(() => {
    api = supertest(app);
    jest.mock('../../services/videos.service');   
        
  });

describe('GET /videos', () => {
    it('GET all videos', async() => {
     
    const mockGetVideos = jest.fn() as jest. MockedFunction<typeof getVideos>;
        mockGetVideos.mockImplementation(() => {
            let videos: Video[];
            videos = [];
           return videos;
          });
        await api.get('/videos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
    });

    it('GET all videos check content', async() => {
     
        jest.mock('../../services/videos.service');
        const mockGetVideos = jest.fn() as jest. MockedFunction<typeof getVideos>;
        mockGetVideos.mockImplementation(() => {
           return [];
         });
        const response = await api.get('/videos');
        expect(response.body).toHaveLength(0);
    });


    it('GET one videos', async() => {
     
        let id: number=0;
        jest.mock('../../services/videos.service');
        const mockGetVideos = jest.fn() as jest. MockedFunction<typeof getVideos>;
        mockGetVideos.mockImplementation((...args: any) => {
            let videos: Video[];
            videos = [];
           return videos;
         });
         const response = await api.get('/videos/' + id)
            .set('Accept', 'application/json')
            .expect(204);
    });

    

  });

  afterAll(() => {
      server.close();
  });