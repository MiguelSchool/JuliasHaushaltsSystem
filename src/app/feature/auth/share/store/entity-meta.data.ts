import { EntityMetadataMap } from '@ngrx/data';

export const entityMetaData: EntityMetadataMap = {
  LoginState: {
    selectId: model => model.id
  }
};
