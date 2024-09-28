import { Module } from '@nestjs/common';
import { CovidModule } from './modules/covid/covid.module';
import { PokemonModule } from './modules/pokemon/pokemon.module';

@Module({
  imports: [
    CovidModule,
    PokemonModule
  ],
})
export class AppModule {}
