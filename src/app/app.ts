import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/components/layout/header/header";
import { Sidebar } from "./shared/components/layout/sidebar/sidebar";
import { Footer } from "./shared/components/layout/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Sidebar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularProject');
}
