import service from '../../services/videos.service';


describe('getVideos function', () => {
    it('getVideos get all videos', async() => {
        let restult = await service.getVideos();
        expect(restult).toHaveLength(0);
    });

    it('getVideo get video by id', async() => {
        let id: number=0;
        let restult = await service.getVideo(id);
        expect(restult).toHaveLength(0);
    });

});