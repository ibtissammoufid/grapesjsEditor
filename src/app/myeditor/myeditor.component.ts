import { Component, OnInit } from '@angular/core';
import grapesjs from 'grapesjs';
import 'grapesjs-preset-webpage';
import { ExportService } from '../services/export.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myeditor',
  templateUrl: './myeditor.component.html',
  styleUrls: ['./myeditor.component.css']
})
export class MyeditorComponent implements OnInit {

  

  constructor(private exportService: ExportService,  private router: Router) { }
  editor = null;
  mytext: any;
  myjson: any;


  ngOnInit(): void {
    this.editor = grapesjs.init({
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: '#gjs',
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      fromElement: true,
      // Size of the editor
      height: '500px',
      width: 'auto',
      // Disable the storage manager for the moment
      storageManager: false,
      // Avoid any default panel
      //panels: { defaults: [] },

      //Bootsrap
      plugins: ['grapesjs-blocks-bootstrap4'],
      pluginsOpts: {
        'grapesjs-blocks-bootstrap4': {
          blocks: {
            
          },
          blockCategories: {
            // ...
          },
          labels: {
            // ...
          },
          // ...
        }
      },
      canvas: {
        styles: [
          'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
        ],
        scripts: [
          'https://code.jquery.com/jquery-3.3.1.slim.min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
          'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'
        ],
      },
      
      //Blocks
      blockManager: {
        appendTo: '#blocks',
        blocks: [
          {
            id: 'section', // id is mandatory
            label: '<b>Section</b>', // You can use HTML/SVG inside labels
            attributes: { class:'gjs-block-section' },
            content: `<section>
              <h1>This is a simple title</h1>
              <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
            </section>`,
          }, {
            id: 'text',
            label: 'Text',
            content: '<div data-gjs-type="text">Insert your text here</div>',
          }, {
            id: 'image',
            label: 'Image',
            // Select the component once it's dropped
            select: true,
            // You can pass components as a JSON instead of a simple HTML string,
            // in this case we also use a defined component type `image`
            content: { type: 'image' },
            // This triggers `active` event on dropped components and the `image`
            // reacts by opening the AssetManager
            activate: true,
          }, {
            id: 'input',
            label: 'Input',
            content: `<div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">@</span>
            </div>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
          </div>`,
          },
           {
            id: 'list',
            label: 'List',
            content: '<button class="btn btn-primary">Send</button>',
          },
          {
            id: 'card',
            label: 'Card',
            content:`<div class="card" style="width: 18rem;">
            <img class="card-img-top" src=".../100px180/" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`,
          }

        ]
      },


      
    }); //here
    this.editor.Panels.addPanel({
      id: 'panel-top',
      el: '.panel__top',
    });

    //
    //this.editor.setComponents([{"tagName":"section","components":[{"tagName":"h1","type":"text","components":[{"type":"textnode","content":"This is a simple titlegfd"}]},{"type":"text","components":[{"type":"textnode","content":"This is just a Lorem text: Lorem ipsum dolor sit amet"}]}]}]);
    //


    this.editor.Panels.addPanel({
      id: 'basic-actions',
      el: '.panel__basic-actions',
      buttons: [
        {
          id: 'visibility',
          active: true, // active by default
          className: 'btn-toggle-borders',
          label: '<u>B</u>',
          command: 'sw-visibility', // Built-in command
        }, {
          id: 'export',
          className: 'btn-open-export',
          label: 'Exp',
          command: 'export-template',
          context: 'export-template', // For grouping context of buttons from the same panel
        }, {
          id: 'show-json',
          className: 'btn-show-json',
          label: 'JSON',
          context: 'show-json',
          command(editor) {
            editor.Modal.setTitle('Components JSON')
              .setContent(`<textarea style="width:100%; height: 250px;">
                ${JSON.stringify(editor.getComponents())}
              </textarea>`)
              .open();
              //this.mytext=JSON.stringify(editor.getComponents());
              this.mytext='test';

          },
        },
        {
          id: 'show-json-css',
          className: 'btn-show-json-css',
          label: 'JSON-css',
          context: 'show-json-css',
          command(editor) {
            editor.Modal.setTitle('Components JSON css')
              .setContent(`<textarea style="width:100%; height: 250px;">
                ${JSON.stringify(editor.getStyle())}
              </textarea>`)
              .open();
              //this.mytext=JSON.stringify(editor.getComponents());
              this.mytext='test';

          },
        }
      ],
    });
    
   
  }

  export(){
    this.mytext=JSON.stringify(this.editor.getComponents());
    this.myjson=JSON.stringify(this.editor.getStyle());
    //this.mytext='test';
    this.exportService.mytext=this.mytext;
    this.exportService.myjson=this.myjson;
  }
  preview(){
    this.mytext=JSON.stringify(this.editor.getComponents());
    this.myjson=this.editor.getComponents();
    //this.mytext='test';
    this.exportService.mytext=this.mytext;
    this.exportService.myjson=this.myjson;
    this.router.navigate(['/preview']);
  }

 
}
