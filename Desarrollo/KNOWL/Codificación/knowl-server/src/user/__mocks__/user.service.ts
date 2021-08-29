import { userStub } from "../test/stubs/user.stub";

export const UserService = jest.fn().mockReturnValue({
    loginUser: jest.fn().mockResolvedValue(userStub),
    registerUser: jest.fn().mockResolvedValue(userStub),
    getPassword: jest.fn().mockResolvedValue(userStub),
    getUserByEmail: jest.fn().mockResolvedValue(userStub),
    getUserCurrentDetail: jest.fn().mockResolvedValue(userStub),
})