import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  LoginState: {
    selectId: model => model.id
  },
  ToastMessage: { },
  Profile: {
    selectId: model => model.id
  }
};

const pluralNames = {  };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
