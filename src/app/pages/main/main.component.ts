import { Component } from '@angular/core';
import { SlotContentComponent } from '../../components/slides/slot-content/slot-content.component';
import { PreviewResultComponent } from '../../components/slides/preview-result/preview-result.component';
import { WhatToWatchComponent } from '../../components/sections/what-to-watch/what-to-watch.component';
import { TopTenMovieComponent } from '../../components/sections/top-ten-movie/top-ten-movie.component';
import { CasterComponent } from '../../components/sections/caster/caster.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SlotContentComponent , PreviewResultComponent , WhatToWatchComponent , TopTenMovieComponent , CasterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
