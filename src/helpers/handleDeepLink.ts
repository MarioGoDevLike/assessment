import {constants} from '../config/contants';
import {navigationRef} from '../RootNavigator/RootNavigator';
import {Routes} from '../types/type';

export const handleDeepLink = (url: string) => {
  const path = url.replace(constants.deepLinkPrefix, '');

  const waitForNavigationReady = async () => {
    while (!navigationRef.isReady()) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  };

  waitForNavigationReady().then(() => {
    if (path === 'set_company_id') {
      navigationRef.navigate(Routes.setCompanyIdScreen as never);
    } else {
      console.warn(`Unhandled deep link path: ${path}`);
    }
  });
};
