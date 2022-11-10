import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { CompensationEventsModule } from './compensation_events/compensation_events.module';

@Module({
  imports: [ 
    TypeOrmModule.forRoot({
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'app_proto',
      synchronize: true, // true only for development
    }), 
    EventsModule, CompensationEventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
