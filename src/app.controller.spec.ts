import { Test, TestingModule } from '@nestjs/testing';
import { CatController } from './cat/cat.controller';
import { CatService } from './cat/cat.service';

describe('AppController', () => {
  let catController: CatController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CatController],
      providers: [CatService],
    }).compile();

    catController = app.get<CatController>(CatController);
  });

  //테스트 할 때 async 함수는 똑같이 async await 처리 해주기
  describe('root', () => {
    it('should return "Hello World!"', async () => {
      expect(await catController.getHello()).toBe('Hello World!');
    });
  });
});
