import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';
import { filter, pairwise, startWith, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {

  title = 'PortfolioProject'

  public destroyed = new Subject<any>();

  @ViewChild('content', { static: false }) content!: ElementRef<HTMLDivElement>

  constructor(private router: Router) { }

  ngAfterViewInit(): void {

    /* Scroll to top of content page on navigation, smooth scroll if same url navigation */
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd),
      pairwise(),
      startWith('Initial call'),
      takeUntil(this.destroyed)
    ).subscribe((events: any) => { 
        if(events[0].url === events[1].url) { // Same page navigation
          this.content.nativeElement.querySelector('.scroll')!.scrollIntoView({ 
            behavior: 'smooth' 
          })
        }
        else { // New Page
          this.content.nativeElement.scrollTop = 0;
        }
    });

  }

  ngOnDestroy(): void {
    this.destroyed.next(true);
    this.destroyed.complete();
  }

}
