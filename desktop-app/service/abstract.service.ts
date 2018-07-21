
export abstract class AbstractService {

    private postConstructTimer: number = 2048;

    public constructor(postConstructTimer?: number) {
        this.postConstructTimer = postConstructTimer ? postConstructTimer : this.postConstructTimer;
        setTimeout(this.postConstruct, this.postConstruct());
    }

    public abstract postConstruct(): void;

}