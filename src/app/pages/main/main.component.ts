import { Component } from '@angular/core';
import { SlotContentComponent } from '../../components/slides/slot-content/slot-content.component';
import { PreviewResultComponent } from '../../components/slides/preview-result/preview-result.component';
import { WhatToWatchComponent } from '../../components/sections/what-to-watch/what-to-watch.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SlotContentComponent , PreviewResultComponent , WhatToWatchComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
