import ServicesFile from '@/services/index.js';
import httpClient from '@/services/common/index.js';



jest.mock("@/services/common/index.js");

describe("In services", () => {
    it("should return List of shows when getShowsByKeyword", async () => {
        const mockedData = [{ show: 1 }, { show: 2 }, { show: 3 }];
        httpClient.get.mockResolvedValue({ data: mockedData });
        const result = await ServicesFile.getShowsByKeyword("Arrow").catch(err =>
            console.log(err)
        );
        expect(result).toEqual(mockedData);
    });

    it("should throw error when any error encountered in getShowsByKeyword api ", async () => {
        const error = new Error("Async error");
        httpClient.get.mockRejectedValue(error);
        await ServicesFile.getShowsByKeyword("keyword").catch(err => {
            expect(err).toEqual(error);
        });
    });

    it("should return List of shows when getShows API is called", async () => {
        const mockedData = [{ show: 1 }, { show: 2 }, { show: 3 }];
        httpClient.get.mockResolvedValue({ data: mockedData });
        const expectedResult = await ServicesFile.getShows().catch(err => console.log(err));
        expect(expectedResult).toEqual(mockedData);
    });

    it("should throw error when any error encountered in getShows api", async () => {
        const error = new Error("Async error");
        httpClient.get.mockRejectedValue(error);
        await ServicesFile.getShows().catch(err => {
            expect(err).toEqual(error);
        });
    });

    it("should call getShowById api", async () => {
        const mockedData = { id: "1", name: "Iron Man" };
        httpClient.get.mockResolvedValue({ data: mockedData });
        const result = await ServicesFile.getShowById(1).catch(err => console.log(err));
        expect(result).toEqual(mockedData);
    });

    it("should throw error when getShowById api encountered error", async () => {
        const error = new Error("Async error");
        httpClient.get.mockRejectedValue(error);
        await ServicesFile.getShowById(1).catch(err => {
            expect(err).toEqual(error);
        });
    });

    it("should call getImagesById api", async () => {
        const mockedData = { id: "1", name: "Iron Man" };
        httpClient.get.mockResolvedValue({ data: mockedData });
        const result = await ServicesFile.getImagesById(1).catch(err => console.log(err));
        expect(result).toEqual(mockedData);
    });

    it("should throw error when getImageById api encountered error", async () => {
        const error = new Error("Async error");
        httpClient.get.mockRejectedValue(error);
        await ServicesFile.getImagesById(1).catch(err => {
            expect(err).toEqual(error);
        });
    });

    it("should call getCastById api", async () => {
        const mockedData = { id: "1", name: "Iron Man" };
        httpClient.get.mockResolvedValue({ data: mockedData });
        const result = await ServicesFile.getCastById(1).catch(err => console.log(err));
        expect(result).toEqual(mockedData);
    });

    it("should throw error when getCastById api encountered error", async () => {
        const error = new Error("Async error");
        httpClient.get.mockRejectedValue(error);
        await ServicesFile.getCastById(1).catch(err => {
            expect(err).toEqual(error);
        });
    });
});
