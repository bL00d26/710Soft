import { Test } from '@nestjs/testing';
import { UserService } from '../user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const moduleRef  = await Test.createTestingModule({
      imports:[],
      providers: [UserService],
    }).compile();

    service = moduleRef.get<UserService>(UserService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});



