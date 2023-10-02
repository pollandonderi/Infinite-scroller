import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-infinitescroll',
  templateUrl: './infinitescroll.component.html',
  styleUrls: ['./infinitescroll.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InfinitescrollComponent implements OnInit {
 ngOnInit():void{
const scrollers =  document.querySelectorAll(".scroller");
if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
  addAnimation()
}

function addAnimation(){
  scrollers.forEach(scroller => {
    scroller.setAttribute('data-animated', true.toString());
  })
}
  
 }
}
