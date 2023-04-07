import { Component }    from '@angular/core';
import { CommonModule }                               from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';


const fadeInOut = trigger( 'fadeInOut', [
  state( 'show', style( {
      opacity: 7
    } ),
  ),

  state( 'disabled', style( {
      opacity: 0
    } ),
  ),
  transition( 'show => disabled', [ animate( '1s ease-out' ) ] ),
  transition( 'disabled => show', [ animate( '1s ease-in' ) ] )
] );

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './loading.component.html',
  styleUrls: [ './loading.component.scss' ],
  animations: [ fadeInOut ],
} )
export class LoadingComponent {
  isGirlShow = false;
  private interval: any;

  ngOnInit(): void {
    this.interval = setInterval( () => this.isGirlShow = !this.isGirlShow, 2000 );
  }

  ngOnDestroy(): void {
    this.interval = null;
  }
}
