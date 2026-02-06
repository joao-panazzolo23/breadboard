import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, of } from 'rxjs';
import {ThemeConfig} from '../interfaces/theme-config';



@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly STORAGE_KEY = 'app-theme';
  private readonly API_URL = '/api/theme';

  constructor(private http: HttpClient) {}

  init() {
    const saved = this.loadFromCache();

    if (saved) {
      this.applyTheme(saved);
    }

    this.loadFromBackend().subscribe();
  }

  private loadFromBackend() {
    return this.http.get<ThemeConfig>(this.API_URL).pipe(
      tap(theme => {
        this.applyTheme(theme);
        this.saveToCache(theme);
      })
    );
  }

  applyTheme(theme: ThemeConfig) {
    const root = document.documentElement;

    root.style.setProperty('--primary', theme.primary);
    root.setAttribute('data-theme', theme.mode);
  }

  /** Dark/Light manual */
  toggleMode() {
    const current = this.loadFromCache();

    const mode = current?.mode === 'dark' ? 'light' : 'dark';

    const newTheme: ThemeConfig = {
      primary: current?.primary ?? '#2563eb',
      mode
    };

    this.applyTheme(newTheme);
    this.saveToCache(newTheme);
  }

  /** Cache */
  private saveToCache(theme: ThemeConfig) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(theme));
  }

  private loadFromCache(): ThemeConfig | null {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  }

  reset() {
    const fallback: ThemeConfig = {
      primary: '#2563eb',
      mode: 'light'
    };

    this.applyTheme(fallback);
    this.saveToCache(fallback);
  }
}
