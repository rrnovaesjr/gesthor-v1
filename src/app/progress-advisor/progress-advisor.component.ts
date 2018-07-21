import { Component, OnInit } from '@angular/core';
import { ProgressAdvisorService } from './progress-advisor.service';
import { ProgressAdvisorConfig } from './progress-advisor.model';

@Component({
  selector: 'app-progress-advisor',
  template: `
    <mat-progress-bar [mode]="mode" [value]="value" [bufferValue]="bufferValue" *ngIf="show">
    </mat-progress-bar>
  `,
  styles: [
    
  ]
})
export class ProgressAdvisorComponent implements OnInit {

  /**
   * If progress bar must be displayed or not.
   */
  public show: boolean = false;

  /**
   * The progress bar's mode.
   */
  public mode: string = 'indeterminate';

  /**
   * The value of the progress bar.
   */
  public value: number = 0;

  /**
   * The buffer value of the progress bar.
   */
  public bufferValue: number = 0;

  /**
   * Injects the necessary services.
   * 
   * @param progressAdvisorService The global progress bar's service.
   */
  constructor(private progressAdvisorService: ProgressAdvisorService) { 

  }

  /**
   * Subscribes to events.
   */
  ngOnInit() {
    this.progressAdvisorService.configNotifier$.subscribe((config: ProgressAdvisorConfig) => {
      this.show = config.show;
      this.mode = config.mode ? config.mode : 'indeterminate';
      this.value = config.value ? config.value : 0;
      this.bufferValue = config.bufferValue ? config.bufferValue : 0;
    });
  }

}
