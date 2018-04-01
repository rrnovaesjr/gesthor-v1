import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ProgressAdvisorConfig } from './progress-advisor.model';

@Injectable()
export class ProgressAdvisorService {

  /**
   * A configuration subject.
   */
  private configSubject: Subject<ProgressAdvisorConfig> = new Subject();

  /**
   * Receives notifications from the subject.
   */
  public configNotifier$: Observable<ProgressAdvisorConfig> = this.configSubject.asObservable();

  /**
   * Instantiates the new service.
   */
  constructor() {
    
  }

  /**
   * Announces `config` to the interested components.
   * 
   * @param config A set of configurations for the global progress bar.
   */
  public announceConfig(config: ProgressAdvisorConfig) {
    this.configSubject.next(config);
  }

}
