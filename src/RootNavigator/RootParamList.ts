import {Routes} from '../types/type';

export type RootParamList = {
  [Routes.welcomeScreen]: undefined;
  [Routes.enterCompanyIdScreen]: undefined;
  [Routes.pickVoiceScreen]: {shouldNavigateBack: boolean};
  [Routes.mainScreen]: undefined;
  [Routes.voiceBotScreen]: undefined;
  [Routes.settingsScreen]: undefined;
  [Routes.setCompanyIdScreen]: undefined;
};
