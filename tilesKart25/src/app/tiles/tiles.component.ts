import { Component, OnInit } from '@angular/core';
import { ITile } from '../itile';
import { TileService } from '../tile.service';
// import { ITile } from '../itile';



@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {

  imagePath: string = "/assets/images/";
  filterOptions: Array<string> = ["name", "model", "price"];
  filterText:string;
  selectedFilter:string;
  filteredTiles:Array<any>;
  tiles:Array<any>;
    
 
  constructor(private tileService:TileService) {
    
   }

   ngOnInit(){
    this.tileService.getTiles().subscribe((tiles)=>
    {
        this.tiles = tiles;
        this.filteredTiles = this.tiles;
    }
    );
 
   }

  filter() {
    console.log(this.selectedFilter);
    console.log(this.filterText);
    this.filteredTiles =  this.performFilter(this.selectedFilter, this.filterText, this.tiles);
    console.log(this.filteredTiles);
  }

  performFilter(filterOption,filterText,tileArray){
    let fTiles = tileArray.filter((tile:ITile)=>{
      let isMatch = false;
     if(tile.name.startsWith(this.filterText)){
       isMatch = true;
     }
     return isMatch;
    });
    return fTiles;
  }


 

  

}
