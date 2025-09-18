import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import 'reveal.js/plugin/highlight/monokai.css';

import { Component } from '@angular/core';

import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight/highlight';
import Markdown from 'reveal.js/plugin/markdown/markdown';
import Notes from 'reveal.js/plugin/notes/notes';

@Component({
  selector: 'app-slides',
  imports: [],
  standalone: true,
  template: `
  
<div class="reveal">
  <div class="slides">
    <section data-background-color="#FAB">
      slides works!
    </section>
  </div>
  <div>
  `,
  styleUrl: './slides.css'
})
export class Slides {
  deck!: Reveal.Api;

  ngOnInit(): void {
    this.deck = new Reveal({
      autoAnimateEasing: "ease-out",
      autoAnimateDuration: 1,
      autoAnimateUnmatched: false,
      hash: true,
      controls: true,
      progress: true,
      //showNotes: showNotes ? 'separate-page' : false
    });
    // Reveal.configure({ showNotes: true });
    this.deck.initialize({
      plugins: [Markdown, Highlight, Notes],
    });
  }

}
