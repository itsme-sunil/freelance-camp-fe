import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
})

export class DocumentsComponent {
  pageTitle: string = "Document Dashboard";
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "does this work??",
      file_url: "file.com",
      updated_at: new Date().toDateString(),
      image_url: "image.com",
    },
    {
      title: "My Second Doc",
      description: "OMG yes it does!",
      file_url: "file.com",
      updated_at: new Date().toDateString(),
      image_url: "image.com",
    },
    {
      title: "My Third Doc",
      description: "boss man 😎",
      file_url: "file.com",
      updated_at: new Date().toDateString(),
      image_url: "image.com",
    },
  ];
}