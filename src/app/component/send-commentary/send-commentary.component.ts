import { Component } from '@angular/core';
import { Commentary } from '../../features/models/commentary.model';
import { CommentaryService } from '../../core/services/CommentaryService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-commentary',
  templateUrl: './send-commentary.component.html',
  styleUrls: ['./send-commentary.component.css']
})

export class SendCommentaryComponent {

  newCommentary: Commentary = { id: 0, date: '', content: '' };
  date: string = "";
  content: string = "";
  restCharacter: number = 3000;

  constructor(
    private commentaryService: CommentaryService,
    private router: Router
  ) { };

  ngOnInit(): void {
    this.date = this.getFormattedDateTime();
    window.scrollTo(0, 0);
  };

  private getFormattedDateTime(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const hours = today.getHours().toString().padStart(2, '0');
    const minutes = today.getMinutes().toString().padStart(2, '0');
    const seconds = today.getSeconds().toString().padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  };

  onContentChange(event: any): void {
    this.restCharacter = 3000 - event.target.value.length;
  };

  public sendCommentary(): void {
    this.newCommentary.date = this.date;
    this.newCommentary.content = this.content;
    if (this.content !== '') {
      this.commentaryService.writeCommentary(this.newCommentary).subscribe(
        (response: Commentary) => {
          console.log('Commentary sent successfully', response);
          this.router.navigateByUrl('/');
        },
        (error: any) => {
          console.error('Error sending commentary', error);
        }
      );
    }
  };
}
