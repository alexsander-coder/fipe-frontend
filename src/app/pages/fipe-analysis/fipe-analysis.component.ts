import { Component, OnInit } from '@angular/core';
import { FipePublicService } from '../../services/fipe-public.service';
import { FipeBackendService } from '../../services/fipe-backend.service';

@Component({
  selector: 'app-fipe-analysis',
  templateUrl: './fipe-analysis.component.html'
})
export class FipeAnalysisComponent implements OnInit {

  marcas: any[] = [];
  modelos: any[] = [];

  brandId!: string;
  modelId!: string;

  resultado: any[] = [];

  constructor(
    private fipePublic: FipePublicService,
    private fipeBackend: FipeBackendService
  ) { }

  ngOnInit(): void {
    this.fipePublic.listarMarcas().subscribe(data => this.marcas = data);
  }

  carregarModelos(): void {
    this.fipePublic.listarModelos(this.brandId)
      .subscribe(res => this.modelos = res);
  }

  analisar(): void {
    this.fipeBackend.analisar(this.brandId, this.modelId)
      .subscribe(res => this.resultado = res);
  }
}
