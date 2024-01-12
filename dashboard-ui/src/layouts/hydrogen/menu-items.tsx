import { routes } from '@/config/routes';
import {
  PiHeadsetDuotone,
  PiPackageDuotone,
  PiChartBarDuotone,
  PiFileImageDuotone,
  PiCreditCardDuotone,
  PiFolderLockDuotone,
  PiCalendarPlusDuotone,
  PiEnvelopeDuotone,
} from 'react-icons/pi';

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  // label start
  {
    name: 'Home',
  },
  // label end
  {
    name: 'Dashboard',
    // href: '/',
    href: routes.landord.home.dashboard,
    icon: <PiFileImageDuotone />,
  },
  {
    name: 'Message',
    href: routes.landord.home.message,
    icon: <PiEnvelopeDuotone />,
  },
  {
    name: 'Properties',
    href: routes.landord.home.properties,
    icon: <PiPackageDuotone />,
  },
  {
    name: 'Mainteance',
    href: routes.landord.home.mainteance,
    icon: <PiHeadsetDuotone />,
  },
  {
    name: 'Leases',
    href: routes.landord.home.leases,
    icon: <PiChartBarDuotone />,
  },

  // label start
  {
    name: 'RENTERS',
  },
  // label end
  {
    name: 'Leads',
    href: routes.landord.renter.leads,
    icon: <PiFileImageDuotone />,
  },
  {
    name: 'Applicants',
    href: routes.landord.renter.applicants,
    icon: <PiCalendarPlusDuotone />,
  },
  {
    name: 'Tenants',
    href: routes.landord.renter.tenants,
    icon: <PiCalendarPlusDuotone />,
  },
  // label start
  {
    name: 'FINANCIAL',
  },
  // label end
  {
    name: 'Payments',
    href: routes.landord.financial.payments,
    icon: <PiCalendarPlusDuotone />,
  },
  {
    name: 'Expanses',
    href: routes.landord.financial.expanses,
    icon: <PiCalendarPlusDuotone />,
  },
  {
    name: 'Accounting',
    href: routes.landord.financial.accounting,
    icon: <PiCalendarPlusDuotone />,
  },
  // label start
  {
    name: 'RESOURCES',
  },
  // label end
  {
    name: 'Toolbox',
    href: routes.landord.resources.toolbox,
    icon: <PiFolderLockDuotone />,
  },
  {
    name: 'Educations',
    href: routes.landord.resources.educations,
    icon: <PiCreditCardDuotone />,
  },
  {
    name: 'Need Help',
    href: routes.landord.resources.support,
    icon: <PiCreditCardDuotone />,
  }
];
