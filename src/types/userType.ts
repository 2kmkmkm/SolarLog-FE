export type accountType = {
  userId: string;
  password: string;
};

export type panelInfoType = {
  modelName: string;
  maker: string;
  serialNum: string;
};

export type panelDetailInfoType = {
  capability: number;
  leftLife: number;
}

export type panelType = panelInfoType & panelDetailInfoType;

export type installationInfoType = {
  installDate: string;
  installLocation: string;
  initialPower: number | string;
};

