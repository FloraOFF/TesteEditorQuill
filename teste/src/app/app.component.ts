import { Component, OnInit, ViewChild } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { ComponentService } from './service/component.service';
import { content } from './model/content';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor (private servico: ComponentService) {}
  
  ngOnInit(): void {
    console.log (this.get());
  }

  registro: content[] = [];

  title = 'teste';
  @ViewChild('editor') editor: any;

  data = {
    content: ''
  };

  name = 'Angular';
  editorText = '';

  changedEditor(event: EditorChangeContent | EditorChangeSelection) {
    console.log('Editor mudou ', event);
    this.editorText = event['editor']['root']['innerHTML'];
  }

  saveContent(): void {
    // this.servico.save(this.registro).subscribe({complete: () => {console.log (this.registro)}});
    // Aqui você pode fazer algo com o conteúdo do editor
    console.log('Conteúdo salvo:', this.data.content);
  }

  get(): void {
    this.servico.get().subscribe({
      next: (resposta: content[]) => {
        this.registro = resposta;
        console.log (this.registro);
      }
    })
  }

  modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
  
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
  
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
  
      ['clean'],                                         // remove formatting button
  
      ['link', 'image', 'video']                         // link and image, video
    ]
  };
}


