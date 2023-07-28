import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {HAMMER_GESTURE_CONFIG, HammerModule as BaseHammerModule} from '@angular/platform-browser'

import {HammerConfig} from "./hammer.config";

@NgModule({
  imports: [CommonModule, BaseHammerModule],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    }
  ]
})
export class HammerModule {}
