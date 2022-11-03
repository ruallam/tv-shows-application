import ServicesFile from '@/services/index.js';
// import {getShowById} from '@/services/index';
// import {getShowsByKeyword} from '@/services/index.js';
// import {getImagesById} from '@/services/index';
// import {getCastById} from '@/services/index.js';
// import axios from 'axios'
import httpClient from '@/services/common/index.js';



jest.mock("@/services/common/index.js");

describe("In services, ", () => {
    it("should return List of shows when getShows", async () => {
        const mockedData = [{ show: 1 }, { show: 2 }, { show: 3 }];
        httpClient.get.mockResolvedValue({ data: mockedData });
        const result = await ServicesFile.getShowsByKeyword("Arrow").catch(err =>
            console.log(err)
        );
        expect(result).toEqual(mockedData);
    });

    it("getShowsByKeyword api should throw error when any error encountered", async () => {
        const error = new Error("Async error");
        httpClient.get.mockRejectedValue(error);
        await ServicesFile.getShowsByKeyword("keyword").catch(err => {
            expect(err).toEqual(error);
        });
    });

    it("getShows api should call", async () => {
        const mockedData = [{ show: 1 }, { show: 2 }, { show: 3 }];
        httpClient.get.mockResolvedValue({ data: mockedData });
        const expectedResult = await ServicesFile.getShows().catch(err => console.log(err));
        expect(expectedResult).toEqual(mockedData);
    });

    it("getShows api should throw error when any error encountered", async () => {
        const error = new Error("Async error");
        httpClient.get.mockRejectedValue(error);
        await ServicesFile.getShows().catch(err => {
            expect(err).toEqual(error);
        });
    });

    it("getShowById api should call", async () => {
        const mockedData = { id: "1", name: "Iron Man" };
        httpClient.get.mockResolvedValue({ data: mockedData });
        const result = await ServicesFile.getShowById(1).catch(err => console.log(err));
        expect(result).toEqual(mockedData);
    });

    it("getShowById api should throw error when any error encountered", async () => {
        const error = new Error("Async error");
        httpClient.get.mockRejectedValue(error);
        await ServicesFile.getShowById(1).catch(err => {
            expect(err).toEqual(error);
        });
    });

    it("getImageById api should call", async () => {
        const mockedData = { id: "1", name: "Iron Man" };
        httpClient.get.mockResolvedValue({ data: mockedData });
        const result = await ServicesFile.getImagesById(1).catch(err => console.log(err));
        expect(result).toEqual(mockedData);
    });

    it("getImageById api should throw error when any error encountered", async () => {
        const error = new Error("Async error");
        httpClient.get.mockRejectedValue(error);
        await ServicesFile.getImagesById(1).catch(err => {
          expect(err).toEqual(error);
        });
      });

      it("getCastById api should call", async () => {
        const mockedData = { id: "1", name: "Iron Man" };
        httpClient.get.mockResolvedValue({ data: mockedData });
        const result = await ServicesFile.getCastById(1).catch(err => console.log(err));
        expect(result).toEqual(mockedData);
    });

    it("getCastById api should throw error when any error encountered", async () => {
        const error = new Error("Async error");
        httpClient.get.mockRejectedValue(error);
        await ServicesFile.getCastById(1).catch(err => {
          expect(err).toEqual(error);
        });
      });
});
