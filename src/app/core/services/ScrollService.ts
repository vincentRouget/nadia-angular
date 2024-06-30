import { Directive, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Directive({
    selector: '[appScrollToTop]'
})
export class ScrollToTopDirective {

    constructor(private router: Router) { }

    @HostListener('window:popstate', ['$event'])
    onPopState(event: Event): void {
        window.scrollTo(0, 0); // Faire défiler vers le haut lors de la navigation précédente
    }

    @HostListener('window:scrollToTop', ['$event'])
    onScrollToTop(event: Event): void {
        window.scrollTo(0, 0); // Faire défiler vers le haut lors de la navigation
    }

    @HostListener('document:click', ['$event'])
    onClick(event: MouseEvent): void {
        if (event.target instanceof HTMLAnchorElement) {
            const anchor = event.target as HTMLAnchorElement;
            if (anchor.getAttribute('href') === '#' || anchor.getAttribute('href')?.startsWith('#/')) {
                event.preventDefault();
                this.router.navigateByUrl(anchor.getAttribute('href') ?? '');
                window.scrollTo(0, 0); // Faire défiler vers le haut lors de la navigation
            }
        }
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll(event: Event): void {
        // Vous pouvez capturer l'événement de défilement ici si nécessaire
    }
}
