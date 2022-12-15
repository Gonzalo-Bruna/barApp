import {Component} from '@angular/core';
import { AppService } from '../_services/app.service';
import { mesa } from '../_classes/mesa';

@Component(
{
    templateUrl: './cmesa.html',
    styleUrls: ['./cmesa.scss']
})

export class cmesa {
  datos:Array<mesa>=[];
  correct: boolean = false;
  selected:number = 0
  constructor(public BackEnd:AppService) {}
  ngOnInit(): void
  {
      this.BackEnd.getMesas().subscribe(mesas=>{
        for(let i=0; i<mesas.length ;i++)
        {
          this.datos.push(mesas[i]);
        }
      });
  }

  public selectMesa(event:any)
  {
    this.correct = false;
    this.selected =(event.target.value);
    console.log(this.selected);
  }

  public setMesaStatus()
  {
    if(!this.selected){
      return;
    }
    this.BackEnd.mod_mesaStatus(this.selected).subscribe({next: (value: any) =>
    {
      this.correct = true;
      this.datos[this.selected-1].status = false;
      this.selected = 0;
    }});
  }
}