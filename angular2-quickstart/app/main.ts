// Initialise la plateforme de l'application
// Utilise la plateforme pour amorçer AppModule
import { platformBrowserDynamic }   from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);