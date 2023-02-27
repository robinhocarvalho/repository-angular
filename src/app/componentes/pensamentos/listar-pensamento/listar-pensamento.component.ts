import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [
    // {
    //   id: 1,
    //   conteudo: 'Passo informações para componente filho.',
    //   autoria: 'Componente pai',
    //   modelo: 'modelo3'
    // },
    // {
    //   id: 2,
    //   conteudo: 'Minha propriedade é decorada com @Input()',
    //   autoria: 'Componente filho',
    //   modelo: 'modelo2'
    // },
    // {
    //   id: 3,
    //   conteudo: 'Você pode gerar um aplicativo a partir do seu código Angular usando o framework Ionic, NativeScript, Cordova, Capacitor e Electron. Isso permitirá que seja possível criar aplicativos móveis híbridos usando tecnologias web, como HTML, CSS e JavaScript. A escolha da plataforma depende das necessidades do projeto, das habilidades da equipe de desenvolvimento e dos requisitos de desempenho e escalabilidade.',
    //   autoria: 'chatGPT',
    //   modelo: 'modelo1'
    // },
  ]

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {

    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })

  }

}
