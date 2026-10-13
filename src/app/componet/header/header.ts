import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Footer],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
