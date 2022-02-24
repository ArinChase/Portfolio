import { Directive, Input, Optional } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Directive({
  selector: '[externalLink]'
})
export class ExternalLinkDirective {

  @Input() externalLink: string = ''

  constructor(@Optional() private link: RouterLinkWithHref) { 
    if (!link) {
      return;
    }
    const onClick = link.onClick;

    // Replace method with your own (I know this is not good idea)
    link.onClick = (...args: any) => {
      if (this.externalLink) {
        // Process external url
        window.open(this.externalLink, '_blank');
        return false;
      } else {
        // Process internal url by calling routerLink original method
        return onClick.apply(link, args);
      }
    }
  }

}
