import { Injectable }                                                          from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { ToastMessage }                                                        from '../model/ToastMessage';

@Injectable( {
  providedIn: 'root'
} )
export class ToastMessageCollectionServiceService extends EntityCollectionServiceBase<ToastMessage> {

  constructor( private entityCollectionServiceElementsFactory: EntityCollectionServiceElementsFactory ) {
    super( 'ToastMessage', entityCollectionServiceElementsFactory );
  }
}
