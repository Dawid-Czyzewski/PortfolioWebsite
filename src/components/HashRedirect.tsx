'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const HASH_ROUTE_MAP: Record<string, string> = {
  '#/': '/',
  '#/about': '/about',
  '#/contact': '/contact',
  '#/projects': '/projects',
  '#/korepetycje': '/korepetycje',
  '#/korepetycje/programowanie': '/korepetycje/programowanie',
  '#/polityka-prywatnosci': '/polityka-prywatnosci',
  '#/project/ankietDev': '/project/ankietDev',
  '#/project/neoCasino': '/project/neoCasino',
  '#/project/devLink': '/project/devLink',
  '#/project/trackerPro': '/project/trackerPro',
  '#/project/aniaBeauty': '/project/aniaBeauty',
  '#/project/pirateHero': '/project/pirateHero',
  '#/project/evently': '/project/evently',
};

const HashRedirect = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash.startsWith('#/')) return;

    const experienceMatch = hash.match(/^#\/experience\/([^/?#]+)/);
    if (experienceMatch) {
      router.replace(`/experience/${experienceMatch[1]}`);
      return;
    }

    const nextPath = HASH_ROUTE_MAP[hash] ?? HASH_ROUTE_MAP[hash.split('?')[0]];
    if (nextPath && nextPath !== pathname) {
      router.replace(nextPath);
    }
  }, [pathname, router]);

  return null;
};

export default HashRedirect;
