import { Container } from 'typedi';
import { Logger } from 'winston';
import DailyGeneratorService from '../services/dailyGenerator';

export default class DailyGenerationJob {
  public async handler(job, done): Promise<void> {
    const logger: Logger = Container.get('logger');
    try {
      logger.debug('✌️ Daily generation triggered!');
      const generatorService = Container.get(DailyGeneratorService);
      await generatorService.GenerateManga();
      done();
    } catch (e) {
      logger.error('🔥 Error with Daily Generation Job: %o', e);
      done(e);
    }
  }
}
