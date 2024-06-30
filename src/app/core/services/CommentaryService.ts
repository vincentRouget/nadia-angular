import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Commentary } from '../../features/models/commentary.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentaryService {

  constructor(private http: HttpClient) { }

  // Récupérer les données
  public getAllComments(): Observable<Commentary[]> {
    return this.http.get<Commentary[]>(`${environment.apiBaseUrl}/commentary`);
  }

  // Trier les commentaires par date et heure du plus récent au plus ancien
  public sortCommentsByDateTime(comments: Commentary[]): Commentary[] {
    return comments.sort((a, b) => {
      const dateTimeA = new Date(a.date).getTime();
      const dateTimeB = new Date(b.date).getTime();
      return dateTimeB - dateTimeA; // Trie par ordre décroissant (plus récent au plus vieux)
    });
  }

  private isValidISOString(dateString: string): boolean {
    const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/;
    return isoRegex.test(dateString);
  }

  // Formater les dates
  public formatDate(dateString: string): string {
    if (!this.isValidISOString(dateString)) {
      console.error('Invalid date string:', dateString);
      return ''; // Ou une valeur par défaut appropriée
    }

    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      // second: 'numeric',
      hour12: false // Utiliser le format 24 heures
    };
    return new Intl.DateTimeFormat('fr-FR', options).format(date);
  }

  // Envoyer un nouveau commentaire
  public writeCommentary(commentary: Commentary): Observable<Commentary> {
    return this.http.post<Commentary>(`${environment.apiBaseUrl}/commentary`, commentary);
  }
}
