import { Component } from '@angular/core';
import { ChisteService } from '../chiste.service';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  chistes: any ;
  categorias: any =[];
  constructor(private chisteService: ChisteService,private categoriasService: CategoriasService) {}
  ngOnInit() {
    this.chisteService.chistes().subscribe((data) => {
      this.chistes = data;
      console.log(this.chistes);
    });
    this.categoriasService.categorias().subscribe((data) => {
      this.categorias = data;
      console.log(this.categorias);
  });
}
}
