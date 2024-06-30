import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { Commentary } from '../../features/models/commentary.model';
import { CommentaryService } from '../../core/services/CommentaryService';

@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.css'],
})
export class CommentaryComponent implements OnInit {

  allComments: Commentary[] = [];
  isLimited: boolean = true;
  currentUrl: string = '';

  constructor(
    private commentaryService: CommentaryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadComments();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentUrl = this.router.url;
      if (currentUrl === '/commentaires') {
        window.scrollTo(0, 0);
      }
    });
  }

  loadComments(): void {
    this.commentaryService.getAllComments().subscribe(
      (data: Commentary[]) => {
        const sortedComments = this.commentaryService.sortCommentsByDateTime(data);
        this.allComments = sortedComments.map(comment => ({
          ...comment,
          date: this.commentaryService.formatDate(comment.date)
        }));
      },
      (error: any) => {
        console.error('Error fetching comments:', error);
      }
    );
  }

  showLimitedComments(): boolean {
    // Récupère l'URL actuelle
    const currentUrl = this.router.url;

    // Vérifie si l'URL est '/commentaires'
    return currentUrl !== '/commentaires';
  }
}
