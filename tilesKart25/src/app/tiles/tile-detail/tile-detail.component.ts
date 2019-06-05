import { Component, OnInit } from '@angular/core';
import { ITile } from 'src/app/itile';
import { ActivatedRoute, Router } from '@angular/router';
import { TileService } from 'src/app/tile.service';

@Component({
  selector: 'app-tile-detail',
  templateUrl: './tile-detail.component.html',
  styleUrls: ['./tile-detail.component.css']
})
export class TileDetailComponent implements OnInit {


  tile:any;

  imagePath: string = "/assets/images/";
  constructor(private activatedRoute:ActivatedRoute, private tileService:TileService,private router:Router) { }

  ngOnInit() {
  let id = +this.activatedRoute.snapshot.paramMap.get('Id');
  console.log(`parameter passed is ${id}`);

  // make a get request to the back end and get the detail of the tile and update the tile property

  this.tileService.getTile(id).subscribe((tile)=>{
      this.tile = tile;
  })
  }

  navigateBack(){
    this.router.navigate(['/tiles']);
  }

}
