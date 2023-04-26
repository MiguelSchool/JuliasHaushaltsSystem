import { FileHandle } from '../../../../shared/model/FileHandle';

export type BaseEntity = {
  id:number;
  createdDate: Date
  updatedDate: Date;
}

export type MasterData = {
  username:string;
  email:string,
  address: Address;
  password: string;
  firstName:string;
  lastName:string;
  image:FileHandle | undefined;
}

export type Address = {
  street: string,
  streetNumber: string,
  zCode: string,
  city: string
} & BaseEntity;

export type Profile = MasterData & BaseEntity;

export type Authority = {
  authority:string
}

export type ProfileDto = {
  id:number,
  createdDate: number[],
  updatedDate: number[],
  active:boolean,
  firstName:string,
  lastName:string,
  email:string,
  username:string,
  password:string,
  image:string | undefined,
  role: string,
  tokens: string[] ,
  enabled:boolean,
  credentialsNonExpired:boolean,
  accountNonExpired:boolean,
  authorities: Authority[]
  accountNonLocked:boolean,
  profileUsername: string,
  address: Address,
  socialGroups:undefined
}
